import React, { useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';

import { range } from '../../utils/utils';
import { TRACK_LENGTH } from '../../constants/rangeParams';

import NumberInput from './NumberInput';
import Bullet from './Bullet';

import './Range.scss';

const Range = ({ rangeValues, min, max, step, unit, decimals }) => {
    const minBulletRef = useRef();
    const maxBulletRef = useRef();

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
    const updateMinBullet = (value) => {
        minBulletRef.current.updatePosition(value);
    };
    const updateMaxBullet = (value) => {
        maxBulletRef.current.updatePosition(value);
    };

    return (
        <div className="Range" data-testid="range-container">
            <NumberInput
                id="min-val"
                value={minVal}
                setValue={setMinVal}
                range={[values[0], values[values.indexOf(maxVal) - 1]]}
                disabled={!!rangeValues}
                unit={unit}
                updateBulletPosition={updateMinBullet}
            />

            <div className="Range__slider">
                <div className="Range__line"></div>
                <Bullet
                    id="min-bullet"
                    ref={minBulletRef}
                    type="min"
                    values={values}
                    value={minVal}
                    setValue={setMinVal}
                    range={[values[0], values[values.indexOf(maxVal) - 1]]}
                    trackRatio={trackRatio}
                />
                <Bullet
                    id="max-bullet"
                    ref={maxBulletRef}
                    type="max"
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
                id="max-val"
                value={maxVal}
                setValue={setMaxVal}
                range={[
                    values[values.indexOf(minVal) + 1],
                    values[values.length - 1],
                ]}
                disabled={!!rangeValues}
                unit={unit}
                updateBulletPosition={updateMaxBullet}
            />
        </div>
    );
};

Range.defaultProps = {
    rangeValues: null,
    step: 1,
    unit: '',
    decimals: 2,
};

Range.propTypes = {
    rangeValues: PropTypes.arrayOf(PropTypes.number),

    // 'min' and 'max' props are requiered if not 'rangeValue' is passed,
    // otherwise they will be ignored
    min: (props, propName) => {
        if (!props.rangeValues && typeof props[propName] !== 'number')
            return new Error(`${propName} prop of type number is required`);
    },
    max: (props, propName) => {
        if (!props.rangeValues && typeof props[propName] !== 'number')
            return new Error(`${propName} prop of type number is required`);
    },

    // 'step' prop is not requiered as it has a default value set.
    // If 'rangeValues' is passed, this prop will be ignored
    step: (props, propName) => {
        if (!props.rangeValues && typeof props[propName] !== 'number')
            return new Error(`${propName} prop of type number is required`);
    },

    unit: PropTypes.string,
    decimals: PropTypes.number,
};

export default Range;
