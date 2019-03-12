import React, {Component, SyntheticEvent} from "react";
import {TextField} from "@material-ui/core";
import {Field} from "redux-form";
import {extractStringValue} from "../utils";

interface InputProps {
    id: string;
    name: string;
    label: string;
    type?: 'password' | 'number' | 'search'
}

interface StateProps {
}

type Props = StateProps & InputProps

interface OwnState {
}

export class ReduxFormInput extends Component<Props, OwnState> {

    static defaultProps = {};

    onFieldChange = (event: SyntheticEvent<any, any>) => {
        const {name} = this.props;
        // @ts-ignore
        this.props.change(name, event.target.value);
    };

    render() {
        const {id, name, label, type} = this.props;

        return (
            <Field name={name} component={({input: {name, value}}) => (
                <TextField
                    id={id}
                    label={label}
                    value={extractStringValue(value)}
                    type={type}
                    margin="normal"
                    onChange={this.onFieldChange}
                />
            )} />
        );
    }
}
