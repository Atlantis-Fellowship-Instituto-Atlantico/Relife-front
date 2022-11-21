import React from "react";

import "./style.css";



import { Aside } from "./components/Aside/Index";
import { ProgressBar } from "./components/ProgressBar/Index";
import { Header } from "./components/Header/Index";
import { Box } from "@mui/system";

function Admin() {
	return (
		<Box className="body">
			<Box className="content">
				<Box className="submenu">
					<Header />
					<ProgressBar />
				</Box>
				<Aside />
			</Box>
		</Box>
	);
}

export default Admin;
