import React, {Component} from 'react';
import {Text, View} from 'react-native';

import NavBar from '../../Components/Header/NavBar';

class Loginscreen extends Component {
	render () {
		return (
			<View>
			<NavBar wayto = {this.props.navigation}/>
			<Text> Hello this is the Login page </Text>
			</View>
			);
	}
}

export default Loginscreen;