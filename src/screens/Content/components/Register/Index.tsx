
import { Box } from "@mui/material";
import { Form } from "./components/Form/Index";
import { HeaderRegister } from "./components/Header/Index";
import "./style.css"
import Desenho from "../../../../assets/register-desenho.svg"
export default function FormRegister() {


	return (
		<Box className="container-register">
			<HeaderRegister />
			<Box className="register-form">
				<Form />
				<img src={Desenho} alt="Médico sorrindo" className='img-desenho-register' />
			</Box>
		</Box>

	);
}
