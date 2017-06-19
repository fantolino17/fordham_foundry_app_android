import React, {Component} from 'react';
import {Text, ListView, StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {fetchJobs} from '../../Actions';
import JobForm from './JobForm';
import firebase from 'firebase';

//import * as actions from '../Actions';

import JobListItem from './JobListItem';
import JobSection from './JobSection';
import JobCreate from './JobCreate';
import {JobDisplay} from './JobDisplay';
import {Card, CardSection, Button, Confirm} from '../../Components/Common'

class JobList extends Component {
	constructor(props) {
		super(props);

	// 	const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
	// 	const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

	// 	const ds = new ListView.DataSource({
	// 	  rowHasChanged: (r1, r2) => r1 !== r2,
	// 	  sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
	// 	  getSectionData,
	// 	  getRowData,
	// 	});

	// 	const { dataBlob, sectionIds, rowIds } = this.formatData(this.props.jobs);
	// 	this.state = {
	// 	  dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
	// 		showModal: false,			
	// 	};

		this.state = {
			showModal: false,
			showDesModal: false,
			curKey: null
		}
	}

	componentWillMount(){
		console.log(this.props.jb)
		this.props.fetchJobs()
		console.log(this.props.jb)	
	}

	// compontDidMount(){
	// 	console.log(this.props.jb)
	// }


	renderRow(job) {
		return <JobListItem job = {job}/>;
	}

	renderSectionHeader(job){
		return <JobSection job = {job}/>;
	}

	// formatData(job) {
  //   // We're sorting by alphabetically so we need the alphabet
	// 	//const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	// 	const categories = ["Manager", "Marketing", "Programming", "Customer Service", "Product Testing"];

	// 	// Need somewhere to store our data
	// 	const dataBlob = {};
	// 	const sectionIds = [];
	// 	const rowIds = [];

	// 	// Each section is going to represent a letter in the alphabet so we loop over the alphabet
	// 	for (let sectionId = 0; sectionId < categories.length; sectionId++) {
	// 	  // Get the character we're currently looking for
	// 	  const currentCategory = categories[sectionId];

	// 	  // Get users whose first name starts with the current letter
	// 	  const jobsundercat = job.filter((joblisting) => joblisting.category === currentCategory);

	// 	  // If there are any users who have a first name starting with the current letter then we'll
	// 	  // add a new section otherwise we just skip over it
	// 	  if (jobsundercat.length > 0) {
	// 	  	sectionIds.push(sectionId);

	// 	    // Store any data we would want to display in the section header. In our case we want to show
	// 	    // the current character
	// 	    dataBlob[sectionId] = { category: currentCategory };

	// 	    // Setup a new array that we can store the row ids for this section
	// 	    rowIds.push([]);

	// 	    // Loop over the valid users for this section
	// 	    for (let i = 0; i < jobsundercat.length; i++) {
	// 	      // Create a unique row id for the data blob that the listview can use for reference
	// 	      const rowId = `${sectionId}:${i}`;

	// 	      // Push the row id to the row ids array. This is what listview will reference to pull
	// 	      // data from our data blob
	// 	      rowIds[rowIds.length - 1].push(rowId);

	// 	      // Store the data we care about for this row
	// 	      dataBlob[rowId] = jobsundercat[i];
	// 	    }
	// 	  }
  //   	}

  //   return { dataBlob, sectionIds, rowIds };
 	// }

	renderModal(){
		 this.setState({showModal: true})
	}

	onReturn(){
		this.setState({showModal: false})
		this.setState({showDesModal: false})
	}
	
	renderDes(key){
		console.log(key)
		this.setState({curKey: key})
		this.setState({showDesModal: true})
	}

	fetchJobBoard(){
		jb = this.props.jb
		console.log(jb)
		rows=[]
		for(var key in jb){
			const temp = key
			rows.push(
			<TouchableOpacity onPress={ ()=>{this.renderDes(temp)} }>
				<CardSection>
						<Text style={styles.textStyle}>Business Name:</Text>
						<Text> {jb[key].name}</Text>
						<Text> ({jb[key].category})</Text>
				</CardSection>
			</TouchableOpacity>
			)
		}
		return <ScrollView>{rows}</ScrollView>
	}



	render() {
		console.log(this.props.jb)
		console.log(this.state.curKey)
		return(
		
			<Card>

				<Confirm
          visible={this.state.showModal}
          onReturn={this.onReturn.bind(this)}
				>
					<JobCreate style={{flex:1}}/>
				</Confirm>

				<Confirm 
					visible={this.state.showDesModal}
					onReturn={this.onReturn.bind(this)}
				>
					<JobDisplay jobBoard={this.props.jb} jobKey={this.state.curKey} />
				</Confirm>


				<CardSection>	
					<Button onPress={this.renderModal.bind(this)}>
						Post to Job Board!
					</Button>
				</CardSection>
								
				{this.fetchJobBoard()}

			</Card>
		
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
 	separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
	textStyle: {
		fontSize: 16,
		fontWeight: 'bold'
	}
});

const mapStateToProps = state => {
	const {email, jb} = state.jobForm
	return {email, jb}
	//return {jobs: state.jobs};
};

export default connect(mapStateToProps, {fetchJobs})(JobList);