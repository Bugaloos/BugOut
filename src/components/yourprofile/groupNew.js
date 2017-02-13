const React = require('react')
const { connect } = require('react-redux')
const db = require('../../../pouchDB')
const Stepper = require('./stepper')

class GroupNew extends React.Component {

  // handleSubmit () {
  //   const { dispatch } = this.props
  //   const groupName = this.refs.groupName.input.value.toLowerCase()
  //
  //   dispatch({type: 'UPDATE_GROUP', payload: {s}})
  //
  //
  //   var newGroup = {
  //     groupName
  //   }

  //   db.createGroup(newGroup, (err, status) => {
  //     if (err) console.log(err)
  //     console.log('waterfall effect', status)
  //   })
  // }

  render () {
    return (
      <Stepper />
    )
  }
}

module.exports = connect((state) => state)(GroupNew)
