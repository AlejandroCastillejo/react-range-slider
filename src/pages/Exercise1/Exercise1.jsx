import React, { useState, useEffect } from 'react';
import Range from '../../components/Range';

import exerciseService from '../../services/range-slider-server/exercises.service';

const Exercise1 = () => {
    const [exerciseData, setExerciseData] = useState(undefined);

    useEffect(() => {
        exerciseService
            .getExerciseData('exercise1')
            .then((res) => setExerciseData(res.data));
    }, []);

    return (
        <div>
            <h2>Exercise 1</h2>
            {exerciseData ? (
                <Range
                    rangeValues={exerciseData.rangeValues || null}
                    min={exerciseData.min || null}
                    max={exerciseData.max || null}
                    unit="€"
                />
            ) : null}
        </div>
    );
};

export default Exercise1;
