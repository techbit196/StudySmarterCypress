class createFlashCards
{
    flashCardTab()
    {
        return cy.get('.ng-star-inserted')
    }

    clickFlashCard()
    {
        return cy.get('app-flashcard-grid-actions.ng-star-inserted > [tabindex="0"]')
    }

    flashCardQuestion()
    {
        return cy.get('aside.ng-star-inserted > app-create-flashcard.ng-star-inserted > form.ng-untouched > .card-content > #fc-question-box > app-froala-wrapper > .ng-untouched > .fr-wrapper > .fr-element > p')
    }

    flashcardImportImageButton()
    {
        return cy.get("button[data-cmd='insertImage']").eq(0)
    }

    flashcardUploadImage()
    {
        return cy.get('input[type="file"]')
    }

    flashCardAnswer()
    {
        return cy.get('aside.ng-star-inserted > app-create-flashcard.ng-star-inserted > form.ng-untouched > .card-content > #fc-answer-box > app-froala-wrapper > .ng-untouched > .fr-wrapper > .fr-element > p')
    }

    submitFlashCard()
    {
        return cy.get('aside.ng-star-inserted > app-create-flashcard.ng-star-inserted > .card-button-wrapper > #flashcard-create')
    }

    goBack()
    {
        return cy.get('.go-back-button')
    }

    validateFlashCard()
    {
        return cy.get(".question > :nth-child(1) > p").eq(0)
    }

    addOneMoreAnswer()
    {
        return cy.get('.add-input-entry-btn > .create-button')
    }

}

module.exports = new createFlashCards();