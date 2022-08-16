/// <reference types="cypress" />

import login from '../pagesObjects/login'
import createStudySet from '../pagesObjects/createStudySet'
import deleteStudySet from '../pagesObjects/deleteStudySet'
import createFlashCards from '../pagesObjects/createFlashCards'

describe('Login API Test Cases', () => 
{ 

  let data;

  before(function() {
    cy.fixture('example').then(function(fixdata)
    {
      data=fixdata
    })

  })

    it('Visit Application and Login with Valid', () => 
    { 
        
        cy.visit("https://demo.studysmarter.de/login")
        login.userName().type(data.email)
        login.password().type(data.password)
               
        cy.intercept('POST', '**/api-token-auth').as('loginUser')    
        login.submit().click()
        cy.wait('@loginUser').its('response.statusCode').should('equal',200)
    })

})
