class dashboardPage {
    selectorList() {
        const selectors = {
            dashBoardHeader : ".oxd-topbar-header-breadcrumb-module",
            dashBoardGrid :".orangehrm-dashboard-grid"
        }
        return selectors;
    }
    
    locationDashboard() {
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    }
    dashboardPage() {
        cy.get(this.selectorList().dashBoardHeader).should('be.visible');
        cy.get(this.selectorList().dashBoardGrid).should('be.visible');
    }
}
export default dashboardPage;