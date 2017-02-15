var React = require('react');

var INITIAL_LOCATION = {
  address: 'Wellington, New Zealand',
  position: {
    latitude: -41.2865,
    longitude: 174.7762
  }
};

var INITIAL_MAP_ZOOM_LEVEL = 8;

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

  geocodeAddress: function (address) {
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {

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

    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });

    this.geocoder = new google.maps.Geocoder();
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
          <div style={{width:'100%', height:'100%'}} className="col-sm-12">
            <div style={{width:800, height:600}} className="map" ref={this.setMapElementReference}></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Map;
