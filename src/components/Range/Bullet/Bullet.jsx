import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import { closestValue } from '../../../utils/utils';

import './Bullet.scss';

const BULLET_RADIUS = 8;

function Bullet({ values, value, setValue, range, trackRatio }) {
    const handleDrag = (e) => {
        setValue(closestValue(values, e.layerX / trackRatio));
    };

    const handleStop = (e) => {
        if (e.layerX / trackRatio < range[0]) setValue(range[0]);
        else if (e.layerX / trackRatio > range[1]) setValue(range[1]);
    };

    return (
        <div>
            <Draggable
                axis="x"
                position={{ x: value * trackRatio - BULLET_RADIUS, y: 0 }}
                onDrag={handleDrag}
                onStop={handleStop}
            >
                <div className="Bullet"></div>
            </Draggable>
        </div>
    );
}

Bullet.propTypes = {
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
    range: PropTypes.arrayOf(PropTypes.number).isRequired,
    trackRatio: PropTypes.number.isRequired,
};

export default Bullet;
