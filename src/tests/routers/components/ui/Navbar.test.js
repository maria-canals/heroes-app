import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../../../auth/AuthContext';
import { Navbar } from '../../../../components/ui/Navbar';
import { MemoryRouter, Router } from 'react-router';
import { types } from '../../../../types/types';

describe('Pruebas en Navbar', () => {
	const historyMock = {
		push: jest.fn(),
		location: {},
	};

	const contextValue = {
		dispatch: jest.fn(),
		user: {
			logged: true,
			name: 'Fernando',
		},
	};

	const wrapper = mount(
		<MemoryRouter>
			<AuthContext.Provider value={contextValue}>
				{/* <Router history={historyMock}> */}
				<Navbar />
				{/* </Router> */}
			</AuthContext.Provider>
		</MemoryRouter>
	);

	test('debe de mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.text-info').text().trim()).toBe('Fernando');
	});

	// test('debe de llamar el logout y el usar history', () => {
	// 	wrapper.find('button').prop('onClick')();
	// 	expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
	// });
});
