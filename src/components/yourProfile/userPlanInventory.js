const React = require('react')
const { connect } = require('react-redux')
const _ = require('lodash')
const handlePrev = require('./handlePrev')
const db = require('../../../pouchDB')
import Checkbox from 'material-ui/Checkbox'

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
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

  handleSubmit () {
    console.log('this.props', this.props);
    const { dispatch, userPlan, loggedIn } = this.props
    const userName = loggedIn
    db.createUserPlan(userName, userPlan, (err, status) => {
      console.log(status);
      if (err) throw err
      if (status.add) {
        dispatch({type: 'SHOWING_COMPONENT', payload: 'MY_PROFILE'})
      } else {
        dispatch({type: 'ERROR', payload: 'PLAN_NOT_SUBMITTED'})
      }
    })
  }

  handleCheck (name) {
    return () => {
      this.props.dispatch({type: 'TOGGLE_PLAN_ITEM', payload: name})
    }
  }

  render () {
    const { userPlan, showingComponent, dispatch } = this.props
    const inventory = userPlan.inventory
    const view = (
      <div className='plan'>
        {this.displayItems(inventory)}
      </div>
    )
    const create = (
      <div>
        {this.displayItems(inventory)}
        <button onClick={this.handleSubmit.bind(this)}> Submit </button>
        <button onClick={() => { handlePrev(showingComponent, dispatch) }}>Back</button>
      </div>
    )
    const display = showingComponent === 'CREATE_PLAN'
      ? create
      : view
    return display
  }
}

module.exports = connect((state) => state)(Inventory)
