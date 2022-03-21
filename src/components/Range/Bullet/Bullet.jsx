import React, { useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import { closestValue } from '../../../utils/utils';
import { TRACK_LENGTH } from '../../../constants/rangeParams';

import './Bullet.scss';

const Bullet = forwardRef((props, ref) => {
    const { id, type, values, value, setValue, range, trackRatio } = props;

    const [deltaPositionX, setDeltaPositionX] = useState(
        type === 'min' ? 0 : TRACK_LENGTH
    );

    useImperativeHandle(ref, () => ({
        updatePosition(value) {
            setDeltaPositionX((value - values[0]) * trackRatio);
        },
    }));

    const handleDrag = (e, ui) => {
        console.log('value', value);
        console.log('range[0]', range[0]);
        console.log('range[1]', range[1]);
        setValue(closestValue(values, values[0] + deltaPositionX / trackRatio));
        setDeltaPositionX(deltaPositionX + ui.deltaX);

        console.log(value);
        console.log(deltaPositionX / trackRatio);
    };

    const handleStop = (e) => {
        let inRangeValue = value;

        if (value < range[0]) inRangeValue = range[0];
        else if (e.layerX / trackRatio > range[1]) inRangeValue = range[1];

        setValue(inRangeValue);
        setDeltaPositionX((inRangeValue - values[0]) * trackRatio);
    };

    return (
        <div>
            <Draggable
                axis="x"
                bounds={{
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: TRACK_LENGTH,
                }}
                position={{ x: deltaPositionX, y: 0 }}
                onDrag={handleDrag}
                onStop={handleStop}
            >
                <div data-testid={id} className="Bullet">
                    <div>
                        x: {deltaPositionX.toFixed(0) / trackRatio}, y:
                        {0}
                    </div>
                </div>
            </Draggable>
        </div>
    );
});

Bullet.propTypes = {
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
    range: PropTypes.arrayOf(PropTypes.number).isRequired,
    trackRatio: PropTypes.number.isRequired,
};

export default Bullet;
