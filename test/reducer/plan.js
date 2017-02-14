require('babel-register')
const test = require('ava')

const initialState = require('../../state')
const userPlan = require('../../src/reducers/userPlan')
const _ = require('lodash')

test('inventory updates on chcekbox action', (t) => {
  t.plan(1)
  //actions
  const state = userPlan(initialState.userPlan, { type: 'TOGGLE_PLAN_ITEM', payload: 'Torch' })

  //assert
  const torch = _.find(state.inventory, { name: 'Torch'})
  console.log('here it is' , torch )

  t.true(torch.checked)
})
