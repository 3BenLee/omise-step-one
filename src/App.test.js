import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

function parentFinder(data,obj) {
  let z = 0;
  while (data[z] != null){
    var found = data[z].find((element) => {
      if (element.id === obj.parent_id){
        return element
      }
    });
    if(found != null){
      found.children.push(obj)
    }
    z += 1;
  }
}

test('parentFinder returns null', () => {
  expect(parentFinder(0,[])).toBeNull();
});