import dashboardPage from "./pageObjects/dashboardPage";
import loginPage from "./pageObjects/loginPage";
import inboxPage from "./pageObjects/inboxPage";
import homePage from "./pageObjects/objects";
import signUpPage from "./pageObjects/signUpPage";
import rulesPage from "./pageObjects/rulesPage";
import settingsPage from "./pageObjects/settingsPage";


const url = Cypress.env("baseUrl")


let home = new homePage()
let signup = new signUpPage()
let login = new loginPage()
let dashboard = new dashboardPage()
let inb = new inboxPage()
let rules = new rulesPage()
let settings = new settingsPage()

describe("Ivan Tests Automation", function() {

    it("Register new account", function() {
        const first_name = "Automation"
        const last_name = "Test"
        const phone = "123321123"
        const email = "test"+Cypress.config('UniqueNumber')+"@test.com"
        const password = "Test1234!"

        cy.log("Navigate to the Parserr web page")
        cy.visit(url)
        cy.log("Verify page is sucessfully loaded")
            home.verify_page_logo_is_visible()
        cy.log("Click on Sign Up button")
            home.click_on_sign_up()
        cy.log("Enter First Name")
            signup.enter_first_name(first_name)
        cy.log("Enter Last Name")
            signup.enter_last_name(last_name)
        cy.log("Enter Phone Number")
            signup.enter_phone_number(phone)
        cy.log("Enter Email")  
            signup.enter_email(email)
        cy.log("Enter Password")
            signup.enter_password(password)
        cy.log("Confirm the Password")
            signup.confirm_password(password)
        cy.log("Accept the Terms")
            signup.accept_terms()
        cy.log("Click on Register")
            signup.click_on_register()
      });

     

    it("Add a new inbox and edit its name", function() {
        const email = "dokoivan3@gmail.com"
        const password = "123Ivan"
        const inbox = "New"+Cypress.config('UniqueNumber')
        const inbox_new_name = "Updated"+Cypress.config('UniqueNumber')
        const inbox_address = Cypress.config('UniqueNumber')

        cy.clearLocalStorage()
        cy.log("Navigate to the Parserr web page")
        cy.visit(url)
        cy.log("Login")
            home.click_on_login()
        cy.log("Enter Email")
            login.enter_email(email)
        cy.log("Enter Password")
            login.enter_password(password)
        cy.log("Click on Login button")
            login.click_on_login_button()
        cy.log("Click on Add New Inbox")
            dashboard.click_on_add_new_inbox()
        cy.log("Enter Inbox Name")
            inb.enter_inbox_name(inbox)
        cy.log("Enter Inbox Address")
            inb.enter_inbox_address(inbox_address)
        cy.log("Click on Create button")
            inb.click_on_create_button()
            inb.wait()
        cy.log("Verify that new Inbox is created")
            inb.verify_new_inbox_created(inbox)
        cy.log("Click on Inbox Settings")
            inb.click_on_inbox_settings()
        cy.log("Edit the Inbox by changing its name")
            inb.enter_inbox_name(inbox_new_name)
        cy.log("Click on Update")
            inb.click_on_update()
        cy.log("Verify that Inbox is successfully updated")
            inb.verify_new_inbox_created(inbox_new_name)
    })

    

    it("Create a new rule (subject)", function() {
        const email = "dokoivan3@gmail.com"
        const password = "123Ivan"
        const rule_name = "Subject"+Cypress.config('UniqueNumber')

        cy.clearLocalStorage()
        cy.log("Navigate to the Parserr web page")
        cy.visit(url)
        cy.log("Login")
            home.click_on_login()
        cy.log("Enter Email")
            login.enter_email(email)
        cy.log("Enter Password")
            login.enter_password(password)
        cy.log("Click on Login button")
            login.click_on_login_button()
        cy.log("Open first inbox")
            dashboard.open_first_inbox()
        cy.log("Click on Rules")
            dashboard.click_on_rules()
        cy.log("Click on Add New Rule")
            rules.click_on_add_new_rule()
        cy.log("Click on Subject")
            rules.click_on_subject()
        cy.log("Enter Rule Name")
            rules.enter_rule_name(rule_name)
        cy.log("Click on Save Rule")
            rules.click_on_save_rule()
        cy.log("Verify that New Rule is created")
            rules.verify_rule_is_added(rule_name)
    })

    
    it("Change users password", function() {
        const email = "dokoivan3@gmail.com"
        const password = "123Ivan"
        const new_password = "Test1234!"

        cy.clearLocalStorage()
        cy.log("Navigate to the Parserr web page")
        cy.visit(url)
        cy.log("Login")
            home.click_on_login()
        cy.log("Enter Email")
            login.enter_email(email)
        cy.log("Enter Password")
            login.enter_password(password)
        cy.log("Click on Login button")
            login.click_on_login_button()
        cy.log("Click on Account Settings")
            dashboard.click_on_account_settings()
        cy.log("Enter Current Passowrd")
            settings.enter_current_password(password)
        cy.log("Enter New Password and Confirm it")
            settings.enter_new_password(new_password)
        cy.log("Click on Change Password")
            settings.click_on_change_password()
        cy.log("Verify Success Message is displayed")
            settings.success_message()
        cy.log("Logout")
            dashboard.click_on_logout()
        cy.log("Login with new Password to confirm that its changed")
        cy.log("Login")
            home.click_on_login()
        cy.log("Enter Email")
            login.enter_email(email)
        cy.log("Enter New Password")
            login.enter_password(new_password)
        cy.log("Click on Login button")
            login.click_on_login_button()
        cy.log("Change back to original Password")
        dashboard.click_on_account_settings()
        settings.enter_current_password(new_password)
        settings.enter_new_password(password)
        settings.click_on_change_password()
        settings.success_message()
    })

    
   
    it("Download billing history PDF", function() {
        const email = "dokoivan3@gmail.com"
        const password = "123Ivan"

        cy.clearLocalStorage()
        cy.log("Navigate to the Parserr web page")
        cy.visit(url)
        cy.log("Login")
            home.click_on_login()
        cy.log("Enter Email")
            login.enter_email(email)
        cy.log("Enter Password")
            login.enter_password(password)
        cy.log("Click on Login button")
            login.click_on_login_button()
        cy.log("Click on Account Settings")
            dashboard.click_on_account_settings()
        cy.log("Click on Billing History")
            settings.click_on_billing_history()
        cy.log("Click on Download button on one of the files")
            settings.click_on_download_first_file()
        cy.log("Verify that File is downloaded")
            settings.verify_file_downloaded()
    })
    
});
