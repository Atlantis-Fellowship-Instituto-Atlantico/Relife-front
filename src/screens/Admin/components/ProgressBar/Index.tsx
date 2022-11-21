import { Box } from '@mui/material';
import React from 'react'
import "./style.css";

export const ProgressBar = () => {
	return (
		<section className="content-card">
			<div className="site-card-border-less-wrAdminer">
				<Box className="content-title">
					<h1 className='title-progress'>Progresso de doações esse mês</h1>
				</Box>
				<div className="content-bar-progress">
					<div className="data-content">
						<div className="content-30">
							<h2>Tecido</h2>
						</div>
						<div className="content-70">
							<div className="progress-bar"></div>
							<h3>26/30</h3>
						</div>
					</div>
					<div className="data-content">
						<div className="content-30">
							<h2>Órgãos</h2>
						</div>
						<div className="content-70">
							<div className="progress-bar"></div>
							<h3>14/30</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
