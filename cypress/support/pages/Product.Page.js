class products {

    elements = {

        swagLabs_logo: ()=> cy.get('.app_logo'),
        products_title: ()=> cy.get(".title")
        

    }

}

export const ProductPage = new products();