import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../theme/appTheme';
import SearchInput from '../components/SearchInput';

const SearchScreen = () => {
	const { top } = useSafeAreaInsets();

	return (
		<View style={{ flex: 1, marginTop: top + 20, ...styles.globalMargin }}>
			<SearchInput />
		</View>
	);
};

export default SearchScreen;
