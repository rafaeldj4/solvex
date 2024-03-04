/// <reference types="cypress" />

import { LoginPage } from "../../../../support/pages/Login.Page";
import { ProductPage } from "../../../../support/pages/Product.Page";



describe("Casos de pruebas: Redes Sociales",()=>{

    let the;

    before("Load data",()=>{
        cy.fixture("data").then((data)=>{
            the = data
        })
    })

    beforeEach("Precondiciones",()=>{

        cy.visit(the.swagLabs_url)
        LoginPage.login(the.standard_user,the.password)

    })

    it("Validar URL’s de las redes sociales de 'Swag Labs'",()=>{

        ProductPage.elements.twitter_link().invoke("attr","href").should("eq",the.twitterUrl)
        ProductPage.elements.facebook_link().invoke("attr","href").should("eq",the.facebookUrl)
        ProductPage.elements.linkedin_link().invoke("attr","href").should("eq",the.linkedinUrl)


    })

})