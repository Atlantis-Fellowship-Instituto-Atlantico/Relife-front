
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
				<Route path="/cadastro/admin" element={<RequireAuth><FormRegisterAdmin /></RequireAuth>} />
				<Route path="/cadastro/instituicao" element={<InstitutionRegister />} />
				{/* <Route path="/dashboard" element={<RequireAuth><InstitutionController /></RequireAuth>} /> */}
				<Route path="/test" element={<RequireAuth><AdminController /></RequireAuth>} />
				{/* <Route path="/dashboard" element={<AdminController />} /> */}


			</Routes>

		</div>
	);
}

export default App;
