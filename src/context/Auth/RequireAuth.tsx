import { useContext } from "react";
import AdminController from "../../screens/Admin/AdminController/Index";
import InstitutionController from "../../screens/Admin/InstitutionControle/Index";
import { FormLogin } from "../../screens/Content/components/FormLogin/Index";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const auth = useContext(AuthContext);

	if (!auth.user) {
		return <FormLogin />;
	}
	// if (!auth.user || !auth.institution || !auth.admin) {
	// 	return <FormLogin />;
	// }

	// if (auth.institution.role === "INSTITUTION") {
	// 	return <InstitutionController />;
	// }

	// if (auth.admin.role === "ADMIN") {
	// 	return <AdminController />;
	// }

	return children;
}
