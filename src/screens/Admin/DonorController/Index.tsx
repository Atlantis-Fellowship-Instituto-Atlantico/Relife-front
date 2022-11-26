
import { Box } from "@mui/system";
import { Header } from "../components/Header/Index";
import { Aside } from "../components/Aside/Index";
import TableContent from "../components/table/Index";
import "./style.css";
import { useAuth } from "../../../context/useAuth";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

function DonorController() {
	const auth = useAuth()
	const navigate = useNavigate()

	const conferir = () => {

		if (auth.role === "DONOR") {
			navigate("/dashboard/doador")
		} else {
			navigate("/dashboard/receptor")
		}
	}
	//	link1="cadastro/usuario" />



	return (
		<Box className="body">
			<Box className="content">
				<Box className="submenu">
					<Header name={auth.email} />
					<TableContent />
				</Box>
				<Aside
					subTitleTwo="Editar meu dados"
					subTitleOne="Home"
					isActiveOut={false}
				/>
			</Box>
		</Box>
	);
}

export default DonorController;
