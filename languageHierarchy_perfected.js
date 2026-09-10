/*
 * 世界の言語 — Language Hierarchy / Database
 * Version 4.0.0
 * Updated: 2026-09-10
 * Data enrichment: Glottolog 5.3 / ISO 639-3 / Ethnologue 2026 public summaries / Wikipedia
 */
const languageDatabase = {
    "meta": {
        "name": "世界の言語",
        "version": "4.0.0",
        "updated": "2026-09-10",
        "languageCount": 220,
        "description": "世界の主要言語を、現代語・歴史的言語・特殊な成立形態に分け、語族→語派→語群→言語の可変深度で表示するためのサイト用データベース。データの出典と不確実性を明示し、後から更新可能な構造としている。",
        "sources": [
            "Glottolog 5.3（系統分類・Glottocode・ISO 639-3対応・地理情報の主要参照資料）",
            "ISO 639-3（言語コード確認）",
            "Ethnologue 2026（話者数。公開範囲で確認可能な値について、Wikipediaの集計表も照合）",
            "Wikipedia（個別言語の概説・自称・文字・公用語・話者数の補助確認）"
        ],
        "notes": [
            "話者数・ISOコード・地域・文字等は空欄を許容し、後から個別に補完できる設計。",
            "分類には学説差があるため、classification.status と notes で例外を表現する。",
            "話者数は特に資料差が大きいため、未確認値を推測で補完しない。",
            "2026年版のEthnologue公開集計で確認できる主要言語について話者数を更新した。"
        ],
        "designPrinciples": [
            "分類階層の深さを固定しない",
            "系統分類(tree)と各言語の詳細情報(languages)を分離する",
            "現代語・歴史的言語・クレオール/ピジン・人工言語を同一のUIで扱いつつ、意味の違いはtypeで保持する",
            "分類に議論がある言語について断定的な系統関係を作らない"
        ],
        "sourceNote": "系統分類はGlottolog 5.3を主要な参照資料として整理し、言語コード・使用地域・文字等は複数の公開資料で確認した。話者数は資料・調査年により差が大きいため、数値を掲載する場合は推定年と出典を併記する。分類には学説差があり、Glottolog自身も分類が研究の進展により変更され得ることを明記している。",
        "dataPolicy": {
            "speakerCounts": "話者数は資料間で定義・調査年・言語/方言の切り分けが異なるため、出典と年を併記。十分に比較可能な信頼できる数値が確認できない場合は推測値を入れずnullを維持する。",
            "officialStatus": "official.countriesは「国家・自治体等で公用語／共同公用語として法的地位を持つ」ことを基本とし、単なる承認・少数言語保護は原則として別扱いとする。",
            "nativeNames": "nativeNameは代表的な自称。複数標準・複数文字・歴史語の場合はnotesで補足する。",
            "classification": "系統分類はGlottolog 5.3を主要参照とするが、分類に議論がある場合は断定を避ける。"
        },
        "provenance": {
            "description": "データ構造の設計、分類の整理、説明文の作成、公開資料に基づくメタデータ補完案の作成に生成AIを利用しています。"
        }
    },
    "tree": {
        "id": "world_languages",
        "name": "世界の言語",
        "type": "root",
        "category": "Root",
        "color": "#64748b",
        "description": "世界の言語を、現在の使用状況と歴史的・社会的性格を考慮しながら階層的に整理した表示用ルート。",
        "children": [
            {
                "children": [
                    {
                        "id": "class_node",
                        "name": "インド・ヨーロッパ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "ゲルマン語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "class_node",
                                        "name": "西ゲルマン語群",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "english",
                                                "name": "英語",
                                                "type": "language",
                                                "desc": "インド・ヨーロッパ語族・ゲルマン語派の西ゲルマン語群に属する。世界的な共通語として広く用いられ、フランス語などロマンス諸語由来の語彙も多い。"
                                            },
                                            {
                                                "id": "german",
                                                "name": "ドイツ語",
                                                "type": "language",
                                                "desc": "西ゲルマン語群の主要言語。名詞の格・性・数を文法的に区別し、ドイツ、オーストリア、スイスなどで重要な公用語である。"
                                            },
                                            {
                                                "id": "dutch",
                                                "name": "オランダ語",
                                                "type": "language",
                                                "desc": "西ゲルマン語群の言語。英語・ドイツ語と近縁で、オランダやベルギー北部を中心に用いられる。"
                                            },
                                            {
                                                "id": "afrikaans",
                                                "name": "アフリカーンス語",
                                                "type": "language",
                                                "desc": "西ゲルマン語群の言語。17世紀以降のケープ地域のオランダ語を基盤に発達し、南アフリカ・ナミビアなどで用いられる。"
                                            },
                                            {
                                                "id": "yiddish",
                                                "name": "イディッシュ語",
                                                "type": "language",
                                                "desc": "西ゲルマン語群に属する言語。中東欧のユダヤ人社会で発達し、伝統的にはヘブライ文字で表記される。"
                                            }
                                        ],
                                        "description": "西ゲルマン語群に属する分類単位。"
                                    },
                                    {
                                        "id": "class_node",
                                        "name": "北ゲルマン語群",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "swedish",
                                                "name": "スウェーデン語",
                                                "type": "language",
                                                "desc": "北ゲルマン語群の主要言語。スウェーデンとフィンランドの一部で公用語として用いられる。"
                                            },
                                            {
                                                "id": "danish",
                                                "name": "デンマーク語",
                                                "type": "language",
                                                "desc": "北ゲルマン語群の言語。デンマークの公用語で、独特の音韻特徴を持つ。"
                                            },
                                            {
                                                "id": "norwegian",
                                                "name": "ノルウェー語",
                                                "type": "language",
                                                "desc": "北ゲルマン語群の言語。ノルウェー語にはブークモールとニーノシュクという二つの公的な書記規範がある。"
                                            },
                                            {
                                                "id": "icelandic",
                                                "name": "アイスランド語",
                                                "type": "language",
                                                "desc": "北ゲルマン語群の言語。古ノルド語からの形態を比較的よく保存していることで知られる。"
                                            },
                                            {
                                                "id": "faroese",
                                                "name": "フェロー語",
                                                "type": "language",
                                                "desc": "北ゲルマン語群の言語。フェロー諸島で話され、アイスランド語やノルウェー語と系統的に近い。"
                                            }
                                        ],
                                        "description": "北ゲルマン語群に属する分類単位。"
                                    }
                                ],
                                "description": "ゲルマン語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "イタリック語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "class_node",
                                        "name": "ロマンス語群",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "spanish",
                                                "name": "スペイン語",
                                                "type": "language",
                                                "desc": "ロマンス語群の主要言語。スペインから中南米へ広がり、母語話者数・学習者数ともに世界有数である。"
                                            },
                                            {
                                                "id": "french",
                                                "name": "フランス語",
                                                "type": "language",
                                                "desc": "ロマンス語群の主要言語。フランスを中心に、アフリカ、北米などにも広く分布する国際語である。"
                                            },
                                            {
                                                "id": "italian",
                                                "name": "イタリア語",
                                                "type": "language",
                                                "desc": "ロマンス語群の言語。イタリアを中心に用いられ、ラテン語からの発展を比較的明瞭にたどれる。"
                                            },
                                            {
                                                "id": "portuguese",
                                                "name": "ポルトガル語",
                                                "type": "language",
                                                "desc": "ロマンス語群の主要言語。ポルトガルからブラジルを中心とする南米・アフリカなどへ広がった。"
                                            },
                                            {
                                                "id": "romanian",
                                                "name": "ルーマニア語",
                                                "type": "language",
                                                "desc": "ロマンス語群の言語。東欧に位置しながらラテン語を祖とするロマンス諸語の一つである。"
                                            },
                                            {
                                                "id": "catalan",
                                                "name": "カタルーニャ語",
                                                "type": "language",
                                                "desc": "ロマンス語群の言語。スペイン東部、アンドラ、フランス南部などで用いられる。"
                                            },
                                            {
                                                "id": "galician",
                                                "name": "ガリシア語",
                                                "type": "language",
                                                "desc": "イベリア・ロマンス諸語の一つ。スペイン北西部で話され、ポルトガル語と歴史的に近い関係を持つ。"
                                            },
                                            {
                                                "id": "occitan",
                                                "name": "オック語",
                                                "type": "language",
                                                "desc": "南フランスを中心に歴史的に話されてきたロマンス語。中世のトルバドゥール文学でも重要である。"
                                            },
                                            {
                                                "id": "sardinian",
                                                "name": "サルデーニャ語",
                                                "type": "language",
                                                "desc": "サルデーニャ島で話されるロマンス語。ロマンス諸語の中でも保守的な特徴を比較的多く残すことで知られる。"
                                            },
                                            {
                                                "id": "sicilian",
                                                "name": "シチリア語",
                                                "type": "language",
                                                "desc": "シチリア島を中心に話されるロマンス語。地中海の多様な言語との接触を受けた豊かな語彙を持つ。"
                                            }
                                        ],
                                        "description": "ロマンス語群に属する分類単位。"
                                    }
                                ],
                                "description": "イタリック語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "スラヴ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "class_node",
                                        "name": "東スラヴ語群",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "russian",
                                                "name": "ロシア語",
                                                "type": "language",
                                                "desc": "東スラヴ語群の主要言語。キリル文字を用い、ロシアを中心にユーラシア各地で話される。"
                                            },
                                            {
                                                "id": "ukrainian",
                                                "name": "ウクライナ語",
                                                "type": "language",
                                                "desc": "東スラヴ語群の言語。ウクライナを中心に用い、ポーランド語など周辺諸語との接触も受けてきた。"
                                            },
                                            {
                                                "id": "belarusian",
                                                "name": "ベラルーシ語",
                                                "type": "language",
                                                "desc": "東スラヴ語群の言語。ベラルーシを中心に話され、ロシア語・ウクライナ語と近縁である。"
                                            }
                                        ],
                                        "description": "東スラヴ語群に属する分類単位。"
                                    },
                                    {
                                        "id": "class_node",
                                        "name": "西スラヴ語群",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "polish",
                                                "name": "ポーランド語",
                                                "type": "language",
                                                "desc": "西スラヴ語群の主要言語。ポーランドの公用語で、ラテン文字による正書法を用いる。"
                                            },
                                            {
                                                "id": "czech",
                                                "name": "チェコ語",
                                                "type": "language",
                                                "desc": "西スラヴ語群の言語。チェコの公用語で、スロバキア語とは特に近い関係にある。"
                                            },
                                            {
                                                "id": "slovak",
                                                "name": "スロバキア語",
                                                "type": "language",
                                                "desc": "西スラヴ語群の言語。スロバキアの公用語で、チェコ語との近さが特徴的である。"
                                            },
                                            {
                                                "id": "sorbian",
                                                "name": "ソルブ語",
                                                "type": "language",
                                                "desc": "西スラヴ語群の少数言語。ドイツ東部のラウジッツ地方を中心に話される。"
                                            }
                                        ],
                                        "description": "西スラヴ語群に属する分類単位。"
                                    },
                                    {
                                        "id": "class_node",
                                        "name": "南スラヴ語群",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "bulgarian",
                                                "name": "ブルガリア語",
                                                "type": "language",
                                                "desc": "南スラヴ語群の言語。現代スラヴ諸語では格変化が大幅に失われ、後置定冠詞などバルカン言語圏的特徴を持つ。"
                                            },
                                            {
                                                "id": "macedonian",
                                                "name": "マケドニア語",
                                                "type": "language",
                                                "desc": "南スラヴ語群の言語。北マケドニアの公用語で、ブルガリア語などと近縁である。"
                                            },
                                            {
                                                "id": "serbian",
                                                "name": "セルビア語",
                                                "type": "language",
                                                "desc": "南スラヴ語群の言語。キリル文字とラテン文字の双方が広く用いられる。"
                                            },
                                            {
                                                "id": "croatian",
                                                "name": "クロアチア語",
                                                "type": "language",
                                                "desc": "南スラヴ語群の言語。クロアチアの公用語で、ラテン文字を用いる。"
                                            },
                                            {
                                                "id": "bosnian",
                                                "name": "ボスニア語",
                                                "type": "language",
                                                "desc": "南スラヴ語群の言語。ボスニア・ヘルツェゴビナで用いられ、セルビア語・クロアチア語と近い関係にある。"
                                            },
                                            {
                                                "id": "slovenian",
                                                "name": "スロベニア語",
                                                "type": "language",
                                                "desc": "南スラヴ語群の言語。スロベニアの公用語で、現代ヨーロッパの標準語としては珍しく双数を保持する。"
                                            }
                                        ],
                                        "description": "南スラヴ語群に属する分類単位。"
                                    }
                                ],
                                "description": "スラヴ語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "インド・イラン語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "class_node",
                                        "name": "インド・アーリア語群",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "hindi",
                                                "name": "ヒンディー語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群の主要言語。インド北部を中心に広く用い、標準語はデーヴァナーガリー文字で書かれる。"
                                            },
                                            {
                                                "id": "bengali",
                                                "name": "ベンガル語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群の主要言語。バングラデシュとインド東部を中心に話され、豊かな文学文化を持つ。"
                                            },
                                            {
                                                "id": "urdu",
                                                "name": "ウルドゥー語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群の言語。ヒンディー語と日常口語の基盤を大きく共有する一方、標準的な書記言語ではペルシア・アラビア系語彙とアラビア文字系表記が特徴的である。"
                                            },
                                            {
                                                "id": "western_punjabi",
                                                "name": "西パンジャーブ語",
                                                "type": "language",
                                                "desc": "パンジャーブ語群の主要変種の一つ。パキスタンのパンジャーブ地方を中心に話される。"
                                            },
                                            {
                                                "id": "marathi",
                                                "name": "マラーティー語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群の言語。インド西部のマハーラーシュトラ州を中心に話される。"
                                            },
                                            {
                                                "id": "gujarati",
                                                "name": "グジャラート語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群の言語。インド西部を中心に話され、独自のグジャラート文字を用いる。"
                                            },
                                            {
                                                "id": "bhojpuri",
                                                "name": "ボージュプリー語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群の言語。インド北部やネパール南部などに広く分布する。"
                                            },
                                            {
                                                "id": "assamese",
                                                "name": "アッサム語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群の東部語。インド北東部アッサム州を中心に話される。"
                                            },
                                            {
                                                "id": "odia",
                                                "name": "オディア語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群の言語。インド東部オディシャ州を中心に話され、独自の丸みを帯びた文字を持つ。"
                                            },
                                            {
                                                "id": "nepali",
                                                "name": "ネパール語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群の言語。ネパールの主要公用語で、デーヴァナーガリー文字を用いる。"
                                            },
                                            {
                                                "id": "sinhala",
                                                "name": "シンハラ語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群の言語。スリランカを中心に話され、独自の丸みを帯びたシンハラ文字を用いる。"
                                            },
                                            {
                                                "id": "sindhi",
                                                "name": "シンド語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群の言語。パキスタンのシンド州などで話され、地域によって複数の文字が使われる。"
                                            },
                                            {
                                                "id": "kashmiri",
                                                "name": "カシミール語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群のダルド諸語に分類される言語。カシミール地域を中心に話される。"
                                            },
                                            {
                                                "id": "konkani",
                                                "name": "コンカニ語",
                                                "type": "language",
                                                "desc": "インド・アーリア語群の言語。インド西岸に沿って分布し、地域によって異なる文字が使われる。"
                                            },
                                            {
                                                "id": "romani",
                                                "name": "ロマ語",
                                                "type": "language",
                                                "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「インド・イラン語派 → インド・アーリア語群」で表されます。"
                                            }
                                        ],
                                        "description": "インド・アーリア語群に属する分類単位。"
                                    },
                                    {
                                        "id": "class_node",
                                        "name": "イラン語群",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "persian",
                                                "name": "ペルシア語",
                                                "type": "language",
                                                "desc": "イラン語群の主要言語。イラン、アフガニスタン、中央アジアなどに歴史的・文化的影響を持つ。"
                                            },
                                            {
                                                "id": "pashto",
                                                "name": "パシュトー語",
                                                "type": "language",
                                                "desc": "イラン語群の言語。アフガニスタンとパキスタン西部を中心に話される。"
                                            },
                                            {
                                                "id": "kurdish",
                                                "name": "クルド語",
                                                "type": "language",
                                                "desc": "イラン語群の言語群。クルド人社会で用いられ、複数の主要変種と複数の標準表記がある。"
                                            },
                                            {
                                                "id": "tajik",
                                                "name": "タジク語",
                                                "type": "language",
                                                "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「インド・イラン語派 → イラン語群」で表されます。"
                                            },
                                            {
                                                "id": "balochi",
                                                "name": "バローチー語",
                                                "type": "language",
                                                "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「インド・イラン語派 → イラン語群」で表されます。"
                                            },
                                            {
                                                "id": "ossetian",
                                                "name": "オセット語",
                                                "type": "language",
                                                "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「インド・イラン語派 → イラン語群」で表されます。"
                                            }
                                        ],
                                        "description": "イラン語群に属する分類単位。"
                                    }
                                ],
                                "description": "インド・イラン語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "ギリシア語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "greek",
                                        "name": "ギリシア語",
                                        "type": "language",
                                        "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ギリシア語派」で表されます。"
                                    }
                                ],
                                "description": "ギリシア語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "アルバニア語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "albanian",
                                        "name": "アルバニア語",
                                        "type": "language",
                                        "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「アルバニア語派」で表されます。"
                                    }
                                ],
                                "description": "アルバニア語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "アルメニア語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "armenian",
                                        "name": "アルメニア語",
                                        "type": "language",
                                        "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「アルメニア語派」で表されます。"
                                    }
                                ],
                                "description": "アルメニア語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "バルト語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "lithuanian",
                                        "name": "リトアニア語",
                                        "type": "language",
                                        "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「バルト語派」で表されます。"
                                    },
                                    {
                                        "id": "latvian",
                                        "name": "ラトビア語",
                                        "type": "language",
                                        "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「バルト語派」で表されます。"
                                    }
                                ],
                                "description": "バルト語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "ケルト語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "class_node",
                                        "name": "島嶼ケルト語",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "irish",
                                                "name": "アイルランド語",
                                                "type": "language",
                                                "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ケルト語派 → 島嶼ケルト語」で表されます。"
                                            },
                                            {
                                                "id": "scottish_gaelic",
                                                "name": "スコットランド・ゲール語",
                                                "type": "language",
                                                "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ケルト語派 → 島嶼ケルト語」で表されます。"
                                            },
                                            {
                                                "id": "welsh",
                                                "name": "ウェールズ語",
                                                "type": "language",
                                                "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ケルト語派 → 島嶼ケルト語」で表されます。"
                                            },
                                            {
                                                "id": "breton",
                                                "name": "ブルトン語",
                                                "type": "language",
                                                "desc": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ケルト語派 → 島嶼ケルト語」で表されます。"
                                            }
                                        ],
                                        "description": "島嶼ケルト語に属する分類単位。"
                                    }
                                ],
                                "description": "ケルト語派に属する分類単位。"
                            }
                        ],
                        "description": "ヨーロッパから南アジアに広がる巨大な語族。ゲルマン・ロマンス・スラヴ・インド・イランなど多数の語派を含む。"
                    },
                    {
                        "id": "class_node",
                        "name": "シナ・チベット語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "シナ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "mandarin_chinese",
                                        "name": "標準中国語",
                                        "type": "language",
                                        "desc": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。"
                                    },
                                    {
                                        "id": "cantonese",
                                        "name": "広東語",
                                        "type": "language",
                                        "desc": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。"
                                    },
                                    {
                                        "id": "wu_chinese",
                                        "name": "呉語",
                                        "type": "language",
                                        "desc": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。"
                                    },
                                    {
                                        "id": "southern_min",
                                        "name": "閩南語",
                                        "type": "language",
                                        "desc": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。"
                                    },
                                    {
                                        "id": "eastern_min",
                                        "name": "閩東語",
                                        "type": "language",
                                        "desc": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。"
                                    },
                                    {
                                        "id": "hakka",
                                        "name": "客家語",
                                        "type": "language",
                                        "desc": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。"
                                    },
                                    {
                                        "id": "jin_chinese",
                                        "name": "晋語",
                                        "type": "language",
                                        "desc": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。"
                                    },
                                    {
                                        "id": "xiang_chinese",
                                        "name": "湘語",
                                        "type": "language",
                                        "desc": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。"
                                    }
                                ],
                                "description": "シナ語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "チベット諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "tibetan",
                                        "name": "チベット語",
                                        "type": "language",
                                        "desc": "シナ・チベット語族に分類される言語。より細かな分類は「チベット諸語」で表されます。"
                                    }
                                ],
                                "description": "チベット諸語に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "ロロ・ビルマ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "burmese",
                                        "name": "ビルマ語",
                                        "type": "language",
                                        "desc": "シナ・チベット語族に分類される言語。より細かな分類は「ロロ・ビルマ語派」で表されます。"
                                    }
                                ],
                                "description": "ロロ・ビルマ語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "カレン諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "karen_languages",
                                        "name": "カレン諸語",
                                        "type": "language",
                                        "desc": "シナ・チベット語族に分類される言語。より細かな分類は「カレン諸語」で表されます。"
                                    }
                                ],
                                "description": "カレン諸語に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "クキ・チン・メイテイ諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "meitei",
                                        "name": "メイテイ語",
                                        "type": "language",
                                        "desc": "シナ・チベット語族に分類される言語。より細かな分類は「クキ・チン・メイテイ諸語」で表されます。"
                                    }
                                ],
                                "description": "クキ・チン・メイテイ諸語に属する分類単位。"
                            }
                        ],
                        "description": "東アジアから南アジアに広がる大語族。中国諸語とチベット・ビルマ系諸語などを含む。"
                    },
                    {
                        "id": "class_node",
                        "name": "アフロ・アジア語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "セム語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "modern_standard_arabic",
                                        "name": "現代標準アラビア語",
                                        "type": "language",
                                        "desc": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。"
                                    },
                                    {
                                        "id": "hebrew",
                                        "name": "ヘブライ語",
                                        "type": "language",
                                        "desc": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。"
                                    },
                                    {
                                        "id": "amharic",
                                        "name": "アムハラ語",
                                        "type": "language",
                                        "desc": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。"
                                    },
                                    {
                                        "id": "tigrinya",
                                        "name": "ティグリニャ語",
                                        "type": "language",
                                        "desc": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。"
                                    },
                                    {
                                        "id": "maltese",
                                        "name": "マルタ語",
                                        "type": "language",
                                        "desc": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。"
                                    },
                                    {
                                        "id": "class_node",
                                        "name": "アラビア語",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "egyptian_arabic",
                                                "name": "エジプト・アラビア語",
                                                "type": "language",
                                                "desc": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派 → アラビア語」で表されます。"
                                            },
                                            {
                                                "id": "levantine_arabic",
                                                "name": "レバント・アラビア語",
                                                "type": "language",
                                                "desc": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派 → アラビア語」で表されます。"
                                            },
                                            {
                                                "id": "moroccan_arabic",
                                                "name": "モロッコ・アラビア語",
                                                "type": "language",
                                                "desc": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派 → アラビア語」で表されます。"
                                            }
                                        ],
                                        "description": "アラビア語に属する分類単位。"
                                    }
                                ],
                                "description": "セム語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "チャド語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "hausa",
                                        "name": "ハウサ語",
                                        "type": "language",
                                        "desc": "アフロ・アジア語族に分類される言語。より細かな分類は「チャド語派」で表されます。"
                                    }
                                ],
                                "description": "チャド語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "クシ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "somali",
                                        "name": "ソマリ語",
                                        "type": "language",
                                        "desc": "アフロ・アジア語族に分類される言語。より細かな分類は「クシ語派」で表されます。"
                                    },
                                    {
                                        "id": "oromo",
                                        "name": "オロモ語",
                                        "type": "language",
                                        "desc": "アフロ・アジア語族に分類される言語。より細かな分類は「クシ語派」で表されます。"
                                    }
                                ],
                                "description": "クシ語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "ベルベル語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "kabyle",
                                        "name": "カビル語",
                                        "type": "language",
                                        "desc": "アフロ・アジア語族に分類される言語。より細かな分類は「ベルベル語派」で表されます。"
                                    }
                                ],
                                "description": "ベルベル語派に属する分類単位。"
                            }
                        ],
                        "description": "北アフリカ・西アジア・東アフリカに分布する語族。セム・ベルベル・クシ・チャドなどを含む。"
                    },
                    {
                        "id": "class_node",
                        "name": "オーストロネシア語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "マレー・ポリネシア語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "indonesian",
                                        "name": "インドネシア語",
                                        "type": "language",
                                        "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。"
                                    },
                                    {
                                        "id": "malay",
                                        "name": "マレー語",
                                        "type": "language",
                                        "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。"
                                    },
                                    {
                                        "id": "javanese",
                                        "name": "ジャワ語",
                                        "type": "language",
                                        "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。"
                                    },
                                    {
                                        "id": "sundanese",
                                        "name": "スンダ語",
                                        "type": "language",
                                        "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。"
                                    },
                                    {
                                        "id": "madurese",
                                        "name": "マドゥラ語",
                                        "type": "language",
                                        "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。"
                                    },
                                    {
                                        "id": "malagasy",
                                        "name": "マダガスカル語",
                                        "type": "language",
                                        "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。"
                                    },
                                    {
                                        "id": "fijian",
                                        "name": "フィジー語",
                                        "type": "language",
                                        "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。"
                                    },
                                    {
                                        "id": "palauan",
                                        "name": "パラオ語",
                                        "type": "language",
                                        "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。"
                                    },
                                    {
                                        "id": "chamorro",
                                        "name": "チャモロ語",
                                        "type": "language",
                                        "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。"
                                    },
                                    {
                                        "id": "class_node",
                                        "name": "フィリピン諸語",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "tagalog",
                                                "name": "タガログ語",
                                                "type": "language",
                                                "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → フィリピン諸語」で表されます。"
                                            },
                                            {
                                                "id": "cebuano",
                                                "name": "セブアノ語",
                                                "type": "language",
                                                "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → フィリピン諸語」で表されます。"
                                            },
                                            {
                                                "id": "ilocano",
                                                "name": "イロカノ語",
                                                "type": "language",
                                                "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → フィリピン諸語」で表されます。"
                                            }
                                        ],
                                        "description": "フィリピン諸語に属する分類単位。"
                                    },
                                    {
                                        "id": "class_node",
                                        "name": "ポリネシア諸語",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "m_ori",
                                                "name": "マオリ語",
                                                "type": "language",
                                                "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。"
                                            },
                                            {
                                                "id": "hawaiian",
                                                "name": "ハワイ語",
                                                "type": "language",
                                                "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。"
                                            },
                                            {
                                                "id": "samoan",
                                                "name": "サモア語",
                                                "type": "language",
                                                "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。"
                                            },
                                            {
                                                "id": "tongan",
                                                "name": "トンガ語",
                                                "type": "language",
                                                "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。"
                                            },
                                            {
                                                "id": "tahitian",
                                                "name": "タヒチ語",
                                                "type": "language",
                                                "desc": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。"
                                            }
                                        ],
                                        "description": "ポリネシア諸語に属する分類単位。"
                                    }
                                ],
                                "description": "マレー・ポリネシア語派に属する分類単位。"
                            }
                        ],
                        "description": "台湾から東南アジア・太平洋・マダガスカルまで広大な海域に分布する語族。"
                    },
                    {
                        "id": "class_node",
                        "name": "オーストロアジア語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "モン・クメール語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "vietnamese",
                                        "name": "ベトナム語",
                                        "type": "language",
                                        "desc": "オーストロアジア語族に分類される言語。より細かな分類は「モン・クメール語派」で表されます。"
                                    },
                                    {
                                        "id": "khmer",
                                        "name": "クメール語",
                                        "type": "language",
                                        "desc": "オーストロアジア語族に分類される言語。より細かな分類は「モン・クメール語派」で表されます。"
                                    },
                                    {
                                        "id": "mon",
                                        "name": "モン語",
                                        "type": "language",
                                        "desc": "オーストロアジア語族に分類される言語。より細かな分類は「モン・クメール語派」で表されます。"
                                    }
                                ],
                                "description": "モン・クメール語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "ムンダ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "santali",
                                        "name": "サンタル語",
                                        "type": "language",
                                        "desc": "オーストロアジア語族に分類される言語。より細かな分類は「ムンダ語派」で表されます。"
                                    },
                                    {
                                        "id": "mundari",
                                        "name": "ムンダリ語",
                                        "type": "language",
                                        "desc": "オーストロアジア語族に分類される言語。より細かな分類は「ムンダ語派」で表されます。"
                                    }
                                ],
                                "description": "ムンダ語派に属する分類単位。"
                            }
                        ],
                        "description": "東南アジア大陸部とインド東部を中心に分布する語族。ベトナム語・クメール語などを含む。"
                    },
                    {
                        "id": "class_node",
                        "name": "ドラヴィダ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "南ドラヴィダ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "tamil",
                                        "name": "タミル語",
                                        "type": "language",
                                        "desc": "ドラヴィダ語族に分類される言語。より細かな分類は「南ドラヴィダ語派」で表されます。"
                                    },
                                    {
                                        "id": "kannada",
                                        "name": "カンナダ語",
                                        "type": "language",
                                        "desc": "ドラヴィダ語族に分類される言語。より細かな分類は「南ドラヴィダ語派」で表されます。"
                                    },
                                    {
                                        "id": "malayalam",
                                        "name": "マラヤーラム語",
                                        "type": "language",
                                        "desc": "ドラヴィダ語族に分類される言語。より細かな分類は「南ドラヴィダ語派」で表されます。"
                                    },
                                    {
                                        "id": "tulu",
                                        "name": "トゥル語",
                                        "type": "language",
                                        "desc": "ドラヴィダ語族に分類される言語。より細かな分類は「南ドラヴィダ語派」で表されます。"
                                    }
                                ],
                                "description": "南ドラヴィダ語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "南中央ドラヴィダ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "telugu",
                                        "name": "テルグ語",
                                        "type": "language",
                                        "desc": "ドラヴィダ語族に分類される言語。より細かな分類は「南中央ドラヴィダ語派」で表されます。"
                                    },
                                    {
                                        "id": "gondi",
                                        "name": "ゴーンディー語",
                                        "type": "language",
                                        "desc": "ドラヴィダ語族に分類される言語。より細かな分類は「南中央ドラヴィダ語派」で表されます。"
                                    }
                                ],
                                "description": "南中央ドラヴィダ語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "北ドラヴィダ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "brahui",
                                        "name": "ブラーフイー語",
                                        "type": "language",
                                        "desc": "ドラヴィダ語族に分類される言語。より細かな分類は「北ドラヴィダ語派」で表されます。"
                                    }
                                ],
                                "description": "北ドラヴィダ語派に属する分類単位。"
                            }
                        ],
                        "description": "主に南インドと周辺地域に分布する語族。タミル語・テルグ語などを含む。"
                    },
                    {
                        "id": "class_node",
                        "name": "テュルク語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "オグズ語群",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "turkish",
                                        "name": "トルコ語",
                                        "type": "language",
                                        "desc": "テュルク語族に分類される言語。より細かな分類は「オグズ語群」で表されます。"
                                    },
                                    {
                                        "id": "azerbaijani",
                                        "name": "アゼルバイジャン語",
                                        "type": "language",
                                        "desc": "テュルク語族に分類される言語。より細かな分類は「オグズ語群」で表されます。"
                                    },
                                    {
                                        "id": "turkmen",
                                        "name": "トルクメン語",
                                        "type": "language",
                                        "desc": "テュルク語族に分類される言語。より細かな分類は「オグズ語群」で表されます。"
                                    },
                                    {
                                        "id": "chuvash",
                                        "name": "チュヴァシ語",
                                        "type": "language",
                                        "desc": "テュルク語族に分類される言語。より細かな分類は「オグズ語群」で表されます。"
                                    }
                                ],
                                "description": "オグズ語群に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "カルルク語群",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "uzbek",
                                        "name": "ウズベク語",
                                        "type": "language",
                                        "desc": "テュルク語族に分類される言語。より細かな分類は「カルルク語群」で表されます。"
                                    },
                                    {
                                        "id": "uyghur",
                                        "name": "ウイグル語",
                                        "type": "language",
                                        "desc": "テュルク語族に分類される言語。より細かな分類は「カルルク語群」で表されます。"
                                    }
                                ],
                                "description": "カルルク語群に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "キプチャク語群",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "kazakh",
                                        "name": "カザフ語",
                                        "type": "language",
                                        "desc": "テュルク語族に分類される言語。より細かな分類は「キプチャク語群」で表されます。"
                                    },
                                    {
                                        "id": "kyrgyz",
                                        "name": "キルギス語",
                                        "type": "language",
                                        "desc": "テュルク語族に分類される言語。より細かな分類は「キプチャク語群」で表されます。"
                                    },
                                    {
                                        "id": "tatar",
                                        "name": "タタール語",
                                        "type": "language",
                                        "desc": "テュルク語族に分類される言語。より細かな分類は「キプチャク語群」で表されます。"
                                    },
                                    {
                                        "id": "bashkir",
                                        "name": "バシキール語",
                                        "type": "language",
                                        "desc": "テュルク語族に分類される言語。より細かな分類は「キプチャク語群」で表されます。"
                                    }
                                ],
                                "description": "キプチャク語群に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "シベリア・テュルク諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "sakha",
                                        "name": "サハ語",
                                        "type": "language",
                                        "desc": "テュルク語族に分類される言語。より細かな分類は「シベリア・テュルク諸語」で表されます。"
                                    }
                                ],
                                "description": "シベリア・テュルク諸語に属する分類単位。"
                            }
                        ],
                        "description": "東ヨーロッパから中央アジア・シベリアまで広く分布する語族。"
                    },
                    {
                        "id": "class_node",
                        "name": "ウラル語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "フィン・ウゴル語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "finnish",
                                        "name": "フィンランド語",
                                        "type": "language",
                                        "desc": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。"
                                    },
                                    {
                                        "id": "estonian",
                                        "name": "エストニア語",
                                        "type": "language",
                                        "desc": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。"
                                    },
                                    {
                                        "id": "mari",
                                        "name": "マリ語",
                                        "type": "language",
                                        "desc": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。"
                                    },
                                    {
                                        "id": "udmurt",
                                        "name": "ウドムルト語",
                                        "type": "language",
                                        "desc": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。"
                                    },
                                    {
                                        "id": "komi",
                                        "name": "コミ語",
                                        "type": "language",
                                        "desc": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。"
                                    },
                                    {
                                        "id": "erzya",
                                        "name": "エルジャ語",
                                        "type": "language",
                                        "desc": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。"
                                    },
                                    {
                                        "id": "moksha",
                                        "name": "モクシャ語",
                                        "type": "language",
                                        "desc": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。"
                                    }
                                ],
                                "description": "フィン・ウゴル語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "ウゴル語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "hungarian",
                                        "name": "ハンガリー語",
                                        "type": "language",
                                        "desc": "ウラル語族に分類される言語。より細かな分類は「ウゴル語派」で表されます。"
                                    }
                                ],
                                "description": "ウゴル語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "サーミ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "northern_sami",
                                        "name": "北サーミ語",
                                        "type": "language",
                                        "desc": "ウラル語族に分類される言語。より細かな分類は「サーミ語派」で表されます。"
                                    }
                                ],
                                "description": "サーミ語派に属する分類単位。"
                            }
                        ],
                        "description": "北東ヨーロッパから西シベリアに分布する語族。フィンランド語・ハンガリー語などを含む。"
                    },
                    {
                        "id": "class_node",
                        "name": "タイ・カダイ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "タイ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "thai",
                                        "name": "タイ語",
                                        "type": "language",
                                        "desc": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。"
                                    },
                                    {
                                        "id": "lao",
                                        "name": "ラオ語",
                                        "type": "language",
                                        "desc": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。"
                                    },
                                    {
                                        "id": "zhuang",
                                        "name": "チワン語",
                                        "type": "language",
                                        "desc": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。"
                                    },
                                    {
                                        "id": "shan",
                                        "name": "シャン語",
                                        "type": "language",
                                        "desc": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。"
                                    },
                                    {
                                        "id": "tai_nuea",
                                        "name": "タイ・ヌア語",
                                        "type": "language",
                                        "desc": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。"
                                    }
                                ],
                                "description": "タイ語派に属する分類単位。"
                            }
                        ],
                        "description": "東南アジア大陸部と中国南部を中心に分布する語族。"
                    },
                    {
                        "id": "class_node",
                        "name": "日琉語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "日本語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "japanese",
                                        "name": "日本語",
                                        "type": "language",
                                        "desc": "日琉語族に属する言語。漢字と仮名を組み合わせる独自の書記体系を発達させ、日本列島を中心に用いられる。"
                                    }
                                ],
                                "description": "日本語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "琉球語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "class_node",
                                        "name": "北琉球諸語",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "amami",
                                                "name": "奄美語",
                                                "type": "language",
                                                "desc": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 北琉球諸語」で表されます。"
                                            }
                                        ],
                                        "description": "北琉球諸語に属する分類単位。"
                                    },
                                    {
                                        "id": "class_node",
                                        "name": "南琉球諸語",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "okinawan",
                                                "name": "沖縄語",
                                                "type": "language",
                                                "desc": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 南琉球諸語」で表されます。"
                                            },
                                            {
                                                "id": "miyako",
                                                "name": "宮古語",
                                                "type": "language",
                                                "desc": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 南琉球諸語」で表されます。"
                                            },
                                            {
                                                "id": "yaeyama",
                                                "name": "八重山語",
                                                "type": "language",
                                                "desc": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 南琉球諸語」で表されます。"
                                            },
                                            {
                                                "id": "yonaguni",
                                                "name": "与那国語",
                                                "type": "language",
                                                "desc": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 南琉球諸語」で表されます。"
                                            }
                                        ],
                                        "description": "南琉球諸語に属する分類単位。"
                                    }
                                ],
                                "description": "琉球語派に属する分類単位。"
                            }
                        ],
                        "description": "日本列島の日本語と琉球諸語からなる語族。"
                    },
                    {
                        "id": "class_node",
                        "name": "朝鮮語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "korean",
                                "name": "朝鮮語",
                                "type": "language",
                                "desc": "朝鮮語族に属する言語。韓国・北朝鮮を中心に用い、ハングルという体系的な文字を持つ。"
                            },
                            {
                                "id": "jeju",
                                "name": "済州語",
                                "type": "language",
                                "desc": "朝鮮語族に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "朝鮮半島を中心に分布する語族。"
                    },
                    {
                        "id": "class_node",
                        "name": "モンゴル語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "mongolian",
                                "name": "モンゴル語",
                                "type": "language",
                                "desc": "モンゴル語族に分類される言語。より細かな分類は「」で表されます。"
                            },
                            {
                                "id": "buryat",
                                "name": "ブリヤート語",
                                "type": "language",
                                "desc": "モンゴル語族に分類される言語。より細かな分類は「」で表されます。"
                            },
                            {
                                "id": "kalmyk",
                                "name": "カルムイク語",
                                "type": "language",
                                "desc": "モンゴル語族に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "モンゴル語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "ニジェール・コンゴ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "バントゥー諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "swahili",
                                        "name": "スワヒリ語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。"
                                    },
                                    {
                                        "id": "zulu",
                                        "name": "ズールー語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。"
                                    },
                                    {
                                        "id": "xhosa",
                                        "name": "コサ語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。"
                                    },
                                    {
                                        "id": "southern_sotho",
                                        "name": "ソト語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。"
                                    },
                                    {
                                        "id": "tswana",
                                        "name": "ツワナ語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。"
                                    },
                                    {
                                        "id": "shona",
                                        "name": "ショナ語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。"
                                    },
                                    {
                                        "id": "lingala",
                                        "name": "リンガラ語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。"
                                    },
                                    {
                                        "id": "kikongo",
                                        "name": "コンゴ語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。"
                                    },
                                    {
                                        "id": "kinyarwanda",
                                        "name": "ルワンダ語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。"
                                    },
                                    {
                                        "id": "kirundi",
                                        "name": "ルンディ語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。"
                                    }
                                ],
                                "description": "バントゥー諸語に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "デファ・ヨルバ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "yoruba",
                                        "name": "ヨルバ語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「デファ・ヨルバ語派」で表されます。"
                                    }
                                ],
                                "description": "デファ・ヨルバ語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "ボルタ・ニジェール語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "igbo",
                                        "name": "イボ語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「ボルタ・ニジェール語派」で表されます。"
                                    },
                                    {
                                        "id": "fon",
                                        "name": "フォン語",
                                        "type": "language",
                                        "desc": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「ボルタ・ニジェール語派」で表されます。"
                                    }
                                ],
                                "description": "ボルタ・ニジェール語派に属する分類単位。"
                            }
                        ],
                        "description": "ニジェール・コンゴ語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "ユト・アステカ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "nahuatl",
                                "name": "ナワトル語",
                                "type": "language",
                                "desc": "ユト・アステカ語族に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "ユト・アステカ語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "マヤ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "yucatec_maya",
                                "name": "ユカテコ語",
                                "type": "language",
                                "desc": "マヤ語族に分類される言語。より細かな分類は「」で表されます。"
                            },
                            {
                                "id": "k_iche",
                                "name": "キチェ語",
                                "type": "language",
                                "desc": "マヤ語族に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "マヤ語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "ケチュア語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "quechua",
                                "name": "ケチュア語",
                                "type": "language",
                                "desc": "ケチュア語族に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "ケチュア語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "アイマラ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "aymara",
                                "name": "アイマラ語",
                                "type": "language",
                                "desc": "アイマラ語族に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "アイマラ語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "トゥピ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "トゥピ・グアラニー語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "guaran",
                                        "name": "グアラニー語",
                                        "type": "language",
                                        "desc": "トゥピ語族に分類される言語。より細かな分類は「トゥピ・グアラニー語派」で表されます。"
                                    }
                                ],
                                "description": "トゥピ・グアラニー語派に属する分類単位。"
                            }
                        ],
                        "description": "トゥピ語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "イロコイ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "北部イロコイ諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "mohawk",
                                        "name": "モホーク語",
                                        "type": "language",
                                        "desc": "イロコイ語族に分類される言語。より細かな分類は「北部イロコイ諸語」で表されます。"
                                    }
                                ],
                                "description": "北部イロコイ諸語に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "南部イロコイ諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "cherokee",
                                        "name": "チェロキー語",
                                        "type": "language",
                                        "desc": "イロコイ語族に分類される言語。より細かな分類は「南部イロコイ諸語」で表されます。"
                                    }
                                ],
                                "description": "南部イロコイ諸語に属する分類単位。"
                            }
                        ],
                        "description": "イロコイ語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "デネ・イェニセイ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "アサバスカ諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "navajo",
                                        "name": "ナバホ語",
                                        "type": "language",
                                        "desc": "デネ・イェニセイ語族に分類される言語。より細かな分類は「アサバスカ諸語」で表されます。"
                                    }
                                ],
                                "description": "アサバスカ諸語に属する分類単位。"
                            }
                        ],
                        "description": "デネ・イェニセイ語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "エスキモー・アレウト語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "イヌイット諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "inuktitut",
                                        "name": "イヌクティトゥット語",
                                        "type": "language",
                                        "desc": "エスキモー・アレウト語族に分類される言語。より細かな分類は「イヌイット諸語」で表されます。"
                                    },
                                    {
                                        "id": "greenlandic",
                                        "name": "グリーンランド語",
                                        "type": "language",
                                        "desc": "エスキモー・アレウト語族に分類される言語。より細かな分類は「イヌイット諸語」で表されます。"
                                    }
                                ],
                                "description": "イヌイット諸語に属する分類単位。"
                            }
                        ],
                        "description": "エスキモー・アレウト語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "パマ・ニュンガ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "pitjantjatjara",
                                "name": "ピチャンチャチャラ語",
                                "type": "language",
                                "desc": "パマ・ニュンガ語族に分類される言語。より細かな分類は「」で表されます。"
                            },
                            {
                                "id": "warlpiri",
                                "name": "ワルピリ語",
                                "type": "language",
                                "desc": "パマ・ニュンガ語族に分類される言語。より細かな分類は「」で表されます。"
                            },
                            {
                                "id": "arrernte",
                                "name": "アレルンテ語",
                                "type": "language",
                                "desc": "パマ・ニュンガ語族に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "パマ・ニュンガ語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "トランス・ニューギニア語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "huli",
                                "name": "フリ語",
                                "type": "language",
                                "desc": "トランス・ニューギニア語族に分類される言語。より細かな分類は「」で表されます。"
                            },
                            {
                                "id": "dani",
                                "name": "ダニ語",
                                "type": "language",
                                "desc": "トランス・ニューギニア語族に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "トランス・ニューギニア語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "チュクチ・カムチャツカ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "chukchi",
                                "name": "チュクチ語",
                                "type": "language",
                                "desc": "チュクチ・カムチャツカ語族に分類される言語。より細かな分類は「」で表されます。"
                            },
                            {
                                "id": "koryak",
                                "name": "コリャーク語",
                                "type": "language",
                                "desc": "チュクチ・カムチャツカ語族に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "チュクチ・カムチャツカ語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "ツングース諸語",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "evenki",
                                "name": "エヴェンキ語",
                                "type": "language",
                                "desc": "ツングース諸語に分類される言語。より細かな分類は「」で表されます。"
                            },
                            {
                                "id": "ulch",
                                "name": "ウルチ語",
                                "type": "language",
                                "desc": "ツングース諸語に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "ツングース諸語に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "ニヴフ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "nivkh",
                                "name": "ニヴフ語",
                                "type": "language",
                                "desc": "ニヴフ語族に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "ニヴフ語族に属する分類単位。"
                    },
                    {
                        "id": "class_node",
                        "name": "孤立語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "basque",
                                "name": "バスク語",
                                "type": "language",
                                "desc": "既知の他言語との確立した系統関係を持たない孤立言語。スペイン北部とフランス南西部のバスク地方で話される。"
                            },
                            {
                                "id": "ainu",
                                "name": "アイヌ語",
                                "type": "language",
                                "desc": "日本列島北部で話されてきた言語。現在の系統的位置づけは確立しておらず、独自の言語文化を持つ。"
                            },
                            {
                                "id": "burushaski",
                                "name": "ブルシャスキー語",
                                "type": "language",
                                "desc": "パキスタン北部の山岳地帯で話される孤立言語。周辺のインド・ヨーロッパ語族やチベット・ビルマ系言語とは系統的に異なる。"
                            },
                            {
                                "id": "zuni",
                                "name": "ズニ語",
                                "type": "language",
                                "desc": "北米南西部で話される先住民言語。一般に孤立言語として扱われる。"
                            },
                            {
                                "id": "y_l_dnye",
                                "name": "イェリ・ドニェ語",
                                "type": "language",
                                "desc": "孤立語族に分類される言語。より細かな分類は「」で表されます。"
                            },
                            {
                                "id": "an_m",
                                "name": "アネム語",
                                "type": "language",
                                "desc": "孤立語族に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "既知の他言語との確立した系統関係を持たない言語を、一言語からなる語族として扱う区分。"
                    },
                    {
                        "id": "class_node",
                        "name": "孤立語／系統不詳",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "haida",
                                "name": "ハイダ語",
                                "type": "language",
                                "desc": "北米太平洋岸北西部で話される言語。系統的位置づけについて議論がある。"
                            },
                            {
                                "id": "hadza",
                                "name": "ハヅァ語",
                                "type": "language",
                                "desc": "タンザニアで話される言語。クリック音を含む音韻体系を持ち、一般に孤立言語として扱われる。"
                            },
                            {
                                "id": "sandawe",
                                "name": "サンダウェ語",
                                "type": "language",
                                "desc": "タンザニアで話される言語。クリック音を持ち、系統的位置づけには議論がある。"
                            },
                            {
                                "id": "kano",
                                "name": "カノエ語",
                                "type": "language",
                                "desc": "孤立語／系統不詳に分類される言語。より細かな分類は「」で表されます。"
                            },
                            {
                                "id": "trumai",
                                "name": "トルマイ語",
                                "type": "language",
                                "desc": "孤立語／系統不詳に分類される言語。より細かな分類は「」で表されます。"
                            },
                            {
                                "id": "mapudungun",
                                "name": "マプチェ語",
                                "type": "language",
                                "desc": "孤立語／系統不詳に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "孤立語とする説や、より広い系統関係について未確定なものをまとめた表示上の区分。"
                    },
                    {
                        "id": "class_node",
                        "name": "ティウィ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "tiwi",
                                "name": "ティウィ語",
                                "type": "language",
                                "desc": "ティウィ語族に分類される言語。より細かな分類は「」で表されます。"
                            }
                        ],
                        "description": "ティウィ語族に属する分類単位。"
                    }
                ],
                "id": "modern",
                "name": "現代語",
                "type": "category",
                "category": "Modern",
                "color": "#f8fafc",
                "description": "現在も共同体によって日常的に使用される言語。"
            },
            {
                "children": [
                    {
                        "id": "class_node",
                        "name": "インド・ヨーロッパ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "ゲルマン語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "class_node",
                                        "name": "北ゲルマン語群",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "old_norse",
                                                "name": "古ノルド語",
                                                "type": "historical",
                                                "desc": "中世北欧の北ゲルマン語。サガや北欧神話の文献を理解する上で重要である。"
                                            }
                                        ],
                                        "description": "北ゲルマン語群に属する分類単位。"
                                    },
                                    {
                                        "id": "class_node",
                                        "name": "東ゲルマン語群",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "gothic",
                                                "name": "ゴート語",
                                                "type": "historical",
                                                "desc": "東ゲルマン語群に属する死語。ウルフィラの聖書翻訳などを通じ、古いゲルマン語の重要な資料を残す。"
                                            }
                                        ],
                                        "description": "東ゲルマン語群に属する分類単位。"
                                    }
                                ],
                                "description": "ゲルマン語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "イタリック語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "latin",
                                        "name": "ラテン語",
                                        "type": "historical",
                                        "desc": "古代ローマの言語。ロマンス諸語の歴史的基盤となり、ヨーロッパの学術・宗教・法の語彙にも大きな影響を与えた。"
                                    }
                                ],
                                "description": "イタリック語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "スラヴ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "class_node",
                                        "name": "南スラヴ語群",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "old_church_slavonic",
                                                "name": "古代教会スラヴ語",
                                                "type": "historical",
                                                "desc": "最古級のスラヴ語文献を担った典礼語。南スラヴ系の言語資料として重要である。"
                                            }
                                        ],
                                        "description": "南スラヴ語群に属する分類単位。"
                                    }
                                ],
                                "description": "スラヴ語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "インド・イラン語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "class_node",
                                        "name": "インド・アーリア語群",
                                        "type": "branch",
                                        "color": "#64748b",
                                        "children": [
                                            {
                                                "id": "sanskrit",
                                                "name": "サンスクリット",
                                                "type": "historical",
                                                "desc": "古代インドのインド・アーリア語。宗教・哲学・文学の重要な古典語で、比較言語学史でも重要である。"
                                            }
                                        ],
                                        "description": "インド・アーリア語群に属する分類単位。"
                                    }
                                ],
                                "description": "インド・イラン語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "ギリシア語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "ancient_greek",
                                        "name": "古代ギリシア語",
                                        "type": "historical",
                                        "desc": "古代ギリシア世界で用いられたギリシア語。哲学・科学・文学の重要な文献を残す。"
                                    },
                                    {
                                        "id": "koine_greek",
                                        "name": "コイネー・ギリシア語",
                                        "type": "historical",
                                        "desc": "ヘレニズム時代以降に広域で使われたギリシア語の共通語。新約聖書の主要な言語でもある。"
                                    }
                                ],
                                "description": "ギリシア語派に属する分類単位。"
                            }
                        ],
                        "description": "ヨーロッパから南アジアに広がる巨大な語族。ゲルマン・ロマンス・スラヴ・インド・イランなど多数の語派を含む。"
                    },
                    {
                        "id": "class_node",
                        "name": "アフロ・アジア語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "セム語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "classical_arabic",
                                        "name": "古典アラビア語",
                                        "type": "historical",
                                        "desc": "古典期のアラビア語。イスラーム文化の形成において中心的な文語であり、現代標準アラビア語の歴史的基盤でもある。"
                                    },
                                    {
                                        "id": "akkadian",
                                        "name": "アッカド語",
                                        "type": "historical",
                                        "desc": "古代メソポタミアのセム語派言語。楔形文字で大量に記録され、古代オリエントの重要な文書言語だった。"
                                    },
                                    {
                                        "id": "aramaic",
                                        "name": "アラム語",
                                        "type": "historical",
                                        "desc": "古代オリエントで広く用いられたセム語派の言語群。歴史的に広域の共通語として重要な役割を果たした。"
                                    }
                                ],
                                "description": "セム語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "エジプト語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "ancient_egyptian",
                                        "name": "古代エジプト語",
                                        "type": "historical",
                                        "desc": "古代エジプトで用いられたアフロ・アジア語族の言語。ヒエログリフなど複数の書記体系で記録された。"
                                    }
                                ],
                                "description": "エジプト語派に属する分類単位。"
                            }
                        ],
                        "description": "北アフリカ・西アジア・東アフリカに分布する語族。セム・ベルベル・クシ・チャドなどを含む。"
                    },
                    {
                        "id": "class_node",
                        "name": "孤立語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "sumerian",
                                "name": "シュメール語",
                                "type": "historical",
                                "desc": "古代メソポタミアで話された言語。楔形文字による最古級の大量の記録を残し、既知の他言語との系統関係は確立していない。"
                            }
                        ],
                        "description": "既知の他言語との確立した系統関係を持たない言語を、一言語からなる語族として扱う区分。"
                    },
                    {
                        "id": "class_node",
                        "name": "孤立語／系統不詳",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "elamite",
                                "name": "エラム語",
                                "type": "historical",
                                "desc": "古代イラン南西部で用いられた言語。周辺の主要語族との系統関係は確立していない。"
                            }
                        ],
                        "description": "孤立語とする説や、より広い系統関係について未確定なものをまとめた表示上の区分。"
                    }
                ],
                "id": "historical",
                "name": "歴史的言語",
                "type": "category",
                "category": "Historical",
                "color": "#94a3b8",
                "description": "現在は母語として通常使われないが、歴史・文学・宗教・科学の資料として重要な言語。"
            },
            {
                "children": [
                    {
                        "id": "special_node",
                        "name": "クレオール・ピジン",
                        "type": "category",
                        "category": "Creole/Pidgin",
                        "color": "#c026d3",
                        "description": "系統分類だけではなく、成立過程そのものが重要な言語群。",
                        "children": [
                            {
                                "id": "tok_pisin",
                                "name": "トク・ピシン",
                                "type": "special",
                                "desc": "パプアニューギニアで広く用いられる英語を基盤とするクレオール。複数言語話者間の共通語として発達した。"
                            },
                            {
                                "id": "bislama",
                                "name": "ビスラマ語",
                                "type": "special",
                                "desc": "バヌアツの公用語の一つ。英語を基盤として発達したクレオールである。"
                            },
                            {
                                "id": "papiamento",
                                "name": "パピアメント語",
                                "type": "special",
                                "desc": "カリブ海のアルバ諸島・キュラソーなどで話されるクレオール。イベリア諸語を中心とする複数の言語の影響を受ける。"
                            },
                            {
                                "id": "haitian_creole",
                                "name": "ハイチ・クレオール語",
                                "type": "special",
                                "desc": "ハイチの主要言語。フランス語を語彙的基盤の一つとし、西アフリカ諸語などとの接触の中で形成されたクレオールである。"
                            },
                            {
                                "id": "nigerian_pidgin",
                                "name": "ナイジェリア・ピジン",
                                "type": "special",
                                "desc": "ナイジェリアで広く使われる英語基盤のクレオール。地域・話者層によって多様な変種がある。"
                            },
                            {
                                "id": "mauritian_creole",
                                "name": "モーリシャス・クレオール語",
                                "type": "special",
                                "desc": "フランス語系クレオールに分類される言語。より細かな分類は「」で表されます。"
                            },
                            {
                                "id": "seychellois_creole",
                                "name": "セーシェル・クレオール語",
                                "type": "special",
                                "desc": "フランス語系クレオールに分類される言語。より細かな分類は「」で表されます。"
                            }
                        ]
                    },
                    {
                        "id": "special_node",
                        "name": "人工言語",
                        "type": "category",
                        "category": "Artificial",
                        "color": "#c026d3",
                        "description": "系統分類だけではなく、成立過程そのものが重要な言語群。",
                        "children": [
                            {
                                "id": "esperanto",
                                "name": "エスペラント",
                                "type": "special",
                                "desc": "19世紀末に作られた国際補助語。自然言語ではなく計画言語として設計され、現在も学習者・使用者がいる。"
                            }
                        ]
                    }
                ],
                "id": "special",
                "name": "特殊な成立・使用形態の言語",
                "type": "category",
                "category": "Special",
                "color": "#c026d3",
                "description": "クレオール、ピジン、人工言語など、通常の系統樹とは別の観点が重要な言語。"
            }
        ]
    },
    "languages": {
        "english": {
            "id": "english",
            "name": "英語",
            "englishName": "English",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ゲルマン語派",
                    "西ゲルマン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "en",
                "2": "eng",
                "3": "eng"
            },
            "speakers": {
                "native": 372000000,
                "total": 1493000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "United Kingdom",
                    "United States",
                    "Canada",
                    "Australia",
                    "New Zealand",
                    "Ireland",
                    "South Africa",
                    "India",
                    "Nigeria"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "United Kingdom",
                    "Ireland",
                    "Malta",
                    "Singapore",
                    "India",
                    "Philippines",
                    "South Africa",
                    "New Zealand"
                ]
            },
            "description": "インド・ヨーロッパ語族・ゲルマン語派の西ゲルマン語群に属する。世界的な共通語として広く用いられ、フランス語などロマンス諸語由来の語彙も多い。 主な分布地域はUnited Kingdom、United States、Canada、Australia、New Zealand。 現代の主要な表記にはLatinが用いられる。 歴史的にはノルマン征服後のフランス語接触などを通じて語彙が大きく拡大した。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/English",
                "glottolog": "https://glottolog.org/glottolog?iso=eng"
            },
            "nativeName": "English",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "german": {
            "id": "german",
            "name": "ドイツ語",
            "englishName": "German",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ゲルマン語派",
                    "西ゲルマン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "de",
                "2": "ger",
                "3": "deu"
            },
            "speakers": {
                "native": 76000000,
                "total": 133000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Germany",
                    "Austria",
                    "Switzerland",
                    "Liechtenstein",
                    "Belgium",
                    "Luxembourg"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Germany",
                    "Austria",
                    "Switzerland",
                    "Liechtenstein",
                    "Luxembourg",
                    "Belgium"
                ]
            },
            "description": "西ゲルマン語群の主要言語。名詞の格・性・数を文法的に区別し、ドイツ、オーストリア、スイスなどで重要な公用語である。 主な分布地域はGermany、Austria、Switzerland、Liechtenstein、Belgium。 現代の主要な表記にはLatinが用いられる。 定冠詞・形容詞・名詞などに格・性・数の文法的区別が現れる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/German",
                "glottolog": "https://glottolog.org/glottolog?iso=deu"
            },
            "nativeName": "Deutsch",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "dutch": {
            "id": "dutch",
            "name": "オランダ語",
            "englishName": "Dutch",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ゲルマン語派",
                    "西ゲルマン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "nl",
                "2": "dut",
                "3": "nld"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Netherlands",
                    "Belgium",
                    "Suriname"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Netherlands",
                    "Belgium",
                    "Suriname"
                ]
            },
            "description": "西ゲルマン語群の言語。英語・ドイツ語と近縁で、オランダやベルギー北部を中心に用いられる。 主な分布地域はNetherlands、Belgium、Suriname。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・ゲルマン語派・西ゲルマン語群に位置づけられる。 主な分布はNetherlands、Belgium、Surinameである。 主要な表記体系としてLatinが用いられる。 英語とドイツ語の中間的な位置に見える音韻・語彙上の特徴を持つ。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Dutch",
                "glottolog": "https://glottolog.org/glottolog?iso=nld"
            },
            "nativeName": "Nederlands",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "afrikaans": {
            "id": "afrikaans",
            "name": "アフリカーンス語",
            "englishName": "Afrikaans",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ゲルマン語派",
                    "西ゲルマン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "af",
                "2": "afr",
                "3": "afr"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "South Africa",
                    "Namibia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "South Africa"
                ]
            },
            "description": "西ゲルマン語群の言語。17世紀以降のケープ地域のオランダ語を基盤に発達し、南アフリカ・ナミビアなどで用いられる。 主な分布地域はSouth Africa、Namibia。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・ゲルマン語派・西ゲルマン語群に位置づけられる。 主な分布はSouth Africa、Namibiaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Afrikaans",
                "glottolog": "https://glottolog.org/glottolog?iso=afr"
            },
            "nativeName": "Afrikaans",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "yiddish": {
            "id": "yiddish",
            "name": "イディッシュ語",
            "englishName": "Yiddish",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ゲルマン語派",
                    "西ゲルマン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "yi",
                "2": "yid",
                "3": "yid"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Israel",
                    "United States"
                ]
            },
            "writing": {
                "scripts": [
                    "Hebrew"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "西ゲルマン語群に属する言語。中東欧のユダヤ人社会で発達し、伝統的にはヘブライ文字で表記される。 主な分布地域はIsrael、United States。 系統分類ではインド・ヨーロッパ語族・ゲルマン語派・西ゲルマン語群に位置づけられる。 主な分布はIsrael、United Statesである。 主要な表記体系としてHebrewが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Yiddish",
                "glottolog": "https://glottolog.org/glottolog?iso=yid"
            },
            "nativeName": "ייִדיש",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "swedish": {
            "id": "swedish",
            "name": "スウェーデン語",
            "englishName": "Swedish",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ゲルマン語派",
                    "北ゲルマン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "sv",
                "2": "swe",
                "3": "swe"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Sweden",
                    "Finland"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Sweden",
                    "Finland"
                ]
            },
            "description": "北ゲルマン語群の主要言語。スウェーデンとフィンランドの一部で公用語として用いられる。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・ゲルマン語派・北ゲルマン語群に位置づけられる。 主な分布はSweden、Finlandである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Swedish",
                "glottolog": "https://glottolog.org/glottolog?iso=swe"
            },
            "nativeName": "svenska",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "danish": {
            "id": "danish",
            "name": "デンマーク語",
            "englishName": "Danish",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ゲルマン語派",
                    "北ゲルマン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "da",
                "2": "dan",
                "3": "dan"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Denmark"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Denmark"
                ]
            },
            "description": "北ゲルマン語群の言語。デンマークの公用語で、独特の音韻特徴を持つ。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・ゲルマン語派・北ゲルマン語群に位置づけられる。 主な分布はDenmarkである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Danish",
                "glottolog": "https://glottolog.org/glottolog?iso=dan"
            },
            "nativeName": "dansk",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "norwegian": {
            "id": "norwegian",
            "name": "ノルウェー語",
            "englishName": "Norwegian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ゲルマン語派",
                    "北ゲルマン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "no",
                "2": "nor",
                "3": "nor"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Norway"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Norway"
                ]
            },
            "description": "北ゲルマン語群の言語。ノルウェー語にはブークモールとニーノシュクという二つの公的な書記規範がある。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・ゲルマン語派・北ゲルマン語群に位置づけられる。 主な分布はNorwayである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Norwegian",
                "glottolog": "https://glottolog.org/glottolog?iso=nor"
            },
            "nativeName": "norsk",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "icelandic": {
            "id": "icelandic",
            "name": "アイスランド語",
            "englishName": "Icelandic",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ゲルマン語派",
                    "北ゲルマン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "is",
                "2": "ice",
                "3": "isl"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Iceland"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Iceland"
                ]
            },
            "description": "北ゲルマン語群の言語。古ノルド語からの形態を比較的よく保存していることで知られる。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・ゲルマン語派・北ゲルマン語群に位置づけられる。 主な分布はIcelandである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Icelandic",
                "glottolog": "https://glottolog.org/glottolog?iso=isl"
            },
            "nativeName": "íslenska",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "faroese": {
            "id": "faroese",
            "name": "フェロー語",
            "englishName": "Faroese",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ゲルマン語派",
                    "北ゲルマン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "fo",
                "2": "fao",
                "3": "fao"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Faroe Islands"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Faroe Islands"
                ]
            },
            "description": "北ゲルマン語群の言語。フェロー諸島で話され、アイスランド語やノルウェー語と系統的に近い。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・ゲルマン語派・北ゲルマン語群に位置づけられる。 主な分布はFaroe Islandsである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Faroese",
                "glottolog": "https://glottolog.org/glottolog?iso=fao"
            },
            "nativeName": "føroyskt",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "old_norse": {
            "id": "old_norse",
            "name": "古ノルド語",
            "englishName": "Old Norse",
            "type": "historical",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ゲルマン語派",
                    "北ゲルマン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "non",
                "3": "non"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Scandinavia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "中世スカンディナヴィアで用いられた北ゲルマン語。古ノルド語からアイスランド語・ノルウェー語などの歴史的発展を考える上で重要である。 系統分類ではインド・ヨーロッパ語族・ゲルマン語派・北ゲルマン語群に位置づけられる。 主な分布はScandinaviaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Old_Norse",
                "glottolog": "https://glottolog.org/glottolog?iso=non"
            },
            "nativeName": "norrœnt mál",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "gothic": {
            "id": "gothic",
            "name": "ゴート語",
            "englishName": "Gothic",
            "type": "historical",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ゲルマン語派",
                    "東ゲルマン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "got",
                "3": "got"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Crimea",
                    "Italy",
                    "Spain"
                ]
            },
            "writing": {
                "scripts": [
                    "Gothic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "東ゴート族・西ゴート族などの間で用いられた東ゲルマン語。4世紀のウルフィラによる聖書翻訳などが主要な文献資料として残る。 系統分類ではインド・ヨーロッパ語族・ゲルマン語派・東ゲルマン語群に位置づけられる。 主な分布はCrimea、Italy、Spainである。 主要な表記体系としてGothicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Gothic",
                "glottolog": "https://glottolog.org/glottolog?iso=got"
            },
            "nativeName": "gutisk",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "spanish": {
            "id": "spanish",
            "name": "スペイン語",
            "englishName": "Spanish",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "イタリック語派",
                    "ロマンス語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "es",
                "2": "spa",
                "3": "spa"
            },
            "speakers": {
                "native": 487000000,
                "total": 561000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Spain",
                    "Mexico",
                    "Argentina",
                    "Colombia",
                    "Peru",
                    "Chile",
                    "Venezuela",
                    "United States",
                    "Ecuador",
                    "Guatemala",
                    "Cuba"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Spain",
                    "Mexico",
                    "Colombia",
                    "Argentina",
                    "Peru",
                    "Chile",
                    "Ecuador",
                    "Guatemala",
                    "Cuba",
                    "Dominican Republic",
                    "Bolivia",
                    "Paraguay",
                    "Uruguay",
                    "Venezuela",
                    "Costa Rica",
                    "Panama",
                    "Honduras",
                    "El Salvador",
                    "Nicaragua",
                    "Equatorial Guinea"
                ]
            },
            "description": "ロマンス語群の主要言語。スペインから中南米へ広がり、母語話者数・学習者数ともに世界有数である。 主な分布地域はSpain、Mexico、Argentina、Colombia、Peru。 現代の主要な表記にはLatinが用いられる。 ラテン語から発展したロマンス語の一つで、スペイン以外の広い地域にも標準語として定着した。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Spanish",
                "glottolog": "https://glottolog.org/glottolog?iso=spa"
            },
            "nativeName": "español",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "french": {
            "id": "french",
            "name": "フランス語",
            "englishName": "French",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "イタリック語派",
                    "ロマンス語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "fr",
                "2": "fre",
                "3": "fra"
            },
            "speakers": {
                "native": 75000000,
                "total": 334000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "France",
                    "Canada",
                    "Belgium",
                    "Switzerland",
                    "Luxembourg",
                    "Monaco",
                    "Senegal",
                    "Côte d’Ivoire",
                    "Democratic Republic of the Congo"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "France",
                    "Belgium",
                    "Switzerland",
                    "Luxembourg",
                    "Canada",
                    "Haiti",
                    "Monaco",
                    "Madagascar",
                    "Senegal",
                    "Côte d’Ivoire",
                    "Mali",
                    "Niger",
                    "Burkina Faso",
                    "Benin",
                    "Togo",
                    "Guinea",
                    "Chad",
                    "Central African Republic",
                    "Gabon",
                    "Republic of the Congo",
                    "Democratic Republic of the Congo",
                    "Cameroon",
                    "Djibouti",
                    "Comoros",
                    "Seychelles",
                    "Vanuatu"
                ]
            },
            "description": "ロマンス語群の主要言語。フランスを中心に、アフリカ、北米などにも広く分布する国際語である。 主な分布地域はFrance、Canada、Belgium、Switzerland、Luxembourg。 現代の主要な表記にはLatinが用いられる。 ロマンス語でありながら、フランク語などゲルマン諸語からの歴史的影響も受けている。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/French",
                "glottolog": "https://glottolog.org/glottolog?iso=fra"
            },
            "nativeName": "français",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "italian": {
            "id": "italian",
            "name": "イタリア語",
            "englishName": "Italian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "イタリック語派",
                    "ロマンス語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "it",
                "2": "ita",
                "3": "ita"
            },
            "speakers": {
                "native": 60000000,
                "total": 66000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Italy",
                    "Switzerland",
                    "San Marino"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Italy",
                    "San Marino",
                    "Switzerland"
                ]
            },
            "description": "ロマンス語群の言語。イタリアを中心に用いられ、ラテン語からの発展を比較的明瞭にたどれる。 主な分布地域はItaly、Switzerland、San Marino。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・イタリック語派・ロマンス語群に位置づけられる。 主な分布はItaly、Switzerland、San Marinoである。 主要な表記体系としてLatinが用いられる。 標準イタリア語はトスカーナ系の言語変種を基盤として形成された。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Italian",
                "glottolog": "https://glottolog.org/glottolog?iso=ita"
            },
            "nativeName": "italiano",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "portuguese": {
            "id": "portuguese",
            "name": "ポルトガル語",
            "englishName": "Portuguese",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "イタリック語派",
                    "ロマンス語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "pt",
                "2": "por",
                "3": "por"
            },
            "speakers": {
                "native": 252000000,
                "total": 269000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Portugal",
                    "Brazil",
                    "Angola",
                    "Mozambique",
                    "Cape Verde",
                    "Guinea-Bissau",
                    "São Tomé and Príncipe",
                    "East Timor"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Portugal",
                    "Brazil",
                    "Angola",
                    "Mozambique",
                    "Guinea-Bissau",
                    "Cape Verde",
                    "São Tomé and Príncipe",
                    "East Timor"
                ]
            },
            "description": "ロマンス語群の主要言語。ポルトガルからブラジルを中心とする南米・アフリカなどへ広がった。 主な分布地域はPortugal、Brazil、Angola、Mozambique、Cape Verde。 現代の主要な表記にはLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Portuguese",
                "glottolog": "https://glottolog.org/glottolog?iso=por"
            },
            "nativeName": "português",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "romanian": {
            "id": "romanian",
            "name": "ルーマニア語",
            "englishName": "Romanian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "イタリック語派",
                    "ロマンス語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ro",
                "2": "rum",
                "3": "ron"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Romania",
                    "Moldova"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Romania",
                    "Moldova"
                ]
            },
            "description": "ロマンス語群の言語。東欧に位置しながらラテン語を祖とするロマンス諸語の一つである。 主な分布地域はRomania、Moldova。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・イタリック語派・ロマンス語群に位置づけられる。 主な分布はRomania、Moldovaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Romanian",
                "glottolog": "https://glottolog.org/glottolog?iso=ron"
            },
            "nativeName": "română",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "catalan": {
            "id": "catalan",
            "name": "カタルーニャ語",
            "englishName": "Catalan",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "イタリック語派",
                    "ロマンス語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ca",
                "2": "cat",
                "3": "cat"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Spain",
                    "Andorra",
                    "France",
                    "Italy"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Andorra"
                ]
            },
            "description": "ロマンス語群の言語。スペイン東部、アンドラ、フランス南部などで用いられる。 主な分布地域はSpain、Andorra、France、Italy。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・イタリック語派・ロマンス語群に位置づけられる。 主な分布はSpain、Andorra、France、Italyである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Catalan",
                "glottolog": "https://glottolog.org/glottolog?iso=cat"
            },
            "nativeName": "català",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "galician": {
            "id": "galician",
            "name": "ガリシア語",
            "englishName": "Galician",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "イタリック語派",
                    "ロマンス語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "gl",
                "2": "glg",
                "3": "glg"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Spain"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "イベリア・ロマンス諸語の一つ。スペイン北西部で話され、ポルトガル語と歴史的に近い関係を持つ。 主な分布地域はSpain。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・イタリック語派・ロマンス語群に位置づけられる。 主な分布はSpainである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Galician",
                "glottolog": "https://glottolog.org/glottolog?iso=glg"
            },
            "nativeName": "galego",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "occitan": {
            "id": "occitan",
            "name": "オック語",
            "englishName": "Occitan",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "イタリック語派",
                    "ロマンス語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "oc",
                "2": "oci",
                "3": "oci"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "France",
                    "Spain",
                    "Italy"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "南フランスを中心に歴史的に話されてきたロマンス語。中世のトルバドゥール文学でも重要である。 主な分布地域はFrance、Spain、Italy。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・イタリック語派・ロマンス語群に位置づけられる。 主な分布はFrance、Spain、Italyである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Occitan",
                "glottolog": "https://glottolog.org/glottolog?iso=oci"
            },
            "nativeName": "occitan",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "sardinian": {
            "id": "sardinian",
            "name": "サルデーニャ語",
            "englishName": "Sardinian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "イタリック語派",
                    "ロマンス語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "sc",
                "2": "srd",
                "3": "srd"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Italy"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "サルデーニャ島で話されるロマンス語。ロマンス諸語の中でも保守的な特徴を比較的多く残すことで知られる。 主な分布地域はItaly。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・イタリック語派・ロマンス語群に位置づけられる。 主な分布はItalyである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Sardinian",
                "glottolog": "https://glottolog.org/glottolog?iso=srd"
            },
            "nativeName": "sardu",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "sicilian": {
            "id": "sicilian",
            "name": "シチリア語",
            "englishName": "Sicilian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "イタリック語派",
                    "ロマンス語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "scn",
                "3": "scn"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Italy"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "シチリア島を中心に話されるロマンス語。地中海の多様な言語との接触を受けた豊かな語彙を持つ。 主な分布地域はItaly。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・イタリック語派・ロマンス語群に位置づけられる。 主な分布はItalyである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Sicilian",
                "glottolog": "https://glottolog.org/glottolog?iso=scn"
            },
            "nativeName": "sicilianu",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "latin": {
            "id": "latin",
            "name": "ラテン語",
            "englishName": "Latin",
            "type": "historical",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "イタリック語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "la",
                "2": "lat",
                "3": "lat"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Italy",
                    "Mediterranean Europe"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "古代ローマを中心に用いられたイタリック語派の言語。ロマンス諸語の歴史的な母体となり、中世以降も学術・宗教・行政で広く用いられた。 系統分類ではインド・ヨーロッパ語族・イタリック語派に位置づけられる。 主な分布はItaly、Mediterranean Europeである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Latin",
                "glottolog": "https://glottolog.org/glottolog?iso=lat"
            },
            "nativeName": "lingua Latina",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "russian": {
            "id": "russian",
            "name": "ロシア語",
            "englishName": "Russian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "東スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ru",
                "2": "rus",
                "3": "rus"
            },
            "speakers": {
                "native": 133000000,
                "total": 210000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Russia",
                    "Belarus",
                    "Kazakhstan",
                    "Kyrgyzstan"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "Russia",
                    "Belarus",
                    "Kyrgyzstan"
                ]
            },
            "description": "東スラヴ語群の主要言語。キリル文字を用い、ロシアを中心にユーラシア各地で話される。 主な分布地域はRussia、Belarus、Kazakhstan、Kyrgyzstan。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・東スラヴ語群に位置づけられる。 主な分布はRussia、Belarus、Kazakhstan、Kyrgyzstanである。 主要な表記体系としてCyrillicが用いられる。 名詞・形容詞・代名詞などに格変化があり、動詞ではアスペクトの対立が重要である。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Russian",
                "glottolog": "https://glottolog.org/glottolog?iso=rus"
            },
            "nativeName": "русский язык",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "ukrainian": {
            "id": "ukrainian",
            "name": "ウクライナ語",
            "englishName": "Ukrainian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "東スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "uk",
                "2": "ukr",
                "3": "ukr"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Ukraine"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "Ukraine"
                ]
            },
            "description": "東スラヴ語群の言語。ウクライナを中心に用い、ポーランド語など周辺諸語との接触も受けてきた。 主な分布地域はUkraine。 現代の主要な表記にはCyrillicが用いられる。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・東スラヴ語群に位置づけられる。 主な分布はUkraineである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Ukrainian",
                "glottolog": "https://glottolog.org/glottolog?iso=ukr"
            },
            "nativeName": "українська мова",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "belarusian": {
            "id": "belarusian",
            "name": "ベラルーシ語",
            "englishName": "Belarusian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "東スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "be",
                "2": "bel",
                "3": "bel"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Belarus"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "Belarus"
                ]
            },
            "description": "東スラヴ語群の言語。ベラルーシを中心に話され、ロシア語・ウクライナ語と近縁である。 主な分布地域はBelarus。 現代の主要な表記にはCyrillicが用いられる。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・東スラヴ語群に位置づけられる。 主な分布はBelarusである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Belarusian",
                "glottolog": "https://glottolog.org/glottolog?iso=bel"
            },
            "nativeName": "беларуская мова",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "polish": {
            "id": "polish",
            "name": "ポーランド語",
            "englishName": "Polish",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "西スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "pl",
                "2": "pol",
                "3": "pol"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Poland"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Poland"
                ]
            },
            "description": "西スラヴ語群の主要言語。ポーランドの公用語で、ラテン文字による正書法を用いる。 主な分布地域はPoland。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・西スラヴ語群に位置づけられる。 主な分布はPolandである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Polish",
                "glottolog": "https://glottolog.org/glottolog?iso=pol"
            },
            "nativeName": "polski",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "czech": {
            "id": "czech",
            "name": "チェコ語",
            "englishName": "Czech",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "西スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "cs",
                "2": "cze",
                "3": "ces"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Czechia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Czechia"
                ]
            },
            "description": "西スラヴ語群の言語。チェコの公用語で、スロバキア語とは特に近い関係にある。 主な分布地域はCzechia。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・西スラヴ語群に位置づけられる。 主な分布はCzechiaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Czech",
                "glottolog": "https://glottolog.org/glottolog?iso=ces"
            },
            "nativeName": "čeština",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "slovak": {
            "id": "slovak",
            "name": "スロバキア語",
            "englishName": "Slovak",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "西スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "sk",
                "2": "slo",
                "3": "slk"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Slovakia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Slovakia"
                ]
            },
            "description": "西スラヴ語群の言語。スロバキアの公用語で、チェコ語との近さが特徴的である。 主な分布地域はSlovakia。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・西スラヴ語群に位置づけられる。 主な分布はSlovakiaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Slovak",
                "glottolog": "https://glottolog.org/glottolog?iso=slk"
            },
            "nativeName": "slovenčina",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "sorbian": {
            "id": "sorbian",
            "name": "ソルブ語",
            "englishName": "Sorbian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "西スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": null,
                "3": "wen"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Germany"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "西スラヴ語群の少数言語。ドイツ東部のラウジッツ地方を中心に話される。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・西スラヴ語群に位置づけられる。 主な分布はGermanyである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Sorbian",
                "glottolog": "https://glottolog.org/glottolog?iso=wen"
            },
            "nativeName": "Serbščina / Sorbian",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "bulgarian": {
            "id": "bulgarian",
            "name": "ブルガリア語",
            "englishName": "Bulgarian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "南スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "bg",
                "2": "bul",
                "3": "bul"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Bulgaria"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "Bulgaria"
                ]
            },
            "description": "南スラヴ語群の言語。現代スラヴ諸語では格変化が大幅に失われ、後置定冠詞などバルカン言語圏的特徴を持つ。 主な分布地域はBulgaria。 現代の主要な表記にはCyrillicが用いられる。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・南スラヴ語群に位置づけられる。 主な分布はBulgariaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Bulgarian",
                "glottolog": "https://glottolog.org/glottolog?iso=bul"
            },
            "nativeName": "български език",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "macedonian": {
            "id": "macedonian",
            "name": "マケドニア語",
            "englishName": "Macedonian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "南スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "mk",
                "2": "mac",
                "3": "mkd"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "North Macedonia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "North Macedonia"
                ]
            },
            "description": "南スラヴ語群の言語。北マケドニアの公用語で、ブルガリア語などと近縁である。 主な分布地域はNorth Macedonia。 現代の主要な表記にはCyrillicが用いられる。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・南スラヴ語群に位置づけられる。 主な分布はNorth Macedoniaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Macedonian",
                "glottolog": "https://glottolog.org/glottolog?iso=mkd"
            },
            "nativeName": "македонски јазик",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "serbian": {
            "id": "serbian",
            "name": "セルビア語",
            "englishName": "Serbian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "南スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "sr",
                "2": "srp",
                "3": "srp"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Serbia",
                    "Bosnia and Herzegovina",
                    "Croatia",
                    "Montenegro"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "Serbia"
                ]
            },
            "description": "南スラヴ語群の言語。キリル文字とラテン文字の双方が広く用いられる。 主な分布地域はSerbia、Bosnia and Herzegovina、Croatia、Montenegro。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・南スラヴ語群に位置づけられる。 主な分布はSerbia、Bosnia and Herzegovina、Croatia、Montenegroである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Serbian",
                "glottolog": "https://glottolog.org/glottolog?iso=srp"
            },
            "nativeName": "српски језик",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "croatian": {
            "id": "croatian",
            "name": "クロアチア語",
            "englishName": "Croatian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "南スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "hr",
                "2": "hrv",
                "3": "hrv"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Croatia",
                    "Bosnia and Herzegovina"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Croatia",
                    "Bosnia and Herzegovina"
                ]
            },
            "description": "南スラヴ語群の言語。クロアチアの公用語で、ラテン文字を用いる。 主な分布地域はCroatia、Bosnia and Herzegovina。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・南スラヴ語群に位置づけられる。 主な分布はCroatia、Bosnia and Herzegovinaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Croatian",
                "glottolog": "https://glottolog.org/glottolog?iso=hrv"
            },
            "nativeName": "hrvatski",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "bosnian": {
            "id": "bosnian",
            "name": "ボスニア語",
            "englishName": "Bosnian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "南スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "bs",
                "2": "bos",
                "3": "bos"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Bosnia and Herzegovina"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Bosnia and Herzegovina"
                ]
            },
            "description": "南スラヴ語群の言語。ボスニア・ヘルツェゴビナで用いられ、セルビア語・クロアチア語と近い関係にある。 主な分布地域はBosnia and Herzegovina。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・南スラヴ語群に位置づけられる。 主な分布はBosnia and Herzegovinaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Bosnian",
                "glottolog": "https://glottolog.org/glottolog?iso=bos"
            },
            "nativeName": "bosanski",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "slovenian": {
            "id": "slovenian",
            "name": "スロベニア語",
            "englishName": "Slovenian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "南スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "sl",
                "2": "slv",
                "3": "slv"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Slovenia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Slovenia"
                ]
            },
            "description": "南スラヴ語群の言語。スロベニアの公用語で、現代ヨーロッパの標準語としては珍しく双数を保持する。 主な分布地域はSlovenia。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・南スラヴ語群に位置づけられる。 主な分布はSloveniaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Slovenian",
                "glottolog": "https://glottolog.org/glottolog?iso=slv"
            },
            "nativeName": "slovenščina",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "old_church_slavonic": {
            "id": "old_church_slavonic",
            "name": "古代教会スラヴ語",
            "englishName": "Old Church Slavonic",
            "type": "historical",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "スラヴ語派",
                    "南スラヴ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "cu",
                "2": "chu",
                "3": "chu"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Balkans",
                    "Eastern Europe"
                ]
            },
            "writing": {
                "scripts": [
                    "Glagolitic",
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "9世紀頃にスラヴ諸語を基盤として成立した最初期の文語。キリル文字・グラゴル文字によるスラヴ世界の宗教文献で重要な役割を果たした。 系統分類ではインド・ヨーロッパ語族・スラヴ語派・南スラヴ語群に位置づけられる。 主な分布はBalkans、Eastern Europeである。 主要な表記体系としてGlagolitic、Cyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Old_Church_Slavonic",
                "glottolog": "https://glottolog.org/glottolog?iso=chu"
            },
            "nativeName": "ⰔⰎⰑⰂⰡⰐⰔⰍⰡ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "hindi": {
            "id": "hindi",
            "name": "ヒンディー語",
            "englishName": "Hindi",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "hi",
                "2": "hin",
                "3": "hin"
            },
            "speakers": {
                "native": 347000000,
                "total": 611000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Devanagari"
                ]
            },
            "official": {
                "countries": [
                    "India"
                ]
            },
            "description": "インド・アーリア語群の主要言語。インド北部を中心に広く用い、標準語はデーヴァナーガリー文字で書かれる。 主な分布地域はIndia。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてDevanagariが用いられる。 標準ヒンディー語はデーヴァナーガリー文字で書かれ、ウルドゥー語と話し言葉で高い共通性を持つ。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Hindi",
                "glottolog": "https://glottolog.org/glottolog?iso=hin"
            },
            "nativeName": "हिन्दी",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "bengali": {
            "id": "bengali",
            "name": "ベンガル語",
            "englishName": "Bengali",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "bn",
                "2": "ben",
                "3": "ben"
            },
            "speakers": {
                "native": 234000000,
                "total": 274000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Bangladesh",
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Bengali-Assamese"
                ]
            },
            "official": {
                "countries": [
                    "Bangladesh",
                    "India"
                ]
            },
            "description": "インド・アーリア語群の主要言語。バングラデシュとインド東部を中心に話され、豊かな文学文化を持つ。 主な分布地域はBangladesh、India。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はBangladesh、Indiaである。 主要な表記体系としてBengali-Assameseが用いられる。 ベンガル文字を用いるインド・アーリア語で、豊かな文学伝統を持つ。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Bengali",
                "glottolog": "https://glottolog.org/glottolog?iso=ben"
            },
            "nativeName": "বাংলা",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "urdu": {
            "id": "urdu",
            "name": "ウルドゥー語",
            "englishName": "Urdu",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ur",
                "2": "urd",
                "3": "urd"
            },
            "speakers": {
                "native": 78000000,
                "total": 246000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Pakistan",
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Arabic"
                ]
            },
            "official": {
                "countries": [
                    "Pakistan"
                ]
            },
            "description": "インド・アーリア語群の言語。ヒンディー語と日常口語の基盤を大きく共有する一方、標準的な書記言語ではペルシア・アラビア系語彙とアラビア文字系表記が特徴的である。 主な分布地域はPakistan、India。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はPakistan、Indiaである。 主要な表記体系としてArabicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Urdu",
                "glottolog": "https://glottolog.org/glottolog?iso=urd"
            },
            "nativeName": "اردو",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "western_punjabi": {
            "id": "western_punjabi",
            "name": "西パンジャーブ語",
            "englishName": "Western Punjabi",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "pnb",
                "3": "pnb"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Pakistan"
                ]
            },
            "writing": {
                "scripts": [
                    "Shahmukhi"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "パンジャーブ語群の主要変種の一つ。パキスタンのパンジャーブ地方を中心に話される。 主な分布地域はPakistan。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はPakistanである。 主要な表記体系としてShahmukhiが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Western_Punjabi",
                "glottolog": "https://glottolog.org/glottolog?iso=pnb"
            },
            "nativeName": "پنجابی",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "marathi": {
            "id": "marathi",
            "name": "マラーティー語",
            "englishName": "Marathi",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "mr",
                "2": "mar",
                "3": "mar"
            },
            "speakers": {
                "native": 83000000,
                "total": 99000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Devanagari"
                ]
            },
            "official": {
                "countries": [
                    "India"
                ]
            },
            "description": "インド・アーリア語群の言語。インド西部のマハーラーシュトラ州を中心に話される。 主な分布地域はIndia。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてDevanagariが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Marathi",
                "glottolog": "https://glottolog.org/glottolog?iso=mar"
            },
            "nativeName": "मराठी",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "gujarati": {
            "id": "gujarati",
            "name": "グジャラート語",
            "englishName": "Gujarati",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "gu",
                "2": "guj",
                "3": "guj"
            },
            "speakers": {
                "native": 58000000,
                "total": 62000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Gujarati"
                ]
            },
            "official": {
                "countries": [
                    "India"
                ]
            },
            "description": "インド・アーリア語群の言語。インド西部を中心に話され、独自のグジャラート文字を用いる。 主な分布地域はIndia。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてGujaratiが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Gujarati",
                "glottolog": "https://glottolog.org/glottolog?iso=guj"
            },
            "nativeName": "ગુજરાતી",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "bhojpuri": {
            "id": "bhojpuri",
            "name": "ボージュプリー語",
            "englishName": "Bhojpuri",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "bho",
                "3": "bho"
            },
            "speakers": {
                "native": 53000000,
                "total": 53000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "India",
                    "Nepal"
                ]
            },
            "writing": {
                "scripts": [
                    "Devanagari"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の言語。インド北部やネパール南部などに広く分布する。 主な分布地域はIndia、Nepal。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はIndia、Nepalである。 主要な表記体系としてDevanagariが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Bhojpuri",
                "glottolog": "https://glottolog.org/glottolog?iso=bho"
            },
            "nativeName": "भोजपुरी",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "assamese": {
            "id": "assamese",
            "name": "アッサム語",
            "englishName": "Assamese",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "as",
                "2": "asm",
                "3": "asm"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Bengali-Assamese"
                ]
            },
            "official": {
                "countries": [
                    "India"
                ]
            },
            "description": "インド・アーリア語群の東部語。インド北東部アッサム州を中心に話される。 主な分布地域はIndia。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてBengali-Assameseが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Assamese",
                "glottolog": "https://glottolog.org/glottolog?iso=asm"
            },
            "nativeName": "অসমীয়া",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "odia": {
            "id": "odia",
            "name": "オディア語",
            "englishName": "Odia",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "ory",
                "3": "ory"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Odia"
                ]
            },
            "official": {
                "countries": [
                    "India"
                ]
            },
            "description": "インド・アーリア語群の言語。インド東部オディシャ州を中心に話され、独自の丸みを帯びた文字を持つ。 主な分布地域はIndia。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてOdiaが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Odia",
                "glottolog": "https://glottolog.org/glottolog?iso=ory"
            },
            "nativeName": "ଓଡ଼ିଆ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "nepali": {
            "id": "nepali",
            "name": "ネパール語",
            "englishName": "Nepali",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "npi",
                "3": "npi"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Nepal",
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Devanagari"
                ]
            },
            "official": {
                "countries": [
                    "Nepal"
                ]
            },
            "description": "インド・アーリア語群の言語。ネパールの主要公用語で、デーヴァナーガリー文字を用いる。 主な分布地域はNepal、India。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はNepal、Indiaである。 主要な表記体系としてDevanagariが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Nepali",
                "glottolog": "https://glottolog.org/glottolog?iso=npi"
            },
            "nativeName": "नेपाली",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "sinhala": {
            "id": "sinhala",
            "name": "シンハラ語",
            "englishName": "Sinhala",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "si",
                "2": "sin",
                "3": "sin"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Sri Lanka"
                ]
            },
            "writing": {
                "scripts": [
                    "Sinhala"
                ]
            },
            "official": {
                "countries": [
                    "Sri Lanka"
                ]
            },
            "description": "インド・アーリア語群の言語。スリランカを中心に話され、独自の丸みを帯びたシンハラ文字を用いる。 主な分布地域はSri Lanka。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はSri Lankaである。 主要な表記体系としてSinhalaが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Sinhala",
                "glottolog": "https://glottolog.org/glottolog?iso=sin"
            },
            "nativeName": "සිංහල",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "sindhi": {
            "id": "sindhi",
            "name": "シンド語",
            "englishName": "Sindhi",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "sd",
                "2": "snd",
                "3": "snd"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Pakistan",
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Arabic",
                    "Devanagari"
                ]
            },
            "official": {
                "countries": [
                    "Pakistan"
                ]
            },
            "description": "インド・アーリア語群の言語。パキスタンのシンド州などで話され、地域によって複数の文字が使われる。 主な分布地域はPakistan、India。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はPakistan、Indiaである。 主要な表記体系としてArabic、Devanagariが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Sindhi",
                "glottolog": "https://glottolog.org/glottolog?iso=snd"
            },
            "nativeName": "سنڌي",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "kashmiri": {
            "id": "kashmiri",
            "name": "カシミール語",
            "englishName": "Kashmiri",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ks",
                "2": "kas",
                "3": "kas"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "India",
                    "Pakistan"
                ]
            },
            "writing": {
                "scripts": [
                    "Perso-Arabic",
                    "Devanagari"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群のダルド諸語に分類される言語。カシミール地域を中心に話される。 主な分布地域はIndia、Pakistan。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はIndia、Pakistanである。 主要な表記体系としてPerso-Arabic、Devanagariが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Kashmiri",
                "glottolog": "https://glottolog.org/glottolog?iso=kas"
            },
            "nativeName": "कॉशुर / کٲشُر",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "konkani": {
            "id": "konkani",
            "name": "コンカニ語",
            "englishName": "Konkani",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "kok",
                "3": "kok"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Devanagari",
                    "Kannada",
                    "Roman"
                ]
            },
            "official": {
                "countries": [
                    "India"
                ]
            },
            "description": "インド・アーリア語群の言語。インド西岸に沿って分布し、地域によって異なる文字が使われる。 主な分布地域はIndia。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてDevanagari、Kannada、Romanが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Konkani",
                "glottolog": "https://glottolog.org/glottolog?iso=kok"
            },
            "nativeName": "कोंकणी / ಕೊಂಕಣಿ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "romani": {
            "id": "romani",
            "name": "ロマ語",
            "englishName": "Romani",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "rom",
                "3": "rom"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Europe",
                    "Turkey",
                    "United States"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「インド・イラン語派 → インド・アーリア語群」で表されます。 主な分布地域はEurope、Turkey、United States。 現代の主要な表記にはLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Romani",
                "glottolog": "https://glottolog.org/glottolog?iso=rom"
            },
            "nativeName": "romani čhib",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "sanskrit": {
            "id": "sanskrit",
            "name": "サンスクリット",
            "englishName": "Sanskrit",
            "type": "historical",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "インド・アーリア語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "sa",
                "2": "san",
                "3": "san"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Devanagari",
                    "その他のインド系文字"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "古代インドの古典語。インド・ヨーロッパ語族のインド・アーリア語群に属し、ヴェーダ文献や古典文学・宗教文献で用いられた。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・インド・アーリア語群に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてDevanagari、その他のインド系文字が用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Sanskrit",
                "glottolog": "https://glottolog.org/glottolog?iso=san"
            },
            "nativeName": "संस्कृतम्",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "persian": {
            "id": "persian",
            "name": "ペルシア語",
            "englishName": "Persian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "イラン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "fa",
                "2": "per",
                "3": "fas"
            },
            "speakers": {
                "native": 65000000,
                "total": 82000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表のIranian Persian）"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Iran",
                    "Afghanistan",
                    "Tajikistan"
                ]
            },
            "writing": {
                "scripts": [
                    "Perso-Arabic"
                ]
            },
            "official": {
                "countries": [
                    "Iran",
                    "Afghanistan"
                ]
            },
            "description": "イラン語群の主要言語。イラン、アフガニスタン、中央アジアなどに歴史的・文化的影響を持つ。 主な分布地域はIran、Afghanistan、Tajikistan。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・イラン語群に位置づけられる。 主な分布はIran、Afghanistan、Tajikistanである。 主要な表記体系としてPerso-Arabicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Persian",
                "glottolog": "https://glottolog.org/glottolog?iso=fas"
            },
            "nativeName": "فارسی",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "pashto": {
            "id": "pashto",
            "name": "パシュトー語",
            "englishName": "Pashto",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "イラン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ps",
                "2": "pus",
                "3": "pus"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Afghanistan",
                    "Pakistan"
                ]
            },
            "writing": {
                "scripts": [
                    "Perso-Arabic"
                ]
            },
            "official": {
                "countries": [
                    "Afghanistan",
                    "Pakistan"
                ]
            },
            "description": "イラン語群の言語。アフガニスタンとパキスタン西部を中心に話される。 主な分布地域はAfghanistan、Pakistan。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・イラン語群に位置づけられる。 主な分布はAfghanistan、Pakistanである。 主要な表記体系としてPerso-Arabicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Pashto",
                "glottolog": "https://glottolog.org/glottolog?iso=pus"
            },
            "nativeName": "پښتو",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "kurdish": {
            "id": "kurdish",
            "name": "クルド語",
            "englishName": "Kurdish",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "イラン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ku",
                "2": "kur",
                "3": "kur"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Turkey",
                    "Iraq",
                    "Iran",
                    "Syria"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin",
                    "Arabic",
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "イラン語群の言語群。クルド人社会で用いられ、複数の主要変種と複数の標準表記がある。 主な分布地域はTurkey、Iraq、Iran、Syria。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・イラン語群に位置づけられる。 主な分布はTurkey、Iraq、Iran、Syriaである。 主要な表記体系としてLatin、Arabic、Cyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Kurdish",
                "glottolog": "https://glottolog.org/glottolog?iso=kur"
            },
            "nativeName": "Kurdî / کوردی",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "tajik": {
            "id": "tajik",
            "name": "タジク語",
            "englishName": "Tajik",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "イラン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "tg",
                "2": "tgk",
                "3": "tgk"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Tajikistan",
                    "Uzbekistan"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "Tajikistan"
                ]
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「インド・イラン語派 → イラン語群」で表されます。 主な分布地域はTajikistan、Uzbekistan。 現代の主要な表記にはCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tajik",
                "glottolog": "https://glottolog.org/glottolog?iso=tgk"
            },
            "nativeName": "тоҷикӣ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "balochi": {
            "id": "balochi",
            "name": "バローチー語",
            "englishName": "Balochi",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "イラン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "bal",
                "3": "bal"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Pakistan",
                    "Iran",
                    "Afghanistan"
                ]
            },
            "writing": {
                "scripts": [
                    "Perso-Arabic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「インド・イラン語派 → イラン語群」で表されます。 主な分布地域はPakistan、Iran、Afghanistan。 現代の主要な表記にはLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Balochi",
                "glottolog": "https://glottolog.org/glottolog?iso=bal"
            },
            "nativeName": "بلوچی",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "ossetian": {
            "id": "ossetian",
            "name": "オセット語",
            "englishName": "Ossetian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "インド・イラン語派",
                    "イラン語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "os",
                "2": "oss",
                "3": "oss"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Russia",
                    "Georgia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "South Ossetia"
                ]
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「インド・イラン語派 → イラン語群」で表されます。 主な分布地域はRussia、Georgia。 現代の主要な表記にはCyrillicが用いられる。 系統分類ではインド・ヨーロッパ語族・インド・イラン語派・イラン語群に位置づけられる。 主な分布はRussia、Georgiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Ossetian",
                "glottolog": "https://glottolog.org/glottolog?iso=oss"
            },
            "nativeName": "ирон æвзаг",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "greek": {
            "id": "greek",
            "name": "ギリシア語",
            "englishName": "Greek",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ギリシア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "el",
                "2": "gre",
                "3": "ell"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Greece",
                    "Cyprus"
                ]
            },
            "writing": {
                "scripts": [
                    "Greek"
                ]
            },
            "official": {
                "countries": [
                    "Greece",
                    "Cyprus"
                ]
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ギリシア語派」で表されます。 主な分布地域はGreece、Cyprus。 現代の主要な表記にはGreekが用いられる。 系統分類ではインド・ヨーロッパ語族・ギリシア語派に位置づけられる。 主な分布はGreece、Cyprusである。 主要な表記体系としてGreekが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Greek",
                "glottolog": "https://glottolog.org/glottolog?iso=ell"
            },
            "nativeName": "ελληνικά",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "ancient_greek": {
            "id": "ancient_greek",
            "name": "古代ギリシア語",
            "englishName": "Ancient Greek",
            "type": "historical",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ギリシア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "grc",
                "3": "grc"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Greece",
                    "Eastern Mediterranean"
                ]
            },
            "writing": {
                "scripts": [
                    "Greek"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "古代ギリシア世界で用いられたギリシア語。ホメロス文学、古典期の哲学・歴史・科学などの重要な文献を残す。 系統分類ではインド・ヨーロッパ語族・ギリシア語派に位置づけられる。 主な分布はGreece、Eastern Mediterraneanである。 主要な表記体系としてGreekが用いられる。",
            "notes": [
                "ISO 639-3 は現代語・歴史語の区別やマクロ言語との関係に注意が必要。"
            ],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Ancient_Greek",
                "glottolog": "https://glottolog.org/glottolog?iso=grc"
            },
            "nativeName": "ἑλληνική",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "koine_greek": {
            "id": "koine_greek",
            "name": "コイネー・ギリシア語",
            "englishName": "Koine Greek",
            "type": "historical",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ギリシア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "grc",
                "3": "grc"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Eastern Mediterranean",
                    "Roman Empire"
                ]
            },
            "writing": {
                "scripts": [
                    "Greek"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ヘレニズム期以降に広域共通語として発達したギリシア語。新約聖書など初期キリスト教文献の主要言語でもある。 系統分類ではインド・ヨーロッパ語族・ギリシア語派に位置づけられる。 主な分布はEastern Mediterranean、Roman Empireである。 主要な表記体系としてGreekが用いられる。",
            "notes": [
                "ISO 639-3 は現代語・歴史語の区別やマクロ言語との関係に注意が必要。"
            ],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Koine_Greek",
                "glottolog": "https://glottolog.org/glottolog?iso=grc"
            },
            "nativeName": "κοινὴ διάλεκτος",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "albanian": {
            "id": "albanian",
            "name": "アルバニア語",
            "englishName": "Albanian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "アルバニア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "sq",
                "2": "alb",
                "3": "sqi"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Albania",
                    "Kosovo",
                    "North Macedonia",
                    "Montenegro"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Albania",
                    "Kosovo",
                    "North Macedonia"
                ]
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「アルバニア語派」で表されます。 主な分布地域はAlbania、Kosovo、North Macedonia、Montenegro。 現代の主要な表記にはLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Albanian",
                "glottolog": "https://glottolog.org/glottolog?iso=sqi"
            },
            "nativeName": "shqip",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "armenian": {
            "id": "armenian",
            "name": "アルメニア語",
            "englishName": "Armenian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "アルメニア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "hy",
                "2": "arm",
                "3": "hye"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Armenia",
                    "Georgia",
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Armenian"
                ]
            },
            "official": {
                "countries": [
                    "Armenia"
                ]
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「アルメニア語派」で表されます。 主な分布地域はArmenia、Georgia、Russia。 現代の主要な表記にはArmenianが用いられる。 系統分類ではインド・ヨーロッパ語族・アルメニア語派に位置づけられる。 主な分布はArmenia、Georgia、Russiaである。 主要な表記体系としてArmenianが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Armenian",
                "glottolog": "https://glottolog.org/glottolog?iso=hye"
            },
            "nativeName": "հայերեն",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "lithuanian": {
            "id": "lithuanian",
            "name": "リトアニア語",
            "englishName": "Lithuanian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "バルト語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "lt",
                "2": "lit",
                "3": "lit"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Lithuania"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Lithuania"
                ]
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「バルト語派」で表されます。 主な分布地域はLithuania。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・バルト語派に位置づけられる。 主な分布はLithuaniaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Lithuanian",
                "glottolog": "https://glottolog.org/glottolog?iso=lit"
            },
            "nativeName": "lietuvių kalba",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "latvian": {
            "id": "latvian",
            "name": "ラトビア語",
            "englishName": "Latvian",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "バルト語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "lv",
                "2": "lav",
                "3": "lav"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Latvia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Latvia"
                ]
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「バルト語派」で表されます。 主な分布地域はLatvia。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・バルト語派に位置づけられる。 主な分布はLatviaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Latvian",
                "glottolog": "https://glottolog.org/glottolog?iso=lav"
            },
            "nativeName": "latviešu valoda",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "irish": {
            "id": "irish",
            "name": "アイルランド語",
            "englishName": "Irish",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ケルト語派",
                    "島嶼ケルト語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ga",
                "2": "gle",
                "3": "gle"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "Ireland"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Ireland",
                    "European Union"
                ]
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ケルト語派 → 島嶼ケルト語」で表されます。 主な分布地域はIreland。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・ケルト語派・島嶼ケルト語に位置づけられる。 主な分布はIrelandである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Irish",
                "glottolog": "https://glottolog.org/glottolog?iso=gle"
            },
            "nativeName": "Gaeilge",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "scottish_gaelic": {
            "id": "scottish_gaelic",
            "name": "スコットランド・ゲール語",
            "englishName": "Scottish Gaelic",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ケルト語派",
                    "島嶼ケルト語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "gd",
                "2": "gla",
                "3": "gla"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "United Kingdom"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ケルト語派 → 島嶼ケルト語」で表されます。 主な分布地域はUnited Kingdom。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・ケルト語派・島嶼ケルト語に位置づけられる。 主な分布はUnited Kingdomである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Scottish_Gaelic",
                "glottolog": "https://glottolog.org/glottolog?iso=gla"
            },
            "nativeName": "Gàidhlig",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "welsh": {
            "id": "welsh",
            "name": "ウェールズ語",
            "englishName": "Welsh",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ケルト語派",
                    "島嶼ケルト語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "cy",
                "2": "wel",
                "3": "cym"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "United Kingdom"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Wales",
                    "United Kingdom"
                ]
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ケルト語派 → 島嶼ケルト語」で表されます。 主な分布地域はUnited Kingdom。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・ケルト語派・島嶼ケルト語に位置づけられる。 主な分布はUnited Kingdomである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Welsh",
                "glottolog": "https://glottolog.org/glottolog?iso=cym"
            },
            "nativeName": "Cymraeg",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "breton": {
            "id": "breton",
            "name": "ブルトン語",
            "englishName": "Breton",
            "type": "language",
            "classification": {
                "path": [
                    "インド・ヨーロッパ語族",
                    "ケルト語派",
                    "島嶼ケルト語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "br",
                "2": "bre",
                "3": "bre"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Europe / South Asia / West Asia"
                ],
                "countries": [
                    "France"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ケルト語派 → 島嶼ケルト語」で表されます。 主な分布地域はFrance。 現代の主要な表記にはLatinが用いられる。 系統分類ではインド・ヨーロッパ語族・ケルト語派・島嶼ケルト語に位置づけられる。 主な分布はFranceである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Breton",
                "glottolog": "https://glottolog.org/glottolog?iso=bre"
            },
            "nativeName": "brezhoneg",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "mandarin_chinese": {
            "id": "mandarin_chinese",
            "name": "標準中国語",
            "englishName": "Mandarin Chinese",
            "type": "language",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "シナ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "cmn",
                "3": "cmn"
            },
            "speakers": {
                "native": 988000000,
                "total": 1183000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "East Asia / South Asia / Southeast Asia"
                ],
                "countries": [
                    "China",
                    "Taiwan",
                    "Singapore"
                ]
            },
            "writing": {
                "scripts": [
                    "Chinese characters"
                ]
            },
            "official": {
                "countries": [
                    "China",
                    "Taiwan",
                    "Singapore"
                ]
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。 主な分布地域はChina、Taiwan、Singapore。 現代の主要な表記にはChinese charactersが用いられる。 系統分類ではシナ・チベット語族・シナ語派に位置づけられる。 主な分布はChina、Taiwan、Singaporeである。 主要な表記体系としてChinese charactersが用いられる。 漢語の一変種で、中国語の他の主要変種とは音韻・語彙・文法の面で差がある。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Mandarin_Chinese",
                "glottolog": "https://glottolog.org/glottolog?iso=cmn"
            },
            "nativeName": "普通话",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "cantonese": {
            "id": "cantonese",
            "name": "広東語",
            "englishName": "Cantonese",
            "type": "language",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "シナ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "yue",
                "3": "yue"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "East Asia / South Asia / Southeast Asia"
                ],
                "countries": [
                    "China",
                    "Hong Kong",
                    "Macau"
                ]
            },
            "writing": {
                "scripts": [
                    "Chinese characters"
                ]
            },
            "official": {
                "countries": [
                    "Hong Kong",
                    "Macau"
                ]
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。 主な分布地域はChina、Hong Kong、Macau。 現代の主要な表記にはChinese charactersが用いられる。 系統分類ではシナ・チベット語族・シナ語派に位置づけられる。 主な分布はChina、Hong Kong、Macauである。 主要な表記体系としてChinese charactersが用いられる。 粤語の主要な変種で、香港・マカオや華人社会で広く使われる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Cantonese",
                "glottolog": "https://glottolog.org/glottolog?iso=yue"
            },
            "nativeName": "廣東話 / 粵語",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "wu_chinese": {
            "id": "wu_chinese",
            "name": "呉語",
            "englishName": "Wu Chinese",
            "type": "language",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "シナ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "wuu",
                "3": "wuu"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "East Asia / South Asia / Southeast Asia"
                ],
                "countries": [
                    "China"
                ]
            },
            "writing": {
                "scripts": [
                    "Chinese characters"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。 主な分布地域はChina。 現代の主要な表記にはChinese charactersが用いられる。 系統分類ではシナ・チベット語族・シナ語派に位置づけられる。 主な分布はChinaである。 主要な表記体系としてChinese charactersが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Wu_Chinese",
                "glottolog": "https://glottolog.org/glottolog?iso=wuu"
            },
            "nativeName": "吳語",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "southern_min": {
            "id": "southern_min",
            "name": "閩南語",
            "englishName": "Southern Min",
            "type": "language",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "シナ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "nan",
                "3": "nan"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "East Asia / South Asia / Southeast Asia"
                ],
                "countries": [
                    "China",
                    "Taiwan",
                    "Singapore",
                    "Malaysia",
                    "Philippines"
                ]
            },
            "writing": {
                "scripts": [
                    "Chinese characters"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。 主な分布地域はChina、Taiwan、Singapore、Malaysia、Philippines。 現代の主要な表記にはChinese charactersが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Southern_Min",
                "glottolog": "https://glottolog.org/glottolog?iso=nan"
            },
            "nativeName": "閩南語",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "eastern_min": {
            "id": "eastern_min",
            "name": "閩東語",
            "englishName": "Eastern Min",
            "type": "language",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "シナ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "cdo",
                "3": "cdo"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "East Asia / South Asia / Southeast Asia"
                ],
                "countries": [
                    "China"
                ]
            },
            "writing": {
                "scripts": [
                    "Chinese characters"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。 主な分布地域はChina。 現代の主要な表記にはChinese charactersが用いられる。 系統分類ではシナ・チベット語族・シナ語派に位置づけられる。 主な分布はChinaである。 主要な表記体系としてChinese charactersが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Eastern_Min",
                "glottolog": "https://glottolog.org/glottolog?iso=cdo"
            },
            "nativeName": "閩東語",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "hakka": {
            "id": "hakka",
            "name": "客家語",
            "englishName": "Hakka",
            "type": "language",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "シナ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "hak",
                "3": "hak"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "East Asia / South Asia / Southeast Asia"
                ],
                "countries": [
                    "China",
                    "Taiwan"
                ]
            },
            "writing": {
                "scripts": [
                    "Chinese characters"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。 主な分布地域はChina、Taiwan。 現代の主要な表記にはChinese charactersが用いられる。 系統分類ではシナ・チベット語族・シナ語派に位置づけられる。 主な分布はChina、Taiwanである。 主要な表記体系としてChinese charactersが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Hakka",
                "glottolog": "https://glottolog.org/glottolog?iso=hak"
            },
            "nativeName": "客家話",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "jin_chinese": {
            "id": "jin_chinese",
            "name": "晋語",
            "englishName": "Jin Chinese",
            "type": "language",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "シナ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "cjy",
                "3": "cjy"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "East Asia / South Asia / Southeast Asia"
                ],
                "countries": [
                    "China"
                ]
            },
            "writing": {
                "scripts": [
                    "Chinese characters"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。 主な分布地域はChina。 現代の主要な表記にはChinese charactersが用いられる。 系統分類ではシナ・チベット語族・シナ語派に位置づけられる。 主な分布はChinaである。 主要な表記体系としてChinese charactersが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Jin_Chinese",
                "glottolog": "https://glottolog.org/glottolog?iso=cjy"
            },
            "nativeName": "晋语",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "xiang_chinese": {
            "id": "xiang_chinese",
            "name": "湘語",
            "englishName": "Xiang Chinese",
            "type": "language",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "シナ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "hsn",
                "3": "hsn"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "East Asia / South Asia / Southeast Asia"
                ],
                "countries": [
                    "China"
                ]
            },
            "writing": {
                "scripts": [
                    "Chinese characters"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。 主な分布地域はChina。 現代の主要な表記にはChinese charactersが用いられる。 系統分類ではシナ・チベット語族・シナ語派に位置づけられる。 主な分布はChinaである。 主要な表記体系としてChinese charactersが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Xiang_Chinese",
                "glottolog": "https://glottolog.org/glottolog?iso=hsn"
            },
            "nativeName": "湘语",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "tibetan": {
            "id": "tibetan",
            "name": "チベット語",
            "englishName": "Tibetan",
            "type": "language",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "チベット諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "bo",
                "2": "tib",
                "3": "bod"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "East Asia / South Asia / Southeast Asia"
                ],
                "countries": [
                    "China",
                    "India",
                    "Nepal",
                    "Bhutan"
                ]
            },
            "writing": {
                "scripts": [
                    "Tibetan"
                ]
            },
            "official": {
                "countries": [
                    "China"
                ]
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「チベット諸語」で表されます。 主な分布地域はChina、India、Nepal、Bhutan。 現代の主要な表記にはTibetanが用いられる。 系統分類ではシナ・チベット語族・チベット諸語に位置づけられる。 主な分布はChina、India、Nepal、Bhutanである。 主要な表記体系としてTibetanが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tibetan",
                "glottolog": "https://glottolog.org/glottolog?iso=bod"
            },
            "nativeName": "བོད་སྐད་",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "burmese": {
            "id": "burmese",
            "name": "ビルマ語",
            "englishName": "Burmese",
            "type": "language",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "ロロ・ビルマ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "my",
                "2": "bur",
                "3": "mya"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "East Asia / South Asia / Southeast Asia"
                ],
                "countries": [
                    "Myanmar"
                ]
            },
            "writing": {
                "scripts": [
                    "Myanmar"
                ]
            },
            "official": {
                "countries": [
                    "Myanmar"
                ]
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「ロロ・ビルマ語派」で表されます。 主な分布地域はMyanmar。 現代の主要な表記にはMyanmarが用いられる。 系統分類ではシナ・チベット語族・ロロ・ビルマ語派に位置づけられる。 主な分布はMyanmarである。 主要な表記体系としてMyanmarが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Burmese",
                "glottolog": "https://glottolog.org/glottolog?iso=mya"
            },
            "nativeName": "မြန်မာဘာသာ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "karen_languages": {
            "id": "karen_languages",
            "name": "カレン諸語",
            "englishName": "Karen languages",
            "type": "language_group",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "カレン諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": null,
                "3": null
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "East Asia / South Asia / Southeast Asia"
                ],
                "countries": [
                    "Myanmar",
                    "Thailand"
                ]
            },
            "writing": {
                "scripts": [
                    "Burmese-derived scripts",
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "カレン諸語はミャンマーとタイを中心に分布する諸言語のグループ。シナ・チベット語族の中で独自の位置を占めるとされるが、内部分類には議論がある。 系統分類ではシナ・チベット語族・カレン諸語に位置づけられる。 主な分布はMyanmar、Thailandである。 主要な表記体系としてBurmese-derived scripts、Latinが用いられる。",
            "notes": [
                "カレン諸語は複数言語のグループであり、単一のISO 639-3コードを割り当てることはできない。"
            ],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Karen_languages",
                "glottolog": null
            },
            "nativeName": "Karen languages",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "meitei": {
            "id": "meitei",
            "name": "メイテイ語",
            "englishName": "Meitei",
            "type": "language",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "クキ・チン・メイテイ諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "mni",
                "3": "mni"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "East Asia / South Asia / Southeast Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Meitei Mayek",
                    "Bengali-Assamese"
                ]
            },
            "official": {
                "countries": [
                    "India"
                ]
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「クキ・チン・メイテイ諸語」で表されます。 主な分布地域はIndia。 現代の主要な表記にはMeitei Mayek・Bengali-Assameseが用いられる。 系統分類ではシナ・チベット語族・クキ・チン・メイテイ諸語に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてMeitei Mayek、Bengali-Assameseが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Meitei",
                "glottolog": "https://glottolog.org/glottolog?iso=mni"
            },
            "nativeName": "মৈতৈলোন্ / মৈতৈলোন্",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "modern_standard_arabic": {
            "id": "modern_standard_arabic",
            "name": "現代標準アラビア語",
            "englishName": "Modern Standard Arabic",
            "type": "language",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "セム語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "arb",
                "3": "arb"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North Africa / West Asia / Horn of Africa"
                ],
                "countries": [
                    "Arab countries across North Africa and West Asia"
                ]
            },
            "writing": {
                "scripts": [
                    "Arabic"
                ]
            },
            "official": {
                "countries": [
                    "Algeria",
                    "Bahrain",
                    "Comoros",
                    "Djibouti",
                    "Egypt",
                    "Iraq",
                    "Jordan",
                    "Kuwait",
                    "Lebanon",
                    "Libya",
                    "Mauritania",
                    "Morocco",
                    "Oman",
                    "Palestine",
                    "Qatar",
                    "Saudi Arabia",
                    "Somalia",
                    "Sudan",
                    "Syria",
                    "Tunisia",
                    "United Arab Emirates",
                    "Yemen"
                ]
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。 主な分布地域はArab countries across North Africa and West Asia。 現代の主要な表記にはArabicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Modern_Standard_Arabic",
                "glottolog": "https://glottolog.org/glottolog?iso=arb"
            },
            "nativeName": "العربية الفصحى",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "hebrew": {
            "id": "hebrew",
            "name": "ヘブライ語",
            "englishName": "Hebrew",
            "type": "language",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "セム語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "he",
                "2": "heb",
                "3": "heb"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North Africa / West Asia / Horn of Africa"
                ],
                "countries": [
                    "Israel"
                ]
            },
            "writing": {
                "scripts": [
                    "Hebrew"
                ]
            },
            "official": {
                "countries": [
                    "Israel"
                ]
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。 主な分布地域はIsrael。 現代の主要な表記にはHebrewが用いられる。 系統分類ではアフロ・アジア語族・セム語派に位置づけられる。 主な分布はIsraelである。 主要な表記体系としてHebrewが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Hebrew",
                "glottolog": "https://glottolog.org/glottolog?iso=heb"
            },
            "nativeName": "עברית",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "amharic": {
            "id": "amharic",
            "name": "アムハラ語",
            "englishName": "Amharic",
            "type": "language",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "セム語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "am",
                "2": "amh",
                "3": "amh"
            },
            "speakers": {
                "native": 39000000,
                "total": 78000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "North Africa / West Asia / Horn of Africa"
                ],
                "countries": [
                    "Ethiopia"
                ]
            },
            "writing": {
                "scripts": [
                    "Geʽez"
                ]
            },
            "official": {
                "countries": [
                    "Ethiopia"
                ]
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。 主な分布地域はEthiopia。 現代の主要な表記にはGeʽezが用いられる。 系統分類ではアフロ・アジア語族・セム語派に位置づけられる。 主な分布はEthiopiaである。 主要な表記体系としてGeʽezが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Amharic",
                "glottolog": "https://glottolog.org/glottolog?iso=amh"
            },
            "nativeName": "አማርኛ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "tigrinya": {
            "id": "tigrinya",
            "name": "ティグリニャ語",
            "englishName": "Tigrinya",
            "type": "language",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "セム語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ti",
                "2": "tir",
                "3": "tir"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North Africa / West Asia / Horn of Africa"
                ],
                "countries": [
                    "Eritrea",
                    "Ethiopia"
                ]
            },
            "writing": {
                "scripts": [
                    "Geʽez"
                ]
            },
            "official": {
                "countries": [
                    "Eritrea",
                    "Ethiopia"
                ]
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。 主な分布地域はEritrea、Ethiopia。 現代の主要な表記にはGeʽezが用いられる。 系統分類ではアフロ・アジア語族・セム語派に位置づけられる。 主な分布はEritrea、Ethiopiaである。 主要な表記体系としてGeʽezが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tigrinya",
                "glottolog": "https://glottolog.org/glottolog?iso=tir"
            },
            "nativeName": "ትግርኛ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "maltese": {
            "id": "maltese",
            "name": "マルタ語",
            "englishName": "Maltese",
            "type": "language",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "セム語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "mt",
                "2": "mlt",
                "3": "mlt"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North Africa / West Asia / Horn of Africa"
                ],
                "countries": [
                    "Malta"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Malta"
                ]
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。 主な分布地域はMalta。 系統分類ではアフロ・アジア語族・セム語派に位置づけられる。 主な分布はMaltaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Maltese",
                "glottolog": "https://glottolog.org/glottolog?iso=mlt"
            },
            "nativeName": "Malti",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "classical_arabic": {
            "id": "classical_arabic",
            "name": "古典アラビア語",
            "englishName": "Classical Arabic",
            "type": "historical",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "セム語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "ara",
                "3": "arb"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Arabian Peninsula",
                    "Middle East",
                    "North Africa"
                ]
            },
            "writing": {
                "scripts": [
                    "Arabic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "古典期のアラビア語。イスラム教成立期以降の宗教・文学・学術文献で重要で、現代標準アラビア語の歴史的基盤となっている。 系統分類ではアフロ・アジア語族・セム語派に位置づけられる。 主な分布はArabian Peninsula、Middle East、North Africaである。 主要な表記体系としてArabicが用いられる。",
            "notes": [
                "歴史的言語・言語群としての扱いに資料差があるため、ISOコードは参考値として扱う。",
                "ISO 639-3では古典アラビア語だけを独立コードで区別せず、Standard Arabic（arb）として扱われる。"
            ],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Classical_Arabic",
                "glottolog": "https://glottolog.org/glottolog?iso=arc"
            },
            "nativeName": "العربية الكلاسيكية",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "akkadian": {
            "id": "akkadian",
            "name": "アッカド語",
            "englishName": "Akkadian",
            "type": "historical",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "セム語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "akk",
                "3": "akk"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Mesopotamia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cuneiform"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "古代メソポタミアで用いられたセム語派の言語。楔形文字で記録され、アッシリア語・バビロニア語などの方言・変種を含む歴史的資料が残る。 系統分類ではアフロ・アジア語族・セム語派に位置づけられる。 主な分布はMesopotamiaである。 主要な表記体系としてCuneiformが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Akkadian",
                "glottolog": "https://glottolog.org/glottolog?iso=akk"
            },
            "nativeName": "𒀝𒅗𒁺𒌑 / akkadû",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "aramaic": {
            "id": "aramaic",
            "name": "アラム語",
            "englishName": "Aramaic",
            "type": "historical",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "セム語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "arc",
                "3": "arc"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Middle East"
                ]
            },
            "writing": {
                "scripts": [
                    "Syriac",
                    "Hebrew"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "古代西アジアで広く用いられたセム語派の言語群・歴史的言語。帝国アラム語などが広域行政語として用いられ、後代にも多数の方言が発達した。 系統分類ではアフロ・アジア語族・セム語派に位置づけられる。 主な分布はMiddle Eastである。 主要な表記体系としてSyriac、Hebrewが用いられる。",
            "notes": [
                "歴史的言語・言語群としての扱いに資料差があるため、ISOコードは参考値として扱う。"
            ],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Aramaic",
                "glottolog": "https://glottolog.org/glottolog?iso=arc"
            },
            "nativeName": "ܐܪܡܝܐ / Aramaic",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "egyptian_arabic": {
            "id": "egyptian_arabic",
            "name": "エジプト・アラビア語",
            "englishName": "Egyptian Arabic",
            "type": "language",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "セム語派",
                    "アラビア語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "arz",
                "3": "arz"
            },
            "speakers": {
                "native": 83000000,
                "total": 118000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "North Africa / West Asia / Horn of Africa"
                ],
                "countries": [
                    "Egypt"
                ]
            },
            "writing": {
                "scripts": [
                    "Arabic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派 → アラビア語」で表されます。 主な分布地域はEgypt。 現代の主要な表記にはArabicが用いられる。 系統分類ではアフロ・アジア語族・セム語派・アラビア語に位置づけられる。 主な分布はEgyptである。 主要な表記体系としてArabicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Egyptian_Arabic",
                "glottolog": "https://glottolog.org/glottolog?iso=arz"
            },
            "nativeName": "مصرى",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "levantine_arabic": {
            "id": "levantine_arabic",
            "name": "レバント・アラビア語",
            "englishName": "Levantine Arabic",
            "type": "language",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "セム語派",
                    "アラビア語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "apc",
                "3": "apc"
            },
            "speakers": {
                "native": 55000000,
                "total": 58000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "North Africa / West Asia / Horn of Africa"
                ],
                "countries": [
                    "Lebanon",
                    "Syria",
                    "Jordan",
                    "Palestine",
                    "Israel"
                ]
            },
            "writing": {
                "scripts": [
                    "Arabic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派 → アラビア語」で表されます。 主な分布地域はLebanon、Syria、Jordan、Palestine、Israel。 現代の主要な表記にはArabicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Levantine_Arabic",
                "glottolog": "https://glottolog.org/glottolog?iso=apc"
            },
            "nativeName": "شامي",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "moroccan_arabic": {
            "id": "moroccan_arabic",
            "name": "モロッコ・アラビア語",
            "englishName": "Moroccan Arabic",
            "type": "language",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "セム語派",
                    "アラビア語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "ary",
                "3": "ary"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North Africa / West Asia / Horn of Africa"
                ],
                "countries": [
                    "Morocco"
                ]
            },
            "writing": {
                "scripts": [
                    "Arabic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派 → アラビア語」で表されます。 主な分布地域はMorocco。 現代の主要な表記にはArabicが用いられる。 系統分類ではアフロ・アジア語族・セム語派・アラビア語に位置づけられる。 主な分布はMoroccoである。 主要な表記体系としてArabicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Moroccan_Arabic",
                "glottolog": "https://glottolog.org/glottolog?iso=ary"
            },
            "nativeName": "الدارجة المغربية",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "hausa": {
            "id": "hausa",
            "name": "ハウサ語",
            "englishName": "Hausa",
            "type": "language",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "チャド語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ha",
                "2": "hau",
                "3": "hau"
            },
            "speakers": {
                "native": 58000000,
                "total": 94000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "North Africa / West Asia / Horn of Africa"
                ],
                "countries": [
                    "Nigeria",
                    "Niger",
                    "Ghana"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin",
                    "Arabic (Ajami)"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「チャド語派」で表されます。 主な分布地域はNigeria、Niger、Ghana。 系統分類ではアフロ・アジア語族・チャド語派に位置づけられる。 主な分布はNigeria、Niger、Ghanaである。 主要な表記体系としてLatin、Arabic (Ajami)が用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Hausa",
                "glottolog": "https://glottolog.org/glottolog?iso=hau"
            },
            "nativeName": "Hausa",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "somali": {
            "id": "somali",
            "name": "ソマリ語",
            "englishName": "Somali",
            "type": "language",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "クシ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "so",
                "2": "som",
                "3": "som"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North Africa / West Asia / Horn of Africa"
                ],
                "countries": [
                    "Somalia",
                    "Ethiopia",
                    "Djibouti",
                    "Kenya"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「クシ語派」で表されます。 主な分布地域はSomalia、Ethiopia、Djibouti、Kenya。 系統分類ではアフロ・アジア語族・クシ語派に位置づけられる。 主な分布はSomalia、Ethiopia、Djibouti、Kenyaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Somali",
                "glottolog": "https://glottolog.org/glottolog?iso=som"
            },
            "nativeName": "Af-Soomaali",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "oromo": {
            "id": "oromo",
            "name": "オロモ語",
            "englishName": "Oromo",
            "type": "language",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "クシ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "om",
                "2": "orm",
                "3": "orm"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North Africa / West Asia / Horn of Africa"
                ],
                "countries": [
                    "Ethiopia",
                    "Kenya"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「クシ語派」で表されます。 主な分布地域はEthiopia、Kenya。 系統分類ではアフロ・アジア語族・クシ語派に位置づけられる。 主な分布はEthiopia、Kenyaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Oromo",
                "glottolog": "https://glottolog.org/glottolog?iso=orm"
            },
            "nativeName": "Afaan Oromoo",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "kabyle": {
            "id": "kabyle",
            "name": "カビル語",
            "englishName": "Kabyle",
            "type": "language",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "ベルベル語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "kab",
                "3": "kab"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North Africa / West Asia / Horn of Africa"
                ],
                "countries": [
                    "Algeria"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin",
                    "Tifinagh"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「ベルベル語派」で表されます。 主な分布地域はAlgeria。 系統分類ではアフロ・アジア語族・ベルベル語派に位置づけられる。 主な分布はAlgeriaである。 主要な表記体系としてLatin、Tifinaghが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Kabyle",
                "glottolog": "https://glottolog.org/glottolog?iso=kab"
            },
            "nativeName": "Taqbaylit",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "ancient_egyptian": {
            "id": "ancient_egyptian",
            "name": "古代エジプト語",
            "englishName": "Ancient Egyptian",
            "type": "historical",
            "classification": {
                "path": [
                    "アフロ・アジア語族",
                    "エジプト語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "egy",
                "3": "egy"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Egypt"
                ]
            },
            "writing": {
                "scripts": [
                    "Egyptian hieroglyphs",
                    "Hieratic",
                    "Demotic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "古代エジプトで約3000年以上にわたって用いられた言語。ヒエログリフ、ヒエラティック、デモティックなどの文字資料が残り、後のコプト語へつながる。 系統分類ではアフロ・アジア語族・エジプト語派に位置づけられる。 主な分布はEgyptである。 主要な表記体系としてEgyptian hieroglyphs、Hieratic、Demoticが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Ancient_Egyptian",
                "glottolog": "https://glottolog.org/glottolog?iso=egy"
            },
            "nativeName": "mdw nṯr",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "indonesian": {
            "id": "indonesian",
            "name": "インドネシア語",
            "englishName": "Indonesian",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "id",
                "2": "ind",
                "3": "ind"
            },
            "speakers": {
                "native": 78000000,
                "total": 255000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Indonesia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Indonesia"
                ]
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。 主な分布地域はIndonesia。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派に位置づけられる。 主な分布はIndonesiaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Indonesian",
                "glottolog": "https://glottolog.org/glottolog?iso=ind"
            },
            "nativeName": "Bahasa Indonesia",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "malay": {
            "id": "malay",
            "name": "マレー語",
            "englishName": "Malay",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ms",
                "2": "may",
                "3": "msa"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Malaysia",
                    "Brunei",
                    "Singapore",
                    "Indonesia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Malaysia",
                    "Brunei",
                    "Singapore"
                ]
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。 主な分布地域はMalaysia、Brunei、Singapore、Indonesia。 現代の主要な表記にはLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Malay",
                "glottolog": "https://glottolog.org/glottolog?iso=msa"
            },
            "nativeName": "Bahasa Melayu",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "javanese": {
            "id": "javanese",
            "name": "ジャワ語",
            "englishName": "Javanese",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "jv",
                "2": "jav",
                "3": "jav"
            },
            "speakers": {
                "native": null,
                "total": 69000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Indonesia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Indonesia"
                ]
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。 主な分布地域はIndonesia。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派に位置づけられる。 主な分布はIndonesiaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Javanese",
                "glottolog": "https://glottolog.org/glottolog?iso=jav"
            },
            "nativeName": "Basa Jawa",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "sundanese": {
            "id": "sundanese",
            "name": "スンダ語",
            "englishName": "Sundanese",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "su",
                "2": "sun",
                "3": "sun"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Indonesia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。 主な分布地域はIndonesia。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派に位置づけられる。 主な分布はIndonesiaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Sundanese",
                "glottolog": "https://glottolog.org/glottolog?iso=sun"
            },
            "nativeName": "Basa Sunda",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "madurese": {
            "id": "madurese",
            "name": "マドゥラ語",
            "englishName": "Madurese",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "mad",
                "3": "mad"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Indonesia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。 主な分布地域はIndonesia。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派に位置づけられる。 主な分布はIndonesiaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Madurese",
                "glottolog": "https://glottolog.org/glottolog?iso=mad"
            },
            "nativeName": "Bhâsa Madhurâ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "malagasy": {
            "id": "malagasy",
            "name": "マダガスカル語",
            "englishName": "Malagasy",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "mg",
                "2": "mlg",
                "3": "mlg"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Madagascar"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Madagascar"
                ]
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。 主な分布地域はMadagascar。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派に位置づけられる。 主な分布はMadagascarである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Malagasy",
                "glottolog": "https://glottolog.org/glottolog?iso=mlg"
            },
            "nativeName": "Malagasy",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "fijian": {
            "id": "fijian",
            "name": "フィジー語",
            "englishName": "Fijian",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "fj",
                "2": "fij",
                "3": "fij"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Fiji"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Fiji"
                ]
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。 主な分布地域はFiji。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派に位置づけられる。 主な分布はFijiである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Fijian",
                "glottolog": "https://glottolog.org/glottolog?iso=fij"
            },
            "nativeName": "vosa Vakaviti",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "palauan": {
            "id": "palauan",
            "name": "パラオ語",
            "englishName": "Palauan",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "pau",
                "3": "pau"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Palau"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Palau"
                ]
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。 主な分布地域はPalau。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派に位置づけられる。 主な分布はPalauである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Palauan",
                "glottolog": "https://glottolog.org/glottolog?iso=pau"
            },
            "nativeName": "a tekoi er a Belau",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "chamorro": {
            "id": "chamorro",
            "name": "チャモロ語",
            "englishName": "Chamorro",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ch",
                "2": "cha",
                "3": "cha"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Guam",
                    "Northern Mariana Islands"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Guam",
                    "Northern Mariana Islands"
                ]
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。 主な分布地域はGuam、Northern Mariana Islands。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派に位置づけられる。 主な分布はGuam、Northern Mariana Islandsである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Chamorro",
                "glottolog": "https://glottolog.org/glottolog?iso=cha"
            },
            "nativeName": "Finuʼ Chamoru",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "tagalog": {
            "id": "tagalog",
            "name": "タガログ語",
            "englishName": "Tagalog",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派",
                    "フィリピン諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "tl",
                "2": "tgl",
                "3": "tgl"
            },
            "speakers": {
                "native": 33000000,
                "total": 87000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Philippines"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Philippines"
                ]
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → フィリピン諸語」で表されます。 主な分布地域はPhilippines。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派・フィリピン諸語に位置づけられる。 主な分布はPhilippinesである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tagalog",
                "glottolog": "https://glottolog.org/glottolog?iso=tgl"
            },
            "nativeName": "Tagalog",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "cebuano": {
            "id": "cebuano",
            "name": "セブアノ語",
            "englishName": "Cebuano",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派",
                    "フィリピン諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "ceb",
                "3": "ceb"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Philippines"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → フィリピン諸語」で表されます。 主な分布地域はPhilippines。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派・フィリピン諸語に位置づけられる。 主な分布はPhilippinesである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Cebuano",
                "glottolog": "https://glottolog.org/glottolog?iso=ceb"
            },
            "nativeName": "Sinugboanon",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "ilocano": {
            "id": "ilocano",
            "name": "イロカノ語",
            "englishName": "Ilocano",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派",
                    "フィリピン諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "ilo",
                "3": "ilo"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Philippines"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → フィリピン諸語」で表されます。 主な分布地域はPhilippines。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派・フィリピン諸語に位置づけられる。 主な分布はPhilippinesである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Ilocano",
                "glottolog": "https://glottolog.org/glottolog?iso=ilo"
            },
            "nativeName": "Ilokano",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "m_ori": {
            "id": "m_ori",
            "name": "マオリ語",
            "englishName": "Māori",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派",
                    "ポリネシア諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "mi",
                "2": "mao",
                "3": "mri"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "New Zealand"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。 主な分布地域はNew Zealand。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派・ポリネシア諸語に位置づけられる。 主な分布はNew Zealandである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/M%C4%81ori",
                "glottolog": "https://glottolog.org/glottolog?iso=mri"
            },
            "nativeName": "Māori",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "hawaiian": {
            "id": "hawaiian",
            "name": "ハワイ語",
            "englishName": "Hawaiian",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派",
                    "ポリネシア諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "haw",
                "3": "haw"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "United States"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "United States (Hawaii)"
                ]
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。 主な分布地域はUnited States。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派・ポリネシア諸語に位置づけられる。 主な分布はUnited Statesである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Hawaiian",
                "glottolog": "https://glottolog.org/glottolog?iso=haw"
            },
            "nativeName": "ʻŌlelo Hawaiʻi",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "samoan": {
            "id": "samoan",
            "name": "サモア語",
            "englishName": "Samoan",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派",
                    "ポリネシア諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "sm",
                "2": "smo",
                "3": "smo"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Samoa",
                    "American Samoa"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Samoa"
                ]
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。 主な分布地域はSamoa、American Samoa。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派・ポリネシア諸語に位置づけられる。 主な分布はSamoa、American Samoaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Samoan",
                "glottolog": "https://glottolog.org/glottolog?iso=smo"
            },
            "nativeName": "Gagana Samoa",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "tongan": {
            "id": "tongan",
            "name": "トンガ語",
            "englishName": "Tongan",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派",
                    "ポリネシア諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "to",
                "2": "ton",
                "3": "ton"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "Tonga"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Tonga"
                ]
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。 主な分布地域はTonga。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派・ポリネシア諸語に位置づけられる。 主な分布はTongaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tongan",
                "glottolog": "https://glottolog.org/glottolog?iso=ton"
            },
            "nativeName": "lea faka-Tonga",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "tahitian": {
            "id": "tahitian",
            "name": "タヒチ語",
            "englishName": "Tahitian",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロネシア語族",
                    "マレー・ポリネシア語派",
                    "ポリネシア諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ty",
                "2": "tah",
                "3": "tah"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / Oceania / Madagascar"
                ],
                "countries": [
                    "French Polynesia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "French Polynesia"
                ]
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。 主な分布地域はFrench Polynesia。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロネシア語族・マレー・ポリネシア語派・ポリネシア諸語に位置づけられる。 主な分布はFrench Polynesiaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tahitian",
                "glottolog": "https://glottolog.org/glottolog?iso=tah"
            },
            "nativeName": "reo Tahiti",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "vietnamese": {
            "id": "vietnamese",
            "name": "ベトナム語",
            "englishName": "Vietnamese",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロアジア語族",
                    "モン・クメール語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "vi",
                "2": "vie",
                "3": "vie"
            },
            "speakers": {
                "native": 86000000,
                "total": 97000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Mainland Southeast Asia / South Asia"
                ],
                "countries": [
                    "Vietnam"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Vietnam"
                ]
            },
            "description": "オーストロアジア語族に分類される言語。より細かな分類は「モン・クメール語派」で表されます。 主な分布地域はVietnam。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロアジア語族・モン・クメール語派に位置づけられる。 主な分布はVietnamである。 主要な表記体系としてLatinが用いられる。 声調を持つ分析的な言語で、現在はラテン文字を基盤とするクオック・グーを用いる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Vietnamese",
                "glottolog": "https://glottolog.org/glottolog?iso=vie"
            },
            "nativeName": "Tiếng Việt",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "khmer": {
            "id": "khmer",
            "name": "クメール語",
            "englishName": "Khmer",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロアジア語族",
                    "モン・クメール語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "km",
                "2": "khm",
                "3": "khm"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Mainland Southeast Asia / South Asia"
                ],
                "countries": [
                    "Cambodia",
                    "Vietnam"
                ]
            },
            "writing": {
                "scripts": [
                    "Khmer"
                ]
            },
            "official": {
                "countries": [
                    "Cambodia"
                ]
            },
            "description": "オーストロアジア語族に分類される言語。より細かな分類は「モン・クメール語派」で表されます。 主な分布地域はCambodia、Vietnam。 現代の主要な表記にはKhmerが用いられる。 系統分類ではオーストロアジア語族・モン・クメール語派に位置づけられる。 主な分布はCambodia、Vietnamである。 主要な表記体系としてKhmerが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Khmer",
                "glottolog": "https://glottolog.org/glottolog?iso=khm"
            },
            "nativeName": "ភាសាខ្មែរ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "mon": {
            "id": "mon",
            "name": "モン語",
            "englishName": "Mon",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロアジア語族",
                    "モン・クメール語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "mnw",
                "3": "mnw"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Mainland Southeast Asia / South Asia"
                ],
                "countries": [
                    "Myanmar",
                    "Thailand"
                ]
            },
            "writing": {
                "scripts": [
                    "Mon"
                ]
            },
            "official": {
                "countries": [
                    "Myanmar"
                ]
            },
            "description": "オーストロアジア語族に分類される言語。より細かな分類は「モン・クメール語派」で表されます。 主な分布地域はMyanmar、Thailand。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロアジア語族・モン・クメール語派に位置づけられる。 主な分布はMyanmar、Thailandである。 主要な表記体系としてMonが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Mon",
                "glottolog": "https://glottolog.org/glottolog?iso=mnw"
            },
            "nativeName": "ဘာသာ မန်",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "santali": {
            "id": "santali",
            "name": "サンタル語",
            "englishName": "Santali",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロアジア語族",
                    "ムンダ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "sat",
                "3": "sat"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Mainland Southeast Asia / South Asia"
                ],
                "countries": [
                    "India",
                    "Bangladesh",
                    "Nepal"
                ]
            },
            "writing": {
                "scripts": [
                    "Ol Chiki",
                    "Devanagari",
                    "Bengali-Assamese"
                ]
            },
            "official": {
                "countries": [
                    "India"
                ]
            },
            "description": "オーストロアジア語族に分類される言語。より細かな分類は「ムンダ語派」で表されます。 主な分布地域はIndia、Bangladesh、Nepal。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロアジア語族・ムンダ語派に位置づけられる。 主な分布はIndia、Bangladesh、Nepalである。 主要な表記体系としてOl Chiki、Devanagari、Bengali-Assameseが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Santali",
                "glottolog": "https://glottolog.org/glottolog?iso=sat"
            },
            "nativeName": "ᱥᱟᱱᱛᱟᱲᱤ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "mundari": {
            "id": "mundari",
            "name": "ムンダリ語",
            "englishName": "Mundari",
            "type": "language",
            "classification": {
                "path": [
                    "オーストロアジア語族",
                    "ムンダ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "unr",
                "3": "unr"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Mainland Southeast Asia / South Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Ol Chiki",
                    "Devanagari"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "オーストロアジア語族に分類される言語。より細かな分類は「ムンダ語派」で表されます。 主な分布地域はIndia。 現代の主要な表記にはLatinが用いられる。 系統分類ではオーストロアジア語族・ムンダ語派に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてOl Chiki、Devanagariが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Mundari",
                "glottolog": "https://glottolog.org/glottolog?iso=unr"
            },
            "nativeName": "मुंडारी",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "tamil": {
            "id": "tamil",
            "name": "タミル語",
            "englishName": "Tamil",
            "type": "language",
            "classification": {
                "path": [
                    "ドラヴィダ語族",
                    "南ドラヴィダ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ta",
                "2": "tam",
                "3": "tam"
            },
            "speakers": {
                "native": 79000000,
                "total": 86000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "South Asia"
                ],
                "countries": [
                    "India",
                    "Sri Lanka",
                    "Singapore"
                ]
            },
            "writing": {
                "scripts": [
                    "Tamil"
                ]
            },
            "official": {
                "countries": [
                    "India",
                    "Sri Lanka",
                    "Singapore"
                ]
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「南ドラヴィダ語派」で表されます。 主な分布地域はIndia、Sri Lanka、Singapore。 現代の主要な表記にはTamilが用いられる。 系統分類ではドラヴィダ語族・南ドラヴィダ語派に位置づけられる。 主な分布はIndia、Sri Lanka、Singaporeである。 主要な表記体系としてTamilが用いられる。 長い文献史を持つドラヴィダ語族の言語で、古典語としても重要である。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tamil",
                "glottolog": "https://glottolog.org/glottolog?iso=tam"
            },
            "nativeName": "தமிழ்",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "kannada": {
            "id": "kannada",
            "name": "カンナダ語",
            "englishName": "Kannada",
            "type": "language",
            "classification": {
                "path": [
                    "ドラヴィダ語族",
                    "南ドラヴィダ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "kn",
                "2": "kan",
                "3": "kan"
            },
            "speakers": {
                "native": 44000000,
                "total": 59000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "South Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Kannada"
                ]
            },
            "official": {
                "countries": [
                    "India"
                ]
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「南ドラヴィダ語派」で表されます。 主な分布地域はIndia。 現代の主要な表記にはKannadaが用いられる。 系統分類ではドラヴィダ語族・南ドラヴィダ語派に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてKannadaが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Kannada",
                "glottolog": "https://glottolog.org/glottolog?iso=kan"
            },
            "nativeName": "ಕನ್ನಡ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "malayalam": {
            "id": "malayalam",
            "name": "マラヤーラム語",
            "englishName": "Malayalam",
            "type": "language",
            "classification": {
                "path": [
                    "ドラヴィダ語族",
                    "南ドラヴィダ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ml",
                "2": "mal",
                "3": "mal"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "South Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Malayalam"
                ]
            },
            "official": {
                "countries": [
                    "India"
                ]
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「南ドラヴィダ語派」で表されます。 主な分布地域はIndia。 現代の主要な表記にはMalayalamが用いられる。 系統分類ではドラヴィダ語族・南ドラヴィダ語派に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてMalayalamが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Malayalam",
                "glottolog": "https://glottolog.org/glottolog?iso=mal"
            },
            "nativeName": "മലയാളം",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "tulu": {
            "id": "tulu",
            "name": "トゥル語",
            "englishName": "Tulu",
            "type": "language",
            "classification": {
                "path": [
                    "ドラヴィダ語族",
                    "南ドラヴィダ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "tcy",
                "3": "tcy"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "South Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Kannada"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「南ドラヴィダ語派」で表されます。 主な分布地域はIndia。 現代の主要な表記にはLatinが用いられる。 系統分類ではドラヴィダ語族・南ドラヴィダ語派に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてKannadaが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tulu",
                "glottolog": "https://glottolog.org/glottolog?iso=tcy"
            },
            "nativeName": "ತುಳು",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "telugu": {
            "id": "telugu",
            "name": "テルグ語",
            "englishName": "Telugu",
            "type": "language",
            "classification": {
                "path": [
                    "ドラヴィダ語族",
                    "南中央ドラヴィダ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "te",
                "2": "tel",
                "3": "tel"
            },
            "speakers": {
                "native": 83000000,
                "total": 96000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "South Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Telugu"
                ]
            },
            "official": {
                "countries": [
                    "India"
                ]
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「南中央ドラヴィダ語派」で表されます。 主な分布地域はIndia。 現代の主要な表記にはTeluguが用いられる。 系統分類ではドラヴィダ語族・南中央ドラヴィダ語派に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてTeluguが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Telugu",
                "glottolog": "https://glottolog.org/glottolog?iso=tel"
            },
            "nativeName": "తెలుగు",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "gondi": {
            "id": "gondi",
            "name": "ゴーンディー語",
            "englishName": "Gondi",
            "type": "language",
            "classification": {
                "path": [
                    "ドラヴィダ語族",
                    "南中央ドラヴィダ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "gon",
                "3": "gon"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "South Asia"
                ],
                "countries": [
                    "India"
                ]
            },
            "writing": {
                "scripts": [
                    "Devanagari",
                    "Telugu"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「南中央ドラヴィダ語派」で表されます。 主な分布地域はIndia。 現代の主要な表記にはLatinが用いられる。 系統分類ではドラヴィダ語族・南中央ドラヴィダ語派に位置づけられる。 主な分布はIndiaである。 主要な表記体系としてDevanagari、Teluguが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Gondi",
                "glottolog": "https://glottolog.org/glottolog?iso=gon"
            },
            "nativeName": "Gōṇḍī",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "brahui": {
            "id": "brahui",
            "name": "ブラーフイー語",
            "englishName": "Brahui",
            "type": "language",
            "classification": {
                "path": [
                    "ドラヴィダ語族",
                    "北ドラヴィダ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "brh",
                "3": "brh"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "South Asia"
                ],
                "countries": [
                    "Pakistan"
                ]
            },
            "writing": {
                "scripts": [
                    "Arabic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「北ドラヴィダ語派」で表されます。 主な分布地域はPakistan。 現代の主要な表記にはLatinが用いられる。 系統分類ではドラヴィダ語族・北ドラヴィダ語派に位置づけられる。 主な分布はPakistanである。 主要な表記体系としてArabicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Brahui",
                "glottolog": "https://glottolog.org/glottolog?iso=brh"
            },
            "nativeName": "براوی",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "turkish": {
            "id": "turkish",
            "name": "トルコ語",
            "englishName": "Turkish",
            "type": "language",
            "classification": {
                "path": [
                    "テュルク語族",
                    "オグズ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "tr",
                "2": "tur",
                "3": "tur"
            },
            "speakers": {
                "native": 86000000,
                "total": 94000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Eurasia"
                ],
                "countries": [
                    "Turkey",
                    "Cyprus"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Turkey",
                    "Cyprus"
                ]
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「オグズ語群」で表されます。 主な分布地域はTurkey、Cyprus。 現代の主要な表記にはLatinが用いられる。 系統分類ではテュルク語族・オグズ語群に位置づけられる。 主な分布はTurkey、Cyprusである。 主要な表記体系としてLatinが用いられる。 母音調和と膠着的な形態論が特徴的で、ラテン文字による現代トルコ語正書法が定着している。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Turkish",
                "glottolog": "https://glottolog.org/glottolog?iso=tur"
            },
            "nativeName": "Türkçe",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "azerbaijani": {
            "id": "azerbaijani",
            "name": "アゼルバイジャン語",
            "englishName": "Azerbaijani",
            "type": "language",
            "classification": {
                "path": [
                    "テュルク語族",
                    "オグズ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "az",
                "2": "aze",
                "3": "aze"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Eurasia"
                ],
                "countries": [
                    "Azerbaijan",
                    "Iran",
                    "Georgia",
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Azerbaijan"
                ]
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「オグズ語群」で表されます。 主な分布地域はAzerbaijan、Iran、Georgia、Russia。 現代の主要な表記にはLatinが用いられる。 系統分類ではテュルク語族・オグズ語群に位置づけられる。 主な分布はAzerbaijan、Iran、Georgia、Russiaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Azerbaijani",
                "glottolog": "https://glottolog.org/glottolog?iso=aze"
            },
            "nativeName": "azərbaycan dili",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "turkmen": {
            "id": "turkmen",
            "name": "トルクメン語",
            "englishName": "Turkmen",
            "type": "language",
            "classification": {
                "path": [
                    "テュルク語族",
                    "オグズ語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "tk",
                "2": "tuk",
                "3": "tuk"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Eurasia"
                ],
                "countries": [
                    "Turkmenistan",
                    "Afghanistan",
                    "Iran"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Turkmenistan"
                ]
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「オグズ語群」で表されます。 主な分布地域はTurkmenistan、Afghanistan、Iran。 現代の主要な表記にはLatinが用いられる。 系統分類ではテュルク語族・オグズ語群に位置づけられる。 主な分布はTurkmenistan、Afghanistan、Iranである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Turkmen",
                "glottolog": "https://glottolog.org/glottolog?iso=tuk"
            },
            "nativeName": "Türkmen dili",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "chuvash": {
            "id": "chuvash",
            "name": "チュヴァシ語",
            "englishName": "Chuvash",
            "type": "language",
            "classification": {
                "path": [
                    "テュルク語族",
                    "オグール語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "cv",
                "2": "chv",
                "3": "chv"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Eurasia"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "Chuvash Republic"
                ]
            },
            "description": "テュルク語族のオグール語群に属する言語。ロシア連邦チュヴァシ共和国を中心に話され、現代の標準表記にはキリル文字を用いる。テュルク諸語の中でもブルガール語群につながる独特の位置を占める。 系統分類ではテュルク語族・オグール語群に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Chuvash",
                "glottolog": "https://glottolog.org/glottolog?iso=chv"
            },
            "nativeName": "чӑвашла",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "uzbek": {
            "id": "uzbek",
            "name": "ウズベク語",
            "englishName": "Uzbek",
            "type": "language",
            "classification": {
                "path": [
                    "テュルク語族",
                    "カルルク語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "uz",
                "2": "uzb",
                "3": "uzb"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Eurasia"
                ],
                "countries": [
                    "Uzbekistan",
                    "Afghanistan"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Uzbekistan"
                ]
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「カルルク語群」で表されます。 主な分布地域はUzbekistan、Afghanistan。 現代の主要な表記にはLatinが用いられる。 系統分類ではテュルク語族・カルルク語群に位置づけられる。 主な分布はUzbekistan、Afghanistanである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Uzbek",
                "glottolog": "https://glottolog.org/glottolog?iso=uzb"
            },
            "nativeName": "Oʻzbekcha",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "uyghur": {
            "id": "uyghur",
            "name": "ウイグル語",
            "englishName": "Uyghur",
            "type": "language",
            "classification": {
                "path": [
                    "テュルク語族",
                    "カルルク語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ug",
                "2": "uig",
                "3": "uig"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Eurasia"
                ],
                "countries": [
                    "China",
                    "Kazakhstan",
                    "Kyrgyzstan"
                ]
            },
            "writing": {
                "scripts": [
                    "Arabic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「カルルク語群」で表されます。 主な分布地域はChina、Kazakhstan、Kyrgyzstan。 現代の主要な表記にはLatinが用いられる。 系統分類ではテュルク語族・カルルク語群に位置づけられる。 主な分布はChina、Kazakhstan、Kyrgyzstanである。 主要な表記体系としてArabicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Uyghur",
                "glottolog": "https://glottolog.org/glottolog?iso=uig"
            },
            "nativeName": "ئۇيغۇرچە",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "kazakh": {
            "id": "kazakh",
            "name": "カザフ語",
            "englishName": "Kazakh",
            "type": "language",
            "classification": {
                "path": [
                    "テュルク語族",
                    "キプチャク語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "kk",
                "2": "kaz",
                "3": "kaz"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Eurasia"
                ],
                "countries": [
                    "Kazakhstan",
                    "China",
                    "Mongolia",
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic",
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Kazakhstan"
                ]
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「キプチャク語群」で表されます。 主な分布地域はKazakhstan、China、Mongolia、Russia。 現代の主要な表記にはCyrillicが用いられる。 系統分類ではテュルク語族・キプチャク語群に位置づけられる。 主な分布はKazakhstan、China、Mongolia、Russiaである。 主要な表記体系としてCyrillic、Latinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Kazakh",
                "glottolog": "https://glottolog.org/glottolog?iso=kaz"
            },
            "nativeName": "қазақ тілі",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "kyrgyz": {
            "id": "kyrgyz",
            "name": "キルギス語",
            "englishName": "Kyrgyz",
            "type": "language",
            "classification": {
                "path": [
                    "テュルク語族",
                    "キプチャク語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ky",
                "2": "kir",
                "3": "kir"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Eurasia"
                ],
                "countries": [
                    "Kyrgyzstan",
                    "China"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "Kyrgyzstan"
                ]
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「キプチャク語群」で表されます。 主な分布地域はKyrgyzstan、China。 現代の主要な表記にはCyrillicが用いられる。 系統分類ではテュルク語族・キプチャク語群に位置づけられる。 主な分布はKyrgyzstan、Chinaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Kyrgyz",
                "glottolog": "https://glottolog.org/glottolog?iso=kir"
            },
            "nativeName": "кыргызча",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "tatar": {
            "id": "tatar",
            "name": "タタール語",
            "englishName": "Tatar",
            "type": "language",
            "classification": {
                "path": [
                    "テュルク語族",
                    "キプチャク語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "tt",
                "2": "tat",
                "3": "tat"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Eurasia"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "Tatarstan"
                ]
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「キプチャク語群」で表されます。 主な分布地域はRussia。 現代の主要な表記にはCyrillicが用いられる。 系統分類ではテュルク語族・キプチャク語群に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tatar",
                "glottolog": "https://glottolog.org/glottolog?iso=tat"
            },
            "nativeName": "татарча",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "bashkir": {
            "id": "bashkir",
            "name": "バシキール語",
            "englishName": "Bashkir",
            "type": "language",
            "classification": {
                "path": [
                    "テュルク語族",
                    "キプチャク語群"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ba",
                "2": "bak",
                "3": "bak"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Eurasia"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "Bashkortostan"
                ]
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「キプチャク語群」で表されます。 主な分布地域はRussia。 現代の主要な表記にはCyrillicが用いられる。 系統分類ではテュルク語族・キプチャク語群に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Bashkir",
                "glottolog": "https://glottolog.org/glottolog?iso=bak"
            },
            "nativeName": "башҡортса",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "sakha": {
            "id": "sakha",
            "name": "サハ語",
            "englishName": "Sakha",
            "type": "language",
            "classification": {
                "path": [
                    "テュルク語族",
                    "シベリア・テュルク諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "sah",
                "3": "sah"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Eurasia"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "Sakha Republic"
                ]
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「シベリア・テュルク諸語」で表されます。 主な分布地域はRussia。 現代の主要な表記にはCyrillicが用いられる。 系統分類ではテュルク語族・シベリア・テュルク諸語に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Sakha",
                "glottolog": "https://glottolog.org/glottolog?iso=sah"
            },
            "nativeName": "саха тыла",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "finnish": {
            "id": "finnish",
            "name": "フィンランド語",
            "englishName": "Finnish",
            "type": "language",
            "classification": {
                "path": [
                    "ウラル語族",
                    "フィン・ウゴル語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "fi",
                "2": "fin",
                "3": "fin"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Northern Eurasia / Europe"
                ],
                "countries": [
                    "Finland"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Finland"
                ]
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。 主な分布地域はFinland。 現代の主要な表記にはLatinが用いられる。 系統分類ではウラル語族・フィン・ウゴル語派に位置づけられる。 主な分布はFinlandである。 主要な表記体系としてLatinが用いられる。 豊富な格体系と母音調和を持つウラル語族の言語である。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Finnish",
                "glottolog": "https://glottolog.org/glottolog?iso=fin"
            },
            "nativeName": "suomi",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "estonian": {
            "id": "estonian",
            "name": "エストニア語",
            "englishName": "Estonian",
            "type": "language",
            "classification": {
                "path": [
                    "ウラル語族",
                    "フィン・ウゴル語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "et",
                "2": "est",
                "3": "est"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Northern Eurasia / Europe"
                ],
                "countries": [
                    "Estonia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Estonia"
                ]
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。 主な分布地域はEstonia。 現代の主要な表記にはLatinが用いられる。 系統分類ではウラル語族・フィン・ウゴル語派に位置づけられる。 主な分布はEstoniaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Estonian",
                "glottolog": "https://glottolog.org/glottolog?iso=est"
            },
            "nativeName": "eesti keel",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "mari": {
            "id": "mari",
            "name": "マリ語",
            "englishName": "Mari",
            "type": "language",
            "classification": {
                "path": [
                    "ウラル語族",
                    "フィン・ウゴル語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "chm",
                "3": "chm"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Northern Eurasia / Europe"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。 主な分布地域はRussia。 現代の主要な表記にはLatinが用いられる。 系統分類ではウラル語族・フィン・ウゴル語派に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Mari",
                "glottolog": "https://glottolog.org/glottolog?iso=chm"
            },
            "nativeName": "марий йылме",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "udmurt": {
            "id": "udmurt",
            "name": "ウドムルト語",
            "englishName": "Udmurt",
            "type": "language",
            "classification": {
                "path": [
                    "ウラル語族",
                    "フィン・ウゴル語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "udm",
                "3": "udm"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Northern Eurasia / Europe"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。 主な分布地域はRussia。 現代の主要な表記にはLatinが用いられる。 系統分類ではウラル語族・フィン・ウゴル語派に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Udmurt",
                "glottolog": "https://glottolog.org/glottolog?iso=udm"
            },
            "nativeName": "удмурт кыл",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "komi": {
            "id": "komi",
            "name": "コミ語",
            "englishName": "Komi",
            "type": "language",
            "classification": {
                "path": [
                    "ウラル語族",
                    "フィン・ウゴル語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "kv",
                "2": "kom",
                "3": "kom"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Northern Eurasia / Europe"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。 主な分布地域はRussia。 現代の主要な表記にはLatinが用いられる。 系統分類ではウラル語族・フィン・ウゴル語派に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Komi",
                "glottolog": "https://glottolog.org/glottolog?iso=kom"
            },
            "nativeName": "коми кыв",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "erzya": {
            "id": "erzya",
            "name": "エルジャ語",
            "englishName": "Erzya",
            "type": "language",
            "classification": {
                "path": [
                    "ウラル語族",
                    "フィン・ウゴル語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "myv",
                "3": "myv"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Northern Eurasia / Europe"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。 主な分布地域はRussia。 現代の主要な表記にはLatinが用いられる。 系統分類ではウラル語族・フィン・ウゴル語派に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Erzya",
                "glottolog": "https://glottolog.org/glottolog?iso=myv"
            },
            "nativeName": "эрзянь кель",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "moksha": {
            "id": "moksha",
            "name": "モクシャ語",
            "englishName": "Moksha",
            "type": "language",
            "classification": {
                "path": [
                    "ウラル語族",
                    "フィン・ウゴル語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "mdf",
                "3": "mdf"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Northern Eurasia / Europe"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。 主な分布地域はRussia。 現代の主要な表記にはLatinが用いられる。 系統分類ではウラル語族・フィン・ウゴル語派に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Moksha",
                "glottolog": "https://glottolog.org/glottolog?iso=mdf"
            },
            "nativeName": "мокшень кяль",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "hungarian": {
            "id": "hungarian",
            "name": "ハンガリー語",
            "englishName": "Hungarian",
            "type": "language",
            "classification": {
                "path": [
                    "ウラル語族",
                    "ウゴル語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "hu",
                "2": "hun",
                "3": "hun"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Northern Eurasia / Europe"
                ],
                "countries": [
                    "Hungary"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Hungary"
                ]
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「ウゴル語派」で表されます。 主な分布地域はHungary。 現代の主要な表記にはLatinが用いられる。 系統分類ではウラル語族・ウゴル語派に位置づけられる。 主な分布はHungaryである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Hungarian",
                "glottolog": "https://glottolog.org/glottolog?iso=hun"
            },
            "nativeName": "magyar",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "northern_sami": {
            "id": "northern_sami",
            "name": "北サーミ語",
            "englishName": "Northern Sami",
            "type": "language",
            "classification": {
                "path": [
                    "ウラル語族",
                    "サーミ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "se",
                "2": "sme",
                "3": "sme"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Northern Eurasia / Europe"
                ],
                "countries": [
                    "Norway",
                    "Sweden",
                    "Finland"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Norway",
                    "Sweden",
                    "Finland"
                ]
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「サーミ語派」で表されます。 主な分布地域はNorway、Sweden、Finland。 現代の主要な表記にはLatinが用いられる。 系統分類ではウラル語族・サーミ語派に位置づけられる。 主な分布はNorway、Sweden、Finlandである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Northern_Sami",
                "glottolog": "https://glottolog.org/glottolog?iso=sme"
            },
            "nativeName": "davvisámegiella",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "thai": {
            "id": "thai",
            "name": "タイ語",
            "englishName": "Thai",
            "type": "language",
            "classification": {
                "path": [
                    "タイ・カダイ語族",
                    "タイ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "th",
                "2": "tha",
                "3": "tha"
            },
            "speakers": {
                "native": 27000000,
                "total": 71000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / South China"
                ],
                "countries": [
                    "Thailand"
                ]
            },
            "writing": {
                "scripts": [
                    "Thai"
                ]
            },
            "official": {
                "countries": [
                    "Thailand"
                ]
            },
            "description": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。 主な分布地域はThailand。 現代の主要な表記にはThaiが用いられる。 系統分類ではタイ・カダイ語族・タイ語派に位置づけられる。 主な分布はThailandである。 主要な表記体系としてThaiが用いられる。 声調・声門化などの音韻的特徴を持ち、独自のタイ文字で表記される。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Thai",
                "glottolog": "https://glottolog.org/glottolog?iso=tha"
            },
            "nativeName": "ภาษาไทย",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "lao": {
            "id": "lao",
            "name": "ラオ語",
            "englishName": "Lao",
            "type": "language",
            "classification": {
                "path": [
                    "タイ・カダイ語族",
                    "タイ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "lo",
                "2": "lao",
                "3": "lao"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / South China"
                ],
                "countries": [
                    "Laos",
                    "Thailand"
                ]
            },
            "writing": {
                "scripts": [
                    "Lao"
                ]
            },
            "official": {
                "countries": [
                    "Laos"
                ]
            },
            "description": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。 主な分布地域はLaos、Thailand。 現代の主要な表記にはLaoが用いられる。 系統分類ではタイ・カダイ語族・タイ語派に位置づけられる。 主な分布はLaos、Thailandである。 主要な表記体系としてLaoが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Lao",
                "glottolog": "https://glottolog.org/glottolog?iso=lao"
            },
            "nativeName": "ພາສາລາວ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "zhuang": {
            "id": "zhuang",
            "name": "チワン語",
            "englishName": "Zhuang",
            "type": "language",
            "classification": {
                "path": [
                    "タイ・カダイ語族",
                    "タイ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "za",
                "2": "zha",
                "3": "zha"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / South China"
                ],
                "countries": [
                    "China"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin",
                    "Chinese characters"
                ]
            },
            "official": {
                "countries": [
                    "China"
                ]
            },
            "description": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。 主な分布地域はChina。 現代の主要な表記にはLatinが用いられる。 系統分類ではタイ・カダイ語族・タイ語派に位置づけられる。 主な分布はChinaである。 主要な表記体系としてLatin、Chinese charactersが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Zhuang",
                "glottolog": "https://glottolog.org/glottolog?iso=zha"
            },
            "nativeName": "Vahcuengh",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "shan": {
            "id": "shan",
            "name": "シャン語",
            "englishName": "Shan",
            "type": "language",
            "classification": {
                "path": [
                    "タイ・カダイ語族",
                    "タイ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "shn",
                "3": "shn"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / South China"
                ],
                "countries": [
                    "Myanmar"
                ]
            },
            "writing": {
                "scripts": [
                    "Myanmar"
                ]
            },
            "official": {
                "countries": [
                    "Myanmar"
                ]
            },
            "description": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。 主な分布地域はMyanmar。 現代の主要な表記にはLatinが用いられる。 系統分類ではタイ・カダイ語族・タイ語派に位置づけられる。 主な分布はMyanmarである。 主要な表記体系としてMyanmarが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Shan",
                "glottolog": "https://glottolog.org/glottolog?iso=shn"
            },
            "nativeName": "ၽႃႇသႃႇတႆး",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "tai_nuea": {
            "id": "tai_nuea",
            "name": "タイ・ヌア語",
            "englishName": "Tai Nuea",
            "type": "language",
            "classification": {
                "path": [
                    "タイ・カダイ語族",
                    "タイ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "tdd",
                "3": "tdd"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Southeast Asia / South China"
                ],
                "countries": [
                    "China",
                    "Laos",
                    "Thailand"
                ]
            },
            "writing": {
                "scripts": [
                    "Tai Tham",
                    "Thai"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。 主な分布地域はChina、Laos、Thailand。 現代の主要な表記にはLatinが用いられる。 系統分類ではタイ・カダイ語族・タイ語派に位置づけられる。 主な分布はChina、Laos、Thailandである。 主要な表記体系としてTai Tham、Thaiが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tai_Nuea",
                "glottolog": "https://glottolog.org/glottolog?iso=tdd"
            },
            "nativeName": "ᦅ᧴ᦑᦺᦟᦾᦵ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "japanese": {
            "id": "japanese",
            "name": "日本語",
            "englishName": "Japanese",
            "type": "language",
            "classification": {
                "path": [
                    "日琉語族",
                    "日本語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ja",
                "2": "jpn",
                "3": "jpn"
            },
            "speakers": {
                "native": 124000000,
                "total": 126000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Japan"
                ]
            },
            "writing": {
                "scripts": [
                    "Kanji",
                    "Hiragana",
                    "Katakana"
                ]
            },
            "official": {
                "countries": [
                    "Japan"
                ]
            },
            "description": "日琉語族に属する言語。漢字と仮名を組み合わせる独自の書記体系を発達させ、日本列島を中心に用いられる。 主な分布地域はJapan。 現代の主要な表記にはKanji・Hiragana・Katakanaが用いられる。 系統分類では日琉語族・日本語派に位置づけられる。 主な分布はJapanである。 主要な表記体系としてKanji、Hiragana、Katakanaが用いられる。 日本語の系統的位置には議論があるが、GlottologではJaponic（日琉語族）に分類される。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Japanese",
                "glottolog": "https://glottolog.org/glottolog?iso=jpn"
            },
            "nativeName": "日本語",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "amami": {
            "id": "amami",
            "name": "奄美語",
            "englishName": "Amami",
            "type": "language",
            "classification": {
                "path": [
                    "日琉語族",
                    "琉球語派",
                    "北琉球諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "ryn",
                "3": "ryn"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Japan"
                ]
            },
            "writing": {
                "scripts": [
                    "Japanese kana/kanji"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 北琉球諸語」で表されます。 主な分布地域はJapan。 系統分類では日琉語族・琉球語派・北琉球諸語に位置づけられる。 主な分布はJapanである。 主要な表記体系としてJapanese kana/kanjiが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Amami",
                "glottolog": "https://glottolog.org/glottolog?iso=ryn"
            },
            "nativeName": "シマユムタ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "okinawan": {
            "id": "okinawan",
            "name": "沖縄語",
            "englishName": "Okinawan",
            "type": "language",
            "classification": {
                "path": [
                    "日琉語族",
                    "琉球語派",
                    "南琉球諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "ryu",
                "3": "ryu"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Japan"
                ]
            },
            "writing": {
                "scripts": [
                    "Japanese kana/kanji"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 南琉球諸語」で表されます。 主な分布地域はJapan。 系統分類では日琉語族・琉球語派・南琉球諸語に位置づけられる。 主な分布はJapanである。 主要な表記体系としてJapanese kana/kanjiが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Okinawan",
                "glottolog": "https://glottolog.org/glottolog?iso=ryu"
            },
            "nativeName": "ウチナーグチ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "miyako": {
            "id": "miyako",
            "name": "宮古語",
            "englishName": "Miyako",
            "type": "language",
            "classification": {
                "path": [
                    "日琉語族",
                    "琉球語派",
                    "南琉球諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "mvi",
                "3": "mvi"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Japan"
                ]
            },
            "writing": {
                "scripts": [
                    "Japanese kana/kanji"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 南琉球諸語」で表されます。 主な分布地域はJapan。 系統分類では日琉語族・琉球語派・南琉球諸語に位置づけられる。 主な分布はJapanである。 主要な表記体系としてJapanese kana/kanjiが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Miyako",
                "glottolog": "https://glottolog.org/glottolog?iso=mvi"
            },
            "nativeName": "ミャークフツ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "yaeyama": {
            "id": "yaeyama",
            "name": "八重山語",
            "englishName": "Yaeyama",
            "type": "language",
            "classification": {
                "path": [
                    "日琉語族",
                    "琉球語派",
                    "南琉球諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "rys",
                "3": "rys"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Japan"
                ]
            },
            "writing": {
                "scripts": [
                    "Japanese kana/kanji"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 南琉球諸語」で表されます。 主な分布地域はJapan。 系統分類では日琉語族・琉球語派・南琉球諸語に位置づけられる。 主な分布はJapanである。 主要な表記体系としてJapanese kana/kanjiが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Yaeyama",
                "glottolog": "https://glottolog.org/glottolog?iso=rys"
            },
            "nativeName": "ヤイマムニ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "yonaguni": {
            "id": "yonaguni",
            "name": "与那国語",
            "englishName": "Yonaguni",
            "type": "language",
            "classification": {
                "path": [
                    "日琉語族",
                    "琉球語派",
                    "南琉球諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "yoi",
                "3": "yoi"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Japan"
                ]
            },
            "writing": {
                "scripts": [
                    "Japanese kana/kanji"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 南琉球諸語」で表されます。 主な分布地域はJapan。 系統分類では日琉語族・琉球語派・南琉球諸語に位置づけられる。 主な分布はJapanである。 主要な表記体系としてJapanese kana/kanjiが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Yonaguni",
                "glottolog": "https://glottolog.org/glottolog?iso=yoi"
            },
            "nativeName": "ドゥナンムヌイ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "korean": {
            "id": "korean",
            "name": "朝鮮語",
            "englishName": "Korean",
            "type": "language",
            "classification": {
                "path": [
                    "朝鮮語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ko",
                "2": "kor",
                "3": "kor"
            },
            "speakers": {
                "native": 82000000,
                "total": 82000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "Korean Peninsula"
                ],
                "countries": [
                    "South Korea",
                    "North Korea"
                ]
            },
            "writing": {
                "scripts": [
                    "Hangul"
                ]
            },
            "official": {
                "countries": [
                    "South Korea",
                    "North Korea"
                ]
            },
            "description": "朝鮮語族に属する言語。韓国・北朝鮮を中心に用い、ハングルという体系的な文字を持つ。 主な分布地域はSouth Korea、North Korea。 系統分類では朝鮮語族に位置づけられる。 主な分布はSouth Korea、North Koreaである。 主要な表記体系としてHangulが用いられる。 朝鮮半島を中心に用いられ、ハングルを主要な表記体系とする。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Korean",
                "glottolog": "https://glottolog.org/glottolog?iso=kor"
            },
            "nativeName": "한국어 / 조선말",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "jeju": {
            "id": "jeju",
            "name": "済州語",
            "englishName": "Jeju",
            "type": "language",
            "classification": {
                "path": [
                    "朝鮮語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "jje",
                "3": "jje"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Korean Peninsula"
                ],
                "countries": [
                    "South Korea"
                ]
            },
            "writing": {
                "scripts": [
                    "Hangul"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "朝鮮語族に分類される言語。分類上は朝鮮語族に位置づけられる。 主な分布地域はSouth Korea。 主な分布地域はSouth Korea。 系統分類では朝鮮語族に位置づけられる。 主な分布はSouth Koreaである。 主要な表記体系としてHangulが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Jeju",
                "glottolog": "https://glottolog.org/glottolog?iso=jje"
            },
            "nativeName": "제주어",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "mongolian": {
            "id": "mongolian",
            "name": "モンゴル語",
            "englishName": "Mongolian",
            "type": "language",
            "classification": {
                "path": [
                    "モンゴル語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "mn",
                "2": "mon",
                "3": "mon"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Central Asia / East Asia"
                ],
                "countries": [
                    "Mongolia",
                    "China"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": [
                    "Mongolia"
                ]
            },
            "description": "モンゴル語族に分類される言語。分類上はモンゴル語族に位置づけられる。 主な分布地域はMongolia、China。 現代の主要な表記にはCyrillicが用いられる。 主な分布地域はMongolia、China。 系統分類ではモンゴル語族に位置づけられる。 主な分布はMongolia、Chinaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Mongolian",
                "glottolog": "https://glottolog.org/glottolog?iso=mon"
            },
            "nativeName": "монгол хэл",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "buryat": {
            "id": "buryat",
            "name": "ブリヤート語",
            "englishName": "Buryat",
            "type": "language",
            "classification": {
                "path": [
                    "モンゴル語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "bua",
                "3": "bua"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Central Asia / East Asia"
                ],
                "countries": [
                    "Russia",
                    "Mongolia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "モンゴル語族に分類される言語。分類上はモンゴル語族に位置づけられる。 主な分布地域はRussia、Mongolia。 現代の主要な表記にはCyrillicが用いられる。 主な分布地域はRussia、Mongolia。 系統分類ではモンゴル語族に位置づけられる。 主な分布はRussia、Mongoliaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Buryat",
                "glottolog": "https://glottolog.org/glottolog?iso=bua"
            },
            "nativeName": "буряад хэлэн",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "kalmyk": {
            "id": "kalmyk",
            "name": "カルムイク語",
            "englishName": "Kalmyk",
            "type": "language",
            "classification": {
                "path": [
                    "モンゴル語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "xal",
                "3": "xal"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Central Asia / East Asia"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "モンゴル語族に分類される言語。分類上はモンゴル語族に位置づけられる。 主な分布地域はRussia。 現代の主要な表記にはCyrillicが用いられる。 主な分布地域はRussia。 系統分類ではモンゴル語族に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Kalmyk",
                "glottolog": "https://glottolog.org/glottolog?iso=xal"
            },
            "nativeName": "хальмг келн",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "swahili": {
            "id": "swahili",
            "name": "スワヒリ語",
            "englishName": "Swahili",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "バントゥー諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "sw",
                "2": "swa",
                "3": "swa"
            },
            "speakers": {
                "native": 4000000,
                "total": 95000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "Tanzania",
                    "Kenya",
                    "Uganda",
                    "Democratic Republic of the Congo"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Tanzania",
                    "Kenya",
                    "Uganda",
                    "Rwanda"
                ]
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。 主な分布地域はTanzania、Kenya、Uganda、Democratic Republic of the Congo。 現代の主要な表記にはLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Swahili",
                "glottolog": "https://glottolog.org/glottolog?iso=swa"
            },
            "nativeName": "Kiswahili",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "zulu": {
            "id": "zulu",
            "name": "ズールー語",
            "englishName": "Zulu",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "バントゥー諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "zu",
                "2": "zul",
                "3": "zul"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "South Africa"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "South Africa"
                ]
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。 主な分布地域はSouth Africa。 現代の主要な表記にはLatinが用いられる。 系統分類ではニジェール・コンゴ語族・バントゥー諸語に位置づけられる。 主な分布はSouth Africaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Zulu",
                "glottolog": "https://glottolog.org/glottolog?iso=zul"
            },
            "nativeName": "isiZulu",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "xhosa": {
            "id": "xhosa",
            "name": "コサ語",
            "englishName": "Xhosa",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "バントゥー諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "xh",
                "2": "xho",
                "3": "xho"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "South Africa"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "South Africa"
                ]
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。 主な分布地域はSouth Africa。 現代の主要な表記にはLatinが用いられる。 系統分類ではニジェール・コンゴ語族・バントゥー諸語に位置づけられる。 主な分布はSouth Africaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Xhosa",
                "glottolog": "https://glottolog.org/glottolog?iso=xho"
            },
            "nativeName": "isiXhosa",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "southern_sotho": {
            "id": "southern_sotho",
            "name": "ソト語",
            "englishName": "Southern Sotho",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "バントゥー諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "st",
                "2": "sot",
                "3": "sot"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "Lesotho",
                    "South Africa"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Lesotho",
                    "South Africa"
                ]
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。 主な分布地域はLesotho、South Africa。 現代の主要な表記にはLatinが用いられる。 系統分類ではニジェール・コンゴ語族・バントゥー諸語に位置づけられる。 主な分布はLesotho、South Africaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Southern_Sotho",
                "glottolog": "https://glottolog.org/glottolog?iso=sot"
            },
            "nativeName": "Sesotho",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "tswana": {
            "id": "tswana",
            "name": "ツワナ語",
            "englishName": "Tswana",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "バントゥー諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "tn",
                "2": "tsn",
                "3": "tsn"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "Botswana",
                    "South Africa"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Botswana",
                    "South Africa"
                ]
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。 主な分布地域はBotswana、South Africa。 現代の主要な表記にはLatinが用いられる。 系統分類ではニジェール・コンゴ語族・バントゥー諸語に位置づけられる。 主な分布はBotswana、South Africaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tswana",
                "glottolog": "https://glottolog.org/glottolog?iso=tsn"
            },
            "nativeName": "Setswana",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "shona": {
            "id": "shona",
            "name": "ショナ語",
            "englishName": "Shona",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "バントゥー諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "sn",
                "2": "sna",
                "3": "sna"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "Zimbabwe",
                    "Mozambique"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。 主な分布地域はZimbabwe、Mozambique。 現代の主要な表記にはLatinが用いられる。 系統分類ではニジェール・コンゴ語族・バントゥー諸語に位置づけられる。 主な分布はZimbabwe、Mozambiqueである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Shona",
                "glottolog": "https://glottolog.org/glottolog?iso=sna"
            },
            "nativeName": "chiShona",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "lingala": {
            "id": "lingala",
            "name": "リンガラ語",
            "englishName": "Lingala",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "バントゥー諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ln",
                "2": "lin",
                "3": "lin"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "Democratic Republic of the Congo",
                    "Republic of the Congo"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Democratic Republic of the Congo",
                    "Republic of the Congo"
                ]
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。 主な分布地域はDemocratic Republic of the Congo、Republic of the Congo。 現代の主要な表記にはLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Lingala",
                "glottolog": "https://glottolog.org/glottolog?iso=lin"
            },
            "nativeName": "Lingála",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "kikongo": {
            "id": "kikongo",
            "name": "コンゴ語",
            "englishName": "Kikongo",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "バントゥー諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "kg",
                "2": "kon",
                "3": "kon"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "Angola",
                    "Democratic Republic of the Congo",
                    "Republic of the Congo"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。 主な分布地域はAngola、Democratic Republic of the Congo、Republic of the Congo。 現代の主要な表記にはLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Kikongo",
                "glottolog": "https://glottolog.org/glottolog?iso=kon"
            },
            "nativeName": "Kikongo",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "kinyarwanda": {
            "id": "kinyarwanda",
            "name": "ルワンダ語",
            "englishName": "Kinyarwanda",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "バントゥー諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "rw",
                "2": "kin",
                "3": "kin"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "Rwanda"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Rwanda"
                ]
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。 主な分布地域はRwanda。 現代の主要な表記にはLatinが用いられる。 系統分類ではニジェール・コンゴ語族・バントゥー諸語に位置づけられる。 主な分布はRwandaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Kinyarwanda",
                "glottolog": "https://glottolog.org/glottolog?iso=kin"
            },
            "nativeName": "Ikinyarwanda",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "kirundi": {
            "id": "kirundi",
            "name": "ルンディ語",
            "englishName": "Kirundi",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "バントゥー諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "rn",
                "2": "run",
                "3": "run"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "Burundi"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Burundi"
                ]
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。 主な分布地域はBurundi。 現代の主要な表記にはLatinが用いられる。 系統分類ではニジェール・コンゴ語族・バントゥー諸語に位置づけられる。 主な分布はBurundiである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Kirundi",
                "glottolog": "https://glottolog.org/glottolog?iso=run"
            },
            "nativeName": "Kirundi",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "yoruba": {
            "id": "yoruba",
            "name": "ヨルバ語",
            "englishName": "Yoruba",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "デファ・ヨルバ語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "yo",
                "2": "yor",
                "3": "yor"
            },
            "speakers": {
                "native": 48000000,
                "total": 53000000,
                "year": 2026,
                "source": "Ethnologue 2026（Wikipedia公開集計表による確認）"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "Nigeria",
                    "Benin"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Nigeria"
                ]
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「デファ・ヨルバ語派」で表されます。 主な分布地域はNigeria、Benin。 現代の主要な表記にはLatinが用いられる。 系統分類ではニジェール・コンゴ語族・デファ・ヨルバ語派に位置づけられる。 主な分布はNigeria、Beninである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Yoruba",
                "glottolog": "https://glottolog.org/glottolog?iso=yor"
            },
            "nativeName": "Yorùbá",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "reviewed"
        },
        "igbo": {
            "id": "igbo",
            "name": "イボ語",
            "englishName": "Igbo",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "ボルタ・ニジェール語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ig",
                "2": "ibo",
                "3": "ibo"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "Nigeria"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Nigeria"
                ]
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「ボルタ・ニジェール語派」で表されます。 主な分布地域はNigeria。 現代の主要な表記にはLatinが用いられる。 系統分類ではニジェール・コンゴ語族・ボルタ・ニジェール語派に位置づけられる。 主な分布はNigeriaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Igbo",
                "glottolog": "https://glottolog.org/glottolog?iso=ibo"
            },
            "nativeName": "Asụsụ Igbo",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "fon": {
            "id": "fon",
            "name": "フォン語",
            "englishName": "Fon",
            "type": "language",
            "classification": {
                "path": [
                    "ニジェール・コンゴ語族",
                    "ボルタ・ニジェール語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "fon",
                "3": "fon"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "West / Central / Southern Africa"
                ],
                "countries": [
                    "Benin"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Benin"
                ]
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「ボルタ・ニジェール語派」で表されます。 主な分布地域はBenin。 現代の主要な表記にはLatinが用いられる。 系統分類ではニジェール・コンゴ語族・ボルタ・ニジェール語派に位置づけられる。 主な分布はBeninである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Fon",
                "glottolog": "https://glottolog.org/glottolog?iso=fon"
            },
            "nativeName": "Fɔ̀ngbè",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "nahuatl": {
            "id": "nahuatl",
            "name": "ナワトル語",
            "englishName": "Nahuatl",
            "type": "language",
            "classification": {
                "path": [
                    "ユト・アステカ語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "nch",
                "3": "nch"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North / Central / South America"
                ],
                "countries": [
                    "Mexico"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ユト・アステカ語族に分類される言語。分類上はユト・アステカ語族に位置づけられる。 主な分布地域はMexico。 現代の主要な表記にはLatinが用いられる。 主な分布地域はMexico。 系統分類ではユト・アステカ語族に位置づけられる。 主な分布はMexicoである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Nahuatl",
                "glottolog": "https://glottolog.org/glottolog?iso=nch"
            },
            "nativeName": "Nāhuatl",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "yucatec_maya": {
            "id": "yucatec_maya",
            "name": "ユカテコ語",
            "englishName": "Yucatec Maya",
            "type": "language",
            "classification": {
                "path": [
                    "マヤ語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "yua",
                "3": "yua"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North / Central / South America"
                ],
                "countries": [
                    "Mexico"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "マヤ語族に分類される言語。分類上はマヤ語族に位置づけられる。 主な分布地域はMexico。 現代の主要な表記にはLatinが用いられる。 主な分布地域はMexico。 系統分類ではマヤ語族に位置づけられる。 主な分布はMexicoである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Yucatec_Maya",
                "glottolog": "https://glottolog.org/glottolog?iso=yua"
            },
            "nativeName": "Maaya tʼàan",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "k_iche": {
            "id": "k_iche",
            "name": "キチェ語",
            "englishName": "Kʼicheʼ",
            "type": "language",
            "classification": {
                "path": [
                    "マヤ語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "quc",
                "3": "quc"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North / Central / South America"
                ],
                "countries": [
                    "Guatemala"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "マヤ語族に分類される言語。分類上はマヤ語族に位置づけられる。 主な分布地域はGuatemala。 現代の主要な表記にはLatinが用いられる。 主な分布地域はGuatemala。 系統分類ではマヤ語族に位置づけられる。 主な分布はGuatemalaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/K%CA%BCiche%CA%BC",
                "glottolog": "https://glottolog.org/glottolog?iso=quc"
            },
            "nativeName": "Qʼeqchiʼ / Kʼicheʼ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "quechua": {
            "id": "quechua",
            "name": "ケチュア語",
            "englishName": "Quechua",
            "type": "language",
            "classification": {
                "path": [
                    "ケチュア語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "qu",
                "2": "que",
                "3": "que"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North / Central / South America"
                ],
                "countries": [
                    "Peru",
                    "Bolivia",
                    "Ecuador",
                    "Colombia",
                    "Argentina",
                    "Chile"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Peru",
                    "Bolivia"
                ]
            },
            "description": "ケチュア語族に分類される言語。分類上はケチュア語族に位置づけられる。 主な分布地域はPeru、Bolivia、Ecuador、Colombia、Argentina。 現代の主要な表記にはLatinが用いられる。 主な分布地域はPeru、Bolivia、Ecuador、Colombia。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Quechua",
                "glottolog": "https://glottolog.org/glottolog?iso=que"
            },
            "nativeName": "Runa Simi / Quechua",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "aymara": {
            "id": "aymara",
            "name": "アイマラ語",
            "englishName": "Aymara",
            "type": "language",
            "classification": {
                "path": [
                    "アイマラ語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ay",
                "2": "aym",
                "3": "aym"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North / Central / South America"
                ],
                "countries": [
                    "Bolivia",
                    "Peru",
                    "Chile"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Bolivia",
                    "Peru"
                ]
            },
            "description": "アイマラ語族に分類される言語。分類上はアイマラ語族に位置づけられる。 主な分布地域はBolivia、Peru、Chile。 現代の主要な表記にはLatinが用いられる。 主な分布地域はBolivia、Peru、Chile。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Aymara",
                "glottolog": "https://glottolog.org/glottolog?iso=aym"
            },
            "nativeName": "Aymar aru",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "guaran": {
            "id": "guaran",
            "name": "グアラニー語",
            "englishName": "Guaraní",
            "type": "language",
            "classification": {
                "path": [
                    "トゥピ語族",
                    "トゥピ・グアラニー語派"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "gn",
                "2": "grn",
                "3": "grn"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North / Central / South America"
                ],
                "countries": [
                    "Paraguay",
                    "Bolivia",
                    "Brazil",
                    "Argentina"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "トゥピ語族に分類される言語。より細かな分類は「トゥピ・グアラニー語派」で表されます。 主な分布地域はParaguay、Bolivia、Brazil、Argentina。 現代の主要な表記にはLatinが用いられる。 系統分類ではトゥピ語族・トゥピ・グアラニー語派に位置づけられる。 主な分布はParaguay、Bolivia、Brazil、Argentinaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Guaran%C3%AD",
                "glottolog": "https://glottolog.org/glottolog?iso=grn"
            },
            "nativeName": "Avañeʼẽ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "mohawk": {
            "id": "mohawk",
            "name": "モホーク語",
            "englishName": "Mohawk",
            "type": "language",
            "classification": {
                "path": [
                    "イロコイ語族",
                    "北部イロコイ諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "moh",
                "3": "moh"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North / Central / South America"
                ],
                "countries": [
                    "Canada",
                    "United States"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "イロコイ語族に分類される言語。より細かな分類は「北部イロコイ諸語」で表されます。 主な分布地域はCanada、United States。 現代の主要な表記にはLatinが用いられる。 系統分類ではイロコイ語族・北部イロコイ諸語に位置づけられる。 主な分布はCanada、United Statesである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Mohawk",
                "glottolog": "https://glottolog.org/glottolog?iso=moh"
            },
            "nativeName": "Kanienʼkéha",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "cherokee": {
            "id": "cherokee",
            "name": "チェロキー語",
            "englishName": "Cherokee",
            "type": "language",
            "classification": {
                "path": [
                    "イロコイ語族",
                    "南部イロコイ諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "chr",
                "3": "chr"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North / Central / South America"
                ],
                "countries": [
                    "United States"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "イロコイ語族に分類される言語。より細かな分類は「南部イロコイ諸語」で表されます。 主な分布地域はUnited States。 現代の主要な表記にはLatinが用いられる。 系統分類ではイロコイ語族・南部イロコイ諸語に位置づけられる。 主な分布はUnited Statesである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Cherokee",
                "glottolog": "https://glottolog.org/glottolog?iso=chr"
            },
            "nativeName": "ᏣᎳᎩ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "navajo": {
            "id": "navajo",
            "name": "ナバホ語",
            "englishName": "Navajo",
            "type": "language",
            "classification": {
                "path": [
                    "デネ・イェニセイ語族",
                    "アサバスカ諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "nv",
                "2": "nav",
                "3": "nav"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "North / Central / South America"
                ],
                "countries": [
                    "United States"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "United States"
                ]
            },
            "description": "デネ・イェニセイ語族に分類される言語。より細かな分類は「アサバスカ諸語」で表されます。 主な分布地域はUnited States。 現代の主要な表記にはLatinが用いられる。 系統分類ではデネ・イェニセイ語族・アサバスカ諸語に位置づけられる。 主な分布はUnited Statesである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Navajo",
                "glottolog": "https://glottolog.org/glottolog?iso=nav"
            },
            "nativeName": "Diné bizaad",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "inuktitut": {
            "id": "inuktitut",
            "name": "イヌクティトゥット語",
            "englishName": "Inuktitut",
            "type": "language",
            "classification": {
                "path": [
                    "エスキモー・アレウト語族",
                    "イヌイット諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "iu",
                "2": "iku",
                "3": "iku"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Canada"
                ]
            },
            "writing": {
                "scripts": [
                    "Canadian Aboriginal syllabics",
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Canada"
                ]
            },
            "description": "エスキモー・アレウト語族に分類される言語。より細かな分類は「イヌイット諸語」で表されます。 主な分布地域はCanada。 現代の主要な表記にはLatinが用いられる。 系統分類ではエスキモー・アレウト語族・イヌイット諸語に位置づけられる。 主な分布はCanadaである。 主要な表記体系としてCanadian Aboriginal syllabics、Latinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Inuktitut",
                "glottolog": "https://glottolog.org/glottolog?iso=iku"
            },
            "nativeName": "ᐃᓄᒃᑎᑐᑦ",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "greenlandic": {
            "id": "greenlandic",
            "name": "グリーンランド語",
            "englishName": "Greenlandic",
            "type": "language",
            "classification": {
                "path": [
                    "エスキモー・アレウト語族",
                    "イヌイット諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "kl",
                "2": "kal",
                "3": "kal"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Greenland"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Greenland"
                ]
            },
            "description": "エスキモー・アレウト語族に分類される言語。より細かな分類は「イヌイット諸語」で表されます。 主な分布地域はGreenland。 現代の主要な表記にはLatinが用いられる。 系統分類ではエスキモー・アレウト語族・イヌイット諸語に位置づけられる。 主な分布はGreenlandである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Greenlandic",
                "glottolog": "https://glottolog.org/glottolog?iso=kal"
            },
            "nativeName": "kalaallisut",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "pitjantjatjara": {
            "id": "pitjantjatjara",
            "name": "ピチャンチャチャラ語",
            "englishName": "Pitjantjatjara",
            "type": "language",
            "classification": {
                "path": [
                    "パマ・ニュンガ語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "pjt",
                "3": "pjt"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Australia / New Guinea"
                ],
                "countries": [
                    "Australia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "パマ・ニュンガ語族に分類される言語。分類上はパマ・ニュンガ語族に位置づけられる。 主な分布地域はAustralia。 現代の主要な表記にはLatinが用いられる。 主な分布地域はAustralia。 系統分類ではパマ・ニュンガ語族に位置づけられる。 主な分布はAustraliaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Pitjantjatjara",
                "glottolog": "https://glottolog.org/glottolog?iso=pjt"
            },
            "nativeName": "Pitjantjatjara",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "warlpiri": {
            "id": "warlpiri",
            "name": "ワルピリ語",
            "englishName": "Warlpiri",
            "type": "language",
            "classification": {
                "path": [
                    "パマ・ニュンガ語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "wbp",
                "3": "wbp"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Australia / New Guinea"
                ],
                "countries": [
                    "Australia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "パマ・ニュンガ語族に分類される言語。分類上はパマ・ニュンガ語族に位置づけられる。 主な分布地域はAustralia。 現代の主要な表記にはLatinが用いられる。 主な分布地域はAustralia。 系統分類ではパマ・ニュンガ語族に位置づけられる。 主な分布はAustraliaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Warlpiri",
                "glottolog": "https://glottolog.org/glottolog?iso=wbp"
            },
            "nativeName": "Warlpiri",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "arrernte": {
            "id": "arrernte",
            "name": "アレルンテ語",
            "englishName": "Arrernte",
            "type": "language",
            "classification": {
                "path": [
                    "パマ・ニュンガ語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "aer",
                "3": "aer"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Australia / New Guinea"
                ],
                "countries": [
                    "Australia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "パマ・ニュンガ語族に分類される言語。分類上はパマ・ニュンガ語族に位置づけられる。 主な分布地域はAustralia。 現代の主要な表記にはLatinが用いられる。 主な分布地域はAustralia。 系統分類ではパマ・ニュンガ語族に位置づけられる。 主な分布はAustraliaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Arrernte",
                "glottolog": "https://glottolog.org/glottolog?iso=aer"
            },
            "nativeName": "Arrernte",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "huli": {
            "id": "huli",
            "name": "フリ語",
            "englishName": "Huli",
            "type": "language",
            "classification": {
                "path": [
                    "トランス・ニューギニア語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "hui",
                "3": "hui"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Australia / New Guinea"
                ],
                "countries": [
                    "Papua New Guinea"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "トランス・ニューギニア語族に分類される言語。分類上はトランス・ニューギニア語族に位置づけられる。 主な分布地域はPapua New Guinea。 現代の主要な表記にはLatinが用いられる。 主な分布地域はPapua New Guinea。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Huli",
                "glottolog": "https://glottolog.org/glottolog?iso=hui"
            },
            "nativeName": "Huli",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "dani": {
            "id": "dani",
            "name": "ダニ語",
            "englishName": "Dani",
            "type": "language",
            "classification": {
                "path": [
                    "トランス・ニューギニア語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "dnu",
                "3": "dnu"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Australia / New Guinea"
                ],
                "countries": [
                    "Indonesia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "トランス・ニューギニア語族に分類される言語。分類上はトランス・ニューギニア語族に位置づけられる。 主な分布地域はIndonesia。 現代の主要な表記にはLatinが用いられる。 主な分布地域はIndonesia。 系統分類ではトランス・ニューギニア語族に位置づけられる。 主な分布はIndonesiaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Dani",
                "glottolog": "https://glottolog.org/glottolog?iso=dnu"
            },
            "nativeName": "Dani",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "chukchi": {
            "id": "chukchi",
            "name": "チュクチ語",
            "englishName": "Chukchi",
            "type": "language",
            "classification": {
                "path": [
                    "チュクチ・カムチャツカ語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "ckt",
                "3": "ckt"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "チュクチ・カムチャツカ語族に分類される言語。分類上はチュクチ・カムチャツカ語族に位置づけられる。 主な分布地域はRussia。 現代の主要な表記にはLatinが用いられる。 主な分布地域はRussia。 系統分類ではチュクチ・カムチャツカ語族に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Chukchi",
                "glottolog": "https://glottolog.org/glottolog?iso=ckt"
            },
            "nativeName": "ԓыгъоравэтԓьэн",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "koryak": {
            "id": "koryak",
            "name": "コリャーク語",
            "englishName": "Koryak",
            "type": "language",
            "classification": {
                "path": [
                    "チュクチ・カムチャツカ語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "kpy",
                "3": "kpy"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "チュクチ・カムチャツカ語族に分類される言語。分類上はチュクチ・カムチャツカ語族に位置づけられる。 主な分布地域はRussia。 現代の主要な表記にはLatinが用いられる。 主な分布地域はRussia。 系統分類ではチュクチ・カムチャツカ語族に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Koryak",
                "glottolog": "https://glottolog.org/glottolog?iso=kpy"
            },
            "nativeName": "нымылан",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "evenki": {
            "id": "evenki",
            "name": "エヴェンキ語",
            "englishName": "Evenki",
            "type": "language",
            "classification": {
                "path": [
                    "ツングース諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "evn",
                "3": "evn"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Russia",
                    "China"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ツングース諸語に分類される言語。分類上はツングース諸語に位置づけられる。 主な分布地域はRussia、China。 現代の主要な表記にはLatinが用いられる。 主な分布地域はRussia、China。 系統分類ではツングース諸語に位置づけられる。 主な分布はRussia、Chinaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Evenki",
                "glottolog": "https://glottolog.org/glottolog?iso=evn"
            },
            "nativeName": "эвэнки",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "ulch": {
            "id": "ulch",
            "name": "ウルチ語",
            "englishName": "Ulch",
            "type": "language",
            "classification": {
                "path": [
                    "ツングース諸語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "ulc",
                "3": "ulc"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ツングース諸語に分類される言語。分類上はツングース諸語に位置づけられる。 主な分布地域はRussia。 現代の主要な表記にはLatinが用いられる。 主な分布地域はRussia。 系統分類ではツングース諸語に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Ulch",
                "glottolog": "https://glottolog.org/glottolog?iso=ulc"
            },
            "nativeName": "нани",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "nivkh": {
            "id": "nivkh",
            "name": "ニヴフ語",
            "englishName": "Nivkh",
            "type": "language",
            "classification": {
                "path": [
                    "ニヴフ語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "niv",
                "3": "niv"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Russia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cyrillic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ニヴフ語族に分類される言語。分類上はニヴフ語族に位置づけられる。 主な分布地域はRussia。 現代の主要な表記にはLatinが用いられる。 主な分布地域はRussia。 系統分類ではニヴフ語族に位置づけられる。 主な分布はRussiaである。 主要な表記体系としてCyrillicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Nivkh",
                "glottolog": "https://glottolog.org/glottolog?iso=niv"
            },
            "nativeName": "ниӷвңгун",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "basque": {
            "id": "basque",
            "name": "バスク語",
            "englishName": "Basque",
            "type": "language",
            "classification": {
                "path": [
                    "孤立語族"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": "eu",
                "2": "baq",
                "3": "eus"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Spain",
                    "France"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Spain"
                ]
            },
            "description": "既知の他言語との確立した系統関係を持たない孤立言語。スペイン北部とフランス南西部のバスク地方で話される。 主な分布地域はSpain、France。 現代の主要な表記にはLatinが用いられる。 系統分類では孤立語族に位置づけられる。 主な分布はSpain、Franceである。 主要な表記体系としてLatinが用いられる。 インド・ヨーロッパ語族に属さない言語で、ヨーロッパに現存する主要な系統孤立言語として知られる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Basque",
                "glottolog": "https://glottolog.org/glottolog?iso=eus"
            },
            "nativeName": "euskara",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "ainu": {
            "id": "ainu",
            "name": "アイヌ語",
            "englishName": "Ainu",
            "type": "language",
            "classification": {
                "path": [
                    "孤立語族"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": null,
                "2": "ain",
                "3": "ain"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Japan"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin",
                    "Japanese kana"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "日本列島北部で話されてきた言語。現在の系統的位置づけは確立しておらず、独自の言語文化を持つ。 主な分布地域はJapan。 現代の主要な表記にはLatinが用いられる。 系統分類では孤立語族に位置づけられる。 主な分布はJapanである。 主要な表記体系としてLatin、Japanese kanaが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Ainu",
                "glottolog": "https://glottolog.org/glottolog?iso=ain"
            },
            "nativeName": "アイヌ・イタㇰ",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "burushaski": {
            "id": "burushaski",
            "name": "ブルシャスキー語",
            "englishName": "Burushaski",
            "type": "language",
            "classification": {
                "path": [
                    "孤立語族"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": null,
                "2": "bsk",
                "3": "bsk"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Pakistan"
                ]
            },
            "writing": {
                "scripts": [
                    "Arabic"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "パキスタン北部の山岳地帯で話される孤立言語。周辺のインド・ヨーロッパ語族やチベット・ビルマ系言語とは系統的に異なる。 主な分布地域はPakistan。 現代の主要な表記にはLatinが用いられる。 系統分類では孤立語族に位置づけられる。 主な分布はPakistanである。 主要な表記体系としてArabicが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Burushaski",
                "glottolog": "https://glottolog.org/glottolog?iso=bsk"
            },
            "nativeName": "Burushaski",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "zuni": {
            "id": "zuni",
            "name": "ズニ語",
            "englishName": "Zuni",
            "type": "language",
            "classification": {
                "path": [
                    "孤立語族"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": null,
                "2": "zun",
                "3": "zun"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "United States"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "北米南西部で話される先住民言語。一般に孤立言語として扱われる。 主な分布地域はUnited States。 現代の主要な表記にはLatinが用いられる。 系統分類では孤立語族に位置づけられる。 主な分布はUnited Statesである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Zuni",
                "glottolog": "https://glottolog.org/glottolog?iso=zun"
            },
            "nativeName": "Shiwiʼma",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "sumerian": {
            "id": "sumerian",
            "name": "シュメール語",
            "englishName": "Sumerian",
            "type": "historical",
            "classification": {
                "path": [
                    "孤立語族"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": null,
                "2": "sux",
                "3": "sux"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Mesopotamia"
                ]
            },
            "writing": {
                "scripts": [
                    "Cuneiform"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "古代メソポタミア南部で用いられた系統不明の言語。楔形文字による大量の行政・文学・宗教文書が残る。 系統分類では孤立語族に位置づけられる。 主な分布はMesopotamiaである。 主要な表記体系としてCuneiformが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Sumerian",
                "glottolog": "https://glottolog.org/glottolog?iso=sux"
            },
            "nativeName": "𒅴𒂠",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "y_l_dnye": {
            "id": "y_l_dnye",
            "name": "イェリ・ドニェ語",
            "englishName": "Yélî Dnye",
            "type": "language",
            "classification": {
                "path": [
                    "孤立語族"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": null,
                "2": "yle",
                "3": "yle"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Papua New Guinea"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "孤立語族に分類される言語。分類上は孤立語族に位置づけられる。 主な分布地域はPapua New Guinea。 主な分布地域はPapua New Guinea。 系統分類では孤立語族に位置づけられる。 主な分布はPapua New Guineaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Y%C3%A9l%C3%AE_Dnye",
                "glottolog": "https://glottolog.org/glottolog?iso=yle"
            },
            "nativeName": "Yélî Dnye",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "an_m": {
            "id": "an_m",
            "name": "アネム語",
            "englishName": "Anêm",
            "type": "language",
            "classification": {
                "path": [
                    "孤立語族"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": null,
                "2": "anz",
                "3": "anz"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Papua New Guinea"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "孤立語族に分類される言語。分類上は孤立語族に位置づけられる。 主な分布地域はPapua New Guinea。 主な分布地域はPapua New Guinea。 系統分類では孤立語族に位置づけられる。 主な分布はPapua New Guineaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/An%C3%AAm",
                "glottolog": "https://glottolog.org/glottolog?iso=anz"
            },
            "nativeName": "Anêm",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "haida": {
            "id": "haida",
            "name": "ハイダ語",
            "englishName": "Haida",
            "type": "language",
            "classification": {
                "path": [
                    "孤立語／系統不詳"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": null,
                "2": "hai",
                "3": "hai"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Canada",
                    "United States"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "北米太平洋岸北西部で話される言語。系統的位置づけについて議論がある。 主な分布地域はCanada、United States。 現代の主要な表記にはLatinが用いられる。 系統分類では孤立語／系統不詳に位置づけられる。 主な分布はCanada、United Statesである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Haida",
                "glottolog": "https://glottolog.org/glottolog?iso=hai"
            },
            "nativeName": "X̱aat Kíl",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "hadza": {
            "id": "hadza",
            "name": "ハヅァ語",
            "englishName": "Hadza",
            "type": "language",
            "classification": {
                "path": [
                    "孤立語／系統不詳"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": null,
                "2": "hts",
                "3": "hts"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Tanzania"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "タンザニアで話される言語。クリック音を含む音韻体系を持ち、一般に孤立言語として扱われる。 主な分布地域はTanzania。 現代の主要な表記にはLatinが用いられる。 系統分類では孤立語／系統不詳に位置づけられる。 主な分布はTanzaniaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Hadza",
                "glottolog": "https://glottolog.org/glottolog?iso=hts"
            },
            "nativeName": "Hadzane",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "sandawe": {
            "id": "sandawe",
            "name": "サンダウェ語",
            "englishName": "Sandawe",
            "type": "language",
            "classification": {
                "path": [
                    "孤立語／系統不詳"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": null,
                "2": "sad",
                "3": "sad"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Tanzania"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "タンザニアで話される言語。クリック音を持ち、系統的位置づけには議論がある。 主な分布地域はTanzania。 現代の主要な表記にはLatinが用いられる。 系統分類では孤立語／系統不詳に位置づけられる。 主な分布はTanzaniaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Sandawe",
                "glottolog": "https://glottolog.org/glottolog?iso=sad"
            },
            "nativeName": "Sandawe",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "kano": {
            "id": "kano",
            "name": "カノエ語",
            "englishName": "Kanoê",
            "type": "language",
            "classification": {
                "path": [
                    "孤立語／系統不詳"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": null,
                "2": "kxo",
                "3": "kxo"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Brazil"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "孤立語／系統不詳に分類される言語。分類上は孤立語／系統不詳に位置づけられる。 主な分布地域はBrazil。 現代の主要な表記にはLatinが用いられる。 主な分布地域はBrazil。 系統分類では孤立語／系統不詳に位置づけられる。 主な分布はBrazilである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Kano%C3%AA",
                "glottolog": "https://glottolog.org/glottolog?iso=kxo"
            },
            "nativeName": "Kanoê",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "trumai": {
            "id": "trumai",
            "name": "トルマイ語",
            "englishName": "Trumai",
            "type": "language",
            "classification": {
                "path": [
                    "孤立語／系統不詳"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": null,
                "2": "trm",
                "3": "trm"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Brazil"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "孤立語／系統不詳に分類される言語。分類上は孤立語／系統不詳に位置づけられる。 主な分布地域はBrazil。 現代の主要な表記にはLatinが用いられる。 主な分布地域はBrazil。 系統分類では孤立語／系統不詳に位置づけられる。 主な分布はBrazilである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Trumai",
                "glottolog": "https://glottolog.org/glottolog?iso=trm"
            },
            "nativeName": "Trumai",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "elamite": {
            "id": "elamite",
            "name": "エラム語",
            "englishName": "Elamite",
            "type": "historical",
            "classification": {
                "path": [
                    "孤立語／系統不詳"
                ],
                "status": "uncertain"
            },
            "iso639": {
                "1": null,
                "2": "elx",
                "3": "elx"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [],
                "countries": [
                    "Elam / southwestern Iran"
                ]
            },
            "writing": {
                "scripts": [
                    "Cuneiform"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "古代イラン南西部を中心に用いられた系統不明の言語。エラム王国などの文書が楔形文字を中心に残されている。 系統分類では孤立語／系統不詳に位置づけられる。 主な分布はElam / southwestern Iranである。 主要な表記体系としてCuneiformが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Elamite",
                "glottolog": "https://glottolog.org/glottolog?iso=elx"
            },
            "nativeName": "haltamti",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "mapudungun": {
            "id": "mapudungun",
            "name": "マプチェ語",
            "englishName": "Mapudungun",
            "type": "language",
            "classification": {
                "path": [
                    "アラウカニア語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "arn",
                "3": "arn"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Chile",
                    "Argentina"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "チリ中南部とアルゼンチン西部で話される先住民言語。Glottolog 5.3ではAraucanian（アラウカニア）系統に分類され、孤立語ではない。マプチェの文化・歴史と深く結びつき、ラテン文字による表記が一般的である。 マプチェの文化・歴史と結びついた先住民言語で、チリとアルゼンチンに分布する。",
            "notes": [
                "Glottolog 5.3ではAraucanian語族に分類される。"
            ],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Mapudungun",
                "glottolog": "https://glottolog.org/glottolog?iso=arn"
            },
            "nativeName": "Mapudungun / Mapuzugun",
            "status": "uncertain",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "tiwi": {
            "id": "tiwi",
            "name": "ティウィ語",
            "englishName": "Tiwi",
            "type": "language",
            "classification": {
                "path": [
                    "ティウィ語族"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "tiw",
                "3": "tiw"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Australia"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "ティウィ語族に分類される言語。分類上はティウィ語族に位置づけられる。 主な分布地域はAustralia。 現代の主要な表記にはLatinが用いられる。 主な分布地域はAustralia。 系統分類ではティウィ語族に位置づけられる。 主な分布はAustraliaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tiwi",
                "glottolog": "https://glottolog.org/glottolog?iso=tiw"
            },
            "nativeName": "Tiwi",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "tok_pisin": {
            "id": "tok_pisin",
            "name": "トク・ピシン",
            "englishName": "Tok Pisin",
            "type": "special",
            "classification": {
                "path": [
                    "英語系クレオール／ピジン"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "tpi",
                "3": "tpi"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Papua New Guinea"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Papua New Guinea"
                ]
            },
            "description": "パプアニューギニアで広く用いられる英語を主要な語彙基盤とするクレオール／接触言語。国家レベルの共通語・公用語の一つとして機能する。 系統分類では英語系クレオール／ピジンに位置づけられる。 主な分布はPapua New Guineaである。 主要な表記体系としてLatinが用いられる。 英語を主要な語彙源とするクレオール言語で、パプアニューギニアの重要な共通語である。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Tok_Pisin",
                "glottolog": "https://glottolog.org/glottolog?iso=tpi"
            },
            "nativeName": "Tok Pisin",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "bislama": {
            "id": "bislama",
            "name": "ビスラマ語",
            "englishName": "Bislama",
            "type": "special",
            "classification": {
                "path": [
                    "英語系クレオール／ピジン"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "bi",
                "2": "bis",
                "3": "bis"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Vanuatu"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Vanuatu"
                ]
            },
            "description": "バヌアツで広く用いられる英語系クレオール。英語を基盤とし、メラネシアの多言語社会における共通語として重要である。 系統分類では英語系クレオール／ピジンに位置づけられる。 主な分布はVanuatuである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Bislama",
                "glottolog": "https://glottolog.org/glottolog?iso=bis"
            },
            "nativeName": "Bislama",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "nigerian_pidgin": {
            "id": "nigerian_pidgin",
            "name": "ナイジェリア・ピジン",
            "englishName": "Nigerian Pidgin",
            "type": "special",
            "classification": {
                "path": [
                    "英語系クレオール／ピジン"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "pcm",
                "3": "pcm"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Nigeria"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Nigeria"
                ]
            },
            "description": "ナイジェリアを中心に広く用いられる英語系の接触言語。地域・話者集団によって変種があり、都市部を中心に重要なコミュニケーション手段となっている。 系統分類では英語系クレオール／ピジンに位置づけられる。 主な分布はNigeriaである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Nigerian_Pidgin",
                "glottolog": "https://glottolog.org/glottolog?iso=pcm"
            },
            "nativeName": "Naijá",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "haitian_creole": {
            "id": "haitian_creole",
            "name": "ハイチ・クレオール語",
            "englishName": "Haitian Creole",
            "type": "special",
            "classification": {
                "path": [
                    "フランス語系クレオール"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "ht",
                "2": "hat",
                "3": "hat"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Haiti"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Haiti"
                ]
            },
            "description": "ハイチの主要言語の一つで、フランス語を主要な語彙基盤とするクレオール。ハイチではフランス語とともに公用語である。 系統分類ではフランス語系クレオールに位置づけられる。 主な分布はHaitiである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Haitian_Creole",
                "glottolog": "https://glottolog.org/glottolog?iso=hat"
            },
            "nativeName": "Kreyòl ayisyen",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "seychellois_creole": {
            "id": "seychellois_creole",
            "name": "セーシェル・クレオール語",
            "englishName": "Seychellois Creole",
            "type": "special",
            "classification": {
                "path": [
                    "フランス語系クレオール"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "crs",
                "3": "crs"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Seychelles"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Seychelles"
                ]
            },
            "description": "セーシェルで広く用いられるフランス語系クレオール。セーシェルの主要言語の一つである。 系統分類ではフランス語系クレオールに位置づけられる。 主な分布はSeychellesである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Seychellois_Creole",
                "glottolog": "https://glottolog.org/glottolog?iso=crs"
            },
            "nativeName": "Kreol Seselwa",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "mauritian_creole": {
            "id": "mauritian_creole",
            "name": "モーリシャス・クレオール語",
            "englishName": "Mauritian Creole",
            "type": "special",
            "classification": {
                "path": [
                    "フランス語系クレオール"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "mfe",
                "3": "mfe"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Mauritius"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Mauritius"
                ]
            },
            "description": "モーリシャスで広く用いられるフランス語系クレオール。多言語社会の共通語として重要である。 系統分類ではフランス語系クレオールに位置づけられる。 主な分布はMauritiusである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Mauritian_Creole",
                "glottolog": "https://glottolog.org/glottolog?iso=mfe"
            },
            "nativeName": "Kreol Morisien",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "papiamento": {
            "id": "papiamento",
            "name": "パピアメント語",
            "englishName": "Papiamento",
            "type": "special",
            "classification": {
                "path": [
                    "イベリア語系クレオール"
                ],
                "status": "established"
            },
            "iso639": {
                "1": null,
                "2": "pap",
                "3": "pap"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "Aruba",
                    "Curaçao",
                    "Bonaire"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": [
                    "Aruba",
                    "Curaçao",
                    "Bonaire"
                ]
            },
            "description": "アルバ、キュラソー、ボネールなどで用いられるイベリア語系クレオール。スペイン語・ポルトガル語を中心に、オランダ語やアフリカ諸語などの影響も受けている。 系統分類ではイベリア語系クレオールに位置づけられる。 主な分布はAruba、Curaçao、Bonaireである。 主要な表記体系としてLatinが用いられる。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Papiamento",
                "glottolog": "https://glottolog.org/glottolog?iso=pap"
            },
            "nativeName": "Papiamentu",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        },
        "esperanto": {
            "id": "esperanto",
            "name": "エスペラント",
            "englishName": "Esperanto",
            "type": "special",
            "classification": {
                "path": [
                    "人工言語"
                ],
                "status": "established"
            },
            "iso639": {
                "1": "eo",
                "2": "epo",
                "3": "epo"
            },
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null,
                "note": "今回の採用資料から比較可能な最新値を確認できないため、推測値は記載していない。"
            },
            "geography": {
                "regions": [
                    "Multiple regions"
                ],
                "countries": [
                    "International"
                ]
            },
            "writing": {
                "scripts": [
                    "Latin"
                ]
            },
            "official": {
                "countries": []
            },
            "description": "1887年にL. L. ザメンホフが公表した計画言語。国際補助語として設計され、母語話者を含む使用者・学習者の国際的コミュニティが存在する。 系統分類では人工言語に位置づけられる。 主な分布はInternationalである。 主要な表記体系としてLatinが用いられる。 1887年にL. L. ザメンホフが公表した計画言語で、国際補助語として設計された。",
            "notes": [],
            "links": {
                "wikipedia": "https://en.wikipedia.org/wiki/Esperanto",
                "glottolog": "https://glottolog.org/glottolog?iso=epo"
            },
            "nativeName": "Esperanto",
            "status": "established",
            "dataSources": [
                "Glottolog 5.3（系統分類・言語識別の参照）",
                "Wikipedia（概説・使用地域・文字等の確認）",
                "Glottolog 5.3",
                "ISO 639-3",
                "Wikipedia（個別言語情報）"
            ],
            "dataQuality": "partial"
        }
    }
};
const languageHierarchy = languageDatabase.tree;
if (typeof window !== "undefined") {
    window.languageDatabase = languageDatabase;
    window.languageHierarchy = languageHierarchy;
}
