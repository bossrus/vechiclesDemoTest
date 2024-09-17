export interface IPhoto {
	id: number;
	car_id: number;
	angle_id: number;
	url: string;
	processed_url: string;
	status: number;
	status_name: string;
	defect_state: string;
	in_process_by_admin: number;
	created_at: number;
}
