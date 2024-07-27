# Conecta Campo

**Conecta Campo** es una aplicación web diseñada para conectar directamente a los agricultores con los clientes finales, permitiendo la venta directa de productos agrícolas y la opción de donar excedentes a bancos de alimentos.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
  - [Backend (Spring Boot)](#backend-spring-boot)
  - [Frontend (React)](#frontend-react)
- [Uso](#uso)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción

Conecta Campo permite a los agricultores vender sus productos directamente a los consumidores, eliminando intermediarios y asegurando precios justos. Además, ofrece la opción de donar productos excedentes a bancos de alimentos locales, contribuyendo así a la reducción del desperdicio de alimentos y al apoyo a comunidades necesitadas.

## Características

- **Registro y Autenticación**: Los agricultores y consumidores pueden registrarse y autenticarse en la plataforma.
- **Gestión de Productos**: Los agricultores pueden añadir, actualizar y eliminar productos.
- **Compras en Línea**: Los consumidores pueden navegar por los productos disponibles, añadirlos al carrito y realizar compras.
- **Donaciones**: Los agricultores pueden donar productos excedentes a bancos de alimentos.
- **Panel de Administración**: Un panel para gestionar usuarios, productos y donaciones.

## Tecnologías Utilizadas

- **Backend**: Spring Boot
- **Frontend**: React
- **Base de Datos**: MySQL
- **Autenticación**: Spring Security / Oauth

## Instalación

### Backend (Spring Boot)

1. **Clonar el repositorio**

    ```bash
    git clone https://github.com/cnievaslozano/conecta-campo.git
    cd conecta-campo/backend
    ```

2. **Configurar la base de datos**

    Actualiza `application.properties` con la configuración de tu base de datos.

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/conecta_campo
    spring.datasource.username=tu_usuario
    spring.datasource.password=tu_contraseña
    spring.jpa.hibernate.ddl-auto=update
    ```

3. **Construir y ejecutar la aplicación**

    ```bash
    ./mvnw clean install
    ./mvnw spring-boot:run
    ```

### Frontend (React)

1. **Navegar al directorio frontend**

    ```bash
    cd ../frontend
    ```

2. **Instalar dependencias**

    ```bash
    npm install
    ```

3. **Iniciar la aplicación**

    ```bash
    npm start
    ```

## Uso

1. Navega a `http://localhost:3000` en tu navegador para acceder a la aplicación.