import React, { Component } from 'react';
import s from './App.module.scss';
import {AuthorStateActions} from "../modules/author";

export class App extends Component {
  render() {
    return (
      <div className={s.Root}>
        <AuthorStateActions number={1} />
      </div>
    );
  }
}