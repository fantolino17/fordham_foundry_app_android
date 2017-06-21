import React from 'react';
import { View } from 'react-native';

const ButtonCont = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    
    padding: 10,
    
    
    flexDirection: 'row',
    
    position: 'relative'
  }
};

export { ButtonCont };