import React from 'react';

const CardDisplay = (props) => {

  console.log("console.logging from Card Display: ", props.currentCard.name);
  const openArr = []
  for(let i = 0; i < props.currentCard.days.length; i++){
    openArr.push(
      <div>
        <div key={'day' + i} id="day">{props.currentCard.days[i]}</div>
        <div key={'time' + i} id="time">{props.currentCard.times[i]}</div>
      </div>
    );
  }

  if(props.currentCard.name === ''){
    return(
      <div id="quoteBox">
        <div id="quote">Eat Food. Not too Much. <span>Mostly Plants.</span></div>
      </div>
    )
  }

  return (
    <div className="cardDisplay">
      <div className="cardLeft">
        <div id="cardName" >{props.currentCard.name}</div>
        <div id="cardDistance" >{props.currentCard.distance} miles away</div>
        <div id="cardAddress" >{props.currentCard.address}</div>
      </div>
      <div className="cardRight">
        {openArr}
      </div>
    </div>
  );

};



export default CardDisplay;