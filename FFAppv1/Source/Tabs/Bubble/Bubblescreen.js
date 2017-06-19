import React, {Component} from 'react';
import {ScrollView, Text, View, StyleSheet, Image, Animated, Button, TouchableOpacity, Linking} from 'react-native';

import InfoList from './InfoList';
import NavBar from '../../Components/Header/NavBar';
import ViewContainer from '../../Components/Common/ViewContainer';
import Panel from '../../Components/Common/Panel';
import PanelToView from '../../Components/Common/PanelToView';
import MediaButtons from '../../Components/Common/MediaButtons';
import call from 'react-native-phone-call';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons'; 


class HomeScreen extends Component {
	render () {
		return (
			<ViewContainer>
			<ScrollView style = {styles.container}>
			<Image 
				source={require('../../../Images/fordham-rams-logo.png')}
				style={{height:150, width: undefined}}
			/>
			<Panel title = "What is the Foundry?">
				<Text style = {styles.messageT}>The Foundry is Fordham University’s business and idea incubator,
				open to students, alumni, community, and the entrepreneurial organisations
				they are part of. This is a space where entrepreneurs can create, refine and
				grow their ideas. </Text>
			</Panel>
			<Panel title = "You have a great business idea. Now what?">
				<Text style = {styles.messageT}> Let us help you take your idea to the next level! </Text>
				<Text style = {styles.offer}> We offer: </Text>
				<Text style = {styles.messageT}>{'	-Mentorship and consulting\n	-Speakers, workshops, and other events\n	-Legal assistance via the FELC\n	(Fordham Entrepreneurial Law Clinic)\n	-And more!'} </Text>
				<Text style = {styles.lastOne} fontWeight = "bold"> *Tell us about your ideas using our email address down below.</Text>
				<Text style = {styles.lastTwo} fontWeight = "bold"> *Come visit us soon!</Text>
			</Panel>
			<PanelToView title = "Directors and Mentors" wayto = {this.props.navigation}>
				<Text style = {styles.dandmT}> To learn more about the directors and mentors here at the Fordham Foundry visit:</Text>
				<View style = {styles.dandmP}>
				<IonIcon name = "ios-home" size = {20}/>
				</View>
			</PanelToView>
			<Panel title = "Business Partners">
				<View style = {styles.businessP}>
				<TouchableOpacity onPress = {() => Linking.openURL('https://group.bnpparibas/en/group/corporate-social-responsibility')}>
				<Image
					source = {require('../../../Images/bnp-paribas.png')}
					style = {{height:40, width: 135}}
				/>
				</TouchableOpacity>
				<TouchableOpacity onPress = {() => Linking.openURL('http://thecenter.nasdaq.org')}>
				<Image
					source = {require('../../../Images/nasdaq.png')}
					style = {{height:40, width: 135}}
				/>
				</TouchableOpacity>
				</View>
				<View style = {styles.businessP}>
				<TouchableOpacity onPress = {() => Linking.openURL('https://www1.nyc.gov/nycbusiness/topicpage/support-for-businesses#topic7')}>
				<Image
					source = {require('../../../Images/nycbusiness.png')}
					style = {{height:40, width: 135}}
				/>
				</TouchableOpacity>
				<TouchableOpacity onPress = {() => Linking.openURL('https://www.fordham.edu/info/23746/social_innovation_collaboratory')}>
				<Image
					source = {require('../../../Images/socialc.png')}
					style = {{height:15, width: 130}}
				/>
				</TouchableOpacity>
				</View>
			</Panel>
			<View alignItems = 'center' justifyContent = 'center'>
				<Text style = {styles.emailText}> Email: fordhamfoundry@fordham.edu </Text>
				<Text style = {styles.addressText}> 557 East Fordham Road, 2nd Floor, Bronx, NY 10458 </Text>
			</View>
			</ScrollView>
			<MediaButtons/>
			</ViewContainer>

			);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex : 1,
	   	//backgroundColor : '#f4f7f9'
	},
	addressText: {
		marginBottom: 20,
		fontSize: 12
	},
	emailText: {
		marginTop: 20,
		fontSize: 12
	},
	messageT: {
		fontSize: 16
	},
	offer: {
		fontSize: 11,
		
	},
	lastOne: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: 'center'
	},
	lastTwo: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: 'center'
	},
	businessP: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 8
	},
	dandmP: {
		alignItems: 'center',
		
	},
	dandmT: {
		fontSize: 11,
		textAlign: 'center'
	}
 
 
});
 

export default HomeScreen;