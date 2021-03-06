import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      text: this.state
    })
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type='text' value={this.state.text} onChange={(event) => this.handleOnChange(event)} />
          <input type='submit' value="New Restaurant"/>
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
