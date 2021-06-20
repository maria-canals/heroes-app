import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
	test('debe de retornar el estado por defecto ', () => {
		//
		const state = authReducer({ logged: false }, {});

		expect(state).toEqual({ logged: false });
	});
	test('debe de autenticar y colocar el name del usuario', () => {
		//

		const action = {
			payload: {
				name: 'Maria',
			},
			type: types.login,
		};

		const state = authReducer({}, action);

		expect(state).toEqual({
			name: 'Maria',
			logged: true,
		});
	});

	test('debe de borrar el name del usuario y logged en false', () => {
		//
		const action = {
			payload: {},
			type: types.logout,
		};

		const state = authReducer({ logged: true, name: 'Carlos' }, action);

		expect(state).toEqual({
			logged: false,
		});
	});
});
