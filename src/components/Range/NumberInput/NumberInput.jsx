import React from 'react';
import PropTypes from 'prop-types';

import './NumberInput.scss';

const NumberInput = ({
    id,
    value,
    setValue,
    range,
    disabled,
    unit,
    updateBulletPosition,
}) => {
    const handleChange = (e) => {
        setValue(Number(e.target.value));
    };

    const handleBlur = (e) => {
        let inRangeValue = value;

        if (e.target.value < range[0]) inRangeValue = range[0];
        else if (e.target.value > range[1]) inRangeValue = range[1];

        setValue(inRangeValue);
        updateBulletPosition(inRangeValue);
    };

    return (
        <div className="NumberInput">
            <input
                type="number"
                data-testid={`${id}-input`}
                className="NumberInput__input"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={(e) => e.key === 'Enter' && handleBlur(e)}
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
