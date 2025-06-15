import userData from '../fixtures/userData.json'

describe('Orange HRM Test', () => {

  const selectorsList = {

      userNameInput :"[name='username']",
      passwordInput : "[name='password']",
      loginButton : "[type='submit']",
      dashBoardHeader : ".oxd-topbar-header-breadcrumb-module",
      dashBoardGrid :".orangehrm-dashboard-grid", 
      alertMessage : "[role='alert']"
    }

  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameInput).type(userData.userSuccess.userName);
    cy.get(selectorsList.passwordInput).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get(selectorsList.dashBoardGrid);
  })

  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameInput).type(userData.userFail.userName);
    cy.get(selectorsList.passwordInput).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.alertMessage);
  })
})