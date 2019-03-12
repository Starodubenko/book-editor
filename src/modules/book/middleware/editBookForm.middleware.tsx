import {initialize} from "redux-form";
import {push} from "connected-react-router";
import {BookEditActionType} from "../state/actions";
import {bookByIdSelector} from "../state/selectors";

export const goToEditBookPage  = state => next => action => {
    const {dispatch, getState} = state;
    const {type, payload} = action;

    if (type === BookEditActionType) {
        const book = bookByIdSelector(getState(), payload);

        dispatch(initialize('book', book));
        dispatch(push(`/${payload}/edit`));
    }

    next(action);
};

