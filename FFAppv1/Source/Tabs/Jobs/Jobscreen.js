import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';

import JobList from '../../Components/JobList';
//import JobSection from '../../Components/JobSection';

class Jobscreen extends Component {
	render () {
		return (
			
			<JobList/>
			
			);
	}
}

export default Jobscreen;