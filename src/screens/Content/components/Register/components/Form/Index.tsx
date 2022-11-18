import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import * as yup from "yup";
import "./style.css"

export const Form = () => {

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


	const schema = yup.object({
		name: yup.string().required(),
		email: yup.string().required().email(),
		cpf: yup.string().required().min(11),
		telephone: yup.string().required().min(9),
		cep: yup.string().required().min(8),
		street: yup.string().required(),
		Neighborhood: yup.string().required(),
		city: yup.string().required(),
		state: yup.string().required(),
		password: yup.string().required().min(8)
	}).required();


	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data: any) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form-register">
			<Box className="info">
				<input {...register("name")} placeholder="Nome completo" className="input-text" />
				<input {...register("email")} placeholder="Email" className="input-text" />
				<ReactInputMask mask="999.999.999-99" {...register("cpf")} placeholder="CPF" className="input-text" />
				<Box className="smaller-input">
					<select {...register("sexo")}>
						<option>Selecione</option>
						<option value="feminino">Feminino</option>
						<option value="masculino" >Masculino</option>
						<option value="semOpcao">Prefiro não dizer</option>
					</select>
					<ReactInputMask mask="(99) 99999-999" {...register("telephone")} placeholder="Telefone" className="input-text" />
				</Box>

			</Box>
			<Box className="address">
				<Box className="smaller-input">
					<input {...register("country")} placeholder="Pais" />
					<ReactInputMask mask="99999-999" {...register("cep")} placeholder="CEP" />
				</Box>
				<Box className="smaller-input">
					<Box>
						<input {...register("street")} placeholder="Rua" />
						<input {...register("number")} placeholder="Número" />
					</Box>
					<Box>
						<input {...register("complement")} placeholder="Complemento" />
						<input {...register("Neighborhood")} placeholder="Bairro" />
					</Box>
					<Box>
						<input {...register("city")} placeholder="Cidade" />
						<input {...register("state")} placeholder="Estado" />
					</Box>

					<Box>
						<h3>Para concluir o cadastro crie uma senha</h3>
						<p>(aconselhamos usar letras e números para maior segurança da sua conta)</p>
						<Box>
							<input {...register("password")} placeholder="Senha" />
							<input {...register("state")} placeholder="Agora confirme a senha" />
						</Box>
					</Box>
				</Box>
			</Box>
			<button type="submit" className='button-submit register'>Cadastrar</button>
		</form>
	)
}
