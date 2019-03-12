import React, {Component} from "react";
import {Chip} from "@material-ui/core";
import {Field} from "redux-form";
import {extractStringValue} from "../utils";

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

export class ReduxFormChips extends Component<Props, OwnState> {

    static defaultProps = {};

    data: any[];

    onChipDelete = (id: string) => () => {
        const {name} = this.props;
        const result = this.data.filter(item => item.id !== id);
        // @ts-ignore
        this.props.change(name, result);
    };

    renderChips = (data) => {
        if(!(data instanceof Array)) {
            return [];
        }

        this.data = data;

        return data.map((item) => (
            <Chip
                key={item.id}
                label={extractStringValue(item)}
                onDelete={this.onChipDelete(item.id)}
            />
        ))
    };

    render() {
        const {name} = this.props;

        return (
            <Field name={name} component={({input: {value}}) => (
                this.renderChips(value)
            )} />
        );
    }
}
