/// <reference types="cypress" />

import { Cart } from "../../../../support/pages/Cart.Page";
import { Checkout } from "../../../../support/pages/Checkout.Page";
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

        ProductPage.elements.items_products().then(productos =>{
            const indiceAleatorio = Math.floor(Math.random() * productos.length)
            cy.log(indiceAleatorio)
            const productoAleatorio = productos.eq(indiceAleatorio)

            //Producto
            cy.get(productoAleatorio).within(()=>{
                ProductPage.elements.product_name().invoke("text").as("productName")
                ProductPage.elements.product_description().invoke("text").as("productDescription")
                ProductPage.elements.product_price().invoke("text").as("productPrice")
                ProductPage.elements.product_addCart_button().click()
        
            })

        })

        ProductPage.elements.shopping_car().click()

        cy.get("@productName").then(productName => {
            cy.log(productName)
            ProductPage.elements.product_name().then(shoppingCart_product =>{
                cy.wrap(shoppingCart_product.text()).should("eq",productName)
            })
        })

        cy.get("@productDescription").then(productDescription =>{
            cy.log(productDescription)
            ProductPage.elements.product_description().then(shoppingCart_product =>{
                cy.wrap(shoppingCart_product.text()).should("eq",productDescription)
            })
        })

        cy.get("@productPrice").then(productPrice =>{
            cy.log(productPrice)
            ProductPage.elements.product_price().then(shoppingCart_product =>{
                cy.wrap(shoppingCart_product.text()).should("eq",productPrice)
            })
        })

        //Hacer click en checkout
        Cart.elements.checkout_button().click()

        //Checkout: Your Information
        Checkout.pages.information.firstName().type(the.name)
        Checkout.pages.information.lastName().type(the.lastname)
        Checkout.pages.information.zipcode().type(the.zipcode)
        Checkout.elements.continue_button().click()

        //Validar producto: overview
        

        //Validar que el precio de producto agregado sea el mismo que el precio del campo "item total"
        cy.get("@productPrice").then(productPrice =>{
            cy.log(productPrice)
            Checkout.pages.overview.item_total().then(itemTotal => {
                cy.wrap(itemTotal.text()).should("contain",productPrice)
            })
        })

        //Validar monto total a pagar sumando el precio del producto + los impuestos (taxes)
        Checkout.pages.overview.item_total().invoke("text").then(precioProductoTexto => {
            const precioProducto = parseFloat(precioProductoTexto.replace("Item total: $",""))
            cy.log(precioProducto)

            
            // Impuestos(Taxes)
            Checkout.pages.overview.tax().invoke("text").then(taxesTexto => {
                const taxes = parseFloat(taxesTexto.replace("Tax: $",""))
                cy.log(taxes)

                
                //Suma de montos
                const sumaMontoTotal = precioProducto + taxes
                cy.log(sumaMontoTotal)


                  //Monto total a pagar
            Checkout.pages.overview.summary_total().invoke("text").then(totalTexto =>{

                const montoTotal = parseFloat(totalTexto.replace("Total: $",""))
                cy.log(montoTotal)
                expect(montoTotal).to.equal(sumaMontoTotal)

            })


            })

        })




        
        


        // Checkout.elements.cancel_button().click()
        Checkout.pages.overview.finish_button().click()
        Checkout.pages.complete.orderComplete_message().then(message =>{
            cy.wrap(message.text()).should("eq",the.succesfullOrderComplete_message)
        })


    })

})