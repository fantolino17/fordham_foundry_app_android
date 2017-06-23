import {EVENTS_FETCH_SUCCESS} from './types'
import firebase from 'firebase'




export const readEvents = () => {
  ref = firebase.database().ref(`/events`)

  return (dispatch) => {
    ref.on('value', snapshot => {
        dispatch({type: EVENTS_FETCH_SUCCESS, payload: snapshot.val()})
    })
  }
}

//Write events should be manually added to the database by admin

export const remindMe = ({date, time, note}) => {
  
  //wmcmahan api
  //https://github.com/wmcmahan/React-Native-Calendar-Reminders
}