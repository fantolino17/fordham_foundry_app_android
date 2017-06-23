import React, {Component} from 'react';
import {Text, View} from 'react-native';

import NavBar from '../../Components/Header/NavBar';
import ViewContainer from '../../Components/Common/ViewContainer';
import DandMList from './DandMList';

class DandMscreen extends Component {
	render () {
		return (
			<ViewContainer>
			<NavBar/>
			<DandMList/>
			</ViewContainer>
			);
	}
}

export default DandMscreen;