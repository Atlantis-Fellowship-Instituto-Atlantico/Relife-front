// import React, { useEffect } from 'react'
// import { AuthContext } from './AuthContext';
// import { useState } from 'react';
// import { User } from '../../Types/User';
// import { useApi } from '../../hooks/useApi';
// import { ToastContainer, toast, Flip } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
// import { Admin } from '../../Types/Admin';
// import { Institution } from '../../Types/Institution';

// interface AuthProviderProps {
// 	children: JSX.Element;
// }

// export const AuthProvider = ({ children }: AuthProviderProps) => {

// 	const [user, setUser] = useState<User | null>(null)
// 	const [admin, setAdmin] = useState<Admin | null>(null)
// 	const [institution, setInstitution] = useState<Institution | null>(null)

// 	const api = useApi();

// 	useEffect(() => {
// 		const validateToken = async () => {
// 			const storageData = localStorage.getItem('authToken');
// 			if (storageData) {
// 				const data = await api.validateToken(storageData);
// 				if (data.user || data.admin || data.institution) {
// 					setUser(data.user);
// 					setAdmin(data.admin);
// 					setInstitution(data.institution);
// 				}
// 			}
// 		}
// 		validateToken();
// 	}, [api]);

// 	const signin = async (email: string, password: string) => {

// 		const data = await api.signin(email, password);

// 		if ((data.user || data.institution || data.admin) && data.token) {
// 			toast.error(data.data.error, {
// 				position: "top-right",
// 				autoClose: 3000,
// 				hideProgressBar: true,
// 				closeOnClick: true,
// 				pauseOnHover: true,
// 				draggable: false,
// 				progress: 0,
// 				toastId: "my_toast",
// 			});
// 			console.log("certo", data)
// 			setUser(data.user);
// 			setAdmin(data.admin);
// 			setInstitution(data.institution);
// 			setToken(data.token);
// 			return true;

// 		} else {
// 			console.log(data)
// 			// toast.success(data.data.message, {
// 			// 	position: "top-right",
// 			// 	autoClose: 3000,
// 			// 	hideProgressBar: true,
// 			// 	closeOnClick: true,
// 			// 	pauseOnHover: true,
// 			// 	draggable: false,
// 			// 	progress: 0,
// 			// 	toastId: "my_toast",
// 			// });
// 			return false;
// 		}
// 	}

// 	const signout = async () => {
// 		console.log("signout está sendo executada.");
// 		setUser(null);
// 		setAdmin(null);
// 		setInstitution(null);
// 		setToken('');
// 		await api.logout();
// 	}

// 	const setToken = (token: string) => {
// 		localStorage.setItem('authToken', token);
// 	}

// 	return (
// 		<AuthContext.Provider value={{ user, admin, institution, signin, signout }}>
// 			{children}
// 		</AuthContext.Provider>
// 	)
// }

import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../Types/User";
// import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
	const [user, setUser] = useState<User | null>(null);
	const api = useApi();

	useEffect(() => {
		const validateToken = async () => {
			const storageData = localStorage.getItem('authToken');
			if (storageData) {
				const data = await api.validateToken(storageData);
				if (data.user) {
					setUser(data.user);
				}
			}
		}
		validateToken();
	}, [api]);

	const signin = async (email: string, password: string) => {
		const data = await api.signin(email, password);
		if (data.user && data.token) {
			setUser(data.user);
			setToken(data.token);
			return true;
		}
		return false;
	}

	const signout = async () => {
		console.log("signout está sendo executada.");
		setUser(null);
		setToken('');
		await api.logout();
	}

	const setToken = (token: string) => {
		localStorage.setItem('authToken', token);
	}

	return (
		<AuthContext.Provider value={{ user, signin, signout }}>
			{children}
		</AuthContext.Provider>
	);
}
