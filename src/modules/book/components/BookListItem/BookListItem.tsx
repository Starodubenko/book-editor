import React, {Component} from "react";
import {connect} from "react-redux";
import cx from "classnames";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {AppState} from "../../../common";
import {Book} from "../../model/Book.model";

import s from "./BookListItem.module.scss";
import {deleteBookAction, editBookAction} from "../../state/actions";

interface InputProps {
    book: Book;
}

interface StateProps {
}

interface DispatchProps {
    deleteBookAction: any,
    editBookAction: any
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {
}

const FieldView = ({name, value}): JSX.Element => {
    return (
        <div className={cx(s.field)}>
            <div className={s.fieldName}>{name}</div>
            <span className={s.fieldValue}>{value}</span>
        </div>
    )
};

export class BookListItemComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    removeHandler = () => {
        const {id} = this.props.book;

        this.props.deleteBookAction(id);
    };

    editHandler = () => {
        const {id} = this.props.book;

        this.props.editBookAction(id)
    };

    renderImageLink = (): JSX.Element => {
        const {imageLink} = this.props.book;
        const link = imageLink || './images.jpeg';

        return <img src={link} className={s.imgBook}/>
    };

    renderPublisher = (): JSX.Element => {
        const {publisher} = this.props.book;

        return publisher && (
            <FieldView name="Название издательства:" value={publisher.name} />
        )
    };

    renderPublicationYear = (): JSX.Element => {
        const {publicationYear} = this.props.book;

        return publicationYear && (
            <FieldView name="Год публикации:" value={publicationYear} />
        )
    };

    renderReleaseYear = (): JSX.Element => {
        const {releaseYear} = this.props.book;

        return releaseYear && (
            <FieldView name="Дата выхода в тираж:" value={releaseYear} />
        )
    };

    renderISBN = (): JSX.Element => {
        const {isbn} = this.props.book;

        return isbn && (<FieldView name="ISBN:" value={isbn} />)
    };

    render() {
        const {
            title,
            authors,
            pageCount,
        } = this.props.book;

        return (
            <Paper className={s.book}>
                <div className={s.content}>
                    {this.renderImageLink()}
                    <div className={s.bookInformation}>
                        <FieldView name="Заголовок:" value={title} />
                        <FieldView name="Cписок авторов:" value={authors} />
                        <FieldView name="Количество страпниц:" value={pageCount} />

                        {this.renderPublisher()}
                        {this.renderPublicationYear()}
                        {this.renderReleaseYear()}
                        {this.renderISBN()}
                    </div>
                </div>
                <div className={s.actions}>
                    <Button
                        className={s.remove}
                        onClick={this.removeHandler}
                        variant="outlined"
                        color="secondary"
                    >Remove</Button>
                    <Button
                        className={s.edit}
                        onClick={this.editHandler}
                        variant="outlined"
                        color="primary"
                    >Edit</Button>
                </div>
            </Paper>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: InputProps): StateProps => {
    return {};
};

const mapDispatchToProps: DispatchProps = {
    deleteBookAction,
    editBookAction
};

export const BookListItem = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(BookListItemComponent);
