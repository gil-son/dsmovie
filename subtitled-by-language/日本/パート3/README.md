# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) 春の反応週間-エピソード3
> *市場で最も需要の高いテクノロジーを使用して、ポートフォリオに前例のないアプリを作成します*

## 実現
[DevSuperior-プログラミング学部](https://devsuperior.com.br)

[![DevSuperior Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)

## このクラスのプロジェクトの目標

- バックエンドとフロントエンドを統合する
- Reactの3本の柱
  - コンポーネント
  - Props
  - 州
- React Hooks
  - useState
  - useEffect
  - useParams
  - useNavigate

### ステップ：最初のリクエスト

- Axiosをインストールします
```bash
yarn add axios@0.24.0
```
- BASE_URLを設定します
- MovieおよびMoviePageタイプを設定します
- リクエストを行う

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

###ステップ：フックを反応させる： useStateおよびuseEffect

Hooksは、機能コンポーネントからのReactの状態とライフサイクルに動作が関連付けられている関数です。.

https://pt-br.reactjs.org/docs/hooks-overview.html

```
Hook: useState
コンポーネントの状態を保持する
```
```
Hook: useEffect
コンポーネントのインスタンス化または破棄で何かを実行し、状態を観察します
```

- **COMMIT: useState, useEffect**

### ステップ： Props

Propsは、Reactコンポーネントの引数として理解できます。

https://pt-br.reactjs.org/docs/components-and-props.html

注：動的コレクションレンダリングでは、レンダリングされた各要素に `key`属性が必要です。

- **COMMIT: Props**

### ステップ: useParams

- **COMMIT: useParams**


### ステップ：小さな星を表示する

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


### ステップ：ページネーション

- 制御の有効化/無効化ボタン
- ボタンクリックでページを切り替える

```js
const handlePageChange = (newNumber: number) => {
    setPageNumber(newNumber);
}
```

- **COMMIT: Pagination**


### ステップ：スコアを保存し、Navigateを使用します

メールを検証する機能

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

Axiosリクエスト構成オブジェクト

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



## とても良い!

![とても良い!](https://raw.githubusercontent.com/devsuperior/bds-assets/main/img/trophy.png)
