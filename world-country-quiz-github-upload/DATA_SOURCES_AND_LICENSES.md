# データセット利用条件・収録状況

## 収録データと出典

| データ | 出典・ライセンス | 本ファイルでの扱い |
|---|---|---|
| 人口・都市化・GDP・産業構成・面積 | World Bank Indicators / World Development Indicators。指標コードと統計年を国別レコードに保持 | 元データを値・年・指標コード付きで保存 |
| 気温・降水量 | Open-Meteo Historical Weather API (ERA5), CC BY 4.0 | 1991–2020、代表地点の月別値。Open-MeteoとERA5を帰属表示 |
| ケッペン＝ガイガー | Beck et al. Köppen-Geiger V3, CC BY 4.0 | 代表地点はERA5値から算出。国土面積比は1 km GeoTIFFを0.1度へ縮小した格子とNatural Earth国境で別途集計し、解像度・国境による誤差を注記 |
| 電源構成 | Ember Yearly Electricity Data, CC BY 4.0 | 最新利用可能年の発電源別構成比。Net imports等は発電源比率から除外 |
| 農業生産 | FAO FAOSTAT QCL, CC BY 4.0に加えFAO Statistical Database Terms of Use | 国ごとの最新利用可能年の作物生産量上位。出典表記と改変明記を保持 |
| 地図位置・地域 | Natural Earth Admin 0 1:110m, Public Domain | 大陸・小地域・地図ラベル位置。詳細境界地図ではない |

## 公開時の帰属表示案

World Bank Indicators (World Development Indicators); Open-Meteo Historical Weather API / ERA5 (CC BY 4.0); Ember, Yearly Electricity Data (CC BY 4.0); FAO, FAOSTAT Crops and livestock products (CC BY 4.0 and FAO Statistical Database Terms of Use); Natural Earth (Public Domain). Data has been selected, transformed and combined for educational use. FAO does not endorse this site.

## 収録状況（2026-11-15時点）

国名・国コード 217件。気候211件、電源構成200件、作物190件、Natural Earth地理属性167件。未収録は「0」ではなく欠損として残す。個別欠損は `data_quality_report.json` を参照。

## 公開前に残る作業

- Natural Earth 1:110m境界で面積比を集計済みの国は167件。未カバー50件の小地域・領域の補完
- 宗教構成比、主要輸出品、地形特徴など、定義・出典の揃う指標の採否
- Ember等の国名・コード不一致およびデータ未掲載の地域の個別確認
- 更新日を固定した再現用スナップショットの保存と帰属表示の最終確認

