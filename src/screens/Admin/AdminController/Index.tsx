import React from "react";

import "./style.css";


import { Box } from "@mui/system";
import { Header } from "../components/Header/Index";
import { ProgressBar } from "../components/ProgressBar/Index";
import { Aside } from "../components/Aside/Index";
import { useAuth } from '../../../context/useAuth';

function AdminController() {

	const auth = useAuth()

	return (
		<Box className="body">
			<Box className="content">
				<Box className="submenu">
					<Header role="Admin" name={auth.email} />
					<ProgressBar />
				</Box>
				<Aside subTitleOne="Admin" subTitleTwo="Adicionar instituição" />
			</Box>
		</Box>
	);
}

// 			<Link to="/cadastro/instituicao">
// <Link to="/editar/instituicao:id">

export default AdminController;
