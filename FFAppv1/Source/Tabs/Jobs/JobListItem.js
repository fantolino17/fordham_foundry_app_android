import React, {Component} from 'react';
import {Button, Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {CardSection} from '../../Components/Common/CardSection';
import {connect} from 'react-redux';
import * as actions from '../../Actions';

class JobListItem extends Component {

	/*componentWillUpdate() {
		LayoutAnimation.spring();
	}*/

	

	render() {
		const {id, title, category} = this.props.job;
		return (
			<TouchableWithoutFeedback onPress = {() => this.props.selectJob(id)}>
				<View>
					
						<Text style = {styles.titleStyle}> {title}, {category}</Text>
					
					
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		textAlign: 'center',
		flex: 1,
		//position: 'relative'
   
	}
}

const mapStateToProps = (state, ownProps) => {
	expanded = state.selectedJobId === ownProps.job.id;

	return {expanded};
};

export default connect(mapStateToProps, actions)(JobListItem);