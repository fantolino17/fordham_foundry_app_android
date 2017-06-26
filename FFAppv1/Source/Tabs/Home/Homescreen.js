import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';

import ViewContainer from '../../Components/Common/ViewContainer';
import NavBar from '../../Components/Header/NavBar';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import UpdateList from './UpdateList';
import EventList from './EventList';
import {Header} from '../../Components/Common'


class Homescreen extends Component {

	render () {
		return (
			<ViewContainer> 
			<NavBar/>

			<ScrollableTabView tabBarTextStyle = {{fontSize: 20, fontFamily: 'GillSans'}}>
				<UpdateList tabLabel = "Updates"/>
				<EventList tabLabel = "Events"/>
			</ScrollableTabView>

			</ViewContainer>
			);
	}
}

export default Homescreen;