import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>Welcome to React Native WAMMO</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{this.props.instructions}</Text>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
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
});