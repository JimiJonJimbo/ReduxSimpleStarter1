import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDSKn_0clm1Q6VYDLrQ67XdN44kslc_ikQ';

// Create a new component. This component should produce some HTML.
// This can be thought of as a class, not an instance.

// const App = function() { this is the old way, below is the ES6 way
const App = () => {
  return <SearchBar />;
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
