class cart {

    elements = {

        checkout_button: ()=> cy.get('[data-test="checkout"]'),
        continue_shopping_button: ()=> cy.get('[data-test="continue-shopping"]'),
        remove_button: ()=> cy.get('.cart_button')

    }


}

export const Cart = new cart();