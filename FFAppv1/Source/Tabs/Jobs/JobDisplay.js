import React from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux';
import TimeAgo from 'react-native-timeago'

import {Card, CardSection, Button, Confirm} from '../../Components/Common'

const renderButton = (canDelete, jobKey, jobDelete) => {    
  if(canDelete)
    return(
      <CardSection>
        <Button onPress={() => { jobDelete(jobKey) }}>
          Delete
        </Button>
      </CardSection>
    )
}

const JobDisplay = ({jobBoard, jobKey, canDelete, jobDelete}) => {

  return (
    <View>
        <View>
        <Text style={styles.textStyle}>Business Name:</Text>
        {jobBoard.hasOwnProperty(jobKey) ? <Text> {jobBoard[jobKey].name}</Text>:<Text></Text> }
      
        <Text style={styles.textStyle}>Field: </Text>
        {jobBoard.hasOwnProperty(jobKey) ? <Text> {jobBoard[jobKey].category}</Text>:<Text></Text> }
      
        <Text style={styles.textStyle}>What we're looking for:</Text>
        {jobBoard.hasOwnProperty(jobKey) ? <Text> {jobBoard[jobKey].description}</Text>:<Text></Text> }
        
        {jobBoard.hasOwnProperty(jobKey) ? <TimeAgo date={Date.parse(jobBoard[jobKey].date)} /> : <Text></Text>}

        </View>

      {canDelete ? renderButton(canDelete, jobKey, jobDelete):<Text></Text>}

    </View>
  )
}

const styles = {
	textStyle: {
		fontSize: 16,
		fontWeight: 'bold'
	}
}

export {JobDisplay}