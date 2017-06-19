import React from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux';
import {Card, CardSection, Button, Confirm} from '../../Components/Common'


const EventDisplay = ({event}) => {

  return (
    <Card>
      <CardSection>
        <Text style={}>Event:</Text>
        <Text> {event.title}</Text>
      </CardSection>

    </Card>
  )
}