class adminPage {
    selectorList() {
        const selectors = {
            adminSiderBar: "[href='/web/index.php/admin/viewAdminModule']",
            titleTopBarHeader: ".oxd-topbar-header-breadcrumb",
            buttonAddUser: ".oxd-button--secondary",
            checkAddUserPage: ".orangehrm-main-title.oxd-text--h6",
            buttonUserRole: ".oxd-select-text--arrow",
            adminOptionRole: '.oxd-select-dropdown > :nth-child(2)',
            inputEmployeeName: "[placeholder='Type for hints...']",
            clickEmployeeName: ".oxd-autocomplete-dropdown > :nth-child(1)",
            optionSatus: '.oxd-select-dropdown > :nth-child(2)',
            ordinaryAutocomplete: "[autocomplete='off']",
            buttonSaveAddUser: "[type='submit']",
            
        }
        return selectors;
    }
    clickAdminSideBar() {
        cy.get(this.selectorList().adminSiderBar).click({force:true});
    }
    checkAdminPage() {
        //cy.get(this.selectorList().titleTopBarHeader).contains('Admin');
    }
    clickButtonAddUser() {
        cy.get(this.selectorList().buttonAddUser).eq(1).click({force:true});
    }
    fillAddUserForm(name, username, password, confirmPassword=password) {
       //cy.get(this.selectorList().checkAddUserPage).contains('Add User');
        cy.get(this.selectorList().buttonUserRole).eq(0).click({force:true});
        cy.get(this.selectorList().adminOptionRole).click({force:true});
        cy.get(this.selectorList().inputEmployeeName).type(name);
        //cy.get(this.selectorList().clickEmployeeName).click({force:true});
        cy.get(this.selectorList().buttonUserRole).eq(1).click({force:true});
        cy.get(this.selectorList().optionSatus).click({force:true});
        cy.get(this.selectorList().ordinaryAutocomplete).eq(0).type(username);
        cy.get(this.selectorList().ordinaryAutocomplete).eq(1).type(password);
        cy.get(this.selectorList().ordinaryAutocomplete).eq(2).type(confirmPassword);
    }
    buttonSubmitSave() {
        cy.get(this.selectorList().buttonSaveAddUser).click({force:true});
    }
    
}
export default adminPage;