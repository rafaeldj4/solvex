class products {

    elements = {

        swagLabs_logo: ()=> cy.get('.app_logo'),
        products_title: ()=> cy.get(".title"),
        twitter_link: ()=> cy.get('.social_twitter > a'),
        facebook_link: ()=> cy.get('.social_facebook > a'),
        linkedin_link: ()=> cy.get('.social_linkedin > a')
        

    }

}

export const ProductPage = new products();