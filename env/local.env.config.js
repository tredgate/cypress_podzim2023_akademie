const baseConfig = require("../cypress.config");

module.exports = {
  ...baseConfig,
  e2e: {
    env: {
      pmtool_url: "https://google.com",
      eshop_url: "http://www.seznam.cz",
      automation_test_store_url: "https://www.ministryoftesting.com/",
    },
  },
};
