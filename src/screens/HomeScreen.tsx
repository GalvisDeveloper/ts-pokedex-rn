import React from 'react';
import { Image, Text } from 'react-native';
import styles from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePokemonPaginated from '../hooks/usePokemonPaginated';

const HomeScreen = () => {
	const { top } = useSafeAreaInsets();

	const { arrSimplePokemon } = usePokemonPaginated();

	

	return (
		<>
			<Image source={require('../assets/pokebola.png')} style={styles.pokebolaBg} />
			<Text style={{ ...styles.title, ...styles.globalMargin, color: 'black', top: top + 20 }}>Pokedex</Text>
		</>
	);
};

export default HomeScreen;
