/// <reference types="cypress" />

import { LoginPage } from "../../../../support/pages/Login.Page";
import { ProductPage } from "../../../../support/pages/Product.Page";


describe("Casos de pruebas: Compra de productos", ()=>{

    let the;
    before("Load data", ()=>{
        cy.fixture("data").then((data)=>{
            the = data
        })
    })

    beforeEach("Precondiciones", ()=>{
        cy.visit(the.swagLabs_url)
        LoginPage.login(the.standard_user,the.password)
    })


    it("Realizar compra de 1 producto", ()=>{

    cy.get(".inventory_item").its("length").then(inventoryItems => {
        cy.log(inventoryItems)

        const randomIndex = Cypress._.random(0, inventoryItems - 1)
        cy.log(randomIndex)

        cy.get(".inventory_item").eq(randomIndex).within(()=>{
            cy.get(".inventory_item_name").invoke("text").as("itemName")
            cy.get(".inventory_item_desc").invoke("text").as("itemDescription")
            cy.get(".inventory_item_price").invoke("text").as("itemPrice")
            cy.get(".btn_inventory").click()

            })


    })

    ProductPage.elements.shopping_car().click()


    

    })

})