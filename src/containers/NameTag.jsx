import React, { Component } from "react";
import Controls from "../components/name-tag/Controls";
import Display from "../components/name-tag/Display";

export default class NameTag extends Component {
    state = {
        greeting: "",
        name: "",
    };

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    render() {
        const { greeting, name } = this.state;
        return (
            <>
                <Controls
                    greeting={greeting}
                    name={name}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <Display greeting={greeting} name={name} />
            </>
        );
    }
}
