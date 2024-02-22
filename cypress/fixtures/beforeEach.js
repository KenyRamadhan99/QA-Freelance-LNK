beforeEach(function()
{
    cy.fixture('dataFiles').then(function(data)
    {
        this.data=data
    })
})