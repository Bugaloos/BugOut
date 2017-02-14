const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const db = require('../../../pouchDB')
const { List, ListItem } = require('material-ui/List')
const { grey400, darkBlack, lightBlack} = require('material-ui/styles/colors')

function updateMessages( groupName, dispatch){
  db.getMessages(groupName, (err, response) => {
    if(err) throw err
    const messages = response.map(respond => {
      const {text, userName} = respond.doc
      return {text, userName}
    })
    dispatch({type: 'UPDATE_MESSAGES', payload: messages})
  })
}

class Messages extends React.Component {

  componentDidMount () {
    const { dispatch} = this.props
    const groupName = this.props.group.name
    updateMessages(groupName, dispatch)

    db.getMessages(groupName, (err, response) => {
      if (err) throw (err)
      const messages = response.map(respond => {
        const {text, userName, _id} = respond.doc
        return {text, userName, _id}
      })
      dispatch({type: 'UPDATE_MESSAGES', payload: messages})
    })
  }

  render () {
    const { dispatch, messages } = this.props
    const groupName = this.props.group.name

    setInterval(function (){
      db.syncGroup(groupName, (err, status) => {
        if(err) throw err
        updateMessages(groupName, dispatch)
      })
    }, 5000)

    function renderMessage({userName, text, _id}) {
      return (
        <ListItem
          primaryText={
            <p>
              <span style={{color: darkBlack}} key={_id} >{userName}</span> -- {text}
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
