import {combineReducers} from 'redux';
import InfoReducer from './InfoReducer';
import SelectionReducer from './SelectionReducer';
import JobReducer from './JobReducer';

export default combineReducers({
	information: InfoReducer,
	selectedInfoId: SelectionReducer,
	jobs: JobReducer,
	selectedJobId: SelectionReducer
});

//console.log(store.getState());
// {libraries: [{id:1 , title:...}]}