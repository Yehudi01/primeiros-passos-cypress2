describe('Orange HRM Test', () => {

      const userNameInput = "[name='username']";
      const passwordInput = "[name='password']";
      const loginButton = "[type='submit']";
      const dashBoardHeader = ".oxd-topbar-header-breadcrumb-module";
      const alertMessage = "[role='alert']"

  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin');
    cy.get("[name='password']").type('admin123');
    cy.get("[type='submit']").click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get(".oxd-topbar-header-breadcrumb-module").contains('Dashboard');
  })
})

describe('Login', () => {

  SelectorList : {
      const userNameInput = "[name='username']";
      const passwordInput = "[name='password']";
      const loginButton = "[type='submit']";
      const dashBoardHeader = ".oxd-topbar-header-breadcrumb-module";
      const alertMessage = "[role='alert']"
    }

  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin');
    cy.get("[name='password']").type('admin');
    cy.get("[type='submit']").click();
    cy.get("[role='alert']");
  })
})