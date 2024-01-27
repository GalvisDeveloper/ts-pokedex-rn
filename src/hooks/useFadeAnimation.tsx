import { useRef } from 'react';
import { Animated, Easing, PanResponder } from 'react-native';

interface Props {
	initialOpacity?: number;
	initialPosition?: number;
	timer?: number;
}

const useFadeAnimation = ({ initialOpacity = 0, timer = 500, initialPosition = -100 }: Props = {}) => {
	const opacity = useRef(new Animated.Value(initialOpacity)).current;
	const position = useRef(new Animated.Value(initialPosition)).current;

	const pan = useRef(new Animated.ValueXY()).current;

	const fadeIn = (callback?: Function) => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: timer,
			useNativeDriver: true,
		}).start(() => callback && callback());
	};

	const fadeOut = () => {
		Animated.timing(opacity, {
			toValue: initialOpacity,
			duration: timer,
			useNativeDriver: true,
		}).start();

		Animated.timing(position, {
			toValue: initialPosition,
			duration: timer,
			useNativeDriver: true,
		}).start();
	};

	const startMovingAnimation = () => {
		position.setValue(initialPosition);
		Animated.timing(position, {
			toValue: 0,
			duration: timer,
			useNativeDriver: true,
			easing: Easing.bounce,
		}).start();
	};

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
			useNativeDriver: false,
		}),
		onPanResponderRelease: () => {
			Animated.spring(pan, {
				toValue: { x: 0, y: 0 },
				useNativeDriver: false,
			}).start();
		},
	});

	return {
		// constants - states
		opacity,
		position,
		pan,

		// functions
		fadeIn,
		fadeOut,
		startMovingAnimation,
		panResponder,
	};
};

export default useFadeAnimation;