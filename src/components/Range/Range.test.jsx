import React from 'react';
import { screen, render } from '@testing-library/react';

import Range from './Range';

import { TRACK_LENGTH } from '../../constants/rangeParams';

const { getByTestId } = screen;

const rangeValues = [1.99, 5.99, 10.99, 30.99, 50.99, 70.99];
const minValue = 1;
const maxValue = 10;

describe('Range', () => {
    describe("when it has 'rangeValues' prop", () => {
        beforeEach(() => {
            render(<Range rangeValues={rangeValues} />);
        });

        describe('after rendering', () => {
            it('inputs should be disabled', () => {
                expect(getByTestId('min-val-input').disabled).toBe(true);
                expect(getByTestId('max-val-input').disabled).toBe(true);
            });

            it("min value should be the first element of the array 'rangeValues'", () => {
                expect(getByTestId('min-val-input').value).toBe('1.99');
            });

            it("max value should be the last element of the array 'rangeValues'", () => {
                expect(getByTestId('max-val-input').value).toBe('70.99');
            });

            it('min-bullet should be at the begining of the slider track', () => {
                const minBullet = getByTestId('min-bullet');
                expect(minBullet.style._values.transform).toBe(
                    'translate(0px,0px)'
                );
            });

            it('max-bullet should be at the end of the slider track', () => {
                const maxBullet = getByTestId('max-bullet');
                expect(maxBullet.style._values.transform).toBe(
                    `translate(${TRACK_LENGTH}px,0px)`
                );
            });
        });
    });

    describe("when it has 'min' and 'max' props", () => {
        beforeEach(() => {
            render(<Range min={minValue} max={maxValue} />);
        });

        describe('after rendering', () => {
            it('inputs should be enabled', () => {
                expect(getByTestId('min-val-input').disabled).toBe(false);
                expect(getByTestId('max-val-input').disabled).toBe(false);
            });

            it("min value should be equal to 'min' prop", () => {
                expect(getByTestId('min-val-input').value).toBe('1');
            });

            it("max value should be equal to 'max' prop", () => {
                expect(getByTestId('max-val-input').value).toBe('10');
            });

            it('min-bullet should be at the begining of the slider track', () => {
                const minBullet = getByTestId('min-bullet');
                expect(minBullet.style._values.transform).toBe(
                    'translate(0px,0px)'
                );
            });

            it('max-bullet should be at the end of the slider track', () => {
                const maxBullet = getByTestId('max-bullet');
                expect(maxBullet.style._values.transform).toBe(
                    `translate(${TRACK_LENGTH}px,0px)`
                );
            });
        });
    });
});
