import * as ActionTypes from '../constants'

export function inviteReducer (state = {}, action) {
  switch (action.type) {
    case ActionTypes.GET_INVITE_REQUESTED:
      return Object.assign({}, state, {
        inProgress: true,
        error: null,
        success: null
      })
    case ActionTypes.GET_INVITE_REJECTED:
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting invite'
      })
    case ActionTypes.GET_INVITE_FULFILLED:
      const { host, agenda, guests } = action.invite
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got invited',
        host,
        agenda,
        guests: guests ? Object.keys(guests).map(k => guests[k]) : [],
      })
      return newState

    case ActionTypes.ADD_TO_INVITE_REQUESTED:
      return Object.assign({}, state, {
        inProgress: true,
        error: null,
        success: null,
      })
    case ActionTypes.ADD_TO_INVITE_REJECTED:
      return Object.assign({}, state, {
        isProgress: false,
        error: 'Error in adding guest.',
      })
    case ActionTypes.ADD_TO_INVITE_FULFILLED:
      return Object.assign({}, state, {
        inProgress: false,
        success: 'guest added.',
      })

    case ActionTypes.GUEST_ADDED: {
      const newState = Object.assign({}, state);
      newState.guests = newState.guests || [];
      newState.guests = newState.guests.slice();
      newState.guests.push(action.guest);
      return newState;
    }

    default:
      return state
  }
}
