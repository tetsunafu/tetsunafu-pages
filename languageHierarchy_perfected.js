/*
 * 世界の言語 — Language Hierarchy / Database
 * Version 2.0.0
 * Updated: 2026-09-08
 *
 * 重要:
 *   - tree       : 表示用の系統階層
 *   - languages  : 各言語のメタデータ
 *   - 階層の深さは固定しない
 *   - 「孤立語」「クレオール」「人工言語」などは系統樹に無理に押し込まない
 */

const languageDatabase = {
    "meta": {
        "name": "世界の言語",
        "version": "2.0.0",
        "updated": "2026-09-08",
        "languageCount": 220,
        "description": "世界の主要言語を、現代語・歴史的言語・特殊な成立形態に分け、語族→語派→語群→言語の可変深度で表示するためのサイト用データベース。",
        "sources": [
            "Wikipedia（概説・用語確認）",
            "Glottolog 5.3（系統分類の検証用）"
        ],
        "notes": [
            "話者数・ISOコード・地域・文字等は空欄を許容し、後から個別に補完できる設計。",
            "分類には学説差があるため、classification.status と notes で例外を表現する。"
        ],
        "designPrinciples": [
            "分類階層の深さを固定しない",
            "系統分類(tree)と各言語の詳細情報(languages)を分離する",
            "現代語・歴史的言語・クレオール/ピジン・人工言語を同一のUIで扱いつつ、意味の違いはtypeで保持する",
            "分類に議論がある言語について断定的な系統関係を作らない"
        ],
        "sourceNote": "Glottologは包括的なlanguoidカタログで、言語・方言・語族を系統樹として整理している。ただし分類は研究の進展により変更され得るため、本サイトでは表示用の代表分類として利用する。"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族・ゲルマン語派の西ゲルマン語群に属する。世界的な共通語として広く用いられ、フランス語などロマンス諸語由来の語彙も多い。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "西ゲルマン語群の主要言語。名詞の格・性・数を文法的に区別し、ドイツ、オーストリア、スイスなどで重要な公用語である。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "西ゲルマン語群の言語。英語・ドイツ語と近縁で、オランダやベルギー北部を中心に用いられる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "西ゲルマン語群の言語。17世紀以降のケープ地域のオランダ語を基盤に発達し、南アフリカ・ナミビアなどで用いられる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "西ゲルマン語群に属する言語。中東欧のユダヤ人社会で発達し、伝統的にはヘブライ文字で表記される。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "北ゲルマン語群の主要言語。スウェーデンとフィンランドの一部で公用語として用いられる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "北ゲルマン語群の言語。デンマークの公用語で、独特の音韻特徴を持つ。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "北ゲルマン語群の言語。ノルウェー語にはブークモールとニーノシュクという二つの公的な書記規範がある。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "北ゲルマン語群の言語。古ノルド語からの形態を比較的よく保存していることで知られる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "北ゲルマン語群の言語。フェロー諸島で話され、アイスランド語やノルウェー語と系統的に近い。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "中世北欧の北ゲルマン語。サガや北欧神話の文献を理解する上で重要である。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "東ゲルマン語群に属する死語。ウルフィラの聖書翻訳などを通じ、古いゲルマン語の重要な資料を残す。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ロマンス語群の主要言語。スペインから中南米へ広がり、母語話者数・学習者数ともに世界有数である。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ロマンス語群の主要言語。フランスを中心に、アフリカ、北米などにも広く分布する国際語である。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ロマンス語群の言語。イタリアを中心に用いられ、ラテン語からの発展を比較的明瞭にたどれる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ロマンス語群の主要言語。ポルトガルからブラジルを中心とする南米・アフリカなどへ広がった。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ロマンス語群の言語。東欧に位置しながらラテン語を祖とするロマンス諸語の一つである。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ロマンス語群の言語。スペイン東部、アンドラ、フランス南部などで用いられる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "イベリア・ロマンス諸語の一つ。スペイン北西部で話され、ポルトガル語と歴史的に近い関係を持つ。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "南フランスを中心に歴史的に話されてきたロマンス語。中世のトルバドゥール文学でも重要である。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "サルデーニャ島で話されるロマンス語。ロマンス諸語の中でも保守的な特徴を比較的多く残すことで知られる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シチリア島を中心に話されるロマンス語。地中海の多様な言語との接触を受けた豊かな語彙を持つ。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "古代ローマの言語。ロマンス諸語の歴史的基盤となり、ヨーロッパの学術・宗教・法の語彙にも大きな影響を与えた。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "東スラヴ語群の主要言語。キリル文字を用い、ロシアを中心にユーラシア各地で話される。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "東スラヴ語群の言語。ウクライナを中心に用い、ポーランド語など周辺諸語との接触も受けてきた。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "東スラヴ語群の言語。ベラルーシを中心に話され、ロシア語・ウクライナ語と近縁である。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "西スラヴ語群の主要言語。ポーランドの公用語で、ラテン文字による正書法を用いる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "西スラヴ語群の言語。チェコの公用語で、スロバキア語とは特に近い関係にある。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "西スラヴ語群の言語。スロバキアの公用語で、チェコ語との近さが特徴的である。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "西スラヴ語群の少数言語。ドイツ東部のラウジッツ地方を中心に話される。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "南スラヴ語群の言語。現代スラヴ諸語では格変化が大幅に失われ、後置定冠詞などバルカン言語圏的特徴を持つ。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "南スラヴ語群の言語。北マケドニアの公用語で、ブルガリア語などと近縁である。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "南スラヴ語群の言語。キリル文字とラテン文字の双方が広く用いられる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "南スラヴ語群の言語。クロアチアの公用語で、ラテン文字を用いる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "南スラヴ語群の言語。ボスニア・ヘルツェゴビナで用いられ、セルビア語・クロアチア語と近い関係にある。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "南スラヴ語群の言語。スロベニアの公用語で、現代ヨーロッパの標準語としては珍しく双数を保持する。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "最古級のスラヴ語文献を担った典礼語。南スラヴ系の言語資料として重要である。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の主要言語。インド北部を中心に広く用い、標準語はデーヴァナーガリー文字で書かれる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の主要言語。バングラデシュとインド東部を中心に話され、豊かな文学文化を持つ。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の言語。ヒンディー語と日常口語の基盤を大きく共有する一方、標準的な書記言語ではペルシア・アラビア系語彙とアラビア文字系表記が特徴的である。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "パンジャーブ語群の主要変種の一つ。パキスタンのパンジャーブ地方を中心に話される。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の言語。インド西部のマハーラーシュトラ州を中心に話される。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の言語。インド西部を中心に話され、独自のグジャラート文字を用いる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の言語。インド北部やネパール南部などに広く分布する。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の東部語。インド北東部アッサム州を中心に話される。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の言語。インド東部オディシャ州を中心に話され、独自の丸みを帯びた文字を持つ。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の言語。ネパールの主要公用語で、デーヴァナーガリー文字を用いる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の言語。スリランカを中心に話され、独自の丸みを帯びたシンハラ文字を用いる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の言語。パキスタンのシンド州などで話され、地域によって複数の文字が使われる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群のダルド諸語に分類される言語。カシミール地域を中心に話される。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・アーリア語群の言語。インド西岸に沿って分布し、地域によって異なる文字が使われる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「インド・イラン語派 → インド・アーリア語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "古代インドのインド・アーリア語。宗教・哲学・文学の重要な古典語で、比較言語学史でも重要である。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "イラン語群の主要言語。イラン、アフガニスタン、中央アジアなどに歴史的・文化的影響を持つ。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "イラン語群の言語。アフガニスタンとパキスタン西部を中心に話される。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "イラン語群の言語群。クルド人社会で用いられ、複数の主要変種と複数の標準表記がある。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「インド・イラン語派 → イラン語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「インド・イラン語派 → イラン語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「インド・イラン語派 → イラン語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ギリシア語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "古代ギリシア世界で用いられたギリシア語。哲学・科学・文学の重要な文献を残す。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ヘレニズム時代以降に広域で使われたギリシア語の共通語。新約聖書の主要な言語でもある。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「アルバニア語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「アルメニア語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「バルト語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「バルト語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ケルト語派 → 島嶼ケルト語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ケルト語派 → 島嶼ケルト語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ケルト語派 → 島嶼ケルト語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "インド・ヨーロッパ語族に分類される言語。より細かな分類は「ケルト語派 → 島嶼ケルト語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「シナ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「チベット諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「ロロ・ビルマ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
        },
        "karen_languages": {
            "id": "karen_languages",
            "name": "カレン諸語",
            "englishName": "Karen languages",
            "type": "language",
            "classification": {
                "path": [
                    "シナ・チベット語族",
                    "カレン諸語"
                ],
                "status": "established"
            },
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「カレン諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "シナ・チベット語族に分類される言語。より細かな分類は「クキ・チン・メイテイ諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "古典期のアラビア語。イスラーム文化の形成において中心的な文語であり、現代標準アラビア語の歴史的基盤でもある。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "古代メソポタミアのセム語派言語。楔形文字で大量に記録され、古代オリエントの重要な文書言語だった。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "古代オリエントで広く用いられたセム語派の言語群。歴史的に広域の共通語として重要な役割を果たした。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派 → アラビア語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派 → アラビア語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「セム語派 → アラビア語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「チャド語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「クシ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「クシ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アフロ・アジア語族に分類される言語。より細かな分類は「ベルベル語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "古代エジプトで用いられたアフロ・アジア語族の言語。ヒエログリフなど複数の書記体系で記録された。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → フィリピン諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → フィリピン諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → フィリピン諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロネシア語族に分類される言語。より細かな分類は「マレー・ポリネシア語派 → ポリネシア諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロアジア語族に分類される言語。より細かな分類は「モン・クメール語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロアジア語族に分類される言語。より細かな分類は「モン・クメール語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロアジア語族に分類される言語。より細かな分類は「モン・クメール語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロアジア語族に分類される言語。より細かな分類は「ムンダ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "オーストロアジア語族に分類される言語。より細かな分類は「ムンダ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「南ドラヴィダ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「南ドラヴィダ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「南ドラヴィダ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「南ドラヴィダ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「南中央ドラヴィダ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「南中央ドラヴィダ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ドラヴィダ語族に分類される言語。より細かな分類は「北ドラヴィダ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「オグズ語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「オグズ語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「オグズ語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
        },
        "chuvash": {
            "id": "chuvash",
            "name": "チュヴァシ語",
            "englishName": "Chuvash",
            "type": "language",
            "classification": {
                "path": [
                    "テュルク語族",
                    "オグズ語群"
                ],
                "status": "established"
            },
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「オグズ語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「カルルク語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「カルルク語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「キプチャク語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「キプチャク語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「キプチャク語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「キプチャク語群」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "テュルク語族に分類される言語。より細かな分類は「シベリア・テュルク諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「フィン・ウゴル語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「ウゴル語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ウラル語族に分類される言語。より細かな分類は「サーミ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "タイ・カダイ語族に分類される言語。より細かな分類は「タイ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "日琉語族に属する言語。漢字と仮名を組み合わせる独自の書記体系を発達させ、日本列島を中心に用いられる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 北琉球諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 南琉球諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 南琉球諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 南琉球諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "日琉語族に分類される言語。より細かな分類は「琉球語派 → 南琉球諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "朝鮮語族に属する言語。韓国・北朝鮮を中心に用い、ハングルという体系的な文字を持つ。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "朝鮮語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "モンゴル語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "モンゴル語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "モンゴル語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「バントゥー諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「デファ・ヨルバ語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「ボルタ・ニジェール語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニジェール・コンゴ語族に分類される言語。より細かな分類は「ボルタ・ニジェール語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ユト・アステカ語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "マヤ語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "マヤ語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ケチュア語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "アイマラ語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "トゥピ語族に分類される言語。より細かな分類は「トゥピ・グアラニー語派」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "イロコイ語族に分類される言語。より細かな分類は「北部イロコイ諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "イロコイ語族に分類される言語。より細かな分類は「南部イロコイ諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "デネ・イェニセイ語族に分類される言語。より細かな分類は「アサバスカ諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "エスキモー・アレウト語族に分類される言語。より細かな分類は「イヌイット諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "エスキモー・アレウト語族に分類される言語。より細かな分類は「イヌイット諸語」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "パマ・ニュンガ語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "パマ・ニュンガ語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "パマ・ニュンガ語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "トランス・ニューギニア語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "トランス・ニューギニア語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "チュクチ・カムチャツカ語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "チュクチ・カムチャツカ語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ツングース諸語に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ツングース諸語に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ニヴフ語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "既知の他言語との確立した系統関係を持たない孤立言語。スペイン北部とフランス南西部のバスク地方で話される。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "日本列島北部で話されてきた言語。現在の系統的位置づけは確立しておらず、独自の言語文化を持つ。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "パキスタン北部の山岳地帯で話される孤立言語。周辺のインド・ヨーロッパ語族やチベット・ビルマ系言語とは系統的に異なる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "北米南西部で話される先住民言語。一般に孤立言語として扱われる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "古代メソポタミアで話された言語。楔形文字による最古級の大量の記録を残し、既知の他言語との系統関係は確立していない。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "孤立語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "孤立語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "北米太平洋岸北西部で話される言語。系統的位置づけについて議論がある。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "タンザニアで話される言語。クリック音を含む音韻体系を持ち、一般に孤立言語として扱われる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "タンザニアで話される言語。クリック音を持ち、系統的位置づけには議論がある。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "孤立語／系統不詳に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "孤立語／系統不詳に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "古代イラン南西部で用いられた言語。周辺の主要語族との系統関係は確立していない。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
        },
        "mapudungun": {
            "id": "mapudungun",
            "name": "マプチェ語",
            "englishName": "Mapudungun",
            "type": "language",
            "classification": {
                "path": [
                    "孤立語／系統不詳"
                ],
                "status": "uncertain"
            },
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "孤立語／系統不詳に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "uncertain"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ティウィ語族に分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "パプアニューギニアで広く用いられる英語を基盤とするクレオール。複数言語話者間の共通語として発達した。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "バヌアツの公用語の一つ。英語を基盤として発達したクレオールである。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ナイジェリアで広く使われる英語基盤のクレオール。地域・話者層によって多様な変種がある。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "ハイチの主要言語。フランス語を語彙的基盤の一つとし、西アフリカ諸語などとの接触の中で形成されたクレオールである。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "フランス語系クレオールに分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "フランス語系クレオールに分類される言語。より細かな分類は「」で表されます。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "カリブ海のアルバ諸島・キュラソーなどで話されるクレオール。イベリア諸語を中心とする複数の言語の影響を受ける。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
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
            "iso639": {},
            "speakers": {
                "native": null,
                "total": null,
                "year": null,
                "source": null
            },
            "geography": {
                "regions": [],
                "countries": []
            },
            "writing": {
                "scripts": []
            },
            "official": {
                "countries": []
            },
            "description": "19世紀末に作られた国際補助語。自然言語ではなく計画言語として設計され、現在も学習者・使用者がいる。",
            "notes": [],
            "links": {
                "wikipedia": null,
                "glottolog": null
            },
            "nativeName": null,
            "status": "established"
        }
    }
};

// 既存UIが languageHierarchy を参照している場合の互換エイリアス
const languageHierarchy = languageDatabase.tree;

if (typeof window !== "undefined") {
    window.languageDatabase = languageDatabase;
    window.languageHierarchy = languageHierarchy;
}
