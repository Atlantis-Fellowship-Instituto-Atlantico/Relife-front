import {
	createContext,
	useCallback,
	useState,
} from "react";

import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { IAuthProvider, IContext, ITokenInfo, IUserData, TokenState } from "./types";
// import { LoginRequest } from "./util";

import jwt_decode from 'jwt-decode'
import { setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);



export const AuthProvider = ({ children }: IAuthProvider) => {


	const [user, setUser] = useState<IUserData | null>(null);


	const [token, setToken] = useState<TokenState>(() => {

		const token = localStorage.getItem("u:token");

		if (token) {
			api.defaults.headers.authorization = `Bearer ${token}`;

			return { token };
		}

		return {} as TokenState;
	});



	const authenticate = async (email: string, password: string) => {
		try {
			const response = await api.post("/login", {
				email,
				password,
			});


			const tokenCompleted = response.data
			const decode = jwt_decode<ITokenInfo>(tokenCompleted);

			const payload = { tokenUser: response.data, email: decode.email, role: decode.role };

			setToken(tokenCompleted);
			setUser(payload)
			setUserLocalStorage(payload)

			console.log(user)

			api.defaults.headers.authorization = `Bearer ${tokenCompleted}`;

			return response.data;

		} catch (error) {
			return null;
		}
	}

	const logout = () => {
		setUser(null)
		setUserLocalStorage(null)
	}



	return (
		<AuthContext.Provider value={{ ...user, token, authenticate, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
