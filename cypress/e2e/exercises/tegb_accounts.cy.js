import { AccountsApi } from "../../api/tegb/accounts_api";
import { faker } from "@faker-js/faker";
import { UserApi } from "../../api/tegb/user_api";

describe("Accounts Tests TEG#B", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.userName();
    password = "Tredgate2023";
    email = faker.internet.email();
    username = username.toLowerCase();
    cy.log(username);
    cy.log(password);
    cy.log(email);
    cy.visit("http://localhost:3001");
  });
  it("Create user and account, check balance test", () => {
    let deposit = 1000;
    let user = new UserApi();
    let accounts = new AccountsApi();
    user.register(username, password, email).then((response) => {
      cy.wrap(response.body.userId).as("user_id");
    });
    user.login(username, password).as("login_response");
    cy.get("@login_response").then((response) => {
      const token = response.body.access_token;
      cy.setCookie("access_token", token);
      cy.get("@user_id").then((userId) => {
        accounts.createAccount(token, deposit, userId);
      });
    });
    cy.visit("http://localhost:3001/app");
    cy.get('[data-testid="accounts_section_link"]').click();
    cy.get('[data-testid="account_balance"]').should("contain.text", deposit);
  });
});
