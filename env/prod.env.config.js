const baseConfig = require("../cypress.config");

module.exports = {
  ...baseConfig,
  e2e: {
    env: {
      pmtool_url: "http://tredgate.com/pmtool/index.php?",
      eshop_url: "http://tredgate.com/eshop",
      automation_test_store_url: "https://automationteststore.com/",
    },
  },
};
