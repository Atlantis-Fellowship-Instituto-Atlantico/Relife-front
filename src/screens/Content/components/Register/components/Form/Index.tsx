import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form';

import * as yup from "yup";
import "./style.css"

export const Form = () => {
	const schema = yup.object({
		firstName: yup.string().required(),
		age: yup.number().positive().integer().required(),
	}).required();


	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data: any) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form-register">
			<Box className="info">
				<input {...register("firstName")} placeholder="Nome completo" className="input-text" />
				<input {...register("firstName")} placeholder="Email" className="input-text" />
				<Box className="smaller-input">
					<input {...register("firstName")} placeholder="CPF" className="input-text" />
					<input {...register("firstName")} placeholder="Telefone" className="input-text" />
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
