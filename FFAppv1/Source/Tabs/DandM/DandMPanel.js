import React, {Component} from 'react';
import {StyleSheet,Text,View,Image,TouchableHighlight, TouchableOpacity, Animated, LayoutAnimation, Linking} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

var arrofImages = [
    require('../../../Images/LIPhotoCMeyer.jpg'),
    require('../../../Images/image1.jpg'),
    require('../../../Images/ALBartosic.png'),
    require('../../../Images/shaunjohnsonsquare.jpg'),
    require('../../../Images/Christine_Janssen.jpg')
];

var arrofEmails = [
  "mailto:cmeyer11@fordham.edu",
  "mailto:ssoto15@fordham.edu",
  "mailto:abartosic@fordham.edu",
  "mailto:shaunejohnson@gmail.com",
  "mailto:ssoto15@fordham.edu",
];


class DandMPanel extends Component{
    constructor(props){
        super(props);
        this.state = {       //Step 3
            DandMid         : props.DandMid,
            DandMname       : props.DandMname,
            DandMtitle      : props.DandMtitle,
            expanded    : false,
            //animation   : new Animated.Value()
        };

    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    toggle(){
        let initialValue = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
        finalValue = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded  //Step 2
        });

        /*this.state.animation.setValue(initialValue);  //Step 3
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();*/
        
    }

    renderView() {
        if(this.state.expanded) {
            return (
            <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}> 
                {this.props.children}
            </View>
            );
        }
    }


    render(){
        return ( 
        <TouchableHighlight 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
            <View style={[styles.container,{height: this.state.animation}]}>
                <View flexDirection ="row">
                <View padding = {8}>
                <Image source={arrofImages[this.state.DandMid]} style={styles.photo}/>
                </View>
                <View style={styles.nameandtitlecont} flex = {2} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.nameStyle}>{this.state.DandMname}</Text>
                    <Text style={styles.title}>{this.state.DandMtitle}</Text>
                </View>
                <View style={styles.emailcont}>
                <TouchableOpacity onPress = {() => Linking.openURL(arrofEmails[this.state.DandMid])}>
                <MatIcon name = "mail-outline" size = {40}/>
                </TouchableOpacity>
                </View>
                </View>
                <View flexDirection = "column">
                {this.renderView()}
                </View>

            </View>
        </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    container   : {
        
        //margin:10,
        overflow:'hidden',
    },
    nameandtitlecont: {
        flexDirection: 'column'
    },
    nameStyle: {
        paddingTop: 8,
        marginRight: 8,
        marginLeft: 8,
        fontSize: 20,
        fontFamily: 'GillSans',
    },
    title       : {
        paddingTop: 6,
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'GillSans'
    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        flexDirection: 'column',
        padding: 10,
        paddingTop: 30,
        paddingBottom     : 10,
        paddingTop  : 0
    },
    photo: {
        height: 80,
        width: 80,
        borderRadius: 20,
    },
    emailcont: {
        marginRight: 17.5,
        justifyContent: 'center'
    } 
});

export default DandMPanel;