const React = require('react')
const { connect } = require('react-redux')
const TextField = require('material-ui/TextField').default
const backButton = require('./backButton')

class KeyLocations extends React.Component {

  componentDidMount () {
    this.geocoder = new google.maps.Geocoder()
  }

  handleSubmit () {
    var Latlng = new google.maps.LatLng
    var swlatlng = {lat: -46.570384, lng: 166.438844}
    var nelatlng = {lat: -34.085704, lng: 179.127941}
    var latlngbounds = new google.maps.LatLngBounds(swlatlng, nelatlng)
    const meetingAddress = this.refs.meetingPoint.input.value
    const opts = {
      'address': meetingAddress,
      'location': Latlng,
      'bounds': latlngbounds
    }
    this.geocoder.geocode(opts, (results, status) => {

      if (status === google.maps.GeocoderStatus.OK) {
        console.log("this is geocode Latlng", Latlng)
        console.log('results', results)
        const viewport = result[0].geometry.viewport
        const meetingPoint = {lat: viewport.f.b, lng: viewport.b.b}
        console.log('meetingPoint', meetingPoint);
      }
    })

    const { dispatch, showingComponent } = this.props
    const safePoint = this.refs.safePoint.input.value

    if (showingComponent === 'CREATE_GROUP') {
      dispatch({type: 'UPDATE_GROUP_LOCATIONS', payload: meetingPoint, safePoint})
    } else if (showingComponent === 'CREATE_PLAN') {
      dispatch({type: 'UPDATE_PLAN_LOCATIONS', payload: meetingPoint, safePoint})
    } else {
      console.log('what are you up to?')
    }
  }
  render () {
    const { dispatch, showingComponent, group, plan } = this.props
    const groupStep = group.step
    const planStep = plan.step

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
