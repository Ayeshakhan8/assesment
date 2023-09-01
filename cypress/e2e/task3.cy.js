// Initial size check
cy.get('.resizable-box').should('have.css', 'width', '200px');
cy.get('.resizable-box').should('have.css', 'height', '200px');

// Resize the box to its minimum size
cy.get('.resizable-handle').trigger('mousedown', { which: 1 });
cy.get('.resizable-box')
  .trigger('mousemove', { clientX: 50, clientY: 50 })
  .trigger('mouseup');

// Assert minimum size
cy.get('.resizable-box').should('have.css', 'width', '150px');
cy.get('.resizable-box').should('have.css', 'height', '150px');

// Resize the box to a size within the allowed range
cy.get('.resizable-handle').trigger('mousedown', { which: 1 });
cy.get('.resizable-box')
  .trigger('mousemove', { clientX: 350, clientY: 250 })
  .trigger('mouseup');

// Assert the new size
cy.get('.resizable-box').should('have.css', 'width', '350px');
cy.get('.resizable-box').should('have.css', 'height', '250px');

// Resize the box to its maximum size
cy.get('.resizable-handle').trigger('mousedown', { which: 1 });
cy.get('.resizable-box')
  .trigger('mousemove', { clientX: 800, clientY: 600 }) // These values exceed the maximum size
  .trigger('mouseup');

// Assert maximum size
cy.get('.resizable-box').should('have.css', 'width', '500px');
cy.get('.resizable-box').should('have.css', 'height', '300px');