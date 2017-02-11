// const React = require('react')
// const { connect } = require('react-redux')

// This compenent will require a group ID, and based upon this will search for all messages that have been posted to the group with that id

const React = require ('react')
const { List, ListItem } = require ('material-ui/List')
const Divider = require ('material-ui/Divider')
const Subheader = require ('material-ui/Subheader')
const Avatar = require ('material-ui/Avatar')
const { grey400, darkBlack, lightBlack } = require ('material-ui/styles/colors')
const IconButton = require ('material-ui/IconButton')
const MoreVertIcon = require ('material-ui/svg-icons/navigation/more-vert')
const IconMenu = require ('material-ui/IconMenu')
const MenuItem = require ('material-ui/MenuItem')
const { connect } = require('react-redux')
const moment = require('moment')

const userName = 'Lucas'
var text = ''
const data = [
  {userName: 'Lucas',
    message: 'Hello'},
  {userName: 'Bill',
    message: 'Salut'},
  {userName: 'Mischa',
    message: 'Konnichi wa'},
  {userName: 'Meghan',
    message: 'Hola'}
]
// FIX MEEEEEEEEE

const Messageboard = () => {
  function renderMessage ({userName, message}) {
    return (
      <ListItem
        primaryText={
          <p>
            <span style={{color: darkBlack}}>{userName}</span> -- {message}
          </p>
        }const updateText = (e) => text = e.value
      />
    )
  }

  function renderMessages (messages) {
    return messages.map((message) => renderMessage(message))
  }
  function postMessage () {
    data.push({userName, message: text})
    console.log({data})
  }
  const updateText = (e) => text = e.value
  return (
    <div>
      <span>{(moment().format('dddd DD MMMM YYYY '))}</span>
      <form>
        <input onChange={(e) => updateText(e)} type='text' />
        <input onClick={() => postMessage()} type='submit' value='Post' />
      </form>
      {renderMessages(data)}
    </div>
  )
}

module.exports = connect((state) => state)(Messageboard)
