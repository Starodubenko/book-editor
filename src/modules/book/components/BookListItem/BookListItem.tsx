import React, {Component} from "react";
import {connect} from "react-redux";
import cx from "classnames";
import {AppState} from "../../../common";
import {Book} from "../../model/Book.model";
import {deleteBookAction} from "../../state/actions";

import s from "./BookListItem.module.scss";

interface InputProps {
    book: Book;
}

interface StateProps {
}

interface DispatchProps {
    deleteBookAction: any
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
}

export class BookListItemComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    handlerRemove = (id: string) => {
        this.props.deleteBookAction(id);
    };

    handlerEdit = () => {

    };

    renderImageLink = (): JSX.Element => {
        const {imageLink} = this.props.book;

        return imageLink ? <img src={imageLink} className={s.imgBook}/> : <div className={s.withoutImg}/>
    };

    renderPublisher = (): JSX.Element => {
        const {publisher} = this.props.book;

        return publisher && (
            <div className={cx(s.field, s.publisher)}>
                {publisher.name}
            </div>
        )
    };

    renderPublicationYear = (): JSX.Element => {
        const {publicationYear} = this.props.book;

        return publicationYear && (
            <div className={cx(s.field, s.publisher)}>
                {publicationYear}
            </div>
        )
    };

    renderReleaseYear = (): JSX.Element => {
        const {releaseYear} = this.props.book;

        return releaseYear && (
            <div className={cx(s.field, s.publisher)}>
                {releaseYear}
            </div>
        )
    };

    renderISBN = (): JSX.Element => {
        const {isbn} = this.props.book;

        return isbn && (<div className={cx(s.field, s.isbn)}>
            {isbn}
        </div>)

    };

    render() {
        const {
            id,
            title,
            authors,
            pageCount,
        } = this.props.book;

        return (
            <div className={s.book}>
                {this.renderImageLink()}
                <div className={s.bookInformation}>
                    <div className={cx(s.field, s.title)}>
                        {title}
                    </div>
                    <div className={cx(s.field, s.authorsFI)}>
                        {authors}
                    </div>
                    <div className={cx(s.field, s.pageCounter)}>
                        {pageCount}
                    </div>
                    {this.renderPublisher()}
                    {this.renderPublicationYear()}
                    {this.renderReleaseYear()}
                    {this.renderISBN()}
                </div>
                <div className={s.actions}>
                    <div className={s.remove} onClick={() => this.handlerRemove(id)}>Remove</div>
                    <div className={s.edit} onClick={this.handlerEdit}>Edit</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: InputProps): StateProps => {
    return {};
};

const mapDispatchToProps: DispatchProps = {
    deleteBookAction
};

export const BookListItem = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(BookListItemComponent);
