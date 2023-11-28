import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";
import { createCustomElement } from "../../helpers/custom_element";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "http://tredgate.com/pmtool/";
    this.usernameInput = createCustomElement("#username");
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.forgetPasswordButton = "#forget_password";
    this.pageHeader = "h3.form-title";
    this.logo = ".login-page-logo img";
    this.rememberMeCheckbox = ".checkbox";
    this.alertDiv = ".alert-danger";
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password, { log: false });
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new HomePage();
  }

  clickPasswordForgotten() {
    cy.get(this.forgetPasswordButton).click();
    return new LostPasswordPage();
  }

  pageHeaderIsVisible() {
    cy.get(this.pageHeader).should("be.visible");
    return this;
  }

  pageHeaderHasText(headerText) {
    cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }

  usernameHasPlaceholder(placeholderText) {
    this.usernameInput
      .get()
      .should("have.attr", "placeholder", placeholderText);
    return this;
  }

  usernameIsVisible() {
    this.usernameInput.get().should("be.visible");
    return this;
  }

  usernameHasValue(value) {
    this.usernameInput.get().should("have.value", value);
    return this;
  }

  passwordIsVisible() {
    cy.get(this.passwordInput).should("be.visible");
    return this;
  }

  passwordHasPlaceholder(placeholderText) {
    cy.get(this.passwordInput).should(
      "have.attr",
      "placeholder",
      placeholderText
    );
    return this;
  }

  rememberMeIsVisible() {
    cy.get(this.rememberMeCheckbox).should("be.visible");
    return this;
  }

  rememberMeHasText(rememberMeText) {
    cy.get(this.rememberMeCheckbox).should("contain.text", rememberMeText);
    return this;
  }

  passwordForgottenIsVisible() {
    cy.get(this.forgetPasswordButton).should("be.visible");
    return this;
  }

  passwordForgottenHasText(elementText) {
    cy.get(this.forgetPasswordButton).should("have.text", elementText);
    return this;
  }

  logoIsVisible() {
    cy.get(this.logo).should("be.visible");
    return this;
  }

  alertNotExist() {
    cy.get(this.alertDiv).should("not.exist");
    return this;
  }
}
