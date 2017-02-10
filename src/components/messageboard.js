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

const data = [
  {userName: "Lucas",
  message: "Hello"},
  {userName: "Bill",
  message: "Salut"},
  {userName: "Mischa",
  message: "Konnichi wa"},
  {userName: "Meghan",
  message: "Hola"},
]
//FIX MEEEEEEEEE

const Messageboard = () => (
  function renderMessage({userName, message}) {
    return (
      <ListItem
        primaryText={
          <p>
            <span style={{color: darkBlack}}>{userName}</span> -- {message}
          </p>
        }
      />
    )
  }

  function renderMessages(messages) {
    return messages.map((message) => renderMessage(message))
  }
  <div>
    <span>{(moment().format('dddd DD MMMM YYYY '))}</span>
      <form>
        <input type='text' value='comment'/>
        <input type='submit' value='Post'/>
      </form>
    renderMessages()
  </div>
);

module.exports = connect((state) => state)(Messageboard)
