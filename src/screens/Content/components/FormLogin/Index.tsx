import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Content } from '../../Index';
import { Titles } from '../Title/Index';

import * as yup from "yup";
import "./style.css"

import { yupResolver } from '@hookform/resolvers/yup';

interface IFormInputs {
	email: string
	password: string
}


export const FormLogin = () => {

	const validationSchema = yup.object({
		email: yup.string().required("Email é obrigatório").email("E-mail inválido"),
		password: yup.string().required("Senha é obrigatório"),
	})


	const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInputs>({
		resolver: yupResolver(validationSchema),
	});


	const onSubmitHandler = (data: IFormInputs) => {
		console.log({ data });
		reset();
	};

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

					<button
						type="submit"
						className='button-submit'
					>Fazer login</button>
				</form>
				<Link to="/cadastro" className='link-register'>Ainda não tem uma conta ? <span className='link-register-span'>Cadastre-se</span></Link>
			</Box>
		</Box>
	);
}