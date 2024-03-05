/// <reference types="cypress" />
import { LoginPage } from "../../../../support/pages/Login.Page"
import { ProductPage } from "../../../../support/pages/Product.Page"

describe("Casos de pruebas: Inicio de sesion", ()=>{


    let the;
    before("Load data", ()=>{
        cy.fixture("data").then((data)=>{
            the = data
        })
    })

    beforeEach("Precondiciones", ()=>{
        cy.visit(the.swagLabs_url)
    
    })

    it("Iniciar sesion con credenciales validas", ()=>{

        
        LoginPage.typeUsername(the.standard_user)
        LoginPage.typePassword(the.password)
        LoginPage.elements.login_button().click()
        ProductPage.elements.swagLabs_logo().should("exist").and("contain",the.swagLabs_logo)
        ProductPage.elements.products_title().should("exist").and("contain","Products")

    })

    it("Intentar iniciar sesion con contraseña incorrecta", ()=>{


        LoginPage.typeUsername(the.standard_user)
        LoginPage.typePassword(the.wrong_password)
        LoginPage.elements.login_button().click()
        LoginPage.elements.error_message().should("exist").and("contain",the.wrong_credentials_message)


    })

    it("Intentar iniciar sesion con credenciales de usuario bloqueado", ()=>{


        LoginPage.typeUsername(the.locked_user)
        LoginPage.typePassword(the.password)
        LoginPage.elements.login_button().click()
        LoginPage.elements.error_message().should("exist").and("contain",the.locked_user_message)


    })

    it("Validar cierre de sesion", ()=>{


        LoginPage.login(the.standard_user,the.password)
        ProductPage.elements.burger_menu().click()
        ProductPage.elements.logout_button().click()
        cy.url().should("eq",the.swagLabs_url)



    })



})