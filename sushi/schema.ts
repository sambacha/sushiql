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

export interface Bundle {
    id: Scalars['ID']
    ethPrice: Scalars['BigDecimal']
    __typename: 'Bundle'
}

export type Bundle_orderBy = 'id' | 'ethPrice'

export interface Burn {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pair: Pair
    liquidity: Scalars['BigDecimal']
    sender?: Scalars['Bytes']
    amount0?: Scalars['BigDecimal']
    amount1?: Scalars['BigDecimal']
    to?: Scalars['Bytes']
    logIndex?: Scalars['BigInt']
    amountUSD?: Scalars['BigDecimal']
    needsComplete: Scalars['Boolean']
    feeTo?: Scalars['Bytes']
    feeLiquidity?: Scalars['BigDecimal']
    __typename: 'Burn'
}

export type Burn_orderBy = 'id' | 'transaction' | 'timestamp' | 'pair' | 'liquidity' | 'sender' | 'amount0' | 'amount1' | 'to' | 'logIndex' | 'amountUSD' | 'needsComplete' | 'feeTo' | 'feeLiquidity'

export interface LiquidityPosition {
    id: Scalars['ID']
    user: User
    pair: Pair
    liquidityTokenBalance: Scalars['BigDecimal']
    historicalSnapshots: (LiquidityPositionSnapshot | undefined)[]
    __typename: 'LiquidityPosition'
}

export interface LiquidityPositionSnapshot {
    id: Scalars['ID']
    liquidityPosition: LiquidityPosition
    timestamp: Scalars['Int']
    block: Scalars['Int']
    user: User
    pair: Pair
    token0PriceUSD: Scalars['BigDecimal']
    token1PriceUSD: Scalars['BigDecimal']
    reserve0: Scalars['BigDecimal']
    reserve1: Scalars['BigDecimal']
    reserveUSD: Scalars['BigDecimal']
    liquidityTokenTotalSupply: Scalars['BigDecimal']
    liquidityTokenBalance: Scalars['BigDecimal']
    __typename: 'LiquidityPositionSnapshot'
}

export type LiquidityPositionSnapshot_orderBy = 'id' | 'liquidityPosition' | 'timestamp' | 'block' | 'user' | 'pair' | 'token0PriceUSD' | 'token1PriceUSD' | 'reserve0' | 'reserve1' | 'reserveUSD' | 'liquidityTokenTotalSupply' | 'liquidityTokenBalance'

export type LiquidityPosition_orderBy = 'id' | 'user' | 'pair' | 'liquidityTokenBalance' | 'historicalSnapshots'

export interface Mint {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pair: Pair
    to: Scalars['Bytes']
    liquidity: Scalars['BigDecimal']
    sender?: Scalars['Bytes']
    amount0?: Scalars['BigDecimal']
    amount1?: Scalars['BigDecimal']
    logIndex?: Scalars['BigInt']
    amountUSD?: Scalars['BigDecimal']
    feeTo?: Scalars['Bytes']
    feeLiquidity?: Scalars['BigDecimal']
    __typename: 'Mint'
}

export type Mint_orderBy = 'id' | 'transaction' | 'timestamp' | 'pair' | 'to' | 'liquidity' | 'sender' | 'amount0' | 'amount1' | 'logIndex' | 'amountUSD' | 'feeTo' | 'feeLiquidity'

export type OrderDirection = 'asc' | 'desc'

export interface Pair {
    id: Scalars['ID']
    token0: Token
    token1: Token
    reserve0: Scalars['BigDecimal']
    reserve1: Scalars['BigDecimal']
    totalSupply: Scalars['BigDecimal']
    reserveETH: Scalars['BigDecimal']
    reserveUSD: Scalars['BigDecimal']
    trackedReserveETH: Scalars['BigDecimal']
    token0Price: Scalars['BigDecimal']
    token1Price: Scalars['BigDecimal']
    volumeToken0: Scalars['BigDecimal']
    volumeToken1: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    createdAtTimestamp: Scalars['BigInt']
    createdAtBlockNumber: Scalars['BigInt']
    liquidityProviderCount: Scalars['BigInt']
    __typename: 'Pair'
}

export interface PairDayData {
    id: Scalars['ID']
    date: Scalars['Int']
    pairAddress: Scalars['Bytes']
    token0: Token
    token1: Token
    reserve0: Scalars['BigDecimal']
    reserve1: Scalars['BigDecimal']
    totalSupply: Scalars['BigDecimal']
    reserveUSD: Scalars['BigDecimal']
    dailyVolumeToken0: Scalars['BigDecimal']
    dailyVolumeToken1: Scalars['BigDecimal']
    dailyVolumeUSD: Scalars['BigDecimal']
    dailyTxns: Scalars['BigInt']
    __typename: 'PairDayData'
}

export type PairDayData_orderBy = 'id' | 'date' | 'pairAddress' | 'token0' | 'token1' | 'reserve0' | 'reserve1' | 'totalSupply' | 'reserveUSD' | 'dailyVolumeToken0' | 'dailyVolumeToken1' | 'dailyVolumeUSD' | 'dailyTxns'

export interface PairHourData {
    id: Scalars['ID']
    hourStartUnix: Scalars['Int']
    pair: Pair
    reserve0: Scalars['BigDecimal']
    reserve1: Scalars['BigDecimal']
    reserveUSD: Scalars['BigDecimal']
    hourlyVolumeToken0: Scalars['BigDecimal']
    hourlyVolumeToken1: Scalars['BigDecimal']
    hourlyVolumeUSD: Scalars['BigDecimal']
    hourlyTxns: Scalars['BigInt']
    __typename: 'PairHourData'
}

export type PairHourData_orderBy = 'id' | 'hourStartUnix' | 'pair' | 'reserve0' | 'reserve1' | 'reserveUSD' | 'hourlyVolumeToken0' | 'hourlyVolumeToken1' | 'hourlyVolumeUSD' | 'hourlyTxns'

export type Pair_orderBy = 'id' | 'token0' | 'token1' | 'reserve0' | 'reserve1' | 'totalSupply' | 'reserveETH' | 'reserveUSD' | 'trackedReserveETH' | 'token0Price' | 'token1Price' | 'volumeToken0' | 'volumeToken1' | 'volumeUSD' | 'untrackedVolumeUSD' | 'txCount' | 'createdAtTimestamp' | 'createdAtBlockNumber' | 'liquidityProviderCount'

export interface Query {
    uniswapFactory?: UniswapFactory
    uniswapFactories: UniswapFactory[]
    token?: Token
    tokens: Token[]
    pair?: Pair
    pairs: Pair[]
    user?: User
    users: User[]
    liquidityPosition?: LiquidityPosition
    liquidityPositions: LiquidityPosition[]
    liquidityPositionSnapshot?: LiquidityPositionSnapshot
    liquidityPositionSnapshots: LiquidityPositionSnapshot[]
    transaction?: Transaction
    transactions: Transaction[]
    mint?: Mint
    mints: Mint[]
    burn?: Burn
    burns: Burn[]
    swap?: Swap
    swaps: Swap[]
    bundle?: Bundle
    bundles: Bundle[]
    uniswapDayData?: UniswapDayData
    uniswapDayDatas: UniswapDayData[]
    pairHourData?: PairHourData
    pairHourDatas: PairHourData[]
    pairDayData?: PairDayData
    pairDayDatas: PairDayData[]
    tokenDayData?: TokenDayData
    tokenDayDatas: TokenDayData[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Query'
}

export interface Subscription {
    uniswapFactory?: UniswapFactory
    uniswapFactories: UniswapFactory[]
    token?: Token
    tokens: Token[]
    pair?: Pair
    pairs: Pair[]
    user?: User
    users: User[]
    liquidityPosition?: LiquidityPosition
    liquidityPositions: LiquidityPosition[]
    liquidityPositionSnapshot?: LiquidityPositionSnapshot
    liquidityPositionSnapshots: LiquidityPositionSnapshot[]
    transaction?: Transaction
    transactions: Transaction[]
    mint?: Mint
    mints: Mint[]
    burn?: Burn
    burns: Burn[]
    swap?: Swap
    swaps: Swap[]
    bundle?: Bundle
    bundles: Bundle[]
    uniswapDayData?: UniswapDayData
    uniswapDayDatas: UniswapDayData[]
    pairHourData?: PairHourData
    pairHourDatas: PairHourData[]
    pairDayData?: PairDayData
    pairDayDatas: PairDayData[]
    tokenDayData?: TokenDayData
    tokenDayDatas: TokenDayData[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Subscription'
}

export interface Swap {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pair: Pair
    sender: Scalars['Bytes']
    amount0In: Scalars['BigDecimal']
    amount1In: Scalars['BigDecimal']
    amount0Out: Scalars['BigDecimal']
    amount1Out: Scalars['BigDecimal']
    to: Scalars['Bytes']
    logIndex?: Scalars['BigInt']
    amountUSD: Scalars['BigDecimal']
    __typename: 'Swap'
}

export type Swap_orderBy = 'id' | 'transaction' | 'timestamp' | 'pair' | 'sender' | 'amount0In' | 'amount1In' | 'amount0Out' | 'amount1Out' | 'to' | 'logIndex' | 'amountUSD'

export interface Token {
    id: Scalars['ID']
    symbol: Scalars['String']
    name: Scalars['String']
    decimals: Scalars['BigInt']
    totalSupply: Scalars['BigInt']
    tradeVolume: Scalars['BigDecimal']
    tradeVolumeUSD: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    totalLiquidity: Scalars['BigDecimal']
    derivedETH?: Scalars['BigDecimal']
    __typename: 'Token'
}

export interface TokenDayData {
    id: Scalars['ID']
    date: Scalars['Int']
    token: Token
    dailyVolumeToken: Scalars['BigDecimal']
    dailyVolumeETH: Scalars['BigDecimal']
    dailyVolumeUSD: Scalars['BigDecimal']
    dailyTxns: Scalars['BigInt']
    totalLiquidityToken: Scalars['BigDecimal']
    totalLiquidityETH: Scalars['BigDecimal']
    totalLiquidityUSD: Scalars['BigDecimal']
    priceUSD: Scalars['BigDecimal']
    __typename: 'TokenDayData'
}

export type TokenDayData_orderBy = 'id' | 'date' | 'token' | 'dailyVolumeToken' | 'dailyVolumeETH' | 'dailyVolumeUSD' | 'dailyTxns' | 'totalLiquidityToken' | 'totalLiquidityETH' | 'totalLiquidityUSD' | 'priceUSD'

export type Token_orderBy = 'id' | 'symbol' | 'name' | 'decimals' | 'totalSupply' | 'tradeVolume' | 'tradeVolumeUSD' | 'untrackedVolumeUSD' | 'txCount' | 'totalLiquidity' | 'derivedETH'

export interface Transaction {
    id: Scalars['ID']
    blockNumber: Scalars['BigInt']
    timestamp: Scalars['BigInt']
    mints: (Mint | undefined)[]
    burns: (Burn | undefined)[]
    swaps: (Swap | undefined)[]
    __typename: 'Transaction'
}

export type Transaction_orderBy = 'id' | 'blockNumber' | 'timestamp' | 'mints' | 'burns' | 'swaps'

export interface UniswapDayData {
    id: Scalars['ID']
    date: Scalars['Int']
    dailyVolumeETH: Scalars['BigDecimal']
    dailyVolumeUSD: Scalars['BigDecimal']
    dailyVolumeUntracked: Scalars['BigDecimal']
    totalVolumeETH: Scalars['BigDecimal']
    totalLiquidityETH: Scalars['BigDecimal']
    totalVolumeUSD: Scalars['BigDecimal']
    totalLiquidityUSD: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    __typename: 'UniswapDayData'
}

export type UniswapDayData_orderBy = 'id' | 'date' | 'dailyVolumeETH' | 'dailyVolumeUSD' | 'dailyVolumeUntracked' | 'totalVolumeETH' | 'totalLiquidityETH' | 'totalVolumeUSD' | 'totalLiquidityUSD' | 'txCount'

export interface UniswapFactory {
    id: Scalars['ID']
    pairCount: Scalars['Int']
    totalVolumeUSD: Scalars['BigDecimal']
    totalVolumeETH: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    totalLiquidityUSD: Scalars['BigDecimal']
    totalLiquidityETH: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    __typename: 'UniswapFactory'
}

export type UniswapFactory_orderBy = 'id' | 'pairCount' | 'totalVolumeUSD' | 'totalVolumeETH' | 'untrackedVolumeUSD' | 'totalLiquidityUSD' | 'totalLiquidityETH' | 'txCount'

export interface User {
    id: Scalars['ID']
    liquidityPositions?: LiquidityPosition[]
    usdSwapped: Scalars['BigDecimal']
    __typename: 'User'
}

export type User_orderBy = 'id' | 'liquidityPositions' | 'usdSwapped'

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

export interface Block_height {hash?: (Scalars['Bytes'] | null),number?: (Scalars['Int'] | null)}

export interface BundleRequest{
    id?: boolean | number
    ethPrice?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Bundle_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),ethPrice?: (Scalars['BigDecimal'] | null),ethPrice_not?: (Scalars['BigDecimal'] | null),ethPrice_gt?: (Scalars['BigDecimal'] | null),ethPrice_lt?: (Scalars['BigDecimal'] | null),ethPrice_gte?: (Scalars['BigDecimal'] | null),ethPrice_lte?: (Scalars['BigDecimal'] | null),ethPrice_in?: (Scalars['BigDecimal'][] | null),ethPrice_not_in?: (Scalars['BigDecimal'][] | null)}

export interface BurnRequest{
    id?: boolean | number
    transaction?: TransactionRequest
    timestamp?: boolean | number
    pair?: PairRequest
    liquidity?: boolean | number
    sender?: boolean | number
    amount0?: boolean | number
    amount1?: boolean | number
    to?: boolean | number
    logIndex?: boolean | number
    amountUSD?: boolean | number
    needsComplete?: boolean | number
    feeTo?: boolean | number
    feeLiquidity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Burn_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),pair?: (Scalars['String'] | null),pair_not?: (Scalars['String'] | null),pair_gt?: (Scalars['String'] | null),pair_lt?: (Scalars['String'] | null),pair_gte?: (Scalars['String'] | null),pair_lte?: (Scalars['String'] | null),pair_in?: (Scalars['String'][] | null),pair_not_in?: (Scalars['String'][] | null),pair_contains?: (Scalars['String'] | null),pair_not_contains?: (Scalars['String'] | null),pair_starts_with?: (Scalars['String'] | null),pair_not_starts_with?: (Scalars['String'] | null),pair_ends_with?: (Scalars['String'] | null),pair_not_ends_with?: (Scalars['String'] | null),liquidity?: (Scalars['BigDecimal'] | null),liquidity_not?: (Scalars['BigDecimal'] | null),liquidity_gt?: (Scalars['BigDecimal'] | null),liquidity_lt?: (Scalars['BigDecimal'] | null),liquidity_gte?: (Scalars['BigDecimal'] | null),liquidity_lte?: (Scalars['BigDecimal'] | null),liquidity_in?: (Scalars['BigDecimal'][] | null),liquidity_not_in?: (Scalars['BigDecimal'][] | null),sender?: (Scalars['Bytes'] | null),sender_not?: (Scalars['Bytes'] | null),sender_in?: (Scalars['Bytes'][] | null),sender_not_in?: (Scalars['Bytes'][] | null),sender_contains?: (Scalars['Bytes'] | null),sender_not_contains?: (Scalars['Bytes'] | null),amount0?: (Scalars['BigDecimal'] | null),amount0_not?: (Scalars['BigDecimal'] | null),amount0_gt?: (Scalars['BigDecimal'] | null),amount0_lt?: (Scalars['BigDecimal'] | null),amount0_gte?: (Scalars['BigDecimal'] | null),amount0_lte?: (Scalars['BigDecimal'] | null),amount0_in?: (Scalars['BigDecimal'][] | null),amount0_not_in?: (Scalars['BigDecimal'][] | null),amount1?: (Scalars['BigDecimal'] | null),amount1_not?: (Scalars['BigDecimal'] | null),amount1_gt?: (Scalars['BigDecimal'] | null),amount1_lt?: (Scalars['BigDecimal'] | null),amount1_gte?: (Scalars['BigDecimal'] | null),amount1_lte?: (Scalars['BigDecimal'] | null),amount1_in?: (Scalars['BigDecimal'][] | null),amount1_not_in?: (Scalars['BigDecimal'][] | null),to?: (Scalars['Bytes'] | null),to_not?: (Scalars['Bytes'] | null),to_in?: (Scalars['Bytes'][] | null),to_not_in?: (Scalars['Bytes'][] | null),to_contains?: (Scalars['Bytes'] | null),to_not_contains?: (Scalars['Bytes'] | null),logIndex?: (Scalars['BigInt'] | null),logIndex_not?: (Scalars['BigInt'] | null),logIndex_gt?: (Scalars['BigInt'] | null),logIndex_lt?: (Scalars['BigInt'] | null),logIndex_gte?: (Scalars['BigInt'] | null),logIndex_lte?: (Scalars['BigInt'] | null),logIndex_in?: (Scalars['BigInt'][] | null),logIndex_not_in?: (Scalars['BigInt'][] | null),amountUSD?: (Scalars['BigDecimal'] | null),amountUSD_not?: (Scalars['BigDecimal'] | null),amountUSD_gt?: (Scalars['BigDecimal'] | null),amountUSD_lt?: (Scalars['BigDecimal'] | null),amountUSD_gte?: (Scalars['BigDecimal'] | null),amountUSD_lte?: (Scalars['BigDecimal'] | null),amountUSD_in?: (Scalars['BigDecimal'][] | null),amountUSD_not_in?: (Scalars['BigDecimal'][] | null),needsComplete?: (Scalars['Boolean'] | null),needsComplete_not?: (Scalars['Boolean'] | null),needsComplete_in?: (Scalars['Boolean'][] | null),needsComplete_not_in?: (Scalars['Boolean'][] | null),feeTo?: (Scalars['Bytes'] | null),feeTo_not?: (Scalars['Bytes'] | null),feeTo_in?: (Scalars['Bytes'][] | null),feeTo_not_in?: (Scalars['Bytes'][] | null),feeTo_contains?: (Scalars['Bytes'] | null),feeTo_not_contains?: (Scalars['Bytes'] | null),feeLiquidity?: (Scalars['BigDecimal'] | null),feeLiquidity_not?: (Scalars['BigDecimal'] | null),feeLiquidity_gt?: (Scalars['BigDecimal'] | null),feeLiquidity_lt?: (Scalars['BigDecimal'] | null),feeLiquidity_gte?: (Scalars['BigDecimal'] | null),feeLiquidity_lte?: (Scalars['BigDecimal'] | null),feeLiquidity_in?: (Scalars['BigDecimal'][] | null),feeLiquidity_not_in?: (Scalars['BigDecimal'][] | null)}

export interface LiquidityPositionRequest{
    id?: boolean | number
    user?: UserRequest
    pair?: PairRequest
    liquidityTokenBalance?: boolean | number
    historicalSnapshots?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPositionSnapshot_filter | null)},LiquidityPositionSnapshotRequest] | LiquidityPositionSnapshotRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LiquidityPositionSnapshotRequest{
    id?: boolean | number
    liquidityPosition?: LiquidityPositionRequest
    timestamp?: boolean | number
    block?: boolean | number
    user?: UserRequest
    pair?: PairRequest
    token0PriceUSD?: boolean | number
    token1PriceUSD?: boolean | number
    reserve0?: boolean | number
    reserve1?: boolean | number
    reserveUSD?: boolean | number
    liquidityTokenTotalSupply?: boolean | number
    liquidityTokenBalance?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LiquidityPositionSnapshot_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),liquidityPosition?: (Scalars['String'] | null),liquidityPosition_not?: (Scalars['String'] | null),liquidityPosition_gt?: (Scalars['String'] | null),liquidityPosition_lt?: (Scalars['String'] | null),liquidityPosition_gte?: (Scalars['String'] | null),liquidityPosition_lte?: (Scalars['String'] | null),liquidityPosition_in?: (Scalars['String'][] | null),liquidityPosition_not_in?: (Scalars['String'][] | null),liquidityPosition_contains?: (Scalars['String'] | null),liquidityPosition_not_contains?: (Scalars['String'] | null),liquidityPosition_starts_with?: (Scalars['String'] | null),liquidityPosition_not_starts_with?: (Scalars['String'] | null),liquidityPosition_ends_with?: (Scalars['String'] | null),liquidityPosition_not_ends_with?: (Scalars['String'] | null),timestamp?: (Scalars['Int'] | null),timestamp_not?: (Scalars['Int'] | null),timestamp_gt?: (Scalars['Int'] | null),timestamp_lt?: (Scalars['Int'] | null),timestamp_gte?: (Scalars['Int'] | null),timestamp_lte?: (Scalars['Int'] | null),timestamp_in?: (Scalars['Int'][] | null),timestamp_not_in?: (Scalars['Int'][] | null),block?: (Scalars['Int'] | null),block_not?: (Scalars['Int'] | null),block_gt?: (Scalars['Int'] | null),block_lt?: (Scalars['Int'] | null),block_gte?: (Scalars['Int'] | null),block_lte?: (Scalars['Int'] | null),block_in?: (Scalars['Int'][] | null),block_not_in?: (Scalars['Int'][] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),pair?: (Scalars['String'] | null),pair_not?: (Scalars['String'] | null),pair_gt?: (Scalars['String'] | null),pair_lt?: (Scalars['String'] | null),pair_gte?: (Scalars['String'] | null),pair_lte?: (Scalars['String'] | null),pair_in?: (Scalars['String'][] | null),pair_not_in?: (Scalars['String'][] | null),pair_contains?: (Scalars['String'] | null),pair_not_contains?: (Scalars['String'] | null),pair_starts_with?: (Scalars['String'] | null),pair_not_starts_with?: (Scalars['String'] | null),pair_ends_with?: (Scalars['String'] | null),pair_not_ends_with?: (Scalars['String'] | null),token0PriceUSD?: (Scalars['BigDecimal'] | null),token0PriceUSD_not?: (Scalars['BigDecimal'] | null),token0PriceUSD_gt?: (Scalars['BigDecimal'] | null),token0PriceUSD_lt?: (Scalars['BigDecimal'] | null),token0PriceUSD_gte?: (Scalars['BigDecimal'] | null),token0PriceUSD_lte?: (Scalars['BigDecimal'] | null),token0PriceUSD_in?: (Scalars['BigDecimal'][] | null),token0PriceUSD_not_in?: (Scalars['BigDecimal'][] | null),token1PriceUSD?: (Scalars['BigDecimal'] | null),token1PriceUSD_not?: (Scalars['BigDecimal'] | null),token1PriceUSD_gt?: (Scalars['BigDecimal'] | null),token1PriceUSD_lt?: (Scalars['BigDecimal'] | null),token1PriceUSD_gte?: (Scalars['BigDecimal'] | null),token1PriceUSD_lte?: (Scalars['BigDecimal'] | null),token1PriceUSD_in?: (Scalars['BigDecimal'][] | null),token1PriceUSD_not_in?: (Scalars['BigDecimal'][] | null),reserve0?: (Scalars['BigDecimal'] | null),reserve0_not?: (Scalars['BigDecimal'] | null),reserve0_gt?: (Scalars['BigDecimal'] | null),reserve0_lt?: (Scalars['BigDecimal'] | null),reserve0_gte?: (Scalars['BigDecimal'] | null),reserve0_lte?: (Scalars['BigDecimal'] | null),reserve0_in?: (Scalars['BigDecimal'][] | null),reserve0_not_in?: (Scalars['BigDecimal'][] | null),reserve1?: (Scalars['BigDecimal'] | null),reserve1_not?: (Scalars['BigDecimal'] | null),reserve1_gt?: (Scalars['BigDecimal'] | null),reserve1_lt?: (Scalars['BigDecimal'] | null),reserve1_gte?: (Scalars['BigDecimal'] | null),reserve1_lte?: (Scalars['BigDecimal'] | null),reserve1_in?: (Scalars['BigDecimal'][] | null),reserve1_not_in?: (Scalars['BigDecimal'][] | null),reserveUSD?: (Scalars['BigDecimal'] | null),reserveUSD_not?: (Scalars['BigDecimal'] | null),reserveUSD_gt?: (Scalars['BigDecimal'] | null),reserveUSD_lt?: (Scalars['BigDecimal'] | null),reserveUSD_gte?: (Scalars['BigDecimal'] | null),reserveUSD_lte?: (Scalars['BigDecimal'] | null),reserveUSD_in?: (Scalars['BigDecimal'][] | null),reserveUSD_not_in?: (Scalars['BigDecimal'][] | null),liquidityTokenTotalSupply?: (Scalars['BigDecimal'] | null),liquidityTokenTotalSupply_not?: (Scalars['BigDecimal'] | null),liquidityTokenTotalSupply_gt?: (Scalars['BigDecimal'] | null),liquidityTokenTotalSupply_lt?: (Scalars['BigDecimal'] | null),liquidityTokenTotalSupply_gte?: (Scalars['BigDecimal'] | null),liquidityTokenTotalSupply_lte?: (Scalars['BigDecimal'] | null),liquidityTokenTotalSupply_in?: (Scalars['BigDecimal'][] | null),liquidityTokenTotalSupply_not_in?: (Scalars['BigDecimal'][] | null),liquidityTokenBalance?: (Scalars['BigDecimal'] | null),liquidityTokenBalance_not?: (Scalars['BigDecimal'] | null),liquidityTokenBalance_gt?: (Scalars['BigDecimal'] | null),liquidityTokenBalance_lt?: (Scalars['BigDecimal'] | null),liquidityTokenBalance_gte?: (Scalars['BigDecimal'] | null),liquidityTokenBalance_lte?: (Scalars['BigDecimal'] | null),liquidityTokenBalance_in?: (Scalars['BigDecimal'][] | null),liquidityTokenBalance_not_in?: (Scalars['BigDecimal'][] | null)}

export interface LiquidityPosition_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),user?: (Scalars['String'] | null),user_not?: (Scalars['String'] | null),user_gt?: (Scalars['String'] | null),user_lt?: (Scalars['String'] | null),user_gte?: (Scalars['String'] | null),user_lte?: (Scalars['String'] | null),user_in?: (Scalars['String'][] | null),user_not_in?: (Scalars['String'][] | null),user_contains?: (Scalars['String'] | null),user_not_contains?: (Scalars['String'] | null),user_starts_with?: (Scalars['String'] | null),user_not_starts_with?: (Scalars['String'] | null),user_ends_with?: (Scalars['String'] | null),user_not_ends_with?: (Scalars['String'] | null),pair?: (Scalars['String'] | null),pair_not?: (Scalars['String'] | null),pair_gt?: (Scalars['String'] | null),pair_lt?: (Scalars['String'] | null),pair_gte?: (Scalars['String'] | null),pair_lte?: (Scalars['String'] | null),pair_in?: (Scalars['String'][] | null),pair_not_in?: (Scalars['String'][] | null),pair_contains?: (Scalars['String'] | null),pair_not_contains?: (Scalars['String'] | null),pair_starts_with?: (Scalars['String'] | null),pair_not_starts_with?: (Scalars['String'] | null),pair_ends_with?: (Scalars['String'] | null),pair_not_ends_with?: (Scalars['String'] | null),liquidityTokenBalance?: (Scalars['BigDecimal'] | null),liquidityTokenBalance_not?: (Scalars['BigDecimal'] | null),liquidityTokenBalance_gt?: (Scalars['BigDecimal'] | null),liquidityTokenBalance_lt?: (Scalars['BigDecimal'] | null),liquidityTokenBalance_gte?: (Scalars['BigDecimal'] | null),liquidityTokenBalance_lte?: (Scalars['BigDecimal'] | null),liquidityTokenBalance_in?: (Scalars['BigDecimal'][] | null),liquidityTokenBalance_not_in?: (Scalars['BigDecimal'][] | null)}

export interface MintRequest{
    id?: boolean | number
    transaction?: TransactionRequest
    timestamp?: boolean | number
    pair?: PairRequest
    to?: boolean | number
    liquidity?: boolean | number
    sender?: boolean | number
    amount0?: boolean | number
    amount1?: boolean | number
    logIndex?: boolean | number
    amountUSD?: boolean | number
    feeTo?: boolean | number
    feeLiquidity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Mint_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),pair?: (Scalars['String'] | null),pair_not?: (Scalars['String'] | null),pair_gt?: (Scalars['String'] | null),pair_lt?: (Scalars['String'] | null),pair_gte?: (Scalars['String'] | null),pair_lte?: (Scalars['String'] | null),pair_in?: (Scalars['String'][] | null),pair_not_in?: (Scalars['String'][] | null),pair_contains?: (Scalars['String'] | null),pair_not_contains?: (Scalars['String'] | null),pair_starts_with?: (Scalars['String'] | null),pair_not_starts_with?: (Scalars['String'] | null),pair_ends_with?: (Scalars['String'] | null),pair_not_ends_with?: (Scalars['String'] | null),to?: (Scalars['Bytes'] | null),to_not?: (Scalars['Bytes'] | null),to_in?: (Scalars['Bytes'][] | null),to_not_in?: (Scalars['Bytes'][] | null),to_contains?: (Scalars['Bytes'] | null),to_not_contains?: (Scalars['Bytes'] | null),liquidity?: (Scalars['BigDecimal'] | null),liquidity_not?: (Scalars['BigDecimal'] | null),liquidity_gt?: (Scalars['BigDecimal'] | null),liquidity_lt?: (Scalars['BigDecimal'] | null),liquidity_gte?: (Scalars['BigDecimal'] | null),liquidity_lte?: (Scalars['BigDecimal'] | null),liquidity_in?: (Scalars['BigDecimal'][] | null),liquidity_not_in?: (Scalars['BigDecimal'][] | null),sender?: (Scalars['Bytes'] | null),sender_not?: (Scalars['Bytes'] | null),sender_in?: (Scalars['Bytes'][] | null),sender_not_in?: (Scalars['Bytes'][] | null),sender_contains?: (Scalars['Bytes'] | null),sender_not_contains?: (Scalars['Bytes'] | null),amount0?: (Scalars['BigDecimal'] | null),amount0_not?: (Scalars['BigDecimal'] | null),amount0_gt?: (Scalars['BigDecimal'] | null),amount0_lt?: (Scalars['BigDecimal'] | null),amount0_gte?: (Scalars['BigDecimal'] | null),amount0_lte?: (Scalars['BigDecimal'] | null),amount0_in?: (Scalars['BigDecimal'][] | null),amount0_not_in?: (Scalars['BigDecimal'][] | null),amount1?: (Scalars['BigDecimal'] | null),amount1_not?: (Scalars['BigDecimal'] | null),amount1_gt?: (Scalars['BigDecimal'] | null),amount1_lt?: (Scalars['BigDecimal'] | null),amount1_gte?: (Scalars['BigDecimal'] | null),amount1_lte?: (Scalars['BigDecimal'] | null),amount1_in?: (Scalars['BigDecimal'][] | null),amount1_not_in?: (Scalars['BigDecimal'][] | null),logIndex?: (Scalars['BigInt'] | null),logIndex_not?: (Scalars['BigInt'] | null),logIndex_gt?: (Scalars['BigInt'] | null),logIndex_lt?: (Scalars['BigInt'] | null),logIndex_gte?: (Scalars['BigInt'] | null),logIndex_lte?: (Scalars['BigInt'] | null),logIndex_in?: (Scalars['BigInt'][] | null),logIndex_not_in?: (Scalars['BigInt'][] | null),amountUSD?: (Scalars['BigDecimal'] | null),amountUSD_not?: (Scalars['BigDecimal'] | null),amountUSD_gt?: (Scalars['BigDecimal'] | null),amountUSD_lt?: (Scalars['BigDecimal'] | null),amountUSD_gte?: (Scalars['BigDecimal'] | null),amountUSD_lte?: (Scalars['BigDecimal'] | null),amountUSD_in?: (Scalars['BigDecimal'][] | null),amountUSD_not_in?: (Scalars['BigDecimal'][] | null),feeTo?: (Scalars['Bytes'] | null),feeTo_not?: (Scalars['Bytes'] | null),feeTo_in?: (Scalars['Bytes'][] | null),feeTo_not_in?: (Scalars['Bytes'][] | null),feeTo_contains?: (Scalars['Bytes'] | null),feeTo_not_contains?: (Scalars['Bytes'] | null),feeLiquidity?: (Scalars['BigDecimal'] | null),feeLiquidity_not?: (Scalars['BigDecimal'] | null),feeLiquidity_gt?: (Scalars['BigDecimal'] | null),feeLiquidity_lt?: (Scalars['BigDecimal'] | null),feeLiquidity_gte?: (Scalars['BigDecimal'] | null),feeLiquidity_lte?: (Scalars['BigDecimal'] | null),feeLiquidity_in?: (Scalars['BigDecimal'][] | null),feeLiquidity_not_in?: (Scalars['BigDecimal'][] | null)}

export interface PairRequest{
    id?: boolean | number
    token0?: TokenRequest
    token1?: TokenRequest
    reserve0?: boolean | number
    reserve1?: boolean | number
    totalSupply?: boolean | number
    reserveETH?: boolean | number
    reserveUSD?: boolean | number
    trackedReserveETH?: boolean | number
    token0Price?: boolean | number
    token1Price?: boolean | number
    volumeToken0?: boolean | number
    volumeToken1?: boolean | number
    volumeUSD?: boolean | number
    untrackedVolumeUSD?: boolean | number
    txCount?: boolean | number
    createdAtTimestamp?: boolean | number
    createdAtBlockNumber?: boolean | number
    liquidityProviderCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PairDayDataRequest{
    id?: boolean | number
    date?: boolean | number
    pairAddress?: boolean | number
    token0?: TokenRequest
    token1?: TokenRequest
    reserve0?: boolean | number
    reserve1?: boolean | number
    totalSupply?: boolean | number
    reserveUSD?: boolean | number
    dailyVolumeToken0?: boolean | number
    dailyVolumeToken1?: boolean | number
    dailyVolumeUSD?: boolean | number
    dailyTxns?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PairDayData_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),date?: (Scalars['Int'] | null),date_not?: (Scalars['Int'] | null),date_gt?: (Scalars['Int'] | null),date_lt?: (Scalars['Int'] | null),date_gte?: (Scalars['Int'] | null),date_lte?: (Scalars['Int'] | null),date_in?: (Scalars['Int'][] | null),date_not_in?: (Scalars['Int'][] | null),pairAddress?: (Scalars['Bytes'] | null),pairAddress_not?: (Scalars['Bytes'] | null),pairAddress_in?: (Scalars['Bytes'][] | null),pairAddress_not_in?: (Scalars['Bytes'][] | null),pairAddress_contains?: (Scalars['Bytes'] | null),pairAddress_not_contains?: (Scalars['Bytes'] | null),token0?: (Scalars['String'] | null),token0_not?: (Scalars['String'] | null),token0_gt?: (Scalars['String'] | null),token0_lt?: (Scalars['String'] | null),token0_gte?: (Scalars['String'] | null),token0_lte?: (Scalars['String'] | null),token0_in?: (Scalars['String'][] | null),token0_not_in?: (Scalars['String'][] | null),token0_contains?: (Scalars['String'] | null),token0_not_contains?: (Scalars['String'] | null),token0_starts_with?: (Scalars['String'] | null),token0_not_starts_with?: (Scalars['String'] | null),token0_ends_with?: (Scalars['String'] | null),token0_not_ends_with?: (Scalars['String'] | null),token1?: (Scalars['String'] | null),token1_not?: (Scalars['String'] | null),token1_gt?: (Scalars['String'] | null),token1_lt?: (Scalars['String'] | null),token1_gte?: (Scalars['String'] | null),token1_lte?: (Scalars['String'] | null),token1_in?: (Scalars['String'][] | null),token1_not_in?: (Scalars['String'][] | null),token1_contains?: (Scalars['String'] | null),token1_not_contains?: (Scalars['String'] | null),token1_starts_with?: (Scalars['String'] | null),token1_not_starts_with?: (Scalars['String'] | null),token1_ends_with?: (Scalars['String'] | null),token1_not_ends_with?: (Scalars['String'] | null),reserve0?: (Scalars['BigDecimal'] | null),reserve0_not?: (Scalars['BigDecimal'] | null),reserve0_gt?: (Scalars['BigDecimal'] | null),reserve0_lt?: (Scalars['BigDecimal'] | null),reserve0_gte?: (Scalars['BigDecimal'] | null),reserve0_lte?: (Scalars['BigDecimal'] | null),reserve0_in?: (Scalars['BigDecimal'][] | null),reserve0_not_in?: (Scalars['BigDecimal'][] | null),reserve1?: (Scalars['BigDecimal'] | null),reserve1_not?: (Scalars['BigDecimal'] | null),reserve1_gt?: (Scalars['BigDecimal'] | null),reserve1_lt?: (Scalars['BigDecimal'] | null),reserve1_gte?: (Scalars['BigDecimal'] | null),reserve1_lte?: (Scalars['BigDecimal'] | null),reserve1_in?: (Scalars['BigDecimal'][] | null),reserve1_not_in?: (Scalars['BigDecimal'][] | null),totalSupply?: (Scalars['BigDecimal'] | null),totalSupply_not?: (Scalars['BigDecimal'] | null),totalSupply_gt?: (Scalars['BigDecimal'] | null),totalSupply_lt?: (Scalars['BigDecimal'] | null),totalSupply_gte?: (Scalars['BigDecimal'] | null),totalSupply_lte?: (Scalars['BigDecimal'] | null),totalSupply_in?: (Scalars['BigDecimal'][] | null),totalSupply_not_in?: (Scalars['BigDecimal'][] | null),reserveUSD?: (Scalars['BigDecimal'] | null),reserveUSD_not?: (Scalars['BigDecimal'] | null),reserveUSD_gt?: (Scalars['BigDecimal'] | null),reserveUSD_lt?: (Scalars['BigDecimal'] | null),reserveUSD_gte?: (Scalars['BigDecimal'] | null),reserveUSD_lte?: (Scalars['BigDecimal'] | null),reserveUSD_in?: (Scalars['BigDecimal'][] | null),reserveUSD_not_in?: (Scalars['BigDecimal'][] | null),dailyVolumeToken0?: (Scalars['BigDecimal'] | null),dailyVolumeToken0_not?: (Scalars['BigDecimal'] | null),dailyVolumeToken0_gt?: (Scalars['BigDecimal'] | null),dailyVolumeToken0_lt?: (Scalars['BigDecimal'] | null),dailyVolumeToken0_gte?: (Scalars['BigDecimal'] | null),dailyVolumeToken0_lte?: (Scalars['BigDecimal'] | null),dailyVolumeToken0_in?: (Scalars['BigDecimal'][] | null),dailyVolumeToken0_not_in?: (Scalars['BigDecimal'][] | null),dailyVolumeToken1?: (Scalars['BigDecimal'] | null),dailyVolumeToken1_not?: (Scalars['BigDecimal'] | null),dailyVolumeToken1_gt?: (Scalars['BigDecimal'] | null),dailyVolumeToken1_lt?: (Scalars['BigDecimal'] | null),dailyVolumeToken1_gte?: (Scalars['BigDecimal'] | null),dailyVolumeToken1_lte?: (Scalars['BigDecimal'] | null),dailyVolumeToken1_in?: (Scalars['BigDecimal'][] | null),dailyVolumeToken1_not_in?: (Scalars['BigDecimal'][] | null),dailyVolumeUSD?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_not?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_gt?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_lt?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_gte?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_lte?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_in?: (Scalars['BigDecimal'][] | null),dailyVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),dailyTxns?: (Scalars['BigInt'] | null),dailyTxns_not?: (Scalars['BigInt'] | null),dailyTxns_gt?: (Scalars['BigInt'] | null),dailyTxns_lt?: (Scalars['BigInt'] | null),dailyTxns_gte?: (Scalars['BigInt'] | null),dailyTxns_lte?: (Scalars['BigInt'] | null),dailyTxns_in?: (Scalars['BigInt'][] | null),dailyTxns_not_in?: (Scalars['BigInt'][] | null)}

export interface PairHourDataRequest{
    id?: boolean | number
    hourStartUnix?: boolean | number
    pair?: PairRequest
    reserve0?: boolean | number
    reserve1?: boolean | number
    reserveUSD?: boolean | number
    hourlyVolumeToken0?: boolean | number
    hourlyVolumeToken1?: boolean | number
    hourlyVolumeUSD?: boolean | number
    hourlyTxns?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PairHourData_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),hourStartUnix?: (Scalars['Int'] | null),hourStartUnix_not?: (Scalars['Int'] | null),hourStartUnix_gt?: (Scalars['Int'] | null),hourStartUnix_lt?: (Scalars['Int'] | null),hourStartUnix_gte?: (Scalars['Int'] | null),hourStartUnix_lte?: (Scalars['Int'] | null),hourStartUnix_in?: (Scalars['Int'][] | null),hourStartUnix_not_in?: (Scalars['Int'][] | null),pair?: (Scalars['String'] | null),pair_not?: (Scalars['String'] | null),pair_gt?: (Scalars['String'] | null),pair_lt?: (Scalars['String'] | null),pair_gte?: (Scalars['String'] | null),pair_lte?: (Scalars['String'] | null),pair_in?: (Scalars['String'][] | null),pair_not_in?: (Scalars['String'][] | null),pair_contains?: (Scalars['String'] | null),pair_not_contains?: (Scalars['String'] | null),pair_starts_with?: (Scalars['String'] | null),pair_not_starts_with?: (Scalars['String'] | null),pair_ends_with?: (Scalars['String'] | null),pair_not_ends_with?: (Scalars['String'] | null),reserve0?: (Scalars['BigDecimal'] | null),reserve0_not?: (Scalars['BigDecimal'] | null),reserve0_gt?: (Scalars['BigDecimal'] | null),reserve0_lt?: (Scalars['BigDecimal'] | null),reserve0_gte?: (Scalars['BigDecimal'] | null),reserve0_lte?: (Scalars['BigDecimal'] | null),reserve0_in?: (Scalars['BigDecimal'][] | null),reserve0_not_in?: (Scalars['BigDecimal'][] | null),reserve1?: (Scalars['BigDecimal'] | null),reserve1_not?: (Scalars['BigDecimal'] | null),reserve1_gt?: (Scalars['BigDecimal'] | null),reserve1_lt?: (Scalars['BigDecimal'] | null),reserve1_gte?: (Scalars['BigDecimal'] | null),reserve1_lte?: (Scalars['BigDecimal'] | null),reserve1_in?: (Scalars['BigDecimal'][] | null),reserve1_not_in?: (Scalars['BigDecimal'][] | null),reserveUSD?: (Scalars['BigDecimal'] | null),reserveUSD_not?: (Scalars['BigDecimal'] | null),reserveUSD_gt?: (Scalars['BigDecimal'] | null),reserveUSD_lt?: (Scalars['BigDecimal'] | null),reserveUSD_gte?: (Scalars['BigDecimal'] | null),reserveUSD_lte?: (Scalars['BigDecimal'] | null),reserveUSD_in?: (Scalars['BigDecimal'][] | null),reserveUSD_not_in?: (Scalars['BigDecimal'][] | null),hourlyVolumeToken0?: (Scalars['BigDecimal'] | null),hourlyVolumeToken0_not?: (Scalars['BigDecimal'] | null),hourlyVolumeToken0_gt?: (Scalars['BigDecimal'] | null),hourlyVolumeToken0_lt?: (Scalars['BigDecimal'] | null),hourlyVolumeToken0_gte?: (Scalars['BigDecimal'] | null),hourlyVolumeToken0_lte?: (Scalars['BigDecimal'] | null),hourlyVolumeToken0_in?: (Scalars['BigDecimal'][] | null),hourlyVolumeToken0_not_in?: (Scalars['BigDecimal'][] | null),hourlyVolumeToken1?: (Scalars['BigDecimal'] | null),hourlyVolumeToken1_not?: (Scalars['BigDecimal'] | null),hourlyVolumeToken1_gt?: (Scalars['BigDecimal'] | null),hourlyVolumeToken1_lt?: (Scalars['BigDecimal'] | null),hourlyVolumeToken1_gte?: (Scalars['BigDecimal'] | null),hourlyVolumeToken1_lte?: (Scalars['BigDecimal'] | null),hourlyVolumeToken1_in?: (Scalars['BigDecimal'][] | null),hourlyVolumeToken1_not_in?: (Scalars['BigDecimal'][] | null),hourlyVolumeUSD?: (Scalars['BigDecimal'] | null),hourlyVolumeUSD_not?: (Scalars['BigDecimal'] | null),hourlyVolumeUSD_gt?: (Scalars['BigDecimal'] | null),hourlyVolumeUSD_lt?: (Scalars['BigDecimal'] | null),hourlyVolumeUSD_gte?: (Scalars['BigDecimal'] | null),hourlyVolumeUSD_lte?: (Scalars['BigDecimal'] | null),hourlyVolumeUSD_in?: (Scalars['BigDecimal'][] | null),hourlyVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),hourlyTxns?: (Scalars['BigInt'] | null),hourlyTxns_not?: (Scalars['BigInt'] | null),hourlyTxns_gt?: (Scalars['BigInt'] | null),hourlyTxns_lt?: (Scalars['BigInt'] | null),hourlyTxns_gte?: (Scalars['BigInt'] | null),hourlyTxns_lte?: (Scalars['BigInt'] | null),hourlyTxns_in?: (Scalars['BigInt'][] | null),hourlyTxns_not_in?: (Scalars['BigInt'][] | null)}

export interface Pair_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),token0?: (Scalars['String'] | null),token0_not?: (Scalars['String'] | null),token0_gt?: (Scalars['String'] | null),token0_lt?: (Scalars['String'] | null),token0_gte?: (Scalars['String'] | null),token0_lte?: (Scalars['String'] | null),token0_in?: (Scalars['String'][] | null),token0_not_in?: (Scalars['String'][] | null),token0_contains?: (Scalars['String'] | null),token0_not_contains?: (Scalars['String'] | null),token0_starts_with?: (Scalars['String'] | null),token0_not_starts_with?: (Scalars['String'] | null),token0_ends_with?: (Scalars['String'] | null),token0_not_ends_with?: (Scalars['String'] | null),token1?: (Scalars['String'] | null),token1_not?: (Scalars['String'] | null),token1_gt?: (Scalars['String'] | null),token1_lt?: (Scalars['String'] | null),token1_gte?: (Scalars['String'] | null),token1_lte?: (Scalars['String'] | null),token1_in?: (Scalars['String'][] | null),token1_not_in?: (Scalars['String'][] | null),token1_contains?: (Scalars['String'] | null),token1_not_contains?: (Scalars['String'] | null),token1_starts_with?: (Scalars['String'] | null),token1_not_starts_with?: (Scalars['String'] | null),token1_ends_with?: (Scalars['String'] | null),token1_not_ends_with?: (Scalars['String'] | null),reserve0?: (Scalars['BigDecimal'] | null),reserve0_not?: (Scalars['BigDecimal'] | null),reserve0_gt?: (Scalars['BigDecimal'] | null),reserve0_lt?: (Scalars['BigDecimal'] | null),reserve0_gte?: (Scalars['BigDecimal'] | null),reserve0_lte?: (Scalars['BigDecimal'] | null),reserve0_in?: (Scalars['BigDecimal'][] | null),reserve0_not_in?: (Scalars['BigDecimal'][] | null),reserve1?: (Scalars['BigDecimal'] | null),reserve1_not?: (Scalars['BigDecimal'] | null),reserve1_gt?: (Scalars['BigDecimal'] | null),reserve1_lt?: (Scalars['BigDecimal'] | null),reserve1_gte?: (Scalars['BigDecimal'] | null),reserve1_lte?: (Scalars['BigDecimal'] | null),reserve1_in?: (Scalars['BigDecimal'][] | null),reserve1_not_in?: (Scalars['BigDecimal'][] | null),totalSupply?: (Scalars['BigDecimal'] | null),totalSupply_not?: (Scalars['BigDecimal'] | null),totalSupply_gt?: (Scalars['BigDecimal'] | null),totalSupply_lt?: (Scalars['BigDecimal'] | null),totalSupply_gte?: (Scalars['BigDecimal'] | null),totalSupply_lte?: (Scalars['BigDecimal'] | null),totalSupply_in?: (Scalars['BigDecimal'][] | null),totalSupply_not_in?: (Scalars['BigDecimal'][] | null),reserveETH?: (Scalars['BigDecimal'] | null),reserveETH_not?: (Scalars['BigDecimal'] | null),reserveETH_gt?: (Scalars['BigDecimal'] | null),reserveETH_lt?: (Scalars['BigDecimal'] | null),reserveETH_gte?: (Scalars['BigDecimal'] | null),reserveETH_lte?: (Scalars['BigDecimal'] | null),reserveETH_in?: (Scalars['BigDecimal'][] | null),reserveETH_not_in?: (Scalars['BigDecimal'][] | null),reserveUSD?: (Scalars['BigDecimal'] | null),reserveUSD_not?: (Scalars['BigDecimal'] | null),reserveUSD_gt?: (Scalars['BigDecimal'] | null),reserveUSD_lt?: (Scalars['BigDecimal'] | null),reserveUSD_gte?: (Scalars['BigDecimal'] | null),reserveUSD_lte?: (Scalars['BigDecimal'] | null),reserveUSD_in?: (Scalars['BigDecimal'][] | null),reserveUSD_not_in?: (Scalars['BigDecimal'][] | null),trackedReserveETH?: (Scalars['BigDecimal'] | null),trackedReserveETH_not?: (Scalars['BigDecimal'] | null),trackedReserveETH_gt?: (Scalars['BigDecimal'] | null),trackedReserveETH_lt?: (Scalars['BigDecimal'] | null),trackedReserveETH_gte?: (Scalars['BigDecimal'] | null),trackedReserveETH_lte?: (Scalars['BigDecimal'] | null),trackedReserveETH_in?: (Scalars['BigDecimal'][] | null),trackedReserveETH_not_in?: (Scalars['BigDecimal'][] | null),token0Price?: (Scalars['BigDecimal'] | null),token0Price_not?: (Scalars['BigDecimal'] | null),token0Price_gt?: (Scalars['BigDecimal'] | null),token0Price_lt?: (Scalars['BigDecimal'] | null),token0Price_gte?: (Scalars['BigDecimal'] | null),token0Price_lte?: (Scalars['BigDecimal'] | null),token0Price_in?: (Scalars['BigDecimal'][] | null),token0Price_not_in?: (Scalars['BigDecimal'][] | null),token1Price?: (Scalars['BigDecimal'] | null),token1Price_not?: (Scalars['BigDecimal'] | null),token1Price_gt?: (Scalars['BigDecimal'] | null),token1Price_lt?: (Scalars['BigDecimal'] | null),token1Price_gte?: (Scalars['BigDecimal'] | null),token1Price_lte?: (Scalars['BigDecimal'] | null),token1Price_in?: (Scalars['BigDecimal'][] | null),token1Price_not_in?: (Scalars['BigDecimal'][] | null),volumeToken0?: (Scalars['BigDecimal'] | null),volumeToken0_not?: (Scalars['BigDecimal'] | null),volumeToken0_gt?: (Scalars['BigDecimal'] | null),volumeToken0_lt?: (Scalars['BigDecimal'] | null),volumeToken0_gte?: (Scalars['BigDecimal'] | null),volumeToken0_lte?: (Scalars['BigDecimal'] | null),volumeToken0_in?: (Scalars['BigDecimal'][] | null),volumeToken0_not_in?: (Scalars['BigDecimal'][] | null),volumeToken1?: (Scalars['BigDecimal'] | null),volumeToken1_not?: (Scalars['BigDecimal'] | null),volumeToken1_gt?: (Scalars['BigDecimal'] | null),volumeToken1_lt?: (Scalars['BigDecimal'] | null),volumeToken1_gte?: (Scalars['BigDecimal'] | null),volumeToken1_lte?: (Scalars['BigDecimal'] | null),volumeToken1_in?: (Scalars['BigDecimal'][] | null),volumeToken1_not_in?: (Scalars['BigDecimal'][] | null),volumeUSD?: (Scalars['BigDecimal'] | null),volumeUSD_not?: (Scalars['BigDecimal'] | null),volumeUSD_gt?: (Scalars['BigDecimal'] | null),volumeUSD_lt?: (Scalars['BigDecimal'] | null),volumeUSD_gte?: (Scalars['BigDecimal'] | null),volumeUSD_lte?: (Scalars['BigDecimal'] | null),volumeUSD_in?: (Scalars['BigDecimal'][] | null),volumeUSD_not_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_not?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),txCount?: (Scalars['BigInt'] | null),txCount_not?: (Scalars['BigInt'] | null),txCount_gt?: (Scalars['BigInt'] | null),txCount_lt?: (Scalars['BigInt'] | null),txCount_gte?: (Scalars['BigInt'] | null),txCount_lte?: (Scalars['BigInt'] | null),txCount_in?: (Scalars['BigInt'][] | null),txCount_not_in?: (Scalars['BigInt'][] | null),createdAtTimestamp?: (Scalars['BigInt'] | null),createdAtTimestamp_not?: (Scalars['BigInt'] | null),createdAtTimestamp_gt?: (Scalars['BigInt'] | null),createdAtTimestamp_lt?: (Scalars['BigInt'] | null),createdAtTimestamp_gte?: (Scalars['BigInt'] | null),createdAtTimestamp_lte?: (Scalars['BigInt'] | null),createdAtTimestamp_in?: (Scalars['BigInt'][] | null),createdAtTimestamp_not_in?: (Scalars['BigInt'][] | null),createdAtBlockNumber?: (Scalars['BigInt'] | null),createdAtBlockNumber_not?: (Scalars['BigInt'] | null),createdAtBlockNumber_gt?: (Scalars['BigInt'] | null),createdAtBlockNumber_lt?: (Scalars['BigInt'] | null),createdAtBlockNumber_gte?: (Scalars['BigInt'] | null),createdAtBlockNumber_lte?: (Scalars['BigInt'] | null),createdAtBlockNumber_in?: (Scalars['BigInt'][] | null),createdAtBlockNumber_not_in?: (Scalars['BigInt'][] | null),liquidityProviderCount?: (Scalars['BigInt'] | null),liquidityProviderCount_not?: (Scalars['BigInt'] | null),liquidityProviderCount_gt?: (Scalars['BigInt'] | null),liquidityProviderCount_lt?: (Scalars['BigInt'] | null),liquidityProviderCount_gte?: (Scalars['BigInt'] | null),liquidityProviderCount_lte?: (Scalars['BigInt'] | null),liquidityProviderCount_in?: (Scalars['BigInt'][] | null),liquidityProviderCount_not_in?: (Scalars['BigInt'][] | null)}

export interface QueryRequest{
    uniswapFactory?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UniswapFactoryRequest]
    uniswapFactories?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapFactory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapFactory_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UniswapFactoryRequest]
    token?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenRequest]
    tokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenRequest]
    pair?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PairRequest]
    pairs?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pair_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pair_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PairRequest]
    user?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserRequest]
    users?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserRequest]
    liquidityPosition?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},LiquidityPositionRequest]
    liquidityPositions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPosition_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},LiquidityPositionRequest]
    liquidityPositionSnapshot?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},LiquidityPositionSnapshotRequest]
    liquidityPositionSnapshots?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPositionSnapshot_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},LiquidityPositionSnapshotRequest]
    transaction?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TransactionRequest]
    transactions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TransactionRequest]
    mint?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},MintRequest]
    mints?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},MintRequest]
    burn?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BurnRequest]
    burns?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BurnRequest]
    swap?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},SwapRequest]
    swaps?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},SwapRequest]
    bundle?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BundleRequest]
    bundles?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bundle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bundle_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BundleRequest]
    uniswapDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UniswapDayDataRequest]
    uniswapDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapDayData_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UniswapDayDataRequest]
    pairHourData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PairHourDataRequest]
    pairHourDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PairHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PairHourData_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PairHourDataRequest]
    pairDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PairDayDataRequest]
    pairDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PairDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PairDayData_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PairDayDataRequest]
    tokenDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenDayDataRequest]
    tokenDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenDayDataRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionRequest{
    uniswapFactory?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UniswapFactoryRequest]
    uniswapFactories?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapFactory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapFactory_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UniswapFactoryRequest]
    token?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenRequest]
    tokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenRequest]
    pair?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PairRequest]
    pairs?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pair_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pair_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PairRequest]
    user?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserRequest]
    users?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UserRequest]
    liquidityPosition?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},LiquidityPositionRequest]
    liquidityPositions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPosition_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},LiquidityPositionRequest]
    liquidityPositionSnapshot?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},LiquidityPositionSnapshotRequest]
    liquidityPositionSnapshots?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPositionSnapshot_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},LiquidityPositionSnapshotRequest]
    transaction?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TransactionRequest]
    transactions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TransactionRequest]
    mint?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},MintRequest]
    mints?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},MintRequest]
    burn?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BurnRequest]
    burns?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BurnRequest]
    swap?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},SwapRequest]
    swaps?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},SwapRequest]
    bundle?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BundleRequest]
    bundles?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bundle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bundle_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BundleRequest]
    uniswapDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UniswapDayDataRequest]
    uniswapDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapDayData_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},UniswapDayDataRequest]
    pairHourData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PairHourDataRequest]
    pairHourDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PairHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PairHourData_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PairHourDataRequest]
    pairDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PairDayDataRequest]
    pairDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PairDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PairDayData_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},PairDayDataRequest]
    tokenDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenDayDataRequest]
    tokenDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenDayDataRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SwapRequest{
    id?: boolean | number
    transaction?: TransactionRequest
    timestamp?: boolean | number
    pair?: PairRequest
    sender?: boolean | number
    amount0In?: boolean | number
    amount1In?: boolean | number
    amount0Out?: boolean | number
    amount1Out?: boolean | number
    to?: boolean | number
    logIndex?: boolean | number
    amountUSD?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Swap_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),pair?: (Scalars['String'] | null),pair_not?: (Scalars['String'] | null),pair_gt?: (Scalars['String'] | null),pair_lt?: (Scalars['String'] | null),pair_gte?: (Scalars['String'] | null),pair_lte?: (Scalars['String'] | null),pair_in?: (Scalars['String'][] | null),pair_not_in?: (Scalars['String'][] | null),pair_contains?: (Scalars['String'] | null),pair_not_contains?: (Scalars['String'] | null),pair_starts_with?: (Scalars['String'] | null),pair_not_starts_with?: (Scalars['String'] | null),pair_ends_with?: (Scalars['String'] | null),pair_not_ends_with?: (Scalars['String'] | null),sender?: (Scalars['Bytes'] | null),sender_not?: (Scalars['Bytes'] | null),sender_in?: (Scalars['Bytes'][] | null),sender_not_in?: (Scalars['Bytes'][] | null),sender_contains?: (Scalars['Bytes'] | null),sender_not_contains?: (Scalars['Bytes'] | null),amount0In?: (Scalars['BigDecimal'] | null),amount0In_not?: (Scalars['BigDecimal'] | null),amount0In_gt?: (Scalars['BigDecimal'] | null),amount0In_lt?: (Scalars['BigDecimal'] | null),amount0In_gte?: (Scalars['BigDecimal'] | null),amount0In_lte?: (Scalars['BigDecimal'] | null),amount0In_in?: (Scalars['BigDecimal'][] | null),amount0In_not_in?: (Scalars['BigDecimal'][] | null),amount1In?: (Scalars['BigDecimal'] | null),amount1In_not?: (Scalars['BigDecimal'] | null),amount1In_gt?: (Scalars['BigDecimal'] | null),amount1In_lt?: (Scalars['BigDecimal'] | null),amount1In_gte?: (Scalars['BigDecimal'] | null),amount1In_lte?: (Scalars['BigDecimal'] | null),amount1In_in?: (Scalars['BigDecimal'][] | null),amount1In_not_in?: (Scalars['BigDecimal'][] | null),amount0Out?: (Scalars['BigDecimal'] | null),amount0Out_not?: (Scalars['BigDecimal'] | null),amount0Out_gt?: (Scalars['BigDecimal'] | null),amount0Out_lt?: (Scalars['BigDecimal'] | null),amount0Out_gte?: (Scalars['BigDecimal'] | null),amount0Out_lte?: (Scalars['BigDecimal'] | null),amount0Out_in?: (Scalars['BigDecimal'][] | null),amount0Out_not_in?: (Scalars['BigDecimal'][] | null),amount1Out?: (Scalars['BigDecimal'] | null),amount1Out_not?: (Scalars['BigDecimal'] | null),amount1Out_gt?: (Scalars['BigDecimal'] | null),amount1Out_lt?: (Scalars['BigDecimal'] | null),amount1Out_gte?: (Scalars['BigDecimal'] | null),amount1Out_lte?: (Scalars['BigDecimal'] | null),amount1Out_in?: (Scalars['BigDecimal'][] | null),amount1Out_not_in?: (Scalars['BigDecimal'][] | null),to?: (Scalars['Bytes'] | null),to_not?: (Scalars['Bytes'] | null),to_in?: (Scalars['Bytes'][] | null),to_not_in?: (Scalars['Bytes'][] | null),to_contains?: (Scalars['Bytes'] | null),to_not_contains?: (Scalars['Bytes'] | null),logIndex?: (Scalars['BigInt'] | null),logIndex_not?: (Scalars['BigInt'] | null),logIndex_gt?: (Scalars['BigInt'] | null),logIndex_lt?: (Scalars['BigInt'] | null),logIndex_gte?: (Scalars['BigInt'] | null),logIndex_lte?: (Scalars['BigInt'] | null),logIndex_in?: (Scalars['BigInt'][] | null),logIndex_not_in?: (Scalars['BigInt'][] | null),amountUSD?: (Scalars['BigDecimal'] | null),amountUSD_not?: (Scalars['BigDecimal'] | null),amountUSD_gt?: (Scalars['BigDecimal'] | null),amountUSD_lt?: (Scalars['BigDecimal'] | null),amountUSD_gte?: (Scalars['BigDecimal'] | null),amountUSD_lte?: (Scalars['BigDecimal'] | null),amountUSD_in?: (Scalars['BigDecimal'][] | null),amountUSD_not_in?: (Scalars['BigDecimal'][] | null)}

export interface TokenRequest{
    id?: boolean | number
    symbol?: boolean | number
    name?: boolean | number
    decimals?: boolean | number
    totalSupply?: boolean | number
    tradeVolume?: boolean | number
    tradeVolumeUSD?: boolean | number
    untrackedVolumeUSD?: boolean | number
    txCount?: boolean | number
    totalLiquidity?: boolean | number
    derivedETH?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TokenDayDataRequest{
    id?: boolean | number
    date?: boolean | number
    token?: TokenRequest
    dailyVolumeToken?: boolean | number
    dailyVolumeETH?: boolean | number
    dailyVolumeUSD?: boolean | number
    dailyTxns?: boolean | number
    totalLiquidityToken?: boolean | number
    totalLiquidityETH?: boolean | number
    totalLiquidityUSD?: boolean | number
    priceUSD?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TokenDayData_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),date?: (Scalars['Int'] | null),date_not?: (Scalars['Int'] | null),date_gt?: (Scalars['Int'] | null),date_lt?: (Scalars['Int'] | null),date_gte?: (Scalars['Int'] | null),date_lte?: (Scalars['Int'] | null),date_in?: (Scalars['Int'][] | null),date_not_in?: (Scalars['Int'][] | null),token?: (Scalars['String'] | null),token_not?: (Scalars['String'] | null),token_gt?: (Scalars['String'] | null),token_lt?: (Scalars['String'] | null),token_gte?: (Scalars['String'] | null),token_lte?: (Scalars['String'] | null),token_in?: (Scalars['String'][] | null),token_not_in?: (Scalars['String'][] | null),token_contains?: (Scalars['String'] | null),token_not_contains?: (Scalars['String'] | null),token_starts_with?: (Scalars['String'] | null),token_not_starts_with?: (Scalars['String'] | null),token_ends_with?: (Scalars['String'] | null),token_not_ends_with?: (Scalars['String'] | null),dailyVolumeToken?: (Scalars['BigDecimal'] | null),dailyVolumeToken_not?: (Scalars['BigDecimal'] | null),dailyVolumeToken_gt?: (Scalars['BigDecimal'] | null),dailyVolumeToken_lt?: (Scalars['BigDecimal'] | null),dailyVolumeToken_gte?: (Scalars['BigDecimal'] | null),dailyVolumeToken_lte?: (Scalars['BigDecimal'] | null),dailyVolumeToken_in?: (Scalars['BigDecimal'][] | null),dailyVolumeToken_not_in?: (Scalars['BigDecimal'][] | null),dailyVolumeETH?: (Scalars['BigDecimal'] | null),dailyVolumeETH_not?: (Scalars['BigDecimal'] | null),dailyVolumeETH_gt?: (Scalars['BigDecimal'] | null),dailyVolumeETH_lt?: (Scalars['BigDecimal'] | null),dailyVolumeETH_gte?: (Scalars['BigDecimal'] | null),dailyVolumeETH_lte?: (Scalars['BigDecimal'] | null),dailyVolumeETH_in?: (Scalars['BigDecimal'][] | null),dailyVolumeETH_not_in?: (Scalars['BigDecimal'][] | null),dailyVolumeUSD?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_not?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_gt?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_lt?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_gte?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_lte?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_in?: (Scalars['BigDecimal'][] | null),dailyVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),dailyTxns?: (Scalars['BigInt'] | null),dailyTxns_not?: (Scalars['BigInt'] | null),dailyTxns_gt?: (Scalars['BigInt'] | null),dailyTxns_lt?: (Scalars['BigInt'] | null),dailyTxns_gte?: (Scalars['BigInt'] | null),dailyTxns_lte?: (Scalars['BigInt'] | null),dailyTxns_in?: (Scalars['BigInt'][] | null),dailyTxns_not_in?: (Scalars['BigInt'][] | null),totalLiquidityToken?: (Scalars['BigDecimal'] | null),totalLiquidityToken_not?: (Scalars['BigDecimal'] | null),totalLiquidityToken_gt?: (Scalars['BigDecimal'] | null),totalLiquidityToken_lt?: (Scalars['BigDecimal'] | null),totalLiquidityToken_gte?: (Scalars['BigDecimal'] | null),totalLiquidityToken_lte?: (Scalars['BigDecimal'] | null),totalLiquidityToken_in?: (Scalars['BigDecimal'][] | null),totalLiquidityToken_not_in?: (Scalars['BigDecimal'][] | null),totalLiquidityETH?: (Scalars['BigDecimal'] | null),totalLiquidityETH_not?: (Scalars['BigDecimal'] | null),totalLiquidityETH_gt?: (Scalars['BigDecimal'] | null),totalLiquidityETH_lt?: (Scalars['BigDecimal'] | null),totalLiquidityETH_gte?: (Scalars['BigDecimal'] | null),totalLiquidityETH_lte?: (Scalars['BigDecimal'] | null),totalLiquidityETH_in?: (Scalars['BigDecimal'][] | null),totalLiquidityETH_not_in?: (Scalars['BigDecimal'][] | null),totalLiquidityUSD?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_not?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_gt?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_lt?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_gte?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_lte?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_in?: (Scalars['BigDecimal'][] | null),totalLiquidityUSD_not_in?: (Scalars['BigDecimal'][] | null),priceUSD?: (Scalars['BigDecimal'] | null),priceUSD_not?: (Scalars['BigDecimal'] | null),priceUSD_gt?: (Scalars['BigDecimal'] | null),priceUSD_lt?: (Scalars['BigDecimal'] | null),priceUSD_gte?: (Scalars['BigDecimal'] | null),priceUSD_lte?: (Scalars['BigDecimal'] | null),priceUSD_in?: (Scalars['BigDecimal'][] | null),priceUSD_not_in?: (Scalars['BigDecimal'][] | null)}

export interface Token_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),symbol?: (Scalars['String'] | null),symbol_not?: (Scalars['String'] | null),symbol_gt?: (Scalars['String'] | null),symbol_lt?: (Scalars['String'] | null),symbol_gte?: (Scalars['String'] | null),symbol_lte?: (Scalars['String'] | null),symbol_in?: (Scalars['String'][] | null),symbol_not_in?: (Scalars['String'][] | null),symbol_contains?: (Scalars['String'] | null),symbol_not_contains?: (Scalars['String'] | null),symbol_starts_with?: (Scalars['String'] | null),symbol_not_starts_with?: (Scalars['String'] | null),symbol_ends_with?: (Scalars['String'] | null),symbol_not_ends_with?: (Scalars['String'] | null),name?: (Scalars['String'] | null),name_not?: (Scalars['String'] | null),name_gt?: (Scalars['String'] | null),name_lt?: (Scalars['String'] | null),name_gte?: (Scalars['String'] | null),name_lte?: (Scalars['String'] | null),name_in?: (Scalars['String'][] | null),name_not_in?: (Scalars['String'][] | null),name_contains?: (Scalars['String'] | null),name_not_contains?: (Scalars['String'] | null),name_starts_with?: (Scalars['String'] | null),name_not_starts_with?: (Scalars['String'] | null),name_ends_with?: (Scalars['String'] | null),name_not_ends_with?: (Scalars['String'] | null),decimals?: (Scalars['BigInt'] | null),decimals_not?: (Scalars['BigInt'] | null),decimals_gt?: (Scalars['BigInt'] | null),decimals_lt?: (Scalars['BigInt'] | null),decimals_gte?: (Scalars['BigInt'] | null),decimals_lte?: (Scalars['BigInt'] | null),decimals_in?: (Scalars['BigInt'][] | null),decimals_not_in?: (Scalars['BigInt'][] | null),totalSupply?: (Scalars['BigInt'] | null),totalSupply_not?: (Scalars['BigInt'] | null),totalSupply_gt?: (Scalars['BigInt'] | null),totalSupply_lt?: (Scalars['BigInt'] | null),totalSupply_gte?: (Scalars['BigInt'] | null),totalSupply_lte?: (Scalars['BigInt'] | null),totalSupply_in?: (Scalars['BigInt'][] | null),totalSupply_not_in?: (Scalars['BigInt'][] | null),tradeVolume?: (Scalars['BigDecimal'] | null),tradeVolume_not?: (Scalars['BigDecimal'] | null),tradeVolume_gt?: (Scalars['BigDecimal'] | null),tradeVolume_lt?: (Scalars['BigDecimal'] | null),tradeVolume_gte?: (Scalars['BigDecimal'] | null),tradeVolume_lte?: (Scalars['BigDecimal'] | null),tradeVolume_in?: (Scalars['BigDecimal'][] | null),tradeVolume_not_in?: (Scalars['BigDecimal'][] | null),tradeVolumeUSD?: (Scalars['BigDecimal'] | null),tradeVolumeUSD_not?: (Scalars['BigDecimal'] | null),tradeVolumeUSD_gt?: (Scalars['BigDecimal'] | null),tradeVolumeUSD_lt?: (Scalars['BigDecimal'] | null),tradeVolumeUSD_gte?: (Scalars['BigDecimal'] | null),tradeVolumeUSD_lte?: (Scalars['BigDecimal'] | null),tradeVolumeUSD_in?: (Scalars['BigDecimal'][] | null),tradeVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_not?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),txCount?: (Scalars['BigInt'] | null),txCount_not?: (Scalars['BigInt'] | null),txCount_gt?: (Scalars['BigInt'] | null),txCount_lt?: (Scalars['BigInt'] | null),txCount_gte?: (Scalars['BigInt'] | null),txCount_lte?: (Scalars['BigInt'] | null),txCount_in?: (Scalars['BigInt'][] | null),txCount_not_in?: (Scalars['BigInt'][] | null),totalLiquidity?: (Scalars['BigDecimal'] | null),totalLiquidity_not?: (Scalars['BigDecimal'] | null),totalLiquidity_gt?: (Scalars['BigDecimal'] | null),totalLiquidity_lt?: (Scalars['BigDecimal'] | null),totalLiquidity_gte?: (Scalars['BigDecimal'] | null),totalLiquidity_lte?: (Scalars['BigDecimal'] | null),totalLiquidity_in?: (Scalars['BigDecimal'][] | null),totalLiquidity_not_in?: (Scalars['BigDecimal'][] | null),derivedETH?: (Scalars['BigDecimal'] | null),derivedETH_not?: (Scalars['BigDecimal'] | null),derivedETH_gt?: (Scalars['BigDecimal'] | null),derivedETH_lt?: (Scalars['BigDecimal'] | null),derivedETH_gte?: (Scalars['BigDecimal'] | null),derivedETH_lte?: (Scalars['BigDecimal'] | null),derivedETH_in?: (Scalars['BigDecimal'][] | null),derivedETH_not_in?: (Scalars['BigDecimal'][] | null)}

export interface TransactionRequest{
    id?: boolean | number
    blockNumber?: boolean | number
    timestamp?: boolean | number
    mints?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null)},MintRequest] | MintRequest
    burns?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null)},BurnRequest] | BurnRequest
    swaps?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)},SwapRequest] | SwapRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Transaction_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),mints?: (Scalars['String'][] | null),mints_not?: (Scalars['String'][] | null),mints_contains?: (Scalars['String'][] | null),mints_not_contains?: (Scalars['String'][] | null),burns?: (Scalars['String'][] | null),burns_not?: (Scalars['String'][] | null),burns_contains?: (Scalars['String'][] | null),burns_not_contains?: (Scalars['String'][] | null),swaps?: (Scalars['String'][] | null),swaps_not?: (Scalars['String'][] | null),swaps_contains?: (Scalars['String'][] | null),swaps_not_contains?: (Scalars['String'][] | null)}

export interface UniswapDayDataRequest{
    id?: boolean | number
    date?: boolean | number
    dailyVolumeETH?: boolean | number
    dailyVolumeUSD?: boolean | number
    dailyVolumeUntracked?: boolean | number
    totalVolumeETH?: boolean | number
    totalLiquidityETH?: boolean | number
    totalVolumeUSD?: boolean | number
    totalLiquidityUSD?: boolean | number
    txCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UniswapDayData_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),date?: (Scalars['Int'] | null),date_not?: (Scalars['Int'] | null),date_gt?: (Scalars['Int'] | null),date_lt?: (Scalars['Int'] | null),date_gte?: (Scalars['Int'] | null),date_lte?: (Scalars['Int'] | null),date_in?: (Scalars['Int'][] | null),date_not_in?: (Scalars['Int'][] | null),dailyVolumeETH?: (Scalars['BigDecimal'] | null),dailyVolumeETH_not?: (Scalars['BigDecimal'] | null),dailyVolumeETH_gt?: (Scalars['BigDecimal'] | null),dailyVolumeETH_lt?: (Scalars['BigDecimal'] | null),dailyVolumeETH_gte?: (Scalars['BigDecimal'] | null),dailyVolumeETH_lte?: (Scalars['BigDecimal'] | null),dailyVolumeETH_in?: (Scalars['BigDecimal'][] | null),dailyVolumeETH_not_in?: (Scalars['BigDecimal'][] | null),dailyVolumeUSD?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_not?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_gt?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_lt?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_gte?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_lte?: (Scalars['BigDecimal'] | null),dailyVolumeUSD_in?: (Scalars['BigDecimal'][] | null),dailyVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),dailyVolumeUntracked?: (Scalars['BigDecimal'] | null),dailyVolumeUntracked_not?: (Scalars['BigDecimal'] | null),dailyVolumeUntracked_gt?: (Scalars['BigDecimal'] | null),dailyVolumeUntracked_lt?: (Scalars['BigDecimal'] | null),dailyVolumeUntracked_gte?: (Scalars['BigDecimal'] | null),dailyVolumeUntracked_lte?: (Scalars['BigDecimal'] | null),dailyVolumeUntracked_in?: (Scalars['BigDecimal'][] | null),dailyVolumeUntracked_not_in?: (Scalars['BigDecimal'][] | null),totalVolumeETH?: (Scalars['BigDecimal'] | null),totalVolumeETH_not?: (Scalars['BigDecimal'] | null),totalVolumeETH_gt?: (Scalars['BigDecimal'] | null),totalVolumeETH_lt?: (Scalars['BigDecimal'] | null),totalVolumeETH_gte?: (Scalars['BigDecimal'] | null),totalVolumeETH_lte?: (Scalars['BigDecimal'] | null),totalVolumeETH_in?: (Scalars['BigDecimal'][] | null),totalVolumeETH_not_in?: (Scalars['BigDecimal'][] | null),totalLiquidityETH?: (Scalars['BigDecimal'] | null),totalLiquidityETH_not?: (Scalars['BigDecimal'] | null),totalLiquidityETH_gt?: (Scalars['BigDecimal'] | null),totalLiquidityETH_lt?: (Scalars['BigDecimal'] | null),totalLiquidityETH_gte?: (Scalars['BigDecimal'] | null),totalLiquidityETH_lte?: (Scalars['BigDecimal'] | null),totalLiquidityETH_in?: (Scalars['BigDecimal'][] | null),totalLiquidityETH_not_in?: (Scalars['BigDecimal'][] | null),totalVolumeUSD?: (Scalars['BigDecimal'] | null),totalVolumeUSD_not?: (Scalars['BigDecimal'] | null),totalVolumeUSD_gt?: (Scalars['BigDecimal'] | null),totalVolumeUSD_lt?: (Scalars['BigDecimal'] | null),totalVolumeUSD_gte?: (Scalars['BigDecimal'] | null),totalVolumeUSD_lte?: (Scalars['BigDecimal'] | null),totalVolumeUSD_in?: (Scalars['BigDecimal'][] | null),totalVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),totalLiquidityUSD?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_not?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_gt?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_lt?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_gte?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_lte?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_in?: (Scalars['BigDecimal'][] | null),totalLiquidityUSD_not_in?: (Scalars['BigDecimal'][] | null),txCount?: (Scalars['BigInt'] | null),txCount_not?: (Scalars['BigInt'] | null),txCount_gt?: (Scalars['BigInt'] | null),txCount_lt?: (Scalars['BigInt'] | null),txCount_gte?: (Scalars['BigInt'] | null),txCount_lte?: (Scalars['BigInt'] | null),txCount_in?: (Scalars['BigInt'][] | null),txCount_not_in?: (Scalars['BigInt'][] | null)}

export interface UniswapFactoryRequest{
    id?: boolean | number
    pairCount?: boolean | number
    totalVolumeUSD?: boolean | number
    totalVolumeETH?: boolean | number
    untrackedVolumeUSD?: boolean | number
    totalLiquidityUSD?: boolean | number
    totalLiquidityETH?: boolean | number
    txCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UniswapFactory_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pairCount?: (Scalars['Int'] | null),pairCount_not?: (Scalars['Int'] | null),pairCount_gt?: (Scalars['Int'] | null),pairCount_lt?: (Scalars['Int'] | null),pairCount_gte?: (Scalars['Int'] | null),pairCount_lte?: (Scalars['Int'] | null),pairCount_in?: (Scalars['Int'][] | null),pairCount_not_in?: (Scalars['Int'][] | null),totalVolumeUSD?: (Scalars['BigDecimal'] | null),totalVolumeUSD_not?: (Scalars['BigDecimal'] | null),totalVolumeUSD_gt?: (Scalars['BigDecimal'] | null),totalVolumeUSD_lt?: (Scalars['BigDecimal'] | null),totalVolumeUSD_gte?: (Scalars['BigDecimal'] | null),totalVolumeUSD_lte?: (Scalars['BigDecimal'] | null),totalVolumeUSD_in?: (Scalars['BigDecimal'][] | null),totalVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),totalVolumeETH?: (Scalars['BigDecimal'] | null),totalVolumeETH_not?: (Scalars['BigDecimal'] | null),totalVolumeETH_gt?: (Scalars['BigDecimal'] | null),totalVolumeETH_lt?: (Scalars['BigDecimal'] | null),totalVolumeETH_gte?: (Scalars['BigDecimal'] | null),totalVolumeETH_lte?: (Scalars['BigDecimal'] | null),totalVolumeETH_in?: (Scalars['BigDecimal'][] | null),totalVolumeETH_not_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_not?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),totalLiquidityUSD?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_not?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_gt?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_lt?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_gte?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_lte?: (Scalars['BigDecimal'] | null),totalLiquidityUSD_in?: (Scalars['BigDecimal'][] | null),totalLiquidityUSD_not_in?: (Scalars['BigDecimal'][] | null),totalLiquidityETH?: (Scalars['BigDecimal'] | null),totalLiquidityETH_not?: (Scalars['BigDecimal'] | null),totalLiquidityETH_gt?: (Scalars['BigDecimal'] | null),totalLiquidityETH_lt?: (Scalars['BigDecimal'] | null),totalLiquidityETH_gte?: (Scalars['BigDecimal'] | null),totalLiquidityETH_lte?: (Scalars['BigDecimal'] | null),totalLiquidityETH_in?: (Scalars['BigDecimal'][] | null),totalLiquidityETH_not_in?: (Scalars['BigDecimal'][] | null),txCount?: (Scalars['BigInt'] | null),txCount_not?: (Scalars['BigInt'] | null),txCount_gt?: (Scalars['BigInt'] | null),txCount_lt?: (Scalars['BigInt'] | null),txCount_gte?: (Scalars['BigInt'] | null),txCount_lte?: (Scalars['BigInt'] | null),txCount_in?: (Scalars['BigInt'][] | null),txCount_not_in?: (Scalars['BigInt'][] | null)}

export interface UserRequest{
    id?: boolean | number
    liquidityPositions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPosition_filter | null)},LiquidityPositionRequest] | LiquidityPositionRequest
    usdSwapped?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface User_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),usdSwapped?: (Scalars['BigDecimal'] | null),usdSwapped_not?: (Scalars['BigDecimal'] | null),usdSwapped_gt?: (Scalars['BigDecimal'] | null),usdSwapped_lt?: (Scalars['BigDecimal'] | null),usdSwapped_gte?: (Scalars['BigDecimal'] | null),usdSwapped_lte?: (Scalars['BigDecimal'] | null),usdSwapped_in?: (Scalars['BigDecimal'][] | null),usdSwapped_not_in?: (Scalars['BigDecimal'][] | null)}

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


const Bundle_possibleTypes = ['Bundle']
export const isBundle = (obj?: { __typename?: any } | null): obj is Bundle => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBundle"')
  return Bundle_possibleTypes.includes(obj.__typename)
}



const Burn_possibleTypes = ['Burn']
export const isBurn = (obj?: { __typename?: any } | null): obj is Burn => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBurn"')
  return Burn_possibleTypes.includes(obj.__typename)
}



const LiquidityPosition_possibleTypes = ['LiquidityPosition']
export const isLiquidityPosition = (obj?: { __typename?: any } | null): obj is LiquidityPosition => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLiquidityPosition"')
  return LiquidityPosition_possibleTypes.includes(obj.__typename)
}



const LiquidityPositionSnapshot_possibleTypes = ['LiquidityPositionSnapshot']
export const isLiquidityPositionSnapshot = (obj?: { __typename?: any } | null): obj is LiquidityPositionSnapshot => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLiquidityPositionSnapshot"')
  return LiquidityPositionSnapshot_possibleTypes.includes(obj.__typename)
}



const Mint_possibleTypes = ['Mint']
export const isMint = (obj?: { __typename?: any } | null): obj is Mint => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMint"')
  return Mint_possibleTypes.includes(obj.__typename)
}



const Pair_possibleTypes = ['Pair']
export const isPair = (obj?: { __typename?: any } | null): obj is Pair => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPair"')
  return Pair_possibleTypes.includes(obj.__typename)
}



const PairDayData_possibleTypes = ['PairDayData']
export const isPairDayData = (obj?: { __typename?: any } | null): obj is PairDayData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPairDayData"')
  return PairDayData_possibleTypes.includes(obj.__typename)
}



const PairHourData_possibleTypes = ['PairHourData']
export const isPairHourData = (obj?: { __typename?: any } | null): obj is PairHourData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPairHourData"')
  return PairHourData_possibleTypes.includes(obj.__typename)
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



const Swap_possibleTypes = ['Swap']
export const isSwap = (obj?: { __typename?: any } | null): obj is Swap => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSwap"')
  return Swap_possibleTypes.includes(obj.__typename)
}



const Token_possibleTypes = ['Token']
export const isToken = (obj?: { __typename?: any } | null): obj is Token => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isToken"')
  return Token_possibleTypes.includes(obj.__typename)
}



const TokenDayData_possibleTypes = ['TokenDayData']
export const isTokenDayData = (obj?: { __typename?: any } | null): obj is TokenDayData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTokenDayData"')
  return TokenDayData_possibleTypes.includes(obj.__typename)
}



const Transaction_possibleTypes = ['Transaction']
export const isTransaction = (obj?: { __typename?: any } | null): obj is Transaction => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTransaction"')
  return Transaction_possibleTypes.includes(obj.__typename)
}



const UniswapDayData_possibleTypes = ['UniswapDayData']
export const isUniswapDayData = (obj?: { __typename?: any } | null): obj is UniswapDayData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUniswapDayData"')
  return UniswapDayData_possibleTypes.includes(obj.__typename)
}



const UniswapFactory_possibleTypes = ['UniswapFactory']
export const isUniswapFactory = (obj?: { __typename?: any } | null): obj is UniswapFactory => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUniswapFactory"')
  return UniswapFactory_possibleTypes.includes(obj.__typename)
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


export interface BundlePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    ethPrice: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface BundleObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    ethPrice: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface BurnPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    pair: (PairPromiseChain & {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>) => Promise<FieldsSelection<Pair, R>>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sender: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Promise<(Scalars['BigDecimal'] | undefined)>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Promise<(Scalars['BigDecimal'] | undefined)>}),
    to: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Promise<(Scalars['BigDecimal'] | undefined)>}),
    needsComplete: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    feeTo: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    feeLiquidity: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Promise<(Scalars['BigDecimal'] | undefined)>})
}

export interface BurnObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    pair: (PairObservableChain & {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>) => Observable<FieldsSelection<Pair, R>>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sender: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Observable<(Scalars['BigDecimal'] | undefined)>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Observable<(Scalars['BigDecimal'] | undefined)>}),
    to: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Observable<(Scalars['BigDecimal'] | undefined)>}),
    needsComplete: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    feeTo: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    feeLiquidity: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Observable<(Scalars['BigDecimal'] | undefined)>})
}

export interface LiquidityPositionPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    pair: (PairPromiseChain & {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>) => Promise<FieldsSelection<Pair, R>>}),
    liquidityTokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    historicalSnapshots: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPositionSnapshot_filter | null)}) => {get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPositionSnapshot, R> | undefined)[]) => Promise<(FieldsSelection<LiquidityPositionSnapshot, R> | undefined)[]>})&({get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPositionSnapshot, R> | undefined)[]) => Promise<(FieldsSelection<LiquidityPositionSnapshot, R> | undefined)[]>})
}

export interface LiquidityPositionObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    pair: (PairObservableChain & {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>) => Observable<FieldsSelection<Pair, R>>}),
    liquidityTokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    historicalSnapshots: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPositionSnapshot_filter | null)}) => {get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPositionSnapshot, R> | undefined)[]) => Observable<(FieldsSelection<LiquidityPositionSnapshot, R> | undefined)[]>})&({get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPositionSnapshot, R> | undefined)[]) => Observable<(FieldsSelection<LiquidityPositionSnapshot, R> | undefined)[]>})
}

export interface LiquidityPositionSnapshotPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    liquidityPosition: (LiquidityPositionPromiseChain & {get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPosition, R>) => Promise<FieldsSelection<LiquidityPosition, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    block: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    pair: (PairPromiseChain & {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>) => Promise<FieldsSelection<Pair, R>>}),
    token0PriceUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    token1PriceUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    reserve0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    reserve1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    reserveUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    liquidityTokenTotalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    liquidityTokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface LiquidityPositionSnapshotObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    liquidityPosition: (LiquidityPositionObservableChain & {get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPosition, R>) => Observable<FieldsSelection<LiquidityPosition, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    block: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    pair: (PairObservableChain & {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>) => Observable<FieldsSelection<Pair, R>>}),
    token0PriceUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    token1PriceUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    reserve0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    reserve1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    reserveUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    liquidityTokenTotalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    liquidityTokenBalance: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface MintPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    pair: (PairPromiseChain & {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>) => Promise<FieldsSelection<Pair, R>>}),
    to: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sender: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Promise<(Scalars['BigDecimal'] | undefined)>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Promise<(Scalars['BigDecimal'] | undefined)>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Promise<(Scalars['BigDecimal'] | undefined)>}),
    feeTo: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    feeLiquidity: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Promise<(Scalars['BigDecimal'] | undefined)>})
}

export interface MintObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    pair: (PairObservableChain & {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>) => Observable<FieldsSelection<Pair, R>>}),
    to: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sender: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Observable<(Scalars['BigDecimal'] | undefined)>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Observable<(Scalars['BigDecimal'] | undefined)>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Observable<(Scalars['BigDecimal'] | undefined)>}),
    feeTo: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    feeLiquidity: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Observable<(Scalars['BigDecimal'] | undefined)>})
}

export interface PairPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    token0: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    token1: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    reserve0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    reserve1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    reserveETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    reserveUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    trackedReserveETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    token0Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    token1Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    createdAtTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    createdAtBlockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidityProviderCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface PairObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    token0: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    token1: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    reserve0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    reserve1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    reserveETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    reserveUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    trackedReserveETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    token0Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    token1Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    createdAtTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    createdAtBlockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidityProviderCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface PairDayDataPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    pairAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    token0: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    token1: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    reserve0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    reserve1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    reserveUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    dailyVolumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    dailyVolumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    dailyVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    dailyTxns: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface PairDayDataObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    pairAddress: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    token0: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    token1: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    reserve0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    reserve1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    reserveUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    dailyVolumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    dailyVolumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    dailyVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    dailyTxns: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface PairHourDataPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    hourStartUnix: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    pair: (PairPromiseChain & {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>) => Promise<FieldsSelection<Pair, R>>}),
    reserve0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    reserve1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    reserveUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    hourlyVolumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    hourlyVolumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    hourlyVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    hourlyTxns: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface PairHourDataObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    hourStartUnix: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    pair: (PairObservableChain & {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>) => Observable<FieldsSelection<Pair, R>>}),
    reserve0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    reserve1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    reserveUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    hourlyVolumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    hourlyVolumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    hourlyVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    hourlyTxns: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface QueryPromiseChain{
    uniswapFactory: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UniswapFactoryPromiseChain & {get: <R extends UniswapFactoryRequest>(request: R, defaultValue?: (FieldsSelection<UniswapFactory, R> | undefined)) => Promise<(FieldsSelection<UniswapFactory, R> | undefined)>}),
    uniswapFactories: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapFactory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapFactory_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UniswapFactoryRequest>(request: R, defaultValue?: FieldsSelection<UniswapFactory, R>[]) => Promise<FieldsSelection<UniswapFactory, R>[]>})&({get: <R extends UniswapFactoryRequest>(request: R, defaultValue?: FieldsSelection<UniswapFactory, R>[]) => Promise<FieldsSelection<UniswapFactory, R>[]>}),
    token: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Promise<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Promise<FieldsSelection<Token, R>[]>})&({get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Promise<FieldsSelection<Token, R>[]>}),
    pair: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PairPromiseChain & {get: <R extends PairRequest>(request: R, defaultValue?: (FieldsSelection<Pair, R> | undefined)) => Promise<(FieldsSelection<Pair, R> | undefined)>}),
    pairs: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pair_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pair_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>[]) => Promise<FieldsSelection<Pair, R>[]>})&({get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>[]) => Promise<FieldsSelection<Pair, R>[]>}),
    user: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Promise<(FieldsSelection<User, R> | undefined)>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>}),
    liquidityPosition: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => LiquidityPositionPromiseChain & {get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPosition, R> | undefined)) => Promise<(FieldsSelection<LiquidityPosition, R> | undefined)>}),
    liquidityPositions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPosition_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPosition, R>[]) => Promise<FieldsSelection<LiquidityPosition, R>[]>})&({get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPosition, R>[]) => Promise<FieldsSelection<LiquidityPosition, R>[]>}),
    liquidityPositionSnapshot: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => LiquidityPositionSnapshotPromiseChain & {get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPositionSnapshot, R> | undefined)) => Promise<(FieldsSelection<LiquidityPositionSnapshot, R> | undefined)>}),
    liquidityPositionSnapshots: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPositionSnapshot_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPositionSnapshot, R>[]) => Promise<FieldsSelection<LiquidityPositionSnapshot, R>[]>})&({get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPositionSnapshot, R>[]) => Promise<FieldsSelection<LiquidityPositionSnapshot, R>[]>}),
    transaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)) => Promise<(FieldsSelection<Transaction, R> | undefined)>}),
    transactions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Promise<FieldsSelection<Transaction, R>[]>})&({get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Promise<FieldsSelection<Transaction, R>[]>}),
    mint: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => MintPromiseChain & {get: <R extends MintRequest>(request: R, defaultValue?: (FieldsSelection<Mint, R> | undefined)) => Promise<(FieldsSelection<Mint, R> | undefined)>}),
    mints: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Promise<FieldsSelection<Mint, R>[]>})&({get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Promise<FieldsSelection<Mint, R>[]>}),
    burn: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BurnPromiseChain & {get: <R extends BurnRequest>(request: R, defaultValue?: (FieldsSelection<Burn, R> | undefined)) => Promise<(FieldsSelection<Burn, R> | undefined)>}),
    burns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Promise<FieldsSelection<Burn, R>[]>})&({get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Promise<FieldsSelection<Burn, R>[]>}),
    swap: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => SwapPromiseChain & {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)) => Promise<(FieldsSelection<Swap, R> | undefined)>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    bundle: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BundlePromiseChain & {get: <R extends BundleRequest>(request: R, defaultValue?: (FieldsSelection<Bundle, R> | undefined)) => Promise<(FieldsSelection<Bundle, R> | undefined)>}),
    bundles: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bundle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bundle_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BundleRequest>(request: R, defaultValue?: FieldsSelection<Bundle, R>[]) => Promise<FieldsSelection<Bundle, R>[]>})&({get: <R extends BundleRequest>(request: R, defaultValue?: FieldsSelection<Bundle, R>[]) => Promise<FieldsSelection<Bundle, R>[]>}),
    uniswapDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UniswapDayDataPromiseChain & {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: (FieldsSelection<UniswapDayData, R> | undefined)) => Promise<(FieldsSelection<UniswapDayData, R> | undefined)>}),
    uniswapDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: FieldsSelection<UniswapDayData, R>[]) => Promise<FieldsSelection<UniswapDayData, R>[]>})&({get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: FieldsSelection<UniswapDayData, R>[]) => Promise<FieldsSelection<UniswapDayData, R>[]>}),
    pairHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PairHourDataPromiseChain & {get: <R extends PairHourDataRequest>(request: R, defaultValue?: (FieldsSelection<PairHourData, R> | undefined)) => Promise<(FieldsSelection<PairHourData, R> | undefined)>}),
    pairHourDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PairHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PairHourData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PairHourDataRequest>(request: R, defaultValue?: FieldsSelection<PairHourData, R>[]) => Promise<FieldsSelection<PairHourData, R>[]>})&({get: <R extends PairHourDataRequest>(request: R, defaultValue?: FieldsSelection<PairHourData, R>[]) => Promise<FieldsSelection<PairHourData, R>[]>}),
    pairDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PairDayDataPromiseChain & {get: <R extends PairDayDataRequest>(request: R, defaultValue?: (FieldsSelection<PairDayData, R> | undefined)) => Promise<(FieldsSelection<PairDayData, R> | undefined)>}),
    pairDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PairDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PairDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PairDayDataRequest>(request: R, defaultValue?: FieldsSelection<PairDayData, R>[]) => Promise<FieldsSelection<PairDayData, R>[]>})&({get: <R extends PairDayDataRequest>(request: R, defaultValue?: FieldsSelection<PairDayData, R>[]) => Promise<FieldsSelection<PairDayData, R>[]>}),
    tokenDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenDayDataPromiseChain & {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: (FieldsSelection<TokenDayData, R> | undefined)) => Promise<(FieldsSelection<TokenDayData, R> | undefined)>}),
    tokenDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Promise<FieldsSelection<TokenDayData, R>[]>})&({get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Promise<FieldsSelection<TokenDayData, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface QueryObservableChain{
    uniswapFactory: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UniswapFactoryObservableChain & {get: <R extends UniswapFactoryRequest>(request: R, defaultValue?: (FieldsSelection<UniswapFactory, R> | undefined)) => Observable<(FieldsSelection<UniswapFactory, R> | undefined)>}),
    uniswapFactories: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapFactory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapFactory_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UniswapFactoryRequest>(request: R, defaultValue?: FieldsSelection<UniswapFactory, R>[]) => Observable<FieldsSelection<UniswapFactory, R>[]>})&({get: <R extends UniswapFactoryRequest>(request: R, defaultValue?: FieldsSelection<UniswapFactory, R>[]) => Observable<FieldsSelection<UniswapFactory, R>[]>}),
    token: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Observable<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Observable<FieldsSelection<Token, R>[]>})&({get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Observable<FieldsSelection<Token, R>[]>}),
    pair: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PairObservableChain & {get: <R extends PairRequest>(request: R, defaultValue?: (FieldsSelection<Pair, R> | undefined)) => Observable<(FieldsSelection<Pair, R> | undefined)>}),
    pairs: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pair_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pair_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>[]) => Observable<FieldsSelection<Pair, R>[]>})&({get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>[]) => Observable<FieldsSelection<Pair, R>[]>}),
    user: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Observable<(FieldsSelection<User, R> | undefined)>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>}),
    liquidityPosition: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => LiquidityPositionObservableChain & {get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPosition, R> | undefined)) => Observable<(FieldsSelection<LiquidityPosition, R> | undefined)>}),
    liquidityPositions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPosition_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPosition, R>[]) => Observable<FieldsSelection<LiquidityPosition, R>[]>})&({get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPosition, R>[]) => Observable<FieldsSelection<LiquidityPosition, R>[]>}),
    liquidityPositionSnapshot: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => LiquidityPositionSnapshotObservableChain & {get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPositionSnapshot, R> | undefined)) => Observable<(FieldsSelection<LiquidityPositionSnapshot, R> | undefined)>}),
    liquidityPositionSnapshots: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPositionSnapshot_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPositionSnapshot, R>[]) => Observable<FieldsSelection<LiquidityPositionSnapshot, R>[]>})&({get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPositionSnapshot, R>[]) => Observable<FieldsSelection<LiquidityPositionSnapshot, R>[]>}),
    transaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)) => Observable<(FieldsSelection<Transaction, R> | undefined)>}),
    transactions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Observable<FieldsSelection<Transaction, R>[]>})&({get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Observable<FieldsSelection<Transaction, R>[]>}),
    mint: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => MintObservableChain & {get: <R extends MintRequest>(request: R, defaultValue?: (FieldsSelection<Mint, R> | undefined)) => Observable<(FieldsSelection<Mint, R> | undefined)>}),
    mints: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Observable<FieldsSelection<Mint, R>[]>})&({get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Observable<FieldsSelection<Mint, R>[]>}),
    burn: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BurnObservableChain & {get: <R extends BurnRequest>(request: R, defaultValue?: (FieldsSelection<Burn, R> | undefined)) => Observable<(FieldsSelection<Burn, R> | undefined)>}),
    burns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Observable<FieldsSelection<Burn, R>[]>})&({get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Observable<FieldsSelection<Burn, R>[]>}),
    swap: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => SwapObservableChain & {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)) => Observable<(FieldsSelection<Swap, R> | undefined)>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    bundle: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BundleObservableChain & {get: <R extends BundleRequest>(request: R, defaultValue?: (FieldsSelection<Bundle, R> | undefined)) => Observable<(FieldsSelection<Bundle, R> | undefined)>}),
    bundles: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bundle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bundle_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BundleRequest>(request: R, defaultValue?: FieldsSelection<Bundle, R>[]) => Observable<FieldsSelection<Bundle, R>[]>})&({get: <R extends BundleRequest>(request: R, defaultValue?: FieldsSelection<Bundle, R>[]) => Observable<FieldsSelection<Bundle, R>[]>}),
    uniswapDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UniswapDayDataObservableChain & {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: (FieldsSelection<UniswapDayData, R> | undefined)) => Observable<(FieldsSelection<UniswapDayData, R> | undefined)>}),
    uniswapDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: FieldsSelection<UniswapDayData, R>[]) => Observable<FieldsSelection<UniswapDayData, R>[]>})&({get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: FieldsSelection<UniswapDayData, R>[]) => Observable<FieldsSelection<UniswapDayData, R>[]>}),
    pairHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PairHourDataObservableChain & {get: <R extends PairHourDataRequest>(request: R, defaultValue?: (FieldsSelection<PairHourData, R> | undefined)) => Observable<(FieldsSelection<PairHourData, R> | undefined)>}),
    pairHourDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PairHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PairHourData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PairHourDataRequest>(request: R, defaultValue?: FieldsSelection<PairHourData, R>[]) => Observable<FieldsSelection<PairHourData, R>[]>})&({get: <R extends PairHourDataRequest>(request: R, defaultValue?: FieldsSelection<PairHourData, R>[]) => Observable<FieldsSelection<PairHourData, R>[]>}),
    pairDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PairDayDataObservableChain & {get: <R extends PairDayDataRequest>(request: R, defaultValue?: (FieldsSelection<PairDayData, R> | undefined)) => Observable<(FieldsSelection<PairDayData, R> | undefined)>}),
    pairDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PairDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PairDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PairDayDataRequest>(request: R, defaultValue?: FieldsSelection<PairDayData, R>[]) => Observable<FieldsSelection<PairDayData, R>[]>})&({get: <R extends PairDayDataRequest>(request: R, defaultValue?: FieldsSelection<PairDayData, R>[]) => Observable<FieldsSelection<PairDayData, R>[]>}),
    tokenDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenDayDataObservableChain & {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: (FieldsSelection<TokenDayData, R> | undefined)) => Observable<(FieldsSelection<TokenDayData, R> | undefined)>}),
    tokenDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Observable<FieldsSelection<TokenDayData, R>[]>})&({get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Observable<FieldsSelection<TokenDayData, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionPromiseChain{
    uniswapFactory: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UniswapFactoryPromiseChain & {get: <R extends UniswapFactoryRequest>(request: R, defaultValue?: (FieldsSelection<UniswapFactory, R> | undefined)) => Promise<(FieldsSelection<UniswapFactory, R> | undefined)>}),
    uniswapFactories: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapFactory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapFactory_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UniswapFactoryRequest>(request: R, defaultValue?: FieldsSelection<UniswapFactory, R>[]) => Promise<FieldsSelection<UniswapFactory, R>[]>})&({get: <R extends UniswapFactoryRequest>(request: R, defaultValue?: FieldsSelection<UniswapFactory, R>[]) => Promise<FieldsSelection<UniswapFactory, R>[]>}),
    token: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Promise<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Promise<FieldsSelection<Token, R>[]>})&({get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Promise<FieldsSelection<Token, R>[]>}),
    pair: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PairPromiseChain & {get: <R extends PairRequest>(request: R, defaultValue?: (FieldsSelection<Pair, R> | undefined)) => Promise<(FieldsSelection<Pair, R> | undefined)>}),
    pairs: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pair_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pair_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>[]) => Promise<FieldsSelection<Pair, R>[]>})&({get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>[]) => Promise<FieldsSelection<Pair, R>[]>}),
    user: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Promise<(FieldsSelection<User, R> | undefined)>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>}),
    liquidityPosition: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => LiquidityPositionPromiseChain & {get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPosition, R> | undefined)) => Promise<(FieldsSelection<LiquidityPosition, R> | undefined)>}),
    liquidityPositions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPosition_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPosition, R>[]) => Promise<FieldsSelection<LiquidityPosition, R>[]>})&({get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPosition, R>[]) => Promise<FieldsSelection<LiquidityPosition, R>[]>}),
    liquidityPositionSnapshot: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => LiquidityPositionSnapshotPromiseChain & {get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPositionSnapshot, R> | undefined)) => Promise<(FieldsSelection<LiquidityPositionSnapshot, R> | undefined)>}),
    liquidityPositionSnapshots: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPositionSnapshot_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPositionSnapshot, R>[]) => Promise<FieldsSelection<LiquidityPositionSnapshot, R>[]>})&({get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPositionSnapshot, R>[]) => Promise<FieldsSelection<LiquidityPositionSnapshot, R>[]>}),
    transaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)) => Promise<(FieldsSelection<Transaction, R> | undefined)>}),
    transactions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Promise<FieldsSelection<Transaction, R>[]>})&({get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Promise<FieldsSelection<Transaction, R>[]>}),
    mint: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => MintPromiseChain & {get: <R extends MintRequest>(request: R, defaultValue?: (FieldsSelection<Mint, R> | undefined)) => Promise<(FieldsSelection<Mint, R> | undefined)>}),
    mints: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Promise<FieldsSelection<Mint, R>[]>})&({get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Promise<FieldsSelection<Mint, R>[]>}),
    burn: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BurnPromiseChain & {get: <R extends BurnRequest>(request: R, defaultValue?: (FieldsSelection<Burn, R> | undefined)) => Promise<(FieldsSelection<Burn, R> | undefined)>}),
    burns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Promise<FieldsSelection<Burn, R>[]>})&({get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Promise<FieldsSelection<Burn, R>[]>}),
    swap: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => SwapPromiseChain & {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)) => Promise<(FieldsSelection<Swap, R> | undefined)>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    bundle: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BundlePromiseChain & {get: <R extends BundleRequest>(request: R, defaultValue?: (FieldsSelection<Bundle, R> | undefined)) => Promise<(FieldsSelection<Bundle, R> | undefined)>}),
    bundles: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bundle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bundle_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BundleRequest>(request: R, defaultValue?: FieldsSelection<Bundle, R>[]) => Promise<FieldsSelection<Bundle, R>[]>})&({get: <R extends BundleRequest>(request: R, defaultValue?: FieldsSelection<Bundle, R>[]) => Promise<FieldsSelection<Bundle, R>[]>}),
    uniswapDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UniswapDayDataPromiseChain & {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: (FieldsSelection<UniswapDayData, R> | undefined)) => Promise<(FieldsSelection<UniswapDayData, R> | undefined)>}),
    uniswapDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: FieldsSelection<UniswapDayData, R>[]) => Promise<FieldsSelection<UniswapDayData, R>[]>})&({get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: FieldsSelection<UniswapDayData, R>[]) => Promise<FieldsSelection<UniswapDayData, R>[]>}),
    pairHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PairHourDataPromiseChain & {get: <R extends PairHourDataRequest>(request: R, defaultValue?: (FieldsSelection<PairHourData, R> | undefined)) => Promise<(FieldsSelection<PairHourData, R> | undefined)>}),
    pairHourDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PairHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PairHourData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PairHourDataRequest>(request: R, defaultValue?: FieldsSelection<PairHourData, R>[]) => Promise<FieldsSelection<PairHourData, R>[]>})&({get: <R extends PairHourDataRequest>(request: R, defaultValue?: FieldsSelection<PairHourData, R>[]) => Promise<FieldsSelection<PairHourData, R>[]>}),
    pairDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PairDayDataPromiseChain & {get: <R extends PairDayDataRequest>(request: R, defaultValue?: (FieldsSelection<PairDayData, R> | undefined)) => Promise<(FieldsSelection<PairDayData, R> | undefined)>}),
    pairDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PairDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PairDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PairDayDataRequest>(request: R, defaultValue?: FieldsSelection<PairDayData, R>[]) => Promise<FieldsSelection<PairDayData, R>[]>})&({get: <R extends PairDayDataRequest>(request: R, defaultValue?: FieldsSelection<PairDayData, R>[]) => Promise<FieldsSelection<PairDayData, R>[]>}),
    tokenDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenDayDataPromiseChain & {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: (FieldsSelection<TokenDayData, R> | undefined)) => Promise<(FieldsSelection<TokenDayData, R> | undefined)>}),
    tokenDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Promise<FieldsSelection<TokenDayData, R>[]>})&({get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Promise<FieldsSelection<TokenDayData, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionObservableChain{
    uniswapFactory: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UniswapFactoryObservableChain & {get: <R extends UniswapFactoryRequest>(request: R, defaultValue?: (FieldsSelection<UniswapFactory, R> | undefined)) => Observable<(FieldsSelection<UniswapFactory, R> | undefined)>}),
    uniswapFactories: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapFactory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapFactory_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UniswapFactoryRequest>(request: R, defaultValue?: FieldsSelection<UniswapFactory, R>[]) => Observable<FieldsSelection<UniswapFactory, R>[]>})&({get: <R extends UniswapFactoryRequest>(request: R, defaultValue?: FieldsSelection<UniswapFactory, R>[]) => Observable<FieldsSelection<UniswapFactory, R>[]>}),
    token: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Observable<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Observable<FieldsSelection<Token, R>[]>})&({get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Observable<FieldsSelection<Token, R>[]>}),
    pair: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PairObservableChain & {get: <R extends PairRequest>(request: R, defaultValue?: (FieldsSelection<Pair, R> | undefined)) => Observable<(FieldsSelection<Pair, R> | undefined)>}),
    pairs: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pair_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pair_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>[]) => Observable<FieldsSelection<Pair, R>[]>})&({get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>[]) => Observable<FieldsSelection<Pair, R>[]>}),
    user: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Observable<(FieldsSelection<User, R> | undefined)>}),
    users: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (User_orderBy | null),orderDirection?: (OrderDirection | null),where?: (User_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>})&({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>}),
    liquidityPosition: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => LiquidityPositionObservableChain & {get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPosition, R> | undefined)) => Observable<(FieldsSelection<LiquidityPosition, R> | undefined)>}),
    liquidityPositions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPosition_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPosition, R>[]) => Observable<FieldsSelection<LiquidityPosition, R>[]>})&({get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPosition, R>[]) => Observable<FieldsSelection<LiquidityPosition, R>[]>}),
    liquidityPositionSnapshot: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => LiquidityPositionSnapshotObservableChain & {get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPositionSnapshot, R> | undefined)) => Observable<(FieldsSelection<LiquidityPositionSnapshot, R> | undefined)>}),
    liquidityPositionSnapshots: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPositionSnapshot_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPositionSnapshot, R>[]) => Observable<FieldsSelection<LiquidityPositionSnapshot, R>[]>})&({get: <R extends LiquidityPositionSnapshotRequest>(request: R, defaultValue?: FieldsSelection<LiquidityPositionSnapshot, R>[]) => Observable<FieldsSelection<LiquidityPositionSnapshot, R>[]>}),
    transaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)) => Observable<(FieldsSelection<Transaction, R> | undefined)>}),
    transactions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Observable<FieldsSelection<Transaction, R>[]>})&({get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Observable<FieldsSelection<Transaction, R>[]>}),
    mint: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => MintObservableChain & {get: <R extends MintRequest>(request: R, defaultValue?: (FieldsSelection<Mint, R> | undefined)) => Observable<(FieldsSelection<Mint, R> | undefined)>}),
    mints: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Observable<FieldsSelection<Mint, R>[]>})&({get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Observable<FieldsSelection<Mint, R>[]>}),
    burn: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BurnObservableChain & {get: <R extends BurnRequest>(request: R, defaultValue?: (FieldsSelection<Burn, R> | undefined)) => Observable<(FieldsSelection<Burn, R> | undefined)>}),
    burns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Observable<FieldsSelection<Burn, R>[]>})&({get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Observable<FieldsSelection<Burn, R>[]>}),
    swap: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => SwapObservableChain & {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)) => Observable<(FieldsSelection<Swap, R> | undefined)>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    bundle: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BundleObservableChain & {get: <R extends BundleRequest>(request: R, defaultValue?: (FieldsSelection<Bundle, R> | undefined)) => Observable<(FieldsSelection<Bundle, R> | undefined)>}),
    bundles: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bundle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bundle_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BundleRequest>(request: R, defaultValue?: FieldsSelection<Bundle, R>[]) => Observable<FieldsSelection<Bundle, R>[]>})&({get: <R extends BundleRequest>(request: R, defaultValue?: FieldsSelection<Bundle, R>[]) => Observable<FieldsSelection<Bundle, R>[]>}),
    uniswapDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => UniswapDayDataObservableChain & {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: (FieldsSelection<UniswapDayData, R> | undefined)) => Observable<(FieldsSelection<UniswapDayData, R> | undefined)>}),
    uniswapDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: FieldsSelection<UniswapDayData, R>[]) => Observable<FieldsSelection<UniswapDayData, R>[]>})&({get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: FieldsSelection<UniswapDayData, R>[]) => Observable<FieldsSelection<UniswapDayData, R>[]>}),
    pairHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PairHourDataObservableChain & {get: <R extends PairHourDataRequest>(request: R, defaultValue?: (FieldsSelection<PairHourData, R> | undefined)) => Observable<(FieldsSelection<PairHourData, R> | undefined)>}),
    pairHourDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PairHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PairHourData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PairHourDataRequest>(request: R, defaultValue?: FieldsSelection<PairHourData, R>[]) => Observable<FieldsSelection<PairHourData, R>[]>})&({get: <R extends PairHourDataRequest>(request: R, defaultValue?: FieldsSelection<PairHourData, R>[]) => Observable<FieldsSelection<PairHourData, R>[]>}),
    pairDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => PairDayDataObservableChain & {get: <R extends PairDayDataRequest>(request: R, defaultValue?: (FieldsSelection<PairDayData, R> | undefined)) => Observable<(FieldsSelection<PairDayData, R> | undefined)>}),
    pairDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PairDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PairDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends PairDayDataRequest>(request: R, defaultValue?: FieldsSelection<PairDayData, R>[]) => Observable<FieldsSelection<PairDayData, R>[]>})&({get: <R extends PairDayDataRequest>(request: R, defaultValue?: FieldsSelection<PairDayData, R>[]) => Observable<FieldsSelection<PairDayData, R>[]>}),
    tokenDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenDayDataObservableChain & {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: (FieldsSelection<TokenDayData, R> | undefined)) => Observable<(FieldsSelection<TokenDayData, R> | undefined)>}),
    tokenDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Observable<FieldsSelection<TokenDayData, R>[]>})&({get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Observable<FieldsSelection<TokenDayData, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SwapPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    pair: (PairPromiseChain & {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>) => Promise<FieldsSelection<Pair, R>>}),
    sender: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    amount0In: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amount1In: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amount0Out: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amount1Out: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    to: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface SwapObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    pair: (PairObservableChain & {get: <R extends PairRequest>(request: R, defaultValue?: FieldsSelection<Pair, R>) => Observable<FieldsSelection<Pair, R>>}),
    sender: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    amount0In: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amount1In: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amount0Out: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amount1Out: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    to: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface TokenPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    tradeVolume: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    tradeVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    derivedETH: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Promise<(Scalars['BigDecimal'] | undefined)>})
}

export interface TokenObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    tradeVolume: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    tradeVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalLiquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    derivedETH: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Observable<(Scalars['BigDecimal'] | undefined)>})
}

export interface TokenDayDataPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    token: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    dailyVolumeToken: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    dailyVolumeETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    dailyVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    dailyTxns: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalLiquidityToken: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalLiquidityETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalLiquidityUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    priceUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface TokenDayDataObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    token: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    dailyVolumeToken: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    dailyVolumeETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    dailyVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    dailyTxns: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalLiquidityToken: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalLiquidityETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalLiquidityUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    priceUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface TransactionPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    mints: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null)}) => {get: <R extends MintRequest>(request: R, defaultValue?: (FieldsSelection<Mint, R> | undefined)[]) => Promise<(FieldsSelection<Mint, R> | undefined)[]>})&({get: <R extends MintRequest>(request: R, defaultValue?: (FieldsSelection<Mint, R> | undefined)[]) => Promise<(FieldsSelection<Mint, R> | undefined)[]>}),
    burns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null)}) => {get: <R extends BurnRequest>(request: R, defaultValue?: (FieldsSelection<Burn, R> | undefined)[]) => Promise<(FieldsSelection<Burn, R> | undefined)[]>})&({get: <R extends BurnRequest>(request: R, defaultValue?: (FieldsSelection<Burn, R> | undefined)[]) => Promise<(FieldsSelection<Burn, R> | undefined)[]>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)[]) => Promise<(FieldsSelection<Swap, R> | undefined)[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)[]) => Promise<(FieldsSelection<Swap, R> | undefined)[]>})
}

export interface TransactionObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    mints: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null)}) => {get: <R extends MintRequest>(request: R, defaultValue?: (FieldsSelection<Mint, R> | undefined)[]) => Observable<(FieldsSelection<Mint, R> | undefined)[]>})&({get: <R extends MintRequest>(request: R, defaultValue?: (FieldsSelection<Mint, R> | undefined)[]) => Observable<(FieldsSelection<Mint, R> | undefined)[]>}),
    burns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null)}) => {get: <R extends BurnRequest>(request: R, defaultValue?: (FieldsSelection<Burn, R> | undefined)[]) => Observable<(FieldsSelection<Burn, R> | undefined)[]>})&({get: <R extends BurnRequest>(request: R, defaultValue?: (FieldsSelection<Burn, R> | undefined)[]) => Observable<(FieldsSelection<Burn, R> | undefined)[]>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)[]) => Observable<(FieldsSelection<Swap, R> | undefined)[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)[]) => Observable<(FieldsSelection<Swap, R> | undefined)[]>})
}

export interface UniswapDayDataPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    dailyVolumeETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    dailyVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    dailyVolumeUntracked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalVolumeETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalLiquidityETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalLiquidityUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface UniswapDayDataObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    dailyVolumeETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    dailyVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    dailyVolumeUntracked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalVolumeETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalLiquidityETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalLiquidityUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface UniswapFactoryPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pairCount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    totalVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalVolumeETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalLiquidityUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalLiquidityETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface UniswapFactoryObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pairCount: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    totalVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalVolumeETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalLiquidityUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalLiquidityETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface UserPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    liquidityPositions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPosition_filter | null)}) => {get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPosition, R>[] | undefined)) => Promise<(FieldsSelection<LiquidityPosition, R>[] | undefined)>})&({get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPosition, R>[] | undefined)) => Promise<(FieldsSelection<LiquidityPosition, R>[] | undefined)>}),
    usdSwapped: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface UserObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    liquidityPositions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (LiquidityPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (LiquidityPosition_filter | null)}) => {get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPosition, R>[] | undefined)) => Observable<(FieldsSelection<LiquidityPosition, R>[] | undefined)>})&({get: <R extends LiquidityPositionRequest>(request: R, defaultValue?: (FieldsSelection<LiquidityPosition, R>[] | undefined)) => Observable<(FieldsSelection<LiquidityPosition, R>[] | undefined)>}),
    usdSwapped: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
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