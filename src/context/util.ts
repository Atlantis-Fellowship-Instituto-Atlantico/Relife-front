import { api } from "../services/api";
import { IUserData } from './types';

// export async function LoginRequest(email: string, password: string) {

// 	try {
// 		const response = await api.post("/login", {
// 			email,
// 			password,
// 		});

// 		// console.log(response.data);

// 		return response.data;

// 	} catch (error) {
// 		return null;
// 	}
// }


export async function setUserLocalStorage(user: IUserData | null) {
	localStorage.setItem("u", JSON.stringify(user));
}


export async function getUserLocalStorage() {
	const json = localStorage.getItem("u");
	if (!json) {
		return null;
	}

	const user = JSON.parse(json);

	return user ?? null;

}
