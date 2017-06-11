import {JOB_UPDATE, JOB_CREATE, JOBS_FETCH_SUCCESS} from '../Actions/types'

const INITIAL_STATE = {
  name: '',
  email: '',
  description: '',
  category: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case JOB_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value}
    case JOB_CREATE:
      return {INITIAL_STATE}
    case JOBS_FETCH_SUCCESS:
      console.log("job fetch successful!!")
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}


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