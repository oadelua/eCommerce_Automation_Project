const { defineConfig } = require("cypress");
require('dotenv').config()
module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://www.automationexercise.com/",
    watchForFileChanges: false,
    env:{
      ...process.env
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
