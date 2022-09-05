
class settingsPage {

    elements = {
       current_password: () => cy.get('#MainContent_CurrentPassword'),
       new_password: () => cy.get('#MainContent_NewPassword'),
       confirm_new_password: () => cy.get('#MainContent_ConfirmNewPassword'),

       change_password: () => cy.get('[name="ctl00$MainContent$ctl13"]'),

       success_message: () => cy.get('#MainContent_successMessage'),

       billing_history: () => cy.get('[data-testid="billingHistoryLeftBarLnk"]'),

       download_first_file: () => cy.get('#ctl00_MainContent_GridBilling_ctl00_ctl04_downloadLnk'),
 
    }
 
     
    verify_page_logo_is_visible() {
        this.elements.page_logo()
            .should('be.visible')
    }

    enter_current_password(passowrd) {
        this.elements.current_password()
            .should('be.visible')
            .type(passowrd)
            .should('have.value', passowrd)
    }

    click_on_download_first_file() {
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
              setTimeout(function () { doc.location.reload() }, 5000)
            })
            cy.get('#ctl00_MainContent_GridBilling_ctl00_ctl04_downloadLnk').click()
          })
    }

    verify_file_downloaded() {
        cy.verifyDownload('Invoice-94D962C2-0002'+".pdf")
      }

    click_on_billing_history() {
        this.elements.billing_history()
            .should('be.visible')
            .click()
        cy.url()
            .should('include', '/account/billinghistory')
        cy.wait(2000)
    }

    success_message() {
        this.elements.success_message()
            .should('be.visible')
    }

    enter_new_password(new_password) {
        this.elements.new_password()
            .should('be.visible')
            .type(new_password)
            .should('have.value', new_password)
        this.elements.confirm_new_password()
            .should('be.visible')
            .type(new_password)
            .should('have.value', new_password)
    }

    click_on_change_password() {
        this.elements.change_password()
            .should('be.visible')
            .click()
    }

    

    
 
 }
 
 export default settingsPage
 