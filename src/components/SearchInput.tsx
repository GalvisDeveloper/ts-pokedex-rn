import React from 'react';
import { StyleSheet, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
	onPress: () => void;
	styles?: object;
}

const SearchInput = ({ onPress, styles }: Props) => {
	return (
		<View style={{ ...localStyles.ct }}>
			<View style={{ ...localStyles.textBg }}>
				<TextInput
					placeholder='Search...'
					style={{ ...localStyles.textInput }}
					autoCapitalize='none'
					autoCorrect={false}
					placeholderTextColor={'grey'}
				/>

				<TouchableOpacity
					activeOpacity={0.8}
					style={{ marginLeft: 10 }}
					onPress={() => {
						console.log('search');
					}} // TODO: Implement search functionality
				>
					<Icon name='search-outline' color='grey' size={30} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SearchInput;

const localStyles = StyleSheet.create({
	ct: {
		// backgroundColor: 'red',
	},
	textBg: {
		backgroundColor: '#F3F3F3',
		borderRadius: 50,
		height: 40,
		paddingHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
	textInput: {
		flex: 1,
		fontSize: 18,
		color: 'black',
	},
});
