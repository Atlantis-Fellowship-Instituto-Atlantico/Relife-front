import axios from "axios";
import { getUserLocalStorage } from "../context/util";

export const api = axios.create({
	baseURL: " http://localhost:3333"

});

// api.interceptors.request.use(
// 	(config) => {
// 		const user = getUserLocalStorage()

// 		config.headers?.common['Authorization'] = user.token;

// 		return config;
// 	},
// 	(error) => {
// 		return Promise.reject(error)
// 	}
// )
