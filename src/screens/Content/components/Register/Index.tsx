import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import "./style.css"
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Form } from "./components/Form/Index";
import { ContentImageRegister } from "../ContentImageRegister/Index";
import { HeaderRegister } from "./components/Header/Index";
import { Content } from "../../Index";

export default function FormRegister() {


	return (
		<Box className="container-register">
			{/* <HeaderRegister /> */}
			<Box>
				{/* <Form /> */}
				<ContentImageRegister />
			</Box>
		</Box>

	);
}
