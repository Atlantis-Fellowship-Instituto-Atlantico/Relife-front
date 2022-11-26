
import { Alert, Snackbar } from '@mui/material';
import { Box } from '@mui/system'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../context/useAuth';
import { api } from '../../../../../services/api';
import { User } from '../../../../../Types/User';
import ContentRegister from '../../Register/components/ContentRegister/Index';
// import ContentRegister from '../components/ContentRegister/Index';
import "./style.css"


export const UpdateUserRegister = () => {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const [mother, setMother] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");
	const [password, setPassword] = useState("");

	const [cpf, setCpf] = useState("");
	const [passwordConfirmed, setPasswordConfirmed] = useState("");
	const [cep, setCEP] = useState("");


	const [street, setStreet] = useState("");
	const [number, setNumber] = useState("");
	const [complement, setComplement] = useState("");
	const [city, setCity] = useState("");
	const [uf, setUF] = useState("");
	const [district, setDistrict] = useState("");


	// const [email, setEmail] = useState("");
	// const [cpf, setCPF] = useState("");
	// const [phone, setPhone] = useState("");
	// const [password, setPassword] = useState("");
	// const [passwordConfirmed, setPasswordConfirmed] = useState("");



	const [open, setOpen] = useState(false);

	const [message, setMessage] = useState("");
	const auth = useAuth()


	const { register, handleSubmit, formState: { errors }, setValue } = useForm<User>({ mode: 'all' });

	const verificarCampos = async () => {
		const response = await api.get("/users");
		const data = response.data
		// eslint-disable-next-line array-callback-return
		data.map((user: User) => {
			if (user.email === email) {
				setMessage("Email já cadastrado, tente outro!")

			}

			if (user.cpf === cpf) {
				setMessage("CPF já cadastrado, tente outro!")
			}

			if (user.phone === phone) {
				setMessage("Telefone já cadastrado, tente outro!")
			}
		})
	}

	const navigate = useNavigate()

	const handleCheckPostalCode = (data: React.ChangeEvent<HTMLInputElement>) => {
		const postalCode = data.target.value
		if (postalCode?.length !== 8) {
			setValue('city', '')
			setValue('uf', '')
		}


		fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
			.then((response) => response.json())
			.then((data) => {
				setValue('city', data.localidade)
				setValue('uf', data.uf)
			})
	}

	const getInstitutions = async () => {
		const response = await api.get("/institutions")

		setName(response.data.full_name)
		console.log("DATA", response.data.full_name)
	};

	useEffect(() => {
		getInstitutions()
	}, [])


	const updateUser = async (data: User) => {

		const user = {
			role: data.role,
			full_name: data.full_name,
			sex: data.sex,
			cpf: data.cpf,
			phone: data.phone,
			email: data.email,
			mother_name: data.mother_name,
			password: data.password,

			zip_code: data.zip_code,
			country: data.country,
			uf: data.uf,
			city: data.city,
			district: data.district,
			street: data.street,
			number: data.number,
			complement: data.complement,
		}

		console.log("AQUI", user)
		try {
			await api.put(`/users/${auth.id}`, user)

			if (data.role === "DONOR") {
				navigate("/dashboard/doador")
			} else {
				navigate("/dashboard/receptor")
			}
			// navigate("/dashboard/")

		} catch (error) {

		}
	}

	const createUser = async (data: User) => {

		const user = {
			role: auth.userRole,
			full_name: data.full_name,
			sex: data.sex,
			cpf: data.cpf,
			phone: data.phone,
			email: data.email,
			mother_name: data.mother_name,
			password: data.password,

			zip_code: data.zip_code,
			country: data.country,
			uf: data.uf,
			city: data.city,
			district: data.district,
			street: data.street,
			number: data.number,
			complement: data.complement,
		}

		console.log("AQUI", user)
		try {
			await api.post("/users", user)
			navigate("/login")

		} catch (error) {
			verificarCampos()
			setOpen(true)
		}
	}

	console.log(auth.id)
	const onSubmitHandler = async (data: User) => {

		updateUser(data)
	}



	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false)
	};



	const [selectValue, setSelectValue] = useState("");

	const list = [
		{ id: 1, name: 'Selecione' },
		{ id: 2, name: 'Feminino' },
		{ id: 3, name: 'Masculino' },
		{ id: 4, name: 'Prefiro não dizer' },
	];


	return (
		<Box className="content-main-form ">
			<ContentRegister height={"100rem"} top={"18.75rem"} />
			<form onSubmit={handleSubmit(onSubmitHandler)} className="form-register">
				<Box className="info">
					<Box>
						<label htmlFor='full_name'>Nome *</label>
						<input
							{...register('full_name', { required: "Nome é um campo obrigatório" })}
							placeholder="Nome completo"
							className="input-text" value={name} />
						<p className="error-message">{errors.full_name?.message}</p>
					</Box>
					<Box>
						<label htmlFor='email'>Email *</label>
						<input {...register("email", {
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'Digite um email válido',
							}
						})} placeholder="Ex: email@gmail.com" name="email" className="input-text"
							value={email} />
						<p className="error-message">{errors.email?.message}</p>
					</Box>
					<Box>
						<label htmlFor='cpf'>CPF *</label>
						<ReactInputMask mask="999.999.999-99" {...register("cpf")} placeholder="CPF" className="input-text" onChange={(e) => setCpf(e.target.value)} value={cpf} />
						<p className="error-message">{errors.cpf?.message}</p>
					</Box>
					<Box>
						<label htmlFor='mother_name'>Nome da mãe</label>
						<input {...register("mother_name")} placeholder="Digite o nome da sua mãe" className="input-text" value={mother} />
						<p className="error-message">{errors.mother_name?.message}</p>
					</Box>
				</Box>
				<Box className="info-details">
					<Box className="smaller-input">
						<Box className="label-style">
							<label htmlFor='sex'>Sexo</label>
							<select {...register("sex")} value={selectValue} onChange={e => setSelectValue(e.target.value)}>

								{list.map((item, index) => (
									<option key={index} value={item.name}>{item.name}</option>
								))}

							</select>
						</Box>

						<Box className="label-style">
							<label htmlFor='phone'>Telefone*</label>
							<ReactInputMask mask="(99) 99999-9999" {...register("phone")} placeholder="(88)98888-8888" className="input-text" value={phone} />
							<p className="error-message">{errors.phone?.message}</p>
						</Box>
					</Box>
				</Box>
				<Box className="address">
					<Box className="smaller-input">
						<Box className="label-style">
							<label htmlFor='country'>Pais*</label>
							<input {...register("country")} placeholder="Pais" value={country} />
							<p className="error-message">{errors.country?.message}</p>
						</Box>

						<Box className="label-style">
							<label htmlFor='zip_cod'>CEP*</label>
							<ReactInputMask mask="99999-999" {...register("zip_code")} placeholder="Ex: 00000-000" value={cep} />
							<p className="error-message">{errors.zip_code?.message}</p>
						</Box>
					</Box>
					<Box className="smaller-input">
						<Box>
							<Box className="label-style">
								<label htmlFor='street'>Rua*</label>
								<input {...register("street")} placeholder="Rua" value={street} />
								<p className="error-message">{errors.street?.message}</p>
							</Box>

							<Box className="label-style">
								<label htmlFor='number'>Número</label>
								<input {...register("number")} placeholder="Número" value={number} />
							</Box>
						</Box>
					</Box>

					<Box className="smaller-input">
						<Box className="label-style">
							<label htmlFor='complement'>Complemento</label>
							<input {...register("complement")} placeholder="Complemento" value={complement} />
						</Box>
						<Box className="label-style">
							<label htmlFor='district'>Bairro*</label>
							<input {...register("district")} placeholder="Bairro" value={district} />
							<p className="error-message">{errors.district?.message}</p>
						</Box>
					</Box>

					<Box className="smaller-input">
						<Box className="label-style">
							<label htmlFor='city'>Cidade*</label>
							<input {...register("city")} placeholder="Cidade" value={city} />
							<p className="error-message">{errors.city?.message}</p>
						</Box>
						<Box className="label-style">
							<label htmlFor='uf'>Estado*</label>
							<input {...register("uf")} placeholder="Estado" value={uf} />
							<p className="error-message">{errors.uf?.message}</p>
						</Box>
					</Box>

					<Box className="smaller-input">
						<Box className="password-box">
							<h3>Para concluir o cadastro crie uma senha</h3>
							<p className='description-password'>(aconselhamos usar letras e números para maior segurança da sua conta)</p>
							<Box>
								<Box className="label-style">
									<label htmlFor='password'>Senha*</label>
									<input {...register("password")} placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />
									<p className="error-message">{errors.password?.message}</p>
								</Box>
								<Box className="label-style">
									<label htmlFor='passwordConfirmation'>Confirme a senha*</label>
									<input  {...register("passwordConfirmation")} placeholder="Agora confirme a senha" type="password" onChange={(e) => setPasswordConfirmed(e.target.value)} />
									{/* <p className="error-message">{errors.passwordConfirmation?.message}</p> */}
									{password !== passwordConfirmed && <p className="error-message">As senhas precisam ser iguais</p>}

								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<button type="submit" className='button-submit register'>Cadastrar</button>
				<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
					<Alert onClose={handleClose} sx={{ width: '100%' }} severity="warning">{message}</Alert>
				</Snackbar >
			</form>
		</Box>
	)
}
