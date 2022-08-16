class createStudySet
{
    clickStudySet()
    {
        return cy.get('.nav-text')
    }

    createStudySet()
    {
        return cy.get('.create-button')
    }

    studySetName()
    {
        return cy.get("input[id='text']")
    }

    submitStudySet()
    {
        return cy.get('.create-subject-button')
    }

    validateStudySet()
    {
        return cy.get(".subject-card-header-container > .subject-title")
    }
}

module.exports = new createStudySet();