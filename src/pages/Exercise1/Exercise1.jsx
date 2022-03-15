import React from 'react';
import Range from '../../components/Range';

const Exercise1 = () => {
    return (
        <div>
            <h2>Exercise1</h2>
            <Range
                // rangeValues={[1.99, 5.99, 10.99, 30.99, 50.99, 70.99]}
                min={1}
                max={100}
                unit="€"
            />
        </div>
    );
};

export default Exercise1;
