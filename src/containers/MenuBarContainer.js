import React from 'react';
import MenuBar from '../components/MenuBar.js'
import { connect } from 'react-redux';
import { fetchBikeData } from '../actions/actions.js'

let addDataButton = ({getData, isDisplayed}) => {

  let buttonLabel = isDisplayed ? "Remove Data" : "Add Data";
  return (
    <button
      onClick={() => { getData() }}
      className='btn btn-primary btn-lg btn-block' >
      {buttonLabel}
   </button>
  )
}


// const onClickButton = () => {
//   dispatch({
//     type: 'TOGGLE_BUTTON'
//   })
// }

const mapDispatchToProps = { getData: fetchBikeData }

const mapStateToProps = state => {
  return {
    isDisplayed: state.dataDisplayed,
  };
};

addDataButton = connect(mapStateToProps, mapDispatchToProps)(addDataButton);

export default addDataButton;

