import { Box, Button } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Content } from '../../Index';
import { Titles } from '../Title/Index';


import "./style.css"
export const FormLogin = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = (data: any) => console.log(data);

	console.log(watch("example"));

	return (
		<Box className="content-main-form">
			<Content />
			<Box className='login login-form'>
				<Titles title="Login" subtitle="Adicione seus dados para prosseguir" />
				<form onSubmit={handleSubmit(onSubmit)} className="form-content">

					<input type="email" placeholder='Digite seu email de acesso' {...register("email", { required: true })} />
					<input type="password" placeholder='Senha' {...register("password")} />
					<button
						type="submit"
						className='button-submit'
					>Fazer login</button>
				</form>
				<Link to="/cadastro" className='link-register'>Ainda não tem uma conta ? <span className='link-register-span'>Cadastre-se</span></Link>
			</Box>
		</Box>
	)
}
