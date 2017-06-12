import data from './Json/JobsList.json';

export default() => data;

// import {JOBS_FETCH_SUCCESS} from '../Actions/types'

// const INITIAL_STATE = {}

// export default (state = INITIAL_STATE, action) => {
//     switch(action.type){
//       case JOBS_FETCH_SUCCESS:
//         console.log("job fetch successful!!")
//         console.log(action.payload)
//         return action.payload
//       default: 
//         return state
//   }
// }