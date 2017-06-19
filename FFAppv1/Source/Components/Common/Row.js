import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  emailcont: {
    marginRight: 15,
    justifyContent: 'center'
  },
  name: {
    paddingTop: 8,
    marginRight: 8,
    marginLeft: 8,
    fontSize: 18,
  },
  perstitle: {
    paddingTop: 6,
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 'bold'
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius: 20,
  }
});

var arrofImages = [
    require('../../../Images/LIPhotoCMeyer.jpg'),
    require('../../../Images/image1.jpg'),
    require('../../../Images/fordham-rams-logo.png'),
    require('../../../Images/shaunjohnsonsquare.jpg'),
    require('../../../Images/fordham-rams-logo.png')
];

var arrofEmails = [
  "mailto:frank@fordham.edu",
  "mailto:ssoto15@fordham.edu",
  "mailto:ssoto15@fordham.edu",
  "mailto:ssoto15@fordham.edu",
  "mailto:ssoto15@fordham.edu",
];

const Row = (props) => (
  <View flexDirection = "row">
  <View style={styles.container}>
    <Image source={arrofImages[props.id]} style={styles.photo} />
  </View>
  <View flexDirection = "column" flex = {2}>
    <Text style={styles.name}>
      {`${props.name}`}
    </Text>
    <Text style = {styles.perstitle}>
    {`${props.title}`}
    </Text>
  </View>
    <View style={styles.emailcont}>
    <TouchableOpacity onPress = {() => Linking.openURL(arrofEmails[props.id])}>
      <MatIcon name = "mail-outline" size = {40}/>
    </TouchableOpacity>
    </View>
  </View>
);

export default Row;