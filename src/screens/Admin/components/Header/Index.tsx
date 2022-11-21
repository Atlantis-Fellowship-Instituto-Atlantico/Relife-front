import { Box } from "@mui/material";
import Profile from "../../../../assets/profile.svg";
import "./style.css";

export const Header = () => {
	return (
		<section className="header-menu-left">
			<Box className="image-profile">
				<img src={Profile} alt="usuário" />
			</Box>
			<Box className="text-menu-left">
				<h1>Bem vindo, Lucas</h1>
				<h3>Admin</h3>
			</Box>
		</section>
	)
}
