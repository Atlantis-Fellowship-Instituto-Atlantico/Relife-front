export interface Admin {
	id: string;
	name:string;
	role: string;
	email: string;
	phone: string;
	password: string;
	isActive?: boolean;
}
