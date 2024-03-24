class registration {

    getURL()
    {
        return  cy.visit('https://reksa.moduit.id/idn/sign_up',{ timeout: 30000 })
    }

    getSignupLoginBtn()
    {
        return cy.get('._14epme4b')
    }

    getFullName()
    {
        return cy.get('#fullname')
    }

    getEmail()
    {
        return cy.get("#email")
    }

    getPassword()
    {
        return cy.get("#password")
    }

    getConfirmPassword()
    {
        return cy.get("#confirmPassword")
    }

    getPhoneNumber()
    {
        return cy.get("#phone")
    }

    getLengkapiProfile()
    {
        return cy.get('div>._1hgnp7e>._sqqt3d2')
    }


}

export default registration