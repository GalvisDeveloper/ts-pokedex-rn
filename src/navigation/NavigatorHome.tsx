import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
	Home: undefined;
	Pokemon: { simplePokemon: SimplePokemon; color: string };
};

const Stack = createStackNavigator<RootStackParams>();

const NavigatorHome = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: { backgroundColor: 'transparent' },
				// gestureEnabled: true,
				// cardOverlayEnabled: true,
			}}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Pokemon' component={PokemonScreen} />
		</Stack.Navigator>
	);
};

export default NavigatorHome;
