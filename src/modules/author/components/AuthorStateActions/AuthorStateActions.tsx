import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppState, Publisher} from "../../../common";
import s from './AuthorStateActions.module.scss';
import {authorSlice} from "../../state";
import {Author} from "../../model/Author.model";
import {Book} from "../../../book/model/Book.model";
import {bookListSelector} from "../../../book/state/selectors";
import {createBookAction} from '../../../book/state/reducer';


interface InputProps {}

interface StateProps {
    books: Book[]
}

interface DispatchProps {
    create: any;
    update: any;
    remove: any;
    createBookAction: any;
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
}

export class AuthorStateActionsComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    createAction = () => {
        const newId = Math.round(Math.random() * 1000);

        this.props.createBookAction(new Book(
            'Book ' + newId,
            'Book ' + newId,
            [new Author('Author' + Math.round(Math.random() * 10000), '', '')],
            1,
            new Publisher('')));
    };

    updateAction = () => {
        this.props.update(new Author('Author' + Math.round(Math.random() * 10000), '', ''));
    };

    removeAction = () => {
        this.props.remove();
    };

    getBooks = () => {
        return this.props.books.map(book => (<div>{book.title}</div>))
    };

    render() {
        const books = this.getBooks();
        return (
            <>
                <div className={s.App}>
                    <button onClick={this.createAction}>create</button>
                    <button onClick={this.updateAction}>update</button>
                    <button onClick={this.removeAction}>remove</button>
                </div>
                {books}
            </>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: InputProps): StateProps => {
    return {
        books: bookListSelector(state)
    };
};

const mapDispatchToProps: DispatchProps = {
    createBookAction,
    ...authorSlice.actions
};

export const AuthorStateActions = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(AuthorStateActionsComponent);
