import {Book} from "../model/Book.model";
import {many, Model, SessionWithModels} from "redux-orm";
import {Author} from "../../author/model/Author.model";
import {Action} from "redux-actions";
import {AppEntitiesState} from "../../common";
import {bookReducer} from "./reducer";
import {NS} from "./constants";


export class AuthorSchema extends Model<Author> {
    static get fields() {
        return {
            books: many('Book')
        }
    }

    static reducer(action: Action<Author>, model: any, session: SessionWithModels<AppEntitiesState>) {
        switch(action.type) {
            case 'author/update': {
                session.Author.create(action.payload);
            }
        }
        // create
        // update
        // remove
    }
}
AuthorSchema.modelName = 'Author';

export class BookSchema extends Model<Book> {
    static get fields() {
        return {
            authors: many('Author')
        }
    }
}
BookSchema.modelName = NS;
BookSchema.reducer = bookReducer;



//todo переписать функцию reducer на отдельные типизируемые обработчики
//todo написать селекторы для получения сущностей
//todo написать экшны для манипуляции сущностями
//todo добавить конфиг в webpack чтоб были красивые импорты из app модулей
//todo

