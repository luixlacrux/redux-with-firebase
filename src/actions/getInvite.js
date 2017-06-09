import * as ActionTypes from '../constants'
import db from '../database'

export function getInvite () {
  return dispatch => {
    dispatch(getInviteRequestedAction())
    return db.ref('/').once('value', snap => {
      const invite = snap.val()
      dispatch(getInviteFulFilledAction(invite))
    })
    .catch(error => {
      console.error(error)
      dispatch(getInviteRejectedAction())
    })
  }
}

function getInviteRequestedAction () {
  return {
    type: ActionTypes.GET_INVITE_REQUESTED,
  }
}

function getInviteRejectedAction () {
  return {
    type: ActionTypes.GET_INVITE_REJECTED,
  }
}

function getInviteFulFilledAction (invite) {
  return {
    type: ActionTypes.GET_INVITE_FULFILLED,
    invite,
  }
}
