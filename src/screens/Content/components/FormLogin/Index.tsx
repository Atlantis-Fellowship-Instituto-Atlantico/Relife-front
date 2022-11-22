import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Content } from '../../Index';
import { Titles } from '../Title/Index';

import * as yup from "yup";
import "./style.css"

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

interface IFormInputs {
	email: string
	password: string
}


export const FormLogin = () => {

	const [info, setInfo] = useState<IFormInputs>();

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

	console.log(info)
	return (
		<Box className="content-main-form">
			<Content />
			<Box className='login login-form'>
				<Titles title="Login" subtitle="Adicione seus dados para prosseguir" />
				<form onSubmit={handleSubmit(onSubmitHandler)} className="form-content">

					<input type="email" placeholder={'Digite seu email de acesso'} {...register("email")} />
					<p className="error-message">{errors.email?.message}</p>
					<input type="password" placeholder='Senha' {...register("password")} />
					<p className="error-message">{errors.password?.message}</p>

					<Link to="/instituicao/controle">
						<button
							type="submit"
							className='button-submit'
						>Fazer login</button>
					</Link>
				</form>
				<Link to="/cadastro" className='link-register'>Ainda não tem uma conta ? <span className='link-register-span'>Cadastre-se</span></Link>
			</Box>
		</Box>
	);
}
