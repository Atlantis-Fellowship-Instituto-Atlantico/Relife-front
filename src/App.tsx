
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
import { ProtectedLayout } from "./components/ProtectedLayout";
import DonorController from "./screens/Admin/DonorController/Index";
import { UpdateUserInstitutionRegister } from "./screens/Content/components/UpdateScreen/UpdateUserInstitution/Index";
import ReceiverController from "./screens/Admin/ReceiverControler/Index";
import { UpdateUserRegister } from "./screens/Content/components/UpdateScreen/UpdateUser/Index";
// import { RequireAuth } from "./context/Auth/RequireAuth";

// const PrivateRoute = () => ()

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<FormLogin />} />
				<Route path="/cadastro" element={<CardRegister />} />
				<Route path="/cadastro/usuario" element={<UserRegister />} />

				{/* rotas protegidas */}

				<Route path="/cadastro/admin" element={<ProtectedLayout><FormRegisterAdmin /></ProtectedLayout>} />
				<Route path="/cadastro/instituicao" element={<ProtectedLayout><InstitutionRegister /></ProtectedLayout>} />

				<Route path="/dashboard/instituicao" element={<ProtectedLayout><InstitutionController /></ProtectedLayout>} />
				<Route path="/dashboard/admin" element={<ProtectedLayout><AdminController /></ProtectedLayout>} />
				<Route path="/dashboard/doador" element={<ProtectedLayout><DonorController /></ProtectedLayout>} />
				<Route path="/r/editar/usuario" element={<UpdateUserInstitutionRegister />} />
				<Route path="/dashboard/receptor" element={<ReceiverController />} />
				<Route path="/editar/usuario" element={<UpdateUserRegister />} />
			</Routes>

		</div>
	);
}

export default App;
