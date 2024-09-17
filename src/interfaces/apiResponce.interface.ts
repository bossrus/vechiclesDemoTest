import type { ICar } from '@/interfaces/car.interface';
import type { INavigationLinks } from '@/interfaces/navigationLinks.interface';
import type { IMeta } from '@/interfaces/meta.interface';

export interface IAPIResponce {
	data: ICar[];
	links: INavigationLinks;
	meta: IMeta;
}
