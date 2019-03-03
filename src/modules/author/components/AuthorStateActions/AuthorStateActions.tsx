import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppState, Publisher} from "../../../common";
import s from './AuthorStateActions.module.scss';
import {Author} from "../../model/Author.model";
import {Book} from "../../../book/model/Book.model";
import {createBookAction} from "../../../book/state/actions";


interface InputProps {}

interface StateProps {}

interface DispatchProps {
    createBookAction: any;
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {}

export class AuthorStateActionsComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    createAction = () => {
        const newId = Math.round(Math.random() * 1000);

        this.props.createBookAction(new Book(
            'Book_' + newId,
            'Book ' + newId,
            [new Author('Author' + Math.round(Math.random() * 10000), 'Author Name', 'Author Surname')],
            1,
            new Publisher('Publisher_'+ newId, 'Publisher Name'),
            'Book publication year',
            'Release year',
            'ISBN'
        ));
    };

    updateAction = () => {
        // this.props.update(new Author('Author' + Math.round(Math.random() * 10000), '', ''));
    };

    removeAction = () => {
        // this.props.remove();
    };

    render() {
        return (
            <>
                <div className={s.App}>
                    <button onClick={this.createAction}>create</button>
                    <button onClick={this.updateAction}>update</button>
                    <button onClick={this.removeAction}>remove</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: InputProps): StateProps => {
    return {};
};

const mapDispatchToProps: DispatchProps = {
    createBookAction,
};

export const AuthorStateActions = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(AuthorStateActionsComponent);
