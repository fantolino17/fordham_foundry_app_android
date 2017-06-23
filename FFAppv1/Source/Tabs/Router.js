import React from 'react';
import {Image} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Homescreen from '../Tabs/Home/Homescreen';
import Jobscreen from '../Tabs/Jobs/Jobscreen';
import Bubblescreen from '../Tabs/Bubble/Bubblescreen';
import FFBusscreen from '../Tabs/Bubble/FFBusscreen';
import DandMscreen from '../Tabs/DandM/DandMscreen';
//import Chatscreen from '../Tabs/Chat/Chatscreen';
import LoginScreen from '../Tabs/Login/LoginScreen';

export const FFBusStack = StackNavigator ({
	Bubble: {
		screen: Bubblescreen,
		navigationOptions: {
			headerTitle: <Image source = {require('../../Images/foundry-logo-top-bar.png')} 
				style = {{height:40, width: 150, marginBottom: 20}}/>,
			headerStyle: {
       			backgroundColor: '#f7f7f8',
       			elevation: null
       		},
       		headerTitleStyle: {
  				fontSize: 20

  				
  			},
  			headerBackStyle: {
  				color: 'red'
  			},
	},
},
	FFBus: {
		screen: FFBusscreen,
		navigationOptions: {
			headerTitle: 'Foundry Businesses',
			headerStyle: {
       			backgroundColor: '#f7f7f8',
       			elevation: null
       		},
       		headerTitleStyle: {
       			width: 214,
  				fontSize: 20,
  				fontFamily: 'GillSans',
  				color: 'black',
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
			tabBarIcon: ({tintColor, focused}) => <Icon name = {focused ? "ios-home":"ios-home-outline"} size = {32} color = {focused? "darkred":"black"}/>
			}
		},

	Jobs: {
		screen: Jobscreen,
		navigationOptions: {
			tabBarLabel: 'Jobs',
			tabBarIcon: ({tintColor, focused}) => <Icon name = {focused ? "ios-briefcase":"ios-briefcase-outline"} size = {32} color = {focused? "darkred":"black"}/>
		}
	},
	
	Bubble: {
		screen: FFBusStack,
		navigationOptions: {
			/*tabBarIcon: <Image source = {require('../../Images/bubbleicon.png')}
						style = {{height: 50, width: 40}}/>*/
			tabBarIcon: ({focused}) => <Image source = {focused ? require('../../Images/bubbleclickedon.png'):require('../../Images/bubbleiconbetter.png')} style = {{height: 45, width: 35}}/>
			//tabBarIcon: ({tintColor, focused}) => <Icon name  = {focused ? "ios-information-circle": "ios-information-circle-outline"} size = {38} color = {focused? "darkred":"black"}/>
		}
	},

	DandMScreen: {
		screen: DandMscreen,
		navigationOptions: {
			tabBarLabel: 'DandM',
			tabBarIcon: ({tintColor, focused}) => <Icon name  = {focused ? "ios-people": "ios-people-outline"} size = {38} color = {focused? "darkred":"black"}/>
		}
	},

	Login: {
		screen: LoginScreen,
		navigationOptions: {
			tabBarIcon: ({tintColor, focused}) => <Icon name  = {focused ? "ios-lock": "ios-lock-outline"} size = {34} color = {focused? "darkred":"black"}/>
			
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