// const React = require('react')
// const { connect } = require('react-redux')

// This compenent will require a group ID, and based upon this will search for all messages that have been posted to the group with that id

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
const { connect } = require('react-redux')
const moment = require('moment')
const db = require('../../../pouchDB')

const Messages = require('./messages')

class Messageboard extends React.Component {
  handleClick(){
    const { group, dispatch } = this.props
    const message = this.refs.message.value
    const userName = this.props.loggedIn

    db.postMessage(userName, group, message, (err, status) => {
      if(status.ok){
        db.getMessages(group, (err, response) => {
          if(err) throw(err)
          const messages = response.map(respond => {
            const {text, userName} = respond.doc
            return {text, userName}
          })
          dispatch({type: 'UPDATE_MESSAGES', payload: messages})
        })
      }
      // dispatch({type: 'UPDATE_MESSAGES', payload: messages})
    })
  }
  render(){

    return (
      <div>
      <span>{(moment().format('dddd DD MMMM YYYY '))}</span>
      <form>
      <input ref='message' type='text'/>
      <input onClick={this.handleClick.bind(this)} type='submit' value='Post'/>
      </form>
      <Messages />
      </div>
    )
  }
};

module.exports = connect((state) => state)(Messageboard)
