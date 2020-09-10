import axios from 'axios';
import * as types from '../constants/actionTypes';

export const updateZip = data => ({
  type: types.UPDATE_ZIP,
  payload: data,
});

export const updateRange = data => ({
  type: types.UPDATE_RANGE,
  payload: data,
});

// export const getMarkets = (dispatch) => {
//   axios.get('/markets', {params: {zip: 90027}})
//     .then((response) => {
//       console.log(response);
//     })
//     .catch(console.error);
// };

export const getMarkets = () => (dispatch) => {
  axios.get('/markets', {params: {zip: 90027}})
    .then(({data}) => {
      dispatch({
        type: types.GET_MARKETS,
        payload: data,
      });
    })
    .catch(console.error);
};