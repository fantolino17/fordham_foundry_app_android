import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, TouchableWithoutFeedback} from 'react-native';
import firebase from 'firebase';
import {jobUpdate, jobCreate, fetchJobs} from '../../Actions';
import {Card, CardSection, Button, Confirm} from '../../Components/Common';
import JobForm from './JobForm';

class JobCreate extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
  }

  renderModal(){
    this.setState({showModal: true})
  }
  /*onReturn(){
    this.setState({showModal: false})
  }*/

  onButtonPress(){
    const {name, contact, description, title, link, user, loggedIn} = this.props

    if(loggedIn){
      const {currentUser} = firebase.auth()
      this.props.jobCreate({
        name: name || 'No Name Provided', 
        contact: contact || 'No Contact Provided', 
        description: description || 'No Description Provided', 
        title: title || 'No Title Provided',
        link: link || '',
        user: currentUser.uid || null,
      })
    }else{
      this.setState({showModal: true})
    }
}

  display(){
    this.props.fetchJobs()
  }


  render(){
    return (
      <Card>
        <JobForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  modalTextStyle:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24
  }
}

const mapStateToProps = (state) => {
  const {name, contact, description, title, link} = state.jobForm
  const {user, loggedIn} = state.auth
  return {name, contact, description, title, link, user, loggedIn} 
}

export default connect(mapStateToProps,{jobUpdate, jobCreate, fetchJobs})(JobCreate)