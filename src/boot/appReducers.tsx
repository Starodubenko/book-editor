import {handleActions} from 'redux-actions';

export const NS = 'TEST_REDUCER';

const initialState = {};

const reducer = {};

export const testReducer = { TEST_REDUCER: handleActions(reducer, initialState)};
