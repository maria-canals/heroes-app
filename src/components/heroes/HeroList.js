import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
	// const heroes = getHeroesByPublisher(publisher);
	return (
		<div className='d-flex flex-wrap animate__animated animate__fadeIn align-items-center justify-content-center'>
			{heroes.map(hero => (
				<HeroCard key={hero.id} {...hero}></HeroCard>
			))}
		</div>
	);
};
