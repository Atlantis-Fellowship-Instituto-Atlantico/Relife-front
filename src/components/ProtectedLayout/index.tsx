import React from 'react'
import { useAuth } from '../../context/useAuth';

export const ProtectedLayout = () => {

	const auth = useAuth()

	if (!auth.email) {
		return (
			<div>
				<p>You are not logged in.</p>
			</div>
		)
	}


}
