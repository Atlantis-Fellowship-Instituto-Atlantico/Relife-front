
import { Box } from "@mui/material";
import ContentRegister from "../components/ContentRegister/Index";
import { FormInstitution } from "./components/Form/Index";


export default function InstitutionRegister() {


	return (
		<Box className="content-main-form ">
			<ContentRegister height={"103rem"} top={"18.75rem"} link="/69ed90c76a11b9a7ee11467ef09503dbec35dbc7be84ba664a098c859416228b/admin/controle" />
			<FormInstitution />
		</Box>
	);
}
