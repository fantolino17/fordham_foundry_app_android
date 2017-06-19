import {EVENTS_FETCH_SUCCESS} from '../Actions/types'

const INITIAL_STATE = {
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
  events: {}
}

export default (state = INITIAL_STATE, action) => {
  
  switch(action.type) {

    case EVENTS_FETCH_SUCCESS:
      return {...state, events: action.payload}

    default:
      return INITIAL_STATE
  }
}