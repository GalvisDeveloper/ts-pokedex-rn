import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const Loading = () => {
	return (
		<View style={localStyles.activityCt}>
			<ActivityIndicator size={50} color='grey' />
			<Text>loading...</Text>
		</View>
	);
};

export default Loading;

const localStyles = StyleSheet.create({
	activityCt: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
