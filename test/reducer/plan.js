require('babel-register')
const test = require('ava')

const initialState = require('../../state')
const plan = require('../../src/reducers/plan')
const _ = require('lodash')

test('inventory updates on chcekbox action', (t) => {
  t.plan(1)
  //actions
  const state = plan(initialState.plan, { type:'TOGGLE_ITEM', payload:'Torch' })

  //assert
  const torch = _.find(state.inventory)

  t.true(torch.checked)
})
