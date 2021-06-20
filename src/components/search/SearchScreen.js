import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroeByName } from '../../selectors/getHeroeByName';
import { useMemo } from 'react';

export const SearchScreen = () => {
	const { push } = useHistory();
	const [formValues, handleInputChange] = useForm({
		searchText: '',
	});

	const { searchText } = formValues;

	const handleSearch = e => {
		e.preventDefault();
		push(`?q=${searchText}`);
	};

	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);

	const heroeFiltered = useMemo(() => getHeroeByName(q), [q]);

	return (
		<div>
			<h1>Search Screen</h1>
			<div className='row'>
				<div className='col-3 mt-4'>
					<h4>Search Form</h4>
					<form onSubmit={handleSearch}>
						<input
							type='text'
							placeholder='Find you hero'
							className='form-control'
							name='searchText'
							value={searchText}
							autoComplete='off'
							onChange={handleInputChange}
						/>
						<button
							type='submit'
							className='btn m-1 btn-block btn-outline-primary mt-2'>
							Search
						</button>
					</form>
				</div>
				<div className='col-9 mt-4'>
					<h4>Results</h4>

					{q === '' && (
						<div className='alert alert-info '>Search for a heroe...</div>
					)}

					{q !== '' && heroeFiltered.length === 0 && (
						<div className=' alert alert-danger'>{`The heroe ${q} doesn't exist`}</div>
					)}

					{
						<div className='row'>
							{heroeFiltered.map(hero => (
								<HeroCard key={hero.id} {...hero} />
							))}
						</div>
					}
				</div>
			</div>
		</div>
	);
};
