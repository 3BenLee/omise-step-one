import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import isJSON from 'is-json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Checking to see if isJSON imported
it('isJSON exists', () => {
  expect(isJSON).toBeDefined();
})

// Testing against strings and numbers
const badData1 = "I have a dream";
const badData2 = 10987654321;

it('Alerts user to enter JSON Data', () => {
  expect(isJSON(badData1)).toBeFalsy();
})

it('Alerts user to enter JSON Data', () => {
  expect(isJSON(badData2)).toBeFalsy();
})