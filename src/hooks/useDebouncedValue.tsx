import React, { useEffect, useState } from 'react';

const useDebouncedValue = (value: string = '', time: number = 500) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, time);

		return () => {
			clearTimeout(timeout);
		};
	}, [value]);

	return {
		debouncedValue,
	};
};

export default useDebouncedValue;
