import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';

import Exercise1 from './Exercise1';

describe('Exercise 1', () => {
    beforeAll(() => {
        render(<Exercise1 />);
    });

    it('should have the right message in the dom', () => {
        const message = 'Exercise 1';

        expect(screen.getByText(message)).toBeInTheDocument();
    });

    afterAll(cleanup);
});
