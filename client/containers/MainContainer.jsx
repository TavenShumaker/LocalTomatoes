import React from 'react';
import { connect } from 'react-redux';
import UserInputs from '../components/UserInputs.jsx';
import Markets from '../components/Markets.jsx';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  marketsList: state.markets.marketsList,
  todaysMarkets: state.markets.todaysMarkets,
  range: state.markets.range,
  zip: state.markets.zip,
});

const mapDispatchToProps = dispatch => ({
  updateZip: (zip) => dispatch(actions.updateZip(zip)),
  updateRange: (range) => dispatch(actions.updateRange(range)),
  getMarkets: () => dispatch(actions.getMarkets()),
});

const MainContainer = props => (
  <div className="mainContainer">

    <UserInputs
      updateZip={props.updateZip}
      updateRange={props.updateRange}
      getMarkets={props.getMarkets}
      zip={props.zip}
      range={props.range}
    />
    <Markets
      marketsList={props.marketsList}
      todaysMarkets={props.todaysMarkets}
      range={props.range}
      zip={props.zip}
    />
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);