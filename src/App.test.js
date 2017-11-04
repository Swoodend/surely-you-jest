import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import sum from './Sum';
import Battleship from './Battleship';

import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('sum()', () => {
  
  it('should correctly sum two numbers', () => {
    let total = sum(5,3);
    expect(total).toEqual(8);
  });

  it('should function correctly with more than two inputs', () => {
    let total = sum(1,2,3);
    expect(total).toEqual(3);

  });

});

describe('<Battleship/>', () => {
  let initialState = {
    type: "ship",
    length: 4,
    maxShots: 4
  };

  it ('should render without crashing', () => {
    let component = shallow(<Battleship />);
    expect(component).toBeTruthy();
  });

  it('should have the correct initial state', () => {
    let component = shallow(<Battleship />);
    expect(component.state()).toEqual(initialState);
  });

  it('should decrement maxShots by one after a shot has taken place', () => {
    let component = shallow(<Battleship />);
    component.instance().shoot();
    component.instance().shoot();
    expect(component.state().maxShots).toEqual(2);
  });

});


