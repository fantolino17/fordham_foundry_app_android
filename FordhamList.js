import React, { Component } from 'react';
import { View, Text} from 'react-native';

class FordhamList extends Component {
    componentWillMount() {
        console.log('componentWillMount in FordhamList');
 

    }


    render() {
        return (
        <View>
            <Text>FOUNDRY LIST!!!!</Text>
        </View>

        );
    }
}

export default FordhamList;