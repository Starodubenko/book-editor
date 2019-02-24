import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppState} from "@app/common";
import s from './AuthorStateActions.module.scss';
import {authorSlice} from "../../state";


interface InputProps {
    number: number;
    string?: string;
}

interface StateProps {}

interface DispatchProps {
    create: any;
    update: any;
    remove: any;
}

type Props = StateProps & DispatchProps & InputProps

interface OwnState {}

export class AuthorStateActionsComponent extends Component<Props, OwnState> {

    static defaultProps = {
        string: '123'
    };

    createAction = () => {
        this.props.create();
    };

    updateAction = () => {
        this.props.update();
    };

    removeAction = () => {
        this.props.remove();
    };

    render() {
        console.log(this.props.string);
        return (
            <div className={s.App}>
                <button onClick={this.createAction}>create</button>
                <button onClick={this.updateAction}>update</button>
                <button onClick={this.removeAction}>remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: InputProps): StateProps => {
    return {};
};

const mapDispatchToProps: DispatchProps = {
    ...authorSlice.actions
};

export const AuthorStateActions = connect<StateProps, DispatchProps, InputProps, AppState>(mapStateToProps, mapDispatchToProps)(AuthorStateActionsComponent);
