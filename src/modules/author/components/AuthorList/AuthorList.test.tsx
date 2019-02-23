import React from 'react';
import ReactDOM from 'react-dom';
import {AuthorList} from './AuthorList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
