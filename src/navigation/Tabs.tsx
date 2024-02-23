import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../screens/SearchScreen';
import NavigatorHome from './NavigatorHome';
import NavigatorSearch from './NavigatorSearch';

const TabIos = createBottomTabNavigator();
// const TabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
	return (
		<TabIos.Navigator
			sceneContainerStyle={{
				backgroundColor: '#d3cdcd',
			}}
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: '#5856D6',
				tabBarLabelStyle: {
					marginBottom: Platform.OS === 'ios' ? 0 : 10,
				},
				tabBarStyle: {
					position: 'absolute',
					backgroundColor: 'rgba(255, 255, 255, 0.92)',
					borderWidth: 0,
					elevation: 0,
					height: Platform.OS === 'ios' ? 80 : 60,
				},
				headerShown: false,
			})}
		>
			<TabIos.Screen
				name='Navigator'
				options={{
					tabBarLabel: 'Pokemons',
					tabBarIcon: ({ color }) => <Icon name='list-outline' size={25} color={color} />,
				}}
				component={NavigatorHome}
			/>

			<TabIos.Screen
				name='SearchScreen'
				options={{
					tabBarLabel: 'Search',
					tabBarIcon: ({ color }) => <Icon name='search-outline' size={25} color={color} />,
				}}
				component={NavigatorSearch}
			/>
		</TabIos.Navigator>
	);
};

export default Tabs;
