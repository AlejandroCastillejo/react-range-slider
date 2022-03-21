import React, { useState, useEffect } from 'react';
import Range from '../../components/Range';

import exerciseService from '../../services/range-slider-server/exercises.service';

import './Exercise2.scss';

const Exercise2 = () => {
    const [exerciseData, setExerciseData] = useState(undefined);

    const updateExerciseData = () => {
        exerciseService
            .getExerciseData('exercise2')
            .then((resp) => setExerciseData(resp.data));
    };

    useEffect(() => {
        updateExerciseData();
    }, []);

    return (
        <div className="Exercise2">
            <h2 className="title">Exercise 2</h2>
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

export default Exercise2;
