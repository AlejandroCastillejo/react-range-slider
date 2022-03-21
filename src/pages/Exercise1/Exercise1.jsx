import React, { useState, useEffect } from 'react';
import Range from '../../components/Range';

import exerciseService from '../../services/range-slider-server/exercises.service';

import './Exercise1.scss';

const Exercise1 = () => {
    const [exerciseData, setExerciseData] = useState(undefined);

    const updateExerciseData = () => {
        exerciseService
            .getExerciseData('exercise1')
            .then((resp) => setExerciseData(resp.data));
    };

    useEffect(() => {
        updateExerciseData();
    }, []);

    return (
        <div className="Exercise1">
            <h2 className="title">Exercise 1</h2>
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
