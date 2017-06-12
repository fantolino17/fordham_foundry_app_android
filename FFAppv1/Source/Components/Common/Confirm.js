import React from 'react'
import {Text, View, Modal} from 'react-native'
import {CardSection} from './CardSection'
import {Button} from './Button'

const Confirm = ({children,visible,onReturn}) => {
  const {containerStyle,textStyle,cardSectionStyle} = styles
  return(
    <Modal
      animationType="slide"
      onRequestClose={ ()=>{} }
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <View style={textStyle}>
            {children}
          </View>
        </CardSection>

        <CardSection>
          <Button onPress={onReturn}>Return</Button>
        </CardSection>
      </View>
    </Modal>
  )
}

const styles={
  cardSectionStyle:{
    justifyContent:'center'
  },
  textStyle:{
    flex:1,
  },
  containerStyle:{
    backgroundColor: 'rgba(0,0,0,0.75)',
    position:'relative',
    flex:1,
    justifyContent:'center'
  }
}

export {Confirm}
