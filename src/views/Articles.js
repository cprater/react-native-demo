import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CardList from '../components/CardList';

export default class Articles extends Component {
  render() {
    return (
      <View style={styles.cardList}>
        <Text style={styles.title}>Read all the FARTicles</Text>
        <CardList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 40,
    marginTop: 40,
    textAlign: 'center',
  },
  cardList: {
    marginTop: 32,
    paddingLeft: 4,
    paddingRight: 4,
  }
});