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

export interface Block {
    id: Scalars['ID']
    number: Scalars['BigInt']
    timestamp: Scalars['BigInt']
    parentHash?: Scalars['String']
    author?: Scalars['String']
    difficulty?: Scalars['BigInt']
    totalDifficulty?: Scalars['BigInt']
    gasUsed?: Scalars['BigInt']
    gasLimit?: Scalars['BigInt']
    receiptsRoot?: Scalars['String']
    transactionsRoot?: Scalars['String']
    stateRoot?: Scalars['String']
    size?: Scalars['BigInt']
    unclesHash?: Scalars['String']
    __typename: 'Block'
}

export type Block_orderBy = 'id' | 'number' | 'timestamp' | 'parentHash' | 'author' | 'difficulty' | 'totalDifficulty' | 'gasUsed' | 'gasLimit' | 'receiptsRoot' | 'transactionsRoot' | 'stateRoot' | 'size' | 'unclesHash'

export type OrderDirection = 'asc' | 'desc'

export interface Query {
    block?: Block
    blocks: Block[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Query'
}

export interface Subscription {
    block?: Block
    blocks: Block[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Subscription'
}

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

export interface BlockRequest{
    id?: boolean | number
    number?: boolean | number
    timestamp?: boolean | number
    parentHash?: boolean | number
    author?: boolean | number
    difficulty?: boolean | number
    totalDifficulty?: boolean | number
    gasUsed?: boolean | number
    gasLimit?: boolean | number
    receiptsRoot?: boolean | number
    transactionsRoot?: boolean | number
    stateRoot?: boolean | number
    size?: boolean | number
    unclesHash?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Block_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),number?: (Scalars['BigInt'] | null),number_not?: (Scalars['BigInt'] | null),number_gt?: (Scalars['BigInt'] | null),number_lt?: (Scalars['BigInt'] | null),number_gte?: (Scalars['BigInt'] | null),number_lte?: (Scalars['BigInt'] | null),number_in?: (Scalars['BigInt'][] | null),number_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),parentHash?: (Scalars['String'] | null),parentHash_not?: (Scalars['String'] | null),parentHash_gt?: (Scalars['String'] | null),parentHash_lt?: (Scalars['String'] | null),parentHash_gte?: (Scalars['String'] | null),parentHash_lte?: (Scalars['String'] | null),parentHash_in?: (Scalars['String'][] | null),parentHash_not_in?: (Scalars['String'][] | null),parentHash_contains?: (Scalars['String'] | null),parentHash_not_contains?: (Scalars['String'] | null),parentHash_starts_with?: (Scalars['String'] | null),parentHash_not_starts_with?: (Scalars['String'] | null),parentHash_ends_with?: (Scalars['String'] | null),parentHash_not_ends_with?: (Scalars['String'] | null),author?: (Scalars['String'] | null),author_not?: (Scalars['String'] | null),author_gt?: (Scalars['String'] | null),author_lt?: (Scalars['String'] | null),author_gte?: (Scalars['String'] | null),author_lte?: (Scalars['String'] | null),author_in?: (Scalars['String'][] | null),author_not_in?: (Scalars['String'][] | null),author_contains?: (Scalars['String'] | null),author_not_contains?: (Scalars['String'] | null),author_starts_with?: (Scalars['String'] | null),author_not_starts_with?: (Scalars['String'] | null),author_ends_with?: (Scalars['String'] | null),author_not_ends_with?: (Scalars['String'] | null),difficulty?: (Scalars['BigInt'] | null),difficulty_not?: (Scalars['BigInt'] | null),difficulty_gt?: (Scalars['BigInt'] | null),difficulty_lt?: (Scalars['BigInt'] | null),difficulty_gte?: (Scalars['BigInt'] | null),difficulty_lte?: (Scalars['BigInt'] | null),difficulty_in?: (Scalars['BigInt'][] | null),difficulty_not_in?: (Scalars['BigInt'][] | null),totalDifficulty?: (Scalars['BigInt'] | null),totalDifficulty_not?: (Scalars['BigInt'] | null),totalDifficulty_gt?: (Scalars['BigInt'] | null),totalDifficulty_lt?: (Scalars['BigInt'] | null),totalDifficulty_gte?: (Scalars['BigInt'] | null),totalDifficulty_lte?: (Scalars['BigInt'] | null),totalDifficulty_in?: (Scalars['BigInt'][] | null),totalDifficulty_not_in?: (Scalars['BigInt'][] | null),gasUsed?: (Scalars['BigInt'] | null),gasUsed_not?: (Scalars['BigInt'] | null),gasUsed_gt?: (Scalars['BigInt'] | null),gasUsed_lt?: (Scalars['BigInt'] | null),gasUsed_gte?: (Scalars['BigInt'] | null),gasUsed_lte?: (Scalars['BigInt'] | null),gasUsed_in?: (Scalars['BigInt'][] | null),gasUsed_not_in?: (Scalars['BigInt'][] | null),gasLimit?: (Scalars['BigInt'] | null),gasLimit_not?: (Scalars['BigInt'] | null),gasLimit_gt?: (Scalars['BigInt'] | null),gasLimit_lt?: (Scalars['BigInt'] | null),gasLimit_gte?: (Scalars['BigInt'] | null),gasLimit_lte?: (Scalars['BigInt'] | null),gasLimit_in?: (Scalars['BigInt'][] | null),gasLimit_not_in?: (Scalars['BigInt'][] | null),receiptsRoot?: (Scalars['String'] | null),receiptsRoot_not?: (Scalars['String'] | null),receiptsRoot_gt?: (Scalars['String'] | null),receiptsRoot_lt?: (Scalars['String'] | null),receiptsRoot_gte?: (Scalars['String'] | null),receiptsRoot_lte?: (Scalars['String'] | null),receiptsRoot_in?: (Scalars['String'][] | null),receiptsRoot_not_in?: (Scalars['String'][] | null),receiptsRoot_contains?: (Scalars['String'] | null),receiptsRoot_not_contains?: (Scalars['String'] | null),receiptsRoot_starts_with?: (Scalars['String'] | null),receiptsRoot_not_starts_with?: (Scalars['String'] | null),receiptsRoot_ends_with?: (Scalars['String'] | null),receiptsRoot_not_ends_with?: (Scalars['String'] | null),transactionsRoot?: (Scalars['String'] | null),transactionsRoot_not?: (Scalars['String'] | null),transactionsRoot_gt?: (Scalars['String'] | null),transactionsRoot_lt?: (Scalars['String'] | null),transactionsRoot_gte?: (Scalars['String'] | null),transactionsRoot_lte?: (Scalars['String'] | null),transactionsRoot_in?: (Scalars['String'][] | null),transactionsRoot_not_in?: (Scalars['String'][] | null),transactionsRoot_contains?: (Scalars['String'] | null),transactionsRoot_not_contains?: (Scalars['String'] | null),transactionsRoot_starts_with?: (Scalars['String'] | null),transactionsRoot_not_starts_with?: (Scalars['String'] | null),transactionsRoot_ends_with?: (Scalars['String'] | null),transactionsRoot_not_ends_with?: (Scalars['String'] | null),stateRoot?: (Scalars['String'] | null),stateRoot_not?: (Scalars['String'] | null),stateRoot_gt?: (Scalars['String'] | null),stateRoot_lt?: (Scalars['String'] | null),stateRoot_gte?: (Scalars['String'] | null),stateRoot_lte?: (Scalars['String'] | null),stateRoot_in?: (Scalars['String'][] | null),stateRoot_not_in?: (Scalars['String'][] | null),stateRoot_contains?: (Scalars['String'] | null),stateRoot_not_contains?: (Scalars['String'] | null),stateRoot_starts_with?: (Scalars['String'] | null),stateRoot_not_starts_with?: (Scalars['String'] | null),stateRoot_ends_with?: (Scalars['String'] | null),stateRoot_not_ends_with?: (Scalars['String'] | null),size?: (Scalars['BigInt'] | null),size_not?: (Scalars['BigInt'] | null),size_gt?: (Scalars['BigInt'] | null),size_lt?: (Scalars['BigInt'] | null),size_gte?: (Scalars['BigInt'] | null),size_lte?: (Scalars['BigInt'] | null),size_in?: (Scalars['BigInt'][] | null),size_not_in?: (Scalars['BigInt'][] | null),unclesHash?: (Scalars['String'] | null),unclesHash_not?: (Scalars['String'] | null),unclesHash_gt?: (Scalars['String'] | null),unclesHash_lt?: (Scalars['String'] | null),unclesHash_gte?: (Scalars['String'] | null),unclesHash_lte?: (Scalars['String'] | null),unclesHash_in?: (Scalars['String'][] | null),unclesHash_not_in?: (Scalars['String'][] | null),unclesHash_contains?: (Scalars['String'] | null),unclesHash_not_contains?: (Scalars['String'] | null),unclesHash_starts_with?: (Scalars['String'] | null),unclesHash_not_starts_with?: (Scalars['String'] | null),unclesHash_ends_with?: (Scalars['String'] | null),unclesHash_not_ends_with?: (Scalars['String'] | null)}

export interface Block_height {hash?: (Scalars['Bytes'] | null),number?: (Scalars['Int'] | null)}

export interface QueryRequest{
    block?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BlockRequest]
    blocks?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Block_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Block_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BlockRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionRequest{
    block?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BlockRequest]
    blocks?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Block_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Block_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},BlockRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

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


const Block_possibleTypes = ['Block']
export const isBlock = (obj?: { __typename?: any } | null): obj is Block => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBlock"')
  return Block_possibleTypes.includes(obj.__typename)
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


export interface BlockPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    number: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    parentHash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    author: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    difficulty: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>}),
    totalDifficulty: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>}),
    gasUsed: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>}),
    gasLimit: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>}),
    receiptsRoot: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    transactionsRoot: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    stateRoot: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    size: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>}),
    unclesHash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface BlockObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    number: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    parentHash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    author: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    difficulty: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>}),
    totalDifficulty: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>}),
    gasUsed: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>}),
    gasLimit: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>}),
    receiptsRoot: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    transactionsRoot: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    stateRoot: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    size: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>}),
    unclesHash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface QueryPromiseChain{
    block: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BlockPromiseChain & {get: <R extends BlockRequest>(request: R, defaultValue?: (FieldsSelection<Block, R> | undefined)) => Promise<(FieldsSelection<Block, R> | undefined)>}),
    blocks: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Block_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Block_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BlockRequest>(request: R, defaultValue?: FieldsSelection<Block, R>[]) => Promise<FieldsSelection<Block, R>[]>})&({get: <R extends BlockRequest>(request: R, defaultValue?: FieldsSelection<Block, R>[]) => Promise<FieldsSelection<Block, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface QueryObservableChain{
    block: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BlockObservableChain & {get: <R extends BlockRequest>(request: R, defaultValue?: (FieldsSelection<Block, R> | undefined)) => Observable<(FieldsSelection<Block, R> | undefined)>}),
    blocks: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Block_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Block_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BlockRequest>(request: R, defaultValue?: FieldsSelection<Block, R>[]) => Observable<FieldsSelection<Block, R>[]>})&({get: <R extends BlockRequest>(request: R, defaultValue?: FieldsSelection<Block, R>[]) => Observable<FieldsSelection<Block, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionPromiseChain{
    block: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BlockPromiseChain & {get: <R extends BlockRequest>(request: R, defaultValue?: (FieldsSelection<Block, R> | undefined)) => Promise<(FieldsSelection<Block, R> | undefined)>}),
    blocks: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Block_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Block_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BlockRequest>(request: R, defaultValue?: FieldsSelection<Block, R>[]) => Promise<FieldsSelection<Block, R>[]>})&({get: <R extends BlockRequest>(request: R, defaultValue?: FieldsSelection<Block, R>[]) => Promise<FieldsSelection<Block, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionObservableChain{
    block: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => BlockObservableChain & {get: <R extends BlockRequest>(request: R, defaultValue?: (FieldsSelection<Block, R> | undefined)) => Observable<(FieldsSelection<Block, R> | undefined)>}),
    blocks: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Block_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Block_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends BlockRequest>(request: R, defaultValue?: FieldsSelection<Block, R>[]) => Observable<FieldsSelection<Block, R>[]>})&({get: <R extends BlockRequest>(request: R, defaultValue?: FieldsSelection<Block, R>[]) => Observable<FieldsSelection<Block, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
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