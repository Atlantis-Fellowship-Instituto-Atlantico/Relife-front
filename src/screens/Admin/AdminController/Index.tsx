import React from "react";

import "./style.css";


import { Box } from "@mui/system";
import { Header } from "../components/Header/Index";
import { ProgressBar } from "../components/ProgressBar/Index";
import { Aside } from "../components/Aside/Index";

function AdminController() {
	return (
		<Box className="body">
			<Box className="content">
				<Box className="submenu">
					<Header />
					<ProgressBar />
				</Box>
				<Aside subTitleOne="Admin" subTitleTwo="Adicionar instituição" />
			</Box>
		</Box>
	);
}

export default AdminController;
