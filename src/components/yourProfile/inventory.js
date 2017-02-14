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
    //TODO wire to database
    const { dispatch } = this.props
  }

  handleCheck(name){
    return () => {
      console.log(this.props, name);
      this.props.dispatch({type: 'TOGGLE_ITEM', payload: name})
    }
  }

  render(){
    const { plan } = this.props
    const inventory = plan.inventory

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
