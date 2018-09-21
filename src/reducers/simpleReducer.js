import { REQUEST_DATA, RECEIVED_DATA, TOGGLE_BUTTON } from '../actions/actionTypes.js'

const initialState = {
  dataDisplayed: false,
  loading: false,
  data: []

};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, loading: true };
    case RECEIVED_DATA:
      return { ...state, data: action.json, loading: false };
    case TOGGLE_BUTTON:
      return toggleButtonFunction(state);
    default:
      return state;
  }  
};

function toggleButtonFunction(state) {
  let newState = Object.assign({}, state);
  newState.dataDisplayed = !newState.dataDisplayed;
  console.log('isDisplayed:', state.dateDisplayed)
  return newState;
}