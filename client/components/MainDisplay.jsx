import React from 'react';
import PreviewCard from './previewCard.jsx';
//import { urlencoded } from 'express';

const MainDisplay = (props) => {

  const cards = [];
  if(props.focus === 'markets'){
    for(let i = 0; i < props.marketsList.length; i++){
      cards.push(<PreviewCard key={"card" + i} market={props.marketsList[i]} updateCard={props.updateCard} today={false}/>);
    }
  }
  if(props.focus === 'today'){
    for(let i = 0; i < props.todaysMarkets.length; i++){
      cards.push(<PreviewCard key={"card" + i} market={props.todaysMarkets[i]} updateCard={props.updateCard} today={true} day={'thu'}/>);
    }
  }
  

  console.log('Logging MarketsList', props.marketsList);
  console.log('Logging Cards', cards);
  

  return(
    <div className="mainDisplay">
      <div id="logo">
        <h2>LocalTomatoes</h2>
      </div>
      <div className="previewDisplay">
        {cards}
      </div>
    </div>
  )
}
  


export default MainDisplay;