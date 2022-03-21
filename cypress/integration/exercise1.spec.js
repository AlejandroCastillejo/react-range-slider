// import '@4tw/cypress-drag-drop';

describe('Test Exercise 1', () => {
    describe('visit http://localhost:8080/exercise1', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8080/exercise1');
        });

        it('should render components', () => {
            cy.contains('Exercise 1');
            cy.get('[data-testid=range-container]');
            cy.wait(500);
        });

        it('bullets should move after changing values and clicking out of the input field', () => {
            cy.get('[data-testid=min-val-input]')
                .clear()
                .type('12')
                .type('{del}');

            cy.get('[data-testid=range-container]').click();

            cy.get('[data-testid=max-val-input]')
                .clear()
                .type('18')
                .type('{del}');

            cy.get('[data-testid=range-container]').click();

            cy.wait(2000);
        });

        it('bullets should move after changing values and pressing enter', () => {
            cy.get('[data-testid=min-val-input]')
                .clear()
                .type('15')
                .type('{del}');

            cy.get('[data-testid=min-val-input]').type('{enter}');

            cy.get('[data-testid=max-val-input]')
                .clear()
                .type('20')
                .type('{del}');

            cy.get('[data-testid=max-val-input]').type('{enter}');

            cy.wait(2000);
        });

        it('min and max values should not cross in range', () => {
            cy.get('[data-testid=min-val-input]')
                .clear()
                .type('25')
                .type('{del}');

            cy.get('[data-testid=min-val-input]').type('{enter}');

            cy.get('[data-testid=max-val-input]')
                .clear()
                .type('10')
                .type('{del}');

            cy.wait(1000);

            cy.get('[data-testid=max-val-input]').type('{enter}');

            cy.wait(2000);
        });

        it('values should change at moving bullets', () => {
            cy.get('[data-testid=min-bullet]')
                .trigger('mouseover')
                .trigger('mousedown', { which: 1 })
                .trigger('mousemove', { clientX: 150 })
                .click();

            cy.get('[data-testid=range-container]').click();
            cy.wait(1000);

            cy.get('[data-testid=max-bullet]')
                .trigger('mouseover')
                .trigger('mousedown', { which: 1 })
                .trigger('mousemove', { clientX: 300 })
                .click();

            cy.wait(2000);
        });

        it('min and max bullets should not cross in range', () => {
            cy.get('[data-testid=min-bullet]')
                .trigger('mouseover')
                .trigger('mousedown', { which: 1 })
                .trigger('mousemove', { clientX: 250 })
                .click();

            cy.get('[data-testid=range-container]').click();
            cy.wait(1000);

            cy.get('[data-testid=max-bullet]')
                .trigger('mouseover')
                .trigger('mousedown', { which: 1 })
                .trigger('mousemove', { clientX: 200 })
                .click();

            cy.wait(2000);
        });
    });
});
