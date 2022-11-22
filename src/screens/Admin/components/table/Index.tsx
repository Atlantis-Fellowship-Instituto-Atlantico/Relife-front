
import CreateIcon from '@mui/icons-material/Create';
import { Box } from '@mui/system';
import { ButtonFilter } from './components/ButtonFilter/Index';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./style.css"

interface Props {
	header?: {
		name: string;
		t2: string;//vai variar de acordo com a tela, podendo ser cidade ou CPF
	}
	name?: string;
	t2?: string; //vai variar de acordo com a tela, podendo ser cidade ou CPF
}

export default function TableContent({ header, name, t2 }: Props) {
	return (
		<div className='table-content'>

			<ButtonFilter />

			<Box className="table-box">
				<table className='table'>
					<thead>
						<tr className="header">
							<th>{header?.name}</th>
							<th>{header?.t2}</th>
							<th>Ação</th>

						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{name}</td>
							<td>
								{t2}
							</td>
							<td>
								<ModeEditIcon />
								<DeleteIcon />
							</td>
						</tr>

						<tr>
							<td>Alfreds Futterkiste</td>
							<td>
								000.000.000-00
							</td>
							<td>
								<ModeEditIcon />
								<DeleteIcon />
							</td>
						</tr>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>
								000.000.000-00
							</td>
							<td>
								<ModeEditIcon />
								<DeleteIcon />
							</td>
						</tr>
					</tbody>
				</table>
			</Box>
		</div>
	);
}
