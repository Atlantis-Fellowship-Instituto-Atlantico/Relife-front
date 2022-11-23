import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Content } from '../../Index';
import { Titles } from '../Title/Index';

import * as yup from "yup";
import "./style.css"

import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useContext, useState } from 'react';
// import { AuthContext } from '../../../../context/Auth/AuthContext';

interface IFormInputs {
	email: string
	password: string
}


export const FormLogin = () => {
	// const auth = useContext(AuthContext);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [info, setInfo] = useState<IFormInputs>();
	const navigate = useNavigate()
	const validationSchema = yup.object({
		email: yup.string().required("Email é obrigatório").email("E-mail com formato inválido"),
		password: yup.string().required("Senha é obrigatório").min(8, "A senha tem no mínimo 8 dígitos"),
	})


	const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInputs>({
		resolver: yupResolver(validationSchema),
	});


	const onSubmitHandler = ({ email, password }: IFormInputs) => {
		console.log("submit", { email, password });
		setInfo({ email, password })

		reset();
	};

	const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	}

	const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	}

	const handleLogin = async () => {
		navigate("/dashboard/instituicao")
		// if (email && password) {
		// 	const isLogged = await auth.signin(email, password);
		// 	if (isLogged) {
		// 		// alert("fsdfsdfdeu certo.");
		// 		navigate("/test")
		// 	} else {
		// 		alert("Não deu certo.");
		// 	}
		// }
	}

	// console.log(info)
	return (
		<Box className="content-main-form">
			<Content />
			<Box className='login login-form'>
				<Titles title="Login" subtitle="Adicione seus dados para prosseguir" />
				<form onSubmit={handleSubmit(onSubmitHandler)} className="form-content">

					<input type="email" placeholder={'Digite seu email de acesso'} {...register("email")} onChange={handleEmailInput} value={email} />
					<p className="error-message">{errors.email?.message}</p>
					<input type="password" placeholder='Senha' {...register("password")} onChange={handlePasswordInput} value={password} />
					<p className="error-message">{errors.password?.message}</p>

					<button
						type="submit"
						className='button-submit'
						onClick={handleLogin}
					>Fazer login</button>

				</form>
				<Link to="/cadastro" className='link-register'>Ainda não tem uma conta ? <span className='link-register-span'>Cadastre-se</span></Link>
			</Box>
		</Box>
	);
}
