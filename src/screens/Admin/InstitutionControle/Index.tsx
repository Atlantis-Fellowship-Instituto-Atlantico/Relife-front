
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
import { useAuth } from "../../../context/useAuth";

function InstitutionController() {
	const [user, setUser] = useState<Array<User>>();

	const [loading, setLoading] = useState<boolean>();

	const [search, setSearch] = useState('');

	const [name, setName] = useState<string | undefined>('')

	const auth = useAuth();

	useEffect(() => {
		const email = auth.email
		setName(email)

	}, [auth.email])


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
	const filterButtonAll = user?.filter(user => !user.institution && !user.blood_type)
	// const filterInstitution = user?.filter(user => user.institution === )


	// console.log(name)

	return (
		<Box className="body">
			<Box className="content">
				<Box className="submenu">
					<Header role="Instituição" name={name} />
					<ButtonFilter placeholder="Digite o CPF do usuário" isInputActive={true} buttonOne="Todos" buttonTwo="Pendentes" buttonTree="Usuários associados" valueInput={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
					{!loading ? <Skeletons /> : <TableContent header={{ name: "Nome", t2: "CPF" }} user={filterUser} />}
				</Box>
				<Aside subTitleOne="Home" subTitleTwo="Informações dos usuários" isIconActive={false} />
			</Box>
		</Box>
	);
}

//onClickButtonTwo={() => filterButtonAll}

export default InstitutionController;
