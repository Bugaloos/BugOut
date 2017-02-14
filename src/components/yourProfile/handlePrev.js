
function handlePrev () {
  const { dispatch, showingComponent } = this.props
  
  if (showingComponent === 'CREATE_GROUP') {
    dispatch({type: 'UPDATE_GROUP_LOCATIONS', payload: meetingPoint, safePoint})
  } else if (showingComponent === 'CREATE_PLAN') {
    dispatch({type: 'UPDATE_PLAN_LOCATIONS', payload: meetingPoint, safePoint})
  } else {
    console.log('what are you up to?')
  }
}
