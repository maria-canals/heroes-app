import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
	const { push } = useHistory();

	const {
		user: { name },
		dispatch,
	} = useContext(AuthContext);

	const handleLogout = () => {
		dispatch({
			type: types.logout,
		});

		push('/login');
	};

	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
			<div className='navbar-collapse'>
				<div className='navbar-nav mx-4'>
					<NavLink
						activeClassName='active'
						className='nav-item nav-link'
						exact
						to='/marvel'>
						Marvel
					</NavLink>

					<NavLink
						activeClassName='active'
						className='nav-item nav-link'
						exact
						to='/dc'>
						DC
					</NavLink>

					<NavLink
						activeClassName='active'
						className='nav-item nav-link'
						exact
						to='/search'>
						Search
					</NavLink>
				</div>
			</div>

			<div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
				<ul className='navbar w-100 align-items-end'>
					<span className='nav-item nav-link text-info mt-3'>{name}</span>
					<button className='nav-item nav-link btn mx-4' onClick={handleLogout}>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
