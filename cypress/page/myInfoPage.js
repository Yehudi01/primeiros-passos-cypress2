class myInfoPage {
    selectorList() {
        const selectors = {
           
            editEmployee: ".orangehrm-edit-employee",
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton:'.--close',
            nationalityField: ".oxd-select-text-input",
            nationalityFieldBrazilian:'.oxd-select-dropdown > :nth-child(2)',
            maritalStatusField:'.oxd-select-dropdown > :nth-child(2)',
            buttonSubmitSave: "[type='submit']",
            confirmationMessage: ".oxd-toast-container--bottom"
        }
        return selectors;
    }
    checkMyInfoPage() {
        cy.get(this.selectorList().editEmployee).should('be.visible');
    }

    fillEditEmployeeForm(firstName, middleName, lastName, otherId, driverLicense, date) {
        cy.get(selectorsList.firstNameField).clear().type(firstName);
        cy.get(selectorsList.middleNameField).clear().type(middleName);
        cy.get(selectorsList.lastNameField).clear().type(lastName);
        cy.get(selectorsList.genericField).eq(4).clear().type("Employee");
        cy.get(selectorsList.genericField).eq(5).clear().type(otherId);
        cy.get(selectorsList.genericField).eq(6).clear().type(driverLicense);
        cy.get(selectorsList.dateField).eq(0).clear().type(date);
    }

}
export default myInfoPage;