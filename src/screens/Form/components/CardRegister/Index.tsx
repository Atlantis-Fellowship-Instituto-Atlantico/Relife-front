import React from 'react'
import { Form } from '../../Index'
import "./style.css"

export const CardRegister = () => {
	return (
		<div className='content-main-form'>
			<Form />
			<div className='card-content register-form'>
				<div className="card">
					<h2>Doador</h2>
					<span>Seja um doador e ajude diversas outras pessoas</span>
				</div>
				<div className="card">
					<h2>Receptor</h2>
					<span>Seja um receptor e adicione as informações necessárias para entrar na lista</span>
				</div>
			</div>
		</div>
	)
}
