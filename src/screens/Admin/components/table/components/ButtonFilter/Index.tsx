import { Box } from '@mui/material'
import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask';
import { Admin } from '../../../../../../Types/Admin';
import { Institution } from '../../../../../../Types/Institution';
import { User } from '../../../../../../Types/User';
import "./style.css"

interface Props {
	user?: Array<User>;
	institution?: Array<Institution>;
	admin?: Array<Admin>;
	buttonOne?: string;
	buttonTwo?: string;
	buttonTree?: string;
	placeholder?: string;
	isInputActive?: boolean;
	valueInput?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
	onClickButtonOne?: React.MouseEventHandler<HTMLButtonElement> | undefined
	onClickButtonTwo?: React.MouseEventHandler<HTMLButtonElement> | undefined
	onClickButtonTree?: React.MouseEventHandler<HTMLButtonElement> | undefined

}

export const ButtonFilter = ({ user, institution, admin, buttonOne, buttonTwo, buttonTree, placeholder, isInputActive, onChange, valueInput, onClickButtonOne, onClickButtonTwo, onClickButtonTree }: Props) => {

	return (
		<Box className="info-filter">
			<Box className="button-filter">
				<button onClick={onClickButtonOne}>{buttonOne}</button>
				<button onClick={onClickButtonTwo}>{buttonTwo}</button>
				<button onClick={onClickButtonTree}>{buttonTree}</button>
			</Box>
			<Box>
				{isInputActive && <input value={valueInput} placeholder={placeholder} className="input-filter" onChange={onChange} />
				}
			</Box>
		</Box>
	)
}
