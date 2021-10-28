module.exports = {
    "scalars": [
        0,
        1,
        3,
        4,
        5,
        6,
        9,
        10,
        12,
        16
    ],
    "types": {
        "BigDecimal": {},
        "BigInt": {},
        "Block_height": {
            "hash": [
                4
            ],
            "number": [
                6
            ],
            "__typename": [
                12
            ]
        },
        "Boolean": {},
        "Bytes": {},
        "ID": {},
        "Int": {},
        "Keystore": {
            "id": [
                5
            ],
            "key": [
                12
            ],
            "__typename": [
                12
            ]
        },
        "Keystore_filter": {
            "id": [
                5
            ],
            "id_not": [
                5
            ],
            "id_gt": [
                5
            ],
            "id_lt": [
                5
            ],
            "id_gte": [
                5
            ],
            "id_lte": [
                5
            ],
            "id_in": [
                5
            ],
            "id_not_in": [
                5
            ],
            "key": [
                12
            ],
            "key_not": [
                12
            ],
            "key_gt": [
                12
            ],
            "key_lt": [
                12
            ],
            "key_gte": [
                12
            ],
            "key_lte": [
                12
            ],
            "key_in": [
                12
            ],
            "key_not_in": [
                12
            ],
            "key_contains": [
                12
            ],
            "key_not_contains": [
                12
            ],
            "key_starts_with": [
                12
            ],
            "key_not_starts_with": [
                12
            ],
            "key_ends_with": [
                12
            ],
            "key_not_ends_with": [
                12
            ],
            "__typename": [
                12
            ]
        },
        "Keystore_orderBy": {},
        "OrderDirection": {},
        "Query": {
            "keystore": [
                7,
                {
                    "id": [
                        5,
                        "ID!"
                    ],
                    "block": [
                        2
                    ]
                }
            ],
            "keystores": [
                7,
                {
                    "skip": [
                        6
                    ],
                    "first": [
                        6
                    ],
                    "orderBy": [
                        9
                    ],
                    "orderDirection": [
                        10
                    ],
                    "where": [
                        8
                    ],
                    "block": [
                        2
                    ]
                }
            ],
            "_meta": [
                15,
                {
                    "block": [
                        2
                    ]
                }
            ],
            "__typename": [
                12
            ]
        },
        "String": {},
        "Subscription": {
            "keystore": [
                7,
                {
                    "id": [
                        5,
                        "ID!"
                    ],
                    "block": [
                        2
                    ]
                }
            ],
            "keystores": [
                7,
                {
                    "skip": [
                        6
                    ],
                    "first": [
                        6
                    ],
                    "orderBy": [
                        9
                    ],
                    "orderDirection": [
                        10
                    ],
                    "where": [
                        8
                    ],
                    "block": [
                        2
                    ]
                }
            ],
            "_meta": [
                15,
                {
                    "block": [
                        2
                    ]
                }
            ],
            "__typename": [
                12
            ]
        },
        "_Block_": {
            "hash": [
                4
            ],
            "number": [
                6
            ],
            "__typename": [
                12
            ]
        },
        "_Meta_": {
            "block": [
                14
            ],
            "deployment": [
                12
            ],
            "hasIndexingErrors": [
                3
            ],
            "__typename": [
                12
            ]
        },
        "_SubgraphErrorPolicy_": {}
    }
}