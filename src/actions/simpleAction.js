const simpleAction = () => dispatch => {
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
 })
}

//long-hand version, NOTE dispatch is a callback

/*
const simpleAction = () => {
  return dispatch => {
    dispatch({
      type: 'SIMPLE_ACTION',
      payload: 'result_of_simple_action'
    });
  }
};
*/


export default simpleAction;