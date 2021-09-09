import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    BigDecimal: any,
    BigInt: any,
    Boolean: boolean,
    Bytes: any,
    ID: string,
    Int: number,
    String: string,
}

export interface Bar {
    id: Scalars['ID']
    decimals: Scalars['Int']
    name: Scalars['String']
    sushi: Scalars['Bytes']
    symbol: Scalars['String']
    totalSupply: Scalars['BigDecimal']
    ratio: Scalars['BigDecimal']
    xSushiMinted: Scalars['BigDecimal']
    xSushiBurned: Scalars['BigDecimal']
    sushiStaked: Scalars['BigDecimal']
    sushiStakedUSD: Scalars['BigDecimal']
    sushiHarvested: Scalars['BigDecimal']
    sushiHarvestedUSD: Scalars['BigDecimal']
    xSushiAge: Scalars['BigDecimal']
    xSushiAgeDestroyed: Scalars['BigDecimal']
    users: User[]
    updatedAt: Scalars['BigInt']
    __typename: 'Bar'
}

export type Bar_orderBy = 'id' | 'decimals' | 'name' | 'sushi' | 'symbol' | 'totalSupply' | 'ratio' | 'xSushiMinted' | 'xSushiBurned' | 'sushiStaked' | 'sushiStakedUSD' | 'sushiHarvested' | 'sushiHarvestedUSD' | 'xSushiAge' | 'xSushiAgeDestroyed' | 'users' | 'updatedAt'

export interface History {
    id: Scalars['ID']
    date: Scalars['Int']
    timeframe: Timeframe
    sushiStaked: Scalars['BigDecimal']
    sushiStakedUSD: Scalars['BigDecimal']
    sushiHarvested: Scalars['BigDecimal']
    sushiHarvestedUSD: Scalars['BigDecimal']
    xSushiAge: Scalars['BigDecimal']
    xSushiAgeDestroyed: Scalars['BigDecimal']
    xSushiMinted: Scalars['BigDecimal']
    xSushiBurned: Scalars['BigDecimal']
    xSushiSupply: Scalars['BigDecimal']
    ratio: Scalars['BigDecimal']
    __typename: 'History'
}

export type History_orderBy = 'id' | 'date' | 'timeframe' | 'sushiStaked' | 'sushiStakedUSD' | 'sushiHarvested' | 'sushiHarvestedUSD' | 'xSushiAge' | 'xSushiAgeDestroyed' | 'xSushiMinted' | 'xSushiBurned' | 'xSushiSupply' | 'ratio'

export type OrderDirection = 'asc' | 'desc'

export interface Query {
    bar?: Bar
    bars: Bar[]
    user?: User
    users: User[]
    history?: History
    histories: History[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Query'
}

export interface Subscription {
    bar?: Bar
    bars: Bar[]
    user?: User
    users: User[]
    history?: History
    histories: History[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Subscription'
}

export type Timeframe = 'Day'

export interface User {
    id: Scalars['ID']
    bar?: Bar
    xSushi: Scalars['BigDecimal']
    xSushiIn: Scalars['BigDecimal']
    xSushiOut: Scalars['BigDecimal']
    xSushiMinted: Scalars['BigDecimal']
    xSushiBurned: Scalars['BigDecimal']
    xSushiOffset: Scalars['BigDecimal']
    xSushiAge: Scalars['BigDecimal']
    xSushiAgeDestroyed: Scalars['BigDecimal']
    sushiStaked: Scalars['BigDecimal']
    sushiStakedUSD: Scalars['BigDecimal']
    sushiHarvested: Scalars['BigDecimal']
    sushiHarvestedUSD: Scalars['BigDecimal']
    sushiOut: Scalars['BigDecimal']
    sushiIn: Scalars['BigDecimal']
    usdOut: Scalars['BigDecimal']
    usdIn: Scalars['BigDecimal']
    updatedAt: Scalars['BigInt']
    sushiOffset: Scalars['BigDecimal']
    usdOffset: Scalars['BigDecimal']
    __typename: 'User'
}

export type User_orderBy = 'id' | 'bar' | 'xSushi' | 'xSushiIn' | 'xSushiOut' | 'xSushiMinted' | 'xSushiBurned' | 'xSushiOffset' | 'xSushiAge' | 'xSushiAgeDestroyed' | 'sushiStaked' | 'sushiStakedUSD' | 'sushiHarvested' | 'sushiHarvestedUSD' | 'sushiOut' | 'sushiIn' | 'usdOut' | 'usdIn' | 'updatedAt' | 'sushiOffset' | 'usdOffset'

export interface _Block_ {
    /** The hash of the block */
    hash?: Scalars['Bytes']
    /** The block number */
    number: Scalars['Int']
    __typename: '_Block_'
}


/** The type for the top-level _meta field */
export interface _Meta_ {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     * 
     */
    block: _Block_
    /** The deployment ID */
    deployment: Scalars['String']
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean']
    __typename: '_Meta_'
}

export type _SubgraphErrorPolicy_ = 'allow' | 'deny'

export interface BarRequest{
    id?: boolean | number
    decimals?: boolean | number
    name?: boolean | number
    sushi?: boolean | number
    symbol?: boolean | number
    totalSupply?: boolean | number
    ratio?: boolean | number
    xSushiMinted?: boolean | number
    xSushiBurned?: boolean | number
    sushiStaked?: boolean | number
    sushiStakedUSD?: boolean | number
    sushiHarvested?: boolean | number
    sushiHarvestedUSD?: boolean | number
    xSushiAge?: boolean | number
    xSushiAgeDestroyed?: boolean | number
    users?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null)},UserRequest] | UserRequest
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Bar_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),decimals?: (Scalars['Int'] | null),decimals_not?: (Scalars['Int'] | null),decimals_gt?: (Scalars['Int'] | null),decimals_lt?: (Scalars['Int'] | null),decimals_gte?: (Scalars['Int'] | null),decimals_lte?: (Scalars['Int'] | null),decimals_in?: (Scalars['Int'][] | null),decimals_not_in?: (Scalars['Int'][] | null),name?: (Scalars['String'] | null),name_not?: (Scalars['String'] | null),name_gt?: (Scalars['String'] | null),name_lt?: (Scalars['String'] | null),name_gte?: (Scalars['String'] | null),name_lte?: (Scalars['String'] | null),name_in?: (Scalars['String'][] | null),name_not_in?: (Scalars['String'][] | null),name_contains?: (Scalars['String'] | null),name_not_contains?: (Scalars['String'] | null),name_starts_with?: (Scalars['String'] | null),name_not_starts_with?: (Scalars['String'] | null),name_ends_with?: (Scalars['String'] | null),name_not_ends_with?: (Scalars['String'] | null),sushi?: (Scalars['Bytes'] | null),sushi_not?: (Scalars['Bytes'] | null),sushi_in?: (Scalars['Bytes'][] | null),sushi_not_in?: (Scalars['Bytes'][] | null),sushi_contains?: (Scalars['Bytes'] | null),sushi_not_contains?: (Scalars['Bytes'] | null),symbol?: (Scalars['String'] | null),symbol_not?: (Scalars['String'] | null),symbol_gt?: (Scalars['String'] | null),symbol_lt?: (Scalars['String'] | null),symbol_gte?: (Scalars['String'] | null),symbol_lte?: (Scalars['String'] | null),symbol_in?: (Scalars['String'][] | null),symbol_not_in?: (Scalars['String'][] | null),symbol_contains?: (Scalars['String'] | null),symbol_not_contains?: (Scalars['String'] | null),symbol_starts_with?: (Scalars['String'] | null),symbol_not_starts_with?: (Scalars['String'] | null),symbol_ends_with?: (Scalars['String'] | null),symbol_not_ends_with?: (Scalars['String'] | null),totalSupply?: (Scalars['BigDecimal'] | null),totalSupply_not?: (Scalars['BigDecimal'] | null),totalSupply_gt?: (Scalars['BigDecimal'] | null),totalSupply_lt?: (Scalars['BigDecimal'] | null),totalSupply_gte?: (Scalars['BigDecimal'] | null),totalSupply_lte?: (Scalars['BigDecimal'] | null),totalSupply_in?: (Scalars['BigDecimal'][] | null),totalSupply_not_in?: (Scalars['BigDecimal'][] | null),ratio?: (Scalars['BigDecimal'] | null),ratio_not?: (Scalars['BigDecimal'] | null),ratio_gt?: (Scalars['BigDecimal'] | null),ratio_lt?: (Scalars['BigDecimal'] | null),ratio_gte?: (Scalars['BigDecimal'] | null),ratio_lte?: (Scalars['BigDecimal'] | null),ratio_in?: (Scalars['BigDecimal'][] | null),ratio_not_in?: (Scalars['BigDecimal'][] | null),xSushiMinted?: (Scalars['BigDecimal'] | null),xSushiMinted_not?: (Scalars['BigDecimal'] | null),xSushiMinted_gt?: (Scalars['BigDecimal'] | null),xSushiMinted_lt?: (Scalars['BigDecimal'] | null),xSushiMinted_gte?: (Scalars['BigDecimal'] | null),xSushiMinted_lte?: (Scalars['BigDecimal'] | null),xSushiMinted_in?: (Scalars['BigDecimal'][] | null),xSushiMinted_not_in?: (Scalars['BigDecimal'][] | null),xSushiBurned?: (Scalars['BigDecimal'] | null),xSushiBurned_not?: (Scalars['BigDecimal'] | null),xSushiBurned_gt?: (Scalars['BigDecimal'] | null),xSushiBurned_lt?: (Scalars['BigDecimal'] | null),xSushiBurned_gte?: (Scalars['BigDecimal'] | null),xSushiBurned_lte?: (Scalars['BigDecimal'] | null),xSushiBurned_in?: (Scalars['BigDecimal'][] | null),xSushiBurned_not_in?: (Scalars['BigDecimal'][] | null),sushiStaked?: (Scalars['BigDecimal'] | null),sushiStaked_not?: (Scalars['BigDecimal'] | null),sushiStaked_gt?: (Scalars['BigDecimal'] | null),sushiStaked_lt?: (Scalars['BigDecimal'] | null),sushiStaked_gte?: (Scalars['BigDecimal'] | null),sushiStaked_lte?: (Scalars['BigDecimal'] | null),sushiStaked_in?: (Scalars['BigDecimal'][] | null),sushiStaked_not_in?: (Scalars['BigDecimal'][] | null),sushiStakedUSD?: (Scalars['BigDecimal'] | null),sushiStakedUSD_not?: (Scalars['BigDecimal'] | null),sushiStakedUSD_gt?: (Scalars['BigDecimal'] | null),sushiStakedUSD_lt?: (Scalars['BigDecimal'] | null),sushiStakedUSD_gte?: (Scalars['BigDecimal'] | null),sushiStakedUSD_lte?: (Scalars['BigDecimal'] | null),sushiStakedUSD_in?: (Scalars['BigDecimal'][] | null),sushiStakedUSD_not_in?: (Scalars['BigDecimal'][] | null),sushiHarvested?: (Scalars['BigDecimal'] | null),sushiHarvested_not?: (Scalars['BigDecimal'] | null),sushiHarvested_gt?: (Scalars['BigDecimal'] | null),sushiHarvested_lt?: (Scalars['BigDecimal'] | null),sushiHarvested_gte?: (Scalars['BigDecimal'] | null),sushiHarvested_lte?: (Scalars['BigDecimal'] | null),sushiHarvested_in?: (Scalars['BigDecimal'][] | null),sushiHarvested_not_in?: (Scalars['BigDecimal'][] | null),sushiHarvestedUSD?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_not?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_gt?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_lt?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_gte?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_lte?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_in?: (Scalars['BigDecimal'][] | null),sushiHarvestedUSD_not_in?: (Scalars['BigDecimal'][] | null),xSushiAge?: (Scalars['BigDecimal'] | null),xSushiAge_not?: (Scalars['BigDecimal'] | null),xSushiAge_gt?: (Scalars['BigDecimal'] | null),xSushiAge_lt?: (Scalars['BigDecimal'] | null),xSushiAge_gte?: (Scalars['BigDecimal'] | null),xSushiAge_lte?: (Scalars['BigDecimal'] | null),xSushiAge_in?: (Scalars['BigDecimal'][] | null),xSushiAge_not_in?: (Scalars['BigDecimal'][] | null),xSushiAgeDestroyed?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_not?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_gt?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_lt?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_gte?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_lte?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_in?: (Scalars['BigDecimal'][] | null),xSushiAgeDestroyed_not_in?: (Scalars['BigDecimal'][] | null),updatedAt?: (Scalars['BigInt'] | null),updatedAt_not?: (Scalars['BigInt'] | null),updatedAt_gt?: (Scalars['BigInt'] | null),updatedAt_lt?: (Scalars['BigInt'] | null),updatedAt_gte?: (Scalars['BigInt'] | null),updatedAt_lte?: (Scalars['BigInt'] | null),updatedAt_in?: (Scalars['BigInt'][] | null),updatedAt_not_in?: (Scalars['BigInt'][] | null)}

export interface Block_height {hash?: (Scalars['Bytes'] | null),number?: (Scalars['Int'] | null)}

export interface HistoryRequest{
    id?: boolean | number
    date?: boolean | number
    timeframe?: boolean | number
    sushiStaked?: boolean | number
    sushiStakedUSD?: boolean | number
    sushiHarvested?: boolean | number
    sushiHarvestedUSD?: boolean | number
    xSushiAge?: boolean | number
    xSushiAgeDestroyed?: boolean | number
    xSushiMinted?: boolean | number
    xSushiBurned?: boolean | number
    xSushiSupply?: boolean | number
    ratio?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface History_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),date?: (Scalars['Int'] | null),date_not?: (Scalars['Int'] | null),date_gt?: (Scalars['Int'] | null),date_lt?: (Scalars['Int'] | null),date_gte?: (Scalars['Int'] | null),date_lte?: (Scalars['Int'] | null),date_in?: (Scalars['Int'][] | null),date_not_in?: (Scalars['Int'][] | null),timeframe?: (Timeframe | null),timeframe_not?: (Timeframe | null),sushiStaked?: (Scalars['BigDecimal'] | null),sushiStaked_not?: (Scalars['BigDecimal'] | null),sushiStaked_gt?: (Scalars['BigDecimal'] | null),sushiStaked_lt?: (Scalars['BigDecimal'] | null),sushiStaked_gte?: (Scalars['BigDecimal'] | null),sushiStaked_lte?: (Scalars['BigDecimal'] | null),sushiStaked_in?: (Scalars['BigDecimal'][] | null),sushiStaked_not_in?: (Scalars['BigDecimal'][] | null),sushiStakedUSD?: (Scalars['BigDecimal'] | null),sushiStakedUSD_not?: (Scalars['BigDecimal'] | null),sushiStakedUSD_gt?: (Scalars['BigDecimal'] | null),sushiStakedUSD_lt?: (Scalars['BigDecimal'] | null),sushiStakedUSD_gte?: (Scalars['BigDecimal'] | null),sushiStakedUSD_lte?: (Scalars['BigDecimal'] | null),sushiStakedUSD_in?: (Scalars['BigDecimal'][] | null),sushiStakedUSD_not_in?: (Scalars['BigDecimal'][] | null),sushiHarvested?: (Scalars['BigDecimal'] | null),sushiHarvested_not?: (Scalars['BigDecimal'] | null),sushiHarvested_gt?: (Scalars['BigDecimal'] | null),sushiHarvested_lt?: (Scalars['BigDecimal'] | null),sushiHarvested_gte?: (Scalars['BigDecimal'] | null),sushiHarvested_lte?: (Scalars['BigDecimal'] | null),sushiHarvested_in?: (Scalars['BigDecimal'][] | null),sushiHarvested_not_in?: (Scalars['BigDecimal'][] | null),sushiHarvestedUSD?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_not?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_gt?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_lt?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_gte?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_lte?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_in?: (Scalars['BigDecimal'][] | null),sushiHarvestedUSD_not_in?: (Scalars['BigDecimal'][] | null),xSushiAge?: (Scalars['BigDecimal'] | null),xSushiAge_not?: (Scalars['BigDecimal'] | null),xSushiAge_gt?: (Scalars['BigDecimal'] | null),xSushiAge_lt?: (Scalars['BigDecimal'] | null),xSushiAge_gte?: (Scalars['BigDecimal'] | null),xSushiAge_lte?: (Scalars['BigDecimal'] | null),xSushiAge_in?: (Scalars['BigDecimal'][] | null),xSushiAge_not_in?: (Scalars['BigDecimal'][] | null),xSushiAgeDestroyed?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_not?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_gt?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_lt?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_gte?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_lte?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_in?: (Scalars['BigDecimal'][] | null),xSushiAgeDestroyed_not_in?: (Scalars['BigDecimal'][] | null),xSushiMinted?: (Scalars['BigDecimal'] | null),xSushiMinted_not?: (Scalars['BigDecimal'] | null),xSushiMinted_gt?: (Scalars['BigDecimal'] | null),xSushiMinted_lt?: (Scalars['BigDecimal'] | null),xSushiMinted_gte?: (Scalars['BigDecimal'] | null),xSushiMinted_lte?: (Scalars['BigDecimal'] | null),xSushiMinted_in?: (Scalars['BigDecimal'][] | null),xSushiMinted_not_in?: (Scalars['BigDecimal'][] | null),xSushiBurned?: (Scalars['BigDecimal'] | null),xSushiBurned_not?: (Scalars['BigDecimal'] | null),xSushiBurned_gt?: (Scalars['BigDecimal'] | null),xSushiBurned_lt?: (Scalars['BigDecimal'] | null),xSushiBurned_gte?: (Scalars['BigDecimal'] | null),xSushiBurned_lte?: (Scalars['BigDecimal'] | null),xSushiBurned_in?: (Scalars['BigDecimal'][] | null),xSushiBurned_not_in?: (Scalars['BigDecimal'][] | null),xSushiSupply?: (Scalars['BigDecimal'] | null),xSushiSupply_not?: (Scalars['BigDecimal'] | null),xSushiSupply_gt?: (Scalars['BigDecimal'] | null),xSushiSupply_lt?: (Scalars['BigDecimal'] | null),xSushiSupply_gte?: (Scalars['BigDecimal'] | null),xSushiSupply_lte?: (Scalars['BigDecimal'] | null),xSushiSupply_in?: (Scalars['BigDecimal'][] | null),xSushiSupply_not_in?: (Scalars['BigDecimal'][] | null),ratio?: (Scalars['BigDecimal'] | null),ratio_not?: (Scalars['BigDecimal'] | null),ratio_gt?: (Scalars['BigDecimal'] | null),ratio_lt?: (Scalars['BigDecimal'] | null),ratio_gte?: (Scalars['BigDecimal'] | null),ratio_lte?: (Scalars['BigDecimal'] | null),ratio_in?: (Scalars['BigDecimal'][] | null),ratio_not_in?: (Scalars['BigDecimal'][] | null)}

export interface QueryRequest{
    bar?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BarRequest]
    bars?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bar_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bar_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BarRequest]
    user?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserRequest]
    users?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserRequest]
    history?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},HistoryRequest]
    histories?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (History_orderBy | null),orderDirection?: (OrderDirection | null),where?: (History_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},HistoryRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionRequest{
    bar?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BarRequest]
    bars?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bar_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bar_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BarRequest]
    user?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserRequest]
    users?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserRequest]
    history?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},HistoryRequest]
    histories?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (History_orderBy | null),orderDirection?: (OrderDirection | null),where?: (History_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},HistoryRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserRequest{
    id?: boolean | number
    bar?: BarRequest
    xSushi?: boolean | number
    xSushiIn?: boolean | number
    xSushiOut?: boolean | number
    xSushiMinted?: boolean | number
    xSushiBurned?: boolean | number
    xSushiOffset?: boolean | number
    xSushiAge?: boolean | number
    xSushiAgeDestroyed?: boolean | number
    sushiStaked?: boolean | number
    sushiStakedUSD?: boolean | number
    sushiHarvested?: boolean | number
    sushiHarvestedUSD?: boolean | number
    sushiOut?: boolean | number
    sushiIn?: boolean | number
    usdOut?: boolean | number
    usdIn?: boolean | number
    updatedAt?: boolean | number
    sushiOffset?: boolean | number
    usdOffset?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface User_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),bar?: (Scalars['String'] | null),bar_not?: (Scalars['String'] | null),bar_gt?: (Scalars['String'] | null),bar_lt?: (Scalars['String'] | null),bar_gte?: (Scalars['String'] | null),bar_lte?: (Scalars['String'] | null),bar_in?: (Scalars['String'][] | null),bar_not_in?: (Scalars['String'][] | null),bar_contains?: (Scalars['String'] | null),bar_not_contains?: (Scalars['String'] | null),bar_starts_with?: (Scalars['String'] | null),bar_not_starts_with?: (Scalars['String'] | null),bar_ends_with?: (Scalars['String'] | null),bar_not_ends_with?: (Scalars['String'] | null),xSushi?: (Scalars['BigDecimal'] | null),xSushi_not?: (Scalars['BigDecimal'] | null),xSushi_gt?: (Scalars['BigDecimal'] | null),xSushi_lt?: (Scalars['BigDecimal'] | null),xSushi_gte?: (Scalars['BigDecimal'] | null),xSushi_lte?: (Scalars['BigDecimal'] | null),xSushi_in?: (Scalars['BigDecimal'][] | null),xSushi_not_in?: (Scalars['BigDecimal'][] | null),xSushiIn?: (Scalars['BigDecimal'] | null),xSushiIn_not?: (Scalars['BigDecimal'] | null),xSushiIn_gt?: (Scalars['BigDecimal'] | null),xSushiIn_lt?: (Scalars['BigDecimal'] | null),xSushiIn_gte?: (Scalars['BigDecimal'] | null),xSushiIn_lte?: (Scalars['BigDecimal'] | null),xSushiIn_in?: (Scalars['BigDecimal'][] | null),xSushiIn_not_in?: (Scalars['BigDecimal'][] | null),xSushiOut?: (Scalars['BigDecimal'] | null),xSushiOut_not?: (Scalars['BigDecimal'] | null),xSushiOut_gt?: (Scalars['BigDecimal'] | null),xSushiOut_lt?: (Scalars['BigDecimal'] | null),xSushiOut_gte?: (Scalars['BigDecimal'] | null),xSushiOut_lte?: (Scalars['BigDecimal'] | null),xSushiOut_in?: (Scalars['BigDecimal'][] | null),xSushiOut_not_in?: (Scalars['BigDecimal'][] | null),xSushiMinted?: (Scalars['BigDecimal'] | null),xSushiMinted_not?: (Scalars['BigDecimal'] | null),xSushiMinted_gt?: (Scalars['BigDecimal'] | null),xSushiMinted_lt?: (Scalars['BigDecimal'] | null),xSushiMinted_gte?: (Scalars['BigDecimal'] | null),xSushiMinted_lte?: (Scalars['BigDecimal'] | null),xSushiMinted_in?: (Scalars['BigDecimal'][] | null),xSushiMinted_not_in?: (Scalars['BigDecimal'][] | null),xSushiBurned?: (Scalars['BigDecimal'] | null),xSushiBurned_not?: (Scalars['BigDecimal'] | null),xSushiBurned_gt?: (Scalars['BigDecimal'] | null),xSushiBurned_lt?: (Scalars['BigDecimal'] | null),xSushiBurned_gte?: (Scalars['BigDecimal'] | null),xSushiBurned_lte?: (Scalars['BigDecimal'] | null),xSushiBurned_in?: (Scalars['BigDecimal'][] | null),xSushiBurned_not_in?: (Scalars['BigDecimal'][] | null),xSushiOffset?: (Scalars['BigDecimal'] | null),xSushiOffset_not?: (Scalars['BigDecimal'] | null),xSushiOffset_gt?: (Scalars['BigDecimal'] | null),xSushiOffset_lt?: (Scalars['BigDecimal'] | null),xSushiOffset_gte?: (Scalars['BigDecimal'] | null),xSushiOffset_lte?: (Scalars['BigDecimal'] | null),xSushiOffset_in?: (Scalars['BigDecimal'][] | null),xSushiOffset_not_in?: (Scalars['BigDecimal'][] | null),xSushiAge?: (Scalars['BigDecimal'] | null),xSushiAge_not?: (Scalars['BigDecimal'] | null),xSushiAge_gt?: (Scalars['BigDecimal'] | null),xSushiAge_lt?: (Scalars['BigDecimal'] | null),xSushiAge_gte?: (Scalars['BigDecimal'] | null),xSushiAge_lte?: (Scalars['BigDecimal'] | null),xSushiAge_in?: (Scalars['BigDecimal'][] | null),xSushiAge_not_in?: (Scalars['BigDecimal'][] | null),xSushiAgeDestroyed?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_not?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_gt?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_lt?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_gte?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_lte?: (Scalars['BigDecimal'] | null),xSushiAgeDestroyed_in?: (Scalars['BigDecimal'][] | null),xSushiAgeDestroyed_not_in?: (Scalars['BigDecimal'][] | null),sushiStaked?: (Scalars['BigDecimal'] | null),sushiStaked_not?: (Scalars['BigDecimal'] | null),sushiStaked_gt?: (Scalars['BigDecimal'] | null),sushiStaked_lt?: (Scalars['BigDecimal'] | null),sushiStaked_gte?: (Scalars['BigDecimal'] | null),sushiStaked_lte?: (Scalars['BigDecimal'] | null),sushiStaked_in?: (Scalars['BigDecimal'][] | null),sushiStaked_not_in?: (Scalars['BigDecimal'][] | null),sushiStakedUSD?: (Scalars['BigDecimal'] | null),sushiStakedUSD_not?: (Scalars['BigDecimal'] | null),sushiStakedUSD_gt?: (Scalars['BigDecimal'] | null),sushiStakedUSD_lt?: (Scalars['BigDecimal'] | null),sushiStakedUSD_gte?: (Scalars['BigDecimal'] | null),sushiStakedUSD_lte?: (Scalars['BigDecimal'] | null),sushiStakedUSD_in?: (Scalars['BigDecimal'][] | null),sushiStakedUSD_not_in?: (Scalars['BigDecimal'][] | null),sushiHarvested?: (Scalars['BigDecimal'] | null),sushiHarvested_not?: (Scalars['BigDecimal'] | null),sushiHarvested_gt?: (Scalars['BigDecimal'] | null),sushiHarvested_lt?: (Scalars['BigDecimal'] | null),sushiHarvested_gte?: (Scalars['BigDecimal'] | null),sushiHarvested_lte?: (Scalars['BigDecimal'] | null),sushiHarvested_in?: (Scalars['BigDecimal'][] | null),sushiHarvested_not_in?: (Scalars['BigDecimal'][] | null),sushiHarvestedUSD?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_not?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_gt?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_lt?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_gte?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_lte?: (Scalars['BigDecimal'] | null),sushiHarvestedUSD_in?: (Scalars['BigDecimal'][] | null),sushiHarvestedUSD_not_in?: (Scalars['BigDecimal'][] | null),sushiOut?: (Scalars['BigDecimal'] | null),sushiOut_not?: (Scalars['BigDecimal'] | null),sushiOut_gt?: (Scalars['BigDecimal'] | null),sushiOut_lt?: (Scalars['BigDecimal'] | null),sushiOut_gte?: (Scalars['BigDecimal'] | null),sushiOut_lte?: (Scalars['BigDecimal'] | null),sushiOut_in?: (Scalars['BigDecimal'][] | null),sushiOut_not_in?: (Scalars['BigDecimal'][] | null),sushiIn?: (Scalars['BigDecimal'] | null),sushiIn_not?: (Scalars['BigDecimal'] | null),sushiIn_gt?: (Scalars['BigDecimal'] | null),sushiIn_lt?: (Scalars['BigDecimal'] | null),sushiIn_gte?: (Scalars['BigDecimal'] | null),sushiIn_lte?: (Scalars['BigDecimal'] | null),sushiIn_in?: (Scalars['BigDecimal'][] | null),sushiIn_not_in?: (Scalars['BigDecimal'][] | null),usdOut?: (Scalars['BigDecimal'] | null),usdOut_not?: (Scalars['BigDecimal'] | null),usdOut_gt?: (Scalars['BigDecimal'] | null),usdOut_lt?: (Scalars['BigDecimal'] | null),usdOut_gte?: (Scalars['BigDecimal'] | null),usdOut_lte?: (Scalars['BigDecimal'] | null),usdOut_in?: (Scalars['BigDecimal'][] | null),usdOut_not_in?: (Scalars['BigDecimal'][] | null),usdIn?: (Scalars['BigDecimal'] | null),usdIn_not?: (Scalars['BigDecimal'] | null),usdIn_gt?: (Scalars['BigDecimal'] | null),usdIn_lt?: (Scalars['BigDecimal'] | null),usdIn_gte?: (Scalars['BigDecimal'] | null),usdIn_lte?: (Scalars['BigDecimal'] | null),usdIn_in?: (Scalars['BigDecimal'][] | null),usdIn_not_in?: (Scalars['BigDecimal'][] | null),updatedAt?: (Scalars['BigInt'] | null),updatedAt_not?: (Scalars['BigInt'] | null),updatedAt_gt?: (Scalars['BigInt'] | null),updatedAt_lt?: (Scalars['BigInt'] | null),updatedAt_gte?: (Scalars['BigInt'] | null),updatedAt_lte?: (Scalars['BigInt'] | null),updatedAt_in?: (Scalars['BigInt'][] | null),updatedAt_not_in?: (Scalars['BigInt'][] | null),sushiOffset?: (Scalars['BigDecimal'] | null),sushiOffset_not?: (Scalars['BigDecimal'] | null),sushiOffset_gt?: (Scalars['BigDecimal'] | null),sushiOffset_lt?: (Scalars['BigDecimal'] | null),sushiOffset_gte?: (Scalars['BigDecimal'] | null),sushiOffset_lte?: (Scalars['BigDecimal'] | null),sushiOffset_in?: (Scalars['BigDecimal'][] | null),sushiOffset_not_in?: (Scalars['BigDecimal'][] | null),usdOffset?: (Scalars['BigDecimal'] | null),usdOffset_not?: (Scalars['BigDecimal'] | null),usdOffset_gt?: (Scalars['BigDecimal'] | null),usdOffset_lt?: (Scalars['BigDecimal'] | null),usdOffset_gte?: (Scalars['BigDecimal'] | null),usdOffset_lte?: (Scalars['BigDecimal'] | null),usdOffset_in?: (Scalars['BigDecimal'][] | null),usdOffset_not_in?: (Scalars['BigDecimal'][] | null)}

export interface _Block_Request{
    /** The hash of the block */
    hash?: boolean | number
    /** The block number */
    number?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The type for the top-level _meta field */
export interface _Meta_Request{
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     * 
     */
    block?: _Block_Request
    /** The deployment ID */
    deployment?: boolean | number
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Bar_possibleTypes = ['Bar']
export const isBar = (obj?: { __typename?: any } | null): obj is Bar => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBar"')
  return Bar_possibleTypes.includes(obj.__typename)
}



const History_possibleTypes = ['History']
export const isHistory = (obj?: { __typename?: any } | null): obj is History => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isHistory"')
  return History_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Subscription_possibleTypes = ['Subscription']
export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}



const User_possibleTypes = ['User']
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



const _Block__possibleTypes = ['_Block_']
export const is_Block_ = (obj?: { __typename?: any } | null): obj is _Block_ => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Block_"')
  return _Block__possibleTypes.includes(obj.__typename)
}



const _Meta__possibleTypes = ['_Meta_']
export const is_Meta_ = (obj?: { __typename?: any } | null): obj is _Meta_ => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Meta_"')
  return _Meta__possibleTypes.includes(obj.__typename)
}


export interface BarPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    sushi: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    totalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    ratio: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiMinted: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiBurned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiStaked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiStakedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiHarvested: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiHarvestedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiAge: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiAgeDestroyed: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface BarObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    sushi: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    totalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    ratio: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiMinted: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiBurned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiStaked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiStakedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiHarvested: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiHarvestedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiAge: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiAgeDestroyed: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface HistoryPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    timeframe: ({get: (request?: boolean|number, defaultValue?: Timeframe) => Promise<Timeframe>}),
    sushiStaked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiStakedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiHarvested: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiHarvestedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiAge: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiAgeDestroyed: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiMinted: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiBurned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    ratio: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface HistoryObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    timeframe: ({get: (request?: boolean|number, defaultValue?: Timeframe) => Observable<Timeframe>}),
    sushiStaked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiStakedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiHarvested: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiHarvestedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiAge: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiAgeDestroyed: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiMinted: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiBurned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    ratio: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface QueryPromiseChain{
    bar: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BarPromiseChain & {get: <R extends BarRequest>(request: R, defaultValue?: (FieldsSelection<Bar, R> | undefined)) => Promise<(FieldsSelection<Bar, R> | undefined)>}),
    bars: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bar_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bar_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BarRequest>(request: R, defaultValue?: FieldsSelection<Bar, R>[]) => Promise<FieldsSelection<Bar, R>[]>})&({get: <R extends BarRequest>(request: R, defaultValue?: FieldsSelection<Bar, R>[]) => Promise<FieldsSelection<Bar, R>[]>}),
    user: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Promise<(FieldsSelection<User, R> | undefined)>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>}),
    history: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => HistoryPromiseChain & {get: <R extends HistoryRequest>(request: R, defaultValue?: (FieldsSelection<History, R> | undefined)) => Promise<(FieldsSelection<History, R> | undefined)>}),
    histories: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (History_orderBy | null),orderDirection?: (OrderDirection | null),where?: (History_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends HistoryRequest>(request: R, defaultValue?: FieldsSelection<History, R>[]) => Promise<FieldsSelection<History, R>[]>})&({get: <R extends HistoryRequest>(request: R, defaultValue?: FieldsSelection<History, R>[]) => Promise<FieldsSelection<History, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface QueryObservableChain{
    bar: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BarObservableChain & {get: <R extends BarRequest>(request: R, defaultValue?: (FieldsSelection<Bar, R> | undefined)) => Observable<(FieldsSelection<Bar, R> | undefined)>}),
    bars: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bar_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bar_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BarRequest>(request: R, defaultValue?: FieldsSelection<Bar, R>[]) => Observable<FieldsSelection<Bar, R>[]>})&({get: <R extends BarRequest>(request: R, defaultValue?: FieldsSelection<Bar, R>[]) => Observable<FieldsSelection<Bar, R>[]>}),
    user: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Observable<(FieldsSelection<User, R> | undefined)>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>}),
    history: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => HistoryObservableChain & {get: <R extends HistoryRequest>(request: R, defaultValue?: (FieldsSelection<History, R> | undefined)) => Observable<(FieldsSelection<History, R> | undefined)>}),
    histories: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (History_orderBy | null),orderDirection?: (OrderDirection | null),where?: (History_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends HistoryRequest>(request: R, defaultValue?: FieldsSelection<History, R>[]) => Observable<FieldsSelection<History, R>[]>})&({get: <R extends HistoryRequest>(request: R, defaultValue?: FieldsSelection<History, R>[]) => Observable<FieldsSelection<History, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionPromiseChain{
    bar: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BarPromiseChain & {get: <R extends BarRequest>(request: R, defaultValue?: (FieldsSelection<Bar, R> | undefined)) => Promise<(FieldsSelection<Bar, R> | undefined)>}),
    bars: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bar_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bar_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BarRequest>(request: R, defaultValue?: FieldsSelection<Bar, R>[]) => Promise<FieldsSelection<Bar, R>[]>})&({get: <R extends BarRequest>(request: R, defaultValue?: FieldsSelection<Bar, R>[]) => Promise<FieldsSelection<Bar, R>[]>}),
    user: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Promise<(FieldsSelection<User, R> | undefined)>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>}),
    history: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => HistoryPromiseChain & {get: <R extends HistoryRequest>(request: R, defaultValue?: (FieldsSelection<History, R> | undefined)) => Promise<(FieldsSelection<History, R> | undefined)>}),
    histories: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (History_orderBy | null),orderDirection?: (OrderDirection | null),where?: (History_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends HistoryRequest>(request: R, defaultValue?: FieldsSelection<History, R>[]) => Promise<FieldsSelection<History, R>[]>})&({get: <R extends HistoryRequest>(request: R, defaultValue?: FieldsSelection<History, R>[]) => Promise<FieldsSelection<History, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionObservableChain{
    bar: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BarObservableChain & {get: <R extends BarRequest>(request: R, defaultValue?: (FieldsSelection<Bar, R> | undefined)) => Observable<(FieldsSelection<Bar, R> | undefined)>}),
    bars: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bar_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bar_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BarRequest>(request: R, defaultValue?: FieldsSelection<Bar, R>[]) => Observable<FieldsSelection<Bar, R>[]>})&({get: <R extends BarRequest>(request: R, defaultValue?: FieldsSelection<Bar, R>[]) => Observable<FieldsSelection<Bar, R>[]>}),
    user: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Observable<(FieldsSelection<User, R> | undefined)>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>}),
    history: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => HistoryObservableChain & {get: <R extends HistoryRequest>(request: R, defaultValue?: (FieldsSelection<History, R> | undefined)) => Observable<(FieldsSelection<History, R> | undefined)>}),
    histories: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (History_orderBy | null),orderDirection?: (OrderDirection | null),where?: (History_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends HistoryRequest>(request: R, defaultValue?: FieldsSelection<History, R>[]) => Observable<FieldsSelection<History, R>[]>})&({get: <R extends HistoryRequest>(request: R, defaultValue?: FieldsSelection<History, R>[]) => Observable<FieldsSelection<History, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface UserPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    bar: (BarPromiseChain & {get: <R extends BarRequest>(request: R, defaultValue?: (FieldsSelection<Bar, R> | undefined)) => Promise<(FieldsSelection<Bar, R> | undefined)>}),
    xSushi: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiIn: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiOut: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiMinted: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiBurned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiOffset: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiAge: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    xSushiAgeDestroyed: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiStaked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiStakedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiHarvested: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiHarvestedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiOut: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sushiIn: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    usdOut: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    usdIn: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    sushiOffset: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    usdOffset: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface UserObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    bar: (BarObservableChain & {get: <R extends BarRequest>(request: R, defaultValue?: (FieldsSelection<Bar, R> | undefined)) => Observable<(FieldsSelection<Bar, R> | undefined)>}),
    xSushi: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiIn: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiOut: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiMinted: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiBurned: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiOffset: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiAge: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    xSushiAgeDestroyed: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiStaked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiStakedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiHarvested: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiHarvestedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiOut: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sushiIn: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    usdOut: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    usdIn: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    sushiOffset: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    usdOffset: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface _Block_PromiseChain{
    
/** The hash of the block */
hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    
/** The block number */
number: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface _Block_ObservableChain{
    
/** The hash of the block */
hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    
/** The block number */
number: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}


/** The type for the top-level _meta field */
export interface _Meta_PromiseChain{
    
/**
 * Information about a specific subgraph block. The hash of the block
 * will be null if the _meta field has a block constraint that asks for
 * a block number. It will be filled if the _meta field has no block constraint
 * and therefore asks for the latest  block
 * 
 */
block: (_Block_PromiseChain & {get: <R extends _Block_Request>(request: R, defaultValue?: FieldsSelection<_Block_, R>) => Promise<FieldsSelection<_Block_, R>>}),
    
/** The deployment ID */
deployment: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** If `true`, the subgraph encountered indexing errors at some past block */
hasIndexingErrors: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}


/** The type for the top-level _meta field */
export interface _Meta_ObservableChain{
    
/**
 * Information about a specific subgraph block. The hash of the block
 * will be null if the _meta field has a block constraint that asks for
 * a block number. It will be filled if the _meta field has no block constraint
 * and therefore asks for the latest  block
 * 
 */
block: (_Block_ObservableChain & {get: <R extends _Block_Request>(request: R, defaultValue?: FieldsSelection<_Block_, R>) => Observable<FieldsSelection<_Block_, R>>}),
    
/** The deployment ID */
deployment: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** If `true`, the subgraph encountered indexing errors at some past block */
hasIndexingErrors: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}