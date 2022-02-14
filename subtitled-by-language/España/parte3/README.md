# ![Logotipo de DevSuperior](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Semana de Spring React - Episodio 3
> *Crea una app inédita para tu portafolio con las tecnologías más demandadas del mercado*

## Realización
[DevSuperior - Escuela de Programación](https://devsuperior.com.br)

[![DevSuperior en Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior en Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)

## Objetivos del proyecto para esta clase
- Integrar backend y frontend
- Tres pilares de React
  - Componentes
  - Props
  - Expresar
- React Hooks
  - useState
  - useEffect
  - useParams
  - useNavigate

### Paso: Primera solicitud

- Instalar Axios
```bash
yarn add axios@0.24.0
```
- Establecer URL BÁSICA
- Establecer tipos de películas y páginas de películas
- Hacer la solicitud

```typescript
export type Movie = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

export type MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
```

- **COMMIT: First request**

### Paso: React hooks: useState e useEffect

Hooks son funciones cuyo comportamiento está ligado al estado y ciclo de vida de React a partir de componentes funcionales.

https://pt-br.reactjs.org/docs/hooks-overview.html

```
Hook: useState
Mantener el estado en el componente
```
```
Hook: useEffect
Ejecutar algo en la instanciación o destrucción de componentes, observar el estado
```

- **COMMIT: useState, useEffect**

### Paso: Props

Props pueden entenderse como argumentos del componente React.

https://pt-br.reactjs.org/docs/components-and-props.html

NOTA: En la renderización de colección dinámica, cada elemento renderizado DEBE tener un atributo `key`.

- **COMMIT: Props**

### Paso: useParams

- **COMMIT: useParams**


### Paso: Mostrar estrellitas
```js
// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}
```


- **COMMIT: Show score**


### Paso: Paginación

- Botón de control activado/desactivado
- Cambiar página al hacer clic en el botón

```js
const handlePageChange = (newNumber: number) => {
    setPageNumber(newNumber);
}
```

- **COMMIT: Pagination**


### Paso: Guardar puntaje, useNavegar

Función para validar correo electrónico

```javascript
// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
export function validateEmail(email: any) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
```

Objeto de configuración de solicitud de Axios

```
const config: AxiosRequestConfig = {
	baseURL: BASE_URL,
	method: 'PUT',
	url: '/scores',
	data: {
		email: email,
		movieId: movieId,
		score: score
	}
}
```

- **COMMIT: Save, useNavigate**



## FELICIDADES!

![Felicidades!](https://raw.githubusercontent.com/devsuperior/bds-assets/main/img/trophy.png)
