class form
{   
    getFormGoogleService()
    {
        return  cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
    }
    getFullName()
    {
        return cy.get(':nth-child(1) > .-bT-48 > .-a-52 > .-ni-63 > .-_W-62')
    }
    getPhoneNumber()
    {
        return  cy.get(':nth-child(2) > .-bT-48 > .-a-52 > .-ni-63 > .-_W-62')
    }
    getRadioButtonExpensive()
    {
        return  cy.get(':nth-child(2) > div > .--F-79 > .-a-80 > .-h_-81')
    }
    getRadioButtonOthers()
    {
        return   cy.get("input[name='r8bc17b753f0048ecb03794ef45037bb7'][aria-label='Other answer']")
    }
    getInputOthers()
    {
        return  cy.get("input[placeholder='Other']")
    }
    getRateService()
    {
        return  cy.get("span[aria-label='5 Star']")
    }
    getDatePicker()
    {
        return  cy.get('#DatePicker0-label')
    }
    getSubmitButton()
    {
        return  cy.get("button[data-automation-id='submitButton']")
    }
    getSuccesNotif()
    {
        return  cy.get('span.text-format-content')
    }
    getErrorAlert()
    {
        return  cy.get("div[id^='ErrorMsgId']")
    }
    getErrorAlert2()
    {
        return  cy.get("div[role='alert']")
    }
}

export default form