/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
//import {Platform, StyleSheet, Text, View} from 'react-native';
import {Image, Text, View} from 'react-native';

class Greeting extends Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return(
      <Text>{this.props.name}</Text>
    );
  }
}

//type Props = {};
export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return ( // There is no div, only View in react-native
      <View>
        <Image source={pic} style={{width: 193, height: 110}} />
        <Greeting name="Ethan Wang" />
      </View>
    );
  }
}

