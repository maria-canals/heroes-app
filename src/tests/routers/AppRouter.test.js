import React, { PureComponent, useContext } from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en AppRouter', () => {
	const contextValue = {
		dispatch: jest.fn(),
		user: {
			logged: false,
		},
	};
	test('debe de mostrar el login si no está auntenticado ', () => {
		//

		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de mostrar el componente de marvel si está autenticado', () => {
		//
		const contextValue = {
			dispatch: jest.fn(),
			user: {
				logged: true,
				name: 'Fernando',
			},
		};

		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>
		);
		console.log(wrapper.html());
		expect(wrapper.find('.navbar').exists()).toBe(true);
	});
});
