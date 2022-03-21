describe('Test Exercise 2', () => {
    describe('visit http://localhost:8080/exercise2', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8080/exercise2');
        });

        it('should render components', () => {
            cy.contains('Exercise 2');
            cy.get('[data-testid=range-container]');
            cy.wait(500);
        });

        it("values should change at moving bullets, only to those defined in 'rangeValues'", () => {
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
