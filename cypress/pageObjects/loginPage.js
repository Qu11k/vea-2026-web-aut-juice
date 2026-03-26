import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get emailInput() {
    return cy.get("#email");
  }

  static get passwordInput() {
    return cy.get("#password");
  }

  static get loginButton() {
    return cy.get("#loginButton");
  }

  static get registerLink() {
    return cy.contains("Not yet a customer?");
  }

  static get emailRegisterInput() {
    return cy.get("#emailControl");
  }

  static get passwordRegisterInput() {
    return cy.get("#passwordControl");
  }

  static get repeatPasswordInput() {
    return cy.get("#repeatPasswordControl");
  }

  static get securityQuestionSelect() {
    return cy.get('[name="securityQuestion"]');
  }

  static get securityQuestionOption() {
    return cy.contains("Name of your favorite pet?");
  }

  static get securityAnswerInput() {
    return cy.get("#securityAnswerControl");
  }

  static get registerButton() {
    return cy.get("#registerButton");
  }
}
