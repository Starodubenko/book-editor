import React, {Component} from "react";
import {connect} from "react-redux";

import s from "../AuthorListItem.module.scss";
import {AppState} from "../../../common";

interface InputProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {}

export class AuthorListItemComponent extends Component<Props, OwnState> {

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

export const AuthorListItem = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(AuthorListItemComponent);
