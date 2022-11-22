
import CreateIcon from '@mui/icons-material/Create';
import { Box } from '@mui/system';
import { ButtonFilter } from './components/ButtonFilter/Index';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./style.css"

export default function TableContent() {
	return (
		<div className='table-content'>

			<ButtonFilter />

			<Box className="table-box">
				<table className='table'>
					<thead>
						<tr className="header">
							<th>Nome completo</th>
							<th>CPF</th>
							<th>Ação</th>

						</tr>
					</thead>
					<tbody>
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
