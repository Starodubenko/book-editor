import React, {Component} from 'react';
import s from './App.module.scss';
import {AuthorStateActions} from "../modules/author";
import {BookList} from "../modules/book/components/BookList";

export class App extends Component {
  render() {
    return (
      <div className={s.Root}>
        <AuthorStateActions />
      </div>
    );
  }
}
