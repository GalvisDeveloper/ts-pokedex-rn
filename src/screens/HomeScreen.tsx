import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
	const { top } = useSafeAreaInsets();

	return (
		<>
			<Image source={require('../assets/pokebola.png')} style={styles.pokebolaBg} />
			<Text style={{ ...styles.title, ...styles.globalMargin, color: 'black', top: top + 20 }}>Pokedex</Text>
		</>
	);
};

export default HomeScreen;
