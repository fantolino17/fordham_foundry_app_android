import React, {Component} from 'react';
import LoginForm from '../../Components/LoginForm';
import {Text, View, Image} from 'react-native';
import {logoutUser, loggedInUser} from '../../Actions';
import {connect} from 'react-redux';
import firebase from 'firebase';

import NavBar from '../../Components/Header/NavBar';
import ViewContainer from '../../Components/Common/ViewContainer';
import {Card, CardSection, Button, ButtonCont} from '../../Components/Common';


class LoginScreen extends Component {

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.props.loggedInUser();
      } else {
        this.props.logoutUser();
      }
    });
  }

  onLogOut(){
    this.props.logoutUser()
  }

  renderContent(){
    switch (this.props.loggedIn) {
      case true:
        return(
          <View>
            <View alignItems = "center">
                <Image source = {require('../../../Images/logo.png')} 
                  style={{
                  width: 260,
                  height: 260,
                  }}/>
            </View>

            <View>
              <Text style = {styles.headTextStyle}>
                {firebase.auth().currentUser.email}
              </Text>
             </View>

            <ButtonCont>
              <Button onPress={(this.onLogOut.bind(this))}> Log out </Button>
            </ButtonCont>

          </View>
        )
      default:
        return <LoginForm />
    }
  }

  render(){
    return (
    	<ViewContainer>
			
      		{this.renderContent()}
      	</ViewContainer>
    )
  }
}

const styles = ({
  headTextStyle: {
    padding: 10,
    fontSize:  10,
    textAlign: 'center',
    color: 'black'
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, {logoutUser, loggedInUser})(LoginScreen)
