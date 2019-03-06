import React from 'react';
import ReactDOM from 'react-dom';
import {BookEditItem} from './BookEditItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookEditItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
