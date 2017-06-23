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
    padding: 5,
    flexDirection: 'row',
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 8,
    paddingBottom: 8
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#0981CC',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    marginLeft: 100,
    marginRight: 100
  }
};

export { LinkButton };