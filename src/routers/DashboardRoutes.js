import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div
				className='d-flex flex-column
			'>
				<div className='container mt-2'>
					<Switch>
						<Route exact path='/marvel'>
							<MarvelScreen />
						</Route>
						<Route exact path='/hero/:heroeId'>
							<HeroScreen />
						</Route>
						<Route exact path='/dc'>
							<DcScreen />
						</Route>
						<Route exact path='/search'>
							<SearchScreen />
						</Route>
						<Redirect to='/marvel' />
					</Switch>
				</div>
			</div>
		</>
	);
};
