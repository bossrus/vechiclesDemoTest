import { fetchCars } from '@/services/fetchData';
import { defineStore } from 'pinia';
import type { ICar } from '@/interfaces/car.interface';
import type { IStore } from '@/interfaces/store.interface';

export const useCarsStore = defineStore('cars', {
	state: (): IStore => ({
		data: [] as ICar[],
		page: 1,
		perPage: 9,
		error: null,
		isLoading: false,
		totalCars: 0,
		search: '',
		showModal: false,
	}),
	getters: {
		paginatedCars: (state): ICar[] => {
			if (state.isLoading) return [];
			const start = (state.page - 1) * state.perPage;
			const end = start + state.perPage;
			return state.data.slice(start, end);
		},
		carById:
			(state) =>
			(id: number): ICar | undefined => {
				return state.data.find((car) => car.id === id);
			},
		currentTotalCars: (state): number => {
			return state.data.length;
		},

		realPerPage: (state): number => {
			const start = (state.page - 1) * state.perPage;
			const end = start + state.perPage;
			return state.data.slice(start, end).length;
		},

		totalPages: (state): number => {
			const totalPage = Math.ceil(state.data.length / state.perPage);
			return totalPage > 0 ? totalPage : 1;
		},
	},
	actions: {
		async loadCars() {
			this.isLoading = true;
			let tempData: ICar[] = [];
			try {
				const carsData = await fetchCars(this.search);
				tempData = carsData.data
					? carsData.data.filter((car) => car.brand && car.model)
					: [];
			} catch (error) {
				this.error =
					'Error loading cars data:\n' +
					error +
					'\n\nReload Page to try again.';
			}
			if (!this.search) {
				this.totalCars = tempData.length;
			} else {
				//апи ищет не только по вину, но и по марке и модели. поэтому пришлось допиливать поиск руками.
				//по большому счёту поиск на апи вообще не нужен, и проще сразу искать в data. но пусть уж будет.
				tempData = tempData.filter((car) =>
					car.vin.toLowerCase().includes(this.search.toLowerCase()),
				);
			}
			this.data = tempData;
			this.isLoading = false;
		},
		async setPage(newPage: number) {
			await this.loadCars();
			const resPage =
				newPage >= 1 && newPage <= this.totalPages
					? newPage
					: newPage < 1
						? 1
						: this.totalPages;
			this.page = this.page !== resPage ? resPage : this.page;
			return resPage;
		},
		async setPerPage(newPerPage: number) {
			await this.loadCars();
			this.perPage = newPerPage;
		},
		setShowModal(show: boolean) {
			this.showModal = show;
		},
		async setSearch(search: string) {
			this.search = search;
			await this.loadCars();
		},
	},
});
