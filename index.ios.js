// place code in here for ios
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import FordhamList from './src/components/FordhamList';

const App = () => (
  <View>
    <Header headerText={'Fordham Foundry'} />
    <FordhamList /> 
  </View>
  );

AppRegistry.registerComponent('FoundryBeta', () => App);