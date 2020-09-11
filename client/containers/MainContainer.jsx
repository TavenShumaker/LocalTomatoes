import React from 'react';
import { connect } from 'react-redux';
import UserInputs from '../components/UserInputs.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  // marketsList: state.markets.marketsList,
  // todaysMarkets: state.markets.todaysMarkets,
  range: state.markets.range,
  zip: state.markets.zip,
});

const mapDispatchToProps = dispatch => ({
  updateZip: (zip) => dispatch(actions.updateZip(zip)),
  updateRange: (range) => dispatch(actions.updateRange(range)),
  getMarkets: () => dispatch(actions.getMarkets()),
  updateFocus: (focus) => dispatch(actions.updateFocus(focus)),
});

const MainContainer = props => (
  <div className="mainContainer">
    <DisplayContainer/>
    <UserInputs
      updateZip={props.updateZip}
      updateRange={props.updateRange}
      getMarkets={props.getMarkets}
      updateFocus={props.updateFocus}
      zip={props.zip}
      range={props.range}
    />
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);