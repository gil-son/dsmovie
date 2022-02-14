# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Spring React Week - Episode 3
> *Create an unprecedented app for your portfolio with the most demanded technologies on the market*

## Realization
[DevSuperior - Programming School](https://devsuperior.com.br)

[![DevSuperior on Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior on Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)

## Project goals for this class
- Integrate backend and frontend
- Three pillars of React
   - Components
   - props
   - State
- React Hooks
   - useState
   - useEffect
   - useParams
   - useNavigate

### Step: First request

- Install Axios
```bash
yarn add axios@0.24.0
```
- Set BASE_URL
- Set Movie and MoviePage types
- Make the request

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

### Step: React hooks: useState and useEffect

Hooks are functions whose behavior is tied to the state and lifecycle of React from functional components.

https://pt-br.reactjs.org/docs/hooks-overview.html

```
Hook: useState
Keep state in component
```
```
Hook: useEffect
Execute something on component instantiation or destruction, observe state
```

- **COMMIT: useState, useEffect**

### Step: Props

Props can be understood as arguments of the React component.

https://pt-br.reactjs.org/docs/components-and-props.html

NOTE: In dynamic collection rendering, each rendered element MUST have a `key` attribute.

- **COMMIT: Props**

### Passo: useParams

- **COMMIT: useParams**


### Step: Show little stars
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


### Step: Pagination

- Control enabled/disabled button
- Switch page on button click

```js
const handlePageChange = (newNumber: number) => {
    setPageNumber(newNumber);
}
```

- **COMMIT: Pagination**


### Step: Saving score, useNavigate

Function to validate email

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

Axios request configuration object

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



## CONGRATULATIONS!

![Congratulations!](https://raw.githubusercontent.com/devsuperior/bds-assets/main/img/trophy.png)
