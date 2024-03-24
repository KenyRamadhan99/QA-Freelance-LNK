

import form from "../../pageObject/form";

import { faker } from '@faker-js/faker'

const Form = new form();

describe('Test LNK QA Freelance', () => {

  let formData
  before(() => {
      cy.fixture('dataFiles').then((data) => {
      formData = data;
            })
          })

  it('TCS_001', () => {

    let username = faker.internet.userName();

    Form.getFormGoogleService()	;
    Form.getFullName().type(username);
    Form.getPhoneNumber().type(formData.phoneNumber);
    Form.getRadioButtonExpensive().click();
    Form.getRateService().click();
    Form.getDatePicker().type(formData.date, {force: true});
    Form.getSubmitButton().click();
    cy.wait(5000);
    Form.getSuccesNotif().should('be.visible')
    cy.wait(5000);
    //cy.screenshot();

  })

  it('TCS_002', () => {

    Form.getFormGoogleService()	;
    Form.getPhoneNumber().type(formData.phoneNumber);
    Form.getRadioButtonExpensive().click();
    Form.getRateService().click();
    Form.getDatePicker().type(formData.date, {force: true});
    Form.getSubmitButton().click();
    cy.wait(5000);
    Form.getErrorAlert().should('exist');
    Form.getErrorAlert2().should('exist');
    //cy.screenshot();

  })

  it('TCS_003', () => {

    
    Form.getFormGoogleService();
    Form.getFullName().type(formData.fullName);
    Form.getRadioButtonExpensive().click();
    Form.getRateService().click();
    Form.getDatePicker().type(formData.date, {force: true});
    Form.getSubmitButton().click();
    cy.wait(5000);
    Form.getErrorAlert().should('exist');
    Form.getErrorAlert2().should('exist');
    
  })

  it('TCS_004', () => {

    
    Form.getFormGoogleService();
    Form.getFullName().type(formData.fullName);
    Form.getPhoneNumber().type(formData.phoneNumber);
    Form.getRadioButtonOthers().click();
    Form.getRateService().click();
    Form.getDatePicker().type(formData.date, {force: true});
    Form.getSubmitButton().click();
    cy.wait(5000);
    Form.getErrorAlert().should('exist');
    Form.getErrorAlert2().should('exist');
    

  })

  it('TCS_005', () => {

    
    Form.getFormGoogleService();
    Form.getFullName().type(formData.fullName);
    Form.getPhoneNumber().type(formData.phoneNumber);
    Form.getRateService().click();
    Form.getDatePicker().type(formData.date, {force: true});
    Form.getSubmitButton().click();
    cy.wait(5000);
    Form.getErrorAlert().should('exist');
    Form.getErrorAlert2().should('exist');
    

  })

  it('TCS_006', () => {

    
    Form.getFormGoogleService();
    Form.getFullName().type(formData.fullName);
    Form.getPhoneNumber().type(formData.phoneNumber);
    Form.getRadioButtonExpensive().click();
    Form.getRateService().click();
    Form.getSubmitButton().click();
    cy.wait(5000);
    Form.getErrorAlert().should('exist');
    Form.getErrorAlert2().should('exist');

  })

  it('TCS_007', () => {

    
    Form.getFormGoogleService();
    Form.getFullName().type(formData.fullName);
    Form.getPhoneNumber().type(formData.phoneNumber);
    Form.getRadioButtonOthers().click();
    Form.getInputOthers().type(formData.others)
    Form.getRateService().click();
    Form.getDatePicker().type(formData.date, {force: true});
    Form.getSubmitButton().click();
    cy.wait(5000);
    Form.getSuccesNotif().should('be.visible')
    

  })
})