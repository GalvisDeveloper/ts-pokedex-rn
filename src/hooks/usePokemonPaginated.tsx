import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

const usePokemonPaginated = () => {
	const [arrSimplePokemon, setArrPokemons] = useState<SimplePokemon[]>([]);

	const [isLoading, setIsLoading] = useState(true);

	const url = 'https://pokeapi.co/api/v2/pokemon?limit=40';

	const nextPage = useRef(url);

	const loadPokemons = async () => {
		const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPage.current);
		nextPage.current = resp.data.next;
		setIsLoading(true);
		mapArrPokemons(resp.data.results);
	};

	// https://pokeapi.co/api/v2/pokemon/440/

	const mapArrPokemons = (pokemons: Result[]) => {
		const newPokemonList: SimplePokemon[] = pokemons.map(({ name, url }) => {
			const urlParts = url.split('/');
			const id = urlParts[urlParts.length - 2];
			const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

			return { id, picture, name };
		});

		setArrPokemons([...arrSimplePokemon, ...newPokemonList]);
		setIsLoading(false);
	};

	useEffect(() => {
		loadPokemons();
	}, []);

	return {
		arrSimplePokemon,
		isLoading,

		loadPokemons,
	};
};

export default usePokemonPaginated;
