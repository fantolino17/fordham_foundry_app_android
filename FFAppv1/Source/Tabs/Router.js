import React from 'react';
import {Image} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Homescreen from '../Tabs/Home/Homescreen';
import Jobscreen from '../Tabs/Jobs/Jobscreen';
import Bubblescreen from '../Tabs/Bubble/Bubblescreen';
import DandMscreen from '../Tabs/Bubble/DandMscreen';
import Chatscreen from '../Tabs/Chat/Chatscreen';
import LoginScreen from '../Tabs/Login/LoginScreen'

export const DandMStack = StackNavigator ({
	Bubble: {
		screen: Bubblescreen,
		navigationOptions: {
			headerTitle: <Image source = {require('../../Images/foundry-logo-top-bar.png')} 
				style = {{height:40, width: 150, marginBottom: 20}}/>,
			headerStyle: {
       			backgroundColor: 'mistyrose',
       			elevation: null
       		},
       		headerTitleStyle: {
  				fontSize: 20,
  				fontWeight: 'bold',

  				
  			},
  			headerBackStyle: {
  				color: 'red'
  			},
	},
},
	DandM: {
		screen: DandMscreen,
		navigationOptions: {
			headerTitle: 'Directors and Mentors',
			headerStyle: {
       			backgroundColor: 'mistyrose',
       			elevation: null
       		},
       		headerTitleStyle: {
       			width: 214,
  				fontSize: 20,
  				color: 'black',
  				fontWeight: 'bold',
  				paddingBottom: 20
  			},
  			headerTintColor: 'maroon'

  		}
	}     		    		

})


export const Tabs = TabNavigator ({

	Home: {
		screen: Homescreen,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({tintColor, focused}) => <Icon name = {focused ? "ios-home":"ios-home-outline"} size = {36} color = {focused? "darkred":"black"}/>
			}
		},

	Jobs: {
		screen: Jobscreen,
		navigationOptions: {
			tabBarLabel: 'Jobs',
			tabBarIcon: ({tintColor, focused}) => <Icon name = {focused ? "ios-briefcase":"ios-briefcase-outline"} size = {36} color = {focused? "darkred":"black"}/>
		}
	},
	
	Bubble: {
		screen: DandMStack,
		navigationOptions: {
			/*tabBarIcon: <Image source = {require('../../Images/bubbleicon.png')}
						style = {{height: 50, width: 40}}/>*/
			tabBarIcon: ({focused}) => <Image source = {focused ? require('../../Images/bubbleiconclick.png'):require('../../Images/bubbleicon.png')} style = {{height: 50, width: 40}}/>
			//tabBarIcon: ({tintColor, focused}) => <Icon name  = {focused ? "ios-information-circle": "ios-information-circle-outline"} size = {38} color = {focused? "darkred":"black"}/>
		}
	},

	Chat: {
		screen: Chatscreen,
		navigationOptions: {
			tabBarLabel: 'Chat',
			tabBarIcon: ({tintColor, focused}) => <Icon name  = {focused ? "ios-chatbubbles": "ios-chatbubbles-outline"} size = {36} color = {focused? "darkred":"black"}/>
		}
	},

	Login: {
		screen: LoginScreen,
		navigationOptions: {
			tabBarIcon: ({tintColor, focused}) => <Icon name  = {focused ? "ios-lock": "ios-lock-outline"} size = {36} color = {focused? "darkred":"black"}/>
			
		}
	},

},

	{ 
		initialRouteName: 'Bubble',
		tabBarOptions: {
			//activeTintColor: "gold",
			//inactiveTintColor: "white",
			showLabel: false,
			iconColor: "white",
			style: {
			backgroundColor: '#ededee',
			}
		}
	}
);