
const { defineConfig } = require('cypress')
module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  env:{  
    url : "https://reksa.moduit.id/idn/sign_up"

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