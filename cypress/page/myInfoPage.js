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

    fillEditEmployeeName(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName);
        cy.get(this.selectorList().middleNameField).clear().type(middleName);
        cy.get(this.selectorList().lastNameField).clear().type(lastName);
    }

    fillEditEmployeeInformation(employeeId,otherId, driverLicense, date) {
        cy.get(this.selectorList().genericField).eq(4).clear().type(employeeId);
        cy.get(this.selectorList().genericField).eq(5).clear().type(otherId);
        cy.get(this.selectorList().genericField).eq(6).clear().type(driverLicense);
        cy.get(this.selectorList().dateField).eq(0).clear().type(date);
        cy.get(this.selectorList().dateCloseButton).click({ force: true });

    }

    fillEditEmployeeNationality(date) {
        cy.get(this.selectorList().nationalityField).eq(0).click({force: true});
        cy.get(this.selectorList().nationalityFieldBrazilian).click({force: true});
        cy.get(this.selectorList().nationalityField).eq(1).click({force: true});
        cy.get(this.selectorList().maritalStatusField).click({force: true});
        cy.get(this.selectorList().dateField).eq(1).clear().type(date);
        cy.get(this.selectorList().dateCloseButton).click({ force: true });
    }
    buttonSubmitSave() {
        cy.get(this.selectorList().buttonSubmitSave).eq(0).click({force: true});
        cy.get(this.selectorList().confirmationMessage).should('contain', 'Success'); 
    }

}
export default myInfoPage; 