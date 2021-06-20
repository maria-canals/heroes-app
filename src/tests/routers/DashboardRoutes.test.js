import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import React, { PureComponent } from 'react';

describe('Pruebas en DashboardRoutes', () => {
	const contextValue = {
		dispatch: jest.fn(),
		user: {
			logged: false,
			name: 'Juanito',
		},
	};
	test('debe mostrarse correctamente', () => {
		const wrapper = mount(
			<MemoryRouter>
				<AuthContext.Provider value={contextValue}>
					<DashboardRoutes />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.text-info').text().trim()).toBe('Juanito');
	});
});
