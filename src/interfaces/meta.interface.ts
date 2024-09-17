import type { IMetaLink } from '@/interfaces/metaLinks.interface';

export interface IMeta {
	current_page: number;
	from: number;
	last_page: number;
	links: IMetaLink[];
	path: string;
	per_page: string;
	to: number;
	total: number;
}
