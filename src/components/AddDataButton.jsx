import React from 'react';
import { connect } from 'react-redux';
import { handleButtonClick } from '../actions/actions.js';

//TODO: separate container from component


class dataButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataDisplayed: false
    };
  }

  onButtonClick() {
    let newState = !this.state.isDataDisplayed
    this.setState({
      isDataDisplayed: newState,
    });

    //TODO: implement logic to check if data has been pulled already

    this.props.handleDataButtonClick()
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {  this.onButtonClick() }}
          className='btn btn-primary btn-lg btn-block' >
          {this.state.isDataDisplayed ? "Remove Data" : "Add Data"}
        </button>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  handleDataButtonClick: () => {
    dispatch(handleButtonClick());
  }
});

const mapStateToProps = state => {
  // return {
  //   isDisplayed: state.dataDisplayed,
  // };
  return state;
};

dataButton = connect(mapStateToProps, mapDispatchToProps)(dataButton);

export default dataButton;
