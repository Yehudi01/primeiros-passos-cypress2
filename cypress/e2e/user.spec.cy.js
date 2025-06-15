import userData from '../fixtures/userData.json'

describe('Orange HRM Test', () => {

  const selectorsList = {

      userNameInput :"[name='username']",
      passwordInput : "[name='password']",
      loginButton : "[type='submit']",
      dashBoardHeader : ".oxd-topbar-header-breadcrumb-module",
      dashBoardGrid :".orangehrm-dashboard-grid", 
      alertMessage : "[role='alert']",
      myInfoButton : "[href='/web/index.php/pim/viewMyDetails']",
      editEmployee: ".orangehrm-edit-employee",
      firstNameField: "[name='firstName']",
      middleNameField: "[name='middleName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton:'.--close',
      nationalityField: ".oxd-select-text-input",
      nationalityFieldBrazilian:':nth-child(27) > span',
      maritalStatusField:'.oxd-select-dropdown > :nth-child(2)',
      buttonSubmitSave: "[type='submit']",
      confirmationMessage: "[aria-live='assertive']"
    }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameInput).type(userData.userSuccess.userName);
    cy.get(selectorsList.passwordInput).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get(selectorsList.dashBoardGrid);
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.editEmployee);
    cy.get(selectorsList.firstNameField).clear().type("Paulo");
    cy.get(selectorsList.middleNameField).clear().type("de");
    cy.get(selectorsList.lastNameField).clear().type("Tarso");
    cy.get(selectorsList.genericField).eq(4).clear().type("Employee");
    cy.get(selectorsList.genericField).eq(5).clear().type("OtherIdTest");
    cy.get(selectorsList.genericField).eq(6).clear().type("DriveLinnceTest");
    cy.get(selectorsList.dateField).eq(0).clear().type("2025-15-06");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.nationalityField).eq(0).click();
    cy.get(selectorsList.nationalityFieldBrazilian).click();
    cy.get(selectorsList.nationalityField).eq(1).click();
    cy.get(selectorsList.maritalStatusField).click();
    cy.get(selectorsList.dateField).eq(1).clear().type("2000-20-08");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.buttonSubmitSave).eq(0).click();
    cy.get(selectorsList.confirmationMessage).should('contain', 'Success');
  })

  it('Login Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.userNameInput).type(userData.userFail.userName);
    cy.get(selectorsList.passwordInput).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.alertMessage);
  })
})