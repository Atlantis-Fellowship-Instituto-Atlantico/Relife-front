
import CreateIcon from '@mui/icons-material/Create';
import { Box } from '@mui/system';
import { ButtonFilter } from './components/ButtonFilter/Index';

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
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>000.000.000-00</td>
						</tr>
						<tr>
							<td>Berglunds snabbkop</td>
							<td>000.000.000-00</td>
						</tr>
						<tr>
							<td>Island Trading</td>
							<td>000.000.000-00</td>
						</tr>
						<tr>
							<td>Koniglich Essen</td>
							<td>000.000.000-00</td>
						</tr>
						<tr>
							<td>Koniglich Essen</td>
							<td>000.000.000-00</td>
						</tr>
						<tr>
							<td>Koniglich Essen</td>
							<td>000.000.000-00</td>
						</tr>
						<tr>
							<td>Koniglich Essen</td>
							<td>000.000.000-00</td>
						</tr>
						<tr>
							<td>Koniglich Essen</td>
							<td>000.000.000-00</td>
						</tr>
						<tr>
							<td>Koniglich Essen</td>
							<td>000.000.000-00</td>
						</tr>
						<tr>
							<td>Koniglich Essen</td>
							<td>000.000.000-00</td>
						</tr>
						<tr>
							<td>Koniglich Essen</td>
							<td>000.000.000-00</td>
						</tr>
					</tbody>
				</table>
			</Box>
		</div>
	);
}
