
class dashboardPage {

    elements = {
       add_new_inbox: () => cy.get('.emailAddressOption').last(),
       first_inbox: () => cy.get('.emailAddressOption').eq(1),

       rules: () => cy.get('[data-testid="rulesLeftBarLnk" ]'),

       account_settings: () => cy.get('#settings'),

       logout: () => cy.get('#logOut'),
      
    }
 
     
    click_on_add_new_inbox() {
        this.elements.add_new_inbox()
            .should('be.visible')
            .click()
        cy.url()
            .should('include', '/addnewinbox')
    }

    open_first_inbox() {
        this.elements.first_inbox()
            .should('be.visible')
            .click()
        cy.url()
            .should('include', '/account/rules?id=3')
    }

    click_on_rules() {
        this.elements.rules()
            .click()
    }

    click_on_account_settings() {
        this.elements.account_settings()
            .should('be.visible')
            .click()
        cy.url()
            .should('include', '/account/accountsettings')
    }

    click_on_logout() {
        this.elements.logout()
            .should('be.visible')
            .click()
    }

    


    
 
 }
 
 export default dashboardPage
 

