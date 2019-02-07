import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CardList from '../components/CardList';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>Welcome to React Native WAMMO</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{this.props.instructions}</Text>

        <View style={styles.cardList}>
          <CardList />
        </View>
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
  cardList: {
    marginTop: 32,
    paddingLeft: 4,
    paddingRight: 4,
  }
});