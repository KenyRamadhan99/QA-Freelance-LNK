import userData from "../../fixtures/userData";
import registration from "../../pageObject/registration";
import { faker } from '@faker-js/faker/locale/id_ID';

const regist = new registration();


describe('My First Test', () => {
    it('Registration', () => {



        let username = faker.person.firstName()
        let email = faker.internet.email()
        let password = faker.internet.password({ length: 8, memorable: true, pattern: /[A-Z]/, prefix: '!K1' })
        let phoneNumber = faker.phone.number('8## #### #######')

        regist.getURL()
        cy.wait(10000);
        cy.get(regist.getFullName, { timeout: 10000 }).should('be.visible').type(username, { force: true })
        cy.get(regist.getEmail, { timeout: 10000 }).should('be.visible').type(email, { force: true })
        cy.get(regist.getPassword, { timeout: 10000 }).should('be.visible').type(password, { force: true })
        cy.get(regist.getConfirmPassword, { timeout: 10000 }).should('be.visible').type(password, { force: true })
        cy.get(regist.getPhoneNumber, { timeout: 10000 }).should('be.visible').type(phoneNumber, { force: true })
        cy.get(regist.getSignupLoginBtn).should('be.visible').click({ force: true })
        cy.get(regist.getLengkapiProfile, { timeout: 10000 }).should('be.visible')



    })
})