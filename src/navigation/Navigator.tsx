import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
	Home: undefined;
	Pokemon: { simplePokemon: SimplePokemon; color: string };
};

const Stack = createStackNavigator<RootStackParams>();

const Navigator = () => {
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
			{/* <Stack.Screen name='Notifications' component={Notifications} />
			<Stack.Screen name='Profile' component={Profile} />
			<Stack.Screen name='Settings' component={Settings} /> */}
		</Stack.Navigator>
	);
};

export default Navigator;
