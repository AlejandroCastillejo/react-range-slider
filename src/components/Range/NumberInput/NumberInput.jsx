import React from 'react';
import PropTypes from 'prop-types';

import './NumberInput.scss';

const NumberInput = ({ value, setValue, range, disabled, unit }) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleBlur = (e) => {
        if (e.target.value < range[0]) setValue(range[0]);
        else if (e.target.value > range[1]) setValue(range[1]);
    };

    return (
        <div className="NumberInput">
            <input
                className="NumberInput__input"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disabled}
            />
            <p className="NumberInput__unit">{unit}</p>
        </div>
    );
};

NumberInput.defaultProps = {
    disabled: false,
    unit: '',
};

NumberInput.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
    range: PropTypes.arrayOf(PropTypes.number).isRequired,
    disabled: PropTypes.bool,
    unit: PropTypes.string,
};

export default NumberInput;
