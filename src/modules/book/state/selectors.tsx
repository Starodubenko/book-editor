import {createSelector} from "redux-orm";
import {appStateOrm, dbStateSelector} from "../../store/store.orm";
import {AppState} from "../../common";

export const bookListSelector = (appState: AppState) => createSelector(
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

export const bookByIdSelector = (appState: AppState, id: string) => createSelector(
    appStateOrm,
    dbStateSelector,
    session => {
        const obj = session.Book.withId(id).ref;

        return Object.assign({}, obj, {
            books: obj.authors.toRefArray().map(author => author.name),
        });
    }
)(appState.entities);
