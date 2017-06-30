import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './Reducers';
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'


import StatusBarbg from './Components/Header/StatusBar';
import NavBar from './Components/Header/NavBar';
import {Tabs} from './Tabs/Router';
import ViewContainer from './Components/Common/ViewContainer';
import {Scene} from 'react-native-router-flux'
import LoginForm from './Tabs/Login/LoginForm'
//import LibraryList from './Components/LibraryList';

class App extends Component {

	componentWillMount(){
		//Initiliaze Firebase
		var config = {
			apiKey: "AIzaSyBckA3a7DZXRwk_QRMxB4KtrM11XXnJiLE",
			authDomain: "fordhamfoundryapp-bcee9.firebaseapp.com",
			databaseURL: "https://fordhamfoundryapp-bcee9.firebaseio.com",
			projectId: "fordhamfoundryapp-bcee9",
			storageBucket: "fordhamfoundryapp-bcee9.appspot.com",
			messagingSenderId: "352855041318"
		};
  	firebase.initializeApp(config)
	}

	render(){
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
		
		return (	
			<Provider store = {store}>
				<ViewContainer>
				<StatusBarbg/>
				<Tabs/>
				</ViewContainer>
			</Provider>
		)
	}
}

export default App;