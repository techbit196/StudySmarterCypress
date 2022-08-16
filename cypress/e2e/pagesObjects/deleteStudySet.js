class deleteStudySet
{
    clickActionDots()
    {
        return cy.get('.mat-menu-trigger').eq(0)
    }

    clickDelete()
    {
        return cy.get("button[role='menuitem']")
    }

    confirmAction()
    {
        return cy.get(".ui-primary-button")
    }

    validateRightSide()
    {
        return cy.get(".placeholder-illustration > p")
    }

}

module.exports = new deleteStudySet();