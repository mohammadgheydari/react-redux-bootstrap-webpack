import React from 'react';
import "./button.scss";
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button type={props.type} onClick={props.handleClick} className={props.classes} disabled={props.isDisabled} name={props.name}>
            <span>{props.text}</span>
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    classes: PropTypes.string,

}
Button.defaultProps = {
    type: "button",
    text: "کلیک کنید",
    classes: "btn btn-success",
    handleClick: function () { console.log("clicked"); }

}

export default Button;