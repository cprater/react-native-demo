import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { bold } from 'ansi-colors';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.body}>{this.props.body}</Text>
      </View>
    );
  }
}

const border = {
  borderColor: '#000000',
  borderRadius: 5,
  borderWidth: 1,
};

const styles = StyleSheet.create({
  card: {
    padding: 8,
    marginBottom: 8,
    ...border
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});