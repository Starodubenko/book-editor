import React, {Component} from "react";
import {connect} from "react-redux";
import {AppState} from "../../../common";
import {deleteBookAction} from "../../state/actions";

import s from "./BookEditItem.module.scss";
import {RouteComponentProps} from "react-router";
import {BookEditItemForm} from "./BookEditItemForm";

interface InputProps {}

interface StateProps {
}

interface DispatchProps {
    deleteBookAction: any,
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
}

class BookEditItemComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    render() {
        return (
            <div className={s.book}>
                <BookEditItemForm/>
            </div>
        );
    }
}

interface RouteParams {
    id: string;
}

type OwnProps = InputProps & RouteComponentProps<RouteParams>;

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => ({
});

const mapDispatchToProps: DispatchProps = {
    deleteBookAction,
};

export const BookEditItem = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(BookEditItemComponent);
