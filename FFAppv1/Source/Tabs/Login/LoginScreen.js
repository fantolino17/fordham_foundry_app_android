import React, {Component} from 'react'
import LoginForm from '../../Components/LoginForm'
import {View} from 'react-native';

import NavBar from '../../Components/Header/NavBar';
import ViewContainer from '../../Components/Common/ViewContainer';

class LoginScreen extends Component {

  render(){
    return (
    	<ViewContainer>
			<NavBar wayto = {this.props.navigation}/>
      		<LoginForm/>
      	</ViewContainer>
    )
  }
}

export default LoginScreen