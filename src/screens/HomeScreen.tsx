import React from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PokemonCard from '../components/PokemonCard';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import styles from '../theme/appTheme';

const HomeScreen = () => {

	const { arrSimplePokemon, loadPokemons } = usePokemonPaginated();

	return (
		<>
			<Image source={require('../assets/pokebola.png')} style={styles.pokebolaBg} />

			<View style={{
				alignItems: 'center',
			}}>
				<FlatList
					renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
					keyExtractor={(pokemon) => pokemon.id}
					showsVerticalScrollIndicator={false}
					numColumns={2}
					data={arrSimplePokemon}
					// Infinite Scroll
					onEndReached={() => loadPokemons()}
					onEndReachedThreshold={0.4}
					ListHeaderComponent={<Text style={{ ...styles.title, ...styles.globalMargin, color: 'black' }}>Pokedex</Text>}
					ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={20} color='gray' />}
				/>
			</View>
		</>
	);
};

export default HomeScreen;
