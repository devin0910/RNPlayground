import React, { Component, PropTypes } from 'react';

import styles from './styles.js';
import Button from './../Button';

export default class LocationButton extends Component {

  constructor(props) {
    super(props);

    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        this.props.onGetCoords(initialPosition.coords.latitude,
          initialPosition.coords.longitude);
      },
      (error) => {alert(error.message)},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    return (
      <Button label="Use CurrentLocation"
        style={styles.locationButton}
        onPress={this._onPress}
      />
    );
  }
}

LocationButton.PropTypes = {
  onGetCoords: PropTypes.func.isRequired
}
