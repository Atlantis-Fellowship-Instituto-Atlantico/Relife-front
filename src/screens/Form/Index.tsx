import React, { useContext } from 'react'


import { FormLogin } from './components/FormLogin/Index'
import { Titles } from './components/Title/Index'
import "./style.css"
import { CardRegister } from './components/CardRegister/Index';
import { RegisterContextProvider, RegisterContext } from '../../context/Register/RegisterContext';
import { ContentImage } from './components/ContentImage/Index';
import { Link } from 'react-router-dom';


export const Form = () => {
	// const { handleClickButton, selectedItem } = useContext(RegisterContext);
	return (
		<div className='container'>
			<RegisterContextProvider>
				<ContentImage />
				<Link to="/" className='link-home'>
					<span>
						Voltar para o início
					</span>
				</Link>
			</RegisterContextProvider>
		</div>
	)
}
