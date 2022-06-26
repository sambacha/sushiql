module.exports = {
    "scalars": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        54,
        55,
        59,
        67
    ],
    "types": {
        "Date": {},
        "Time": {},
        "DateTime": {},
        "Timestamp": {},
        "UtcOffset": {},
        "Duration": {},
        "ISO8601Duration": {},
        "LocalDate": {},
        "LocalTime": {},
        "LocalEndTime": {},
        "EmailAddress": {},
        "NegativeFloat": {},
        "NegativeInt": {},
        "NonEmptyString": {},
        "NonNegativeFloat": {},
        "NonNegativeInt": {},
        "NonPositiveFloat": {},
        "NonPositiveInt": {},
        "PhoneNumber": {},
        "PositiveFloat": {},
        "PositiveInt": {},
        "PostalCode": {},
        "UnsignedFloat": {},
        "UnsignedInt": {},
        "URL": {},
        "BigInt": {},
        "Long": {},
        "Byte": {},
        "UUID": {},
        "GUID": {},
        "Hexadecimal": {},
        "HexColorCode": {},
        "HSL": {},
        "HSLA": {},
        "IPv4": {},
        "IPv6": {},
        "ISBN": {},
        "JWT": {},
        "Latitude": {},
        "Longitude": {},
        "MAC": {},
        "Port": {},
        "RGB": {},
        "RGBA": {},
        "SafeInt": {},
        "USCurrency": {},
        "Currency": {},
        "JSON": {},
        "JSONObject": {},
        "IBAN": {},
        "ObjectID": {},
        "Void": {},
        "DID": {},
        "Alert": {
            "alertId": [
                54
            ],
            "addresses": [
                54
            ],
            "contracts": [
                71
            ],
            "createdAt": [
                54
            ],
            "description": [
                54
            ],
            "hash": [
                54
            ],
            "metadata": [
                48
            ],
            "name": [
                54
            ],
            "projects": [
                73
            ],
            "protocol": [
                54
            ],
            "scanNodeCount": [
                55
            ],
            "severity": [
                54
            ],
            "source": [
                61
            ],
            "findingType": [
                54
            ],
            "__typename": [
                54
            ]
        },
        "String": {},
        "Int": {},
        "AlertEndCursorInput": {
            "blockNumber": [
                15
            ],
            "alertId": [
                54
            ],
            "__typename": [
                54
            ]
        },
        "AlertEndCursor": {
            "blockNumber": [
                15
            ],
            "alertId": [
                54
            ],
            "__typename": [
                54
            ]
        },
        "AlertPageInfo": {
            "endCursor": [
                57
            ],
            "hasNextPage": [
                59
            ],
            "__typename": [
                54
            ]
        },
        "Boolean": {},
        "AlertsResponse": {
            "alerts": [
                53
            ],
            "pageInfo": [
                58
            ],
            "__typename": [
                54
            ]
        },
        "AlertSource": {
            "transactionHash": [
                54
            ],
            "bot": [
                70
            ],
            "block": [
                62
            ],
            "__typename": [
                54
            ]
        },
        "Block": {
            "number": [
                15
            ],
            "hash": [
                54
            ],
            "timestamp": [
                54
            ],
            "chainId": [
                15
            ],
            "__typename": [
                54
            ]
        },
        "BlockRange": {
            "startBlockNumber": [
                15
            ],
            "endBlockNumber": [
                15
            ],
            "__typename": [
                54
            ]
        },
        "DateRange": {
            "startDate": [
                7
            ],
            "endDate": [
                7
            ],
            "__typename": [
                54
            ]
        },
        "TimestampRange": {
            "startTimestamp": [
                3
            ],
            "endTimestamp": [
                3
            ],
            "__typename": [
                54
            ]
        },
        "scanNodeFilters": {
            "gte": [
                15
            ],
            "lte": [
                15
            ],
            "__typename": [
                54
            ]
        },
        "Sort": {},
        "AlertsInput": {
            "addresses": [
                54
            ],
            "after": [
                56
            ],
            "alertId": [
                54
            ],
            "alertName": [
                54
            ],
            "blockDateRange": [
                64
            ],
            "blockNumberRange": [
                63
            ],
            "blockTimestampRange": [
                65
            ],
            "blockSortDirection": [
                67
            ],
            "bots": [
                54
            ],
            "chainId": [
                15
            ],
            "createdSince": [
                15
            ],
            "first": [
                15
            ],
            "projectId": [
                54
            ],
            "scanNodeConfirmations": [
                66
            ],
            "severities": [
                54
            ],
            "transactionHash": [
                54
            ],
            "__typename": [
                54
            ]
        },
        "Query": {
            "alerts": [
                60,
                {
                    "input": [
                        68
                    ]
                }
            ],
            "projects": [
                76,
                {
                    "input": [
                        77
                    ]
                }
            ],
            "project": [
                73,
                {
                    "id": [
                        54,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                54
            ]
        },
        "Bot": {
            "id": [
                54
            ],
            "reference": [
                54
            ],
            "image": [
                54
            ],
            "__typename": [
                54
            ]
        },
        "Contract": {
            "address": [
                54
            ],
            "name": [
                54
            ],
            "projectId": [
                54
            ],
            "__typename": [
                54
            ]
        },
        "Contacts": {
            "generalEmailAddress": [
                10
            ],
            "securityEmailAddress": [
                10
            ],
            "__typename": [
                54
            ]
        },
        "Project": {
            "contacts": [
                72
            ],
            "name": [
                54
            ],
            "id": [
                54
            ],
            "social": [
                78
            ],
            "token": [
                79
            ],
            "website": [
                54
            ],
            "__typename": [
                54
            ]
        },
        "ProjectEdge": {
            "cursor": [
                54
            ],
            "node": [
                73
            ],
            "__typename": [
                54
            ]
        },
        "ProjectPageInfo": {
            "endCursor": [
                54
            ],
            "hasNextPage": [
                59
            ],
            "__typename": [
                54
            ]
        },
        "ProjectsResponse": {
            "edges": [
                74
            ],
            "pageInfo": [
                75
            ],
            "__typename": [
                54
            ]
        },
        "ProjectsInput": {
            "first": [
                55
            ],
            "after": [
                54
            ],
            "__typename": [
                54
            ]
        },
        "Social": {
            "coingecko": [
                54
            ],
            "everest": [
                54
            ],
            "github": [
                54
            ],
            "twitter": [
                54
            ],
            "__typename": [
                54
            ]
        },
        "Token": {
            "address": [
                54
            ],
            "chainId": [
                55
            ],
            "decimals": [
                55
            ],
            "name": [
                54
            ],
            "symbol": [
                54
            ],
            "__typename": [
                54
            ]
        }
    }
}