import React from 'react';

const UserInputs = ({
  updateZip,
  updateRange,
  getMarkets,
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
    <input 
      type="text"
      id="zipChanger" 
      value={zip}
      onChange={e => updateZip(e.target.value)}
      onKeyPress={e => handleKeyPress(e)}
    />
    <label for="range">Range:</label>
    <select name="range" id="range" value={range} onChange={e => updateRange(e.target.value)}>
      <option value={5}>5 miles</option>
      <option value={10}>10 miles</option>
      <option value={25}>25 miles</option>
    </select>
    <button onClick={getMarkets}>Find Markets</button>
  </div>
  )
}

export default UserInputs;