import React from 'react';
import ReactDOM from 'react-dom';
import {ReduxFormChips} from './ReduxFormChips';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReduxFormChips />, div);
  ReactDOM.unmountComponentAtNode(div);
});
