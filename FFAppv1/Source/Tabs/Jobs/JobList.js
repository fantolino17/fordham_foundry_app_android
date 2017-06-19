import React, {Component} from 'react';
import {Text, ListView, StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {fetchJobs, jobDelete} from '../../Actions';
import JobForm from './JobForm';
import firebase from 'firebase';

//import * as actions from '../Actions';

import JobListItem from './JobListItem';
import JobSection from './JobSection';
import JobCreate from './JobCreate'
import {JobDisplay} from './JobDisplay'
import {Card, CardSection, Button, Confirm} from '../../Components/Common'

class JobList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			showDesModal: false,
			curKey: null,
			canDelete: false
		}
	}

	componentWillMount(){
		console.log(this.props.jb)
		this.props.fetchJobs()
	}

	componentDidMount(){
		this.props.fetchJobs()
		console.log(this.props.jb)
	}

	renderRow(job) {
		return <JobListItem job = {job}/>;
	}

	renderSectionHeader(job){
		return <JobSection job = {job}/>;
	}

	renderModal(){
		 this.setState({showModal: true})
	}

	onReturn(){
		this.setState({showModal: false})
		this.setState({showDesModal: false})
	}
	
	renderDes(key,del){
		this.setState({curKey: key})
		this.setState({canDelete: del})
		this.setState({showDesModal: true})
	}

	deleteJob(key){
		this.setState({showDesModal: false})
		this.setState({curKey: null})
		this.setState({canDelete: false})
		this.props.jobDelete(key)
	}


	fetchJobBoard(){
		jb = this.props.jb
		console.log(jb)
		rows=[]
		for(var key in jb){
			const temp = key

			currentUserId = firebase.auth().currentUser.uid
			console.log(currentUserId)
			console.log(jb[key].user)
			if(this.props.user === null){
				currentUserId = -1
			}

			if(currentUserId === jb[key].user){ //If current user created job, show delete button
				rows.push(
				<TouchableOpacity onPress={ ()=>{this.renderDes(temp,true)} }>
					<CardSection>
							<Text style={styles.userJobTextStyle}>Business Name:</Text>
							<Text> {jb[key].name}</Text>
							<Text> ({jb[key].category})</Text>
					</CardSection>
				</TouchableOpacity>
				)
			}else{ //If user did not create this job, dont show delete button (2nd param in renderDes)
				rows.push(
				<TouchableOpacity onPress={ ()=>{this.renderDes(temp,false)} }>
					<CardSection>
							<Text style={styles.textStyle}>Business Name:</Text>
							<Text> {jb[key].name}</Text>
							<Text> ({jb[key].category})</Text>
					</CardSection>
				</TouchableOpacity>
				)
			}
		}
		return <ScrollView removeClippedSubviews={false}>{rows}</ScrollView>
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
					<JobDisplay jobBoard={this.props.jb} jobKey={this.state.curKey} canDelete={this.state.canDelete} jobDelete={this.props.jobDelete} />
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
	},
	userJobTextStyle:{
		fontSize: 16,
		fontStyle: 'italic'
	}
});

const mapStateToProps = state => {
	const {email, jb} = state.jobForm
	const {user} = state.auth
	return {email, jb, user}
};

export default connect(mapStateToProps, {fetchJobs,jobDelete})(JobList);