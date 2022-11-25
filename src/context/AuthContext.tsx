import {
	createContext,
	useEffect,
	useState,
} from "react";
import jwt_decode from 'jwt-decode'

import { api } from "../services/api";
import { IAuthProvider, IContext, ITokenInfo, IUserData } from "./types";
import { getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {


	const [user, setUser] = useState<IUserData | null>(null);
	const [userRole, setUserRole] = useState<string>('')
	console.log(userRole)

	useEffect(() => {
		const user = getUserLocalStorage();
		if (user) {
			setUser(user)
			api.defaults.headers.authorization = `Bearer ${user.tokenUser}`;
		}
	}, [])

	const handleClick = (data: string) => setUserRole(data)

	const authenticate = async (email: string, password: string) => {
		try {
			const response = await api.post("/login", {
				email,
				password,
			});


			const tokenCompleted = response.data
			const decode = jwt_decode<ITokenInfo>(tokenCompleted);

			const payload = { tokenUser: response.data, email: decode.email, role: decode.role };

			setUser(payload)
			setUserLocalStorage(payload)


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
		<AuthContext.Provider value={{ ...user, authenticate, logout, userRole, setUserRole, handleClick }}>
			{children}
		</AuthContext.Provider>
	);
};
