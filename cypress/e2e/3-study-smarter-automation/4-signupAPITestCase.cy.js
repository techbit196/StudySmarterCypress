/// <reference types="cypress" />

import login from '../pagesObjects/login';
import signUp from '../pagesObjects/signUp'

describe('Study Smarter API Test Cases', () => 
{ 
    let data;
    it('Visit Application and SignUp', () => 
    { 
        
        cy.visit("https://demo.studysmarter.de")
        
//This is used to generate random Strings
        function userID_Alpha() 
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
            signUp.email().type(userID_Alpha()+"@gmail.com")

            cy.intercept('POST', '**/users').as('useradded')    
            signUp.submit().click()
            cy.wait('@useradded').its('response.statusCode').should('equal',201)
             
    })

})


