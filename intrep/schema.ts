import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    BigDecimal: any,
    BigInt: any,
    Boolean: boolean,
    Bytes: any,
    Float: number,
    ID: string,
    Int: number,
    String: string,
}

export interface Group {
    id: Scalars['ID']
    provider: Scalars['String']
    name: Scalars['String']
    depth: Scalars['Int']
    root: Scalars['BigInt']
    __typename: 'Group'
}

export type Group_orderBy = 'id' | 'provider' | 'name' | 'depth' | 'root'


/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc'

export interface Query {
    group?: Group
    groups: Group[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Query'
}

export interface Subscription {
    group?: Group
    groups: Group[]
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

export interface BlockChangedFilter {number_gte: Scalars['Int']}

export interface Block_height {hash?: (Scalars['Bytes'] | null),number?: (Scalars['Int'] | null),number_gte?: (Scalars['Int'] | null)}

export interface GroupRequest{
    id?: boolean | number
    provider?: boolean | number
    name?: boolean | number
    depth?: boolean | number
    root?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Group_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),provider?: (Scalars['String'] | null),provider_not?: (Scalars['String'] | null),provider_gt?: (Scalars['String'] | null),provider_lt?: (Scalars['String'] | null),provider_gte?: (Scalars['String'] | null),provider_lte?: (Scalars['String'] | null),provider_in?: (Scalars['String'][] | null),provider_not_in?: (Scalars['String'][] | null),provider_contains?: (Scalars['String'] | null),provider_contains_nocase?: (Scalars['String'] | null),provider_not_contains?: (Scalars['String'] | null),provider_not_contains_nocase?: (Scalars['String'] | null),provider_starts_with?: (Scalars['String'] | null),provider_starts_with_nocase?: (Scalars['String'] | null),provider_not_starts_with?: (Scalars['String'] | null),provider_not_starts_with_nocase?: (Scalars['String'] | null),provider_ends_with?: (Scalars['String'] | null),provider_ends_with_nocase?: (Scalars['String'] | null),provider_not_ends_with?: (Scalars['String'] | null),provider_not_ends_with_nocase?: (Scalars['String'] | null),name?: (Scalars['String'] | null),name_not?: (Scalars['String'] | null),name_gt?: (Scalars['String'] | null),name_lt?: (Scalars['String'] | null),name_gte?: (Scalars['String'] | null),name_lte?: (Scalars['String'] | null),name_in?: (Scalars['String'][] | null),name_not_in?: (Scalars['String'][] | null),name_contains?: (Scalars['String'] | null),name_contains_nocase?: (Scalars['String'] | null),name_not_contains?: (Scalars['String'] | null),name_not_contains_nocase?: (Scalars['String'] | null),name_starts_with?: (Scalars['String'] | null),name_starts_with_nocase?: (Scalars['String'] | null),name_not_starts_with?: (Scalars['String'] | null),name_not_starts_with_nocase?: (Scalars['String'] | null),name_ends_with?: (Scalars['String'] | null),name_ends_with_nocase?: (Scalars['String'] | null),name_not_ends_with?: (Scalars['String'] | null),name_not_ends_with_nocase?: (Scalars['String'] | null),depth?: (Scalars['Int'] | null),depth_not?: (Scalars['Int'] | null),depth_gt?: (Scalars['Int'] | null),depth_lt?: (Scalars['Int'] | null),depth_gte?: (Scalars['Int'] | null),depth_lte?: (Scalars['Int'] | null),depth_in?: (Scalars['Int'][] | null),depth_not_in?: (Scalars['Int'][] | null),root?: (Scalars['BigInt'] | null),root_not?: (Scalars['BigInt'] | null),root_gt?: (Scalars['BigInt'] | null),root_lt?: (Scalars['BigInt'] | null),root_gte?: (Scalars['BigInt'] | null),root_lte?: (Scalars['BigInt'] | null),root_in?: (Scalars['BigInt'][] | null),root_not_in?: (Scalars['BigInt'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null)}

export interface QueryRequest{
    group?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},GroupRequest]
    groups?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Group_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Group_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},GroupRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionRequest{
    group?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},GroupRequest]
    groups?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Group_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Group_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},GroupRequest]
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


const Group_possibleTypes = ['Group']
export const isGroup = (obj?: { __typename?: any } | null): obj is Group => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGroup"')
  return Group_possibleTypes.includes(obj.__typename)
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


export interface GroupPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    provider: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    depth: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    root: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface GroupObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    provider: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    depth: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    root: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface QueryPromiseChain{
    group: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => GroupPromiseChain & {get: <R extends GroupRequest>(request: R, defaultValue?: (FieldsSelection<Group, R> | undefined)) => Promise<(FieldsSelection<Group, R> | undefined)>}),
    groups: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Group_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Group_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends GroupRequest>(request: R, defaultValue?: FieldsSelection<Group, R>[]) => Promise<FieldsSelection<Group, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface QueryObservableChain{
    group: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => GroupObservableChain & {get: <R extends GroupRequest>(request: R, defaultValue?: (FieldsSelection<Group, R> | undefined)) => Observable<(FieldsSelection<Group, R> | undefined)>}),
    groups: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Group_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Group_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends GroupRequest>(request: R, defaultValue?: FieldsSelection<Group, R>[]) => Observable<FieldsSelection<Group, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionPromiseChain{
    group: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => GroupPromiseChain & {get: <R extends GroupRequest>(request: R, defaultValue?: (FieldsSelection<Group, R> | undefined)) => Promise<(FieldsSelection<Group, R> | undefined)>}),
    groups: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Group_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Group_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends GroupRequest>(request: R, defaultValue?: FieldsSelection<Group, R>[]) => Promise<FieldsSelection<Group, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionObservableChain{
    group: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => GroupObservableChain & {get: <R extends GroupRequest>(request: R, defaultValue?: (FieldsSelection<Group, R> | undefined)) => Observable<(FieldsSelection<Group, R> | undefined)>}),
    groups: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Group_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Group_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends GroupRequest>(request: R, defaultValue?: FieldsSelection<Group, R>[]) => Observable<FieldsSelection<Group, R>[]>}),
    
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