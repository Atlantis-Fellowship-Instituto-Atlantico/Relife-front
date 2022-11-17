import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Content } from '../../Index'
import { Titles } from '../Title/Index'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity2Icon from '@mui/icons-material/Diversity2';

import "./style.css"

export const CardRegister = () => {
	return (
		<Box className='content-main-form'>
			<Content />
			<Box className='login login-form'>
				<Titles title="Cadastro" subtitle="Selecione uma opção para prosseguir" />

				<Link to="/cadastroForm">
					<Box className="card">
						<Diversity1Icon sx={{ width: "2rem", height: "2rem" }} />
						<Box className='card-box'>
							<h2>Doador</h2>
							<span>Seja um doador e ajude Boxersas outras pessoas</span>
						</Box>
					</Box>
				</Link>

				<Link to="/cadastroForm">
					<Box className="card">
						<Diversity2Icon sx={{ width: "2rem", height: "2rem" }} />
						<Box>
							<h2>Receptor</h2>
							<span>Seja um receptor e adicione as informações necessárias para entrar na lista</span>
						</Box>
					</Box>
				</Link>
				<Link to="/login" className='link-register register-card'>Já tem uma conta ? <span className='link-register-span'>Faça login</span></Link>
			</Box>
		</Box>
	)
}
