module.exports = function handlePrev (showingComponent, dispatch) {
  if (showingComponent === 'CREATE_GROUP') {
    dispatch({type: 'GROUP_BACK'})
  } else if (showingComponent === 'CREATE_PLAN') {
    dispatch({type: 'PLAN_BACK'})
  } else {
    console.log('what are you up to?')
  }
}
