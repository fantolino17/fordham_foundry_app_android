import React from 'react';
import {TextInput, View, Text} from 'react-native';

cost Input = ({label, value, onChangeText, placeholder}) {
	const {inputStyle, labelStyle, containerStyle}

	return (
		<View style = {containerStyle}>
			<Text style = {labelStyle}>{label}</Text>
			<TextInput
				placeholder = {placeholder}
				autoCorrect = {false}
				style = {inputStyle}
				value = {value}
				onChangeText = {onChangeText}
			/>
		</View>
		);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
	},
	containerStyle: {
		height: 40,
		alignItems: 'center'
	}
}

export {Input};