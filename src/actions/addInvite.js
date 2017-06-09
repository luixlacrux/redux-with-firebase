import * as ActionTypes  from '../constants'
import db from '../database'

export function addToInvite (name) {
  return dispatch => {
    dispatch(addToInviteRequestedAction())
    const guestsRef = db.ref('/guests')
    guestsRef.push({
      name
    })
    .then(() => dispatch(addToInviteFulFilledAction({ name })))
    .catch(error => dispatch(addToInviteRejectedAction()))
  }
}

function addToInviteRequestedAction () {
  return {
    type: ActionTypes.ADD_TO_INVITE_REQUESTED,
  }
}

function addToInviteRejectedAction () {
  return {
    type: ActionTypes.ADD_TO_INVITE_REJECTED,
  }
}

function addToInviteFulFilledAction (guest) {
  return {
    type: ActionTypes.ADD_TO_INVITE_FULFILLED,
    guest,
  }
}
