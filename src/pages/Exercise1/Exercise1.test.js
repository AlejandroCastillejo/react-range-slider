import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Exercise1 from './Exercise1';

import { TRACK_LENGTH } from '../../constants/rangeParams';

const { getByText, getByTestId } = screen;

const mockAxios = new MockAdapter(axios);
const mockResponse = {
    min: 1,
    max: 100,
};
mockAxios
    .onGet('http://demo8008593.mockable.io/range-slider-project/exercise1')
    .reply(200, mockResponse);

describe('Exercise 1', () => {
    beforeEach(() => {
        render(<Exercise1 />);
    });
    afterEach(cleanup);

    it('should render the header', () => {
        const title = 'Exercise 1';
        expect(getByText(title)).toBeInTheDocument();
    });

    it('shoul render Range component', async () => {
        const rangeContainer = getByTestId('range-container');
        expect(rangeContainer).toBeInTheDocument();
    });

    it('should have min value in min-input', () => {
        const minValInput = getByTestId('min-val-input');
        expect(minValInput.value).toBe('1');
    });

    it('should have max value in max-input', () => {
        const maxValInput = getByTestId('max-val-input');
        expect(maxValInput.value).toBe('100');
    });

    it('min-bullet should be at the begining of the slider track', () => {
        const minBullet = getByTestId('min-bullet');
        expect(minBullet.style._values.transform).toBe('translate(0px,0px)');
    });

    it('max-bullet should be at the end of the slider track', () => {
        const maxBullet = getByTestId('max-bullet');
        expect(maxBullet.style._values.transform).toBe(
            `translate(${TRACK_LENGTH}px,0px)`
        );
    });
});
