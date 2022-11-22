import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import * as yup from "yup";
import { Institution } from '../../../../../../../Types/Institution';
import "./style.css"



export const FormInstitution = () => {

	const validationSchema = yup.object({
		name: yup.string().required("Nome é um campo obrigatório"),
		responsibleName: yup.string().required("Nome é um campo obrigatório"),
		cnpj: yup.string().required("CNPJ é um campo obrigatório").min(14, "CNPJ necessita de 14 dígitos"),
		email: yup.string().required("Email é um campo obrigatório").email("E-mail com formato inválido"),
		phone: yup.string().required("Telefone é um campo obrigatório").min(9, "Telefone necessita de 9 dígitos"),
		password: yup.string().required("Senha é um campo obrigatório").min(8, "Sua senha necessita no mínimo de 8 dígitos"),

		cep: yup.string().required("CEP é um campo obrigatório").min(8),
		city: yup.string().required("Cidade é um campo obrigatório"),
		state: yup.string().required("Estado é um campo obrigatório"),
		street: yup.string().required("Rua é um campo obrigatório"),
		Neighborhood: yup.string().required("Bairro é um campo obrigatório"),


	})

	const { register, handleSubmit, resetField, formState: { errors }, reset } = useForm<Institution>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmitHandler = (data: Institution) => {
		console.log({ data });
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmitHandler)} className="form-register">
			<Box className="info">
				<Box>
					<label htmlFor='name'>Nome*</label>
					<input {...register("name")} placeholder="Nome completo" className="input-text" />
					<p className="error-message">{errors.name?.message}</p>
				</Box>
				<Box>
					<label htmlFor='responsibleName'>Nome do responsável*</label>
					<input {...register("responsibleName")} placeholder="Digite o nome do responsável" className="input-text" />
					<p className="error-message">{errors.email?.message}</p>
				</Box>
				<Box>
					<label htmlFor='cnpj'>CNPJ *</label>
					<ReactInputMask mask="99.999.999/9999-99" {...register("cnpj")} placeholder="Digite o CNPJ" className="input-text" />
					<p className="error-message">{errors.cnpj?.message}</p>
				</Box>

			</Box>

			<Box className="info-details">
				<Box className="smaller-input">
					<Box className="label-style">
						<label htmlFor='email'>Email*</label>
						<input {...register("email")} placeholder="Ex: email@gmail.com" className="input-text" />
						<p className="error-message">{errors.email?.message}</p>
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
	)
}
