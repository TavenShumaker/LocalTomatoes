import * as types from '../constants/actionTypes';

const initialState = {
  marketsList: [],
  todaysMarkets: [],
  range: '5',
  zip: '',
}

//4.0 Larchmont Village Farmers Market
//01/01/2015 to 12/31/2015 Fri: 3:00 PM-7:30 PM;<br> <br> <br> 

const parseName = (marketName, market) => {
  market.distance = marketName.slice(0, 3);
  market.name = marketName.slice(4);
};

const parseSchedule = (schedule, market) => {
  if(schedule === ' <br> <br> <br> '){
    market.remove = true;
    return;
  }
  market.days = [];
  market.times = [];
  market.dateTime = schedule.slice(25, -15)
  market.datesArr = market.dateTime.split(';');
  for(let i = 0; i < market.datesArr.length; i++){
    market.eventArr = market.datesArr[i].split(':');
    // market.days.push(eventArr[0]);
    // market.times.push(eventArr[1].slice(0));
  }
}

const marketsReducer = (state = initialState, action) => {
  switch(action.type) {

    case types.UPDATE_ZIP:
      return{
        ...state,
        zip: action.payload,
      };

    case types.UPDATE_RANGE:
      return{
        ...state,
        range: action.payload,
      };

    case types.GET_MARKETS:
      console.log("PAYLOAD: ", action.payload);

      const marketsList = [];

      for(let i = 0; i < action.payload.length; i++){
        let market = {}
        parseName(action.payload[i].marketname, market);
        market.address = action.payload[i].marketDetails.Address;
        market.googleLink = action.payload[i].marketDetails.GoogleLink;
        parseSchedule(action.payload[i].marketDetails.Schedule, market);
        if(!market.remove) marketsList.push(market);
      }

      console.log(marketsList);

      return{
        ...state,
        marketList: marketsList,
      };
    
    default:
      return state;
  }

}

export default marketsReducer;


// id: '1005752',
// marketname: '5.4 L.A. Seventh & Fig Farmers Market',
// marketDetails: {
//   Address: 'Figueroa St. & 7th, Los Angeles, California, 90017',
//   GoogleLink: 'http://maps.google.com/?q=34.0494%2C%20-118.26%20(%22L.A.+Seventh+%26+Fig+Farmers+Market%22)',
//   Products: '',
//   Schedule: ' <br> <br> <br> '
// }
// },
// {
// id: '1006656',
// marketname: '5.4 Downtown La CFM',
// marketDetails: {
//   Address: '650 W 5Th Street, LOS ANGELES, California',
//   GoogleLink: 'http://maps.google.com/?q=34.0505%2C%20-118.254%20(%22Downtown+La+CFM%22)',
//   Products: '',
//   Schedule: ' <br> <br> <br> '
// }
// }
// ]
