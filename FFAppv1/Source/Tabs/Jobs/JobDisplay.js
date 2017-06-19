import React from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux';
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
    <Card>
      <CardSection>
        <Text style={styles.textStyle}>Business Name:</Text>
        {jobBoard.hasOwnProperty(jobKey) ? <Text> {jobBoard[jobKey].name}</Text>:<Text></Text> }
      </CardSection>

      <CardSection>
        <Text style={styles.textStyle}>Field: </Text>
        {jobBoard.hasOwnProperty(jobKey) ? <Text> {jobBoard[jobKey].category}</Text>:<Text></Text> }
      </CardSection>
      
      <CardSection style={{flex:1}}>
        <Text style={styles.textStyle}>What we're looking for:</Text>
        {jobBoard.hasOwnProperty(jobKey) ? <Text> {jobBoard[jobKey].description}</Text>:<Text></Text> }
      </CardSection>

      {canDelete ? renderButton(canDelete, jobKey, jobDelete):<Text></Text>}

    </Card>
  )
}

const styles = {
	textStyle: {
		fontSize: 16,
		fontWeight: 'bold'
	}
}

export {JobDisplay}