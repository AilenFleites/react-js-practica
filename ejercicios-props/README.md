# Consignas  EJERCICIOS Props

1- Precio
Crear un componente Precio que tenga los props:
valor, que toma un número
moneda, que tome un string con el tipo de moneda (ARS, USD, EUR, etc.)
y que renderice el precio formateado con el símbolo de la moneda adelante

Investigar Intl.NumberFormat

** Extra **

Crear un formulario que pida moneda y valor
El componente Precio debe recibir los datos ingresados en el formulario anterior.
Moneda y valor son estados de componente padre (de Precio).

2- Fecha
Crear un componente Fecha que tenga un prop fecha que tome un objeto de tipo Date, y renderice un elemento p con la fecha formateada, por ejemplo: miércoles, 29 de abril de 2020
Investigar Intl.DateTimeFormat

3- Paginado
Crear un componente Pagina que tome los siguientes props:

actual, número de la página actual

maximo, número de la página máxima

y renderice un paginado de la siguiente forma: [Previous] [1] [...] [5] [...] [10] [Next], es decir, la página 1, puntos suspensivos, la página actual, puntos suspensivos y la página máxima, con las palabras para avanzar y retroceder.

Ignorar lo que sucede si la página actual es igual a la primera o a la última.

4- PuntajeItem y Puntaje
Crear un componente PuntajeItem que tome un prop tipo con los valores lleno o vacio y muestre un ícono de una estrella llena o vacía según el caso
Crear un componente Puntaje que tome un prop puntaje que sea del 1 al 5 y renderice 5 estrellas, siendo valor de score la cantidad de PuntajeItem con tipo lleno, mientras las restantes son tipo vacio, por ejemplo: ★★★✩✩
Pueden usar íconos de FontAwesome, Bootstrap, Material o emojis

EXTRA:

Si usan íconos, permitir cambiar el color de las estrellas
Permitir que PuntajeItem pueda tener otra ícono (corazón por ejemplo) y pueda ser configurado mediante un prop
Permitir que Puntaje muestre un texto con el puntaje, por ejemplo: ★★★✩✩ 2 de 5 estrellas.

5- Alert
Crear un componente Alert que

tenga como props status y message

message es el mensaje de la alert

status es un string con alguno de los siguientes valores:

danger
success
warning
info
cada status renderiza el componente de un forma distinta, con sus propios colores de e iconos, de la siguiente forma:



6- Stock y ListaStock
Crear un componente Stock que tome como props producto (string correspondiente a nombre), cantidad (número) y maximo (número), y renderice un elemento li que:

si la cantidad es menor al 10% de maximo, ponga el texto en rojo
si la cantidad es mayor a 10% de maximoy menor al 25% de maximo, ponga el texto en naranja
si la cantidad es mayor al 25% de maximo y menor al 40% de maximo, ponga el texto en amarillo
si la cantidad es mayor al 40% de maximo, ponga el texto en verde
Crear un componente ListaStock que tome una lista de productos y renderice un ul con un array de Stock por cada ítem de la lista. Ejemplo de lista:

const productos = [
  { producto: "Chocolates", cantidad: 34, maximo: 100 },
  { producto: "Caramelos", cantidad: 99, maximo: 200 },
  { producto: "Turrones", cantidad: 3, maximo: 50 },
  { producto: "Alfajores", cantidad: 25, maximo: 130 },
  { producto: "Tortas", cantidad: 9, maximo: 10 },
];


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
