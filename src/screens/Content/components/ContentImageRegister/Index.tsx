import React from 'react'
import Medico from "../../../../assets/medico.png"
import "./style.css"
export const ContentImageRegister = () => {
	return (
		<div className='container'>
			<div className='content-img'>

				<div className='content-title'>
					<h1 className='title-style-main'>Entre para o nosso time e ajude a
						salvar vidas!</h1>
				</div>
				<img src={Medico} alt="" className='img-medico' />
			</div>
		</div>
	)
}
