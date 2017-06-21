import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {CardSection, Input} from '../../Components/Common';
import {connect} from 'react-redux';
import {jobUpdate} from '../../Actions';

class JobForm extends Component{
  render(){
    return (
      <View>
         <CardSection>
          <Input 
            label="Business Name"
            placeholder="your business name"
            value={this.props.name}
            onChangeText={text => this.props.jobUpdate({prop: 'name', value: text})}
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Contact email:"
            placeholder="user@user.com"
            value={this.props.email}
            onChangeText={text => this.props.jobUpdate({prop: 'email', value: text})}
          />
        </CardSection>
        
        <CardSection>
          <Input 
            label="Job Description:"
            placeholder="Lookin' for..."
            value={this.props.description}
            onChangeText={text => this.props.jobUpdate({prop: 'description', value: text})}
          />
        </CardSection>
      </View>
    )
  }
}

const styles = {
  pickerTextStyle:{
    fontSize: 18,
    paddingLeft: 23
  },
  itemStyle:{
    fontSize: 15,
    height: 75,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pickerStyle:{
    //flex:1, 
    //width: 100,
    //height: 200
  }
}
 
mapStateToProps = (state) => {
  const {name,email,description,category} = state.jobForm
  return {name,email,description,category}
}

export default connect(mapStateToProps, {jobUpdate})(JobForm)