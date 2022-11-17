import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../../Index'
import { Titles } from '../Title/Index'
import "./style.css"

export const CardRegister = () => {
	return (
		<div className='content-main-form'>
			<Form />
			<div className='login login-form'>
				<Titles title="Cadastro" subtitle="Selecione para prosseguir" />
				<div className="card">
					<h2>Doador</h2>
					<span>Seja um doador e ajude diversas outras pessoas</span>
				</div>
				<div className="card">
					<h2>Receptor</h2>
					<span>Seja um receptor e adicione as informações necessárias para entrar na lista</span>
				</div>
				<Link to="/login" className='link-register register-card'>Já tem uma conta ? <span className='link-register-span'>Faça login</span></Link>
			</div>
		</div>
	)
}
