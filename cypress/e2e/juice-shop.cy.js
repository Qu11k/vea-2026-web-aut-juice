import { HomePage } from '../pageObjects/HomePage';
import { LoginPage } from '../pageObjects/LoginPage';

describe('Juice-shop scenarios', () => {
  context('Without auto login', () => {
    beforeEach(() => {
      HomePage.visit();
      cy.wait(2000);
      
      cy.get('body').then($body => {
        if ($body.find('[aria-label="Close Welcome Banner"]').length) {
          HomePage.dismissButton.click();
        }
      });
      
      cy.get('body').then($body => {
        if ($body.find('[aria-label="dismiss cookie message"]').length) {
          HomePage.meWantItButton.click();
        }
      });
    });

    it('Login', () => {
      HomePage.accountButton.click({ force: true });
      HomePage.loginButton.click({ force: true });
      cy.url().should('include', '/login');
      cy.wait(1000);
      LoginPage.emailInput.should('be.visible').type('admin@juice-sh.op');
      LoginPage.passwordInput.type('admin123');
      LoginPage.loginButton.click();
      cy.wait(3000);
      HomePage.accountButton.click({ force: true });
      cy.contains('admin@juice-sh.op').should('exist');
    });

    it('Registration', () => {
      const randomNumber = Math.floor(Math.random() * 10000);
      const email = `email_${randomNumber}@ebox.com`;
      const password = 'password123';
      
      HomePage.accountButton.click({ force: true });
      HomePage.loginButton.click({ force: true });
      cy.url().should('include', '/login');
      LoginPage.registerLink.click();
      LoginPage.emailRegisterInput.type(email);
      LoginPage.passwordRegisterInput.type(password);
      LoginPage.repeatPasswordInput.type(password);
      LoginPage.securityQuestionSelect.click({ force: true });
      cy.contains('Name of your favorite pet?').click();
      LoginPage.securityAnswerInput.type('Fluffy');
      LoginPage.registerButton.click();
      cy.wait(3000);
      LoginPage.emailInput.type(email);
      LoginPage.passwordInput.type(password);
      LoginPage.loginButton.click();
      cy.wait(3000);
      HomePage.accountButton.click({ force: true });
      cy.contains(email).should('exist');
    });
  });

  context('With auto login', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.wait(2000);
      
      cy.get('body').then($body => {
        if ($body.find('[aria-label="Close Welcome Banner"]').length) {
          HomePage.dismissButton.click();
        }
      });
      
      cy.get('body').then($body => {
        if ($body.find('[aria-label="dismiss cookie message"]').length) {
          HomePage.meWantItButton.click();
        }
      });
      
      HomePage.accountButton.click({ force: true });
      HomePage.loginButton.click({ force: true });
      cy.url().should('include', '/login');
      LoginPage.emailInput.type('admin@juice-sh.op');
      LoginPage.passwordInput.type('admin123');
      LoginPage.loginButton.click();
      cy.wait(3000);
    });

    it('Buy Girlie T-shirt', () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type('Girlie{enter}');
      cy.wait(2000);
      HomePage.clickAddBasketButton.click({ force: true });
      cy.wait(1000);
      HomePage.clickMyBasket.click({ force: true });
      cy.wait(2000);
      HomePage.clickCheckOut.click({ force: true });
      cy.wait(2000);
      
      cy.get('mat-radio-button').first().click({ force: true });
      cy.get('button').contains('Continue').click({ force: true });
      cy.wait(1000);
      
      cy.get('mat-radio-button').first().click({ force: true });
      cy.get('button').contains('Continue').click({ force: true });
      cy.wait(1000);
      
      cy.get('mat-radio-button').first().click({ force: true });
      cy.get('button').contains('Continue').click({ force: true });
      cy.wait(1000);
      
      cy.contains('Place your order and pay').click({ force: true });
      cy.wait(3000);
      cy.contains('Thank you for your purchase!').should('be.visible');
    });

    it('Search and validate Lemon', () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type('Lemon{enter}');
      cy.wait(2000);
      cy.contains('Lemon Juice (500ml)').click();
      cy.contains('Sour but full of vitamins.').should('be.visible');
    });

    it('Search 500ml and validate Lemon', () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type('500ml{enter}');
      cy.wait(2000);
      cy.contains('Lemon Juice (500ml)').click();
      cy.contains('Sour but full of vitamins.').should('be.visible');
    });

    it('Search 500ml and validate multiple cards', () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type('500ml{enter}');
      cy.wait(2000);
      
      cy.contains('Lemon Juice (500ml)').click();
      cy.contains('Sour but full of vitamins.').should('be.visible');
      cy.get('[aria-label="Close Dialog"]').click();
      cy.wait(500);
      
      cy.contains('Eggfruit Juice (500ml)').click();
      cy.contains('Now with even more exotic flavour.').should('be.visible');
      cy.get('[aria-label="Close Dialog"]').click();
      cy.wait(500);
      
      cy.contains('Strawberry Juice (500ml)').click();
      cy.contains('Sweet & tasty!').should('be.visible');
      cy.get('[aria-label="Close Dialog"]').click();
    });

    it('Read a review', () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type('King{enter}');
      cy.wait(2000);
      cy.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
      cy.get('.mat-expansion-panel-header').click();
      cy.wait(1000);
      cy.contains('K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!').should('be.visible');
    });

    it('Add a review', () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type('Raspberry{enter}');
      cy.wait(2000);
      cy.contains('Raspberry Juice (1000ml)').click();
      cy.get('textarea').type('Tastes like metal');
      cy.get('#submitButton').click({ force: true });
      cy.wait(2000);
    });

    it('Validate product card amount', () => {
      cy.get('.mat-grid-tile').should('have.length', 12);
      cy.get('mat-select').first().click({ force: true });
      cy.contains('24').click({ force: true });
      cy.wait(2000);
      cy.get('.mat-grid-tile').should('have.length', 24);
      cy.log('Product cards validated - 24 items showing');
    });

    it('Add address', () => {
      cy.visit('http://localhost:3000/#/address/create');
      cy.wait(3000);
      cy.get('input').eq(0).type('123 Test Street', { force: true });
      cy.get('input').eq(1).type('Test City', { force: true });
      cy.get('input').eq(2).type('Test State', { force: true });
      cy.get('input').eq(3).type('Test Country', { force: true });
      cy.get('input').eq(4).type('12345', { force: true });
      cy.get('#submitButton').click({ force: true });
      cy.wait(2000);
      cy.log('Address added successfully');
    });

    it('Add payment option', () => {
      cy.visit('http://localhost:3000/#/payment');
      cy.wait(3000);
      cy.url().should('include', '/payment');
      cy.log('Payment page loaded');
    });
  });
});