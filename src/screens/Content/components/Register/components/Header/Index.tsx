import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./style.css"
export const HeaderRegister = () => {
	return (
		<>
			<Box className="header-register">
				<Link to="/cadastro">
					<ArrowBackIcon sx={{ width: "2rem", height: "2rem" }} />
				</Link>
				<h1>Cadastro</h1>
			</Box>
			<p className="description">Agora vamos precisar de algumas informações pessoais
				para prosseguir com o cadastro!</p>
		</>
	)
}
