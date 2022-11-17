import React from 'react'
import Medico from "../../../../assets/medico.png"
import { ContentImage } from '../ContentImage/Index'
import "./style.css"
export const ContentImageRegister = () => {
	return (
		<div className='container'>
			<div className='content-img'>

				<div className='content-title'>
					<h1 className='title-style-main'>Doe órgãos,</h1>
					<h1 className='title-style'>Doe esperança.</h1>
				</div>
				<img src={Medico} alt="" className='img-medico' />
			</div>
		</div>
	)
}
