import React, { useEffect, useState } from 'react';
import { PokemonInfo } from '../interfaces/pokemonInfoInterfaces';
import { pokemonApi } from '../api/pokemonApi';

const usePokemon = (id: string) => {
	const [isLoading, setIsLoading] = useState(true);

	const [pokemon, setPokemon] = useState<PokemonInfo>({} as PokemonInfo);

	const loadPokemon = async () => {
		const resp = await pokemonApi.get<PokemonInfo>(`/pokemon/${id}`);
		setPokemon(resp.data);
		setIsLoading(false);
	};

	useEffect(() => {
        loadPokemon();
    }, []);

	return {
		//states
		isLoading,
		pokemon,

		//functions
		loadPokemon,
	};
};

export default usePokemon;
