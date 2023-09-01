// cypress/integration/example.spec.js

describe('Example Test', () => {
    it('should visit the website and perform some actions', () => {
      // Visit a website
      cy.visit('https://demoqa.com/');
      cy.get('.category-cards > :nth-child(5)').click()
      cy.get(':nth-child(5) > .element-list > .menu-list > #item-2').click()
      cy.get('#resizableBoxWithRestriction').should('have','height','200px')
      cy.get('#resizableBoxWithRestriction').should('have','width','200px')
      cy.get('#resizableBoxWithRestriction > .react-resizable-handle').click()

      // resizing the box1 field
      cy.get('')
      cy.get('#resizableBoxWithRestriction > .react-resizable-handle').then(($box) => {
        // Simulate resizing by dragging the corner
        cy.realDragToResize($box, 'bottom-right', 100, 50); // Adjust values as needed
  
        // Verify constraints
        //cy.get('#resizableBoxWithRestriction > .react-resizable-handle').should('have.css', 'min-height', '150px');
        //cy.get('#resizableBoxWithRestriction > .react-resizable-handle').should('have.css', 'min-width', '150px');
        //cy.get('#resizableBoxWithRestriction > .react-resizable-handle').should('have.css', 'max-width', '500px');
        //cy.get('#resizableBoxWithRestriction > .react-resizable-handle').should('have.css', 'max-height', '300px');/*
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
      });

  
      
    });
  });
  