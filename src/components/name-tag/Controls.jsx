import React from "react";
import PropTypes from "prop-types";

const Controls = ({ greeting, name, handleChange }) => {
    return (
        <form>
            <label htmlFor="greetingInput">Greeting: </label>
            <input
                id="greetingInput"
                name="greeting"
                value={greeting}
                type="text"
                onChange={handleChange}
                placeholder="Insert Greeting"
                aria-label="greeting"
            ></input>

            <label htmlFor="nameInput">Name: </label>
            <input
                id="nameInput"
                name="name"
                value={name}
                type="text"
                onChange={handleChange}
                placeholder="Insert Name"
                aria-label="name"
            ></input>
        </form>
    );
};

Controls.propTypes = {};

export default Controls;
