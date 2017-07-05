import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image, Linking} from 'react-native'
import {connect} from 'react-redux';
import {Card, CardSection, Confirm, Button, UpdateButton} from '../../Components/Common'

import Icon from 'react-native-vector-icons/Ionicons';
const UpdateDisplay = ({title, update, date, link}) => {
  console.log({title})
  showTitle = ()=> {
    if({title}.title === 'brevite' || {title}.title === 'Brevite')
    {
      return (
          <Image style = {styles.photoStyle} source = {require('../../../Images/brevite.jpg')}/>
        );
    }
    else if({title}.title === 'kindmind' || {title}.title === 'KindMind')
    {
      return (
          <Image style = {styles.photoStyle} source = {require('../../../Images/KindMind.jpg')}/>
        );
    }
    else if({title}.title === 'pathos' || {title}.title === 'Pathos')
    {
      return (
           <Image style = {styles.photoStyle} source = {require('../../../Images/pathoslogo.png')}/>
        );
    }
    else if({title}.title === 'radiate' || {title}.title === 'Radiate')
    {
      return (
          <Image style = {styles.photoStyle} source = {require('../../../Images/redplanet.jpg')}/>
        );
    }
    else if({title}.title === 'red planet' || {title}.title === 'redplanet' || {title}.title === 'RedPlanet' || {title}.title === 'Red Planet')
    {
      return (
          <Image style = {styles.photoStyle} source = {require('../../../Images/radiate.jpg')}/>
        );
    }
    else if({title}.title === "ventir" || {title}.title === "Ventir")
    {
      return (
          <Image  style = {styles.photoStyle} source = {require('../../../Images/ventir.png')}/>
        );
    }
    else {
      return (
        <Text style = {styles.titleStyle}>The title is not specified</Text>
      );
    }
  }

  renderButton = (link) => {
    return (
      <UpdateButton onPress={ () => Linking.openURL(link) }>
        See more
      </UpdateButton>
    )
  }

  return (
      
        <View style = {styles.container}>
          <View flex = {1} alignItems = "center">
          {showTitle()}
          </View>
          <View flex = {2}>
          {update!==null ? <Text style = {styles.updateStyle}>{update}</Text> : <Text style = {styles.updateStyle}>Update not specified</Text>}
          {date!==null ? <Text style = {styles.dateStyle}>{date}</Text> : <Text style = {styles.dateStyle}>The date is not specified</Text>}
          </View>
            {link!=="" ? renderButton(link) : <Text></Text>}
        </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth
    //backgroundColor: "#"
  },
  buttonCont: {
    height: 45,
    width: 130,
  },
  titleStyle: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "GillSans"
  },
  updateStyle: {
    fontSize: 22,
    fontFamily: "GillSans-Light"
  },
  dateStyle: {
    fontSize: 18,
    fontFamily: "GillSans-Light"
  },
  photoStyle: {
    height: 63,
    width: 70,
    borderRadius: 20, 
  }
});

export { UpdateDisplay }