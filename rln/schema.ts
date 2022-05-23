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


/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc'

export interface Query {
    registrationEntity?: RegistrationEntity
    registrationEntities: RegistrationEntity[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Query'
}

export interface RegistrationEntity {
    id: Scalars['ID']
    pubkey: Scalars['Bytes']
    idCommitment: Scalars['Bytes']
    signature: Scalars['Bytes']
    __typename: 'RegistrationEntity'
}

export type RegistrationEntity_orderBy = 'id' | 'pubkey' | 'idCommitment' | 'signature'

export interface Subscription {
    registrationEntity?: RegistrationEntity
    registrationEntities: RegistrationEntity[]
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

export interface QueryRequest{
    registrationEntity?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},RegistrationEntityRequest]
    registrationEntities?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RegistrationEntity_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RegistrationEntity_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},RegistrationEntityRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RegistrationEntityRequest{
    id?: boolean | number
    pubkey?: boolean | number
    idCommitment?: boolean | number
    signature?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RegistrationEntity_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),pubkey?: (Scalars['Bytes'] | null),pubkey_not?: (Scalars['Bytes'] | null),pubkey_in?: (Scalars['Bytes'][] | null),pubkey_not_in?: (Scalars['Bytes'][] | null),pubkey_contains?: (Scalars['Bytes'] | null),pubkey_not_contains?: (Scalars['Bytes'] | null),idCommitment?: (Scalars['Bytes'] | null),idCommitment_not?: (Scalars['Bytes'] | null),idCommitment_in?: (Scalars['Bytes'][] | null),idCommitment_not_in?: (Scalars['Bytes'][] | null),idCommitment_contains?: (Scalars['Bytes'] | null),idCommitment_not_contains?: (Scalars['Bytes'] | null),signature?: (Scalars['Bytes'] | null),signature_not?: (Scalars['Bytes'] | null),signature_in?: (Scalars['Bytes'][] | null),signature_not_in?: (Scalars['Bytes'][] | null),signature_contains?: (Scalars['Bytes'] | null),signature_not_contains?: (Scalars['Bytes'] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null)}

export interface SubscriptionRequest{
    registrationEntity?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},RegistrationEntityRequest]
    registrationEntities?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RegistrationEntity_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RegistrationEntity_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},RegistrationEntityRequest]
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


const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const RegistrationEntity_possibleTypes = ['RegistrationEntity']
export const isRegistrationEntity = (obj?: { __typename?: any } | null): obj is RegistrationEntity => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRegistrationEntity"')
  return RegistrationEntity_possibleTypes.includes(obj.__typename)
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


export interface QueryPromiseChain{
    registrationEntity: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => RegistrationEntityPromiseChain & {get: <R extends RegistrationEntityRequest>(request: R, defaultValue?: (FieldsSelection<RegistrationEntity, R> | undefined)) => Promise<(FieldsSelection<RegistrationEntity, R> | undefined)>}),
    registrationEntities: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RegistrationEntity_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RegistrationEntity_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends RegistrationEntityRequest>(request: R, defaultValue?: FieldsSelection<RegistrationEntity, R>[]) => Promise<FieldsSelection<RegistrationEntity, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface QueryObservableChain{
    registrationEntity: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => RegistrationEntityObservableChain & {get: <R extends RegistrationEntityRequest>(request: R, defaultValue?: (FieldsSelection<RegistrationEntity, R> | undefined)) => Observable<(FieldsSelection<RegistrationEntity, R> | undefined)>}),
    registrationEntities: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RegistrationEntity_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RegistrationEntity_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends RegistrationEntityRequest>(request: R, defaultValue?: FieldsSelection<RegistrationEntity, R>[]) => Observable<FieldsSelection<RegistrationEntity, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface RegistrationEntityPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    pubkey: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    idCommitment: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    signature: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>})
}

export interface RegistrationEntityObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    pubkey: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    idCommitment: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    signature: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>})
}

export interface SubscriptionPromiseChain{
    registrationEntity: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => RegistrationEntityPromiseChain & {get: <R extends RegistrationEntityRequest>(request: R, defaultValue?: (FieldsSelection<RegistrationEntity, R> | undefined)) => Promise<(FieldsSelection<RegistrationEntity, R> | undefined)>}),
    registrationEntities: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RegistrationEntity_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RegistrationEntity_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends RegistrationEntityRequest>(request: R, defaultValue?: FieldsSelection<RegistrationEntity, R>[]) => Promise<FieldsSelection<RegistrationEntity, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionObservableChain{
    registrationEntity: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => RegistrationEntityObservableChain & {get: <R extends RegistrationEntityRequest>(request: R, defaultValue?: (FieldsSelection<RegistrationEntity, R> | undefined)) => Observable<(FieldsSelection<RegistrationEntity, R> | undefined)>}),
    registrationEntities: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (RegistrationEntity_orderBy | null),orderDirection?: (OrderDirection | null),where?: (RegistrationEntity_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends RegistrationEntityRequest>(request: R, defaultValue?: FieldsSelection<RegistrationEntity, R>[]) => Observable<FieldsSelection<RegistrationEntity, R>[]>}),
    
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