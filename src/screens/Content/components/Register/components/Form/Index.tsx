import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form';

import * as yup from "yup";
import "./style.css"

export const Form = () => {
	const schema = yup.object({
		name: yup.string().required(),
		age: yup.number().positive().integer().required(),
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
				<input {...register("cpf")} placeholder="CPF" className="input-text" />
				<Box className="smaller-input">
					<select {...register("sexo")}>
						<option>Selecione</option>
						<option value="feminino">Feminino</option>
						<option value="masculino" >Masculino</option>
						<option value="semOpcao">Prefiro não dizer</option>
					</select>
					<input {...register("telephone")} placeholder="Telefone" className="input-text" />
				</Box>

			</Box>
			<Box className="address">
				<Box className="address-country">
					<input {...register("firstName")} placeholder="Pais" />
					<input {...register("firstName")} placeholder="CEP" />
				</Box>
				<Box className="smaller-input">
					<Box>
						<input {...register("firstName")} placeholder="Rua" />
						<input {...register("firstName")} placeholder="Número" />
					</Box>
					<Box>
						<input {...register("firstName")} placeholder="Complemento" />
						<input {...register("firstName")} placeholder="Bairro" />
					</Box>
					<Box>
						<input {...register("firstName")} placeholder="Cidade" />
						<input {...register("firstName")} placeholder="Estado" />
					</Box>
				</Box>
			</Box>
			<button type="submit" className='button-submit register'>Cadastrar</button>
		</form>
	)
}
