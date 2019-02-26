import React, {Component} from "react";
import {connect} from "react-redux";
import {AppState} from "../../../common";
import {BookListItem} from '../BookListItem'
import {Book} from "../../model/Book.model";
import {bookListSelector} from "../../state/selectors";

import s from "./BookList.module.scss";

interface InputProps {
}

interface StateProps {
    bookList: Book[]
}

interface DispatchProps {
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
}

export class BookListComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    getBookList = (): JSX.Element[] => {
        return this.props.bookList.map((book: Book) => (
            <BookListItem key={book.id} book={book} />
        ))
    };

    render() {
        return (
            <div className={s.root}>
                <div className={s.books}>
                    {this.getBookList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: InputProps): StateProps => {
    return {
        bookList: bookListSelector(state)
    };
};

const mapDispatchToProps: DispatchProps = {};

export const BookList = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(BookListComponent);
