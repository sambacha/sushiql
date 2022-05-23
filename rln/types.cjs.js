module.exports = {
    "scalars": [
        0,
        1,
        4,
        5,
        6,
        7,
        8,
        9,
        13,
        14,
        18
    ],
    "types": {
        "BigDecimal": {},
        "BigInt": {},
        "BlockChangedFilter": {
            "number_gte": [
                8
            ],
            "__typename": [
                14
            ]
        },
        "Block_height": {
            "hash": [
                5
            ],
            "number": [
                8
            ],
            "number_gte": [
                8
            ],
            "__typename": [
                14
            ]
        },
        "Boolean": {},
        "Bytes": {},
        "Float": {},
        "ID": {},
        "Int": {},
        "OrderDirection": {},
        "Query": {
            "registrationEntity": [
                11,
                {
                    "id": [
                        7,
                        "ID!"
                    ],
                    "block": [
                        3
                    ],
                    "subgraphError": [
                        18,
                        "_SubgraphErrorPolicy_!"
                    ]
                }
            ],
            "registrationEntities": [
                11,
                {
                    "skip": [
                        8
                    ],
                    "first": [
                        8
                    ],
                    "orderBy": [
                        13
                    ],
                    "orderDirection": [
                        9
                    ],
                    "where": [
                        12
                    ],
                    "block": [
                        3
                    ],
                    "subgraphError": [
                        18,
                        "_SubgraphErrorPolicy_!"
                    ]
                }
            ],
            "_meta": [
                17,
                {
                    "block": [
                        3
                    ]
                }
            ],
            "__typename": [
                14
            ]
        },
        "RegistrationEntity": {
            "id": [
                7
            ],
            "pubkey": [
                5
            ],
            "idCommitment": [
                5
            ],
            "signature": [
                5
            ],
            "__typename": [
                14
            ]
        },
        "RegistrationEntity_filter": {
            "id": [
                7
            ],
            "id_not": [
                7
            ],
            "id_gt": [
                7
            ],
            "id_lt": [
                7
            ],
            "id_gte": [
                7
            ],
            "id_lte": [
                7
            ],
            "id_in": [
                7
            ],
            "id_not_in": [
                7
            ],
            "pubkey": [
                5
            ],
            "pubkey_not": [
                5
            ],
            "pubkey_in": [
                5
            ],
            "pubkey_not_in": [
                5
            ],
            "pubkey_contains": [
                5
            ],
            "pubkey_not_contains": [
                5
            ],
            "idCommitment": [
                5
            ],
            "idCommitment_not": [
                5
            ],
            "idCommitment_in": [
                5
            ],
            "idCommitment_not_in": [
                5
            ],
            "idCommitment_contains": [
                5
            ],
            "idCommitment_not_contains": [
                5
            ],
            "signature": [
                5
            ],
            "signature_not": [
                5
            ],
            "signature_in": [
                5
            ],
            "signature_not_in": [
                5
            ],
            "signature_contains": [
                5
            ],
            "signature_not_contains": [
                5
            ],
            "_change_block": [
                2
            ],
            "__typename": [
                14
            ]
        },
        "RegistrationEntity_orderBy": {},
        "String": {},
        "Subscription": {
            "registrationEntity": [
                11,
                {
                    "id": [
                        7,
                        "ID!"
                    ],
                    "block": [
                        3
                    ],
                    "subgraphError": [
                        18,
                        "_SubgraphErrorPolicy_!"
                    ]
                }
            ],
            "registrationEntities": [
                11,
                {
                    "skip": [
                        8
                    ],
                    "first": [
                        8
                    ],
                    "orderBy": [
                        13
                    ],
                    "orderDirection": [
                        9
                    ],
                    "where": [
                        12
                    ],
                    "block": [
                        3
                    ],
                    "subgraphError": [
                        18,
                        "_SubgraphErrorPolicy_!"
                    ]
                }
            ],
            "_meta": [
                17,
                {
                    "block": [
                        3
                    ]
                }
            ],
            "__typename": [
                14
            ]
        },
        "_Block_": {
            "hash": [
                5
            ],
            "number": [
                8
            ],
            "__typename": [
                14
            ]
        },
        "_Meta_": {
            "block": [
                16
            ],
            "deployment": [
                14
            ],
            "hasIndexingErrors": [
                4
            ],
            "__typename": [
                14
            ]
        },
        "_SubgraphErrorPolicy_": {}
    }
}