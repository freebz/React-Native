import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import _ from 'lodash';
import Video from 'react-native-video';

//import { NativeModules } from 'react-native';
import HelloWorld from './HelloWorld';

export default class Depends extends Component {
    componentDidMount() {
	//var _ = require('lodash');
	console.log('Random number: ' + _.random(0, 5));

	//let HelloWorld = NativeModules.HelloWorld;
	HelloWorld.greeting('Bonnie');
    }
    
  render() {
    return (
	<View style={styles.backgroundVideo}>
	  <Video //source={require("./PianoStairs.mp4")}
		 source={require("./warbler.mp4")}
		 rate={1.0}
		 volume={1.0}
		 muted={false}
		 paused={false}
		 resizeMode="cover"
		 repeat={true}		 
		 style={styles.backgroundVideo} />

	  <Text style={styles.overlay}>
	    Read more: http://bit.ly/makepianostairs
	  </Text>
	</View>
    );
  }
}

const styles = StyleSheet.create({
    backgroundVideo: {
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	backgroundColor: '#FFFF00'
    },
    overlay: {
	opacity: 0,
	position: 'absolute',
	top: 20,
	left: 20,
	height: 100,
	width: 200,
	color: '#FF0000'
    }
});

AppRegistry.registerComponent('Depends', () => Depends);
