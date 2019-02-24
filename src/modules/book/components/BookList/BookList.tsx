import React, {Component} from "react";
import {connect} from "react-redux";
import {AppState} from "../../../../boot";

import s from "../BookList.module.scss";

interface InputProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {}

export class BookListComponent extends Component<Props, OwnState> {

  static defaultProps = {};

  render() {
    return (
        <div className={s.Root}>

        </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: InputProps): StateProps => {
  return {};
};

const mapDispatchToProps: DispatchProps = {};

export const BookList = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(BookListComponent);
