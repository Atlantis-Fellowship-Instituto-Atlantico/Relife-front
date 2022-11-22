
import "./global.css"
import { Home } from './screens/Home/Index';

import { Routes, Route } from "react-router-dom";
import { FormLogin } from "./screens/Content/components/FormLogin/Index";
import { CardRegister } from './screens/Content/components/CardRegister/Index';

import FormRegisterAdmin from "./screens/Content/components/Register/AdminRegister/Index";
import { UserRegister } from "./screens/Content/components/Register/UserRegister/Index";
import InstitutionRegister from "./screens/Content/components/Register/InstitutionRegister/Index";

import InstitutionController from './screens/Admin/InstitutionControle/Index';
import AdminController from "./screens/Admin/AdminController/Index";
import { RequireAuth } from "./context/Auth/RequireAuth";



function App() {
	return (
		<div className="App">
			<Routes>

				<Route path="/" element={<Home />} />
				<Route path="/login" element={<FormLogin />} />
				<Route path="/cadastro" element={<CardRegister />} />
				<Route path="/cadastro/usuario" element={<UserRegister />} />
				<Route path="/69ed90c76a11b9a7ee11467ef09503dbec35dbc7be84ba664a098c859416228b" element={<FormRegisterAdmin />} />
				<Route path="/cadastro/instituicao" element={<InstitutionRegister />} />
				<Route path="/instituicao/controle" element={<RequireAuth><InstitutionController /></RequireAuth>} />
				<Route path="/69ed90c76a11b9a7ee11467ef09503dbec35dbc7be84ba664a098c859416228b/admin/controle" element={<AdminController />} />

			</Routes>

		</div>
	);
}

export default App;
