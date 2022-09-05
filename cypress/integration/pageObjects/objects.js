
class homePage {

    elements = {
       page_logo: () => cy.get('.navbar-brand'),
       sign_up_button: () => cy.contains('Sign Up'),
       login_button : () => cy.contains('Login')
 
    }
 
     
    verify_page_logo_is_visible() {
        this.elements.page_logo()
            .should('be.visible')
    }

    click_on_sign_up() {
        this.elements.sign_up_button()
            .should('be.visible')
            .click()
        cy.url()
            .should('include', '/account/register')
    }

    click_on_login() {
        this.elements.login_button()
            .should('be.visible')
            .click()
        cy.url()
            .should('include', '/account/login')
    }
 
    
 
 }
 
 export default homePage
 