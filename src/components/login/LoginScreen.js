import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

import './LoginScreen.css';

export const LoginScreen = props => {
	const [values, handleInputChange] = useForm({ user: '' });

	const { user } = values;

	const [value, setError] = useState({ error: '' });

	const { error } = value;

	const handleSubmit = e => {
		e.preventDefault();
	};

	const { dispatch } = useContext(AuthContext);

	let history = useHistory();

	const handleLogin = () => {
		if (user.length >= 3) {
			dispatch({
				type: types.login,
				payload: {
					name: user,
				},
			});

			const lastPath = localStorage.getItem('lastPath') || '/';
			history.replace(lastPath);
		} else {
			setError({
				error: 'Name must be at least a three characters long string',
			});
		}
	};

	return (
		<div className='loginScreen'>
			<div className='login'>
				<h2 className='login_title mb-4 mt-5'>Welcome to Heroes App</h2>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Insert your name'
						name='user'
						value={user}
						onChange={handleInputChange}
						autoComplete='off'
					/>
				</form>
				<hr />

				<button className='btn login-btn' onClick={handleLogin}>
					Login
				</button>
				{error && <p className='mt-3'>{error}</p>}
			</div>
		</div>
	);
};
