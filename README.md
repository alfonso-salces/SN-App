# SN App

SN App es una aplicación híbrida creada con Ionic/Angular.

## Instalación

Para ejecutar la aplicación debemos lanzar el siguiente comando:

```bash
npm install
```

## Testing

Para ejecutar los test e2e:
```bash
npm run cypress:open
```

Para ejecutar los test unitarios:
```bash
npm run test-coverage
```

## Utilidades

Para desarrollar esta aplicación he usado diferentes librerías como Cypress para el testing e2e (es muy popular
debido a su facilidad de implementación e uso. Nunca antes lo había usado y he visto esta prueba como una buena
oportunidad para hacerlo.),
Jasmine y Karma para tests unitarios y Prettier para tener un control del formateo de código.

## Metodología y tecnologías usadas

He aplicado la estrategia de detección de cambios OnPush para que Angular no esté comprobando si hay cambios en las vistas continuamente, 
esto contribuye a una mejora de rendimiento de la aplicación. (Docs: https://angular.io/api/core/ChangeDetectionStrategy)

Para el componente genérico de input, he utilizado Control Value Accesor, ¿Pero qué es exactamente esto?
Control Value Accessor es una interface que proporciona Angular para permitirnos vincular componentes personalizados con
los formularios de Reactivos de Angular. (Doc de angular: https://angular.io/api/forms/ControlValueAccessor)

En principio la aplicación está pensada para utilizar el patrón Contenedor/Presentador, pero como no hay mucha lógica,
he optado por dejarla en el componente login-form.component en vez del login.container.
