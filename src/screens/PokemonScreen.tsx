import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import FadeInImage from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import { RootStackParams } from '../navigation/NavigatorHome';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> {}

const PokemonScreen = ({ navigation, route }: Props) => {
	const { simplePokemon, color } = route.params;
	const { id, name, picture } = simplePokemon;
	const { top } = useSafeAreaInsets();

	const { pokemon, isLoading } = usePokemon(id);
	
	return (
		<View style={{ flex: 1 }}>
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
					{name + '\n'} #{id}
				</Text>

				{/* White pokeball */}
				<Image source={require('../assets/pokebola-blanca.png')} style={{ ...localStyles.pokeball }} />

				<FadeInImage uri={picture} style={localStyles.pokeballImage} />
			</View>

			{isLoading ? (
				<View style={{ ...localStyles.loadingIndicator }}>
					<ActivityIndicator color={color} size={50} />
				</View>
			) : (
				<PokemonDetails pokemon={pokemon} />
			)}
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
	},
	pokeballImage: {
		width: 250,
		height: 250,
		position: 'absolute',
		bottom: -15,
	},
	loadingIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
