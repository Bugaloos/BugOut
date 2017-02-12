const React = require('react')
const { connect } = require('react-redux')
const _ = require('lodash')
// This component will return a specific plan based upon the userID or groupID which it recives
import Checkbox from 'material-ui/Checkbox';

class Inventory extends React.Component {

  handleSubmit (){
    const inventory = [
      {name: 'Torch', id: 'torch', checked:this.refs.torch.state.switched},
      {name: 'Radio', id: 'radio', checked:this.refs.radio.state.switched},
      {name: 'Warm Clothes', id: 'warmclothes',  checked:this.refs.warmclothes.state.switched},
      {name: 'First Aid Kit', id: 'firstaidkit', checked:this.refs.firstaidkit.state.switched},
      {name: 'Snack Food', id: 'snackfood', checked:this.refs.snackfood.state.switched},
      {name: 'Water', id: 'water', checked:this.refs.water.state.switched}
    ]
    const { dispatch } = this.props
    dispatch({type:'UPDATE_INVENTORY' , payload:inventory})
  }

  render(){
    console.log(this.refs);
    const { plan } = this.props
    const styles = {
      block: {
        maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
      },
    }

    return (
      <div>
        {displayItems(plan.inventory)}
        <button onClick={this.handleSubmit.bind(this)}> Submit </button>
      </div>
    )

    function displayItems(inventory){
      return inventory.map(item => {
        return (
          <div style={styles.block}>
          <Checkbox
          ref={item.id}
          label={item.name}
          style={styles.checkbox}
          defaultChecked={item.checked}
          />
          </div>
        )
      })
    }
    }
}


module.exports = connect((state) => state)(Inventory)
