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
import LoginForm from './Components/LoginForm'
//import LibraryList from './Components/LibraryList';

class App extends Component {

	componentWillMount(){
		//Initiliaze Firebase
		var config = {
			apiKey: "AIzaSyDHdHiujKrk5nTQGFFhbXwoU_hb0cCugbk",
			authDomain: "project-feed1.firebaseapp.com",
			databaseURL: "https://project-feed1.firebaseio.com",
			projectId: "project-feed1",
			storageBucket: "project-feed1.appspot.com",
			messagingSenderId: "135840274447"
		};
  	firebase.initializeApp(config)
	}

	render(){
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
		
		return (	
			<Provider store = {store}>
				<ViewContainer>
				<StatusBarbg/>
				<NavBar/>
				<Tabs/>
				</ViewContainer>
			</Provider>
		)
	}
}

export default App;