import { connect } from 'react-redux'
import { getInvite } from '../actions/getInvite'
import { addToInvite } from '../actions/addInvite'
import { watchGuestAddedEvent } from '../actions/addGuest'
import Invite from '../components/Invite.jsx'

function mapStateToProps (state) {
  return {
    invite: state.invite
  }
}

function mapDispatchToProps (dispatch) {
  watchGuestAddedEvent(dispatch)
  return {
    onGetInvite: () => dispatch(getInvite()),
    onAddToInvite: name => dispatch(addToInvite(name)),
  }
}

const InviteContainer = connect(mapStateToProps, mapDispatchToProps)(Invite)

export default InviteContainer
