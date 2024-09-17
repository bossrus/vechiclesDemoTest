import type { ICar } from '@/interfaces/car.interface';

export interface IStore {
	data: ICar[];
	page: number;
	perPage: number;
	error: string | null;
	isLoading: boolean;
	search: string;
	totalCars: number;
	showModal: boolean;
}
