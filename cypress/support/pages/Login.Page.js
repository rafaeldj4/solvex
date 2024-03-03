class Login {

    elements = {

        username_Input: ()=> cy.get("#user-name"),
        password_input: ()=> cy.get("#password"),
        login_button: ()=> cy.get("#login-button"),
        error_message: ()=> cy.get('[data-test="error"]')

    }

    typeUsername(username){
        this.elements.username_Input().type(username)
    }

    typePassword(password){
        this.elements.password_input().type(password)
    }


}

export const LoginPage = new Login();