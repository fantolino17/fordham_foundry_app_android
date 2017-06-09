import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import JobReducer from './JobReducer';
import JobFormReducer from './JobFormReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer,
	jobs: JobReducer,
	selectedJobId: SelectionReducer,
	auth: AuthReducer,
	jobForm: JobFormReducer 
});

//console.log(store.getState());
// {libraries: [{id:1 , title:...}]}