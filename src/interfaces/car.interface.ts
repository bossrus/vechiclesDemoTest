import type { IPhoto } from '@/interfaces/photo.interface';

export interface ICar {
	id: number;
	user_id: number;
	company_id: number;
	angles_count: number;
	vin: string;
	vin_postfix: any;
	vehicle_name: string;
	brand: any;
	model: any;
	body_type: any;
	fuel_type: any;
	hp: any;
	ccm: any;
	description: any;
	moderated: boolean;
	defect_state: string;
	placeholder: string;
	preview: string;
	photo: IPhoto;
	photos_count: number;
	uploads: number;
	created_at: number;
}
