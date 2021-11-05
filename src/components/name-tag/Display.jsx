import React from "react";
import PropTypes from "prop-types";

const Display = ({ greeting, name }) => {
    return (
        <section>
            <h1>
                {greeting} {name}
            </h1>
        </section>
    );
};

Display.propTypes = {
    greeting: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Display;
