import React from 'react';
import ReactDOM from 'react-dom';
import {AuthorListItem} from './AuthorListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
