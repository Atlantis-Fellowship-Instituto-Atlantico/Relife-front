

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import "./style.css"
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

interface Props {
	subTitleOne?: string
	subTitleTwo?: string
	subTitleTree?: string

	isIconActive?: boolean

	link1?: string;
	link2?: string;
	link3?: string;

	height?: string

}

export const Aside = ({ subTitleOne, subTitleTwo, subTitleTree, isIconActive, height }: Props) => {
	return (
		<article className="article-lateral" style={{ height: height }}>

			<Box className='article-lateral-menu'>
				<Box className="content-icons menu">
					<h2 className='title-admin'>Menu</h2>
					<WidgetsRoundedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />
				</Box>
				<Box className="content-icons">
					<h3 className='subtitle-admin'>{subTitleOne}</h3>
					<AccountCircleOutlinedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />
				</Box>
				<Box className="content-icons">
					<Link to="/cadastro/instituicao">
						<h3 className='subtitle-admin'>{subTitleTwo}</h3>
					</Link>
					<HomeOutlinedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />
				</Box>
				<Box className="content-icons">
					<Link to="/editar/instituicao:id">
						<h3 className='subtitle-admin'>{subTitleTree}</h3>
					</Link>
					{isIconActive && <ModeEditOutlineOutlinedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />}
				</Box>
			</Box>

		</article>
	)
}
