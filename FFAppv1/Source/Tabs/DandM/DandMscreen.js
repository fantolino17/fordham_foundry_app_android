import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Linking} from 'react-native';

import NavBar from '../../Components/Header/NavBar';
import ViewContainer from '../../Components/Common/ViewContainer';
import DandMList from './DandMList';
import {ButtonCont, Button} from '../../Components/Common';

class DandMscreen extends Component {
	render () {
		return (
			<ViewContainer>
			<NavBar/>
			<View style = {styles.container}>
			<Text style = {styles.textStyle}> Click the rows to learn more about each mentor </Text>
			</View>
			<DandMList/>
			<ButtonCont>
			<Button onPress = {() => Linking.openURL('https://www.fordhamfoundry.org/about-us/team/')}> Click to learn more </Button>
			</ButtonCont>
			</ViewContainer>
			);
	}
}

const styles = StyleSheet.create ({
	container : {
		backgroundColor: 'black',
		alignItems: 'center'
	},
	textStyle: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'GillSans',
		textAlign: 'center'
	}
})

export default DandMscreen;