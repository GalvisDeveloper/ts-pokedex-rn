import React from 'react';
import { PokemonInfo } from '../interfaces/pokemonInfoInterfaces';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../theme/appTheme';
import FadeInImage from './FadeInImage';

interface Props {
	pokemon: PokemonInfo;
}

const PokemonDetails = ({ pokemon }: Props) => {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false} // iOS
			style={{
				...StyleSheet.absoluteFillObject,
			}}
		>
			{/* Types */}
			<View style={{ ...localStyles.ct, marginTop: 370 }}>
				<Text style={{ ...localStyles.title }}>{pokemon.name}</Text>

				<View style={{ flexDirection: 'row' }}>
					<Text style={{ ...localStyles.title }}>
						{pokemon.types.map(({ type }) => {
							return (
								<Text style={{ ...localStyles.regularText }} key={type.name}>
									{type.name}
								</Text>
							);
						})}
					</Text>
				</View>
			</View>

			{/* Sprites */}
			<View style={{ ...localStyles.ct }}>
				<View>
					<Text style={{ ...localStyles.title }}>Sprites</Text>
				</View>

				<ScrollView
					//style
					horizontal={true}
					showsHorizontalScrollIndicator={false} // iOS
				>
					<FadeInImage uri={pokemon.sprites.front_default} style={localStyles.basicSprite} />
					<FadeInImage uri={pokemon.sprites.back_default} style={localStyles.basicSprite} />
					<FadeInImage uri={pokemon.sprites.back_shiny} style={localStyles.basicSprite} />
					<FadeInImage uri={pokemon.sprites.front_shiny} style={localStyles.basicSprite} />
				</ScrollView>
			</View>

			{/* Abilities */}
			<View style={{ ...localStyles.ct }}>
				<Text style={{ ...localStyles.title }}>Abilities</Text>
				<View>
					{pokemon.abilities.map(({ ability }) => {
						return (
							<Text style={{ ...localStyles.regularText }} key={ability.name}>
								{ability.name}
							</Text>
						);
					})}
				</View>
			</View>

			{/* Moves */}
			<View style={{ ...localStyles.ct }}>
				<Text style={{ ...localStyles.title }}>Moves</Text>
				<View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
					{pokemon.moves.map(({ move }) => {
						return (
							<Text style={{ ...localStyles.regularText }} key={move.name}>
								{move.name}
							</Text>
						);
					})}
				</View>
			</View>

			{/* Stats */}
			<View style={{ ...localStyles.ct }}>
				<Text style={{ ...localStyles.title }}>Stats</Text>
				<View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
					{pokemon.stats.map((stat, idx) => {
						return (
							<View key={stat.stat.name + idx} style={{ flexDirection: 'row' }}>
								<Text style={{ ...localStyles.regularText, marginRight: 10, width: 150 }}>
									{stat.stat.name}
								</Text>

								<Text style={{ ...localStyles.regularText, fontWeight: 'bold' }}>{stat.base_stat}</Text>
							</View>
						);
					})}
				</View>
			</View>

			{/* Sprite Final */}
			<View style={{ marginBottom: 80, alignItems: 'center' }}>
				<FadeInImage uri={pokemon.sprites.front_default} style={localStyles.basicSprite} />
			</View>
		</ScrollView>
	);
};

export default PokemonDetails;

const localStyles = StyleSheet.create({
	ct: {
		marginHorizontal: 20,
	},
	title: {
		...styles.title,
		fontSize: 22,
		color: 'black',
		marginTop: 20,
	},
	regularText: {
		fontSize: 17,
		marginRight: 10,
		color: 'black',
	},
	typesCt: {
		marginTop: 20,
	},
	basicSprite: {
		width: 100,
		height: 100,
	},
});
