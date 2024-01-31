import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigator';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FadeInImage from '../components/FadeInImage';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> {}

const PokemonScreen = ({ navigation, route }: Props) => {
	const { simplePokemon, color } = route.params;

	const { top } = useSafeAreaInsets();

	return (
		<View>
			<View
				style={{
					...localStyles.headerContainer,
					backgroundColor: color,
				}}
			>
				<TouchableOpacity
					activeOpacity={0.8}
					style={{ top: top + 5, ...localStyles.backBtn }}
					onPress={() => navigation.pop()}
				>
					<Icon name='arrow-back-outline' size={30} color='white' />
				</TouchableOpacity>
				<Text style={{ ...localStyles.pokemonName, top: top + 50 }}>
					{simplePokemon.name + '\n'} #{simplePokemon.id}
				</Text>

				{/* White pokeball */}
				<Image source={require('../assets/pokebola-blanca.png')} style={{ ...localStyles.pokeball }} />

                <FadeInImage uri={simplePokemon.picture} style={localStyles.pokeballImage} />
			</View>
		</View>
	);
};

export default PokemonScreen;

const localStyles = StyleSheet.create({
	headerContainer: {
		height: 370,
		zIndex: 999,
		alignItems: 'center',
		borderBottomRightRadius: 1000,
		borderBottomLeftRadius: 1000,
	},
	backBtn: {
		position: 'absolute',
		left: 20,
	},
	pokemonName: {
		color: 'white',
		fontSize: 40,
		alignSelf: 'flex-start',
		left: 20,
	},
	pokeball: {
		width: 250,
		height: 250,
		bottom: -20,
		// opacity: 0.7,
		// position: 'absolute',
		// zIndex: -1,
		// transform: [{ rotate: '-20deg' }],
	},
    pokeballImage : { 
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    }
});
