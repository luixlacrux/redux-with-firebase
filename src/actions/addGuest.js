import { GUEST_ADDED } from '../constants'
import db from '../database'

export function watchGuestAddedEvent (dispatch) {
  db.ref('/guests').on('child_added', snap => {
    dispatch(getGuestAddedAction(snap.val()))
  })
}

function getGuestAddedAction (guest) {
  return {
    type: GUEST_ADDED,
    guest,
  }
}
