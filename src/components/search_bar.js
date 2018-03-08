import React, { Component } from 'react';
// The above is equivalent to:
// const Component = React.Component;
// and means we don't have to use React. in the declaration below.

class SearchBar extends Component {
  render() {
    // onChange is a prop.
    // No parentheses needed around the argument because there's only one.
    return <input onChange={event => console.log(event.target.value)} />;

    // The above is equivalent to doing
    // return <input onChange={this.onInputChange} />;
    // with the below onInputChange function.
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
