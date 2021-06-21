import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {
	return (
		<div className='my-5'>
			<h1 className='my-5'>DC</h1>
			<HeroList publisher='DC Comics' />
		</div>
	);
};
