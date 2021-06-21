import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = props => {
	const { dispatch } = useContext(AuthContext);

	let history = useHistory();

	const handleLogin = () => {
		dispatch({
			type: types.login,
			payload: {
				name: 'Maria',
			},
		});

		const lastPath = localStorage.getItem('lastPath') || '/';
		history.replace(lastPath);
	};

	return (
		<div className='container mt-5'>
			<h1>Login</h1>

			<hr />

			<button className='btn btn-primary' onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};
