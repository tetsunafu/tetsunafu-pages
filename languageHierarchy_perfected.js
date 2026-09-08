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
                                                "desc": "ロマンス語群の言語。スペイン北西部ガリシア地方を中心に話される。ポルトガル語と歴史的に近い関係を持つ。"
                                            },
                                            {
                                                "id": "occitan",
                                                "name": "オック語",
                                                "type": "language",
                                                "desc": "ロマンス語群の言語。南フランスなどに分布し、ラングドック語などの伝統的変種を含む。"
                                            },
                                            {
                                                "id": "sardinian",
                                                "name": "サルデーニャ語",
                                                "type": "language",
                                                "desc": "ロマンス語群の言語。サルデーニャ島で話され、他のロマンス諸語とは異なる古風な特徴を保つことで知られる。"
                                            },
                                            {
                                                "id": "sicilian",
                                                "name": "シチリア語",
                                                "type": "language",
                                                "desc": "イタリア南部シチリア島を中心に用いられるロマンス系の言語変種群。"
                                            }
                                        ],
                                        "description": "俗ラテン語を起点として発達した諸言語を含む分類単位。"
                                    }
                                ],
                                "description": "ロマンス諸語を含むイタリック語派の代表的分類。"
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
                                                "desc": "東スラヴ語群の主要言語。ロシアを中心に広く用いられ、キリル文字を使用する。"
                                            },
                                            {
                                                "id": "ukrainian",
                                                "name": "ウクライナ語",
                                                "type": "language",
                                                "desc": "東スラヴ語群の言語。ウクライナの主要言語で、キリル文字を用いる。"
                                            },
                                            {
                                                "id": "belarusian",
                                                "name": "ベラルーシ語",
                                                "type": "language",
                                                "desc": "東スラヴ語群の言語。ベラルーシを中心に用いられ、キリル文字を用いる。"
                                            }
                                        ],
                                        "description": "スラヴ語派の東部を構成する語群。"
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
                                                "desc": "西スラヴ語群の主要言語。ポーランドを中心に話され、ラテン文字を用いる。"
                                            },
                                            {
                                                "id": "czech",
                                                "name": "チェコ語",
                                                "type": "language",
                                                "desc": "西スラヴ語群の主要言語。チェコを中心に話される。"
                                            },
                                            {
                                                "id": "slovak",
                                                "name": "スロバキア語",
                                                "type": "language",
                                                "desc": "西スラヴ語群の言語。スロバキアを中心に話される。"
                                            },
                                            {
                                                "id": "sorbian",
                                                "name": "ソルブ語",
                                                "type": "language",
                                                "desc": "ドイツ東部の少数民族言語。西スラヴ語群に属し、上ソルブ語・下ソルブ語などを含む。"
                                            }
                                        ],
                                        "description": "スラヴ語派の西部を構成する語群。"
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
                                                "desc": "南スラヴ語群の言語。ブルガリアを中心に話され、後置定冠詞などバルカン言語連合に特徴的な構造も見られる。"
                                            },
                                            {
                                                "id": "macedonian",
                                                "name": "マケドニア語",
                                                "type": "language",
                                                "desc": "南スラヴ語群の言語。北マケドニアを中心に話され、ブルガリア語などと近縁である。"
                                            },
                                            {
                                                "id": "serbian",
                                                "name": "セルビア語",
                                                "type": "language",
                                                "desc": "南スラヴ語群の言語。セルビアを中心に話され、キリル文字とラテン文字の双方が使われる。"
                                            },
                                            {
                                                "id": "croatian",
                                                "name": "クロアチア語",
                                                "type": "language",
                                                "desc": "南スラヴ語群の言語。クロアチアの主要言語で、シュト方言を基盤とする標準語を持つ。"
                                            },
                                            {
                                                "id": "bosnian",
                                                "name": "ボスニア語",
                                                "type": "language",
                                                "desc": "南スラヴ語群の言語。ボスニア・ヘルツェゴビナを中心に用いられ、セルビア語・クロアチア語などと非常に近縁である。"
                                            },
                                            {
                                                "id": "slovenian",
                                                "name": "スロベニア語",
                                                "type": "language",
                                                "desc": "南スラヴ語群の言語。スロベニアを中心に話され、双数を体系的に保持する点が特徴的である。"
                                            }
                                        ],
                                        "description": "スラヴ語派の南部を構成する語群。"
                                    }
                                ],
                                "description": "インド・ヨーロッパ語族の主要語派の一つ。"
                            }
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
                                        "id": "arabic",
                                        "name": "アラビア語",
                                        "type": "language",
                                        "desc": "アフロ・アジア語族・セム語派の主要な言語群。地域ごとに多様な口語変種を持ち、現代標準アラビア語との使い分けが行われる。"
                                    },
                                    {
                                        "id": "egyptian_arabic",
                                        "name": "エジプト・アラビア語",
                                        "type": "language",
                                        "desc": "アラビア語の主要な口語変種の一つ。エジプトを中心に広く話され、映画・音楽などを通してアラブ世界にも大きな影響を持つ。"
                                    },
                                    {
                                        "id": "levantine_arabic",
                                        "name": "レバント・アラビア語",
                                        "type": "language",
                                        "desc": "シリア・レバノン・ヨルダン・パレスチナ地域などで話されるアラビア語の主要変種群。"
                                    },
                                    {
                                        "id": "moroccan_arabic",
                                        "name": "モロッコ・アラビア語",
                                        "type": "language",
                                        "desc": "モロッコを中心に話されるアラビア語変種。ベルベル諸語などとの接触による特徴も見られる。"
                                    },
                                    {
                                        "id": "hebrew",
                                        "name": "ヘブライ語",
                                        "type": "language",
                                        "desc": "セム語派の言語。古代の文語として知られる一方、近代に日常語として再生され、現在のイスラエルで主要な公用語の一つとなっている。"
                                    },
                                    {
                                        "id": "maltese",
                                        "name": "マルタ語",
                                        "type": "language",
                                        "desc": "セム語派に属する言語で、アラビア語の歴史的変種から発達した。現代ではラテン文字で表記され、イタリア語・英語などからの借用語も多い。"
                                    }
                                ],
                                "description": "アフロ・アジア語族の主要語派。アラビア語・ヘブライ語などを含む。"
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
                                        "desc": "アフロ・アジア語族・クシ語派の主要言語。ソマリアを中心に、エチオピア、ジブチ、ケニアなどにも分布する。"
                                    },
                                    {
                                        "id": "oromo",
                                        "name": "オロモ語",
                                        "type": "language",
                                        "desc": "アフロ・アジア語族・クシ語派の主要言語。エチオピアを中心に広く話される。"
                                    }
                                ],
                                "description": "クシ語派に属する分類単位。"
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
                                        "desc": "アフロ・アジア語族・チャド語派の主要言語。西アフリカの広い地域で地域共通語として用いられる。"
                                    }
                                ],
                                "description": "チャド語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "ベルベル語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "berber",
                                        "name": "ベルベル諸語",
                                        "type": "language",
                                        "desc": "アフロ・アジア語族のベルベル語派に属する諸言語の総称。北アフリカ各地に分布し、アマジグ諸語とも呼ばれる。"
                                    },
                                    {
                                        "id": "kabyle",
                                        "name": "カビル語",
                                        "type": "language",
                                        "desc": "ベルベル語派の言語。アルジェリア北部のカビル地域を中心に話される。"
                                    }
                                ],
                                "description": "ベルベル語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "エチオピア・セム語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "amharic",
                                        "name": "アムハラ語",
                                        "type": "language",
                                        "desc": "セム語派のエチオピア・セム諸語に属する言語。エチオピアの主要公用語の一つで、ゲエズ文字系の文字を用いる。"
                                    },
                                    {
                                        "id": "tigrinya",
                                        "name": "ティグリニャ語",
                                        "type": "language",
                                        "desc": "エチオピア・セム諸語の言語。エチオピア北部やエリトリアで話される。"
                                    }
                                ],
                                "description": "アフロ・アジア語族のセム語派におけるエチオピア地域の分類群。"
                            }
                        ],
                        "description": "北アフリカ・西アジア・東アフリカに分布する語族。"
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
                                        "desc": "オーストロネシア語族・マレー・ポリネシア語派の言語。マレー語の標準化された一変種として、インドネシアの国語・公用語として用いられる。"
                                    },
                                    {
                                        "id": "malay",
                                        "name": "マレー語",
                                        "type": "language",
                                        "desc": "東南アジアの主要なオーストロネシア諸語の一つ。マレーシア、ブルネイ、シンガポールなどで重要な地位を持つ。"
                                    },
                                    {
                                        "id": "javanese",
                                        "name": "ジャワ語",
                                        "type": "language",
                                        "desc": "インドネシアのジャワ島を中心に話される主要なオーストロネシア語。豊かな敬語・待遇表現を持つ。"
                                    },
                                    {
                                        "id": "sundanese",
                                        "name": "スンダ語",
                                        "type": "language",
                                        "desc": "ジャワ島西部を中心に話されるオーストロネシア語。"
                                    },
                                    {
                                        "id": "madurese",
                                        "name": "マドゥラ語",
                                        "type": "language",
                                        "desc": "インドネシアのマドゥラ島などで話されるオーストロネシア語。"
                                    },
                                    {
                                        "id": "malagasy",
                                        "name": "マダガスカル語",
                                        "type": "language",
                                        "desc": "マダガスカルで話されるオーストロネシア語。地理的にはアフリカに位置するが、系統的には東南アジア・太平洋の諸言語とつながる。"
                                    },
                                    {
                                        "id": "fijian",
                                        "name": "フィジー語",
                                        "type": "language",
                                        "desc": "フィジーで広く用いられるオーストロネシア語。"
                                    },
                                    {
                                        "id": "palauan",
                                        "name": "パラオ語",
                                        "type": "language",
                                        "desc": "パラオで話されるオーストロネシア語。ミクロネシア地域に分布する。"
                                    },
                                    {
                                        "id": "chamorro",
                                        "name": "チャモロ語",
                                        "type": "language",
                                        "desc": "マリアナ諸島を中心に話されるオーストロネシア語。スペイン語などからの借用語も多い。"
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
                                                "desc": "オーストロネシア語族に属するフィリピンの主要言語。フィリピノ語の基盤となっている。"
                                            },
                                            {
                                                "id": "cebuano",
                                                "name": "セブアノ語",
                                                "type": "language",
                                                "desc": "フィリピン中部・南部を中心に話される主要なオーストロネシア語。"
                                            },
                                            {
                                                "id": "ilocano",
                                                "name": "イロカノ語",
                                                "type": "language",
                                                "desc": "フィリピン北部を中心に話されるオーストロネシア語。"
                                            }
                                        ],
                                        "description": "フィリピン地域のオーストロネシア諸語をまとめた表示上の分類。"
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
                                                "desc": "ポリネシア諸語の一つ。ニュージーランドの先住民マオリの言語で、東ポリネシア諸語に属する。"
                                            },
                                            {
                                                "id": "hawaiian",
                                                "name": "ハワイ語",
                                                "type": "language",
                                                "desc": "ポリネシア諸語の一つ。ハワイ諸島で伝統的に話され、現在も復興活動が行われている。"
                                            },
                                            {
                                                "id": "samoan",
                                                "name": "サモア語",
                                                "type": "language",
                                                "desc": "ポリネシア諸語の一つ。サモアやアメリカ領サモアを中心に用いられる。"
                                            },
                                            {
                                                "id": "tongan",
                                                "name": "トンガ語",
                                                "type": "language",
                                                "desc": "ポリネシア諸語の一つ。トンガ王国を中心に話される。"
                                            },
                                            {
                                                "id": "tahitian",
                                                "name": "タヒチ語",
                                                "type": "language",
                                                "desc": "ポリネシア諸語の一つ。フランス領ポリネシアのタヒチ島を中心に話される。"
                                            }
                                        ],
                                        "description": "太平洋の島嶼部に広がるポリネシア諸語。"
                                    }
                                ],
                                "description": "オーストロネシア語族の主要な大分類で、東南アジア・マダガスカル・太平洋に広がる。"
                            }
                        ],
                        "description": "台湾を起源とする言語拡散の研究でも重要な語族で、インド洋から太平洋まで広大な地域に分布する。"
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
                                        "desc": "オーストロアジア語族の主要言語。ベトナムの公用語で、声調を持ち、現在はラテン文字を基盤とするクオック・グーで表記される。"
                                    },
                                    {
                                        "id": "khmer",
                                        "name": "クメール語",
                                        "type": "language",
                                        "desc": "オーストロアジア語族の主要言語。カンボジアの公用語で、東南アジア大陸部の歴史文化を理解する上でも重要である。"
                                    },
                                    {
                                        "id": "mon",
                                        "name": "モン語",
                                        "type": "language",
                                        "desc": "オーストロアジア語族の言語。ミャンマー・タイに歴史的な分布を持つ。"
                                    }
                                ],
                                "description": "東南アジア大陸部の主要なオーストロアジア諸語を含む分類。"
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
                                        "desc": "オーストロアジア語族・ムンダ語派の主要言語。インド東部などで話される。"
                                    },
                                    {
                                        "id": "mundari",
                                        "name": "ムンダリ語",
                                        "type": "language",
                                        "desc": "オーストロアジア語族・ムンダ語派に属する言語。インド東部で話される。"
                                    }
                                ],
                                "description": "インド東部を中心とするムンダ語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "ニコバル諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "nicobarese",
                                        "name": "ニコバル諸語",
                                        "type": "language",
                                        "desc": "インド領ニコバル諸島で話されるオーストロアジア語族の言語群。"
                                    }
                                ],
                                "description": "ニコバル諸島に分布するオーストロアジア諸語。"
                            }
                        ],
                        "description": "東南アジア大陸部とインド東部を中心に分布する語族。"
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
                                        "desc": "ドラヴィダ語族の主要言語。インド南部やスリランカなどで話され、長い文学史を持つ。"
                                    },
                                    {
                                        "id": "malayalam",
                                        "name": "マラヤーラム語",
                                        "type": "language",
                                        "desc": "ドラヴィダ語族の言語。インド南西部ケーララ州を中心に話される。"
                                    },
                                    {
                                        "id": "tulu",
                                        "name": "トゥル語",
                                        "type": "language",
                                        "desc": "南ドラヴィダ語派の言語。インド南西部カルナータカ州沿岸などで話される。"
                                    }
                                ],
                                "description": "ドラヴィダ語族南部の主要な分類単位。"
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
                                        "desc": "ドラヴィダ語族の主要言語。インド南東部アーンドラ・プラデーシュ州やテランガーナ州などで話される。"
                                    }
                                ],
                                "description": "南中央ドラヴィダ語派に属する分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "南中央ドラヴィダ語派",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "gondi",
                                        "name": "ゴーンディー語",
                                        "type": "language",
                                        "desc": "ドラヴィダ語族に属する言語。インド中部の広い地域に分布する。"
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
                                        "desc": "ドラヴィダ語族北部の言語。パキスタンのバローチスターン地方を中心に話され、周囲のイラン語派地域から離れた分布が特徴的である。"
                                    }
                                ],
                                "description": "ドラヴィダ語族北部の分類単位。"
                            }
                        ],
                        "description": "主として南アジアに分布する主要語族。"
                    }
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
                                        "desc": "テュルク諸語の主要言語。トルコ共和国の公用語で、ラテン文字を使用する。"
                                    },
                                    {
                                        "id": "azerbaijani",
                                        "name": "アゼルバイジャン語",
                                        "type": "language",
                                        "desc": "オグズ語群の言語。アゼルバイジャンを中心に話され、現代標準語はラテン文字を用いる。"
                                    },
                                    {
                                        "id": "turkmen",
                                        "name": "トルクメン語",
                                        "type": "language",
                                        "desc": "オグズ語群の言語。トルクメニスタンの公用語。"
                                    }
                                ],
                                "description": "テュルク語族西部の主要な語群。"
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
                                        "desc": "カルルク語群の主要言語。ウズベキスタンの公用語で、中央アジアの主要言語の一つ。"
                                    },
                                    {
                                        "id": "uyghur",
                                        "name": "ウイグル語",
                                        "type": "language",
                                        "desc": "カルルク語群の言語。主に新疆地域などで話される。伝統的にはアラビア文字系の文字が用いられる。"
                                    }
                                ],
                                "description": "中央アジアを中心に分布するカルルク語群。"
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
                                        "desc": "キプチャク語群の主要言語。カザフスタンの主要言語で、中央アジアの広い地域に分布する。"
                                    },
                                    {
                                        "id": "kyrgyz",
                                        "name": "キルギス語",
                                        "type": "language",
                                        "desc": "キプチャク語群の言語。キルギスの公用語の一つで、キリル文字が広く使われる。"
                                    },
                                    {
                                        "id": "tatar",
                                        "name": "タタール語",
                                        "type": "language",
                                        "desc": "キプチャク語群の言語。ロシアのタタールスタンなどで話される。"
                                    },
                                    {
                                        "id": "bashkir",
                                        "name": "バシキール語",
                                        "type": "language",
                                        "desc": "キプチャク語群の言語。ロシアのバシコルトスタン共和国を中心に話される。"
                                    }
                                ],
                                "description": "テュルク語族のキプチャク語群。"
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
                                        "desc": "シベリアで話されるテュルク諸語の一つ。ヤクート語とも呼ばれ、他のテュルク諸語から地理的に大きく離れている。"
                                    }
                                ],
                                "description": "シベリア地域に分布するテュルク諸語。"
                            },
                            {
                                "id": "class_node",
                                "name": "チュヴァシュ語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "chuvash",
                                        "name": "チュヴァシュ語",
                                        "type": "language",
                                        "desc": "テュルク語族の中でも独特の位置を占める言語。一般にオグール語群唯一の現存言語とされ、他のテュルク諸語とは音韻的に大きく異なる。"
                                    }
                                ],
                                "description": "オグール語群を代表するチュヴァシュ語。"
                            }
                        ],
                        "description": "中央アジア・アナトリア・シベリアなどユーラシア各地に広がる語族。"
                    },
                    {
                        "id": "class_node",
                        "name": "ウラル語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "フィン・ウゴル諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "finnish",
                                        "name": "フィンランド語",
                                        "type": "language",
                                        "desc": "ウラル語族の言語。フィンランドの公用語の一つで、豊富な格体系を持つことで知られる。"
                                    },
                                    {
                                        "id": "estonian",
                                        "name": "エストニア語",
                                        "type": "language",
                                        "desc": "ウラル語族の言語。フィンランド語と近縁で、エストニアの公用語。"
                                    },
                                    {
                                        "id": "hungarian",
                                        "name": "ハンガリー語",
                                        "type": "language",
                                        "desc": "ウラル語族のウゴル諸語に属する言語。ハンガリーの公用語で、周囲のインド・ヨーロッパ諸語とは系統的に異なる。"
                                    },
                                    {
                                        "id": "sami_languages",
                                        "name": "サーミ諸語",
                                        "type": "language",
                                        "desc": "北ヨーロッパの先住民サーミによって話されるウラル語族の言語群。複数の独立した言語から構成される。"
                                    }
                                ],
                                "description": "ウラル語族の主要な言語群。フィンランド語・エストニア語・ハンガリー語などを含む。"
                            },
                            {
                                "id": "class_node",
                                "name": "マリ語群",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "mari",
                                        "name": "マリ語",
                                        "type": "language",
                                        "desc": "ウラル語族に属する言語。ロシアのマリ・エル共和国などで話される。"
                                    }
                                ],
                                "description": "ウラル語族のマリ語群。"
                            },
                            {
                                "id": "class_node",
                                "name": "ペルム諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "udmurt",
                                        "name": "ウドムルト語",
                                        "type": "language",
                                        "desc": "ペルム諸語に属するウラル語族の言語。ロシアのウドムルト共和国を中心に話される。"
                                    },
                                    {
                                        "id": "komi",
                                        "name": "コミ語",
                                        "type": "language",
                                        "desc": "ペルム諸語に属する言語。ロシア北東部を中心に話される。"
                                    }
                                ],
                                "description": "ウラル語族のペルム諸語。"
                            },
                            {
                                "id": "class_node",
                                "name": "モルドヴィン諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "mordvin_languages",
                                        "name": "モルドヴィン諸語",
                                        "type": "language",
                                        "desc": "ウラル語族に属する諸言語。代表的なものにエルジャ語とモクシャ語がある。"
                                    }
                                ],
                                "description": "エルジャ語・モクシャ語などを含む分類単位。"
                            }
                        ],
                        "description": "北東ヨーロッパから西シベリアにかけて分布する語族。フィンランド語・エストニア語・ハンガリー語などを含む。"
                    },
                    {
                        "id": "class_node",
                        "name": "クラ・ダイ語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "タイ諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "thai",
                                        "name": "タイ語",
                                        "type": "language",
                                        "desc": "クラ・ダイ語族の主要言語。タイの公用語で、声調を持つ。独自のタイ文字で表記される。"
                                    },
                                    {
                                        "id": "lao",
                                        "name": "ラーオ語",
                                        "type": "language",
                                        "desc": "クラ・ダイ語族のタイ諸語に属する言語。ラオスの公用語で、タイ語と近縁。"
                                    },
                                    {
                                        "id": "zhuang",
                                        "name": "チワン語",
                                        "type": "language",
                                        "desc": "クラ・ダイ語族の主要言語群。中国南部を中心に話される。"
                                    },
                                    {
                                        "id": "shan",
                                        "name": "シャン語",
                                        "type": "language",
                                        "desc": "タイ諸語に属する言語。ミャンマー東部などで話され、タイ語・ラーオ語などと近縁。"
                                    },
                                    {
                                        "id": "tai_nuea",
                                        "name": "タイ・ヌア語",
                                        "type": "language",
                                        "desc": "タイ諸語の一つ。中国南部や東南アジア北部などに分布する。"
                                    }
                                ],
                                "description": "クラ・ダイ語族の主要なタイ諸語。"
                            }
                        ],
                        "description": "東南アジア・中国南部を中心に分布する語族。タイ語・ラーオ語・チワン語などを含む。"
                    },
                    {
                        "id": "class_node",
                        "name": "日琉語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "日本語群",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "japanese",
                                        "name": "日本語",
                                        "type": "language",
                                        "desc": "日琉語族に属する日本列島の主要言語。日本語群に分類され、漢字・ひらがな・カタカナを組み合わせた独特の表記体系を持つ。"
                                    }
                                ],
                                "description": "本土日本語を中心とする分類単位。"
                            },
                            {
                                "id": "class_node",
                                "name": "琉球諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "northern_ryukyuan",
                                        "name": "北琉球諸語",
                                        "type": "language",
                                        "desc": "日琉語族の琉球諸語北部に属する言語群。奄美群島・沖縄諸島などに分布する。"
                                    },
                                    {
                                        "id": "southern_ryukyuan",
                                        "name": "南琉球諸語",
                                        "type": "language",
                                        "desc": "日琉語族の琉球諸語南部に属する言語群。宮古・八重山・与那国などの諸言語を含む。"
                                    },
                                    {
                                        "id": "okinawan",
                                        "name": "沖縄語",
                                        "type": "language",
                                        "desc": "琉球諸語の一つ。沖縄本島中南部などに伝統的な分布を持つ。"
                                    },
                                    {
                                        "id": "miyako",
                                        "name": "宮古語",
                                        "type": "language",
                                        "desc": "南琉球諸語の一つ。宮古列島で話される。"
                                    },
                                    {
                                        "id": "yaeyama",
                                        "name": "八重山語",
                                        "type": "language",
                                        "desc": "南琉球諸語の一つ。八重山列島で話される。"
                                    },
                                    {
                                        "id": "yonaguni",
                                        "name": "与那国語",
                                        "type": "language",
                                        "desc": "南琉球諸語の一つ。与那国島で話される。日琉諸語の中でも地理的に最も西に分布する。"
                                    }
                                ],
                                "description": "日本列島南西部に分布する琉球諸語。"
                            }
                        ],
                        "description": "日本語と琉球諸語からなる語族。日本語と琉球諸語の共通祖語を想定することで、両者の系統関係を説明する。"
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
                                "desc": "朝鮮半島を中心に話される言語。系統分類上は朝鮮語族に置かれることが多いが、他の語族との系統関係については議論がある。"
                            },
                            {
                                "id": "jeju",
                                "name": "済州語",
                                "type": "language",
                                "desc": "朝鮮半島南部の済州島で伝統的に話される言語。標準朝鮮語とは異なる独自の特徴を持つ。"
                            }
                        ],
                        "description": "朝鮮語と済州語などを含む分類。より上位の系統関係については学説上の議論がある。"
                    },
                    {
                        "id": "class_node",
                        "name": "モンゴル語族",
                        "type": "family",
                        "color": "#64748b",
                        "children": [
                            {
                                "id": "class_node",
                                "name": "中央モンゴル諸語",
                                "type": "branch",
                                "color": "#64748b",
                                "children": [
                                    {
                                        "id": "mongolian",
                                        "name": "モンゴル語",
                                        "type": "language",
                                        "desc": "モンゴル語族の主要言語。モンゴル国などで話される。"
                                    },
                                    {
                                        "id": "buryat",
                                        "name": "ブリヤート語",
                                        "type": "language",
                                        "desc": "モンゴル語族に属する言語。ロシアのバイカル湖周辺などで話される。"
                                    },
                                    {
                                        "id": "kalmyk",
                                        "name": "カルムイク語",
                                        "type": "language",
                                        "desc": "モンゴル語族に属する言語。ロシア西部のカルムイク共和国などで話される。"
                                    }
                                ],
                                "description": "モンゴル語族の主要な現存言語群。"
                            }
                        ],
                        "description": "主としてモンゴル高原とその周辺に分布する語族。"
                    }
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
                    }