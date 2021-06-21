import React from 'react';
import { Link } from 'react-router-dom';
import { heroesImages } from '../helpers/HeroImages';
import './HeroCard.css';

export const HeroCard = ({
	id,
	superhero,
	alter_ego,
	first_appearance,
	characters,
	publisher,
}) => {
	return (
		<div className='m-2'>
			<Link to={`./hero/${id}`} className='my-card'>
				<img
					// src={`./assets/heroes/${id}.jpg`}
					src={heroesImages(`./${id}.jpg`).default}
					className='img img-responsive'
					alt={superhero}
				/>
				<div className='profile-name'>{superhero}</div>
				<div className='profile-position'>{alter_ego}</div>
				<div className='profile-overview'>
					<div className='profile-overview'>
						<div className='row'>
							<div className='col-ms-4'>
								<h3 className='profile_publisher'>{publisher}</h3>
								<p className='profile_first_appearance'>
									Primera aparición: <br />
									{first_appearance}
								</p>
								{alter_ego !== characters && <p>{characters}</p>}
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};
