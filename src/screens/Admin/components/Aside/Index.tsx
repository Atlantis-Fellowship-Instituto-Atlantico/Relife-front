

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import "./style.css"
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

interface Props {
	subTitleOne?: string
	subTitleTwo?: string
	subTitleTree?: string
	height?: string

}

export const Aside = ({ subTitleOne, subTitleTwo, subTitleTree, height }: Props) => {
	return (
		<article className="article-lateral" style={{ height: height }}>

			<Box className='article-lateral-menu'>
				<Box className="content-icons menu">
					<h2 className='title-admin'>Menu</h2>
					<WidgetsRoundedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />
				</Box>
				<Box className="content-icons">
					<h3 className='subtitle-admin'>Admin</h3>
					<AccountCircleOutlinedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />
				</Box>
				<Box className="content-icons">
					<Link to="/cadastro/instituicao">
						<h3 className='subtitle-admin'>Adicionar Instituição</h3>
					</Link>
					<HomeOutlinedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />
				</Box>
				<Box className="content-icons">
					<Link to="/editar/instituicao:id">
						<h3 className='subtitle-admin'>Editar Instituição</h3>
					</Link>
					<ModeEditOutlineOutlinedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />
				</Box>
			</Box>

		</article>
	)
}
