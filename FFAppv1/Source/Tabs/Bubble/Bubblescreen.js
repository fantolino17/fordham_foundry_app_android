import React, {Component} from 'react';
import {ScrollView, Text, View, StyleSheet, Image, Animated, Button, TouchableOpacity} from 'react-native';

import InfoList from './InfoList';
import NavBar from '../../Components/Header/NavBar';
import ViewContainer from '../../Components/Common/ViewContainer';
import Icon from 'react-native-vector-icons/Ionicons';

class HomeScreen extends Component {
	render () {
		return (
			<ViewContainer>
			<NavBar wayto = {this.props.navigation}/>
			<ScrollView>
			<Image 
				source={require('../../../Images/EthanKphotoshop.jpg')}
				style={{height:100, width: undefined}}
			/>
			
			<Text style = {styles.mainText1}> You have a great business idea. </Text>
			<Text style = {styles.mainText2}>Now what?</Text>
			<InfoList/>
			</ScrollView>
			</ViewContainer>
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