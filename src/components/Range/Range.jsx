import React, { useState, useMemo } from 'react';
import PropTypes, { number } from 'prop-types';

import { range } from '../../utils/utils';

import NumberInput from './NumberInput';
import Bullet from './Bullet';

import './Range.scss';

const TRACK_LENGTH = 300;

const Range = ({ rangeValues, min, max, step, unit, decimals }) => {
    const [minVal, setMinVal] = useState(!!rangeValues ? rangeValues[0] : min);
    const [maxVal, setMaxVal] = useState(
        !!rangeValues ? rangeValues[rangeValues.length - 1] : max
    );

    const values = useMemo(
        () => (!!rangeValues ? rangeValues : range(min, max, step, decimals)),
        []
    );
    const trackRatio = useMemo(
        () => TRACK_LENGTH / (values[values.length - 1] - values[0]),
        []
    );

    return (
        <div className="Range">
            <NumberInput
                value={minVal}
                setValue={setMinVal}
                range={[values[0], values[values.indexOf(maxVal) - 1]]}
                disabled={!!rangeValues}
                unit={unit}
            />

            <div className="Range__slider">
                <div className="Range__line"></div>
                <Bullet
                    values={values}
                    value={minVal}
                    setValue={setMinVal}
                    range={[values[0], values[values.indexOf(maxVal) - 1]]}
                    trackRatio={trackRatio}
                />
                <Bullet
                    values={values}
                    value={maxVal}
                    setValue={setMaxVal}
                    range={[
                        values[values.indexOf(minVal) + 1],
                        values[values.length - 1],
                    ]}
                    trackRatio={trackRatio}
                />
            </div>
            <NumberInput
                value={maxVal}
                setValue={setMaxVal}
                range={[
                    values[values.indexOf(minVal) + 1],
                    values[values.length - 1],
                ]}
                disabled={!!rangeValues}
                unit={unit}
            />
        </div>
    );
};

Range.defaultProps = {
    rangeValues: null,
    min: 1,
    max: 20,
    step: 1,
    unit: '',
    decimals: 2,
};

Range.propTypes = {
    rangeValues: PropTypes.arrayOf(number),

    min: (props, propName) => {
        if (!props.rangeValues && typeof props[propName] !== 'number')
            return new Error(`${propName} prop must be a number`);
    },
    max: (props, propName) => {
        if (!props.rangeValues && typeof props[propName] !== 'number')
            return new Error(`${propName} prop must be a number`);
    },
    step: (props, propName) => {
        if (!props.rangeValues && typeof props[propName] !== 'number')
            return new Error(`${propName} prop must be a number`);
    },

    unit: PropTypes.string.isRequired,
    decimals: PropTypes.number.isRequired,
};

export default Range;
