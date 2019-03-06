import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {AppState} from "../../../common";
import {Book} from "../../model/Book.model";
import {deleteBookAction} from "../../state/actions";

import s from "./BookEditItem.module.scss";
import {bookByIdSelector} from "../../state/selectors";
import {RouteComponentProps} from "react-router";
import {BookEditItemForm} from "./BookEditItemForm";

interface InputProps {}

interface StateProps {
    book: Book;
}

interface DispatchProps {
    deleteBookAction: any,
    push: any
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
}

class BookEditItemComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    render() {
        return (
            <div className={s.book}>
                <BookEditItemForm />
            </div>
        );
    }
}

interface RouteParams {
    id: string;
}

type OwnProps = InputProps & RouteComponentProps<RouteParams>;

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => ({
    book: bookByIdSelector(state, ownProps.match.params.id)
});

const mapDispatchToProps: DispatchProps = {
    deleteBookAction,
    push
};

export const BookEditItem = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(BookEditItemComponent);
