import React, { useMemo } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { getHeroeById } from '../../selectors/getHeroeById';
import { heroesImages } from '../helpers/HeroImages';

export const HeroScreen = () => {
	const { heroeId } = useParams();
	const { goBack } = useHistory();

	const hero = useMemo(() => getHeroeById(heroeId), [heroeId]);
	// const hero = getHeroeById(heroeId);

	if (!hero) {
		return <Redirect to='/' />;
	}

	const handleReturn = () => {
		goBack();
	};

	const { superhero, alter_ego, first_appearance, characters, publisher } =
		hero;

	return (
		<div className='row mt-5 '>
			<div className='col-4'>
				<img
					// src={`../assets/heroes/${heroeId}.jpg`}
					src={heroesImages(`./${heroeId}.jpg`).default}
					// src={heroImages(`${superhero}.jpg`)}
					alt={superhero}
					className='img-thumbnail animate__animated animate__fadeInLeft'
				/>
			</div>
			<div className='col-8'>
				<h3>{superhero}</h3>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<b>Alter ego: </b>
						{alter_ego}
					</li>
					<li className='list-group-item'>
						<b>Publisher: </b>
						{publisher}
					</li>
					<li className='list-group-item'>
						<b>First appearance: </b>
						{first_appearance}
					</li>
					<br />
				</ul>
				<h5 className='characters_title mt-3'>Characters</h5>
				<p className='list-group-item'>{characters}</p>

				<button className='btn btn-outline-info' onClick={handleReturn}>
					Return
				</button>
			</div>
		</div>
	);
};
