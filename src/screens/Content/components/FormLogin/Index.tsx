import { Alert, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Content } from '../../Index';
import { Titles } from '../Title/Index';

import * as yup from "yup";
import "./style.css"

import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useState } from 'react';
import { useAuth } from '../../../../context/useAuth';

interface IFormInputs {
	email: string
	password: string
}

export const FormLogin = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [erro, setErro] = useState();

	const navigate = useNavigate()
	const validationSchema = yup.object({
		email: yup.string().required("Email é obrigatório").email("E-mail com formato inválido"),
		password: yup.string().required("Senha é obrigatório").min(8, "A senha tem no mínimo 8 dígitos"),
	})


	const { register, formState: { errors } } = useForm<IFormInputs>({
		resolver: yupResolver(validationSchema),
	});


	const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
		console.log(email)
	}

	const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	}

	const auth = useAuth()

	const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();

		try {
			await auth.authenticate(email, password)
			// console.log("ADMIN: ", auth.role)

			if (auth.role === "ADMIN") {
				return navigate("/dashboard/admin");
			}

			if (auth.role === "INSTITUTION") {
				return navigate("/dashboard/instituicao");
			}
			if (auth.role === "RECEIVER") {
				return navigate("/dashboard/receptor");
			}
			if (auth.role === "DONOR") {
				return navigate("/dashboard/doador");
			}

		} catch (error: any) {
			setErro(error)
			// console.log("AQUI ERRO", error)
			// < Alert className = 'AQUIII' severity = "error" > Senha ou email incorreto</ >
		}
	}

	return (
		<Box className="content-main-form">
			<Content />
			<Box className='login login-form'>
				<Titles title="Login" subtitle="Adicione seus dados para prosseguir" />
				<form className="form-content">

					<input type="email" placeholder={'Digite seu email de acesso'} {...register("email")} onChange={handleEmailInput} value={email} />
					<p className="error-message">{errors.email?.message}</p>
					<input type="password" placeholder='Digite sua senha' {...register("password")} onChange={handlePasswordInput} value={password} />
					<p className="error-message">{errors.password?.message}</p>

					<button
						type="submit"
						className='button-submit'
						onClick={(e) => handleLogin(e)}
					>Fazer login</button>

					{erro && <Alert severity="error">Email ou senha incorreto</Alert>}

				</form>
				<Link to="/cadastro" className='link-register'>Ainda não tem uma conta ? <span className='link-register-span'>Cadastre-se</span></Link>
			</Box>
		</Box >
	);
}
