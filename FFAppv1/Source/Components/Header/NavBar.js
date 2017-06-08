import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class NavBar extends Component {
	render() {
		return (
			<View style = {styles.navBarBackground}>
			<Text style = {styles.textInNav}> Fordham Foundry </Text>
			</View>
			);
	}
}

const styles = StyleSheet.create ({
	navBarBackground: {
		height: 44,
		backgroundColor: "mistyrose",
		alignItems: 'center',
		justifyContent: 'space-around'
	},

	textInNav: {
		fontSize: 20,
		fontWeight: 'bold'
	}

})

export default NavBar