module.exports = {
    "scalars": [
        1,
        2,
        5
    ],
    "types": {
        "Block": {
            "block_number": [
                1
            ],
            "miner": [
                2
            ],
            "miner_reward": [
                2
            ],
            "coinbase_transfers": [
                2
            ],
            "gas_used": [
                2
            ],
            "gas_price": [
                2
            ],
            "transactions": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "Int": {},
        "String": {},
        "Query": {
            "latest_block_number": [
                1
            ],
            "blocks": [
                0,
                {
                    "miner": [
                        2
                    ],
                    "from": [
                        2
                    ],
                    "before": [
                        2
                    ],
                    "limit": [
                        1
                    ]
                }
            ],
            "block": [
                0,
                {
                    "block_number": [
                        1,
                        "Int!"
                    ]
                }
            ],
            "transactions": [
                4,
                {
                    "before": [
                        2
                    ],
                    "limit": [
                        1
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Transaction": {
            "transaction_hash": [
                2
            ],
            "tx_index": [
                1
            ],
            "bundle_index": [
                1
            ],
            "block_number": [
                1
            ],
            "eoa_address": [
                2
            ],
            "to_address": [
                2
            ],
            "gas_used": [
                1
            ],
            "gas_price": [
                2
            ],
            "coinbase_transfer": [
                2
            ],
            "total_miner_reward": [
                2
            ],
            "block": [
                0
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {}
    }
}