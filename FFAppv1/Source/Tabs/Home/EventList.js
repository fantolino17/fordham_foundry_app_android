import React, {Component} from 'react';
import {Text, View, ListView, ScrollView} from 'react-native';
import { connect } from 'react-redux'
import { readEvents } from '../../Actions'

class EventList extends Component {
	constructor() {
		super();
//		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		// this.state = {
		//   dataSource: ds.cloneWithRows(['row 1', 'row 2']),
		// };
	}

	componentWillMount(){
		this.props.readEvents()
	}


	renderEvents(events){
		list = []
		for(key in events){
			list.push(<EventDisplay 
				title={key}
				location={events[key].location}
				time={events[key].time}
				date={events[key].date} />
			)

		return list
		}
	}

	render () {
		return (
			<ScrollView>
				{this.renderEvents(this.props.events)}			

			{/*			
			<ListView
				removeClippedSubviews={false}
				dataSource={this.state.dataSource}
        		renderRow={(rowData) => <Text>{rowData}</Text>}
			/>*/}

			</ScrollView>
			);
	}
}

const mapStateToProps = (state) =>{
	const { events } = state.events.events
	return { events }
}

export default connect(mapStateToProps, { readEvents })(EventList)