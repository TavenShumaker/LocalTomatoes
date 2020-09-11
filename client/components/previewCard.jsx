import React from 'react';

const PreviewCard = (props) => {

  return (
    <button value={props.market} onClick={() => props.updateCard(props.market)} className="previewCard">
      <div className="name">{props.market.name}</div>
      <div className="distance">{props.market.distance} miles</div>
    </button>
  )

};

export default PreviewCard;