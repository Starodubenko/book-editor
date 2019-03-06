import React from 'react';
import ReactDOM from 'react-dom';
import {ReduxFormInput} from './ReduxFormInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReduxFormInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
