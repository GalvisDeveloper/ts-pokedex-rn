import React from 'react';
import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import FadeInImage from './FadeInImage';

interface Props {
	pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
	const { width: screenX } = useWindowDimensions();

	return (
		<TouchableOpacity>
			<View
				style={{
					...localStyles.cardCt,
					width: screenX * 0.4,
				}}
			>
				{/* Pokemon's name and id  */}
				<View>
					<Text style={{ ...localStyles.name }}>
						{pokemon.name} {'\n#' + pokemon.id}
					</Text>
				</View>

				<View style={{ ...localStyles.pokeCt }}>
					<Image source={require('../assets/pokebola-blanca.png')} style={{ ...localStyles.pokeball }} />
				</View>

				{/* Pokemon's image */}
				<FadeInImage uri={pokemon.picture} style={{ ...localStyles.pokemonImage }} />
			</View>
		</TouchableOpacity>
	);
};

export default PokemonCard;

const localStyles = StyleSheet.create({
	cardCt: {
		marginHorizontal: 10,
		backgroundColor: '#1c5386',
		height: 120,
		width: 160,
		marginBottom: 25,
		borderRadius: 10,

		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	name: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
	pokeball: {
		width: 100,
		height: 100,
		position: 'absolute',
		right: -20,
		bottom: -20,
		opacity: 0.5,
	},
	pokemonImage: {
		width: 100,
		height: 100,
		position: 'absolute',
		right: -25,
	},
	pokeCt: {
		width: 100,
		height: 100,
		position: 'absolute',
		right: 0,
		bottom: 0,
		overflow: 'hidden',
	},
});
