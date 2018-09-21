import { REQUEST_DATA, RECEIVED_DATA, TOGGLE_BUTTON } from './actionTypes.js'
import axios from 'axios';

export const requestData = () => ({ 
  type: REQUEST_DATA, 
})

export const receivedData = json => ({
  type: RECEIVED_DATA,
  json: json,
});

export const toggleButton = () => ({
  type: TOGGLE_BUTTON, 
})

export function handleButtonClick() {
  return function(dispatch){
    dispatch(fetchBikeData())
  }
}

function fetchBikeData() {

  return function (dispatch) {
    dispatch(requestData());
    fetchDataAcync()
    .then( data => {
      dispatch(receivedData(data.features))
      dispatch(toggleButton())
      console.log('data:', data.features)
    });    
  }
}

const fetchDataAcync = async () => {
  const limit = 50;
  const proximity_square = 100;
  const composedUrl = `https://bikewise.org:443/api/v2/locations?proximity_square=${proximity_square}&limit=${limit}`;
  try {
    const response = axios.get(composedUrl);
    return (await response).data;
  } catch (err) {
    throw err;
  }
};