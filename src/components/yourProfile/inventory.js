const React = require('react')
const { connect } = require('react-redux')
const _ = require('lodash')
const db = require('../../../pouchDB')
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
    const { dispatch, group, loggedIn, showingComponent } = this.props
    if(showingComponent === 'CREATE_GROUP'){
      db.createGroup(group.name, loggedIn, group.plan, (err, res) => {
        if (err) throw err
        if (res.register) {
          dispatch({type:'ADD_GROUP', payload: res.group})
        } else {
          console.log(res)
        }
      })
    }
  }

  handleCheck(name){
    const { showingComponent, dispatch } = this.props
    return () => {
      const dispatchType = (showingComponent === 'CREATE_GROUP')
      ? 'TOGGLE_GROUP_ITEM'
      : 'TOGGLE_PLAN_ITEM'
      dispatch({type: dispatchType, payload: name})//change with ternery
    }
  }

  render(){
    const { plan, group, showingComponent } = this.props
    const inventory = (showingComponent === 'CREATE_GROUP')
    ? group.plan.inventory
    : plan.inventory

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
