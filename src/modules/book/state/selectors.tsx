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
                authors: book.authors.toRefArray().map(author => author.name),
            });
        });
    }
)(appState.entities);

export const bookByIdSelector = (appState: AppState, id: string) => createSelector(
    appStateOrm,
    dbStateSelector,
    session => {
        const model = session.Book.withId(id);
        const obj = model.ref;

        return Object.assign({}, obj, {
            authors: model.authors.toRefArray().map(author => author.name),
        });
    }
)(appState.entities);
