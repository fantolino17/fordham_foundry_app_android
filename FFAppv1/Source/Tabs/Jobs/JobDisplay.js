import React from 'react';
import {Text, View, Linking, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {CardSection, Button, ButtonCont, LinkButton, DeleteButton} from '../../Components/Common';

const renderButton = (canDelete, jobKey, jobDelete) => {    
  if(canDelete)
    return(
      <View borderTopWidth = {StyleSheet.hairlineWidth}>
        <DeleteButton onPress={() => { jobDelete(jobKey) }}>
          Delete
        </DeleteButton>
      </View>
    )
}

const showButton = (jobBoard, jobKey) => 
{
    if(!jobBoard.hasOwnProperty(jobKey))
    {
      return
    } 
    else if(jobBoard[jobKey].link === '')
    {
      return
    }
    else {
      return (
        <LinkButton onPress = {() => Linking.openURL(`${jobBoard[jobKey].link}`)}>Learn more</LinkButton>
      )
  }
}
    

const JobDisplay = ({jobBoard, jobKey, canDelete, jobDelete}) => {
  return (
    <View>
        <View style = {styles.titleandname}>
        {jobBoard.hasOwnProperty(jobKey) ? <Text style = {styles.titleStyle}>{`${jobBoard[jobKey].title}`}</Text>:<Text></Text>}
        {jobBoard.hasOwnProperty(jobKey) ? <Text style = {styles.nameStyle}>{`${jobBoard[jobKey].name}`}</Text>:<Text></Text>}
        </View>
        <View style = {styles.desc}>
        {jobBoard.hasOwnProperty(jobKey) ? <Text style = {styles.descStyle}>{jobBoard[jobKey].description}</Text>:<Text></Text>}
        </View>
        <View style = {styles.contactCont}>
        {jobBoard.hasOwnProperty(jobKey) ? <Text style = {styles.contactStyle}>{jobBoard[jobKey].contact}</Text>:<Text></Text>}
        </View>
        {showButton(jobBoard, jobKey)}
        

      {canDelete ? renderButton(canDelete, jobKey, jobDelete):<Text></Text>}

    </View>
  )
}

const styles = {
  titleandname: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10
  },
  desc: {
    marginTop: 10
  },
  contactCont: {
    marginTop: 20,
    marginBottom: 20
  },
	textStyle: {
		fontSize: 16,
		fontWeight: 'bold'
	},
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'GillSans'
  },
  nameStyle: {
    fontSize: 20,
    fontFamily: 'GillSans-Light'
  },
  descStyle: {
    fontSize: 16,
    fontFamily: 'GillSans-Light'
  },
  contactStyle: {
    fontSize: 16,
    fontFamily: 'GillSans-Light'
  }
}

export {JobDisplay}