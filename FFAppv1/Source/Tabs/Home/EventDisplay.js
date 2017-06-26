import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux';
import {Card, CardSection, Button, Confirm} from '../../Components/Common'


const renderAddToCalender = (title, date, time, location,
                            alarm_year, alarm_month, alarm_day, alarm_hour, alarm_min, remindMe ) => {
      console.log("renderAddtoCalender")
      console.log(date)
      console.log(time)
      return (
        <Button onPress={ () => { remindMe(title, date, time, location, 
                                          alarm_year, alarm_month, alarm_day, alarm_hour, alarm_min)} }>
          Set Reminder!
        </Button>
      )
}

const EventDisplay = ({title, location, date, time,
                      alarm_year, alarm_month, alarm_day, alarm_hour, alarm_min, remindMe}) => {

console.log(title)
console.log(date)
console.log(date)
  return (
    <Card>
      
      {title!==null ? <Text>{title}</Text> : <Text>The title is not specified</Text>}
      {location!==null ? <Text>{location}</Text> : <Text>The location is not specified</Text>}
      {date!==null ? <Text>{date}</Text> : <Text>The date is not specified</Text>}
      {time!==null ? <Text>{time}</Text> : <Text>The time is not specified</Text>}
      
      {renderAddToCalender(title, date, time, location, 
                          alarm_year, alarm_month, alarm_day, alarm_hour, alarm_min, remindMe)}

    </Card>
  )
}

export { EventDisplay }