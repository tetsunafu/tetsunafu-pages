# 世界の国クイズ用データ

`data/countries.json` は、世界の国クイズで読み込む国別データです。217件を含みます。HTMLへJSONを直接貼り付けず、GitHub Pagesから `fetch()` で取得してください。

## GitHub Pagesで公開する

1. GitHubで新しい **Public repository** を作成します（例：`world-country-quiz`）。
2. このフォルダの中身をリポジトリ直下へアップロードします。`data/countries.json` の階層を保ってください。
3. HTMLファイルも同じリポジトリへ追加します（例：`index.html`）。
4. GitHubの **Settings → Pages** を開き、公開元を `Deploy from a branch`、ブランチを `main`、フォルダを `/ (root)` に設定して保存します。
5. 公開されたURL（通常 `https://ユーザー名.github.io/リポジトリ名/`）でページを開きます。

## HTMLからの読み込み

同じGitHub Pagesサイト内なら、相対URLを使うとユーザー名やリポジトリ名をコードに固定せずに済みます。

```js
const response = await fetch("./data/countries.json");
if (!response.ok) throw new Error(`データ取得に失敗しました: ${response.status}`);
const countryData = await response.json();
const countries = countryData.records;
console.log(`${countries.length}件の国・地域データを読み込みました`);
```

`file://` でHTMLを直接開くと、ブラウザがJSON取得を制限することがあります。GitHub Pages、VS CodeのLive ServerなどHTTP経由で表示してください。

他のサイトからGitHubの生JSONを直接取得する場合は、URLのブランチ名とリポジトリ名を自分のものに置き換えます。

```js
const dataUrl = "https://raw.githubusercontent.com/ユーザー名/リポジトリ名/main/data/countries.json";
```

公開データのURLはキャッシュされる場合があります。データを更新した直後の動作確認はGitHub Pagesの公開完了後に行ってください。

## データの読み方

- `records` が国・地域レコードの配列です。
- `id` はISO 3166-1 alpha-3等の3文字コード、`name_ja` は日本語名です。
- 統計値は指標ごとに `value`、`unit`、`year`、出典情報を持ちます。項目によって統計年が異なります。
- 欠損値は未収録を表し、0とは異なります。`metadata` と `coverage_status` も参照してください。
- `climate.temperature_monthly_c` と `climate.precipitation_monthly_mm` は1月から12月の順です。
- `climate.koppen_geiger_city` は代表都市の分類、`country_area_share_percent` は国土内格子の面積比です。別のデータとして扱ってください。
- 作物データは重量ベースの生産量上位で、輸出額や農業生産額の順位ではありません。

## 出典・ライセンス

データは複数の出典・利用条件が混在します。リポジトリや公開ページに `DATA_SOURCES_AND_LICENSES.md` の帰属表示を含めてください。FAOSTATについてはFAOの追加利用条件も守り、FAOがクイズを承認・推奨しているような表現を避けてください。
