
import { Box } from "@mui/system";
import { Header } from "../components/Header/Index";
import { Aside } from "../components/Aside/Index";
import TableContent from "../components/table/Index";
import "./style.css";
import { useEffect, useState } from "react";
import { User } from "../../../Types/User";
import { api } from "../../../services/api";
import { ButtonFilter } from "../components/table/components/ButtonFilter/Index";
import { Skeletons } from "./Skeleton";

function InstitutionController() {
	const [user, setUser] = useState<Array<User>>();
	const [loading, setLoading] = useState<boolean>();
	const [search, setSearch] = useState('');


	useEffect(() => {
		api
			.get("/users")
			.then((response: any) => {
				setUser(response.data)
				setLoading(true)
			})
			.catch((err: any) => {
				console.error("ops! ocorreu um erro" + err);
				setLoading(false)

				// <p>CPF não cadastrado</p>
			});
	}, []);


	const filterUser = user?.filter(user => user.cpf?.startsWith(search));
	const filterButtonAll = user?.filter(user => user.mother_name?.includes("") || user.blood_type?.includes(""))

	console.log(filterButtonAll)

	// function handleOnSubmit(event) {
	// 	const results = user.filter(user => book.title.toLowerCase().indexOf(search) !== -1);
	// 	props.setBooks(results);
	// }


	return (
		<Box className="body">
			<Box className="content">
				<Box className="submenu">
					<Header role="Instituição" />
					<ButtonFilter placeholder="Digite o CPF do usuário" isInputActive={true} buttonOne="Todos" buttonTwo="Pendentes" buttonTree="Usuários associados" valueInput={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} onClickButtonTwo={() => filterButtonAll} />
					{!loading ? <Skeletons /> : <TableContent header={{ name: "Nome", t2: "CPF" }} user={filterUser} />}
				</Box>
				<Aside subTitleOne="Home" subTitleTwo="Informações dos usuários" isIconActive={false} />
			</Box>
		</Box>
	);
}

export default InstitutionController;
