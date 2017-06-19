import React, {Component} from 'react';
import {Text, View} from 'react-native';

import ViewContainer from '../../Components/Common/ViewContainer';
import NavBar from '../../Components/Header/NavBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import UpdateList from './UpdateList';
import EventList from './EventList';

class Homescreen extends Component {
	render () {
		return (
			<ViewContainer> 
			<NavBar wayto = {this.props.navigation}/>
			<ScrollableTabView tabBarTextStyle = {{fontSize: 12}}>
				<UpdateList tabLabel = "Updates"/>
				<EventList tabLabel = "Events"/>
			</ScrollableTabView>
			</ViewContainer>
			);
	}
}

export default Homescreen;