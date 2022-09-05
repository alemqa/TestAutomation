
class rulesPage {

    elements = {
       add_new_rule: () => cy.get('#ctl00_MainContent_gridRules_ctl00_ctl02_ctl00_InitInsertButton'),
       subject: () => cy.get('#subjectDiv'),
       rule_name: () => cy.get('#MainContent_ruleName'),
       save_rule: () => cy.get('#MainContent_createRule'),

       all_rules_table: () => cy.get('#ctl00_MainContent_gridRules_ctl00'),

       video_close: () => cy.get('[title="Close (Esc)"]'),
 
    }
 
     
    click_on_add_new_rule() {
        this.elements.add_new_rule()
            .should('be.visible')
            .click()
        this.elements.video_close()
            .click()
    }

    click_on_subject() {
        this.elements.subject()
            .should('be.visible')
            .click()
    }

    enter_rule_name(rule_name) {
        cy.wait(2000)
        this.elements.rule_name()
            .scrollIntoView()
            .should('be.visible')
            .type(rule_name)
            .should('have.value', rule_name)
    }

    click_on_save_rule() {
        this.elements.save_rule()
            .scrollIntoView()
            .should('be.visible')
            .click({force : true})
        cy.url()
            .should('include', '/account/rules?newRuleCreated=true')
    }

    verify_rule_is_added(rule_name) {
        this.elements.all_rules_table()
            .should('contain', rule_name)
    }
 
    
 
 }
 
 export default rulesPage
 

