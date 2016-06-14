import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

const STORAGE_KEY = '@SmarterWeather:zip';
const WEATHER_API_KEY = '58a3f97b6171d6306f3e362ef548cf8f';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

import Forecast from './../Forecast';
import LocationButton from './../LocationButton';
import PhotoBackdrop from './../PhotoBackdrop';

export default class WeatherProject extends Component {

  constructor(props) {
    super(props);

    this.state = {
      forecast: null
    };

    this._handleTextChange = this._handleTextChange.bind(this);
    this._getForeastForZip = this._getForeastForZip.bind(this);
    this._getForecastForCoords = this._getForecastForCoords.bind(this);
  }

  _handleTextChange(event) {
    var zip = event.nativeEvent.text;
    this.setState({zip: zip});
    this._getForeastForZip(zip);
  }

  _getForeastForZip(zip) {
    this._getForeast(
      `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`
    );
  }

  _getForecastForCoords(lat, lon) {
    this._getForeast(
      `${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`
    )
  }

  _getForeast(url, cb) {
    fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
          }
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {
    var content = null;
    if (this.state.forecast !== null) {
      content = (
        <View style={styles.row}>
          <Forecast
            main={this.state.forecast.main}
            description={this.state.forecast.description}
            temp={this.state.forecast.temp} />
        </View>
      );
    }

    return (
      <PhotoBackdrop>
        <View style={styles.overlay}>
         <View style={styles.row}>
           <Text style={textStyles.mainText}>
             Current weather for
           </Text>
           <View style={styles.zipContainer}>
             <TextInput
               style={[textStyles.mainText, styles.zipCode]}
               returnKeyType='go'
               onSubmitEditing={this._handleTextChange}/>
           </View>
         </View>
         <View style={styles.row}>
           <LocationButton onGetCoords={this._getForecastForCoords}/>
         </View>
         {content}
       </View>
      </PhotoBackdrop>
    )
  }

}

var textStyles = require('./../../styles/typography.js');
var styles = StyleSheet.create({
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
  },
  row: {
    width: 400,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
    width: 100
  },
  zipCode: {
    width: 100,
    height: textStyles.baseFontSize,
  }
});
