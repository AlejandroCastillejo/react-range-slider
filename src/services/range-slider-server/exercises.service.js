import axios from 'axios';

import { defaultHeader } from './headers';

export const API_URL = 'http://demo8008593.mockable.io/range-slider-project/';

const getExerciseData = (exercise) => {
    return axios.get(API_URL + exercise, {
        headers: defaultHeader,
    });
};

export default { getExerciseData };
