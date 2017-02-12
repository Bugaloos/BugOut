const React = require('react')
const { connect } = require('react-redux')

// This component will return a specific plan based upon the userID or groupID which it recives

const inventory = {
  torch:false,
  radio:false,
  warmClothes:false,
  firstAidKit:false,
  snackFood:false,
  water:false
}

function Inventory (props) {
  return (
      <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Latest night out</TableHeaderColumn>
            <TableHeaderColumn>Number of nights out</TableHeaderColumn>
            <TableHeaderColumn>Total owed</TableHeaderColumn>
            <TableHeaderColumn>Total owing</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {_.map(inventory, (item) => {
            return (
              <TableRow>
                <TableRowColumn>{6}</TableRowColumn>
                <TableRowColumn>{'bobe'}</TableRowColumn>
                <TableRowColumn>01/01/2017</TableRowColumn>
                <TableRowColumn>{item}</TableRowColumn>
                <TableRowColumn>100 $</TableRowColumn>
                <TableRowColumn>0 $</TableRowColumn>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <div className='barChart'>
      <VictoryChart>
          <VictoryBar
            data={data}
            x="days"
            y="people"
          />
        </VictoryChart>
        </div>
      </div>
    )
  }

module.exports = connect((state) => state)(Inventory)
