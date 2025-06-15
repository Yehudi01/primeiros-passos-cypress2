describe('Orange HRM Test', () => {

  const selectorsList = {

      userNameInput :"[name='username']",
      passwordInput : "[name='password']",
      loginButton : "[type='submit']",
      dashBoardHeader : ".oxd-topbar-header-breadcrumb-module",
      alertMessage : "[role='alert']"
    }

  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameInput).type('Admin');
    cy.get(selectorsList.passwordInput).type('admin123');
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get(selectorsList.dashBoardHeader).contains('Dashboard');
  })

  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameInput).type('Admin');
    cy.get(selectorsList.passwordInput).type('admin');
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.alertMessage);
  })
})