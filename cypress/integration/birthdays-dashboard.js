describe('Birthdays Calendar user flow', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'http://localhost:3001/api/v1/birthdays',
      {fixture: 'birthdays.json'}
    );
    cy.visit('http://localhost:3000/');
  })

  it('Should have 3 birthdays displayed when the user first visits the site', () => {
    cy.get('.BdayContainer')
      .children()
      .should('have.length', 12)
      .get('div[class="bday-month-container"]').contains('Scott')
      .get('div[class="bday-month-container"]').contains('Kayla')
      .get('div[class="bday-month-container"]').contains('Kari')
  });

  it('When data is put into the form, the value is reflected in that form input', () => {
    cy.get('.Bday-active-input-form')
      .get('.name-input').type('Ivonne')
      .get('.month-input').type(10)
      .get('.day-input').type(29)
      
      cy.get('.name-input').should('have.value', 'Ivonne')
      cy.get('.month-input').should('have.value', 10)
      cy.get('.day-input').should('have.value', 29)
  });

  it('When a user types and submits their birthday, it will appear on the page under the correct month', () => {
    cy.intercept(
      'POST',
      'http://localhost:3001/api/v1/birthdays', {
        statusCode: 201,
        body: {name: "Sammy", month: 11, day: 7}
      }
    )
      .get('.Bday-active-input-form')
      .get('.name-input').type('Sammy')
      .get('.month-input').type(11)
      .get('.day-input').type(7)
      .get(".add-this-bday-button").click();
    
    cy.get('.bday-month-container')
      .get('.month-name').contains('November')
      .get('div[class="November"]').contains("Sammy: 11/7")
  })
})