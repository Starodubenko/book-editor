import {ThunkMiddleware} from "redux-thunk";
import {Dispatch} from "redux";
import {initialize} from "redux-form";
import {push} from "connected-react-router";

export const goToEditBookPage = (id) => (dispatch: Dispatch, getState) => {
    dispatch(initialize('book', {
        title: '123123'
    }));
    dispatch(push(`/${id}/edit`));

};
