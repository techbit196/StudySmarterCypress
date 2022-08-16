class login
{
    userName()
    {
        return cy.get("input[name='email']")
    }

    password()
    {
        return cy.get("input[name='password']")
    }

    submit()
    {
        return cy.get(".ui-primary-button")
    }
}

module.exports = new login();