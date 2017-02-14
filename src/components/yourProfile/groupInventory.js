const React = require('react')
const { connect } = require('react-redux')
const _ = require('lodash')
const handlePrev = require('./handlePrev')

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
    const { dispatch, group } = this.props
    const groupName = group.proposedGroupName
    db.createGroup(groupName, (err, status) => {
      if (err) throw err
      if (status.available){
        dispatch({type: 'GROUP_SUBMITTED', payload: groupName})
      } else {
        dispatch({type: 'ERROR', payload: 'GROUP_NOT_CREATED'})
      }
    })
  }

  handleCheck(name){
    return () => {
      console.log(this.props, name);
      this.props.dispatch({type: 'GROUP_TOGGLE_ITEM', payload: name})
    }
  }

  render(){
    const { group } = this.props
    console.log('this is group',  group);
    const inventory = group.groupPlan.inventory

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
