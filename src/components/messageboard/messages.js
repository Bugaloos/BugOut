const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const db = require('../../../pouchDB')
import {List, ListItem} from 'material-ui/List'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors'

class Messages extends React.Component {

  componentDidMount () {
    const { dispatch, group } = this.props

    db.getMessages(group, (err, response) => {
      if (err) throw (err)
      const messages = response.map(respond => {
        const {text, userName} = respond.doc
        return {text, userName}
      })
      dispatch({type: 'UPDATE_MESSAGES', payload: messages})
    })
  }

  render () {
    const { messages } = this.props

    function renderMessage ({userName, text}) {
      return (
        <ListItem
          primaryText={
            <p>
              <span style={{color: darkBlack}} key={userName} >{userName}</span> -- {text}
            </p>
        }
        />
      )
    }

    function renderMessages (messages) {
      const renderedMessages = messages.map(renderMessage)
      return renderedMessages
    }

    return (
      <div>
        {renderMessages(messages)}
      </div>
    )
  }
}

module.exports = connect((state) => state)(Messages)
