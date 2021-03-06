/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-native';
import WeatherProject from './src/components/WeatherProject';
import Touchable from './Touchable';
import SimpleList from './SimpleList';
import BookList from './BookList';
import Video from 'react-native-video';
import _ from 'lodash';

class basic extends Component {

  componentDidMount() {
    console.log('Random number: ' + _.random(0, 5));
    NativeModules.HelloWorld.greeting('Olivia');
  }

  render() {
    return (
      <WeatherProject />
      // <View style={styles.backgroundVideo}>
      //   <Video source={{uri: "PianoStairs"}}
      //     rate={1.0}
      //     volume={1.0}
      //     muted={false}
      //     paused={false}
      //     resizeMode="cover"
      //     repeat={true}
      //     style={styles.backgroundVideo} />
      //   <Text style={styles.overlay}>
      //       Read more: http://bit.ly/makepianostairs
      //   </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#FFFF00'
  },
  overlay: {
    opacity: .7,
    position: 'absolute',
    top: 20,
    left: 20,
    height: 50,
    width: 200,
    color: '#FF0000'
  },
});

AppRegistry.registerComponent('basic', () => basic);
