class LoginPage {
    selectorList () {
        const selectors = {
            userNameInput :"[name='username']",
            passwordInput : "[name='password']",
            loginButton : "[type='submit']",
            alertMessage : "[role='alert']",
        }
        return selectors;
    }

    accessLoginPage () {
        cy.visit('/auth/login')
    }

    enterUserLogin(username, password) {
        cy.get(this.selectorList().userNameInput).type(username);
        cy.get(this.selectorList().passwordInput).type(password);
    }
    clickLoginButton() {
        cy.get(this.selectorList().loginButton).click();
    }
    alertMessageLogin() {
        cy.get(this.selectorList().alertMessage).should('contain', 'Invalid credentials');;
    }

}
export default LoginPage;