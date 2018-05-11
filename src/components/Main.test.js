import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Switch, Route } from 'react-router-dom'
import Main from './Main';

/*
* After reading an article on testing.
* It's great but what should we be testing for
* SPA apps? Business logic? Rendering?
*
* Source of article:
* https://medium.com/wehkamp-techblog/unit-testing-your-react-application-with-jest-and-enzyme-81c5545cee45
*/

describe('Main', () => {
    test('Counter increases after button click', () => {
    const main = shallow(<Main />);
    expect(main.state().counter).toEqual(0);
    main.find('button').simulate('click');
    expect(main.state().counter).toEqual(1);
  });
});


