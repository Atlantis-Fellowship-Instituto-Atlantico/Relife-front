
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import AdminController from '../../screens/Admin/AdminController/Index';
import { FormLogin } from '../../screens/Content/components/FormLogin/Index';
import { FormAdmin } from '../../screens/Content/components/Register/AdminRegister/components/Form/Index';
import { FormInstitution } from '../../screens/Content/components/Register/InstitutionRegister/components/Form/Index';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {

	const navigate = useNavigate()

	const auth = useAuth()

	if (!auth.email) {
		return (
			<FormLogin />
		)
	}


	if (auth.role === "ADMIN") {
		<>
			<AdminController />
			<FormAdmin />
			<FormInstitution />
		</>
	} else if (auth.role === "INSTITUTION") {
		navigate("/dashboard/institution")

	} else if (auth.role === "DONOR") {
		navigate("/dashboard/donor")

	} else if (auth.role === "RECEIVER") {
		navigate("/dashboard/receiver")

	} else {
		return (
			<FormLogin />
		)
	}

	return children

}
