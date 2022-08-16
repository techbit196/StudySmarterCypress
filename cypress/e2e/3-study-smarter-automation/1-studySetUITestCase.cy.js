/// <reference types="cypress" />

import login from '../pagesObjects/login'
import createStudySet from '../pagesObjects/createStudySet'
import deleteStudySet from '../pagesObjects/deleteStudySet'
import createFlashCards from '../pagesObjects/createFlashCards'

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
        
        cy.visit("https://demo.studysmarter.de/login")
        login.userName().type(data.email)
        login.password().type(data.password)
        login.submit().click()        
    })


    it('Create Study Set', () => 
    {      
        cy.wait(8000)
        createStudySet.clickStudySet().contains('Sets').click()
        createStudySet.createStudySet().click()
        createStudySet.studySetName().type(data.studySetName)
        createStudySet.submitStudySet().contains('Create Study').click()        
    })


    it('Validate Study Set', () => 
    {     
      createStudySet.validateStudySet().eq(0).should('contain.text',data.studySetName)
    })
   

    it('Create Flashcards', () => 
    {     
      const filepath = 'images/worldcup.png'
      createFlashCards.flashCardTab().contains('Flashcards').click() 
      createFlashCards.clickFlashCard().click()
      createFlashCards.flashCardQuestion().type(data.question)
      createFlashCards.flashcardImportImageButton().click()
      cy.get(".fr-form").click()
      createFlashCards.flashcardUploadImage().attachFile(filepath)
      createFlashCards.flashCardAnswer().type(data.answerNo1)
      createFlashCards.addOneMoreAnswer().click()
      createFlashCards.flashCardAnswer().type(data.answerNo2)

      createFlashCards.submitFlashCard().click()

    })

    it('Validate Flash Card', () => 
    {     
      createFlashCards.goBack().click()
      createFlashCards.flashCardTab().contains('Flashcards').click() 
      createFlashCards.validateFlashCard().should('contain.text',data.question)
    })

    it('Delete the Study Set', () => 
    {     
      deleteStudySet.clickActionDots().click()
      deleteStudySet.clickDelete().contains('Delete').click() 
      deleteStudySet.confirmAction().contains('Yes').click() 
    })

    it('Validate Study Set After Delete', () => 
    {     
      cy.wait(5000)
      if(createStudySet.validateStudySet().should('not.exist'))
      {
        console.log("Study Set not exist in Left side of the Page.")
      }

      if(deleteStudySet.validateRightSide().should('exist'))
      {
        console.log("Study Set not exist in Right Side of the Page.")
      }

    })

})

