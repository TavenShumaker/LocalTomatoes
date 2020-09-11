import React from 'react';

const UserInputs = ({
  updateZip,
  updateRange,
  getMarkets,
  updateFocus,
  range,
  zip,
}) => {

  const handleKeyPress = (e) => {
    console.log("KEYPRESSED");
    if(e.keyCode === 13){
      getMarkets();
    } 
  }

  console.log(getMarkets);
  console.log('zip: ', zip)
  console.log('range: ', range)

  return(
  <div className="inputsBox">
    <div className="stateInput">
      <input 
        type="text"
        id="zipChanger"
        value={zip}
        onChange={e => updateZip(e.target.value)}
        onKeyPress={e => handleKeyPress(e)}
      />
      <br></br>
      <span>within </span>
      <select name="range" id="range" value={range} onChange={e => updateRange(e.target.value)}>
        <option value={5}>5 miles</option>
        <option value={10}>10 miles</option>
        <option value={25}>25 miles</option>
      </select>
      <button id="findMarkets" onClick={() => getMarkets(zip) }>Find Markets</button>
    </div>
    <div className="inputList">
      <button value="markets" onClick={e=>updateFocus(e.target.value)}>Markets</button>
      <button>Map</button>
      <button value="today" onClick={e=>updateFocus(e.target.value)}>Open Today</button>
      <button>This Week</button>
    </div>
  </div>
  )
}

export default UserInputs;