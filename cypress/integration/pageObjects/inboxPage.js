
class inboxPage {

    elements = {
       inbox_name: () => cy.get('#MainContent_InboxName'),
       create_new_inbox_button: () => cy.get('#MainContent_createNewInbox'),

       new_inbox: () => cy.get('.emailAddressOption'),

       new_inbox_settings_button: () => cy.get('[title="Update inbox"]').last(),
       update_button: () => cy.get('#MainContent_createNewInbox'),
       inbox_address: () => cy.get('#MainContent_inboxAddress'),
       cancel: () => cy.get('#MainContent_cancelButton'),
      
    }
 
     
    enter_inbox_name(inbox) {
        this.elements.inbox_name()
            .should('be.visible')
            .clear()
            .type(inbox)
            .should('have.value', inbox)
    }

    wait() {
        cy.wait(2000)
    }

    enter_inbox_address(inbox_address) {
        this.elements.inbox_address()
            .should('be.visible')
            .clear()
            .type(inbox_address)
            .should('have.value', inbox_address)
    }

    click_on_create_button() {
        this.elements.create_new_inbox_button()
            .should('be.visible')
            .click()
    }

    verify_new_inbox_created(inbox) {
        this.elements.new_inbox()
            .contains(inbox)
            .should('be.visible')
    }

    click_on_inbox_settings() {
        this.elements.new_inbox_settings_button()
            .should('be.visible')
            .click()
        cy.contains('Inbox Settings')
            .should('be.visible')
    }

    click_on_update() {
        this.elements.update_button()
            .should('be.visible')
            .click()
        cy.url()
            .should('include', '/account/dashboard')
    }
    


    
 
 }
 
 export default inboxPage
 

