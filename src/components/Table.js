/**
 * Created by rdantzer on 28/07/17.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'

import Card from './Card'

const mapStateToProps = (state, props) => ({
  cards: state.game.cards
});

const paperStyle = {
    backgroundColor: 'green',
    height: 500
};

class Table extends Component {
  props: {
    cards: string[]
  };

  render() {
    return (
        <Paper style={paperStyle} zDepth={0}>
          { this.props.cards.map((card, index) => <Card card={card} key={index}/>) }
        </Paper>
    )
  }
}

export default connect(mapStateToProps)(Table)
