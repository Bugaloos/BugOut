const React = require('react')
const { connect } = require('react-redux')


const INITIAL_LOCATION = {
  address: 'Wellington, New Zealand',
  position: {
    latitude: -41.28664,
    longitude: 174.77557
  }
};

var INITIAL_MAP_ZOOM_LEVEL = 8;

var PACIFIC_OCEAN = {
  latitude: -39.232253,
  longitude: 170.3320
};


class Map extends React.Component {
  getInitialState() {
    return {
      isGeocodingError: false,
      foundAddress: INITIAL_LOCATION.address
    }
  }

  geocodeAddress(address) {
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) 

      if (status === google.maps.GeocoderStatus.OK) {

        this.setState({
          foundAddress: results[0].formatted_address,
          isGeocodingError: false
        });

        this.map.setCenter(results[0].geometry.location);
        this.marker.setPosition(results[0].geometry.location);

        return;
      }

      this.setState({
        foundAddress: null,
        isGeocodingError: true
      });

      this.map.setCenter({
        lat: PACIFIC_OCEAN.latitude,
        lng: PACIFIC_OCEAN.longitude
      });

      this.marker.setPosition({
        lat: PACIFIC_OCEAN.latitude,
        lng: PACIFIC_OCEAN.longitude
      });

    }.bind(this))
  }

  handleFormSubmit(submitEvent) {
    submitEvent.preventDefault();

    const address = this.searchInputElement.value;

    this.geocodeAddress(address)
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapElement, {
      zoom: INITIAL_MAP_ZOOM_LEVEL,
      center: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });

    this.geocoder = new google.maps.Geocoder()
  }

  setSearchInputElementReference(inputReference) {
    this.searchInputElement = inputReference
  }

  setMapElementReference(mapElementReference) {
    this.mapElement = mapElementReference
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

          <div className="map" ref={this.setMapElementReference}></div>

          <form className="form-inline" onSubmit={this.handleFormSubmit} >
              <div className="row">


                <div className="col-xs-8 col-sm-10">

                  <div className="form-group">
                    <label className="sr-only" htmlFor="address">Address</label>
                    <input type="text"
                      className="form-control input-lg"
                      id="address"
                      placeholder="Welington"
                      ref={this.setSearchInputElementReference}
                      required />
                  </div>

                </div>
                <div className="col-xs-4 col-sm-2">

                  <button type="submit" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </button>

            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
    )
  }
}

module.exports = connect((state) => state)(Map)
