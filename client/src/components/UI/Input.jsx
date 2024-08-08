import PropTypes from "prop-types";
import { useState } from "react";

export const Input = ({ id, type, label, placeholder, ...attrs }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <section>
            <label htmlFor={id}>{label} </label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                {...attrs}
            />
        </section>
    );
};

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
};
