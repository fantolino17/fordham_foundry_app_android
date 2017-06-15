import { JOB_UPDATE, JOB_CREATE, JOBS_FETCH_SUCCESS } from './types'
import firebase from 'firebase'


export const jobUpdate = ({prop, value}) => {
  return {
    type: JOB_UPDATE,
    payload: {prop, value}
  }
}

export const jobCreate = ({name, email, description, category, user, id}) => {
  
  return (dispatch) => {
    firebase.database().ref(`/jobBoard`)
      .push({name,email,description,user,category,id})
      .then( () => {
        dispatch({type: JOB_CREATE})
      })
  }
}

export const jobDelete = () => {
  
}


export const fetchJobs = () => {

  return (dispatch) => {
    firebase.database().ref(`/jobBoard`)
      .on('value', snapshot => {
        dispatch({type: JOBS_FETCH_SUCCESS, payload: snapshot.val()})
    })
  }
}

