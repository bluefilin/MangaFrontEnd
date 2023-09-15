import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from '../hook/useForm';
import "./LoginPage.css"

export const LoginPage = () => {
  const navigate = useNavigate();
  const { usuario, correo, onInputChange } = useForm({
    usuario: '',
    correo: '',
  });

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/usuario/login', {
        usuario: usuario,
        correo: correo,
      });

      if (response.status === 200) {
        // Inicio de sesión exitoso, redirige al usuario al dashboard o realiza otras acciones
        navigate('/dashboard', {
          replace: true,
          state: {
            logged: true,
          },
        });
      } else {
        // Manejar errores en caso de que la respuesta no sea exitosa
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={onLogin}>
        <h1>Iniciar Sesión</h1>
        <div className='input-group'>
          <input
            type='text'
            name='usuario'
            value={usuario}
            onChange={onInputChange}
            required
            autoComplete='off'
          />
          <label htmlFor='usuario'>Usuario:</label>
        </div>
        <div className='input-group'>
          <input
            type='email'
            name='correo'
            value={correo}
            onChange={onInputChange}
            required
            autoComplete='off'
          />
          <label htmlFor='correo'>Correo:</label>
        </div>
        {/* Agrega un campo para la contraseña si es necesario */}
        {/* <div className='input-group'>
             <input
               type='password'
               name='password'
               value={password}
               onChange={onInputChange}
               required
               autoComplete='off'
             />
             <label htmlFor='password'>Contraseña:</label>
           </div> */}
        <button>Iniciar Sesión</button>
      </form>
    </div>
  );
};
