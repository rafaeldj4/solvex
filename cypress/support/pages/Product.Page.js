class products {

    elements = {

        swagLabs_logo: ()=> cy.get('.app_logo'),
        products_title: ()=> cy.get(".title"),
        twitter_link: ()=> cy.get('.social_twitter > a'),
        facebook_link: ()=> cy.get('.social_facebook > a'),
        linkedin_link: ()=> cy.get('.social_linkedin > a'),
        burger_menu: ()=> cy.get("#react-burger-menu-btn"),
        logout_button: ()=> cy.get("#logout_sidebar_link"),
        inventory_products_button: ()=> cy.get(".btn_inventory"),
        shopping_car: ()=> cy.get('.shopping_cart_link'),
        items_products: ()=> cy.get(".inventory_item"),
        product_name: () => cy.get(".inventory_item_name"),
        product_description: ()=> cy.get(".inventory_item_desc"),
        product_price: ()=> cy.get(".inventory_item_price"),
        product_addCart_button: ()=> cy.get(".btn_inventory")
        

    }

    addRandomProduct(){
        return this.elements.inventory_products_button().then(product => {
            let randomIndex = Math.floor(Math.random() * 6)
            let randomProduct = product.eq(randomIndex)
            return randomProduct;
        } )
    }

}

export const ProductPage = new products();