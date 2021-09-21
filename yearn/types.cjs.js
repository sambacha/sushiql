module.exports = {
    "scalars": [
        4,
        6,
        8,
        9,
        10,
        12,
        13,
        16,
        19,
        20,
        21,
        22,
        26,
        31,
        33,
        34,
        36,
        37,
        42,
        44,
        47,
        50,
        52,
        55,
        58,
        60,
        63,
        66,
        69
    ],
    "types": {
        "Account": {
            "id": [
                20
            ],
            "deposits": [
                14,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        16
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        15
                    ]
                }
            ],
            "withdrawals": [
                61,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        63
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "vaultPositions": [
                1,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        6
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        5
                    ]
                }
            ],
            "sharesReceived": [
                48,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        50
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        49
                    ]
                }
            ],
            "sharesSent": [
                48,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        50
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        49
                    ]
                }
            ],
            "__typename": [
                37
            ]
        },
        "AccountVaultPosition": {
            "id": [
                20
            ],
            "vault": [
                51
            ],
            "account": [
                0
            ],
            "token": [
                39
            ],
            "shareToken": [
                39
            ],
            "transaction": [
                45
            ],
            "latestUpdate": [
                2
            ],
            "updates": [
                2,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        4
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        3
                    ]
                }
            ],
            "balanceShares": [
                10
            ],
            "balanceTokens": [
                10
            ],
            "balancePosition": [
                10
            ],
            "balanceProfit": [
                10
            ],
            "__typename": [
                37
            ]
        },
        "AccountVaultPositionUpdate": {
            "id": [
                20
            ],
            "order": [
                10
            ],
            "timestamp": [
                10
            ],
            "blockNumber": [
                10
            ],
            "account": [
                0
            ],
            "accountVaultPosition": [
                1
            ],
            "transaction": [
                45
            ],
            "deposits": [
                10
            ],
            "withdrawals": [
                10
            ],
            "sharesMinted": [
                10
            ],
            "sharesBurnt": [
                10
            ],
            "tokensSent": [
                10
            ],
            "tokensReceived": [
                10
            ],
            "sharesSent": [
                10
            ],
            "sharesReceived": [
                10
            ],
            "balanceShares": [
                10
            ],
            "balancePosition": [
                10
            ],
            "vaultUpdate": [
                56
            ],
            "__typename": [
                37
            ]
        },
        "AccountVaultPositionUpdate_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "order": [
                10
            ],
            "order_not": [
                10
            ],
            "order_gt": [
                10
            ],
            "order_lt": [
                10
            ],
            "order_gte": [
                10
            ],
            "order_lte": [
                10
            ],
            "order_in": [
                10
            ],
            "order_not_in": [
                10
            ],
            "timestamp": [
                10
            ],
            "timestamp_not": [
                10
            ],
            "timestamp_gt": [
                10
            ],
            "timestamp_lt": [
                10
            ],
            "timestamp_gte": [
                10
            ],
            "timestamp_lte": [
                10
            ],
            "timestamp_in": [
                10
            ],
            "timestamp_not_in": [
                10
            ],
            "blockNumber": [
                10
            ],
            "blockNumber_not": [
                10
            ],
            "blockNumber_gt": [
                10
            ],
            "blockNumber_lt": [
                10
            ],
            "blockNumber_gte": [
                10
            ],
            "blockNumber_lte": [
                10
            ],
            "blockNumber_in": [
                10
            ],
            "blockNumber_not_in": [
                10
            ],
            "account": [
                37
            ],
            "account_not": [
                37
            ],
            "account_gt": [
                37
            ],
            "account_lt": [
                37
            ],
            "account_gte": [
                37
            ],
            "account_lte": [
                37
            ],
            "account_in": [
                37
            ],
            "account_not_in": [
                37
            ],
            "account_contains": [
                37
            ],
            "account_not_contains": [
                37
            ],
            "account_starts_with": [
                37
            ],
            "account_not_starts_with": [
                37
            ],
            "account_ends_with": [
                37
            ],
            "account_not_ends_with": [
                37
            ],
            "accountVaultPosition": [
                37
            ],
            "accountVaultPosition_not": [
                37
            ],
            "accountVaultPosition_gt": [
                37
            ],
            "accountVaultPosition_lt": [
                37
            ],
            "accountVaultPosition_gte": [
                37
            ],
            "accountVaultPosition_lte": [
                37
            ],
            "accountVaultPosition_in": [
                37
            ],
            "accountVaultPosition_not_in": [
                37
            ],
            "accountVaultPosition_contains": [
                37
            ],
            "accountVaultPosition_not_contains": [
                37
            ],
            "accountVaultPosition_starts_with": [
                37
            ],
            "accountVaultPosition_not_starts_with": [
                37
            ],
            "accountVaultPosition_ends_with": [
                37
            ],
            "accountVaultPosition_not_ends_with": [
                37
            ],
            "transaction": [
                37
            ],
            "transaction_not": [
                37
            ],
            "transaction_gt": [
                37
            ],
            "transaction_lt": [
                37
            ],
            "transaction_gte": [
                37
            ],
            "transaction_lte": [
                37
            ],
            "transaction_in": [
                37
            ],
            "transaction_not_in": [
                37
            ],
            "transaction_contains": [
                37
            ],
            "transaction_not_contains": [
                37
            ],
            "transaction_starts_with": [
                37
            ],
            "transaction_not_starts_with": [
                37
            ],
            "transaction_ends_with": [
                37
            ],
            "transaction_not_ends_with": [
                37
            ],
            "deposits": [
                10
            ],
            "deposits_not": [
                10
            ],
            "deposits_gt": [
                10
            ],
            "deposits_lt": [
                10
            ],
            "deposits_gte": [
                10
            ],
            "deposits_lte": [
                10
            ],
            "deposits_in": [
                10
            ],
            "deposits_not_in": [
                10
            ],
            "withdrawals": [
                10
            ],
            "withdrawals_not": [
                10
            ],
            "withdrawals_gt": [
                10
            ],
            "withdrawals_lt": [
                10
            ],
            "withdrawals_gte": [
                10
            ],
            "withdrawals_lte": [
                10
            ],
            "withdrawals_in": [
                10
            ],
            "withdrawals_not_in": [
                10
            ],
            "sharesMinted": [
                10
            ],
            "sharesMinted_not": [
                10
            ],
            "sharesMinted_gt": [
                10
            ],
            "sharesMinted_lt": [
                10
            ],
            "sharesMinted_gte": [
                10
            ],
            "sharesMinted_lte": [
                10
            ],
            "sharesMinted_in": [
                10
            ],
            "sharesMinted_not_in": [
                10
            ],
            "sharesBurnt": [
                10
            ],
            "sharesBurnt_not": [
                10
            ],
            "sharesBurnt_gt": [
                10
            ],
            "sharesBurnt_lt": [
                10
            ],
            "sharesBurnt_gte": [
                10
            ],
            "sharesBurnt_lte": [
                10
            ],
            "sharesBurnt_in": [
                10
            ],
            "sharesBurnt_not_in": [
                10
            ],
            "tokensSent": [
                10
            ],
            "tokensSent_not": [
                10
            ],
            "tokensSent_gt": [
                10
            ],
            "tokensSent_lt": [
                10
            ],
            "tokensSent_gte": [
                10
            ],
            "tokensSent_lte": [
                10
            ],
            "tokensSent_in": [
                10
            ],
            "tokensSent_not_in": [
                10
            ],
            "tokensReceived": [
                10
            ],
            "tokensReceived_not": [
                10
            ],
            "tokensReceived_gt": [
                10
            ],
            "tokensReceived_lt": [
                10
            ],
            "tokensReceived_gte": [
                10
            ],
            "tokensReceived_lte": [
                10
            ],
            "tokensReceived_in": [
                10
            ],
            "tokensReceived_not_in": [
                10
            ],
            "sharesSent": [
                10
            ],
            "sharesSent_not": [
                10
            ],
            "sharesSent_gt": [
                10
            ],
            "sharesSent_lt": [
                10
            ],
            "sharesSent_gte": [
                10
            ],
            "sharesSent_lte": [
                10
            ],
            "sharesSent_in": [
                10
            ],
            "sharesSent_not_in": [
                10
            ],
            "sharesReceived": [
                10
            ],
            "sharesReceived_not": [
                10
            ],
            "sharesReceived_gt": [
                10
            ],
            "sharesReceived_lt": [
                10
            ],
            "sharesReceived_gte": [
                10
            ],
            "sharesReceived_lte": [
                10
            ],
            "sharesReceived_in": [
                10
            ],
            "sharesReceived_not_in": [
                10
            ],
            "balanceShares": [
                10
            ],
            "balanceShares_not": [
                10
            ],
            "balanceShares_gt": [
                10
            ],
            "balanceShares_lt": [
                10
            ],
            "balanceShares_gte": [
                10
            ],
            "balanceShares_lte": [
                10
            ],
            "balanceShares_in": [
                10
            ],
            "balanceShares_not_in": [
                10
            ],
            "balancePosition": [
                10
            ],
            "balancePosition_not": [
                10
            ],
            "balancePosition_gt": [
                10
            ],
            "balancePosition_lt": [
                10
            ],
            "balancePosition_gte": [
                10
            ],
            "balancePosition_lte": [
                10
            ],
            "balancePosition_in": [
                10
            ],
            "balancePosition_not_in": [
                10
            ],
            "vaultUpdate": [
                37
            ],
            "vaultUpdate_not": [
                37
            ],
            "vaultUpdate_gt": [
                37
            ],
            "vaultUpdate_lt": [
                37
            ],
            "vaultUpdate_gte": [
                37
            ],
            "vaultUpdate_lte": [
                37
            ],
            "vaultUpdate_in": [
                37
            ],
            "vaultUpdate_not_in": [
                37
            ],
            "vaultUpdate_contains": [
                37
            ],
            "vaultUpdate_not_contains": [
                37
            ],
            "vaultUpdate_starts_with": [
                37
            ],
            "vaultUpdate_not_starts_with": [
                37
            ],
            "vaultUpdate_ends_with": [
                37
            ],
            "vaultUpdate_not_ends_with": [
                37
            ],
            "__typename": [
                37
            ]
        },
        "AccountVaultPositionUpdate_orderBy": {},
        "AccountVaultPosition_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "vault": [
                37
            ],
            "vault_not": [
                37
            ],
            "vault_gt": [
                37
            ],
            "vault_lt": [
                37
            ],
            "vault_gte": [
                37
            ],
            "vault_lte": [
                37
            ],
            "vault_in": [
                37
            ],
            "vault_not_in": [
                37
            ],
            "vault_contains": [
                37
            ],
            "vault_not_contains": [
                37
            ],
            "vault_starts_with": [
                37
            ],
            "vault_not_starts_with": [
                37
            ],
            "vault_ends_with": [
                37
            ],
            "vault_not_ends_with": [
                37
            ],
            "account": [
                37
            ],
            "account_not": [
                37
            ],
            "account_gt": [
                37
            ],
            "account_lt": [
                37
            ],
            "account_gte": [
                37
            ],
            "account_lte": [
                37
            ],
            "account_in": [
                37
            ],
            "account_not_in": [
                37
            ],
            "account_contains": [
                37
            ],
            "account_not_contains": [
                37
            ],
            "account_starts_with": [
                37
            ],
            "account_not_starts_with": [
                37
            ],
            "account_ends_with": [
                37
            ],
            "account_not_ends_with": [
                37
            ],
            "token": [
                37
            ],
            "token_not": [
                37
            ],
            "token_gt": [
                37
            ],
            "token_lt": [
                37
            ],
            "token_gte": [
                37
            ],
            "token_lte": [
                37
            ],
            "token_in": [
                37
            ],
            "token_not_in": [
                37
            ],
            "token_contains": [
                37
            ],
            "token_not_contains": [
                37
            ],
            "token_starts_with": [
                37
            ],
            "token_not_starts_with": [
                37
            ],
            "token_ends_with": [
                37
            ],
            "token_not_ends_with": [
                37
            ],
            "shareToken": [
                37
            ],
            "shareToken_not": [
                37
            ],
            "shareToken_gt": [
                37
            ],
            "shareToken_lt": [
                37
            ],
            "shareToken_gte": [
                37
            ],
            "shareToken_lte": [
                37
            ],
            "shareToken_in": [
                37
            ],
            "shareToken_not_in": [
                37
            ],
            "shareToken_contains": [
                37
            ],
            "shareToken_not_contains": [
                37
            ],
            "shareToken_starts_with": [
                37
            ],
            "shareToken_not_starts_with": [
                37
            ],
            "shareToken_ends_with": [
                37
            ],
            "shareToken_not_ends_with": [
                37
            ],
            "transaction": [
                37
            ],
            "transaction_not": [
                37
            ],
            "transaction_gt": [
                37
            ],
            "transaction_lt": [
                37
            ],
            "transaction_gte": [
                37
            ],
            "transaction_lte": [
                37
            ],
            "transaction_in": [
                37
            ],
            "transaction_not_in": [
                37
            ],
            "transaction_contains": [
                37
            ],
            "transaction_not_contains": [
                37
            ],
            "transaction_starts_with": [
                37
            ],
            "transaction_not_starts_with": [
                37
            ],
            "transaction_ends_with": [
                37
            ],
            "transaction_not_ends_with": [
                37
            ],
            "latestUpdate": [
                37
            ],
            "latestUpdate_not": [
                37
            ],
            "latestUpdate_gt": [
                37
            ],
            "latestUpdate_lt": [
                37
            ],
            "latestUpdate_gte": [
                37
            ],
            "latestUpdate_lte": [
                37
            ],
            "latestUpdate_in": [
                37
            ],
            "latestUpdate_not_in": [
                37
            ],
            "latestUpdate_contains": [
                37
            ],
            "latestUpdate_not_contains": [
                37
            ],
            "latestUpdate_starts_with": [
                37
            ],
            "latestUpdate_not_starts_with": [
                37
            ],
            "latestUpdate_ends_with": [
                37
            ],
            "latestUpdate_not_ends_with": [
                37
            ],
            "balanceShares": [
                10
            ],
            "balanceShares_not": [
                10
            ],
            "balanceShares_gt": [
                10
            ],
            "balanceShares_lt": [
                10
            ],
            "balanceShares_gte": [
                10
            ],
            "balanceShares_lte": [
                10
            ],
            "balanceShares_in": [
                10
            ],
            "balanceShares_not_in": [
                10
            ],
            "balanceTokens": [
                10
            ],
            "balanceTokens_not": [
                10
            ],
            "balanceTokens_gt": [
                10
            ],
            "balanceTokens_lt": [
                10
            ],
            "balanceTokens_gte": [
                10
            ],
            "balanceTokens_lte": [
                10
            ],
            "balanceTokens_in": [
                10
            ],
            "balanceTokens_not_in": [
                10
            ],
            "balancePosition": [
                10
            ],
            "balancePosition_not": [
                10
            ],
            "balancePosition_gt": [
                10
            ],
            "balancePosition_lt": [
                10
            ],
            "balancePosition_gte": [
                10
            ],
            "balancePosition_lte": [
                10
            ],
            "balancePosition_in": [
                10
            ],
            "balancePosition_not_in": [
                10
            ],
            "balanceProfit": [
                10
            ],
            "balanceProfit_not": [
                10
            ],
            "balanceProfit_gt": [
                10
            ],
            "balanceProfit_lt": [
                10
            ],
            "balanceProfit_gte": [
                10
            ],
            "balanceProfit_lte": [
                10
            ],
            "balanceProfit_in": [
                10
            ],
            "balanceProfit_not_in": [
                10
            ],
            "__typename": [
                37
            ]
        },
        "AccountVaultPosition_orderBy": {},
        "Account_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "__typename": [
                37
            ]
        },
        "Account_orderBy": {},
        "BigDecimal": {},
        "BigInt": {},
        "Block_height": {
            "hash": [
                13
            ],
            "number": [
                21
            ],
            "__typename": [
                37
            ]
        },
        "Boolean": {},
        "Bytes": {},
        "Deposit": {
            "id": [
                20
            ],
            "timestamp": [
                10
            ],
            "blockNumber": [
                10
            ],
            "account": [
                0
            ],
            "vault": [
                51
            ],
            "tokenAmount": [
                10
            ],
            "sharesMinted": [
                10
            ],
            "transaction": [
                45
            ],
            "vaultUpdate": [
                56
            ],
            "__typename": [
                37
            ]
        },
        "Deposit_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "timestamp": [
                10
            ],
            "timestamp_not": [
                10
            ],
            "timestamp_gt": [
                10
            ],
            "timestamp_lt": [
                10
            ],
            "timestamp_gte": [
                10
            ],
            "timestamp_lte": [
                10
            ],
            "timestamp_in": [
                10
            ],
            "timestamp_not_in": [
                10
            ],
            "blockNumber": [
                10
            ],
            "blockNumber_not": [
                10
            ],
            "blockNumber_gt": [
                10
            ],
            "blockNumber_lt": [
                10
            ],
            "blockNumber_gte": [
                10
            ],
            "blockNumber_lte": [
                10
            ],
            "blockNumber_in": [
                10
            ],
            "blockNumber_not_in": [
                10
            ],
            "account": [
                37
            ],
            "account_not": [
                37
            ],
            "account_gt": [
                37
            ],
            "account_lt": [
                37
            ],
            "account_gte": [
                37
            ],
            "account_lte": [
                37
            ],
            "account_in": [
                37
            ],
            "account_not_in": [
                37
            ],
            "account_contains": [
                37
            ],
            "account_not_contains": [
                37
            ],
            "account_starts_with": [
                37
            ],
            "account_not_starts_with": [
                37
            ],
            "account_ends_with": [
                37
            ],
            "account_not_ends_with": [
                37
            ],
            "vault": [
                37
            ],
            "vault_not": [
                37
            ],
            "vault_gt": [
                37
            ],
            "vault_lt": [
                37
            ],
            "vault_gte": [
                37
            ],
            "vault_lte": [
                37
            ],
            "vault_in": [
                37
            ],
            "vault_not_in": [
                37
            ],
            "vault_contains": [
                37
            ],
            "vault_not_contains": [
                37
            ],
            "vault_starts_with": [
                37
            ],
            "vault_not_starts_with": [
                37
            ],
            "vault_ends_with": [
                37
            ],
            "vault_not_ends_with": [
                37
            ],
            "tokenAmount": [
                10
            ],
            "tokenAmount_not": [
                10
            ],
            "tokenAmount_gt": [
                10
            ],
            "tokenAmount_lt": [
                10
            ],
            "tokenAmount_gte": [
                10
            ],
            "tokenAmount_lte": [
                10
            ],
            "tokenAmount_in": [
                10
            ],
            "tokenAmount_not_in": [
                10
            ],
            "sharesMinted": [
                10
            ],
            "sharesMinted_not": [
                10
            ],
            "sharesMinted_gt": [
                10
            ],
            "sharesMinted_lt": [
                10
            ],
            "sharesMinted_gte": [
                10
            ],
            "sharesMinted_lte": [
                10
            ],
            "sharesMinted_in": [
                10
            ],
            "sharesMinted_not_in": [
                10
            ],
            "transaction": [
                37
            ],
            "transaction_not": [
                37
            ],
            "transaction_gt": [
                37
            ],
            "transaction_lt": [
                37
            ],
            "transaction_gte": [
                37
            ],
            "transaction_lte": [
                37
            ],
            "transaction_in": [
                37
            ],
            "transaction_not_in": [
                37
            ],
            "transaction_contains": [
                37
            ],
            "transaction_not_contains": [
                37
            ],
            "transaction_starts_with": [
                37
            ],
            "transaction_not_starts_with": [
                37
            ],
            "transaction_ends_with": [
                37
            ],
            "transaction_not_ends_with": [
                37
            ],
            "vaultUpdate": [
                37
            ],
            "vaultUpdate_not": [
                37
            ],
            "vaultUpdate_gt": [
                37
            ],
            "vaultUpdate_lt": [
                37
            ],
            "vaultUpdate_gte": [
                37
            ],
            "vaultUpdate_lte": [
                37
            ],
            "vaultUpdate_in": [
                37
            ],
            "vaultUpdate_not_in": [
                37
            ],
            "vaultUpdate_contains": [
                37
            ],
            "vaultUpdate_not_contains": [
                37
            ],
            "vaultUpdate_starts_with": [
                37
            ],
            "vaultUpdate_not_starts_with": [
                37
            ],
            "vaultUpdate_ends_with": [
                37
            ],
            "vaultUpdate_not_ends_with": [
                37
            ],
            "__typename": [
                37
            ]
        },
        "Deposit_orderBy": {},
        "Harvest": {
            "id": [
                20
            ],
            "timestamp": [
                10
            ],
            "blockNumber": [
                10
            ],
            "transaction": [
                45
            ],
            "vault": [
                51
            ],
            "strategy": [
                27
            ],
            "harvester": [
                13
            ],
            "profit": [
                10
            ],
            "loss": [
                10
            ],
            "debtPayment": [
                10
            ],
            "debtOutstanding": [
                10
            ],
            "__typename": [
                37
            ]
        },
        "Harvest_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "timestamp": [
                10
            ],
            "timestamp_not": [
                10
            ],
            "timestamp_gt": [
                10
            ],
            "timestamp_lt": [
                10
            ],
            "timestamp_gte": [
                10
            ],
            "timestamp_lte": [
                10
            ],
            "timestamp_in": [
                10
            ],
            "timestamp_not_in": [
                10
            ],
            "blockNumber": [
                10
            ],
            "blockNumber_not": [
                10
            ],
            "blockNumber_gt": [
                10
            ],
            "blockNumber_lt": [
                10
            ],
            "blockNumber_gte": [
                10
            ],
            "blockNumber_lte": [
                10
            ],
            "blockNumber_in": [
                10
            ],
            "blockNumber_not_in": [
                10
            ],
            "transaction": [
                37
            ],
            "transaction_not": [
                37
            ],
            "transaction_gt": [
                37
            ],
            "transaction_lt": [
                37
            ],
            "transaction_gte": [
                37
            ],
            "transaction_lte": [
                37
            ],
            "transaction_in": [
                37
            ],
            "transaction_not_in": [
                37
            ],
            "transaction_contains": [
                37
            ],
            "transaction_not_contains": [
                37
            ],
            "transaction_starts_with": [
                37
            ],
            "transaction_not_starts_with": [
                37
            ],
            "transaction_ends_with": [
                37
            ],
            "transaction_not_ends_with": [
                37
            ],
            "vault": [
                37
            ],
            "vault_not": [
                37
            ],
            "vault_gt": [
                37
            ],
            "vault_lt": [
                37
            ],
            "vault_gte": [
                37
            ],
            "vault_lte": [
                37
            ],
            "vault_in": [
                37
            ],
            "vault_not_in": [
                37
            ],
            "vault_contains": [
                37
            ],
            "vault_not_contains": [
                37
            ],
            "vault_starts_with": [
                37
            ],
            "vault_not_starts_with": [
                37
            ],
            "vault_ends_with": [
                37
            ],
            "vault_not_ends_with": [
                37
            ],
            "strategy": [
                37
            ],
            "strategy_not": [
                37
            ],
            "strategy_gt": [
                37
            ],
            "strategy_lt": [
                37
            ],
            "strategy_gte": [
                37
            ],
            "strategy_lte": [
                37
            ],
            "strategy_in": [
                37
            ],
            "strategy_not_in": [
                37
            ],
            "strategy_contains": [
                37
            ],
            "strategy_not_contains": [
                37
            ],
            "strategy_starts_with": [
                37
            ],
            "strategy_not_starts_with": [
                37
            ],
            "strategy_ends_with": [
                37
            ],
            "strategy_not_ends_with": [
                37
            ],
            "harvester": [
                13
            ],
            "harvester_not": [
                13
            ],
            "harvester_in": [
                13
            ],
            "harvester_not_in": [
                13
            ],
            "harvester_contains": [
                13
            ],
            "harvester_not_contains": [
                13
            ],
            "profit": [
                10
            ],
            "profit_not": [
                10
            ],
            "profit_gt": [
                10
            ],
            "profit_lt": [
                10
            ],
            "profit_gte": [
                10
            ],
            "profit_lte": [
                10
            ],
            "profit_in": [
                10
            ],
            "profit_not_in": [
                10
            ],
            "loss": [
                10
            ],
            "loss_not": [
                10
            ],
            "loss_gt": [
                10
            ],
            "loss_lt": [
                10
            ],
            "loss_gte": [
                10
            ],
            "loss_lte": [
                10
            ],
            "loss_in": [
                10
            ],
            "loss_not_in": [
                10
            ],
            "debtPayment": [
                10
            ],
            "debtPayment_not": [
                10
            ],
            "debtPayment_gt": [
                10
            ],
            "debtPayment_lt": [
                10
            ],
            "debtPayment_gte": [
                10
            ],
            "debtPayment_lte": [
                10
            ],
            "debtPayment_in": [
                10
            ],
            "debtPayment_not_in": [
                10
            ],
            "debtOutstanding": [
                10
            ],
            "debtOutstanding_not": [
                10
            ],
            "debtOutstanding_gt": [
                10
            ],
            "debtOutstanding_lt": [
                10
            ],
            "debtOutstanding_gte": [
                10
            ],
            "debtOutstanding_lte": [
                10
            ],
            "debtOutstanding_in": [
                10
            ],
            "debtOutstanding_not_in": [
                10
            ],
            "__typename": [
                37
            ]
        },
        "Harvest_orderBy": {},
        "ID": {},
        "Int": {},
        "OrderDirection": {},
        "Query": {
            "transaction": [
                45,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "transactions": [
                45,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        47
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        46
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "token": [
                39,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "tokens": [
                39,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        44
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        43
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "tokenFee": [
                40,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "tokenFees": [
                40,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        42
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        41
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "registry": [
                24,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "registries": [
                24,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        26
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        25
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "vault": [
                51,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "vaults": [
                51,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        60
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        59
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "vaultUpdate": [
                56,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "vaultUpdates": [
                56,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        58
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        57
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "account": [
                0,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "accounts": [
                0,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        8
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        7
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "deposit": [
                14,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "deposits": [
                14,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        16
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        15
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "withdrawal": [
                61,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "withdrawals": [
                61,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        63
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        62
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "transfer": [
                48,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "transfers": [
                48,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        50
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        49
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "accountVaultPosition": [
                1,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "accountVaultPositions": [
                1,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        6
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        5
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "accountVaultPositionUpdate": [
                2,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "accountVaultPositionUpdates": [
                2,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        4
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        3
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "strategy": [
                27,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "strategies": [
                27,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        36
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        35
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "strategyReport": [
                28,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "strategyReports": [
                28,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        33
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        32
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "strategyReportResult": [
                29,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "strategyReportResults": [
                29,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        31
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        30
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "harvest": [
                17,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "harvests": [
                17,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        19
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        18
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "vaultDayData": [
                53,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "vaultDayDatas": [
                53,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        55
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        54
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "yearn": [
                64,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "yearns": [
                64,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        66
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        65
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "_meta": [
                68,
                {
                    "block": [
                        11
                    ]
                }
            ],
            "__typename": [
                37
            ]
        },
        "Registry": {
            "id": [
                20
            ],
            "timestamp": [
                10
            ],
            "blockNumber": [
                10
            ],
            "transaction": [
                45
            ],
            "vaults": [
                51,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        60
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "__typename": [
                37
            ]
        },
        "Registry_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "timestamp": [
                10
            ],
            "timestamp_not": [
                10
            ],
            "timestamp_gt": [
                10
            ],
            "timestamp_lt": [
                10
            ],
            "timestamp_gte": [
                10
            ],
            "timestamp_lte": [
                10
            ],
            "timestamp_in": [
                10
            ],
            "timestamp_not_in": [
                10
            ],
            "blockNumber": [
                10
            ],
            "blockNumber_not": [
                10
            ],
            "blockNumber_gt": [
                10
            ],
            "blockNumber_lt": [
                10
            ],
            "blockNumber_gte": [
                10
            ],
            "blockNumber_lte": [
                10
            ],
            "blockNumber_in": [
                10
            ],
            "blockNumber_not_in": [
                10
            ],
            "transaction": [
                37
            ],
            "transaction_not": [
                37
            ],
            "transaction_gt": [
                37
            ],
            "transaction_lt": [
                37
            ],
            "transaction_gte": [
                37
            ],
            "transaction_lte": [
                37
            ],
            "transaction_in": [
                37
            ],
            "transaction_not_in": [
                37
            ],
            "transaction_contains": [
                37
            ],
            "transaction_not_contains": [
                37
            ],
            "transaction_starts_with": [
                37
            ],
            "transaction_not_starts_with": [
                37
            ],
            "transaction_ends_with": [
                37
            ],
            "transaction_not_ends_with": [
                37
            ],
            "__typename": [
                37
            ]
        },
        "Registry_orderBy": {},
        "Strategy": {
            "id": [
                20
            ],
            "name": [
                37
            ],
            "timestamp": [
                10
            ],
            "blockNumber": [
                10
            ],
            "transaction": [
                45
            ],
            "address": [
                13
            ],
            "healthCheck": [
                13
            ],
            "doHealthCheck": [
                12
            ],
            "inQueue": [
                12
            ],
            "vault": [
                51
            ],
            "clonedFrom": [
                27
            ],
            "debtLimit": [
                10
            ],
            "minDebtPerHarvest": [
                10
            ],
            "maxDebtPerHarvest": [
                10
            ],
            "rateLimit": [
                10
            ],
            "performanceFeeBps": [
                10
            ],
            "latestReport": [
                28
            ],
            "reports": [
                28,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        33
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        32
                    ]
                }
            ],
            "harvests": [
                17,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        19
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "__typename": [
                37
            ]
        },
        "StrategyReport": {
            "id": [
                20
            ],
            "timestamp": [
                10
            ],
            "blockNumber": [
                10
            ],
            "transaction": [
                45
            ],
            "strategy": [
                27
            ],
            "gain": [
                10
            ],
            "loss": [
                10
            ],
            "totalGain": [
                10
            ],
            "totalLoss": [
                10
            ],
            "totalDebt": [
                10
            ],
            "debtAdded": [
                10
            ],
            "debtLimit": [
                10
            ],
            "debtPaid": [
                10
            ],
            "results": [
                29,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        31
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        30
                    ]
                }
            ],
            "__typename": [
                37
            ]
        },
        "StrategyReportResult": {
            "id": [
                20
            ],
            "timestamp": [
                10
            ],
            "blockNumber": [
                10
            ],
            "currentReport": [
                28
            ],
            "previousReport": [
                28
            ],
            "startTimestamp": [
                10
            ],
            "endTimestamp": [
                10
            ],
            "duration": [
                9
            ],
            "durationPr": [
                9
            ],
            "apr": [
                9
            ],
            "transaction": [
                45
            ],
            "__typename": [
                37
            ]
        },
        "StrategyReportResult_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "timestamp": [
                10
            ],
            "timestamp_not": [
                10
            ],
            "timestamp_gt": [
                10
            ],
            "timestamp_lt": [
                10
            ],
            "timestamp_gte": [
                10
            ],
            "timestamp_lte": [
                10
            ],
            "timestamp_in": [
                10
            ],
            "timestamp_not_in": [
                10
            ],
            "blockNumber": [
                10
            ],
            "blockNumber_not": [
                10
            ],
            "blockNumber_gt": [
                10
            ],
            "blockNumber_lt": [
                10
            ],
            "blockNumber_gte": [
                10
            ],
            "blockNumber_lte": [
                10
            ],
            "blockNumber_in": [
                10
            ],
            "blockNumber_not_in": [
                10
            ],
            "currentReport": [
                37
            ],
            "currentReport_not": [
                37
            ],
            "currentReport_gt": [
                37
            ],
            "currentReport_lt": [
                37
            ],
            "currentReport_gte": [
                37
            ],
            "currentReport_lte": [
                37
            ],
            "currentReport_in": [
                37
            ],
            "currentReport_not_in": [
                37
            ],
            "currentReport_contains": [
                37
            ],
            "currentReport_not_contains": [
                37
            ],
            "currentReport_starts_with": [
                37
            ],
            "currentReport_not_starts_with": [
                37
            ],
            "currentReport_ends_with": [
                37
            ],
            "currentReport_not_ends_with": [
                37
            ],
            "previousReport": [
                37
            ],
            "previousReport_not": [
                37
            ],
            "previousReport_gt": [
                37
            ],
            "previousReport_lt": [
                37
            ],
            "previousReport_gte": [
                37
            ],
            "previousReport_lte": [
                37
            ],
            "previousReport_in": [
                37
            ],
            "previousReport_not_in": [
                37
            ],
            "previousReport_contains": [
                37
            ],
            "previousReport_not_contains": [
                37
            ],
            "previousReport_starts_with": [
                37
            ],
            "previousReport_not_starts_with": [
                37
            ],
            "previousReport_ends_with": [
                37
            ],
            "previousReport_not_ends_with": [
                37
            ],
            "startTimestamp": [
                10
            ],
            "startTimestamp_not": [
                10
            ],
            "startTimestamp_gt": [
                10
            ],
            "startTimestamp_lt": [
                10
            ],
            "startTimestamp_gte": [
                10
            ],
            "startTimestamp_lte": [
                10
            ],
            "startTimestamp_in": [
                10
            ],
            "startTimestamp_not_in": [
                10
            ],
            "endTimestamp": [
                10
            ],
            "endTimestamp_not": [
                10
            ],
            "endTimestamp_gt": [
                10
            ],
            "endTimestamp_lt": [
                10
            ],
            "endTimestamp_gte": [
                10
            ],
            "endTimestamp_lte": [
                10
            ],
            "endTimestamp_in": [
                10
            ],
            "endTimestamp_not_in": [
                10
            ],
            "duration": [
                9
            ],
            "duration_not": [
                9
            ],
            "duration_gt": [
                9
            ],
            "duration_lt": [
                9
            ],
            "duration_gte": [
                9
            ],
            "duration_lte": [
                9
            ],
            "duration_in": [
                9
            ],
            "duration_not_in": [
                9
            ],
            "durationPr": [
                9
            ],
            "durationPr_not": [
                9
            ],
            "durationPr_gt": [
                9
            ],
            "durationPr_lt": [
                9
            ],
            "durationPr_gte": [
                9
            ],
            "durationPr_lte": [
                9
            ],
            "durationPr_in": [
                9
            ],
            "durationPr_not_in": [
                9
            ],
            "apr": [
                9
            ],
            "apr_not": [
                9
            ],
            "apr_gt": [
                9
            ],
            "apr_lt": [
                9
            ],
            "apr_gte": [
                9
            ],
            "apr_lte": [
                9
            ],
            "apr_in": [
                9
            ],
            "apr_not_in": [
                9
            ],
            "transaction": [
                37
            ],
            "transaction_not": [
                37
            ],
            "transaction_gt": [
                37
            ],
            "transaction_lt": [
                37
            ],
            "transaction_gte": [
                37
            ],
            "transaction_lte": [
                37
            ],
            "transaction_in": [
                37
            ],
            "transaction_not_in": [
                37
            ],
            "transaction_contains": [
                37
            ],
            "transaction_not_contains": [
                37
            ],
            "transaction_starts_with": [
                37
            ],
            "transaction_not_starts_with": [
                37
            ],
            "transaction_ends_with": [
                37
            ],
            "transaction_not_ends_with": [
                37
            ],
            "__typename": [
                37
            ]
        },
        "StrategyReportResult_orderBy": {},
        "StrategyReport_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "timestamp": [
                10
            ],
            "timestamp_not": [
                10
            ],
            "timestamp_gt": [
                10
            ],
            "timestamp_lt": [
                10
            ],
            "timestamp_gte": [
                10
            ],
            "timestamp_lte": [
                10
            ],
            "timestamp_in": [
                10
            ],
            "timestamp_not_in": [
                10
            ],
            "blockNumber": [
                10
            ],
            "blockNumber_not": [
                10
            ],
            "blockNumber_gt": [
                10
            ],
            "blockNumber_lt": [
                10
            ],
            "blockNumber_gte": [
                10
            ],
            "blockNumber_lte": [
                10
            ],
            "blockNumber_in": [
                10
            ],
            "blockNumber_not_in": [
                10
            ],
            "transaction": [
                37
            ],
            "transaction_not": [
                37
            ],
            "transaction_gt": [
                37
            ],
            "transaction_lt": [
                37
            ],
            "transaction_gte": [
                37
            ],
            "transaction_lte": [
                37
            ],
            "transaction_in": [
                37
            ],
            "transaction_not_in": [
                37
            ],
            "transaction_contains": [
                37
            ],
            "transaction_not_contains": [
                37
            ],
            "transaction_starts_with": [
                37
            ],
            "transaction_not_starts_with": [
                37
            ],
            "transaction_ends_with": [
                37
            ],
            "transaction_not_ends_with": [
                37
            ],
            "strategy": [
                37
            ],
            "strategy_not": [
                37
            ],
            "strategy_gt": [
                37
            ],
            "strategy_lt": [
                37
            ],
            "strategy_gte": [
                37
            ],
            "strategy_lte": [
                37
            ],
            "strategy_in": [
                37
            ],
            "strategy_not_in": [
                37
            ],
            "strategy_contains": [
                37
            ],
            "strategy_not_contains": [
                37
            ],
            "strategy_starts_with": [
                37
            ],
            "strategy_not_starts_with": [
                37
            ],
            "strategy_ends_with": [
                37
            ],
            "strategy_not_ends_with": [
                37
            ],
            "gain": [
                10
            ],
            "gain_not": [
                10
            ],
            "gain_gt": [
                10
            ],
            "gain_lt": [
                10
            ],
            "gain_gte": [
                10
            ],
            "gain_lte": [
                10
            ],
            "gain_in": [
                10
            ],
            "gain_not_in": [
                10
            ],
            "loss": [
                10
            ],
            "loss_not": [
                10
            ],
            "loss_gt": [
                10
            ],
            "loss_lt": [
                10
            ],
            "loss_gte": [
                10
            ],
            "loss_lte": [
                10
            ],
            "loss_in": [
                10
            ],
            "loss_not_in": [
                10
            ],
            "totalGain": [
                10
            ],
            "totalGain_not": [
                10
            ],
            "totalGain_gt": [
                10
            ],
            "totalGain_lt": [
                10
            ],
            "totalGain_gte": [
                10
            ],
            "totalGain_lte": [
                10
            ],
            "totalGain_in": [
                10
            ],
            "totalGain_not_in": [
                10
            ],
            "totalLoss": [
                10
            ],
            "totalLoss_not": [
                10
            ],
            "totalLoss_gt": [
                10
            ],
            "totalLoss_lt": [
                10
            ],
            "totalLoss_gte": [
                10
            ],
            "totalLoss_lte": [
                10
            ],
            "totalLoss_in": [
                10
            ],
            "totalLoss_not_in": [
                10
            ],
            "totalDebt": [
                10
            ],
            "totalDebt_not": [
                10
            ],
            "totalDebt_gt": [
                10
            ],
            "totalDebt_lt": [
                10
            ],
            "totalDebt_gte": [
                10
            ],
            "totalDebt_lte": [
                10
            ],
            "totalDebt_in": [
                10
            ],
            "totalDebt_not_in": [
                10
            ],
            "debtAdded": [
                10
            ],
            "debtAdded_not": [
                10
            ],
            "debtAdded_gt": [
                10
            ],
            "debtAdded_lt": [
                10
            ],
            "debtAdded_gte": [
                10
            ],
            "debtAdded_lte": [
                10
            ],
            "debtAdded_in": [
                10
            ],
            "debtAdded_not_in": [
                10
            ],
            "debtLimit": [
                10
            ],
            "debtLimit_not": [
                10
            ],
            "debtLimit_gt": [
                10
            ],
            "debtLimit_lt": [
                10
            ],
            "debtLimit_gte": [
                10
            ],
            "debtLimit_lte": [
                10
            ],
            "debtLimit_in": [
                10
            ],
            "debtLimit_not_in": [
                10
            ],
            "debtPaid": [
                10
            ],
            "debtPaid_not": [
                10
            ],
            "debtPaid_gt": [
                10
            ],
            "debtPaid_lt": [
                10
            ],
            "debtPaid_gte": [
                10
            ],
            "debtPaid_lte": [
                10
            ],
            "debtPaid_in": [
                10
            ],
            "debtPaid_not_in": [
                10
            ],
            "__typename": [
                37
            ]
        },
        "StrategyReport_orderBy": {},
        "StrategyStatus": {},
        "Strategy_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "name": [
                37
            ],
            "name_not": [
                37
            ],
            "name_gt": [
                37
            ],
            "name_lt": [
                37
            ],
            "name_gte": [
                37
            ],
            "name_lte": [
                37
            ],
            "name_in": [
                37
            ],
            "name_not_in": [
                37
            ],
            "name_contains": [
                37
            ],
            "name_not_contains": [
                37
            ],
            "name_starts_with": [
                37
            ],
            "name_not_starts_with": [
                37
            ],
            "name_ends_with": [
                37
            ],
            "name_not_ends_with": [
                37
            ],
            "timestamp": [
                10
            ],
            "timestamp_not": [
                10
            ],
            "timestamp_gt": [
                10
            ],
            "timestamp_lt": [
                10
            ],
            "timestamp_gte": [
                10
            ],
            "timestamp_lte": [
                10
            ],
            "timestamp_in": [
                10
            ],
            "timestamp_not_in": [
                10
            ],
            "blockNumber": [
                10
            ],
            "blockNumber_not": [
                10
            ],
            "blockNumber_gt": [
                10
            ],
            "blockNumber_lt": [
                10
            ],
            "blockNumber_gte": [
                10
            ],
            "blockNumber_lte": [
                10
            ],
            "blockNumber_in": [
                10
            ],
            "blockNumber_not_in": [
                10
            ],
            "transaction": [
                37
            ],
            "transaction_not": [
                37
            ],
            "transaction_gt": [
                37
            ],
            "transaction_lt": [
                37
            ],
            "transaction_gte": [
                37
            ],
            "transaction_lte": [
                37
            ],
            "transaction_in": [
                37
            ],
            "transaction_not_in": [
                37
            ],
            "transaction_contains": [
                37
            ],
            "transaction_not_contains": [
                37
            ],
            "transaction_starts_with": [
                37
            ],
            "transaction_not_starts_with": [
                37
            ],
            "transaction_ends_with": [
                37
            ],
            "transaction_not_ends_with": [
                37
            ],
            "address": [
                13
            ],
            "address_not": [
                13
            ],
            "address_in": [
                13
            ],
            "address_not_in": [
                13
            ],
            "address_contains": [
                13
            ],
            "address_not_contains": [
                13
            ],
            "healthCheck": [
                13
            ],
            "healthCheck_not": [
                13
            ],
            "healthCheck_in": [
                13
            ],
            "healthCheck_not_in": [
                13
            ],
            "healthCheck_contains": [
                13
            ],
            "healthCheck_not_contains": [
                13
            ],
            "doHealthCheck": [
                12
            ],
            "doHealthCheck_not": [
                12
            ],
            "doHealthCheck_in": [
                12
            ],
            "doHealthCheck_not_in": [
                12
            ],
            "inQueue": [
                12
            ],
            "inQueue_not": [
                12
            ],
            "inQueue_in": [
                12
            ],
            "inQueue_not_in": [
                12
            ],
            "vault": [
                37
            ],
            "vault_not": [
                37
            ],
            "vault_gt": [
                37
            ],
            "vault_lt": [
                37
            ],
            "vault_gte": [
                37
            ],
            "vault_lte": [
                37
            ],
            "vault_in": [
                37
            ],
            "vault_not_in": [
                37
            ],
            "vault_contains": [
                37
            ],
            "vault_not_contains": [
                37
            ],
            "vault_starts_with": [
                37
            ],
            "vault_not_starts_with": [
                37
            ],
            "vault_ends_with": [
                37
            ],
            "vault_not_ends_with": [
                37
            ],
            "clonedFrom": [
                37
            ],
            "clonedFrom_not": [
                37
            ],
            "clonedFrom_gt": [
                37
            ],
            "clonedFrom_lt": [
                37
            ],
            "clonedFrom_gte": [
                37
            ],
            "clonedFrom_lte": [
                37
            ],
            "clonedFrom_in": [
                37
            ],
            "clonedFrom_not_in": [
                37
            ],
            "clonedFrom_contains": [
                37
            ],
            "clonedFrom_not_contains": [
                37
            ],
            "clonedFrom_starts_with": [
                37
            ],
            "clonedFrom_not_starts_with": [
                37
            ],
            "clonedFrom_ends_with": [
                37
            ],
            "clonedFrom_not_ends_with": [
                37
            ],
            "debtLimit": [
                10
            ],
            "debtLimit_not": [
                10
            ],
            "debtLimit_gt": [
                10
            ],
            "debtLimit_lt": [
                10
            ],
            "debtLimit_gte": [
                10
            ],
            "debtLimit_lte": [
                10
            ],
            "debtLimit_in": [
                10
            ],
            "debtLimit_not_in": [
                10
            ],
            "minDebtPerHarvest": [
                10
            ],
            "minDebtPerHarvest_not": [
                10
            ],
            "minDebtPerHarvest_gt": [
                10
            ],
            "minDebtPerHarvest_lt": [
                10
            ],
            "minDebtPerHarvest_gte": [
                10
            ],
            "minDebtPerHarvest_lte": [
                10
            ],
            "minDebtPerHarvest_in": [
                10
            ],
            "minDebtPerHarvest_not_in": [
                10
            ],
            "maxDebtPerHarvest": [
                10
            ],
            "maxDebtPerHarvest_not": [
                10
            ],
            "maxDebtPerHarvest_gt": [
                10
            ],
            "maxDebtPerHarvest_lt": [
                10
            ],
            "maxDebtPerHarvest_gte": [
                10
            ],
            "maxDebtPerHarvest_lte": [
                10
            ],
            "maxDebtPerHarvest_in": [
                10
            ],
            "maxDebtPerHarvest_not_in": [
                10
            ],
            "rateLimit": [
                10
            ],
            "rateLimit_not": [
                10
            ],
            "rateLimit_gt": [
                10
            ],
            "rateLimit_lt": [
                10
            ],
            "rateLimit_gte": [
                10
            ],
            "rateLimit_lte": [
                10
            ],
            "rateLimit_in": [
                10
            ],
            "rateLimit_not_in": [
                10
            ],
            "performanceFeeBps": [
                10
            ],
            "performanceFeeBps_not": [
                10
            ],
            "performanceFeeBps_gt": [
                10
            ],
            "performanceFeeBps_lt": [
                10
            ],
            "performanceFeeBps_gte": [
                10
            ],
            "performanceFeeBps_lte": [
                10
            ],
            "performanceFeeBps_in": [
                10
            ],
            "performanceFeeBps_not_in": [
                10
            ],
            "latestReport": [
                37
            ],
            "latestReport_not": [
                37
            ],
            "latestReport_gt": [
                37
            ],
            "latestReport_lt": [
                37
            ],
            "latestReport_gte": [
                37
            ],
            "latestReport_lte": [
                37
            ],
            "latestReport_in": [
                37
            ],
            "latestReport_not_in": [
                37
            ],
            "latestReport_contains": [
                37
            ],
            "latestReport_not_contains": [
                37
            ],
            "latestReport_starts_with": [
                37
            ],
            "latestReport_not_starts_with": [
                37
            ],
            "latestReport_ends_with": [
                37
            ],
            "latestReport_not_ends_with": [
                37
            ],
            "__typename": [
                37
            ]
        },
        "Strategy_orderBy": {},
        "String": {},
        "Subscription": {
            "transaction": [
                45,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "transactions": [
                45,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        47
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        46
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "token": [
                39,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "tokens": [
                39,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        44
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        43
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "tokenFee": [
                40,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "tokenFees": [
                40,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        42
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        41
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "registry": [
                24,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "registries": [
                24,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        26
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        25
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "vault": [
                51,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "vaults": [
                51,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        60
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        59
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "vaultUpdate": [
                56,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "vaultUpdates": [
                56,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        58
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        57
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "account": [
                0,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "accounts": [
                0,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        8
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        7
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "deposit": [
                14,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "deposits": [
                14,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        16
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        15
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "withdrawal": [
                61,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "withdrawals": [
                61,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        63
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        62
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "transfer": [
                48,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "transfers": [
                48,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        50
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        49
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "accountVaultPosition": [
                1,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "accountVaultPositions": [
                1,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        6
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        5
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "accountVaultPositionUpdate": [
                2,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "accountVaultPositionUpdates": [
                2,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        4
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        3
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "strategy": [
                27,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "strategies": [
                27,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        36
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        35
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "strategyReport": [
                28,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "strategyReports": [
                28,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        33
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        32
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "strategyReportResult": [
                29,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "strategyReportResults": [
                29,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        31
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        30
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "harvest": [
                17,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "harvests": [
                17,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        19
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        18
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "vaultDayData": [
                53,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "vaultDayDatas": [
                53,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        55
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        54
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "yearn": [
                64,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "yearns": [
                64,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        66
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        65
                    ],
                    "block": [
                        11
                    ]
                }
            ],
            "_meta": [
                68,
                {
                    "block": [
                        11
                    ]
                }
            ],
            "__typename": [
                37
            ]
        },
        "Token": {
            "id": [
                20
            ],
            "decimals": [
                21
            ],
            "name": [
                37
            ],
            "symbol": [
                37
            ],
            "__typename": [
                37
            ]
        },
        "TokenFee": {
            "id": [
                20
            ],
            "treasuryFees": [
                10
            ],
            "strategyFees": [
                10
            ],
            "totalFees": [
                10
            ],
            "token": [
                39
            ],
            "__typename": [
                37
            ]
        },
        "TokenFee_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "treasuryFees": [
                10
            ],
            "treasuryFees_not": [
                10
            ],
            "treasuryFees_gt": [
                10
            ],
            "treasuryFees_lt": [
                10
            ],
            "treasuryFees_gte": [
                10
            ],
            "treasuryFees_lte": [
                10
            ],
            "treasuryFees_in": [
                10
            ],
            "treasuryFees_not_in": [
                10
            ],
            "strategyFees": [
                10
            ],
            "strategyFees_not": [
                10
            ],
            "strategyFees_gt": [
                10
            ],
            "strategyFees_lt": [
                10
            ],
            "strategyFees_gte": [
                10
            ],
            "strategyFees_lte": [
                10
            ],
            "strategyFees_in": [
                10
            ],
            "strategyFees_not_in": [
                10
            ],
            "totalFees": [
                10
            ],
            "totalFees_not": [
                10
            ],
            "totalFees_gt": [
                10
            ],
            "totalFees_lt": [
                10
            ],
            "totalFees_gte": [
                10
            ],
            "totalFees_lte": [
                10
            ],
            "totalFees_in": [
                10
            ],
            "totalFees_not_in": [
                10
            ],
            "token": [
                37
            ],
            "token_not": [
                37
            ],
            "token_gt": [
                37
            ],
            "token_lt": [
                37
            ],
            "token_gte": [
                37
            ],
            "token_lte": [
                37
            ],
            "token_in": [
                37
            ],
            "token_not_in": [
                37
            ],
            "token_contains": [
                37
            ],
            "token_not_contains": [
                37
            ],
            "token_starts_with": [
                37
            ],
            "token_not_starts_with": [
                37
            ],
            "token_ends_with": [
                37
            ],
            "token_not_ends_with": [
                37
            ],
            "__typename": [
                37
            ]
        },
        "TokenFee_orderBy": {},
        "Token_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "decimals": [
                21
            ],
            "decimals_not": [
                21
            ],
            "decimals_gt": [
                21
            ],
            "decimals_lt": [
                21
            ],
            "decimals_gte": [
                21
            ],
            "decimals_lte": [
                21
            ],
            "decimals_in": [
                21
            ],
            "decimals_not_in": [
                21
            ],
            "name": [
                37
            ],
            "name_not": [
                37
            ],
            "name_gt": [
                37
            ],
            "name_lt": [
                37
            ],
            "name_gte": [
                37
            ],
            "name_lte": [
                37
            ],
            "name_in": [
                37
            ],
            "name_not_in": [
                37
            ],
            "name_contains": [
                37
            ],
            "name_not_contains": [
                37
            ],
            "name_starts_with": [
                37
            ],
            "name_not_starts_with": [
                37
            ],
            "name_ends_with": [
                37
            ],
            "name_not_ends_with": [
                37
            ],
            "symbol": [
                37
            ],
            "symbol_not": [
                37
            ],
            "symbol_gt": [
                37
            ],
            "symbol_lt": [
                37
            ],
            "symbol_gte": [
                37
            ],
            "symbol_lte": [
                37
            ],
            "symbol_in": [
                37
            ],
            "symbol_not_in": [
                37
            ],
            "symbol_contains": [
                37
            ],
            "symbol_not_contains": [
                37
            ],
            "symbol_starts_with": [
                37
            ],
            "symbol_not_starts_with": [
                37
            ],
            "symbol_ends_with": [
                37
            ],
            "symbol_not_ends_with": [
                37
            ],
            "__typename": [
                37
            ]
        },
        "Token_orderBy": {},
        "Transaction": {
            "id": [
                20
            ],
            "logIndex": [
                10
            ],
            "event": [
                37
            ],
            "from": [
                13
            ],
            "gasPrice": [
                10
            ],
            "gasSent": [
                10
            ],
            "hash": [
                13
            ],
            "index": [
                10
            ],
            "to": [
                13
            ],
            "value": [
                10
            ],
            "timestamp": [
                10
            ],
            "gasLimit": [
                10
            ],
            "blockNumber": [
                10
            ],
            "__typename": [
                37
            ]
        },
        "Transaction_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "logIndex": [
                10
            ],
            "logIndex_not": [
                10
            ],
            "logIndex_gt": [
                10
            ],
            "logIndex_lt": [
                10
            ],
            "logIndex_gte": [
                10
            ],
            "logIndex_lte": [
                10
            ],
            "logIndex_in": [
                10
            ],
            "logIndex_not_in": [
                10
            ],
            "event": [
                37
            ],
            "event_not": [
                37
            ],
            "event_gt": [
                37
            ],
            "event_lt": [
                37
            ],
            "event_gte": [
                37
            ],
            "event_lte": [
                37
            ],
            "event_in": [
                37
            ],
            "event_not_in": [
                37
            ],
            "event_contains": [
                37
            ],
            "event_not_contains": [
                37
            ],
            "event_starts_with": [
                37
            ],
            "event_not_starts_with": [
                37
            ],
            "event_ends_with": [
                37
            ],
            "event_not_ends_with": [
                37
            ],
            "from": [
                13
            ],
            "from_not": [
                13
            ],
            "from_in": [
                13
            ],
            "from_not_in": [
                13
            ],
            "from_contains": [
                13
            ],
            "from_not_contains": [
                13
            ],
            "gasPrice": [
                10
            ],
            "gasPrice_not": [
                10
            ],
            "gasPrice_gt": [
                10
            ],
            "gasPrice_lt": [
                10
            ],
            "gasPrice_gte": [
                10
            ],
            "gasPrice_lte": [
                10
            ],
            "gasPrice_in": [
                10
            ],
            "gasPrice_not_in": [
                10
            ],
            "gasSent": [
                10
            ],
            "gasSent_not": [
                10
            ],
            "gasSent_gt": [
                10
            ],
            "gasSent_lt": [
                10
            ],
            "gasSent_gte": [
                10
            ],
            "gasSent_lte": [
                10
            ],
            "gasSent_in": [
                10
            ],
            "gasSent_not_in": [
                10
            ],
            "hash": [
                13
            ],
            "hash_not": [
                13
            ],
            "hash_in": [
                13
            ],
            "hash_not_in": [
                13
            ],
            "hash_contains": [
                13
            ],
            "hash_not_contains": [
                13
            ],
            "index": [
                10
            ],
            "index_not": [
                10
            ],
            "index_gt": [
                10
            ],
            "index_lt": [
                10
            ],
            "index_gte": [
                10
            ],
            "index_lte": [
                10
            ],
            "index_in": [
                10
            ],
            "index_not_in": [
                10
            ],
            "to": [
                13
            ],
            "to_not": [
                13
            ],
            "to_in": [
                13
            ],
            "to_not_in": [
                13
            ],
            "to_contains": [
                13
            ],
            "to_not_contains": [
                13
            ],
            "value": [
                10
            ],
            "value_not": [
                10
            ],
            "value_gt": [
                10
            ],
            "value_lt": [
                10
            ],
            "value_gte": [
                10
            ],
            "value_lte": [
                10
            ],
            "value_in": [
                10
            ],
            "value_not_in": [
                10
            ],
            "timestamp": [
                10
            ],
            "timestamp_not": [
                10
            ],
            "timestamp_gt": [
                10
            ],
            "timestamp_lt": [
                10
            ],
            "timestamp_gte": [
                10
            ],
            "timestamp_lte": [
                10
            ],
            "timestamp_in": [
                10
            ],
            "timestamp_not_in": [
                10
            ],
            "gasLimit": [
                10
            ],
            "gasLimit_not": [
                10
            ],
            "gasLimit_gt": [
                10
            ],
            "gasLimit_lt": [
                10
            ],
            "gasLimit_gte": [
                10
            ],
            "gasLimit_lte": [
                10
            ],
            "gasLimit_in": [
                10
            ],
            "gasLimit_not_in": [
                10
            ],
            "blockNumber": [
                10
            ],
            "blockNumber_not": [
                10
            ],
            "blockNumber_gt": [
                10
            ],
            "blockNumber_lt": [
                10
            ],
            "blockNumber_gte": [
                10
            ],
            "blockNumber_lte": [
                10
            ],
            "blockNumber_in": [
                10
            ],
            "blockNumber_not_in": [
                10
            ],
            "__typename": [
                37
            ]
        },
        "Transaction_orderBy": {},
        "Transfer": {
            "id": [
                20
            ],
            "vault": [
                51
            ],
            "from": [
                0
            ],
            "to": [
                0
            ],
            "shareToken": [
                39
            ],
            "shareAmount": [
                10
            ],
            "token": [
                39
            ],
            "tokenAmount": [
                10
            ],
            "tokenAmountUsdc": [
                10
            ],
            "timestamp": [
                10
            ],
            "blockNumber": [
                10
            ],
            "transaction": [
                45
            ],
            "isFeeToTreasury": [
                12
            ],
            "isFeeToStrategy": [
                12
            ],
            "__typename": [
                37
            ]
        },
        "Transfer_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "vault": [
                37
            ],
            "vault_not": [
                37
            ],
            "vault_gt": [
                37
            ],
            "vault_lt": [
                37
            ],
            "vault_gte": [
                37
            ],
            "vault_lte": [
                37
            ],
            "vault_in": [
                37
            ],
            "vault_not_in": [
                37
            ],
            "vault_contains": [
                37
            ],
            "vault_not_contains": [
                37
            ],
            "vault_starts_with": [
                37
            ],
            "vault_not_starts_with": [
                37
            ],
            "vault_ends_with": [
                37
            ],
            "vault_not_ends_with": [
                37
            ],
            "from": [
                37
            ],
            "from_not": [
                37
            ],
            "from_gt": [
                37
            ],
            "from_lt": [
                37
            ],
            "from_gte": [
                37
            ],
            "from_lte": [
                37
            ],
            "from_in": [
                37
            ],
            "from_not_in": [
                37
            ],
            "from_contains": [
                37
            ],
            "from_not_contains": [
                37
            ],
            "from_starts_with": [
                37
            ],
            "from_not_starts_with": [
                37
            ],
            "from_ends_with": [
                37
            ],
            "from_not_ends_with": [
                37
            ],
            "to": [
                37
            ],
            "to_not": [
                37
            ],
            "to_gt": [
                37
            ],
            "to_lt": [
                37
            ],
            "to_gte": [
                37
            ],
            "to_lte": [
                37
            ],
            "to_in": [
                37
            ],
            "to_not_in": [
                37
            ],
            "to_contains": [
                37
            ],
            "to_not_contains": [
                37
            ],
            "to_starts_with": [
                37
            ],
            "to_not_starts_with": [
                37
            ],
            "to_ends_with": [
                37
            ],
            "to_not_ends_with": [
                37
            ],
            "shareToken": [
                37
            ],
            "shareToken_not": [
                37
            ],
            "shareToken_gt": [
                37
            ],
            "shareToken_lt": [
                37
            ],
            "shareToken_gte": [
                37
            ],
            "shareToken_lte": [
                37
            ],
            "shareToken_in": [
                37
            ],
            "shareToken_not_in": [
                37
            ],
            "shareToken_contains": [
                37
            ],
            "shareToken_not_contains": [
                37
            ],
            "shareToken_starts_with": [
                37
            ],
            "shareToken_not_starts_with": [
                37
            ],
            "shareToken_ends_with": [
                37
            ],
            "shareToken_not_ends_with": [
                37
            ],
            "shareAmount": [
                10
            ],
            "shareAmount_not": [
                10
            ],
            "shareAmount_gt": [
                10
            ],
            "shareAmount_lt": [
                10
            ],
            "shareAmount_gte": [
                10
            ],
            "shareAmount_lte": [
                10
            ],
            "shareAmount_in": [
                10
            ],
            "shareAmount_not_in": [
                10
            ],
            "token": [
                37
            ],
            "token_not": [
                37
            ],
            "token_gt": [
                37
            ],
            "token_lt": [
                37
            ],
            "token_gte": [
                37
            ],
            "token_lte": [
                37
            ],
            "token_in": [
                37
            ],
            "token_not_in": [
                37
            ],
            "token_contains": [
                37
            ],
            "token_not_contains": [
                37
            ],
            "token_starts_with": [
                37
            ],
            "token_not_starts_with": [
                37
            ],
            "token_ends_with": [
                37
            ],
            "token_not_ends_with": [
                37
            ],
            "tokenAmount": [
                10
            ],
            "tokenAmount_not": [
                10
            ],
            "tokenAmount_gt": [
                10
            ],
            "tokenAmount_lt": [
                10
            ],
            "tokenAmount_gte": [
                10
            ],
            "tokenAmount_lte": [
                10
            ],
            "tokenAmount_in": [
                10
            ],
            "tokenAmount_not_in": [
                10
            ],
            "tokenAmountUsdc": [
                10
            ],
            "tokenAmountUsdc_not": [
                10
            ],
            "tokenAmountUsdc_gt": [
                10
            ],
            "tokenAmountUsdc_lt": [
                10
            ],
            "tokenAmountUsdc_gte": [
                10
            ],
            "tokenAmountUsdc_lte": [
                10
            ],
            "tokenAmountUsdc_in": [
                10
            ],
            "tokenAmountUsdc_not_in": [
                10
            ],
            "timestamp": [
                10
            ],
            "timestamp_not": [
                10
            ],
            "timestamp_gt": [
                10
            ],
            "timestamp_lt": [
                10
            ],
            "timestamp_gte": [
                10
            ],
            "timestamp_lte": [
                10
            ],
            "timestamp_in": [
                10
            ],
            "timestamp_not_in": [
                10
            ],
            "blockNumber": [
                10
            ],
            "blockNumber_not": [
                10
            ],
            "blockNumber_gt": [
                10
            ],
            "blockNumber_lt": [
                10
            ],
            "blockNumber_gte": [
                10
            ],
            "blockNumber_lte": [
                10
            ],
            "blockNumber_in": [
                10
            ],
            "blockNumber_not_in": [
                10
            ],
            "transaction": [
                37
            ],
            "transaction_not": [
                37
            ],
            "transaction_gt": [
                37
            ],
            "transaction_lt": [
                37
            ],
            "transaction_gte": [
                37
            ],
            "transaction_lte": [
                37
            ],
            "transaction_in": [
                37
            ],
            "transaction_not_in": [
                37
            ],
            "transaction_contains": [
                37
            ],
            "transaction_not_contains": [
                37
            ],
            "transaction_starts_with": [
                37
            ],
            "transaction_not_starts_with": [
                37
            ],
            "transaction_ends_with": [
                37
            ],
            "transaction_not_ends_with": [
                37
            ],
            "isFeeToTreasury": [
                12
            ],
            "isFeeToTreasury_not": [
                12
            ],
            "isFeeToTreasury_in": [
                12
            ],
            "isFeeToTreasury_not_in": [
                12
            ],
            "isFeeToStrategy": [
                12
            ],
            "isFeeToStrategy_not": [
                12
            ],
            "isFeeToStrategy_in": [
                12
            ],
            "isFeeToStrategy_not_in": [
                12
            ],
            "__typename": [
                37
            ]
        },
        "Transfer_orderBy": {},
        "Vault": {
            "id": [
                20
            ],
            "transaction": [
                45
            ],
            "registry": [
                24
            ],
            "token": [
                39
            ],
            "shareToken": [
                39
            ],
            "classification": [
                52
            ],
            "latestUpdate": [
                56
            ],
            "vaultDayData": [
                53,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        55
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        54
                    ]
                }
            ],
            "historicalUpdates": [
                56,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        58
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "strategies": [
                27,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        36
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "deposits": [
                14,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        16
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        15
                    ]
                }
            ],
            "withdrawals": [
                61,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        63
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "transfers": [
                48,
                {
                    "skip": [
                        21
                    ],
                    "first": [
                        21
                    ],
                    "orderBy": [
                        50
                    ],
                    "orderDirection": [
                        22
                    ],
                    "where": [
                        49
                    ]
                }
            ],
            "tags": [
                37
            ],
            "balanceTokens": [
                10
            ],
            "balanceTokensIdle": [
                10
            ],
            "balanceTokensInvested": [
                10
            ],
            "tokensDepositLimit": [
                10
            ],
            "sharesSupply": [
                10
            ],
            "managementFeeBps": [
                21
            ],
            "performanceFeeBps": [
                21
            ],
            "rewards": [
                13
            ],
            "isTemplateListening": [
                12
            ],
            "activation": [
                10
            ],
            "apiVersion": [
                37
            ],
            "__typename": [
                37
            ]
        },
        "VaultClassification": {},
        "VaultDayData": {
            "id": [
                20
            ],
            "timestamp": [
                10
            ],
            "vault": [
                51
            ],
            "pricePerShare": [
                10
            ],
            "deposited": [
                10
            ],
            "withdrawn": [
                10
            ],
            "totalReturnsGenerated": [
                10
            ],
            "totalReturnsGeneratedUSDC": [
                10
            ],
            "dayReturnsGenerated": [
                10
            ],
            "dayReturnsGeneratedUSDC": [
                10
            ],
            "tokenPriceUSDC": [
                10
            ],
            "__typename": [
                37
            ]
        },
        "VaultDayData_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "timestamp": [
                10
            ],
            "timestamp_not": [
                10
            ],
            "timestamp_gt": [
                10
            ],
            "timestamp_lt": [
                10
            ],
            "timestamp_gte": [
                10
            ],
            "timestamp_lte": [
                10
            ],
            "timestamp_in": [
                10
            ],
            "timestamp_not_in": [
                10
            ],
            "vault": [
                37
            ],
            "vault_not": [
                37
            ],
            "vault_gt": [
                37
            ],
            "vault_lt": [
                37
            ],
            "vault_gte": [
                37
            ],
            "vault_lte": [
                37
            ],
            "vault_in": [
                37
            ],
            "vault_not_in": [
                37
            ],
            "vault_contains": [
                37
            ],
            "vault_not_contains": [
                37
            ],
            "vault_starts_with": [
                37
            ],
            "vault_not_starts_with": [
                37
            ],
            "vault_ends_with": [
                37
            ],
            "vault_not_ends_with": [
                37
            ],
            "pricePerShare": [
                10
            ],
            "pricePerShare_not": [
                10
            ],
            "pricePerShare_gt": [
                10
            ],
            "pricePerShare_lt": [
                10
            ],
            "pricePerShare_gte": [
                10
            ],
            "pricePerShare_lte": [
                10
            ],
            "pricePerShare_in": [
                10
            ],
            "pricePerShare_not_in": [
                10
            ],
            "deposited": [
                10
            ],
            "deposited_not": [
                10
            ],
            "deposited_gt": [
                10
            ],
            "deposited_lt": [
                10
            ],
            "deposited_gte": [
                10
            ],
            "deposited_lte": [
                10
            ],
            "deposited_in": [
                10
            ],
            "deposited_not_in": [
                10
            ],
            "withdrawn": [
                10
            ],
            "withdrawn_not": [
                10
            ],
            "withdrawn_gt": [
                10
            ],
            "withdrawn_lt": [
                10
            ],
            "withdrawn_gte": [
                10
            ],
            "withdrawn_lte": [
                10
            ],
            "withdrawn_in": [
                10
            ],
            "withdrawn_not_in": [
                10
            ],
            "totalReturnsGenerated": [
                10
            ],
            "totalReturnsGenerated_not": [
                10
            ],
            "totalReturnsGenerated_gt": [
                10
            ],
            "totalReturnsGenerated_lt": [
                10
            ],
            "totalReturnsGenerated_gte": [
                10
            ],
            "totalReturnsGenerated_lte": [
                10
            ],
            "totalReturnsGenerated_in": [
                10
            ],
            "totalReturnsGenerated_not_in": [
                10
            ],
            "totalReturnsGeneratedUSDC": [
                10
            ],
            "totalReturnsGeneratedUSDC_not": [
                10
            ],
            "totalReturnsGeneratedUSDC_gt": [
                10
            ],
            "totalReturnsGeneratedUSDC_lt": [
                10
            ],
            "totalReturnsGeneratedUSDC_gte": [
                10
            ],
            "totalReturnsGeneratedUSDC_lte": [
                10
            ],
            "totalReturnsGeneratedUSDC_in": [
                10
            ],
            "totalReturnsGeneratedUSDC_not_in": [
                10
            ],
            "dayReturnsGenerated": [
                10
            ],
            "dayReturnsGenerated_not": [
                10
            ],
            "dayReturnsGenerated_gt": [
                10
            ],
            "dayReturnsGenerated_lt": [
                10
            ],
            "dayReturnsGenerated_gte": [
                10
            ],
            "dayReturnsGenerated_lte": [
                10
            ],
            "dayReturnsGenerated_in": [
                10
            ],
            "dayReturnsGenerated_not_in": [
                10
            ],
            "dayReturnsGeneratedUSDC": [
                10
            ],
            "dayReturnsGeneratedUSDC_not": [
                10
            ],
            "dayReturnsGeneratedUSDC_gt": [
                10
            ],
            "dayReturnsGeneratedUSDC_lt": [
                10
            ],
            "dayReturnsGeneratedUSDC_gte": [
                10
            ],
            "dayReturnsGeneratedUSDC_lte": [
                10
            ],
            "dayReturnsGeneratedUSDC_in": [
                10
            ],
            "dayReturnsGeneratedUSDC_not_in": [
                10
            ],
            "tokenPriceUSDC": [
                10
            ],
            "tokenPriceUSDC_not": [
                10
            ],
            "tokenPriceUSDC_gt": [
                10
            ],
            "tokenPriceUSDC_lt": [
                10
            ],
            "tokenPriceUSDC_gte": [
                10
            ],
            "tokenPriceUSDC_lte": [
                10
            ],
            "tokenPriceUSDC_in": [
                10
            ],
            "tokenPriceUSDC_not_in": [
                10
            ],
            "__typename": [
                37
            ]
        },
        "VaultDayData_orderBy": {},
        "VaultUpdate": {
            "id": [
                20
            ],
            "timestamp": [
                10
            ],
            "blockNumber": [
                10
            ],
            "transaction": [
                45
            ],
            "vault": [
                51
            ],
            "tokensDeposited": [
                10
            ],
            "tokensWithdrawn": [
                10
            ],
            "sharesMinted": [
                10
            ],
            "sharesBurnt": [
                10
            ],
            "balancePosition": [
                10
            ],
            "pricePerShare": [
                10
            ],
            "returnsGenerated": [
                10
            ],
            "totalFees": [
                10
            ],
            "managementFees": [
                10
            ],
            "performanceFees": [
                10
            ],
            "rewards": [
                13
            ],
            "__typename": [
                37
            ]
        },
        "VaultUpdate_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "timestamp": [
                10
            ],
            "timestamp_not": [
                10
            ],
            "timestamp_gt": [
                10
            ],
            "timestamp_lt": [
                10
            ],
            "timestamp_gte": [
                10
            ],
            "timestamp_lte": [
                10
            ],
            "timestamp_in": [
                10
            ],
            "timestamp_not_in": [
                10
            ],
            "blockNumber": [
                10
            ],
            "blockNumber_not": [
                10
            ],
            "blockNumber_gt": [
                10
            ],
            "blockNumber_lt": [
                10
            ],
            "blockNumber_gte": [
                10
            ],
            "blockNumber_lte": [
                10
            ],
            "blockNumber_in": [
                10
            ],
            "blockNumber_not_in": [
                10
            ],
            "transaction": [
                37
            ],
            "transaction_not": [
                37
            ],
            "transaction_gt": [
                37
            ],
            "transaction_lt": [
                37
            ],
            "transaction_gte": [
                37
            ],
            "transaction_lte": [
                37
            ],
            "transaction_in": [
                37
            ],
            "transaction_not_in": [
                37
            ],
            "transaction_contains": [
                37
            ],
            "transaction_not_contains": [
                37
            ],
            "transaction_starts_with": [
                37
            ],
            "transaction_not_starts_with": [
                37
            ],
            "transaction_ends_with": [
                37
            ],
            "transaction_not_ends_with": [
                37
            ],
            "vault": [
                37
            ],
            "vault_not": [
                37
            ],
            "vault_gt": [
                37
            ],
            "vault_lt": [
                37
            ],
            "vault_gte": [
                37
            ],
            "vault_lte": [
                37
            ],
            "vault_in": [
                37
            ],
            "vault_not_in": [
                37
            ],
            "vault_contains": [
                37
            ],
            "vault_not_contains": [
                37
            ],
            "vault_starts_with": [
                37
            ],
            "vault_not_starts_with": [
                37
            ],
            "vault_ends_with": [
                37
            ],
            "vault_not_ends_with": [
                37
            ],
            "tokensDeposited": [
                10
            ],
            "tokensDeposited_not": [
                10
            ],
            "tokensDeposited_gt": [
                10
            ],
            "tokensDeposited_lt": [
                10
            ],
            "tokensDeposited_gte": [
                10
            ],
            "tokensDeposited_lte": [
                10
            ],
            "tokensDeposited_in": [
                10
            ],
            "tokensDeposited_not_in": [
                10
            ],
            "tokensWithdrawn": [
                10
            ],
            "tokensWithdrawn_not": [
                10
            ],
            "tokensWithdrawn_gt": [
                10
            ],
            "tokensWithdrawn_lt": [
                10
            ],
            "tokensWithdrawn_gte": [
                10
            ],
            "tokensWithdrawn_lte": [
                10
            ],
            "tokensWithdrawn_in": [
                10
            ],
            "tokensWithdrawn_not_in": [
                10
            ],
            "sharesMinted": [
                10
            ],
            "sharesMinted_not": [
                10
            ],
            "sharesMinted_gt": [
                10
            ],
            "sharesMinted_lt": [
                10
            ],
            "sharesMinted_gte": [
                10
            ],
            "sharesMinted_lte": [
                10
            ],
            "sharesMinted_in": [
                10
            ],
            "sharesMinted_not_in": [
                10
            ],
            "sharesBurnt": [
                10
            ],
            "sharesBurnt_not": [
                10
            ],
            "sharesBurnt_gt": [
                10
            ],
            "sharesBurnt_lt": [
                10
            ],
            "sharesBurnt_gte": [
                10
            ],
            "sharesBurnt_lte": [
                10
            ],
            "sharesBurnt_in": [
                10
            ],
            "sharesBurnt_not_in": [
                10
            ],
            "balancePosition": [
                10
            ],
            "balancePosition_not": [
                10
            ],
            "balancePosition_gt": [
                10
            ],
            "balancePosition_lt": [
                10
            ],
            "balancePosition_gte": [
                10
            ],
            "balancePosition_lte": [
                10
            ],
            "balancePosition_in": [
                10
            ],
            "balancePosition_not_in": [
                10
            ],
            "pricePerShare": [
                10
            ],
            "pricePerShare_not": [
                10
            ],
            "pricePerShare_gt": [
                10
            ],
            "pricePerShare_lt": [
                10
            ],
            "pricePerShare_gte": [
                10
            ],
            "pricePerShare_lte": [
                10
            ],
            "pricePerShare_in": [
                10
            ],
            "pricePerShare_not_in": [
                10
            ],
            "returnsGenerated": [
                10
            ],
            "returnsGenerated_not": [
                10
            ],
            "returnsGenerated_gt": [
                10
            ],
            "returnsGenerated_lt": [
                10
            ],
            "returnsGenerated_gte": [
                10
            ],
            "returnsGenerated_lte": [
                10
            ],
            "returnsGenerated_in": [
                10
            ],
            "returnsGenerated_not_in": [
                10
            ],
            "totalFees": [
                10
            ],
            "totalFees_not": [
                10
            ],
            "totalFees_gt": [
                10
            ],
            "totalFees_lt": [
                10
            ],
            "totalFees_gte": [
                10
            ],
            "totalFees_lte": [
                10
            ],
            "totalFees_in": [
                10
            ],
            "totalFees_not_in": [
                10
            ],
            "managementFees": [
                10
            ],
            "managementFees_not": [
                10
            ],
            "managementFees_gt": [
                10
            ],
            "managementFees_lt": [
                10
            ],
            "managementFees_gte": [
                10
            ],
            "managementFees_lte": [
                10
            ],
            "managementFees_in": [
                10
            ],
            "managementFees_not_in": [
                10
            ],
            "performanceFees": [
                10
            ],
            "performanceFees_not": [
                10
            ],
            "performanceFees_gt": [
                10
            ],
            "performanceFees_lt": [
                10
            ],
            "performanceFees_gte": [
                10
            ],
            "performanceFees_lte": [
                10
            ],
            "performanceFees_in": [
                10
            ],
            "performanceFees_not_in": [
                10
            ],
            "rewards": [
                13
            ],
            "rewards_not": [
                13
            ],
            "rewards_in": [
                13
            ],
            "rewards_not_in": [
                13
            ],
            "rewards_contains": [
                13
            ],
            "rewards_not_contains": [
                13
            ],
            "__typename": [
                37
            ]
        },
        "VaultUpdate_orderBy": {},
        "Vault_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "transaction": [
                37
            ],
            "transaction_not": [
                37
            ],
            "transaction_gt": [
                37
            ],
            "transaction_lt": [
                37
            ],
            "transaction_gte": [
                37
            ],
            "transaction_lte": [
                37
            ],
            "transaction_in": [
                37
            ],
            "transaction_not_in": [
                37
            ],
            "transaction_contains": [
                37
            ],
            "transaction_not_contains": [
                37
            ],
            "transaction_starts_with": [
                37
            ],
            "transaction_not_starts_with": [
                37
            ],
            "transaction_ends_with": [
                37
            ],
            "transaction_not_ends_with": [
                37
            ],
            "registry": [
                37
            ],
            "registry_not": [
                37
            ],
            "registry_gt": [
                37
            ],
            "registry_lt": [
                37
            ],
            "registry_gte": [
                37
            ],
            "registry_lte": [
                37
            ],
            "registry_in": [
                37
            ],
            "registry_not_in": [
                37
            ],
            "registry_contains": [
                37
            ],
            "registry_not_contains": [
                37
            ],
            "registry_starts_with": [
                37
            ],
            "registry_not_starts_with": [
                37
            ],
            "registry_ends_with": [
                37
            ],
            "registry_not_ends_with": [
                37
            ],
            "token": [
                37
            ],
            "token_not": [
                37
            ],
            "token_gt": [
                37
            ],
            "token_lt": [
                37
            ],
            "token_gte": [
                37
            ],
            "token_lte": [
                37
            ],
            "token_in": [
                37
            ],
            "token_not_in": [
                37
            ],
            "token_contains": [
                37
            ],
            "token_not_contains": [
                37
            ],
            "token_starts_with": [
                37
            ],
            "token_not_starts_with": [
                37
            ],
            "token_ends_with": [
                37
            ],
            "token_not_ends_with": [
                37
            ],
            "shareToken": [
                37
            ],
            "shareToken_not": [
                37
            ],
            "shareToken_gt": [
                37
            ],
            "shareToken_lt": [
                37
            ],
            "shareToken_gte": [
                37
            ],
            "shareToken_lte": [
                37
            ],
            "shareToken_in": [
                37
            ],
            "shareToken_not_in": [
                37
            ],
            "shareToken_contains": [
                37
            ],
            "shareToken_not_contains": [
                37
            ],
            "shareToken_starts_with": [
                37
            ],
            "shareToken_not_starts_with": [
                37
            ],
            "shareToken_ends_with": [
                37
            ],
            "shareToken_not_ends_with": [
                37
            ],
            "classification": [
                52
            ],
            "classification_not": [
                52
            ],
            "latestUpdate": [
                37
            ],
            "latestUpdate_not": [
                37
            ],
            "latestUpdate_gt": [
                37
            ],
            "latestUpdate_lt": [
                37
            ],
            "latestUpdate_gte": [
                37
            ],
            "latestUpdate_lte": [
                37
            ],
            "latestUpdate_in": [
                37
            ],
            "latestUpdate_not_in": [
                37
            ],
            "latestUpdate_contains": [
                37
            ],
            "latestUpdate_not_contains": [
                37
            ],
            "latestUpdate_starts_with": [
                37
            ],
            "latestUpdate_not_starts_with": [
                37
            ],
            "latestUpdate_ends_with": [
                37
            ],
            "latestUpdate_not_ends_with": [
                37
            ],
            "tags": [
                37
            ],
            "tags_not": [
                37
            ],
            "tags_contains": [
                37
            ],
            "tags_not_contains": [
                37
            ],
            "balanceTokens": [
                10
            ],
            "balanceTokens_not": [
                10
            ],
            "balanceTokens_gt": [
                10
            ],
            "balanceTokens_lt": [
                10
            ],
            "balanceTokens_gte": [
                10
            ],
            "balanceTokens_lte": [
                10
            ],
            "balanceTokens_in": [
                10
            ],
            "balanceTokens_not_in": [
                10
            ],
            "balanceTokensIdle": [
                10
            ],
            "balanceTokensIdle_not": [
                10
            ],
            "balanceTokensIdle_gt": [
                10
            ],
            "balanceTokensIdle_lt": [
                10
            ],
            "balanceTokensIdle_gte": [
                10
            ],
            "balanceTokensIdle_lte": [
                10
            ],
            "balanceTokensIdle_in": [
                10
            ],
            "balanceTokensIdle_not_in": [
                10
            ],
            "balanceTokensInvested": [
                10
            ],
            "balanceTokensInvested_not": [
                10
            ],
            "balanceTokensInvested_gt": [
                10
            ],
            "balanceTokensInvested_lt": [
                10
            ],
            "balanceTokensInvested_gte": [
                10
            ],
            "balanceTokensInvested_lte": [
                10
            ],
            "balanceTokensInvested_in": [
                10
            ],
            "balanceTokensInvested_not_in": [
                10
            ],
            "tokensDepositLimit": [
                10
            ],
            "tokensDepositLimit_not": [
                10
            ],
            "tokensDepositLimit_gt": [
                10
            ],
            "tokensDepositLimit_lt": [
                10
            ],
            "tokensDepositLimit_gte": [
                10
            ],
            "tokensDepositLimit_lte": [
                10
            ],
            "tokensDepositLimit_in": [
                10
            ],
            "tokensDepositLimit_not_in": [
                10
            ],
            "sharesSupply": [
                10
            ],
            "sharesSupply_not": [
                10
            ],
            "sharesSupply_gt": [
                10
            ],
            "sharesSupply_lt": [
                10
            ],
            "sharesSupply_gte": [
                10
            ],
            "sharesSupply_lte": [
                10
            ],
            "sharesSupply_in": [
                10
            ],
            "sharesSupply_not_in": [
                10
            ],
            "managementFeeBps": [
                21
            ],
            "managementFeeBps_not": [
                21
            ],
            "managementFeeBps_gt": [
                21
            ],
            "managementFeeBps_lt": [
                21
            ],
            "managementFeeBps_gte": [
                21
            ],
            "managementFeeBps_lte": [
                21
            ],
            "managementFeeBps_in": [
                21
            ],
            "managementFeeBps_not_in": [
                21
            ],
            "performanceFeeBps": [
                21
            ],
            "performanceFeeBps_not": [
                21
            ],
            "performanceFeeBps_gt": [
                21
            ],
            "performanceFeeBps_lt": [
                21
            ],
            "performanceFeeBps_gte": [
                21
            ],
            "performanceFeeBps_lte": [
                21
            ],
            "performanceFeeBps_in": [
                21
            ],
            "performanceFeeBps_not_in": [
                21
            ],
            "rewards": [
                13
            ],
            "rewards_not": [
                13
            ],
            "rewards_in": [
                13
            ],
            "rewards_not_in": [
                13
            ],
            "rewards_contains": [
                13
            ],
            "rewards_not_contains": [
                13
            ],
            "isTemplateListening": [
                12
            ],
            "isTemplateListening_not": [
                12
            ],
            "isTemplateListening_in": [
                12
            ],
            "isTemplateListening_not_in": [
                12
            ],
            "activation": [
                10
            ],
            "activation_not": [
                10
            ],
            "activation_gt": [
                10
            ],
            "activation_lt": [
                10
            ],
            "activation_gte": [
                10
            ],
            "activation_lte": [
                10
            ],
            "activation_in": [
                10
            ],
            "activation_not_in": [
                10
            ],
            "apiVersion": [
                37
            ],
            "apiVersion_not": [
                37
            ],
            "apiVersion_gt": [
                37
            ],
            "apiVersion_lt": [
                37
            ],
            "apiVersion_gte": [
                37
            ],
            "apiVersion_lte": [
                37
            ],
            "apiVersion_in": [
                37
            ],
            "apiVersion_not_in": [
                37
            ],
            "apiVersion_contains": [
                37
            ],
            "apiVersion_not_contains": [
                37
            ],
            "apiVersion_starts_with": [
                37
            ],
            "apiVersion_not_starts_with": [
                37
            ],
            "apiVersion_ends_with": [
                37
            ],
            "apiVersion_not_ends_with": [
                37
            ],
            "__typename": [
                37
            ]
        },
        "Vault_orderBy": {},
        "Withdrawal": {
            "id": [
                20
            ],
            "timestamp": [
                10
            ],
            "blockNumber": [
                10
            ],
            "account": [
                0
            ],
            "vault": [
                51
            ],
            "tokenAmount": [
                10
            ],
            "sharesBurnt": [
                10
            ],
            "transaction": [
                45
            ],
            "vaultUpdate": [
                56
            ],
            "__typename": [
                37
            ]
        },
        "Withdrawal_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "timestamp": [
                10
            ],
            "timestamp_not": [
                10
            ],
            "timestamp_gt": [
                10
            ],
            "timestamp_lt": [
                10
            ],
            "timestamp_gte": [
                10
            ],
            "timestamp_lte": [
                10
            ],
            "timestamp_in": [
                10
            ],
            "timestamp_not_in": [
                10
            ],
            "blockNumber": [
                10
            ],
            "blockNumber_not": [
                10
            ],
            "blockNumber_gt": [
                10
            ],
            "blockNumber_lt": [
                10
            ],
            "blockNumber_gte": [
                10
            ],
            "blockNumber_lte": [
                10
            ],
            "blockNumber_in": [
                10
            ],
            "blockNumber_not_in": [
                10
            ],
            "account": [
                37
            ],
            "account_not": [
                37
            ],
            "account_gt": [
                37
            ],
            "account_lt": [
                37
            ],
            "account_gte": [
                37
            ],
            "account_lte": [
                37
            ],
            "account_in": [
                37
            ],
            "account_not_in": [
                37
            ],
            "account_contains": [
                37
            ],
            "account_not_contains": [
                37
            ],
            "account_starts_with": [
                37
            ],
            "account_not_starts_with": [
                37
            ],
            "account_ends_with": [
                37
            ],
            "account_not_ends_with": [
                37
            ],
            "vault": [
                37
            ],
            "vault_not": [
                37
            ],
            "vault_gt": [
                37
            ],
            "vault_lt": [
                37
            ],
            "vault_gte": [
                37
            ],
            "vault_lte": [
                37
            ],
            "vault_in": [
                37
            ],
            "vault_not_in": [
                37
            ],
            "vault_contains": [
                37
            ],
            "vault_not_contains": [
                37
            ],
            "vault_starts_with": [
                37
            ],
            "vault_not_starts_with": [
                37
            ],
            "vault_ends_with": [
                37
            ],
            "vault_not_ends_with": [
                37
            ],
            "tokenAmount": [
                10
            ],
            "tokenAmount_not": [
                10
            ],
            "tokenAmount_gt": [
                10
            ],
            "tokenAmount_lt": [
                10
            ],
            "tokenAmount_gte": [
                10
            ],
            "tokenAmount_lte": [
                10
            ],
            "tokenAmount_in": [
                10
            ],
            "tokenAmount_not_in": [
                10
            ],
            "sharesBurnt": [
                10
            ],
            "sharesBurnt_not": [
                10
            ],
            "sharesBurnt_gt": [
                10
            ],
            "sharesBurnt_lt": [
                10
            ],
            "sharesBurnt_gte": [
                10
            ],
            "sharesBurnt_lte": [
                10
            ],
            "sharesBurnt_in": [
                10
            ],
            "sharesBurnt_not_in": [
                10
            ],
            "transaction": [
                37
            ],
            "transaction_not": [
                37
            ],
            "transaction_gt": [
                37
            ],
            "transaction_lt": [
                37
            ],
            "transaction_gte": [
                37
            ],
            "transaction_lte": [
                37
            ],
            "transaction_in": [
                37
            ],
            "transaction_not_in": [
                37
            ],
            "transaction_contains": [
                37
            ],
            "transaction_not_contains": [
                37
            ],
            "transaction_starts_with": [
                37
            ],
            "transaction_not_starts_with": [
                37
            ],
            "transaction_ends_with": [
                37
            ],
            "transaction_not_ends_with": [
                37
            ],
            "vaultUpdate": [
                37
            ],
            "vaultUpdate_not": [
                37
            ],
            "vaultUpdate_gt": [
                37
            ],
            "vaultUpdate_lt": [
                37
            ],
            "vaultUpdate_gte": [
                37
            ],
            "vaultUpdate_lte": [
                37
            ],
            "vaultUpdate_in": [
                37
            ],
            "vaultUpdate_not_in": [
                37
            ],
            "vaultUpdate_contains": [
                37
            ],
            "vaultUpdate_not_contains": [
                37
            ],
            "vaultUpdate_starts_with": [
                37
            ],
            "vaultUpdate_not_starts_with": [
                37
            ],
            "vaultUpdate_ends_with": [
                37
            ],
            "vaultUpdate_not_ends_with": [
                37
            ],
            "__typename": [
                37
            ]
        },
        "Withdrawal_orderBy": {},
        "Yearn": {
            "id": [
                20
            ],
            "treasuryFeesUsdc": [
                10
            ],
            "strategyFeesUsdc": [
                10
            ],
            "totalFeesUsdc": [
                10
            ],
            "__typename": [
                37
            ]
        },
        "Yearn_filter": {
            "id": [
                20
            ],
            "id_not": [
                20
            ],
            "id_gt": [
                20
            ],
            "id_lt": [
                20
            ],
            "id_gte": [
                20
            ],
            "id_lte": [
                20
            ],
            "id_in": [
                20
            ],
            "id_not_in": [
                20
            ],
            "treasuryFeesUsdc": [
                10
            ],
            "treasuryFeesUsdc_not": [
                10
            ],
            "treasuryFeesUsdc_gt": [
                10
            ],
            "treasuryFeesUsdc_lt": [
                10
            ],
            "treasuryFeesUsdc_gte": [
                10
            ],
            "treasuryFeesUsdc_lte": [
                10
            ],
            "treasuryFeesUsdc_in": [
                10
            ],
            "treasuryFeesUsdc_not_in": [
                10
            ],
            "strategyFeesUsdc": [
                10
            ],
            "strategyFeesUsdc_not": [
                10
            ],
            "strategyFeesUsdc_gt": [
                10
            ],
            "strategyFeesUsdc_lt": [
                10
            ],
            "strategyFeesUsdc_gte": [
                10
            ],
            "strategyFeesUsdc_lte": [
                10
            ],
            "strategyFeesUsdc_in": [
                10
            ],
            "strategyFeesUsdc_not_in": [
                10
            ],
            "totalFeesUsdc": [
                10
            ],
            "totalFeesUsdc_not": [
                10
            ],
            "totalFeesUsdc_gt": [
                10
            ],
            "totalFeesUsdc_lt": [
                10
            ],
            "totalFeesUsdc_gte": [
                10
            ],
            "totalFeesUsdc_lte": [
                10
            ],
            "totalFeesUsdc_in": [
                10
            ],
            "totalFeesUsdc_not_in": [
                10
            ],
            "__typename": [
                37
            ]
        },
        "Yearn_orderBy": {},
        "_Block_": {
            "hash": [
                13
            ],
            "number": [
                21
            ],
            "__typename": [
                37
            ]
        },
        "_Meta_": {
            "block": [
                67
            ],
            "deployment": [
                37
            ],
            "hasIndexingErrors": [
                12
            ],
            "__typename": [
                37
            ]
        },
        "_SubgraphErrorPolicy_": {}
    }
}