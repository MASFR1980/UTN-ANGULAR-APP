# Aplicación de Rick and Morty en Angular

Esta es una aplicación desarrollada en Angular que permite explorar los personajes de la serie "Rick and Morty" y conocer sus características. La aplicación ofrece una navegación sencilla y una funcionalidad básica de inicio de sesión simulada.

## Características

- **Navegación Principal:**
  - **Home:** Página de inicio de la aplicación.
  - **Character:** Sección donde se listan y detallan los personajes de "Rick and Morty".
  - **Contact:** Página de contacto.
  - **Autenticación Simulada:** Opción para iniciar sesión mediante un botón, sin verificación de credenciales.

- **Integración con la API de Rick and Morty:**
  - La aplicación consume datos de la [API de Rick and Morty](https://rickandmortyapi.com/), que proporciona información detallada sobre los personajes, ubicaciones y episodios de la serie.

## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/MASFR1980/UTN-ANGULAR-APP.git
   ```

2. **Navegar al directorio del proyecto:**
   ```bash
   cd UTN-ANGULAR-APP
   ```

3. **Instalar las dependencias:**
   ```bash
   npm install
   ```

## Uso

1. **Iniciar el servidor de desarrollo:**
   ```bash
   ng serve
   ```

2. **Abrir la aplicación en el navegador:**
   Visita `http://localhost:4200/` para ver la aplicación en funcionamiento.

## Dependencias

- **Angular:** Framework principal utilizado para el desarrollo de la aplicación.
- **Angular Router:** Utilizado para gestionar la navegación entre componentes.
- **HTTP Client Module:** Para realizar peticiones HTTP a la API de Rick and Morty.

## Estructura del Proyecto

```markdown
tu_repositorio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   └── home.component.css
│   │   │   ├── character/
│   │   │   │   ├── character.component.ts
│   │   │   │   ├── character.component.html
│   │   │   │   └── character.component.css
│   │   │   ├── contact/
│   │   │   │   ├── contact.component.ts
│   │   │   │   ├── contact.component.html
│   │   │   │   └── contact.component.css
│   │   ├── services/
│   │   │   └── api.service.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   └── index.html
├── angular.json
├── package.json
└── README.md
```

## Notas

- **Autenticación:** Actualmente, la funcionalidad de inicio de sesión es una maqueta. Al presionar el botón de "Login", el estado de autenticación cambia sin requerir credenciales.


## Contacto

Para más información o consultas, puedes contactar al desarrollador en [sinellimauricio@gmail.com](mailto:sinellimauricio@gmail.com).
```