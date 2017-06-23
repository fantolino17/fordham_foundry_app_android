import React, {Component} from 'react';
import {Text, View, ListView} from 'react-native';
import { readUpdates } from '../../Actions'
import { connect } from 'react-redux'

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
		temp = ''
		for(key in updates){
			temp = key
			console.log(updates[key].business)
			console.log(updates[key].update)
			console.log(updates[key].date)
			list.unshift(
				<View>
					<Text>{updates[key].business}</Text>
					<Text>{updates[key].update}</Text>
					<Text>{updates[key].date}</Text>
				</View>
			)

			//updates[key].business is the name i.e Pathos or Ventir
			//updates[key].description is the description/announcment
			//updates[key].date is the date it was posted
			//style like mentor page, events too?
		}
		return list
	}
	
	render () {
		console.log(this.props.updates)
		return (
			<View>
				{this.renderUpdates()}
			</View>
		)
	}
}

const mapStateToProps = state => {
	const { updates } = state.updateList
	return { updates }
}

export default connect(mapStateToProps, { readUpdates })(UpdateList)