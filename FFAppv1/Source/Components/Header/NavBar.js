import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

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
		justifyContent: 'center',
		flexDirection: 'row'
	},

	textInNav: {
		fontSize: 20,
		fontWeight: 'bold'
	},

	calbutton: {
		alignItems: 'flex-end'
	}

});

export default NavBar