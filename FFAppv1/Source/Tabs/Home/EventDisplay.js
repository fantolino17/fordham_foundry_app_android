import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux';
import {Card, CardSection, Button, Confirm} from '../../Components/Common'


const EventDisplay = ({title, location, date, time}) => {
console.log(title)
  return (
    <Card>
        <View>
          {title!==null ? <Text>{title}</Text> : <Text>The title is not specified</Text>}
          {location!==null ? <Text>{location}</Text> : <Text>The location is not specified</Text>}
          {date!==null ? <Text>{date}</Text> : <Text>The date is not specified</Text>}
          {time!==null ? <Text>{time}</Text> : <Text>The time is not specified</Text>}
        </View>
        
        <Button>
          Set Reminder!
        </Button>

    </Card>
  )
}

export { EventDisplay }