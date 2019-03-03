import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import cx from "classnames";
import {AppState} from "../../../common";
import {Book} from "../../model/Book.model";
import {deleteBookAction} from "../../state/actions";

import s from "./BookEditItem.module.scss";
import {bookByIdSelector} from "../../state/selectors";
import {RouteComponentProps} from "react-router";

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

    removeHandler = () => {
        const {id} = this.props.book;

        this.props.deleteBookAction(id);
    };

    editHandler = () => {
        const {id} = this.props.book;

        this.props.push(`/edit/${id}`)
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
                    <div className={s.remove} onClick={this.removeHandler}>Remove</div>
                    <div className={s.edit} onClick={this.editHandler}>Edit</div>
                </div>
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
