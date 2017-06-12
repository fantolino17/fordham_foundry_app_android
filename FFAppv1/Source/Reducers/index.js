import {combineReducers} from 'redux';
import InfoReducer from './InfoReducer';
import SelectionReducer from './SelectionReducer';
import JobReducer from './JobReducer';
import JobFormReducer from './JobFormReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
	information: InfoReducer,
	selectedInfoId: SelectionReducer,
	jobs: JobReducer,
	selectedJobId: SelectionReducer,
	auth: AuthReducer,
	jobForm: JobFormReducer 
});

//console.log(store.getState());
// {libraries: [{id:1 , title:...}]}