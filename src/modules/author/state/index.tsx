import {Author} from "../model/Author.model";
import {attr, Model} from "redux-orm";
import {authorReducer} from "./reducer";

export class AuthorSchema extends Model<Author> {
    static get fields() {
        return {
            id: attr()
        }
    }
}
AuthorSchema.modelName = 'Author';
AuthorSchema.reducer = authorReducer;
