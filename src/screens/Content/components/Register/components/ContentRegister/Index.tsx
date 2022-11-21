
import { Box } from "@mui/material";
// import { Form } from "./components/Form/Index";
import "./style.css"
import Desenho from "../../../../../../assets/register-desenho.svg"
import { HeaderRegister } from "../Header/Index";

interface Props {
	height: string
	top: string,
}
//
export default function ContentRegister({ height, top }: Props) {


	return (
		<Box className="container-register" sx={{ height: height }} >
			<HeaderRegister />
			<Box className="register-form">
				<img src={Desenho} alt="Médico sorrindo" className='img-desenho-register' style={{ top: top }} />
			</Box>
		</Box >

	);
}
