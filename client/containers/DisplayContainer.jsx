import React from 'react';
import { connect } from 'react-redux';
import MainDisplay from '../components/MainDisplay.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  marketsList: state.markets.marketsList,
  todaysMarkets: state.markets.todaysMarkets,
  range: state.markets.range,
  zip: state.markets.zip,
  currentCard: state.markets.currentCard,
  focus: state.markets.focus,
});

const mapDispatchToProps = dispatch => ({
  updateCard: (market) => dispatch(actions.updateCard(market)),
});

const DisplayContainer = (props) => (
  <div className="displayContainer">
    <MainDisplay
      marketsList={props.marketsList}
      todaysMarkets={props.todaysMarkets}
      updateCard={props.updateCard}
      focus={props.focus}
    />
    <CardDisplay
      currentCard={props.currentCard}
    />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);