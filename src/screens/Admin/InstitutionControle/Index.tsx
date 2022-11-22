
import { Box } from "@mui/system";
import { Header } from "../components/Header/Index";
import { Aside } from "../components/Aside/Index";
import TableContent from "../components/table/Index";
import "./style.css";

function InstitutionController() {
	return (
		<Box className="body">
			<Box className="content">
				<Box className="submenu">
					<Header />
					<TableContent />
				</Box>
				<Aside />
			</Box>
		</Box>
	);
}

export default InstitutionController;
