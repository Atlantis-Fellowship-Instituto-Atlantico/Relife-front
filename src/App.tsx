
import "./global.css"
import { Home } from './screens/Home/Index';

import { Routes, Route } from "react-router-dom";
import { FormLogin } from "./screens/Form/components/FormLogin/Index";
import { CardRegister } from './screens/Form/components/CardRegister/Index';


function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<FormLogin />} />
				<Route path="/cadastro" element={<CardRegister />} />
			</Routes>
		</div>
	);
}

export default App;
