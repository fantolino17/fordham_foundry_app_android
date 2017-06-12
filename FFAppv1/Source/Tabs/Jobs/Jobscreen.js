import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';

import ViewContainer from '../../Components/Common/ViewContainer';
import NavBar from '../../Components/Header/NavBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import JobList from './JobList';
import LofBusinesses from './LofBusinesses';
//import JobSection from '../../Components/JobSection';

class Jobscreen extends Component {
	render () {
		return (
			
			<ViewContainer>
			<NavBar wayto = {this.props.navigation}/>
			<ScrollableTabView tabBarTextStyle = {{fontSize: 12}}>
				<JobList tabLabel = "Opportunities"/>
				<LofBusinesses tabLabel = "Businesses @ Fordham"/>
			</ScrollableTabView>
			</ViewContainer>
			
			);
	}
}

export default Jobscreen;