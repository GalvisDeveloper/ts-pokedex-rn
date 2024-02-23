import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParams = {
	Search: undefined;
	Pokemon: { simplePokemon: SimplePokemon; color: string };
};

const Stack = createStackNavigator<RootStackParams>();

const NavigatorSearch = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: { backgroundColor: 'transparent' },
				// gestureEnabled: true,
				// cardOverlayEnabled: true,
			}}
		>
			<Stack.Screen name='Search' component={SearchScreen} />
			<Stack.Screen name='Pokemon' component={PokemonScreen} />
		</Stack.Navigator>
	);
};

export default NavigatorSearch;
