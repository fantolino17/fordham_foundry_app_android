import React from 'react'
import {Text, View} from 'react-native'
import {Card, CardSection, Button, Confirm} from '../../Components/Common'


const JobDisplay = ({jobBoard, jobKey}) => {
console.log(jobKey)
console.log({jobKey})
console.log({jobBoard})
  return (
    <Card>
      <CardSection>
        <Text style={styles.textStyle}>Business Name:</Text>
        <Text> {jobBoard[jobKey].name}</Text>
      </CardSection>

      <CardSection>
        <Text style={styles.textStyle}>Field: </Text>
        <Text> ({jobBoard[jobKey].category}) </Text>
      </CardSection>
      
      <CardSection>
        <Text style={styles.textStyle}>What we're looking for:</Text>
        <Text> {jobBoard[jobKey].description} </Text>
      </CardSection>
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