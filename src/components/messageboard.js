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
const db = require('../../pouchDB')

var text = ''
const data = [
  {userName: "Lucas",
    text: "Goodbye"},
  {userName: "Bill",
    text: "Salut"},
  {userName: "Mischa",
    text: "Konnichi wa"},
  {userName: "Meghan",
    text: "Hola"},
]
//FIX MEEEEEEEEE
const group = 'Bugaloos'


class Messageboard extends React.Component {
  handleClick(){
    const message = this.refs.message.value
    const userName = this.props.loggedIn
    console.log("this is props", this.props);
    console.log("this is message", this.refs.message);
    db.postMessage(userName, group, message)
  }
  render(){

    function renderMessage({userName, message}) {
      console.log('render message hit');
      return (
        <ListItem
        primaryText={
          <p>
          <span style={{color: darkBlack}}>'Name'</span> -- '{message}'
          </p>
        }
        />
      )
    }

    function renderMessages(messages) {
      console.log(messages, 'messages');
      return messages.map((message) => renderMessage(message))
    }

    function showMessages(group, cb){
      db.getMessages(group, (err, response) => {
        if(err) throw(err)
        const messages = response.map(respond => {
          const {message, userName} = respond.doc
          return {message, userName}
        })
        cb(messages)
      })
    }

    // function renderMessages(messages) {
    //   console.log(messages);
    //   return messages.map(message => {
    //     return (
    //       <ListItem
    //       primaryText={
    //         <p>
    //         <span style={{color: darkBlack}}>'userName'</span> -- 'message'
    //         </p>
    //       }
    //       />
    //     )
    //   })
    //
    // }

    return (
      <div>
      <span>{(moment().format('dddd DD MMMM YYYY '))}</span>
      <form>
      <input ref='message' type='text'/>
      <input onClick={this.handleClick.bind(this)} type='submit' value='Post'/>
      </form>
      {showMessages(group, renderMessages)}
      </div>
    )
  }
};

module.exports = connect((state) => state)(Messageboard)
