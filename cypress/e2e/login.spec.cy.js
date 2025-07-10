import userData from '../fixtures/userData.json'
import LoginPage from '../page/loginPage'
import dashboardPage from '../page/dashboardPage'

const Chance = require('chance');
const chance = new Chance();

const loginPage = new LoginPage();    
const dashboard = new dashboardPage();

describe('Orange HRM Test', () => {
  it('Login Success', () => {

    loginPage.accessLoginPage();
    loginPage.enterUserLogin(userData.userSuccess.userName, userData.userSuccess.password);
    loginPage.clickLoginButton({force: true});

    dashboard.locationDashboard();
    dashboard.dashboardPage();

  })

  it('Login Fail', () => {
    loginPage.accessLoginPage();
    loginPage.enterUserLogin(userData.userFail.userName, userData.userFail.password);
    loginPage.clickLoginButton({force: true});
    loginPage.alertMessageLogin();
  })
})