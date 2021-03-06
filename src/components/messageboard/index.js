// const React = require('react')
// const { connect } = require('react-redux')

// This compenent will require a group ID, and based upon this will search for all messages that have been posted to the group with that id

const React = require('react')
const {List, ListItem} = require('material-ui/List')
const Divider = require('material-ui/Divider')
const Subheader = require('material-ui/Subheader')
const Avatar = require('material-ui/Avatar')
const {grey400, darkBlack, lightBlack} = require('material-ui/styles/colors')
const IconButton = require('material-ui/IconButton')
const MoreVertIcon = require('material-ui/svg-icons/navigation/more-vert')
const IconMenu = require('material-ui/IconMenu')
const MenuItem = require('material-ui/MenuItem')
const { connect } = require('react-redux')
const moment = require('moment')
const db = require('../../../pouchDB')

const GroupAddUser = require('./groupAddUser')
const Messages = require('./messages')

class Messageboard extends React.Component {
  handleClick () {
    const { dispatch } = this.props
    const groupName = this.props.group.name
    const message = this.refs.message.value
    const userName = this.props.loggedIn

    db.postMessage(userName, groupName, message, (err, status) => {
      if (status.ok) {
        db.getDocs(groupName, (err, response) => {
          if (err) throw (err)
          const messages = response.map(respond => {
            const {text, userName} = respond.doc
            return {text, userName}
          })
          dispatch({type: 'UPDATE_MESSAGES', payload: messages})
          this.refs.message.value = ''
        })
      }
      // dispatch({type: 'UPDATE_MESSAGES', payload: messages})
    })
  }
  render () {
    return (
      <div className='stepper'>
        <GroupAddUser />
        <h2>Your Groups Messages</h2>
        <div id='date'>{(moment().format('dddd DD MMMM YYYY '))}</div>
        <div className='messageContainer'>
          <form>
            <input ref='message' placeholder='Your Message' className='input' type='text' />
            <button  onClick={this.handleClick.bind(this)} type='submit'>
              Post
            </button>
          </form>
          <br/>
          <br/>
          <Messages />
        </div>
      </div>
    )
  }
};

module.exports = connect((state) => state)(Messageboard)
