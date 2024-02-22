
const { defineConfig } = require('cypress')
module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  env:{  
    url : "https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u"

  },
  reporter: 'cypress-mochawesome-reporter',
  video: false,

  reporterOptions: {

    charts: true,

    reportPageTitle: 'Cypress Inline Reporter',

    embeddedScreenshots: true, 

    inlineAssets: true, //Adds the asserts inline

  },
  e2e:  
  {
        setupNodeEvents(on, config) {

        require('cypress-mochawesome-reporter/plugin')(on);
        },
      specPattern: 'cypress/e2e/TCS/*.js',
      video: false,
  }
});