describe('Birthdays Calendar user flow', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'http://localhost:3001/api/v1/birthdays',
      {fixture: 'birthdays.json'}
    );
    cy.visit('http://localhost:3000/');
  })

  it('should have 3 list items to start', () => {
    cy.get('.BdayContainer')
      .children()
      .should('have.length', 12)
      .get('div[class="bday-month-container"]').contains('Scott')
      .get('div[class="bday-month-container"]').contains('Kayla')
      .get('div[class="bday-month-container"]').contains('Kari')
  });
})