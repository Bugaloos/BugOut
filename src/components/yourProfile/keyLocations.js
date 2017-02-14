const React = require('react')
const { connect } = require('react-redux')
const TextField = require('material-ui/TextField').default
const backButton = require('./backButton')

class KeyLocations extends React.Component {

  componentDidMount () {
    this.geocoder = new google.maps.Geocoder()
  }

  handleSubmit () {
    const { dispatch, showingComponent } = this.props
    var Latlng = new google.maps.LatLng
    var swlatlng = {lat: -46.570384, lng: 166.438844}
    var nelatlng = {lat: -34.085704, lng: 179.127941}
    var latlngbounds = new google.maps.LatLngBounds(swlatlng, nelatlng)
    const meetingAddress = this.refs.meetingPoint.input.value
    const safeAddress = this.refs.safePoint.input.value
    const meetingOpts = {
      'address': meetingAddress,
      'location': Latlng,
      'bounds': latlngbounds
    }
    const safeOpts = {
      'address': safeAddress,
      'location': Latlng,
      'bounds': latlngbounds
    }
    this.geocoder.geocode(meetingOpts, (meetResults, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const meetViewport = meetResults[0].geometry.viewport
        const meetingPoint = {lat: meetViewport.f.b, lng: meetViewport.b.b}
        this.geocoder.geocode(safeOpts, (safeResults, status2) => {
          const safeViewport = safeResults[0].geometry.viewport
          const safePoint = {lat: safeViewport.f.b, lng: safeViewport.b.b}
          if (showingComponent === 'CREATE_GROUP') {
            dispatch({type: 'UPDATE_GROUP_LOCATIONS', payload: {meetingPoint, safePoint}})
            dispatch({type: 'GROUP_FORWARD'})
          } else if (showingComponent === 'CREATE_PLAN') {
            dispatch({type: 'UPDATE_PLAN_LOCATIONS', payload: {meetingPoint, safePoint}})
          } else {
            console.log('what are you up to?')
          }
        })
      }
    })

  }
  render () {
    const { dispatch, showingComponent, group, userPlan } = this.props
    const groupStep = group.step
    const planStep = userPlan.step
    return (
      <div>
        <form>
          <div>
            <TextField
              hintText='Meeting Point'
              ref='meetingPoint' />
            <br />
            <TextField
              hintText='Safe Point'
              ref='safePoint' />
            <br />
          </div>
          {backButton(showingComponent, planStep, groupStep, dispatch)}
          <button onClick={this.handleSubmit.bind(this)}>Next Step</button>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(KeyLocations)
