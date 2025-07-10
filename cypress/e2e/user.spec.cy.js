import userData from '../fixtures/userData.json'
import LoginPage from '../page/loginPage'
import dashboardPage from '../page/dashboardPage'
import manuPage from '../page/menuPage';
import myInfoPage from '../page/myInfoPage';


const loginPage = new LoginPage();    
const dashboard = new dashboardPage();
const myInfo = new myInfoPage();
const menu = new manuPage();

describe('Orange HRM Test', () => {

  const selectorsList = {

    }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage();
    loginPage.enterUserLogin(userData.userSuccess.userName, userData.userSuccess.password);
    loginPage.clickLoginButton({force: true});

    dashboard.locationDashboard();
    dashboard.dashboardPage();

    menu.clickMyInfoButton()

    myInfo.checkMyInfoPage();
    myInfo.fillEditEmployeeForm();

    /* 
  
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.nationalityField).eq(0).click();
    cy.get(selectorsList.nationalityFieldBrazilian).click();
    cy.get(selectorsList.nationalityField).eq(1).click();
    cy.get(selectorsList.maritalStatusField).click();
    cy.get(selectorsList.dateField).eq(1).clear().type("2000-20-08");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.buttonSubmitSave).eq(0).click({force: true});
    cy.get(selectorsList.confirmationMessage);  */
  })

  it('Login Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.userNameInput).type(userData.userFail.userName);
    cy.get(selectorsList.passwordInput).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.alertMessage);
  })
})