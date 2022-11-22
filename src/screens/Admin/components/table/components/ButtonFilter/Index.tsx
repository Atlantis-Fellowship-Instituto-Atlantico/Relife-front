import { Box } from '@mui/material'
import React from 'react'
import "./style.css"
export const ButtonFilter = () => {
	return (
		<Box className="info-filter">
			<Box className="button-filter">
				<button>Todos</button>
				<button>Pendentes</button>
				<button>Usuários associados</button>
			</Box>
			<Box>
				<input type="text" className="input-filter" placeholder="Digite o CPF do usuário" />
			</Box>
		</Box>
	)
}
