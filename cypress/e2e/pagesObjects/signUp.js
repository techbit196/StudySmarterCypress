class signUp
{
    email()
    {
        return cy.get("input[name='email']")
    }

    submit()
    {
        return cy.get("button[type='submit']")
    }
}

module.exports = new signUp();