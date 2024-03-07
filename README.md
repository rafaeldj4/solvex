# Prueba Técnica Solvex – QA

## Instalación

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Node.js y npm instalados en tu sistema.
3. Ejecuta `npm install` en el directorio raíz del proyecto para instalar las dependencias.

## Ejecución de Pruebas

Ejecuta las pruebas con el comando: `npm run test`.


## Estructura del Proyecto

- **cypress/e2e/test:** Contiene archivos de pruebas.
- **cypress/support:** Archivos de soporte y configuraciones.
- **cypress/fixtures:** Contiene la data de prueba.


## Scripts Disponibles

- `test`: Ejecuta las pruebas de Cypress en modo headless en el navegador Chrome.
- `remove-results`: Limpia los resultados de pruebas anteriores antes de ejecutar nuevas pruebas.
- `merge-report`: Combina todos los resultados de las pruebas individuales en un solo archivo JSON.
- `create-report`: Genera un informe HTML a partir del archivo JSON combinado.
- `regression-test`: Realiza un conjunto de pasos de prueba de regresión, incluyendo limpieza de resultados anteriores, ejecución de pruebas, combinación de resultados y generación de informes.

Puedes ejecutar estos scripts utilizando el comando `npm run <nombre_del_script>`