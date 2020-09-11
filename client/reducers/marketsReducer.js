import * as types from '../constants/actionTypes';

const dummyMarket = {
  name: '',
  address: '',
  distance: '',
  days: [],
  times: [],
}

const initialState = {
  marketsList: [],
  todaysMarkets: [],
  range: '5',
  zip: '',
  currentCard: dummyMarket,
  focus: 'markets',
}

const date = new Date();
console.log('logging date from date', date);
const day = date.getDay();
console.log('logging day from date', day);
let today = '';
if(day === 0) today = 'Sun';
if(day === 1) today = 'Mon';
if(day === 2) today = 'Tue';
if(day === 3) today = 'Wed';
if(day === 4) today = 'Thu';
if(day === 5) today = 'Fri';
if(day === 6) today = 'Sat';

console.log("logging today, a string", today)

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
  for(let i = 0; i < market.datesArr.length - 1; i++){
    market.days.push(market.datesArr[i].slice(0, 3));
    market.times.push(market.datesArr[i].slice(5));
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

    case types.UPDATE_FOCUS:
      const focus = action.payload;
      let focusMarket = {}
      if(action.payload === 'today'){
        focusMarket = {...state.todaysMarkets[0]}
      }
      else{
        focusMarket = {...state.marketsList[0]}
      }
      return{
        ...state,
        focus: focus,
        currentCard: focusMarket,
      }

    case types.UPDATE_CARD:
      console.log('entered reducer', action.payload);
      let cardCopy = {
        ...action.payload,
        days: action.payload.days.slice(),
        times: action.payload.times.slice(),
      }
      console.log("entered reducer: ", cardCopy);
      return{
        ...state,
        currentCard: cardCopy,
      };


    case types.GET_MARKETS:
      console.log("PAYLOAD: ", action.payload);

      const marketsList = [];
      const todayList = [];

      for(let i = 0; i < action.payload.length; i++){
        let market = {}
        parseName(action.payload[i].marketname, market);
        market.address = action.payload[i].marketDetails.Address;
        market.googleLink = action.payload[i].marketDetails.GoogleLink;
        parseSchedule(action.payload[i].marketDetails.Schedule, market);
        if(!market.remove) marketsList.push(market);
      }


      for(let i = 0; i < marketsList.length; i++){
        if(marketsList[i].days.includes(today)){
          todayList.push(marketsList[i]);
        }
      }

      const currentCard = {
        ...marketsList[0],
        days: marketsList[0].days.slice(),
        times: marketsList[0].times.slice(),
      };

      return{
        ...state,
        todaysMarkets: todayList,
        marketsList: marketsList,
        currentCard: currentCard,
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
