# ![Logotipo de DevSuperior](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png)春の反応週間-エピソード1
> *市場で最も需要の高いテクノロジーを使用して、ポートフォリオに前例のないアプリを作成します*

## 実現

[DevSuperior-プログラミングスクール](https://devsuperior.com.br)

[![DevSuperior Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)

## このクラスのプロジェクトの目標

- バックエンドおよびフロントエンドプロジェクトを作成する
- プロジェクトをGithubのmonorepoに保存します
- フロントエンドの静的な外観を組み立てます

## チェックリスト

### ステップ：準備

#### ヒント：VS Code Extensions

#### チェック Node (16 LTS) と Yarn

[ハードウェアインストールガイド](https://github.com/devsuperior/sds-dsmovie/tree/main/_instalacao)

```bash
node -v
yarn -v
```

Yarnをインストールする必要がある場合は、次のコマンドを実行します。

```
npm install --global yarn
```

#### デザイン Figma

https://www.figma.com/file/hpQuzpGHq2MmrI87xnfMoT/DSMovie1

https://www.figma.com/file/svCMhNqgpAZuN86w9IHJ4v/DSMovie2

https://www.figma.com/file/gEZYKqJJs2gEhIB6k9ksGB/DSMovie3

https://www.figma.com/file/hyovBMIxwrn2Bb5MZLrxHL/DSMovie4


### ステップ：ReactJS プロジェクトを作成する 

- 注意：これは、作成するフォルダー構造になります。

![DevSuperior Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/sds/pastas-dsmovie.png)

```
yarn create react-app frontend --template typescript
```
また:
```
npx create-react-app frontend --template typescript
```

重要：.git サブフォルダーを削除してください 
- *注意：隠しファイルと拡張子を参照してください*

### ステップ：Spring Boot プロジェクトを作成する

- 次の依存関係を持つ `Spring Initializr`で Spring Boot プロジェクトを作成します
  - Web
  - JPA
  - H2
  - Postgres
  - Security

- pom.xmlファイルで調整します:

```xml
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-resources-plugin</artifactId>
	<version>3.1.0</version>
</plugin>
```

  -プロジェクトを右クリック-> Maven->プロジェクトの更新（強制更新）

###ステップ：最初のバージョンをGithubに保存します

```bash
git config --global user.name <あなたの名前>
git config --global user.email <あなたのメール>

git init

git add .

git commit -m "プロジェクトが作成されました"

git remote ...
```

```bash
git status

git remote -v

git branch -M main

git push -u origin main
```

### ステップ：ReactJSプロジェクトを「クリーンアップ」する

- 未使用のファイルを削除します

- **COMMIT: Project clean**

###ステップ：ブートストラップとCSSをプロジェクトに追加します
- Bootstrap
```
yarn add bootstrap@5.1.3
```

- index.cssファイル
```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

:root {
  --color-primary: #4D41C0;
}

* {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

html, body {
    background-color: #E5E5E5;
}

a, a:hover {
  text-decoration: none;
  color: unset;
}
```
- index.tsxファイル

```
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
```

- **COMMIT: Bootstrap**

### ステップ：Navbarコンポーネント

注意：tsconfig.jsonファイル内: `"baseUrl": "./src"` （アプリを再起動します）

```js
<header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/devsuperior</p>
                </div>
            </a>
        </div>
    </nav>
</header>
```

```css
header {
    height: 60px;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
}

.dsmovie-nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
}

.dsmovie-nav-content h1 {
    font-size: 24px;
    margin: 0;
    font-weight: 700;
}

.dsmovie-contact-container {
    display: flex;
    align-items: center;
}

.dsmovie-contact-link {
    margin: 0 0 0 10px;
    font-size: 12px;
}
```

- **COMMIT: Navbar**

### ステップ：ルート

- React RouterDOMをインストールします
```
yarn add react-router-dom@6.2.1 @types/react-router-dom@5.3.2
```

```js
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

- **COMMIT: Routes**

### ステップ：フォーム画面

```js
const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
};
```

```js
<div className="dsmovie-form-container">
    <img className="dsmovie-movie-card-image" src="url" alt="The Witcher" />
    <div className="dsmovie-card-bottom-container">
        <h3>"The Witcher"</h3>
        <form className="dsmovie-form">
            <div className="form-group dsmovie-form-group">
                <label htmlFor="email">あなたの電子メールを知らせなさい</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group dsmovie-form-group">
                <label htmlFor="score">レビューを報告する</label>
                <select className="form-control" id="score">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="dsmovie-form-btn-container">
                <button type="submit" className="btn btn-primary dsmovie-btn">保存する</button>
            </div>
        </form >
        <button className="btn btn-primary dsmovie-btn mt-3">キャンセル</button>
    </div >
</div >
```

```css
.dsmovie-form-container {
    max-width: 480px;
    margin: 40px auto;
    padding: 20px;
}

.dsmovie-form {
    width: calc(100% - 20px);
}

.dsmovie-form-group {
    margin-bottom: 20px;
}

.dsmovie-form-group label {
    font-size: 12px;
    color: #aaa;
}

.dsmovie-form-btn-container {
    display: flex;
    justify-content: center;
}

.dsmovie-movie-card-image {
    width: 100%;
    border-radius: 8px 8px 0 0;
}

.dsmovie-card-bottom-container {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 20px 10px;
    border-radius: 0 0 8px 8px;
}

.dsmovie-card-bottom-container h3 {
    color: #4A4A4A;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
    min-height: 40px;
}

.dsmovie-btn {
    background-color: var(--color-primary);
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

- **COMMIT: Form layout**

### ステップ：ページネーション

```js
<div className="dsmovie-pagination-container">
    <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true} >
            <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false} >
            <Arrow className="dsmovie-flip-horizontal" />
        </button>
    </div>
</div>
```

```css
.dsmovie-pagination-container {
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dsmovie-pagination-box {
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dsmovie-pagination-box form {
    width: 100%;
    display: flex;
}

.dsmovie-pagination-button {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-primary);
    cursor: pointer;
}

.dsmovie-pagination-button svg {
    filter: brightness(0) saturate(100%) invert(26%) sepia(19%) saturate(7395%) hue-rotate(234deg) brightness(89%) contrast(92%);
}

.dsmovie-pagination-button:disabled {
    border: 1px solid #c2c2c2;
    cursor: unset;
}

.dsmovie-pagination-button:disabled svg {
    filter: none;
}

.dsmovie-pagination-container p {
    margin: 0;
    font-size: 12px;
    color: var(--color-primary);
}

.dsmovie-flip-horizontal {
    transform: rotate(180deg);
}
```

- **COMMIT: Pagination layout**

### ステップ：MovieCard

#### MovieStars

```js
<div className="dsmovie-stars-container">
  <StarFull />
  <StarFull />
  <StarFull />
  <StarHalf />
  <StarEmpty />
</div>
```

```css
.dsmovie-stars-container {
    width: 130px;
    display: flex;
    justify-content: space-between;
}

.dsmovie-stars-container svg {
    width: 22px;
    height: auto;
}
```

#### MovieScore

```js
<div className="dsmovie-score-container">
    <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
    <MovieStars />
    <p className="dsmovie-score-count">{count} 評価</p>
</div>
```

```css
.dsmovie-score-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dsmovie-score-value {
    margin: 0;
    color: #FFBB3A;
    font-size: 16px;
    font-weight: 700;
}

.dsmovie-score-count {
    font-size: 12px;
    color: #989898;
    margin: 4px 0 10px 0;
}
```

#### MovieCard

```js
<div>
    <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
    <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />
        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
    </div>
</div>
```

- **COMMIT: MovieCard**

### ステップ：ボタンナビゲーション

- **COMMIT: Navigation buttons**


## とても良い！

![とても良い](https://raw.githubusercontent.com/devsuperior/bds-assets/main/img/trophy.png)
