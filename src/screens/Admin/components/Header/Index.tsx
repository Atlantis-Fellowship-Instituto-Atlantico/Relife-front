import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Profile from "../../../../assets/profile.svg";
import ModalButton from "../Modal/Index";
import "./style.css";
interface Props {
	sex?: string
	name?: string
	role?: string

}


export const Header = ({ sex, name, role = "Usuário" }: Props) => {




	return (
		<section className="header-menu-left">
			<Box className="image-profile">
				<img src={Profile} alt="usuário" />
				<Box className="text-menu-left">
					<h1>{sex === "Feminino" ? "Bem vinda" : " Bem vindo"}, {name}</h1>
					<h3>{role}</h3>
				</Box>
			</Box>

			<ModalButton />
		</section>
	)
}
