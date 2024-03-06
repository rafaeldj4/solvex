const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 15000,
  video:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/test/**//*.js",
  },
});
