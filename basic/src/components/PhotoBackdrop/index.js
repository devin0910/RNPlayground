import React, { Component } from 'react';
import {
  Image,
  ImagePickerIOS,
  CameraRoll,
} from 'react-native';

var styles = require('./style.js');
import Button from './../Button';

export default class PhotoBackdrop extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photoSource: null,
    }
  }

  componentDidMount() {
    // console.log(CameraRoll.getPhotos);
    CameraRoll.getPhotos({first: 5})
       .then((data) => {
         this.setState({
           photoSource: {uri: data.edges[0].node.image.uri}
         })
       }, (e) => {console.warn(e)});

       ImagePickerIOS.canUseCamera((result) => {
         console.log(result);
       });

       ImagePickerIOS.canRecordVideos((result) => {
         console.log(result);
       });

       setTimeout(() => {
         ImagePickerIOS.openSelectDialog(
           {
             showImages: true,
             showVideos: false,
           },
           (data) => {
             this.setState({
               photoSource: {uri: data}
             })
           },
           () => {
             console.log('canceled');
           }
         );
       }, 5000);
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
