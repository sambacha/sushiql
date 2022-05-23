module.exports = {
    "scalars": [
        0,
        1,
        4,
        5,
        6,
        9,
        10,
        11,
        12,
        14,
        18
    ],
    "types": {
        "BigDecimal": {},
        "BigInt": {},
        "BlockChangedFilter": {
            "number_gte": [
                11
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
                11
            ],
            "number_gte": [
                11
            ],
            "__typename": [
                14
            ]
        },
        "Boolean": {},
        "Bytes": {},
        "Float": {},
        "Group": {
            "id": [
                10
            ],
            "provider": [
                14
            ],
            "name": [
                14
            ],
            "depth": [
                11
            ],
            "root": [
                1
            ],
            "__typename": [
                14
            ]
        },
        "Group_filter": {
            "id": [
                10
            ],
            "id_not": [
                10
            ],
            "id_gt": [
                10
            ],
            "id_lt": [
                10
            ],
            "id_gte": [
                10
            ],
            "id_lte": [
                10
            ],
            "id_in": [
                10
            ],
            "id_not_in": [
                10
            ],
            "provider": [
                14
            ],
            "provider_not": [
                14
            ],
            "provider_gt": [
                14
            ],
            "provider_lt": [
                14
            ],
            "provider_gte": [
                14
            ],
            "provider_lte": [
                14
            ],
            "provider_in": [
                14
            ],
            "provider_not_in": [
                14
            ],
            "provider_contains": [
                14
            ],
            "provider_contains_nocase": [
                14
            ],
            "provider_not_contains": [
                14
            ],
            "provider_not_contains_nocase": [
                14
            ],
            "provider_starts_with": [
                14
            ],
            "provider_starts_with_nocase": [
                14
            ],
            "provider_not_starts_with": [
                14
            ],
            "provider_not_starts_with_nocase": [
                14
            ],
            "provider_ends_with": [
                14
            ],
            "provider_ends_with_nocase": [
                14
            ],
            "provider_not_ends_with": [
                14
            ],
            "provider_not_ends_with_nocase": [
                14
            ],
            "name": [
                14
            ],
            "name_not": [
                14
            ],
            "name_gt": [
                14
            ],
            "name_lt": [
                14
            ],
            "name_gte": [
                14
            ],
            "name_lte": [
                14
            ],
            "name_in": [
                14
            ],
            "name_not_in": [
                14
            ],
            "name_contains": [
                14
            ],
            "name_contains_nocase": [
                14
            ],
            "name_not_contains": [
                14
            ],
            "name_not_contains_nocase": [
                14
            ],
            "name_starts_with": [
                14
            ],
            "name_starts_with_nocase": [
                14
            ],
            "name_not_starts_with": [
                14
            ],
            "name_not_starts_with_nocase": [
                14
            ],
            "name_ends_with": [
                14
            ],
            "name_ends_with_nocase": [
                14
            ],
            "name_not_ends_with": [
                14
            ],
            "name_not_ends_with_nocase": [
                14
            ],
            "depth": [
                11
            ],
            "depth_not": [
                11
            ],
            "depth_gt": [
                11
            ],
            "depth_lt": [
                11
            ],
            "depth_gte": [
                11
            ],
            "depth_lte": [
                11
            ],
            "depth_in": [
                11
            ],
            "depth_not_in": [
                11
            ],
            "root": [
                1
            ],
            "root_not": [
                1
            ],
            "root_gt": [
                1
            ],
            "root_lt": [
                1
            ],
            "root_gte": [
                1
            ],
            "root_lte": [
                1
            ],
            "root_in": [
                1
            ],
            "root_not_in": [
                1
            ],
            "_change_block": [
                2
            ],
            "__typename": [
                14
            ]
        },
        "Group_orderBy": {},
        "ID": {},
        "Int": {},
        "OrderDirection": {},
        "Query": {
            "group": [
                7,
                {
                    "id": [
                        10,
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
            "groups": [
                7,
                {
                    "skip": [
                        11
                    ],
                    "first": [
                        11
                    ],
                    "orderBy": [
                        9
                    ],
                    "orderDirection": [
                        12
                    ],
                    "where": [
                        8
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
        "String": {},
        "Subscription": {
            "group": [
                7,
                {
                    "id": [
                        10,
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
            "groups": [
                7,
                {
                    "skip": [
                        11
                    ],
                    "first": [
                        11
                    ],
                    "orderBy": [
                        9
                    ],
                    "orderDirection": [
                        12
                    ],
                    "where": [
                        8
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
                11
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