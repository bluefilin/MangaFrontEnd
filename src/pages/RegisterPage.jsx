import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import axios from 'axios';


export const RegisterPage = () => {
	const navigate = useNavigate();

	const { name, email, password, onInputChange, onResetForm } =
		useForm({
			name: '',
			email: '',
			password: '',
		});

const onRegister = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('/api/usuario/registrar', {
      identificacion: '', // Coloca aquí el valor de identificación si es necesario
      nombre: '',      // Utiliza el nombre del estado local
      apellido: '',      // Coloca aquí el valor de apellido si es necesario
      usuario: '',       // Coloca aquí el valor de usuario si es necesario
      correo: '',     // Utiliza el correo electrónico del estado local
      celular: '',       // Coloca aquí el valor de celular si es necesario
    });

    if (response.status === 200) {
      // Registro exitoso, puedes redirigir al usuario al dashboard o realizar otras acciones
      navigate('/dashboard', {
        replace: true,
        state: {
          logged: true,
          name: '', // Utiliza el nombre del estado local
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
						name='name'
						id='name'
						value={name}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='name'>Nombre:</label>
				</div>

				<div className='input-group'>
					<input
						type='email'
						name='email'
						id='email'
						value={email}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='email'>Email:</label>
				</div>
				<div className='input-group'>
					<input
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='password'>Contraseña:</label>
				</div>

				<button>Registrarse</button>
			</form>
		</div>
	);
};
