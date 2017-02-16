const React = require('react')
const { connect } = require('react-redux')
const _ = require('lodash')
const handlePrev = require('./handlePrev')
const db = require('../../../pouchDB')

// This component will return a specific plan based upon the userID or groupID which it recives
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  }
}

class Inventory extends React.Component {

  displayItems (inventory) {
    return inventory.map(item => {
      return (
        <div style={styles.block}>
          <Checkbox
            onCheck={this.handleCheck(item.name)}
            label={item.name}
            style={styles.checkbox}
            defaultChecked={item.checked}
          />
        </div>
      )
    })
  }

  handleSubmit (){
    const { dispatch, group, groupPlan, loggedIn, router } = this.props
    dispatch({type: 'LOAD_START'})
    const groupName = group.proposedGroupName.toLowerCase()
    const userName = loggedIn
    db.createGroup(groupName, userName, groupPlan, (err, status) => {
      if (err) throw err
      if (status.register){
        dispatch({type: 'GROUP_SUBMITTED', payload: groupName})
        dispatch({type: 'SHOWING_COMPONENT', payload: 'MY_PROFILE'})
        router.push(`/groups/${groupName}`)
        dispatch({type: 'LOAD_END'})
      } else {
        dispatch({type: 'ERROR', payload: 'GROUP_NOT_CREATED'})
        dispatch({type: 'LOAD_END'})
      }
    })
  }

  handleCheck (name) {
    return () => {
      console.log(name)
      this.props.dispatch({type: 'TOGGLE_GROUP_ITEM', payload: name})
    }
  }

  render () {
    const { groupPlan } = this.props
    const inventory = groupPlan.inventory

    return (
      <div>
        {this.displayItems(inventory)}
        <button onClick={this.handleSubmit.bind(this)}> Submit </button>
        <button onClick={() => { handlePrev(this.props.showingComponent, this.props.dispatch) }}>Back</button>

      </div>
    )
  }
}

module.exports = connect((state) => state)(Inventory)
