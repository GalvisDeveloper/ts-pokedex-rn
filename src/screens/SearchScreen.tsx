import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import styles from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const SearchScreen = () => {
	const { top } = useSafeAreaInsets();
	const { width: screenX } = useWindowDimensions();

	const { isFetching, arrSimplePokemon } = usePokemonSearch();

	const [term, setTerm] = useState('');

	const [pokemonsFiltered, setPokemonsFiltered] = useState<SimplePokemon[]>([]);

	useEffect(() => {
		if (term.length === 0) return setPokemonsFiltered([]);

		if(isNaN(Number(term))) { 
			setPokemonsFiltered(arrSimplePokemon.filter((poke) => poke.name.toLowerCase().includes(term.toLowerCase())));
		} else {
			const pokemonById = arrSimplePokemon.find((poke) => poke.id === term);
			setPokemonsFiltered(pokemonById ? [pokemonById] : []);
		} 
	}, [term]);

	if (isFetching) {
		return <Loading />;
	}

	return (
		<View style={{ flex: 1, marginTop: top + 20, ...styles.globalMargin }}>
			<SearchInput
				style={{
					position: 'absolute',
					zIndex: 999,
					width: screenX - 40,
					top,
				}}
				onDebounce={(val) => {
					setTerm(val);
				}}
			/>

			<FlatList
				data={pokemonsFiltered}
				renderItem={({ item }) => <PokemonCard pokemon={item} />}
				keyExtractor={(item) => item.id}
				numColumns={2}
				style={{ marginTop: 50 }}
				// Header
				ListHeaderComponent={
					term ? <Text style={{ ...styles.title, color: 'black', marginBottom: 10 }}>{term}</Text> : <></>
				}
				// Footer
				ListFooterComponent={() => <View style={{ marginBottom: 100 }} />}
			/>
		</View>
	);
};

export default SearchScreen;
