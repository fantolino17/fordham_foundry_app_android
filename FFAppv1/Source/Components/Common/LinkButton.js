import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const LinkButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <View style = {styles.container}>
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    //paddingTop: 5,
    paddingRight: 275,
    marginBottom: 10,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    padding: 8
  },
  buttonStyle: {
    flex: 1,
    //alignSelf: 'stretch',
    backgroundColor: '#0981CC',
    borderRadius: 5,
    
    borderColor: 'black',
    
  }
};

export { LinkButton };