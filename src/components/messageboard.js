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

const data = {
  userName: "Lucas",
  message: "Hello"
}

//FIX MEEEEEEEEE


const Messageboard = () => (
  <div>
      <List>
        <Subheader>Group Message Board</Subheader>

        <ListItem
          primaryText={
            <p>
              <span style={{color: darkBlack}}>Lucas</span> --
              I am going to see the fish flapping about at Oriental Bay! Fun!!
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          primaryText={
            <p>
              <span style={{color: darkBlack}}>Mischa</span> --
              Wow I am going to raft down Cuba Street!
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          primaryText={
            <p>
              <span style={{color: darkBlack}}>Meghan</span> --
              I am going to go up to the top floor to see how much it shakes in the next quake!
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          primaryText={
            <p>
              <span style={{color: darkBlack}}>Bill</span> --
              Looting is so fun! Free stuff for everyone!
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
      <form>
        <input type='text' value='comment'/>
        <input type='submit' value='Post'/>
      </form>

  </div>
);

module.exports = connect((state) => state)(Messageboard)
