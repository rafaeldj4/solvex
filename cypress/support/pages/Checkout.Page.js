class checkout {

    elements = {


        continue_button: ()=> cy.get('[data-test="continue"]'),
        cancel_button: () => cy.get('[data-test="cancel"]')

    }

    pages = {
        information: {
            firstName: ()=> cy.get('[data-test="firstName"]'),
            lastName: () => cy.get('[data-test="lastName"]'),
            zipcode: ()=> cy.get('[data-test="postalCode"]'),
            error_message: ()=> cy.get('[data-test="error"]')
            
        },

        overview: {

            item_total: ()=> cy.get('.summary_subtotal_label'),
            tax: ()=> cy.get('.summary_tax_label'),
            summary_total: ()=> cy.get('.summary_total_label'),
            finish_button: ()=> cy.get('[data-test="finish"]')

        },

        complete: {

            orderComplete_message: ()=> cy.get('.complete-header'),
            backHome_button: ()=> cy.get('[data-test="back-to-products"]')

        }
    }


}

export const Checkout = new checkout();