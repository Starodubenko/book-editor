import {createSelector} from "redux-orm";
import {appStateOrm, dbStateSelector} from "../../store/store.orm";
import {AppState} from "../../common";

export const bookListSelector = (appState:AppState) => createSelector(
    appStateOrm,
    dbStateSelector,
    session => {
        return session.Book.all().toModelArray().map(book => {
            const obj = book.ref;

            return Object.assign({}, obj, {
                books: book.authors.toRefArray().map(author => author.name),
            });
        });
    }
)(appState.entities);
