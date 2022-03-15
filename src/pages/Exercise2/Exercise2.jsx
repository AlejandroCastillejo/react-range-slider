import React from 'react';
import Range from '../../components/Range';

const Exercise2 = () => {
    return (
        <div>
            <h2>Exercise2</h2>
            <Range
                rangeValues={[1.99, 5.99, 10.99, 30.99, 50.99, 70.99]}
                unit="€"
            />
        </div>
    );
};

export default Exercise2;
