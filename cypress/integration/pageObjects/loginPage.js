
class loginPage {

    elements = {
       email: () => cy.get('#MainContent_Email'),
       password: () => cy.get('#MainContent_Password'),
       remember_me: () => cy.get('#MainContent_RememberMe'),
       login_button: () => cy.get('#MainContent_LoginButton'),
 
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

    check_remember_me() {
        this.elements.remember_me()
            .should('be.visible')
            .check()
            .should('be.checked')
    }

    click_on_login_button() {
        this.elements.login_button()
            .should('be.visible')
            .click()
        cy.url()
            .should('include', '/account/dashboard')
            .wait(4000)
    }
 
    
 
 }
 
 export default loginPage
 