import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const MarvelScreen = () => {
	return (
		<div className='my-5'>
			<h1 className='my-5'>Marvel</h1>
			<HeroList publisher={'Marvel Comics'} />
		</div>
	);
};
