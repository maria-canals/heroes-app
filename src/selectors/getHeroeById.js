import { heroes } from '../data/heroes';

export const getHeroeById = heroeId => {
	return heroes.find(hero => hero.id === heroeId);
};
