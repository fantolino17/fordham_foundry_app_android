import React, {Component} from 'react';
import {ScrollView, Text, View, StyleSheet, Animated, Button} from 'react-native';

import LibraryList from '../../Components/LibraryList';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import * as Animatable from 'react-native-animatable';

class HomeScreen extends Component {
	render () {
		return (
			<ScrollView ref = "scrollView" style = {{flex: 1}}>
			<View alignItems = 'center'>
			<Text style = {styles.mainText1}> You have a great business idea. </Text>
			<Text style = {styles.mainText2}>Now what?</Text>
			<Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
					<Icon name = "arrow-down" size = {15}/>
					<Icon name = "arrow-down" size = {15}/>
			</Animatable.View>
			<Text> About </Text>
			<Text> About </Text>
			<Text> About </Text>
			<Text> About </Text>
			<Text> About </Text>
			<Text> About </Text>
			<Text> About </Text>
			<Text> About </Text>
			<Text> About </Text>
			</View>
			<LibraryList/>
			<Button title  = "Scroll to Top" onPress = {() => this.refs.scrollView.scrollTo({y: 0, animated: true})}/>
			</ScrollView>
			);
	}
}

const styles = StyleSheet.create ({
	sloganText: {
		alignItems: 'center'
	},
	mainText1: {
		marginTop: 20
	},
	mainText2: {
		marginBottom: 10
	}


});

export default HomeScreen;