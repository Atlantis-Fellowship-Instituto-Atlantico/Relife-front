import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import * as yup from "yup";
import ContentRegister from '../components/ContentRegister/Index';
import "./style.css"


interface IFormInputs {
	name: string
	email: string
	cpf: string
	phone: string
	sexo: string
	cep: string
	Neighborhood: string
	number: string
	country: string
	city: string
	street: string
	state: string
	complement: string
	password: string

}

export const UserRegister = () => {

	const validationSchema = yup.object({
		name: yup.string().required("Nome é um campo obrigatório"),
		email: yup.string().required("Email é um campo obrigatório").email("E-mail com formato inválido"),
		cpf: yup.string().required("CPF é um campo obrigatório").min(11),

		phone: yup.string().required("Telefone é um campo obrigatório").min(9),

		cep: yup.string().required("CEP é um campo obrigatório").min(8),
		street: yup.string().required("Rua é um campo obrigatório"),
		Neighborhood: yup.string().required("Bairro é um campo obrigatório"),

		city: yup.string().required("Cidade é um campo obrigatório"),
		state: yup.string().required("Estado é um campo obrigatório"),
		password: yup.string().required("Senha é um campo obrigatório").min(8)

	})

	const { register, handleSubmit, resetField, formState: { errors }, reset } = useForm<IFormInputs>({
		resolver: yupResolver(validationSchema),
	});

	// const handleCheckPostalCode = (
	// 	values: formInputI,
	// 	setFieldValue: (field: string, value: string) => void,
	// 	setFieldTouched: (field: string, isTouched?: boolean) => void
	// ) => {
	// 	const { postalCode } = values
	// 	if (postalCode?.length !== 8) {
	// 		setFieldValue('city', '')
	// 		setFieldValue('state', '')
	// 	}
	// 	setFieldTouched('postalCode', true)
	// 	fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setFieldValue('city', data.localidade)
	// 			setFieldValue('state', data.uf)
	// 		})
	// }


	const onSubmitHandler = (data: IFormInputs) => {
		console.log({ data });
		reset();
		resetField("cpf")
	};

	return (
		<Box className="content-main-form ">
			<ContentRegister height={"93rem"} top={"18.75rem"} />
			<form onSubmit={handleSubmit(onSubmitHandler)} className="form-register">
				<Box className="info">
					<Box>
						<label htmlFor='name'>Nome *</label>
						<input {...register("name")} placeholder="Nome completo" className="input-text" />
						<p className="error-message">{errors.name?.message}</p>
					</Box>
					<Box>
						<label htmlFor='email'>Email *</label>
						<input {...register("email")} placeholder="Ex: email@gmail.com" className="input-text" />
						<p className="error-message">{errors.email?.message}</p>
					</Box>
					<Box>
						<label htmlFor='cpf'>CPF *</label>
						<ReactInputMask mask="999.999.999-99" {...register("cpf")} placeholder="CPF" className="input-text" />
						<p className="error-message">{errors.cpf?.message}</p>
					</Box>

				</Box>

				<Box className="info-details">
					<Box className="smaller-input">
						<Box className="label-style">
							<label htmlFor='sexo'>Sexo*</label>
							<select {...register("sexo")}>
								<option>Selecione</option>
								<option value="feminino">Feminino</option>
								<option value="masculino" >Masculino</option>
								<option value="semOpcao">Prefiro não dizer</option>
							</select>
						</Box>

						<Box className="label-style">
							<label htmlFor='phone'>Telefone*</label>
							<ReactInputMask mask="(99) 99999-999" {...register("phone")} placeholder="(88)98888-8888" className="input-text" />
						</Box>
					</Box>
				</Box>

				<Box className="address">
					<Box className="smaller-input">
						<Box className="label-style">
							<label htmlFor='country'>Pais*</label>
							<input {...register("country")} placeholder="Pais" />
						</Box>

						<Box className="label-style">
							<label htmlFor='cep'>CEP*</label>
							<ReactInputMask mask="99999-999" {...register("cep")} placeholder="CEP" />
							<p className="error-message">{errors.cep?.message}</p>
						</Box>
					</Box>
					<Box className="smaller-input">
						<Box>
							<Box className="label-style">
								<label htmlFor='street'>Rua*</label>
								<input {...register("street")} placeholder="Rua" />
								<p className="error-message">{errors.street?.message}</p>
							</Box>

							<Box className="label-style">
								<label htmlFor='number'>Número</label>
								<input {...register("number")} placeholder="Número" />
							</Box>
						</Box>
					</Box>

					<Box className="smaller-input">
						<Box className="label-style">
							<label htmlFor='Neighborhood'>Complemento</label>
							<input {...register("complement")} placeholder="Complemento" />
						</Box>
						<Box className="label-style">
							<label htmlFor='Neighborhood'>Bairro*</label>
							<input {...register("Neighborhood")} placeholder="Bairro" />
							<p className="error-message">{errors.Neighborhood?.message}</p>
						</Box>
					</Box>

					<Box className="smaller-input">
						<Box className="label-style">
							<label htmlFor='city'>Cidade*</label>
							<input {...register("city")} placeholder="Cidade" />
							<p className="error-message">{errors.city?.message}</p>
						</Box>
						<Box className="label-style">
							<label htmlFor='state'>Estado*</label>
							<input {...register("state")} placeholder="Estado" />
							<p className="error-message">{errors.state?.message}</p>
						</Box>
					</Box>

					<Box className="smaller-input">
						<Box className="password-box">
							<h3>Para concluir o cadastro crie uma senha</h3>
							<p className='description-password'>(aconselhamos usar letras e números para maior segurança da sua conta)</p>

							<Box>
								<Box className="label-style">
									<label htmlFor='password'>Senha*</label>
									<input {...register("password")} placeholder="Senha" type="password" />
									<p className="error-message">{errors.password?.message}</p>
								</Box>
								<Box className="label-style">
									<label htmlFor='state'>Confirme a senha*</label>
									<input {...register("state")} placeholder="Agora confirme a senha" type="password" />
									<p className="error-message">{errors.password?.message}</p>
								</Box>
							</Box>
						</Box>
					</Box>

				</Box>
				<button type="submit" className='button-submit register'>Cadastrar</button>
			</form >
		</Box>
	)
}
