
class signUpPage {

    elements = {
       first_name: () => cy.get('#MainContent_firstName'),
       last_name: () => cy.get('#MainContent_lastName'),
       phone: () => cy.get('#MainContent_telephoneNumber'),
       email: () => cy.get('#MainContent_Email'),
       password: () => cy.get('#MainContent_Password'),
       password_confirm: () => cy.get('#MainContent_ConfirmPassword'),
       accept_terms: () => cy.get('#CheckPolicies'),
       register: () => cy.get('#MainContent_RegisterButton'),
    }
 
     
    enter_first_name(first_name) {
        this.elements.first_name()
            .should('be.visible')
            .clear()
            .type(first_name)
            .should('have.value', first_name)
    }

    enter_last_name(last_name) {
        this.elements.last_name()
            .should('be.visible')
            .clear()
            .type(last_name)
            .should('have.value', last_name)
    }

    enter_phone_number(phone) {
        this.elements.phone()
            .should('be.visible')
            .clear()
            .type(phone)
            .should('have.value', phone)
    }

    enter_email(email) {
        this.elements.email()
            .should('be.visible')
            .clear()
            .type(email)
            .should('have.value', email)
    }

    enter_password(password) {
        this.elements.password()
            .should('be.visible')
            .clear()
            .type(password)
            .should('have.value', password)
    }

    confirm_password(password) {
        this.elements.password_confirm()
            .should('be.visible')
            .clear()
            .type(password)
            .should('have.value', password)
    }

    accept_terms() {
        this.elements.accept_terms()
            .should('be.visible')
            .check()
            .should('be.checked')
    }

    click_on_register() {
        this.elements.register()
            .should('be.visible')
            .click()
        cy.url()
            .should('include', '/createinbox')
    }









 
    
 
 }
 
 export default signUpPage
 