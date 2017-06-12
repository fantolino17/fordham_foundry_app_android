import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
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
  onReturn(){
    this.setState({showModal: false})
  }

  onButtonPress(){
    const {name, email, description, category, user, loggedIn} = this.props
    
    if(loggedIn){
      const {currentUser} = firebase.auth()
      this.props.jobCreate({
        name: name || 'No Name Provided', 
        email: email || 'No Email Provided', 
        description: description || 'No Description Provided', 
        category: category || 'Programmer',
        user: currentUser.uid || null    
      })
    }else{
      this.setState({showModal: true})
    }
}

  display(){
    this.props.fetchJobs({category: 'marketing'})
  }


  render(){
    return (
      <Card>
        
        <Confirm
          visible={this.state.showModal}
          onReturn={this.onReturn.bind(this)}
			  >
          <Text style={styles.modalTextStyle}>
            Oops! Ya need to log in to post!
          </Text>
				</Confirm>

        <JobForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.display.bind(this)}>
            Console log
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
  const {name, email, description, category} = state.jobForm
  const {user, loggedIn} = state.auth
  return {name, email, description, category, user, loggedIn} 
}

export default connect(mapStateToProps,{jobUpdate, jobCreate, fetchJobs})(JobCreate)