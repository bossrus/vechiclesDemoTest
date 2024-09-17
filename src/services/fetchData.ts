import type { IAPIResponce } from '@/interfaces/apiResponce.interface';

const API_BASE_URL = 'https://api.caiman-app.de/api/cars-test';

async function fetchData(url: string): Promise<IAPIResponce> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response.json();
}

async function fetchCarsData() {
	try {
		// Первый запрос для получения метаданных
		const initialData = await fetchData(
			`${API_BASE_URL}?per_page=1&page=1`,
		);
		const {
			meta: { total: totalItems },
		} = initialData;

		// Второй запрос для получения всех элементов
		return await fetchData(`${API_BASE_URL}?per_page=${totalItems}&page=1`);
	} catch (error) {
		console.error('Error fetching cars data:', error);
		throw error;
	}
}

async function fetchCarsSearchData(searchParam: string) {
	try {
		return await fetchData(`${API_BASE_URL}?search=${searchParam}`);
	} catch (error) {
		console.error('Error fetching cars data:', error);
		throw error;
	}
}

export async function fetchCars(searchParam?: string) {
	try {
		if (searchParam) {
			return await fetchCarsSearchData(searchParam);
		} else {
			return await fetchCarsData();
		}
	} catch (error) {
		console.error('Error fetching cars data:', error);
		throw error;
	}
}
