/**
 * Created by rdantzer on 28/07/17.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const mapStateToProps = (state, props) => ({
  cards: state.game.cards
});

class Table extends Component {
  props: {
    cards: string[]
  };

  render() {
    return (
      <div className = "table">
        <div className="board">
          { this.props.cards.map(card => <Card card={card} />) }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Table)
