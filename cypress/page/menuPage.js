class manuPage {
    selectorList() {
        const selector  = {
            myInfoButton : "[href='/web/index.php/pim/viewMyDetails']",

        }
        return selector;
    }

    clickMyInfoButton() {
        cy.get(this.selectorList().myInfoButton).click({ force: true });
    }
}
export default manuPage;