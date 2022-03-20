import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import exercisesService, { API_URL } from './exercises.service';

describe('range-slider-server', () => {
    const mockAxios = new MockAdapter(axios);
    const exerciseName = 'exercise';
    const mockUrl = API_URL + exerciseName;
    const mockData = 'response';

    describe('exercises service', () => {
        beforeEach(() => {
            mockAxios.onGet(mockUrl).reply(200, mockData);
        });

        describe('getExerciseData', () => {
            it('should return expected response', async () => {
                const response = await exercisesService.getExerciseData(
                    exerciseName
                );
                expect(response.data).toEqual(mockData);
            });
            it("should return status '200'", async () => {
                const response = await exercisesService.getExerciseData(
                    exerciseName
                );
                expect(response.status).toEqual(200);
            });
        });
    });
});
