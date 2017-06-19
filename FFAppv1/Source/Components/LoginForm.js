import React,{Component} from 'react'
import {Text} from 'react-native'
import {connect} from 'react-redux'
import {Card, CardSection, Input, Button, Spinner} from './Common'
import {emailChanged, passwordChanged, loginUser, newUser} from '../Actions'

class LoginForm extends Component{

  onEmailChange(text){
    this.props.emailChanged(text)
  }

  onPasswordChange(text){
    this.props.passwordChanged(text)
  }

  onButtonPress(){
    const {email, password} = this.props
    this.props.loginUser({ email, password })
    console.log(password)
  }

  onNewHere() {
    const {email, password} = this.props
    this.props.newUser({email: email || '', password: password || ''})
  }

  renderButton(){
    if(this.props.loading){
      return <Spinner size="large"/>
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
         Login     
      </Button>
    )
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Text style = {styles.headTextStyle}>
            Sign In or Sign Up By Entering The Fields and Press Create!
          </Text>
        </CardSection>
        <CardSection>
          <Input
            secureText = {false}
            onChangeText={this.onEmailChange.bind(this)}
            label="Email"
            placeholder="user@example.com"
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input 
            secureText = {true}
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      <CardSection>
        <Button onPress = {this.onNewHere.bind(this)}>
         <Text> Create </Text>
        </Button>
      </CardSection>
      </Card>
    )
  }
}

const styles = ({
  errorTextStyle:{
    fontSize:20,
    alignSelf:'center',
    color:'red'
  },
  headTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'maroon'
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps,{emailChanged, passwordChanged, loginUser, newUser})(LoginForm)