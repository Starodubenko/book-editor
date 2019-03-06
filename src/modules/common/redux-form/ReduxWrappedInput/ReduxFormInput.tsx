import React, {Component, SyntheticEvent} from "react";
import {TextField} from "@material-ui/core";
import {Field} from "redux-form";

interface InputProps {
    id: string;
    name: string;
    label: string;
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
        const {id, name, label} = this.props;

        return (
            <Field name={name} component={({input: {name, value}}) => (
                <TextField
                    id={id}
                    label={label}
                    value={value}
                    margin="normal"
                    onChange={this.onFieldChange}
                />
            )} />
        );
    }
}
