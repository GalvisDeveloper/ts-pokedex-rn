import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

const usePokemonSearch = () => {
	const [arrSimplePokemon, setArrPokemons] = useState<SimplePokemon[]>([]);

	const [isFetching, setIsFetching] = useState(true);

	const url = '/pokemon?limit=1200';

	const loadPokemons = async () => {
		const resp = await pokemonApi.get<PokemonPaginatedResponse>(url);
		mapArrPokemons(resp.data.results);
	};

	const mapArrPokemons = (pokemons: Result[]) => {
		const newPokemonList: SimplePokemon[] = pokemons.map(({ name, url }) => {
			const urlParts = url.split('/');
			const id = urlParts[urlParts.length - 2];
			const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

			return { id, picture, name };
		});

		setArrPokemons(newPokemonList);
		setIsFetching(false);
	};

	useEffect(() => {
		loadPokemons();
	}, []);

	return {
		arrSimplePokemon,
		isFetching,
	};
};

export default usePokemonSearch;
