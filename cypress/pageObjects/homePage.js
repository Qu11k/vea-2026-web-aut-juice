import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get('[aria-label="Close Welcome Banner"]');
  }

  static get meWantItButton() {
    return cy.get('[aria-label="dismiss cookie message"]');
  }

  static get accountButton() {
    return cy.get('#navbarAccount');
  }

  static get loginButton() {
    return cy.get('#navbarLoginButton');
  }

  static get userEmailValidation() {
    return cy.get('.mat-menu-content');
  }

  static get searchIcon() {
    return cy.get('.mat-search_icon-search');
  }

  static get searchField() {
    return cy.get('input').eq(0);
  }

  static get clickAddBasketButton() {
    return cy.get('button[aria-label="Add to Basket"]').first();
  }

  static get clickMyBasket() {
    return cy.get('[aria-label="Show the shopping cart"]');
  }

  static get clickCheckOut() {
    return cy.contains('Checkout');
  }

  static get selectAddress() {
    return cy.contains('United Fakedom');
  }

  static get clickContinue() {
    return cy.get('button').contains('Continue');
  }

  static get selectDelivery() {
    return cy.contains('Standard Delivery');
  }

  static get clickContinueToPayment() {
    return cy.get('button').contains('Continue');
  }

  static get selectCard() {
    return cy.contains('************5678');
  }

  static get clickContinueToReview() {
    return cy.get('button').contains('Continue');
  }

  static get placeOrderAndPay() {
    return cy.contains('Place your order and pay');
  }

  static get purchaseValidation() {
    return cy.contains('Thank you for your purchase!');
  }

  static get selectLemonProduct() {
    return cy.contains('Lemon Juice (500ml)');
  }

  static get lemonDescription() {
    return cy.contains('Sour but full of vitamins.');
  }

  static get selectEggfruitProduct() {
    return cy.contains('Eggfruit Juice (500ml)');
  }

  static get eggfruitDescription() {
    return cy.contains('Now with even more exotic flavour.');
  }

  static get selectStrawberryProduct() {
    return cy.contains('Strawberry Juice (500ml)');
  }

  static get strawberryDescription() {
    return cy.contains('Sweet & tasty!');
  }

  static get closeDialog() {
    return cy.get('[aria-label="Close Dialog"]');
  }

  static get selectFacemaskProduct() {
    return cy.contains('OWASP Juice Shop "King of the Hill" Facemask');
  }

  static get expandReviews() {
    return cy.get('.mat-expansion-panel-header');
  }

  static get reviewText() {
    return cy.contains('K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
  }

  static get selectRaspberryProduct() {
    return cy.contains('Raspberry Juice (1000ml)');
  }

  static get reviewInput() {
    return cy.get('textarea');
  }

  static get submitReview() {
    return cy.get('#submitButton');
  }

  static get productCards() {
    return cy.get('.mat-grid-tile');
  }

  static get itemsPerPage() {
    return cy.get('.mat-paginator-page-size');
  }

  static get itemsPerPage24() {
    return cy.contains('24');
  }

  static get itemsPerPage36() {
    return cy.contains('36');
  }

  static get ordersAndPayment() {
    return cy.contains('Orders & Payment');
  }

  static get mySavedAddresses() {
    return cy.contains('My saved addresses');
  }

  static get addNewAddress() {
    return cy.contains('Add New Address');
  }

  static get addressInput() {
    return cy.get('#address');
  }

  static get cityInput() {
    return cy.get('#city');
  }

  static get stateInput() {
    return cy.get('#state');
  }

  static get countryInput() {
    return cy.get('#country');
  }

  static get zipCodeInput() {
    return cy.get('#zipCode');
  }

  static get submitAddress() {
    return cy.get('#submitButton');
  }

  static get myPaymentOptions() {
    return cy.contains('My payment options');
  }

  static get addNewCard() {
    return cy.contains('Add new card');
  }

  static get nameOnCard() {
    return cy.get('#mat-input-0');
  }

  static get cardNumber() {
    return cy.get('#mat-input-1');
  }

  static get expiryMonth() {
    return cy.get('#mat-input-2');
  }

  static get expiryYear() {
    return cy.get('#mat-input-3');
  }

  static get submitPayment() {
    return cy.get('#submitButton');
  }
}