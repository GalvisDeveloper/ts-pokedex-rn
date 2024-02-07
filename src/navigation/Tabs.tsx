import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../screens/SearchScreen';
import Navigator from './Navigator';
import { Platform } from 'react-native';

const TabIos = createBottomTabNavigator();
// const TabAndroid = createMaterialBottomTabNavigator();

enum RouteTypes {
	Navigator = 'Navigator',
	SearchScreen = 'SearchScreen',
}

const ROUTES = {
	[RouteTypes.Navigator]: 'list-outline',
	[RouteTypes.SearchScreen]: 'search-outline',
};

type TabBarIconProps = {
	focused: boolean;
	color: string;
};

// export const BottomTabs = (props: any) => {
// 	return Platform.OS === 'ios' ? <BottomTabsIOS {...props} /> : <BottomTabsAndroid {...props} />;
// };

const TabIcons = (route: RouteProp<ParamListBase, string>, props: TabBarIconProps) => {
	let iconName: RouteTypes = (route.name as RouteTypes) || '';
	return <Icon name={ROUTES[iconName]} />;
};

// const BottomTabsAndroid = () => {
// 	return (
// 		<TabAndroid.Navigator
// 			sceneAnimationEnabled={true}
// 			barStyle={{
// 				backgroundColor: '#fff',
// 			}}
// 			screenOptions={({ route }) => ({
// 				tabBarIcon: (props) => {
// 					return TabIcons(route, props);
// 				},
// 			})}
// 		>
// 			<TabAndroid.Screen name='Navigator' options={{ title: 'Icons' }} component={Navigator} />
// 			<TabAndroid.Screen name='SearchScreen' options={{ title: 'Chats' }} component={SearchScreen} />
// 		</TabAndroid.Navigator>
// 	);
// };

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
				// tabBarIcon: (props) => {
				// 	return TabIcons(route, props);
				// },
			})}
		>
			<TabIos.Screen
				name='Navigator'
				options={{
					tabBarLabel: 'Navigator',
					tabBarIcon: ({ color }) => <Icon name='list-outline' size={25} color={color} />,
				}}
				component={Navigator}
			/>
			<TabIos.Screen
				name='SearchScreen'
				options={{
					tabBarLabel: 'Search',
					tabBarIcon: ({ color }) => <Icon name='search-outline' size={25} color={color} />,
				}}
				component={SearchScreen}
			/>
		</TabIos.Navigator>
	);
};

export default Tabs;
