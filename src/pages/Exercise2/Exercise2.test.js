import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Exercise2 from './Exercise2';

import { TRACK_LENGTH } from '../../constants/rangeParams';

const { getByText, getByTestId } = screen;

const mockAxios = new MockAdapter(axios);
const mockResponse = {
    rangeValues: [1.99, 5.99, 10.99, 30.99, 50.99, 70.99],
};
mockAxios
    .onGet('http://demo8008593.mockable.io/range-slider-project/exercise2')
    .reply(200, mockResponse);

describe('Exercise 2', () => {
    beforeEach(() => {
        render(<Exercise2 />);
    });
    afterEach(cleanup);

    it('should render the header', () => {
        const title = 'Exercise 2';
        expect(getByText(title)).toBeInTheDocument();
    });

    it('shoul render Range component', async () => {
        const rangeContainer = getByTestId('range-container');
        expect(rangeContainer).toBeInTheDocument();
    });

    it("min value should be the first element of the array 'rangeValues'", () => {
        const minValInput = getByTestId('min-val-input');
        expect(minValInput.value).toBe('1.99');
    });

    it("max value should be the last element of the array 'rangeValues'", () => {
        const maxValInput = getByTestId('max-val-input');
        expect(maxValInput.value).toBe('70.99');
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
