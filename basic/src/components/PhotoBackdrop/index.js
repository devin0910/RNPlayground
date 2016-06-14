import React, { Component } from 'react';
import {
  Image,
  ImagePickerIOS
} from 'react-native';

var styles = require('./style.js');
import Button from './../Button';

export default class PhotoBackdrop extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photoSource: require('image!flowers'),
    }
  }

  render() {
    return (
      <Image style={styles.backdrop}
        source={this.state.photoSource}
        resizeMode="cover">
        {this.props.children}
        <Button style={styles.button}
          label="Load Image"
        />
      </Image>
    )
  }
}
