import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import axios from 'axios';


export const RegisterPage = () => {
	const navigate = useNavigate();

	const { nombre, correo, contraseña, apellido, usuario, celular, onInputChange, onResetForm } =
		useForm({
			nombre: '',
			correo: '',
			contraseña: '',
			apellido: '',
			usuario: '',
			celular: '',
		});

		const onRegister = async (data, e) => {
			e.preventDefault();
		  
			try {
			  const response = await axios.post('/api/usuario/registrar', {
				nombre:data.nombre,
				apellido:data.apellido,
				usuario:data.usuario,
				correo:data.correo,
				contrasena:data.contraseña, // Renombramos la contraseña a contrasena para que coincida con el backend
				celular:data.celular,
			  });
		  
			  if (response.status === 200) {
				console.log(response); // Agrega esta línea para verificar la respuesta
				// Resto del código para redireccionar
				// Registro exitoso, puedes redirigir al usuario al dashboard o realizar otras acciones
				navigate('/dashboard', {
				  replace: true,
				  state: {
					logged: true,
					name: nombre,
				  },
				});
		  
				// También puedes limpiar el formulario aquí si es necesario
				onResetForm();
			  } else {
				// Manejar errores en caso de que la respuesta no sea exitosa
				console.error('Error al registrar usuario');
			  }
			} catch (error) {
			  console.error('Error al registrar usuario:', error);
			}
		  };
		  


	return (
		<div className='wrapper'>
			<form onSubmit={onRegister}>
				<h1>Registrarse</h1>

				<div className='input-group'>
					<input
						type='text'
						name='nombre'
						id='nombre'
						value={nombre}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='nombre'>Nombre:</label>
				</div>

				<div className='input-group'>
					<input
						type='text'
						name='apellido'
						id='apellido'
						value={apellido}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='apellido'>Apellido:</label>
				</div>
				
				<div className='input-group'>
					<input
						type='text'
						name='usuario'
						id='usuario'
						value={usuario}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='usuario'>Usuario:</label>
				</div>

				<div className='input-group'>
					<input
						type='text'
						name='correo'
						id='correo'
						value={correo}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='correo'>Email:</label>
				</div>

				<div className='input-group'>
					<input
						type='password'
						name='contraseña'
						id='contraseña'
						value={contraseña}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='contraseña'>Contraseña:</label>
				</div>

				<div className='input-group'>
					<input
						type='text'
						name='celular'
						id='celular'
						value={celular}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='celular'>Celular:</label>
				</div>

				<button>Registrarse</button>
			</form>
		</div>
	);
};
