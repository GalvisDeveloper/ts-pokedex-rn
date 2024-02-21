import React from 'react';
import { ActivityIndicator, FlatList, Platform, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../theme/appTheme';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';

const SearchScreen = () => {
	const { top } = useSafeAreaInsets();
	const { width: screenX } = useWindowDimensions();

	const { isFetching, arrSimplePokemon, loadPokemons } = usePokemonSearch();

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
				onPress={() => {
					loadPokemons();
				}}
			/>

			<FlatList
				data={arrSimplePokemon}
				renderItem={({ item }) => <PokemonCard pokemon={item} />}
				keyExtractor={(item) => item.id}
				numColumns={2}
				style={{ marginTop: 50 }}
				// Footer
				ListFooterComponent={() => <View style={{ marginBottom: 100 }} />}
			/>
		</View>
	);
};

export default SearchScreen;
