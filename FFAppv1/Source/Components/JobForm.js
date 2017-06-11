import React, {Component} from 'react'
import {View, Text, Picker} from 'react-native'
import {CardSection, Input} from './Common'
import {connect} from 'react-redux'
import {jobUpdate} from '../Actions'

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

        <CardSection style={{flexDirection:'column'}}>
          <Text style={styles.pickerTextStyle}>Category</Text>
          <Picker
            selectedValue={this.props.category}
            onValueChange={cat => {this.props.jobUpdate({prop: 'category' , value: cat})}}
            itemStyle={styles.itemStyle}
            style={styles.pickerStyle}
          >
            <Picker.Item label="Programming" value="programming" />
            <Picker.Item label="IT" value="it" />
            <Picker.Item label="Marketing" value="marketing" />

          </Picker>
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