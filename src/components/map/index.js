const React = require('react')
const { connect } = require('react-redux')

const Geocoder = require('@mapbox/react-geocoder');

var Map = React.createClass({
  getInitialState: function() {
    return { value: null };
  },
  onSelect: function(value) {
    this.setState({ value: value });
  },
  render: function() {
    /* jshint ignore:start */
    return (
      <div>
        <div className='clearfix pad1'>
          {/* Geocoder:
              accessToken -- Mapbox developer access token (required)
              onSelect    -- function called after selecting result (required)
              showLoader  -- Boolean to attach `.loading` class to results list
          */}
          <Geocoder
            accessToken='pk.eyJ1IjoibHVjYXMtd2lsbHMiLCJhIjoiY2l6NG95MW93MDRuZzJ4cXdrd24wd2tyYyJ9.oLXI1Q8_WadIltTGGBi4SQ'
            onSelect={this.onSelect}
            showLoader={true}
            />
        </div>
        {this.state.value && <pre className='keyline-all'>{JSON.stringify(this.state.value, null, 2)}</pre>}
      </div>
    );
    /* jshint ignore:end */
  }
});

/* jshint ignore:start */
/* jshint ignore:end */

module.exports = connect((state) => state)(Map)
