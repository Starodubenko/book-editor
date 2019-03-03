import {Book} from "../model/Book.model";
import {attr, many, Model, oneToOne} from "redux-orm";
import {Publisher} from "../../common";
import {bookReducer} from "./reducer";
import {NS} from "./constants";


export class PublisherSchema extends Model<Publisher> {}
PublisherSchema.modelName = 'Publisher';

export class BookSchema extends Model<Book> {
    static get fields() {
        return {
            id: attr(),
            publisher: oneToOne('Publisher'),
            authors: many('Author', 'books')
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

