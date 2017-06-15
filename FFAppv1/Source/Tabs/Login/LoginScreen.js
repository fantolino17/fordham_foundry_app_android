import React, {Component} from 'react'
import LoginForm from '../../Components/LoginForm'
import {View} from 'react-native';
import {logoutUser} from '../../Actions'
import {connect} from 'react-redux'

import NavBar from '../../Components/Header/NavBar';
import ViewContainer from '../../Components/Common/ViewContainer';
import {Card, CardSection, Button} from '../../Components/Common'


class LoginScreen extends Component {

  onLogOut(){
    this.props.logoutUser()
  }

  renderContent(){
    switch (this.props.loggedIn) {
      case true:
        return(
          <Card>
            <CardSection>
              <Button onPress={(this.onLogOut.bind(this))}>
                Log out
              </Button>
            </CardSection>
          </Card>
        )
      default:
        return <LoginForm />
    }
  }

  render(){
    return (
    	<ViewContainer>
			<NavBar wayto = {this.props.navigation}/>
      		{this.renderContent()}
      	</ViewContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, {logoutUser})(LoginScreen)