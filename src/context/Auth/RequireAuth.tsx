import { useContext } from "react";
import { FormLogin } from "../../screens/Content/components/FormLogin/Index";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const auth = useContext(AuthContext);

	if (!auth.user || !auth.institution || !auth.admin) {
		return <FormLogin />;
	}

	return children;
}
