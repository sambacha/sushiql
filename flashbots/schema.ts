import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Int: number,
    String: string,
    Boolean: boolean,
}

export interface Block {
    /** Block number */
    block_number: Scalars['Int']
    /** The miner's address */
    miner: Scalars['String']
    /** The total ETH reward paid to the miner. This includes gas fees and coinbase transfers */
    miner_reward: Scalars['String']
    /** The total ETH transferred directly to coinbase, not counting gas */
    coinbase_transfers: Scalars['String']
    /** Total gas used by the bundle */
    gas_used: Scalars['String']
    /** The adjusted gas price of the bundle. This is not an actual gas price, but it is what's used by mev-geth to sort bundles. Found by doing: miner_reward/gas_used */
    gas_price: Scalars['String']
    /** List of transactions */
    transactions: (Transaction | undefined)[]
    __typename: 'Block'
}

export interface Query {
    /** The latest block number that has been processed */
    latest_block_number: Scalars['Int']
    /** Returns the 100 most recent flashbots blocks. This also contains a list of transactions that were part of the flashbots bundle. Use query parameters to filter this down to blocks you're interested in. */
    blocks: (Block | undefined)[]
    /** Returns just a single block equal to the given block_number */
    block?: Block
    /** Returns the 100 most recent flashbots transactions. Use the before query param to filter to transactions before a given block number. */
    transactions: (Transaction | undefined)[]
    __typename: 'Query'
}

export interface Transaction {
    /** transaction hash */
    transaction_hash: Scalars['String']
    /** index of tx inside of bundle */
    tx_index: Scalars['Int']
    /** index of bundle inside of the block */
    bundle_index: Scalars['Int']
    /** block number */
    block_number: Scalars['Int']
    /** address of the externally owned account that created this transaction */
    eoa_address: Scalars['String']
    /** to address */
    to_address: Scalars['String']
    /** gas used in this transaction */
    gas_used: Scalars['Int']
    /** gas price of this transaction */
    gas_price: Scalars['String']
    /** ETH directly transferred to the coinbase, not counting gas */
    coinbase_transfer: Scalars['String']
    /** ETH transferred to the coinbase, including gas and direct transfers */
    total_miner_reward: Scalars['String']
    /** Block which this transaction belongs to */
    block: Block
    __typename: 'Transaction'
}

export interface BlockRequest{
    /** Block number */
    block_number?: boolean | number
    /** The miner's address */
    miner?: boolean | number
    /** The total ETH reward paid to the miner. This includes gas fees and coinbase transfers */
    miner_reward?: boolean | number
    /** The total ETH transferred directly to coinbase, not counting gas */
    coinbase_transfers?: boolean | number
    /** Total gas used by the bundle */
    gas_used?: boolean | number
    /** The adjusted gas price of the bundle. This is not an actual gas price, but it is what's used by mev-geth to sort bundles. Found by doing: miner_reward/gas_used */
    gas_price?: boolean | number
    /** List of transactions */
    transactions?: TransactionRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    /** The latest block number that has been processed */
    latest_block_number?: boolean | number
    /** Returns the 100 most recent flashbots blocks. This also contains a list of transactions that were part of the flashbots bundle. Use query parameters to filter this down to blocks you're interested in. */
    blocks?: [{
    /** Filter to a single miner address */
    miner?: (Scalars['String'] | null),
    /** Filter to get blocks including transactions sent by from */
    from?: (Scalars['String'] | null),
    /** Filter blocks to before this block number (exclusive, does not include this block number) */
    before?: (Scalars['String'] | null),
    /**
     * Number of blocks that are returned
     * Range between 1-10000
     */
    limit?: (Scalars['Int'] | null)},BlockRequest] | BlockRequest
    /** Returns just a single block equal to the given block_number */
    block?: [{
    /** Number of the block to return */
    block_number: Scalars['Int']},BlockRequest]
    /** Returns the 100 most recent flashbots transactions. Use the before query param to filter to transactions before a given block number. */
    transactions?: [{
    /** Filter transactions to before this block number (exclusive, does not include this block number) */
    before?: (Scalars['String'] | null),
    /**
     * Number of transactions that are returned
     * Range between 1-10000
     */
    limit?: (Scalars['Int'] | null)},TransactionRequest] | TransactionRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TransactionRequest{
    /** transaction hash */
    transaction_hash?: boolean | number
    /** index of tx inside of bundle */
    tx_index?: boolean | number
    /** index of bundle inside of the block */
    bundle_index?: boolean | number
    /** block number */
    block_number?: boolean | number
    /** address of the externally owned account that created this transaction */
    eoa_address?: boolean | number
    /** to address */
    to_address?: boolean | number
    /** gas used in this transaction */
    gas_used?: boolean | number
    /** gas price of this transaction */
    gas_price?: boolean | number
    /** ETH directly transferred to the coinbase, not counting gas */
    coinbase_transfer?: boolean | number
    /** ETH transferred to the coinbase, including gas and direct transfers */
    total_miner_reward?: boolean | number
    /** Block which this transaction belongs to */
    block?: BlockRequest
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



const Transaction_possibleTypes = ['Transaction']
export const isTransaction = (obj?: { __typename?: any } | null): obj is Transaction => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTransaction"')
  return Transaction_possibleTypes.includes(obj.__typename)
}


export interface BlockPromiseChain{
    
/** Block number */
block_number: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** The miner's address */
miner: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** The total ETH reward paid to the miner. This includes gas fees and coinbase transfers */
miner_reward: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** The total ETH transferred directly to coinbase, not counting gas */
coinbase_transfers: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Total gas used by the bundle */
gas_used: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** The adjusted gas price of the bundle. This is not an actual gas price, but it is what's used by mev-geth to sort bundles. Found by doing: miner_reward/gas_used */
gas_price: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** List of transactions */
transactions: ({get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)[]) => Promise<(FieldsSelection<Transaction, R> | undefined)[]>})
}

export interface BlockObservableChain{
    
/** Block number */
block_number: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** The miner's address */
miner: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** The total ETH reward paid to the miner. This includes gas fees and coinbase transfers */
miner_reward: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** The total ETH transferred directly to coinbase, not counting gas */
coinbase_transfers: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Total gas used by the bundle */
gas_used: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** The adjusted gas price of the bundle. This is not an actual gas price, but it is what's used by mev-geth to sort bundles. Found by doing: miner_reward/gas_used */
gas_price: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** List of transactions */
transactions: ({get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)[]) => Observable<(FieldsSelection<Transaction, R> | undefined)[]>})
}

export interface QueryPromiseChain{
    
/** The latest block number that has been processed */
latest_block_number: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** Returns the 100 most recent flashbots blocks. This also contains a list of transactions that were part of the flashbots bundle. Use query parameters to filter this down to blocks you're interested in. */
blocks: ((args?: {
/** Filter to a single miner address */
miner?: (Scalars['String'] | null),
/** Filter to get blocks including transactions sent by from */
from?: (Scalars['String'] | null),
/** Filter blocks to before this block number (exclusive, does not include this block number) */
before?: (Scalars['String'] | null),
/**
 * Number of blocks that are returned
 * Range between 1-10000
 */
limit?: (Scalars['Int'] | null)}) => {get: <R extends BlockRequest>(request: R, defaultValue?: (FieldsSelection<Block, R> | undefined)[]) => Promise<(FieldsSelection<Block, R> | undefined)[]>})&({get: <R extends BlockRequest>(request: R, defaultValue?: (FieldsSelection<Block, R> | undefined)[]) => Promise<(FieldsSelection<Block, R> | undefined)[]>}),
    
/** Returns just a single block equal to the given block_number */
block: ((args: {
/** Number of the block to return */
block_number: Scalars['Int']}) => BlockPromiseChain & {get: <R extends BlockRequest>(request: R, defaultValue?: (FieldsSelection<Block, R> | undefined)) => Promise<(FieldsSelection<Block, R> | undefined)>}),
    
/** Returns the 100 most recent flashbots transactions. Use the before query param to filter to transactions before a given block number. */
transactions: ((args?: {
/** Filter transactions to before this block number (exclusive, does not include this block number) */
before?: (Scalars['String'] | null),
/**
 * Number of transactions that are returned
 * Range between 1-10000
 */
limit?: (Scalars['Int'] | null)}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)[]) => Promise<(FieldsSelection<Transaction, R> | undefined)[]>})&({get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)[]) => Promise<(FieldsSelection<Transaction, R> | undefined)[]>})
}

export interface QueryObservableChain{
    
/** The latest block number that has been processed */
latest_block_number: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** Returns the 100 most recent flashbots blocks. This also contains a list of transactions that were part of the flashbots bundle. Use query parameters to filter this down to blocks you're interested in. */
blocks: ((args?: {
/** Filter to a single miner address */
miner?: (Scalars['String'] | null),
/** Filter to get blocks including transactions sent by from */
from?: (Scalars['String'] | null),
/** Filter blocks to before this block number (exclusive, does not include this block number) */
before?: (Scalars['String'] | null),
/**
 * Number of blocks that are returned
 * Range between 1-10000
 */
limit?: (Scalars['Int'] | null)}) => {get: <R extends BlockRequest>(request: R, defaultValue?: (FieldsSelection<Block, R> | undefined)[]) => Observable<(FieldsSelection<Block, R> | undefined)[]>})&({get: <R extends BlockRequest>(request: R, defaultValue?: (FieldsSelection<Block, R> | undefined)[]) => Observable<(FieldsSelection<Block, R> | undefined)[]>}),
    
/** Returns just a single block equal to the given block_number */
block: ((args: {
/** Number of the block to return */
block_number: Scalars['Int']}) => BlockObservableChain & {get: <R extends BlockRequest>(request: R, defaultValue?: (FieldsSelection<Block, R> | undefined)) => Observable<(FieldsSelection<Block, R> | undefined)>}),
    
/** Returns the 100 most recent flashbots transactions. Use the before query param to filter to transactions before a given block number. */
transactions: ((args?: {
/** Filter transactions to before this block number (exclusive, does not include this block number) */
before?: (Scalars['String'] | null),
/**
 * Number of transactions that are returned
 * Range between 1-10000
 */
limit?: (Scalars['Int'] | null)}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)[]) => Observable<(FieldsSelection<Transaction, R> | undefined)[]>})&({get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)[]) => Observable<(FieldsSelection<Transaction, R> | undefined)[]>})
}

export interface TransactionPromiseChain{
    
/** transaction hash */
transaction_hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** index of tx inside of bundle */
tx_index: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** index of bundle inside of the block */
bundle_index: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** block number */
block_number: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** address of the externally owned account that created this transaction */
eoa_address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** to address */
to_address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** gas used in this transaction */
gas_used: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** gas price of this transaction */
gas_price: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** ETH directly transferred to the coinbase, not counting gas */
coinbase_transfer: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** ETH transferred to the coinbase, including gas and direct transfers */
total_miner_reward: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Block which this transaction belongs to */
block: (BlockPromiseChain & {get: <R extends BlockRequest>(request: R, defaultValue?: FieldsSelection<Block, R>) => Promise<FieldsSelection<Block, R>>})
}

export interface TransactionObservableChain{
    
/** transaction hash */
transaction_hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** index of tx inside of bundle */
tx_index: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** index of bundle inside of the block */
bundle_index: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** block number */
block_number: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** address of the externally owned account that created this transaction */
eoa_address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** to address */
to_address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** gas used in this transaction */
gas_used: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** gas price of this transaction */
gas_price: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** ETH directly transferred to the coinbase, not counting gas */
coinbase_transfer: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** ETH transferred to the coinbase, including gas and direct transfers */
total_miner_reward: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Block which this transaction belongs to */
block: (BlockObservableChain & {get: <R extends BlockRequest>(request: R, defaultValue?: FieldsSelection<Block, R>) => Observable<FieldsSelection<Block, R>>})
}