import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './Reducers';

import StatusBarbg from './Components/Header/StatusBar';
import NavBar from './Components/Header/NavBar';
import {Tabs} from './Tabs/Router';
import ViewContainer from './Components/Common/ViewContainer';
//import LibraryList from './Components/LibraryList';

const App = () => {
	return (
		<Provider store = {createStore(reducers)}>
		<ViewContainer>
		<StatusBarbg/>
		<Tabs/>
		</ViewContainer>
		</Provider>

		);
}

export default App;