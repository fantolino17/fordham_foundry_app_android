import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native'
import {connect} from 'react-redux';
import {Card, CardSection, Confirm} from '../../Components/Common'

import Icon from 'react-native-vector-icons/Ionicons';

const renderAddToCalender = (title, date, time, location,
                            alarm_year, alarm_month, alarm_day, alarm_hour, alarm_min, remindMe ) => {

      return (
        <View style = {styles.buttonCont}>
          <Icon.Button justifyContent = "center" name = "ios-alarm" backgroundColor = "#4AB312" color = "white" 
                       onPress={ () => { remindMe(title, date, time, location, alarm_year, alarm_month, alarm_day, alarm_hour, alarm_min)} }>
             Remind me!
          </Icon.Button>
        </View>
      )
}

const EventDisplay = ({title, location, date, time,
                      alarm_year, alarm_month, alarm_day, alarm_hour, alarm_min, remindMe}) => {

  return (
      <Card justifyContent = "center">
        <View style = {styles.container}>
        <View>
          {title!==null ? <Text style = {styles.titleStyle}>{title}</Text> : <Text style = {styles.titleStyle}>The title is not specified</Text>}
          {location!==null ? <Text style = {styles.whereStyle}>{location}</Text> : <Text style = {styles.whereStyle}>The location is not specified</Text>}
        </View>
        <View flexDirection = "row" alignItems = "center" marginBottom = {10}>
          <View>
            {date!==null ? <Text style = {styles.dateStyle}>{date} @ </Text> : <Text style = {styles.dateStyle}>The date is not specified</Text>}
          </View>
          {time!==null ? <Text style = {styles.whenStyle}>{time}</Text> : <Text style = {styles.whenStyle}>The time is not specified</Text>}
        </View>
        </View>
        {renderAddToCalender(title, date, time, location, 
                          alarm_year, alarm_month, alarm_day, alarm_hour, alarm_min, remindMe)}
      </Card>
  )
}

const styles = StyleSheet.create ({
  container: {
    padding: 5,
    alignItems: 'center',
    //justifyContent: 'center'
    //backgroundColor: "#"
  },
  buttonCont: {
    height: 45,
    width: 130,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "GillSans"
  },
  whereStyle: {
    fontSize: 16,
    fontFamily: "GillSans-Light"
  },
  dateStyle: {
    fontSize: 18,
    fontFamily: "GillSans-Light"
  },
  whenStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "GillSans-Light"
  }
});

export { EventDisplay }