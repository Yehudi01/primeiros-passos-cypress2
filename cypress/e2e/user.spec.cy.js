import userData from '../fixtures/userData.json'
import LoginPage from '../page/loginPage'
import dashboardPage from '../page/dashboardPage'
import manuPage from '../page/menuPage';
import myInfoPage from '../page/myInfoPage';
import adminPage from '../page/adminPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage();    
const dashboard = new dashboardPage();
const menu = new manuPage();
const myInfo = new myInfoPage();
const admin = new adminPage();

describe('Orange HRM Test', () => {
  it('User Info Update - Success', () => {

    loginPage.accessLoginPage();
    loginPage.enterUserLogin(userData.userSuccess.userName, userData.userSuccess.password);
    loginPage.clickLoginButton();

    dashboard.locationDashboard();
    dashboard.dashboardPage();

    menu.clickMyInfoButton()

    myInfo.checkMyInfoPage();
    myInfo.fillEditEmployeeName(chance.first({force:true}), 'de', chance.last({force:true}));
    myInfo.fillEditEmployeeInformation('123456', '654321', '123456789', '2000-08-20');
    myInfo.fillEditEmployeeNationality('2025-02-25');
    myInfo.buttonSubmitSave();

    admin.clickAdminSideBar()
    admin.checkAdminPage();
    admin.clickButtonAddUser();
    admin.fillAddUserForm('John Doe', 'john_wick', 'Password123!', 'Password123!');
    admin.buttonSubmitSave();
  })
})