/// <reference types="cypress" />

import login from '../pagesObjects/login'
import createStudySet from '../pagesObjects/createStudySet'

describe('Study Smarter Test Cases', () => 
{ 

  let data;

  before(function() {
    cy.fixture('example').then(function(fixdata)
    {
      data=fixdata
    })
  })

    it('Visit Application and Login', () => 
    { 
        cy.intercept('POST', '**/api-token-auth').as('loginUser')
        cy.visit("https://demo.studysmarter.de/login")
        login.userName().type(data.email)
        login.password().type(data.password)
        login.submit().click()    
        cy
    .wait('@loginUser')
    .then(xhr => {
      // you can now access the request body, response body, status, ...
      cy.log(JSON.stringify(xhr.response.body))
      cy.log(JSON.stringify(xhr.response.headers))
      cy.log(JSON.stringify(xhr.response.statusCode))
    })    
    })


    it('Create Study Set', () => 
    {      
        cy.wait(8000)
        cy.intercept('POST', '**/course-subjects').as('createUser')
        createStudySet.clickStudySet().contains('Sets').click()
        createStudySet.createStudySet().click()
        createStudySet.studySetName().type(data.studySetName)

        createStudySet.submitStudySet().contains('Create Study').click()  
        cy
    .wait('@createUser')
    .then(xhr => {
      cy.log(JSON.stringify(xhr.response.body))
      
      const obj = JSON.parse(JSON.stringify(xhr.response.body))
      cy.log(obj.name)
      expect(obj.name).to.contains(data.studySetName)

      cy.log(JSON.stringify(xhr.response.headers))
      cy.log(JSON.stringify(xhr.response.statusCode))
      
    }) 
            
    })

})