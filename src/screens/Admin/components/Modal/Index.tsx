import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./style.css"
import { Link } from 'react-router-dom';
const style = {
	position: 'absolute' as 'absolute',
	// display: "flex",

	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	height: 200,
	bgcolor: 'background.paper',
	// marginTop: "30px",
	// border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function ModalButton() {

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box>
			<button onClick={handleOpen} className="button-article">
				<strong>Sair</strong>
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Tem certeza que deseja sair?
					</Typography>
					<Box className="style-modal">
						<button className="button-style-modal cancel" onClick={handleClose}>
							Cancelar
						</button>
						<button className="button-style-modal exit">Sair</button>
					</Box>
				</Box>
			</Modal>
		</Box >
	);
}
