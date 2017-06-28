import React, {Component} from 'react';
import {Text, View, ListView, ScrollView} from 'react-native';
import { readUpdates } from '../../Actions';
import { connect } from 'react-redux';

import {UpdateDisplay} from './UpdateDisplay';
import ViewContainer from '../../Components/Common/ViewContainer';

class UpdateList extends Component {
	constructor(props) {
		super(props);

	}

	componentWillMount(){
		this.props.readUpdates()
		console.log(this.props.updates)
	}

	renderUpdates(){
		updates = this.props.updates

		list = []
		//temp = ''
		for(key in updates){
			const temp = key

			console.log(" render updates")
			console.log(updates[key].business)
			console.log(updates[key].update)
			console.log(updates[key].date)
			console.log(updates[key].link)
			
			list.unshift(
				<UpdateDisplay
					key = {key}
					title = {updates[key].business}
					update = {updates[key].update}
					date = {updates[key].date}
					link = {updates[key].link}
					/>
			)

			//updates[key].business is the name i.e Pathos or Ventir
			//updates[key].description is the description/announcment
			//updates[key].date is the date it was posted
			//style like mentor page, events too?
		}
		return <View>{list}</View>
	}
	
	render () {
		console.log(this.props.updates)
		return (
				<ScrollView marginTop = {10}>{this.renderUpdates()}</ScrollView>
		)
	}
}

const mapStateToProps = state => {
	const { updates } = state.updateList
	return { updates }
}

export default connect(mapStateToProps, { readUpdates })(UpdateList)