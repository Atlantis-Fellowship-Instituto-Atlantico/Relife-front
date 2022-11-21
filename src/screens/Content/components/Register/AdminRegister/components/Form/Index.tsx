import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import * as yup from "yup";
import "./style.css"


interface IFormInputs {
	role?: string
	email: string
	phone: string
	password: string
	isActive?: boolean
}

export const FormAdmin = () => {

	const validationSchema = yup.object({
		email: yup.string().required("Email é um campo obrigatório").email("E-mail com formato inválido"),
		phone: yup.string().required("Telefone é um campo obrigatório").min(9),
		password: yup.string().required("Senha é um campo obrigatório").min(8)
	})

	const { register, handleSubmit, resetField, formState: { errors }, reset } = useForm<IFormInputs>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmitHandler = (data: IFormInputs) => {
		console.log({ data });
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmitHandler)} className="form-register">
			<Box className="info">
				<Box>
					<label htmlFor='email'>Email *</label>
					<input {...register("email")} placeholder="Ex: email@gmail.com" className="input-text" />
					<p className="error-message">{errors.email?.message}</p>
				</Box>
				<Box className="label-style">
					<label htmlFor='phone'>Telefone*</label>
					<ReactInputMask mask="(99) 99999-999" {...register("phone")} placeholder="(88)98888-8888" className="input-text" />
				</Box>
			</Box>

			<Box className="address">

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
								<label htmlFor='password'>Confirme a senha*</label>
								<input {...register("password")} placeholder="Agora confirme a senha" type="password" />
								<p className="error-message">{errors.password?.message}</p>
							</Box>
						</Box>
					</Box>
				</Box>

			</Box>
			<button type="submit" className='button-submit register'>Cadastrar</button>
		</form >
	)
}
