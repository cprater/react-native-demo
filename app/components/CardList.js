import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Card from './Card';

export default class CardList extends Component {
  constructor(props) {
    super(props);
    const cards = Array.from({length: 20}, () => DATA.CARDS[0]);

    this.state = {
      'cards': cards,
    };
  }

  render() {
    return (
      <ScrollView>
        {this.state.cards.map((card, i) => <Card key={i} {...card} />)}
      </ScrollView>
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