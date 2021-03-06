var React = require('react');
const _ = require('lodash')

var INITIAL_LOCATION = {
  address: 'Wellington, New Zealand',
  position: {
    latitude: -41.310552,
    longitude: 174.763051
  }
};

var INITIAL_MAP_ZOOM_LEVEL = 15;

var ATLANTIC_OCEAN = {
  latitude: 29.532804,
  longitude: -55.491477
};


var Map = React.createClass({
  getInitialState: function () {
    return {
      isGeocodingError: false,
      foundAddress: INITIAL_LOCATION.address
    };
  },


  componentWillReceiveProps: function (locations) {
    this.locations = _.map(this.props.locations, (location) => {
      return new google.maps.Marker({
        map: this.map,
        position: location
      })
    })
  },


  geocodeAddress: function (address) {
    var Latlng = new google.maps.LatLng
    this.geocoder.geocode({ 'address': address, 'location': Latlng}, function handleResults(results, status) {

      if (status === google.maps.GeocoderStatus.OK) {
        console.log("this is geocode results", results);
        this.setState({
          foundAddress: results[0].formatted_address,
          geoCoords: results[0].geometry,
          isGeocodingError: false
        });

        this.geocoder = new google.maps.Geocoder();

        const {dispatch} = this.props
        this.map.setCenter(results[0].geometry.location);
        this.marker.setPosition(results[0].geometry.location);

        const coords = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }

        console.log('this is lat from result', results[0].geometry.location.lat());
        console.log('this is lng from result', results[0].geometry.location.lng());

        return;
      }

      this.setState({
        foundAddress: null,
        isGeocodingError: true
      });

      this.map.setCenter({
        lat: ATLANTIC_OCEAN.latitude,
        lng: ATLANTIC_OCEAN.longitude
      });

      this.marker.setPosition({
        lat: ATLANTIC_OCEAN.latitude,
        lng: ATLANTIC_OCEAN.longitude
      });

    }.bind(this));
  },

  handleFormSubmit: function (submitEvent) {
    submitEvent.preventDefault();

    var address = this.searchInputElement.value;

    this.geocodeAddress(address);
  },

  componentDidMount: function () {
    var mapElement = this.mapElement;

    this.map = new google.maps.Map(mapElement, {
      zoom: INITIAL_MAP_ZOOM_LEVEL,
      center: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });

    this.locations = _.map(this.props.locations, (location) => {
      console.log('this is the location: ', location, 'this is this: ', this);
      return new google.maps.Marker({
        map: this.map,
        position: location
      })
    })
    console.log('this.locations: ', this.locations);

    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });


  },

  setSearchInputElementReference: function (inputReference) {
    this.searchInputElement = inputReference;
  },

  setMapElementReference: function (mapElementReference) {
    this.mapElement = mapElementReference;
  },


  render: function () {
    return (
      <div className="container">
        <div className="row">
            <div style={{width:400, height:400}} className="map" ref={this.setMapElementReference}></div>
          </div>
      </div>
    )
  }
})

module.exports = Map;
