import React from 'react'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';

import "./style.css"
import { Link } from 'react-router-dom';

export const Aside = () => {
	return (
		<article className="article-lateral">
			<div className="content-icons menu">
				<h2 className='title-admin'>Menu</h2>
				<WidgetsRoundedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />
			</div>
			<div className="content-icons">
				<h3 className='subtitle-admin'>Admin</h3>
				<AccountCircleOutlinedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />
			</div>
			<div className="content-icons">
				<h3 className='subtitle-admin'>Adicionar Instituição</h3>
				<HomeOutlinedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />
			</div>
			<div className="button-article">
				<button>
					<Link to="/">
						<strong>Sair</strong>
					</Link>
				</button>
			</div>
		</article>
	)
}
