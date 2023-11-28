const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      pmtool_url: "http://tredgate.com/pmtool/index.php?",
      eshop_url: "http://tredgate.com/eshop",
      webtrain_url: "http://tredgate.com/webtrain",
      automation_test_store_url: "https://automationteststore.com/",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    baseUrl: "http://tredgate.com/pmtool",
  },
});
