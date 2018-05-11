import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Switch, Route } from 'react-router-dom'
import Main from './Main';


describe('Main', () => {
    test('Counter increases after button click', () => {
    // Componentをレンダリングする
    const main = shallow(<Main />);
    // expect(検査対象).toEqual(想定結果)
    expect(main.state().counter).toEqual(0);
    // shallowでレンダリングされた要素から特定のセレクタを取得する
    main.find('button').simulate('click');
    // expect(検査対象).toEqual(想定結果)
    expect(main.state().counter).toEqual(1);
  });
});


