
import CreateIcon from '@mui/icons-material/Create';
import { Box } from '@mui/system';
import { ButtonFilter } from './components/ButtonFilter/Index';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./style.css"
import { User } from '../../../../Types/User';
import { useEffect, useState } from 'react';
import { api } from '../../../../services/api';
import { Link } from 'react-router-dom';

interface Props {
	header?: {
		name: string;
		t2: string;//vai variar de acordo com a tela, podendo ser cidade ou CPF
	}
	name?: string;
	t2?: string; //vai variar de acordo com a tela, podendo ser cidade ou CPF
	user?: Array<User>;
}

export default function TableContent({ header, name, t2, user }: Props) {

	// const editTest = async () => {
	// 	const response = await api.put(`/institutions/users/${cpf}`, {
	// 		first_name: 'Jane',
	// 		last_name: 'Doe',
	// 	});
	// 	console.log(response.data);
	// }

	return (
		<div className='table-content'>

			<Box className="table-box">
				<table className='table'>

					<thead>
						<tr className="header">
							<th>{header?.name}</th>
							<th>{header?.t2}</th>
							<th>Tipo</th>
							<th>Ação</th>
						</tr>
					</thead>

					<tbody>
						{
							user?.map(user => {
								return (
									<tr key={user.user_id}>
										<td>{user.full_name}</td>
										<td>{user.cpf}</td>
										<td>{user.role}</td>

										<td>
											{/* <Link to={"instituitions/user"}><ModeEditIcon /></Link> */}
											{/* <DeleteIcon /> */}
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</Box>
		</div>
	);
}
