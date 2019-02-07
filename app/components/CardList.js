import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Card from './Card';

export default class CardList extends Component {
  constructor(props) {
    super(props);

    const cards = Array.from({length: 20}, () => DATA.CARDS[0]);

    this.state = {
      'cards': cards,
    };
  }

  _keyExtractor() {
    return String(Math.ceil(Math.random() * 10000));
  }

  _renderCard({ item }) {
    return <Card { ...item } />;
  }

  render() {
    return (
      <FlatList
        data={this.state.cards}
        renderItem={this._renderCard}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

const DATA = {
  'CARDS': [
    {
      'title': 'Card Title',
      'body': 'A sentence or two here for my Card Body. Make sure to check it out!'
    }
  ]
};