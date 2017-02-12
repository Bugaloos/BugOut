const React = require('react')
const { connect } = require('react-redux')
const _ = require('lodash')
// This component will return a specific plan based upon the userID or groupID which it recives
import Checkbox from 'material-ui/Checkbox';

class Inventory extends React.Component {

  handleSubmit (){
    const { dispatch } = this.props
  }

  render(){
    const styles = {
      block: {
        maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
      },
    }

    const inventory = [
      {name: 'torch', checked:false},
      {name: 'radio', checked:false},
      {name: 'warmClothes', checked:false},
      {name: 'firstAidKit', checked:false},
      {name: 'snackFood', checked:false},
      {name: 'water', checked:false}
    ]

    return (
      <div>
        {displayItems(inventory)}
        <button onClick={this.handleSubmit.bind(this)}> Submit </button>
      </div>
    )

    function displayItems(inventory){
      return inventory.map(item => {
        return (
          <div style={styles.block}>
          <Checkbox
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
