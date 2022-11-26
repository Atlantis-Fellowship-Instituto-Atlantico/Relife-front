import axios from "axios";
import { getUserLocalStorage } from "../context/util";

export const api = axios.create({
	baseURL: " http://localhost:3333"

});

// 	baseURL: " https://relife-web-service.onrender.com/"
