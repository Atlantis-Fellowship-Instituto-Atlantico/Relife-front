import React, { Children } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import { FormLogin } from '../../screens/Content/components/FormLogin/Index';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {

	// const navigate = useNavigate()

	const auth = useAuth()

	if (!auth.email) {
		return (
			<FormLogin />
		)
	}

	// else if (auth.email && auth.role === "ADMIN") {
	// 	return (
	// 		navigate("/dashboard/admin")
	// 	)
	// }


	return children

}
