const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'node_modules/mochawesome',
    'reporter-option': [
        'overwrite=false'],
    specPattern: "cypress/e2e/test/**//*.js",
  },
});
