import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Profile from "../../../../assets/profile.svg";
import ModalButton from "../Modal/Index";
import "./style.css";

export const Header = () => {
	return (
		<section className="header-menu-left">
			<Box className="image-profile">
				<img src={Profile} alt="usuário" />
				<Box className="text-menu-left">
					<h1>Bem vindo, Lucas</h1>
					<h3>Admin</h3>
				</Box>
			</Box>

			<ModalButton />
		</section>
	)
}
