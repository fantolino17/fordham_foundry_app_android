import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Homescreen from '../Tabs/Home/Homescreen';
import Jobscreen from '../Tabs/Jobs/Jobscreen';
import Bubblescreen from '../Tabs/Bubble/Bubblescreen';
import Chatscreen from '../Tabs/Chat/Chatscreen';


export const Tabs = TabNavigator ({
	Home: {
		screen: Homescreen,
		navigationOptions: {
			tabBarLabel: 'Bubble',
			tabBarIcon: ({tintColor, focused}) => <Icon name = {focused ? "ios-home":"ios-home-outline"} size = {30} color = {focused? "gold":"white"}/>
			}
		},

	Jobs: {
		screen: Jobscreen,
		navigationOptions: {
			tabBarLabel: 'Jobs',
			tabBarIcon: ({tintColor, focused}) => <Icon name = {focused ? "ios-briefcase":"ios-briefcase-outline"} size = {30} color = {focused? "gold":"white"}/>
		}
	},
	
	Bubble: {
		screen: Bubblescreen,
		navigationOptions: {
			tabBarLabel: 'Bubble',
			tabBarIcon: ({tintColor, focused}) => <Icon name  = {focused ? "ios-information-circle": "ios-information-circle-outline"} size = {30} color = {focused? "gold":"white"}/>
		}
	},

	Chat: {
		screen: Chatscreen,
		navigationOptions: {
			tabBarLabel: 'Chat',
			tabBarIcon: ({tintColor, focused}) => <Icon name  = {focused ? "ios-chatbubbles": "ios-chatbubbles-outline"} size = {30} color = {focused? "gold":"white"}/>
		}
	}

	},

	{ 
		tabBarOptions: {
			activeTintColor: "gold",
			inactiveTintColor: "white",
			iconColor: "white",
			style: {
			backgroundColor: 'maroon'
			}
		}

}
);