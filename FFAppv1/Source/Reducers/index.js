import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import JobReducer from './JobReducer';

export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer,
	jobs: JobReducer,
	selectedJobId: SelectionReducer
});

//console.log(store.getState());
// {libraries: [{id:1 , title:...}]}