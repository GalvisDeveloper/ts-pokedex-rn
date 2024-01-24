import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

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
			{/* <Stack.Screen name='Notifications' component={Notifications} />
			<Stack.Screen name='Profile' component={Profile} />
			<Stack.Screen name='Settings' component={Settings} /> */}
		</Stack.Navigator>
	);
};

export default Navigator;
