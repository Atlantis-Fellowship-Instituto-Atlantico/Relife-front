import { Box, Typography, Link, Grid, Container, Button, Card, CardContent, Stack } from '@mui/material';
import React from 'react'
import { Menu } from './components/menu/index';
import Banner from '../../assets/banner.png';
import Orgao from '../../assets/orgao.png';
import Instituicao from '../../assets/instituicao.png';
import Tecido from '../../assets/tecido.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Card1 from '../../assets/card1.png';
import Card2 from '../../assets/card2.png';
import Card3 from '../../assets/card3.png';

export const Home = () => {
	return (
		<>
			<Menu />
			<main>
				<Box alignSelf={'center'}>
					<div className='header-container flex row center-center full-view'>
						<Typography> <img src={Banner} width={1515} height={808} /></Typography> </div>
				</Box>
			</main>


			<Typography variant="h4" align='center' component="h4" paragraph={true} fontFamily='Anton' color={'#009F70'} marginTop={20} marginBottom={20}>
				Doar órgãos ajuda quem sobrevive, e torna a vida de quem partiu mais significativa ainda
			</Typography>
			<Box>
				<div className="informes">
					<img src={Card1} width={356} height={147} alt="" />
					<img src={Card2} width={356} height={147} alt="" />
					<img src={Card3} width={356} height={147} alt="" />
				</div>
			</Box>


			<Box>
				<Typography variant="h4" align='center' component="h4" paragraph={true} fontFamily='Anton' color={'#009F70'} marginTop={20} marginBottom={20}>Conheça um pouco sobre os tipos de doação mais comuns</Typography></Box >
			<Box>
				<div className="cards1">
					<Link href='https://www.einstein.br/especialidades/transplantes/transplante-orgaos/doacao-orgaos' style={{ textDecoration: 'none' }} color="inherit"> <img src={Orgao} width={500} height={268.19} alt="" />
						Órgão
					</Link>

					<Link href='https://www.prescrita.com.br/quais-tecidos-podem-ser-doados/' style={{ textDecoration: 'none' }} color="inherit"> <img src={Tecido} width={500} height={268.19} alt="" />
						Tecido
					</Link>

				</div>
			</Box>


			<Typography variant="h4" align='center' component="h4" paragraph={true} fontFamily='Anton' color={'#009F70'} marginTop={20} marginBottom={20}>Conheça as instituições parceiras </Typography>
			<div className="display">
				<img src={Instituicao} width={343} height={107} alt="" />
				<img src={Instituicao} width={343} height={107} alt="" />
				<img src={Instituicao} width={343} height={107} alt="" />
			</div>
			<Box textAlign='center' marginBottom={20} marginTop={10}>
				<Button variant="outlined" size="medium" color='success'>
					Ver mais
				</Button>
			</Box>


			<footer>
				<Box
					px={{ xs: 3, sm: 10 }}
					py={{ xs: 5, sm: 10 }}
					bgcolor="#A9D6D3"
					color="white"
				>
					<Container maxWidth="lg">
						<Grid container spacing={5}>
							<Grid item xs={12} sm={4}>
								<Box borderBottom={1} fontFamily={'Anton'} fontSize={28}>Navegue pelo Site </Box>
								<Box>
									<Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
										Sobre o projeto
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
										Instituições parceiras
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
										Informe-se
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
										Entre em contato
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
										Doe agora
									</Link>
								</Box>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Box borderBottom={1} fontFamily={'Anton'} fontSize={28} >Entre em contato</Box>
								<Box>
									<div>
										+1 (123) 456-7890
									</div>
									<div>
										exemple@gmail.com
									</div>
								</Box>
							</Grid>
							<Grid item xs={12} sm={4}>

								<div className='icons'>
									<Box borderBottom={1} fontFamily={'Anton'} fontSize={28}>Redes Sociais</Box>
									<Box>
										<Link href="https://twitter.com" color="#009F70">
											<TwitterIcon />
										</Link>
										<Link href="https://youtube.com" color="#009F70">
											<YouTubeIcon />
										</Link>
										<Link href="https://facebook.com" color="#009F70">
											<FacebookIcon />
										</Link>
										<Link href="https://instagram.com" color="#009F70">
											<InstagramIcon />
										</Link>
									</Box>
								</div>
							</Grid>
						</Grid>
						<Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
							Todos os direitos reservados | Desenvolvido pela atlantis fellowship &reg; {new Date().getFullYear()}
						</Box>
					</Container>
				</Box>
			</footer>
			);

		</>
	)
}

