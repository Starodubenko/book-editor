import React, {Component} from "react";

import s from "./BookEditItem.module.scss";
import {InjectedFormProps, reduxForm} from "redux-form";
import {Book} from "../../../model/Book.model";
import {ReduxFormInput} from "../../../../common/redux-form/ReduxWrappedInput";
import Button from "@material-ui/core/Button";

interface InputProps {}

interface StateProps {
    book: Book;
}

interface DispatchProps {
    deleteBookAction: any,
    push: any
}

type Props = StateProps & DispatchProps & InputProps & InjectedFormProps<any, any>

interface OwnState {
}

class BookEditItemFormComponent extends Component<Props, OwnState> {

    static defaultProps = {};

    saveHandler = () => {
        const {id} = this.props.book;

        this.props.push(`/edit/${id}`)
    };

    render() {
        return (
            <form className={s.book} onSubmit={this.saveHandler}>
                <div>
                    <ReduxFormInput {...this.props} id="book-title" name="title" label="Title" />
                </div>
                <div>
                    <ReduxFormInput {...this.props} id="book-authors" name="authors" label="Authors" />
                </div>
                <div>
                    <ReduxFormInput {...this.props} id="book-page-count" name="pageCount" label="Page count" />
                </div>
                <div>
                    <ReduxFormInput {...this.props} id="book-publisher" name="publisher" label="Publisher" />
                </div>
                <div>
                    <ReduxFormInput {...this.props} id="book-publication-year" name="publicationYear" label="Publication year" />
                </div>
                <div>
                    <ReduxFormInput {...this.props} id="book-release-year" name="releaseYear" label="Release year" />
                </div>
                <div>
                    <ReduxFormInput {...this.props} id="book-isbn" name="isbn" label="ISBN" />
                </div>
                <Button
                    className={s.edit}
                    onClick={this.saveHandler}
                    variant="outlined"
                    color="primary"
                >Save`</Button>
            </form>
        );
    }
}

export const BookEditItemForm = reduxForm<any, any>({
    form: 'book'
})(BookEditItemFormComponent);
