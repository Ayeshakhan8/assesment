describe('Cypress Test',()=> {
it('user should visit',()=>{
  cy.visit('https://demoqa.com/')
  cy.contains('TOOLS QA').should('exist')
  
  cy.get('#interactions').click()
    .contains('Interactions').should('exist')

  cy.get('div').contains('Elements')
  cy.get('div').contains('Forms')
  cy.get('div').contains('Alerts,Frames & Windows')
  cy.get('div').contains('Widgets')
  cy.get('div').contains('Interactions')
  cy.get('div').contains('Book Store Applications')

  cy.get('#sidebar')
    .click()
    .shadow()
    .find('.Resizeable')
    .click()
    .should('exist')
  
  cy.viewport(200,200)
  it('display',()=>{
  cy.get('height').should('be.visible')
  cy.get('width').should('be visible')

})
  cy.getCanvas()
    .trigger("mousedowm",x,y)
    .trigger("mouseup",x,y)
    .trigger("mousedown",x,y)
    .trigger("mousemove",x+150,y+150)
    .trigger("mouseup",x+300,y+500)

 

})

})