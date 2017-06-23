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
            label="Job Title"
            placeholder="title/position"
            value={this.props.title}
            onChangeText={text => this.props.jobUpdate({prop: 'title', value: text})}
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Business/Name:"
            placeholder="user@user.com"
            value={this.props.name}
            onChangeText={text => this.props.jobUpdate({prop: 'name', value: text})}
          />
        </CardSection>
        
        <CardSection>
          <Input 
            label="Description:"
            placeholder="Lookin' for..."
            value={this.props.description}
            onChangeText={text => this.props.jobUpdate({prop: 'description', value: text})}
            multiline = {true}
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Contact:"
            placeholder="user@user.com"
            value={this.props.contact}
            onChangeText={text => this.props.jobUpdate({prop: 'contact', value: text})}
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Link:"
            placeholder="http://..."
            value={this.props.link}
            onChangeText={text => this.props.jobUpdate({prop: 'link', value: text})}
          />
        </CardSection>
      </View>
    )
  }
}

const styles = ({
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
});
 
mapStateToProps = (state) => {
  const {title,contact,description,category, link} = state.jobForm
  return {title,contact,description,category, link}
}

export default connect(mapStateToProps, {jobUpdate})(JobForm)