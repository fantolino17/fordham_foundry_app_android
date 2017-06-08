import React, {Component} from 'react';
import {Button, Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {CardSection} from './Common/CardSection';
import {connect} from 'react-redux';
import * as actions from '../Actions';

class ListItem extends Component {

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		if(this.props.expanded && (this.props.library.id == 1)) {
			return (
				<CardSection style = {{flex:1}}>
				<Button title = "Business 1"/>
				</CardSection>
				);
		}
		else if (this.props.expanded && (this.props.library.id == 2)) {
			return (
			<CardSection style = {{flex:1}}>
				<Button title = "Business 2"/>
				</CardSection>
			);
		}
	}

	render() {
		//console.log(this.props);
		const {id, title} = this.props.library;
		return (
			<TouchableWithoutFeedback onPress = {() => this.props.selectLibrary(id)}>
				<View>
					<CardSection>
						<Text style = {styles.titleStyle}> {title}</Text>
					</CardSection>
					{this.renderDescription()}
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
	expanded = state.selectedLibraryId === ownProps.library.id;

	return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);