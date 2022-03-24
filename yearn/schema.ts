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

export interface Account {
    /** Account address */
    id: Scalars['ID']
    /** Vault deposits */
    deposits: Deposit[]
    /** Vault withdrawals */
    withdrawals: Withdrawal[]
    /** Vault positions */
    vaultPositions: AccountVaultPosition[]
    /** Incoming share transfers */
    sharesReceived: Transfer[]
    /** Outgoing share transfers */
    sharesSent: Transfer[]
    __typename: 'Account'
}

export interface AccountVaultPosition {
    /** Account-Vault */
    id: Scalars['ID']
    /** Vault */
    vault: Vault
    /** Account */
    account: Account
    /** Vault token */
    token: Token
    /** Vault share token */
    shareToken: Token
    /** Created in transaction */
    transaction: Transaction
    /** Latest account update for this Vault */
    latestUpdate: AccountVaultPositionUpdate
    /** Account updates over time */
    updates: AccountVaultPositionUpdate[]
    /** Share balance */
    balanceShares: Scalars['BigInt']
    /** The current balance of tokens defined as: sum(deposits) - sum(withdrawals) + sum(received transfers) - sum(sent transfers). */
    balanceTokens: Scalars['BigInt']
    /** The current balance position defined as: (vault.balanceOf(account) * (vault.pricePerShare() / 10**vault.decimals())). */
    balancePosition: Scalars['BigInt']
    /** The accumulated profit balance for the account/vault. It is only calculated when the user withdraws all the shares. */
    balanceProfit: Scalars['BigInt']
    __typename: 'AccountVaultPosition'
}

export interface AccountVaultPositionUpdate {
    /** Account-Vault-Order */
    id: Scalars['ID']
    /** Incremental value for the same account/vault. */
    order: Scalars['BigInt']
    /** Timestamp */
    timestamp: Scalars['BigInt']
    /** Block number */
    blockNumber: Scalars['BigInt']
    /** Account that owns position update */
    account: Account
    /** The account vault position that this update applies to */
    accountVaultPosition: AccountVaultPosition
    /** Ethereum Transaction */
    transaction: Transaction
    /** Sum of token deposits */
    deposits: Scalars['BigInt']
    /** Sum of token withdrawals */
    withdrawals: Scalars['BigInt']
    /** Sum of share tokens minted */
    sharesMinted: Scalars['BigInt']
    /** Sum of share tokens burnt */
    sharesBurnt: Scalars['BigInt']
    tokensSent: Scalars['BigInt']
    tokensReceived: Scalars['BigInt']
    sharesSent: Scalars['BigInt']
    sharesReceived: Scalars['BigInt']
    balanceShares: Scalars['BigInt']
    /** The balance position. */
    balancePosition: Scalars['BigInt']
    /** Vault Update */
    vaultUpdate: VaultUpdate
    __typename: 'AccountVaultPositionUpdate'
}

export type AccountVaultPositionUpdate_orderBy = 'id' | 'order' | 'timestamp' | 'blockNumber' | 'account' | 'accountVaultPosition' | 'transaction' | 'deposits' | 'withdrawals' | 'sharesMinted' | 'sharesBurnt' | 'tokensSent' | 'tokensReceived' | 'sharesSent' | 'sharesReceived' | 'balanceShares' | 'balancePosition' | 'vaultUpdate'

export type AccountVaultPosition_orderBy = 'id' | 'vault' | 'account' | 'token' | 'shareToken' | 'transaction' | 'latestUpdate' | 'updates' | 'balanceShares' | 'balanceTokens' | 'balancePosition' | 'balanceProfit'

export type Account_orderBy = 'id' | 'deposits' | 'withdrawals' | 'vaultPositions' | 'sharesReceived' | 'sharesSent'

export interface Deposit {
    /** Transaction-Log */
    id: Scalars['ID']
    /** Timestamp of update */
    timestamp: Scalars['BigInt']
    /** Block number of update */
    blockNumber: Scalars['BigInt']
    /** Account making Deposit */
    account: Account
    /** Vault deposited into */
    vault: Vault
    /** Number of Tokens deposited into Vault */
    tokenAmount: Scalars['BigInt']
    /** Number of new Vault Shares minted */
    sharesMinted: Scalars['BigInt']
    /** Ethereum Transaction */
    transaction: Transaction
    /** Vault Update */
    vaultUpdate: VaultUpdate
    __typename: 'Deposit'
}

export type Deposit_orderBy = 'id' | 'timestamp' | 'blockNumber' | 'account' | 'vault' | 'tokenAmount' | 'sharesMinted' | 'transaction' | 'vaultUpdate'

export interface Harvest {
    /** Strategy-Transaction-Log */
    id: Scalars['ID']
    /** Timestamp the strategy report was most recently updated. */
    timestamp: Scalars['BigInt']
    /** Blocknumber the strategy report was most recently updated. */
    blockNumber: Scalars['BigInt']
    /** Ethereum Transaction */
    transaction: Transaction
    /** Vault that owns the strategy */
    vault: Vault
    /** Strategy that harvested */
    strategy: Strategy
    /** Function caller */
    harvester: Scalars['Bytes']
    /** The reported profit amount for the strategy at the time of the harvest. */
    profit: Scalars['BigInt']
    /** The reported loss amount for the strategy at the time of the harvest. */
    loss: Scalars['BigInt']
    /** The reported debt paid from strategy at the time of the harvest. */
    debtPayment: Scalars['BigInt']
    /** The reported outstanding debt from strategy at the time of the harvest. */
    debtOutstanding: Scalars['BigInt']
    __typename: 'Harvest'
}

export type Harvest_orderBy = 'id' | 'timestamp' | 'blockNumber' | 'transaction' | 'vault' | 'strategy' | 'harvester' | 'profit' | 'loss' | 'debtPayment' | 'debtOutstanding'

export type OrderDirection = 'asc' | 'desc'

export interface Query {
    transaction?: Transaction
    transactions: Transaction[]
    token?: Token
    tokens: Token[]
    tokenFee?: TokenFee
    tokenFees: TokenFee[]
    registry?: Registry
    registries: Registry[]
    vault?: Vault
    vaults: Vault[]
    vaultUpdate?: VaultUpdate
    vaultUpdates: VaultUpdate[]
    account?: Account
    accounts: Account[]
    deposit?: Deposit
    deposits: Deposit[]
    withdrawal?: Withdrawal
    withdrawals: Withdrawal[]
    transfer?: Transfer
    transfers: Transfer[]
    accountVaultPosition?: AccountVaultPosition
    accountVaultPositions: AccountVaultPosition[]
    accountVaultPositionUpdate?: AccountVaultPositionUpdate
    accountVaultPositionUpdates: AccountVaultPositionUpdate[]
    strategy?: Strategy
    strategies: Strategy[]
    strategyReport?: StrategyReport
    strategyReports: StrategyReport[]
    strategyReportResult?: StrategyReportResult
    strategyReportResults: StrategyReportResult[]
    harvest?: Harvest
    harvests: Harvest[]
    vaultDayData?: VaultDayData
    vaultDayDatas: VaultDayData[]
    yearn?: Yearn
    yearns: Yearn[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Query'
}

export interface Registry {
    /** Registry address */
    id: Scalars['ID']
    /** Transaction timestamp */
    timestamp: Scalars['BigInt']
    /** Transaction/Block Block number */
    blockNumber: Scalars['BigInt']
    /** Ethereum Transaction */
    transaction: Transaction
    /** Vaults registered in the registry. */
    vaults: Vault[]
    __typename: 'Registry'
}

export type Registry_orderBy = 'id' | 'timestamp' | 'blockNumber' | 'transaction' | 'vaults'

export interface Strategy {
    /** Strategy address */
    id: Scalars['ID']
    /** Strategy name. */
    name: Scalars['String']
    /** Timestamp the vault information was most recently updated. */
    timestamp: Scalars['BigInt']
    /** Blocknumber the vault information was most recently updated. */
    blockNumber: Scalars['BigInt']
    /** Ethereum Transaction */
    transaction: Transaction
    /** The Strategy address. */
    address: Scalars['Bytes']
    /** The health check contract address. */
    healthCheck?: Scalars['Bytes']
    /** Defines whether the strategy will call the health check or not. */
    doHealthCheck: Scalars['Boolean']
    /** Defines whether this strategy is within the vault queue. */
    inQueue: Scalars['Boolean']
    /** The Vault */
    vault: Vault
    /** Strategy reference used to clone this strategy. */
    clonedFrom?: Strategy
    /** Defines the maximum borrow amount. In strategies <v0.3.5 it is debtRatio. */
    debtLimit: Scalars['BigInt']
    /** Lower limit on the increase of debt since last harvest. */
    minDebtPerHarvest: Scalars['BigInt']
    /** Upper limit on the increase of debt since last harvest. */
    maxDebtPerHarvest: Scalars['BigInt']
    /** It is the current rate limit. It increases/decreases per block. */
    rateLimit: Scalars['BigInt']
    /** Defines the strategist's fee (basis points). */
    performanceFeeBps: Scalars['BigInt']
    /** The latest report for this Strategy */
    latestReport?: StrategyReport
    /** The reports created by this strategy. */
    reports: StrategyReport[]
    /** harvest() calls */
    harvests: Harvest[]
    __typename: 'Strategy'
}

export interface StrategyReport {
    /** The Strategy Report ID. */
    id: Scalars['ID']
    /** Timestamp the strategy report was most recently updated. */
    timestamp: Scalars['BigInt']
    /** Blocknumber the strategy report was most recently updated. */
    blockNumber: Scalars['BigInt']
    /** Ethereum Transaction */
    transaction: Transaction
    /** The Strategy reference. */
    strategy: Strategy
    /** The reported gain amount for the strategy. */
    gain: Scalars['BigInt']
    /** The reported loss amount for the strategy. */
    loss: Scalars['BigInt']
    /** The reported total gain amount for the strategy. */
    totalGain: Scalars['BigInt']
    /** The reported total loss amount for the strategy. */
    totalLoss: Scalars['BigInt']
    /** The reported total debt amount for the strategy. */
    totalDebt: Scalars['BigInt']
    /** The reported debt added amount for the strategy. */
    debtAdded: Scalars['BigInt']
    /** The reported debt limit amount for the strategy. */
    debtLimit: Scalars['BigInt']
    /** The reported debt paid for the strategy. This field is 0 for v0.3.0 or v0.3.1. */
    debtPaid: Scalars['BigInt']
    /** The results created by this report. They are generated comparing the previous report and the current one. */
    results: StrategyReportResult[]
    __typename: 'StrategyReport'
}

export interface StrategyReportResult {
    /** The Strategy Report Result ID. */
    id: Scalars['ID']
    /** Timestamp the strategy report was most recently updated. */
    timestamp: Scalars['BigInt']
    /** Blocknumber the strategy report was most recently updated. */
    blockNumber: Scalars['BigInt']
    /** The current strategy report. */
    currentReport: StrategyReport
    /** The previous strategy report. */
    previousReport: StrategyReport
    startTimestamp: Scalars['BigInt']
    endTimestamp: Scalars['BigInt']
    /** The duration (in days) from the previous report. */
    duration: Scalars['BigDecimal']
    /** Duration percentage rate. */
    durationPr: Scalars['BigDecimal']
    /** Annual Percentage Rate. */
    apr: Scalars['BigDecimal']
    /** Ethereum Transaction */
    transaction: Transaction
    __typename: 'StrategyReportResult'
}

export type StrategyReportResult_orderBy = 'id' | 'timestamp' | 'blockNumber' | 'currentReport' | 'previousReport' | 'startTimestamp' | 'endTimestamp' | 'duration' | 'durationPr' | 'apr' | 'transaction'

export type StrategyReport_orderBy = 'id' | 'timestamp' | 'blockNumber' | 'transaction' | 'strategy' | 'gain' | 'loss' | 'totalGain' | 'totalLoss' | 'totalDebt' | 'debtAdded' | 'debtLimit' | 'debtPaid' | 'results'

export type StrategyStatus = 'Active' | 'Retired'

export type Strategy_orderBy = 'id' | 'name' | 'timestamp' | 'blockNumber' | 'transaction' | 'address' | 'healthCheck' | 'doHealthCheck' | 'inQueue' | 'vault' | 'clonedFrom' | 'debtLimit' | 'minDebtPerHarvest' | 'maxDebtPerHarvest' | 'rateLimit' | 'performanceFeeBps' | 'latestReport' | 'reports' | 'harvests'

export interface Subscription {
    transaction?: Transaction
    transactions: Transaction[]
    token?: Token
    tokens: Token[]
    tokenFee?: TokenFee
    tokenFees: TokenFee[]
    registry?: Registry
    registries: Registry[]
    vault?: Vault
    vaults: Vault[]
    vaultUpdate?: VaultUpdate
    vaultUpdates: VaultUpdate[]
    account?: Account
    accounts: Account[]
    deposit?: Deposit
    deposits: Deposit[]
    withdrawal?: Withdrawal
    withdrawals: Withdrawal[]
    transfer?: Transfer
    transfers: Transfer[]
    accountVaultPosition?: AccountVaultPosition
    accountVaultPositions: AccountVaultPosition[]
    accountVaultPositionUpdate?: AccountVaultPositionUpdate
    accountVaultPositionUpdates: AccountVaultPositionUpdate[]
    strategy?: Strategy
    strategies: Strategy[]
    strategyReport?: StrategyReport
    strategyReports: StrategyReport[]
    strategyReportResult?: StrategyReportResult
    strategyReportResults: StrategyReportResult[]
    harvest?: Harvest
    harvests: Harvest[]
    vaultDayData?: VaultDayData
    vaultDayDatas: VaultDayData[]
    yearn?: Yearn
    yearns: Yearn[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Subscription'
}

export interface Token {
    /** Token address */
    id: Scalars['ID']
    /** Number of decimals for this Token */
    decimals: Scalars['Int']
    /** Name of the Token */
    name: Scalars['String']
    /** Symbol of the Token */
    symbol: Scalars['String']
    __typename: 'Token'
}

export interface TokenFee {
    /** Token address */
    id: Scalars['ID']
    /** Fees paid using this token to the treasury */
    treasuryFees: Scalars['BigInt']
    /** Fees paid using this token to strategies */
    strategyFees: Scalars['BigInt']
    /** Fees paid using this token to strategies and the treasury */
    totalFees: Scalars['BigInt']
    token: Token
    __typename: 'TokenFee'
}

export type TokenFee_orderBy = 'id' | 'treasuryFees' | 'strategyFees' | 'totalFees' | 'token'

export type Token_orderBy = 'id' | 'decimals' | 'name' | 'symbol'

export interface Transaction {
    /** Transaction hash + Log Index */
    id: Scalars['ID']
    /** Log index related to the event. A Transaction might contain multiple events. */
    logIndex: Scalars['BigInt']
    /** The event name / call stacktrace */
    event: Scalars['String']
    /** The transaction sender */
    from: Scalars['Bytes']
    /** Gas price used in the transaction */
    gasPrice: Scalars['BigInt']
    /** Gas sent used in the transaction */
    gasSent: Scalars['BigInt']
    /** Transaction hash */
    hash: Scalars['Bytes']
    /** The transaction index */
    index: Scalars['BigInt']
    /** Address that received the transaction */
    to: Scalars['Bytes']
    /** Ether value sent in the transaction */
    value: Scalars['BigInt']
    /** Timestamp when the transaction was executed */
    timestamp: Scalars['BigInt']
    /** Gas limit used in the transaction */
    gasLimit: Scalars['BigInt']
    /** Block number */
    blockNumber: Scalars['BigInt']
    __typename: 'Transaction'
}

export type Transaction_orderBy = 'id' | 'logIndex' | 'event' | 'from' | 'gasPrice' | 'gasSent' | 'hash' | 'index' | 'to' | 'value' | 'timestamp' | 'gasLimit' | 'blockNumber'

export interface Transfer {
    /** Transaction-Log */
    id: Scalars['ID']
    /** Vault */
    vault: Vault
    /** Sender */
    from: Account
    /** Receiver */
    to: Account
    /** Vault Share Token */
    shareToken: Token
    /** Number of Vault Shares transferred */
    shareAmount: Scalars['BigInt']
    /** Vault Token */
    token: Token
    /** Number of Tokens redeemable for shares transferred */
    tokenAmount: Scalars['BigInt']
    /** Token Amount in USDC, 0 if the transaction was before the oracle was deployed at 12198044 */
    tokenAmountUsdc: Scalars['BigInt']
    /** Timestamp of Transfer */
    timestamp: Scalars['BigInt']
    /** Block number of Transfer */
    blockNumber: Scalars['BigInt']
    /** Ethereum Transaction */
    transaction: Transaction
    /** Whether the transfer was used to pay a fee to the vault's rewards address */
    isFeeToTreasury: Scalars['Boolean']
    /** Whether the transfer was used to pay a fee to a strategy */
    isFeeToStrategy: Scalars['Boolean']
    __typename: 'Transfer'
}

export type Transfer_orderBy = 'id' | 'vault' | 'from' | 'to' | 'shareToken' | 'shareAmount' | 'token' | 'tokenAmount' | 'tokenAmountUsdc' | 'timestamp' | 'blockNumber' | 'transaction' | 'isFeeToTreasury' | 'isFeeToStrategy'

export interface Vault {
    /** Vault address */
    id: Scalars['ID']
    /** Ethereum Transaction */
    transaction: Transaction
    /** The registry address */
    registry: Registry
    /** Token this Vault will accrue */
    token: Token
    /** Token representing Shares in the Vault */
    shareToken: Token
    /** Vault classification */
    classification: VaultClassification
    /** Latest Vault Update */
    latestUpdate?: VaultUpdate
    vaultDayData: VaultDayData[]
    /** All Vault Updates */
    historicalUpdates: VaultUpdate[]
    /** Strategies for this Vault */
    strategies: Strategy[]
    /** Token deposits into the Vault */
    deposits: Deposit[]
    /** Token withdrawals from the Vault */
    withdrawals: Withdrawal[]
    /** Transfers of Vault Shares */
    transfers: Transfer[]
    /** Tags attached to the Vault */
    tags: Scalars['String'][]
    /** Balance of Tokens in the Vault and its Strategies */
    balanceTokens: Scalars['BigInt']
    /** Current idle Token balance */
    balanceTokensIdle: Scalars['BigInt']
    /** Balance of Tokens invested into Strategies */
    balanceTokensInvested: Scalars['BigInt']
    /** Deposit limit for Tokens in the Vault */
    tokensDepositLimit: Scalars['BigInt']
    /** Current supply of Shares */
    sharesSupply: Scalars['BigInt']
    /** Management fee in basis points */
    managementFeeBps: Scalars['Int']
    /** Performance fee in basis points */
    performanceFeeBps: Scalars['Int']
    /** The address where management fees are paid to */
    rewards: Scalars['Bytes']
    /** This technical field defines whether this vault is a custom item (created by a custom handler) or not (created by the registry dynamically). */
    isTemplateListening: Scalars['Boolean']
    /** Creation timestamp */
    activation: Scalars['BigInt']
    /** The API version. */
    apiVersion: Scalars['String']
    __typename: 'Vault'
}

export type VaultClassification = 'Endorsed' | 'Experimental'

export interface VaultDayData {
    id: Scalars['ID']
    /** time in UTC */
    timestamp: Scalars['BigInt']
    vault: Vault
    pricePerShare: Scalars['BigInt']
    /** The amount of tokens deposited to this vault this day */
    deposited: Scalars['BigInt']
    /** The amount of tokens withdrawn from this vault this day */
    withdrawn: Scalars['BigInt']
    /** The total earnings generated for this vault up to and including this day */
    totalReturnsGenerated: Scalars['BigInt']
    /** The total earnings generated in USDC for this vault up to and including this day */
    totalReturnsGeneratedUSDC: Scalars['BigInt']
    /** The earnings generated for this vault this day */
    dayReturnsGenerated: Scalars['BigInt']
    /** The earnings generated in USDC for this vault this day */
    dayReturnsGeneratedUSDC: Scalars['BigInt']
    /** The price of one of the vault's underlying token */
    tokenPriceUSDC: Scalars['BigInt']
    __typename: 'VaultDayData'
}

export type VaultDayData_orderBy = 'id' | 'timestamp' | 'vault' | 'pricePerShare' | 'deposited' | 'withdrawn' | 'totalReturnsGenerated' | 'totalReturnsGeneratedUSDC' | 'dayReturnsGenerated' | 'dayReturnsGeneratedUSDC' | 'tokenPriceUSDC'

export interface VaultUpdate {
    /** Vault-Transaction-Log */
    id: Scalars['ID']
    /** Timestamp of update */
    timestamp: Scalars['BigInt']
    /** Block number of update */
    blockNumber: Scalars['BigInt']
    /** Ethereum Transaction */
    transaction: Transaction
    /** Vault this update is for */
    vault: Vault
    /** Sum of tokens deposited */
    tokensDeposited: Scalars['BigInt']
    /** Sum of tokens withdrawn */
    tokensWithdrawn: Scalars['BigInt']
    /** Sum of Shares minted over all time */
    sharesMinted: Scalars['BigInt']
    /** Sum of Shares burnt over all time */
    sharesBurnt: Scalars['BigInt']
    /** The current balance position defined as: (vault.totalAssets() * (vault.pricePerShare() / 10**vault.decimals())). */
    balancePosition: Scalars['BigInt']
    /** Current price per full share */
    pricePerShare: Scalars['BigInt']
    /** Returns generated in Tokens */
    returnsGenerated: Scalars['BigInt']
    /** Total fees in Shares */
    totalFees: Scalars['BigInt']
    /** Management fees in Shares */
    managementFees: Scalars['BigInt']
    /** Performance fees in Shares */
    performanceFees: Scalars['BigInt']
    /** The address where management fees are paid to */
    rewards?: Scalars['Bytes']
    __typename: 'VaultUpdate'
}

export type VaultUpdate_orderBy = 'id' | 'timestamp' | 'blockNumber' | 'transaction' | 'vault' | 'tokensDeposited' | 'tokensWithdrawn' | 'sharesMinted' | 'sharesBurnt' | 'balancePosition' | 'pricePerShare' | 'returnsGenerated' | 'totalFees' | 'managementFees' | 'performanceFees' | 'rewards'

export type Vault_orderBy = 'id' | 'transaction' | 'registry' | 'token' | 'shareToken' | 'classification' | 'latestUpdate' | 'vaultDayData' | 'historicalUpdates' | 'strategies' | 'deposits' | 'withdrawals' | 'transfers' | 'tags' | 'balanceTokens' | 'balanceTokensIdle' | 'balanceTokensInvested' | 'tokensDepositLimit' | 'sharesSupply' | 'managementFeeBps' | 'performanceFeeBps' | 'rewards' | 'isTemplateListening' | 'activation' | 'apiVersion'

export interface Withdrawal {
    /** Transaction-Log */
    id: Scalars['ID']
    /** Timestamp of update */
    timestamp: Scalars['BigInt']
    /** Block number of update */
    blockNumber: Scalars['BigInt']
    /** Account making withdraw */
    account: Account
    /** Vault withdrawn from */
    vault: Vault
    /** Number of Tokens withdrawn from Vault */
    tokenAmount: Scalars['BigInt']
    /** Number of Vault Shares burnt */
    sharesBurnt: Scalars['BigInt']
    /** Ethereum Transaction */
    transaction: Transaction
    /** Vault Update */
    vaultUpdate: VaultUpdate
    __typename: 'Withdrawal'
}

export type Withdrawal_orderBy = 'id' | 'timestamp' | 'blockNumber' | 'account' | 'vault' | 'tokenAmount' | 'sharesBurnt' | 'transaction' | 'vaultUpdate'

export interface Yearn {
    id: Scalars['ID']
    /** Only valid after the oracle was deployed at 12242339 */
    treasuryFeesUsdc: Scalars['BigInt']
    /** Only valid after the oracle was deployed at 12242339 */
    strategyFeesUsdc: Scalars['BigInt']
    /** Only valid after the oracle was deployed at 12242339 */
    totalFeesUsdc: Scalars['BigInt']
    __typename: 'Yearn'
}

export type Yearn_orderBy = 'id' | 'treasuryFeesUsdc' | 'strategyFeesUsdc' | 'totalFeesUsdc'

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

export interface AccountRequest{
    /** Account address */
    id?: boolean | number
    /** Vault deposits */
    deposits?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)},DepositRequest] | DepositRequest
    /** Vault withdrawals */
    withdrawals?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Withdrawal_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Withdrawal_filter | null)},WithdrawalRequest] | WithdrawalRequest
    /** Vault positions */
    vaultPositions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPosition_filter | null)},AccountVaultPositionRequest] | AccountVaultPositionRequest
    /** Incoming share transfers */
    sharesReceived?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null)},TransferRequest] | TransferRequest
    /** Outgoing share transfers */
    sharesSent?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null)},TransferRequest] | TransferRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AccountVaultPositionRequest{
    /** Account-Vault */
    id?: boolean | number
    /** Vault */
    vault?: VaultRequest
    /** Account */
    account?: AccountRequest
    /** Vault token */
    token?: TokenRequest
    /** Vault share token */
    shareToken?: TokenRequest
    /** Created in transaction */
    transaction?: TransactionRequest
    /** Latest account update for this Vault */
    latestUpdate?: AccountVaultPositionUpdateRequest
    /** Account updates over time */
    updates?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPositionUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPositionUpdate_filter | null)},AccountVaultPositionUpdateRequest] | AccountVaultPositionUpdateRequest
    /** Share balance */
    balanceShares?: boolean | number
    /** The current balance of tokens defined as: sum(deposits) - sum(withdrawals) + sum(received transfers) - sum(sent transfers). */
    balanceTokens?: boolean | number
    /** The current balance position defined as: (vault.balanceOf(account) * (vault.pricePerShare() / 10**vault.decimals())). */
    balancePosition?: boolean | number
    /** The accumulated profit balance for the account/vault. It is only calculated when the user withdraws all the shares. */
    balanceProfit?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AccountVaultPositionUpdateRequest{
    /** Account-Vault-Order */
    id?: boolean | number
    /** Incremental value for the same account/vault. */
    order?: boolean | number
    /** Timestamp */
    timestamp?: boolean | number
    /** Block number */
    blockNumber?: boolean | number
    /** Account that owns position update */
    account?: AccountRequest
    /** The account vault position that this update applies to */
    accountVaultPosition?: AccountVaultPositionRequest
    /** Ethereum Transaction */
    transaction?: TransactionRequest
    /** Sum of token deposits */
    deposits?: boolean | number
    /** Sum of token withdrawals */
    withdrawals?: boolean | number
    /** Sum of share tokens minted */
    sharesMinted?: boolean | number
    /** Sum of share tokens burnt */
    sharesBurnt?: boolean | number
    tokensSent?: boolean | number
    tokensReceived?: boolean | number
    sharesSent?: boolean | number
    sharesReceived?: boolean | number
    balanceShares?: boolean | number
    /** The balance position. */
    balancePosition?: boolean | number
    /** Vault Update */
    vaultUpdate?: VaultUpdateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AccountVaultPositionUpdate_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),order?: (Scalars['BigInt'] | null),order_not?: (Scalars['BigInt'] | null),order_gt?: (Scalars['BigInt'] | null),order_lt?: (Scalars['BigInt'] | null),order_gte?: (Scalars['BigInt'] | null),order_lte?: (Scalars['BigInt'] | null),order_in?: (Scalars['BigInt'][] | null),order_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),account?: (Scalars['String'] | null),account_not?: (Scalars['String'] | null),account_gt?: (Scalars['String'] | null),account_lt?: (Scalars['String'] | null),account_gte?: (Scalars['String'] | null),account_lte?: (Scalars['String'] | null),account_in?: (Scalars['String'][] | null),account_not_in?: (Scalars['String'][] | null),account_contains?: (Scalars['String'] | null),account_not_contains?: (Scalars['String'] | null),account_starts_with?: (Scalars['String'] | null),account_not_starts_with?: (Scalars['String'] | null),account_ends_with?: (Scalars['String'] | null),account_not_ends_with?: (Scalars['String'] | null),accountVaultPosition?: (Scalars['String'] | null),accountVaultPosition_not?: (Scalars['String'] | null),accountVaultPosition_gt?: (Scalars['String'] | null),accountVaultPosition_lt?: (Scalars['String'] | null),accountVaultPosition_gte?: (Scalars['String'] | null),accountVaultPosition_lte?: (Scalars['String'] | null),accountVaultPosition_in?: (Scalars['String'][] | null),accountVaultPosition_not_in?: (Scalars['String'][] | null),accountVaultPosition_contains?: (Scalars['String'] | null),accountVaultPosition_not_contains?: (Scalars['String'] | null),accountVaultPosition_starts_with?: (Scalars['String'] | null),accountVaultPosition_not_starts_with?: (Scalars['String'] | null),accountVaultPosition_ends_with?: (Scalars['String'] | null),accountVaultPosition_not_ends_with?: (Scalars['String'] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),deposits?: (Scalars['BigInt'] | null),deposits_not?: (Scalars['BigInt'] | null),deposits_gt?: (Scalars['BigInt'] | null),deposits_lt?: (Scalars['BigInt'] | null),deposits_gte?: (Scalars['BigInt'] | null),deposits_lte?: (Scalars['BigInt'] | null),deposits_in?: (Scalars['BigInt'][] | null),deposits_not_in?: (Scalars['BigInt'][] | null),withdrawals?: (Scalars['BigInt'] | null),withdrawals_not?: (Scalars['BigInt'] | null),withdrawals_gt?: (Scalars['BigInt'] | null),withdrawals_lt?: (Scalars['BigInt'] | null),withdrawals_gte?: (Scalars['BigInt'] | null),withdrawals_lte?: (Scalars['BigInt'] | null),withdrawals_in?: (Scalars['BigInt'][] | null),withdrawals_not_in?: (Scalars['BigInt'][] | null),sharesMinted?: (Scalars['BigInt'] | null),sharesMinted_not?: (Scalars['BigInt'] | null),sharesMinted_gt?: (Scalars['BigInt'] | null),sharesMinted_lt?: (Scalars['BigInt'] | null),sharesMinted_gte?: (Scalars['BigInt'] | null),sharesMinted_lte?: (Scalars['BigInt'] | null),sharesMinted_in?: (Scalars['BigInt'][] | null),sharesMinted_not_in?: (Scalars['BigInt'][] | null),sharesBurnt?: (Scalars['BigInt'] | null),sharesBurnt_not?: (Scalars['BigInt'] | null),sharesBurnt_gt?: (Scalars['BigInt'] | null),sharesBurnt_lt?: (Scalars['BigInt'] | null),sharesBurnt_gte?: (Scalars['BigInt'] | null),sharesBurnt_lte?: (Scalars['BigInt'] | null),sharesBurnt_in?: (Scalars['BigInt'][] | null),sharesBurnt_not_in?: (Scalars['BigInt'][] | null),tokensSent?: (Scalars['BigInt'] | null),tokensSent_not?: (Scalars['BigInt'] | null),tokensSent_gt?: (Scalars['BigInt'] | null),tokensSent_lt?: (Scalars['BigInt'] | null),tokensSent_gte?: (Scalars['BigInt'] | null),tokensSent_lte?: (Scalars['BigInt'] | null),tokensSent_in?: (Scalars['BigInt'][] | null),tokensSent_not_in?: (Scalars['BigInt'][] | null),tokensReceived?: (Scalars['BigInt'] | null),tokensReceived_not?: (Scalars['BigInt'] | null),tokensReceived_gt?: (Scalars['BigInt'] | null),tokensReceived_lt?: (Scalars['BigInt'] | null),tokensReceived_gte?: (Scalars['BigInt'] | null),tokensReceived_lte?: (Scalars['BigInt'] | null),tokensReceived_in?: (Scalars['BigInt'][] | null),tokensReceived_not_in?: (Scalars['BigInt'][] | null),sharesSent?: (Scalars['BigInt'] | null),sharesSent_not?: (Scalars['BigInt'] | null),sharesSent_gt?: (Scalars['BigInt'] | null),sharesSent_lt?: (Scalars['BigInt'] | null),sharesSent_gte?: (Scalars['BigInt'] | null),sharesSent_lte?: (Scalars['BigInt'] | null),sharesSent_in?: (Scalars['BigInt'][] | null),sharesSent_not_in?: (Scalars['BigInt'][] | null),sharesReceived?: (Scalars['BigInt'] | null),sharesReceived_not?: (Scalars['BigInt'] | null),sharesReceived_gt?: (Scalars['BigInt'] | null),sharesReceived_lt?: (Scalars['BigInt'] | null),sharesReceived_gte?: (Scalars['BigInt'] | null),sharesReceived_lte?: (Scalars['BigInt'] | null),sharesReceived_in?: (Scalars['BigInt'][] | null),sharesReceived_not_in?: (Scalars['BigInt'][] | null),balanceShares?: (Scalars['BigInt'] | null),balanceShares_not?: (Scalars['BigInt'] | null),balanceShares_gt?: (Scalars['BigInt'] | null),balanceShares_lt?: (Scalars['BigInt'] | null),balanceShares_gte?: (Scalars['BigInt'] | null),balanceShares_lte?: (Scalars['BigInt'] | null),balanceShares_in?: (Scalars['BigInt'][] | null),balanceShares_not_in?: (Scalars['BigInt'][] | null),balancePosition?: (Scalars['BigInt'] | null),balancePosition_not?: (Scalars['BigInt'] | null),balancePosition_gt?: (Scalars['BigInt'] | null),balancePosition_lt?: (Scalars['BigInt'] | null),balancePosition_gte?: (Scalars['BigInt'] | null),balancePosition_lte?: (Scalars['BigInt'] | null),balancePosition_in?: (Scalars['BigInt'][] | null),balancePosition_not_in?: (Scalars['BigInt'][] | null),vaultUpdate?: (Scalars['String'] | null),vaultUpdate_not?: (Scalars['String'] | null),vaultUpdate_gt?: (Scalars['String'] | null),vaultUpdate_lt?: (Scalars['String'] | null),vaultUpdate_gte?: (Scalars['String'] | null),vaultUpdate_lte?: (Scalars['String'] | null),vaultUpdate_in?: (Scalars['String'][] | null),vaultUpdate_not_in?: (Scalars['String'][] | null),vaultUpdate_contains?: (Scalars['String'] | null),vaultUpdate_not_contains?: (Scalars['String'] | null),vaultUpdate_starts_with?: (Scalars['String'] | null),vaultUpdate_not_starts_with?: (Scalars['String'] | null),vaultUpdate_ends_with?: (Scalars['String'] | null),vaultUpdate_not_ends_with?: (Scalars['String'] | null)}

export interface AccountVaultPosition_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),vault?: (Scalars['String'] | null),vault_not?: (Scalars['String'] | null),vault_gt?: (Scalars['String'] | null),vault_lt?: (Scalars['String'] | null),vault_gte?: (Scalars['String'] | null),vault_lte?: (Scalars['String'] | null),vault_in?: (Scalars['String'][] | null),vault_not_in?: (Scalars['String'][] | null),vault_contains?: (Scalars['String'] | null),vault_not_contains?: (Scalars['String'] | null),vault_starts_with?: (Scalars['String'] | null),vault_not_starts_with?: (Scalars['String'] | null),vault_ends_with?: (Scalars['String'] | null),vault_not_ends_with?: (Scalars['String'] | null),account?: (Scalars['String'] | null),account_not?: (Scalars['String'] | null),account_gt?: (Scalars['String'] | null),account_lt?: (Scalars['String'] | null),account_gte?: (Scalars['String'] | null),account_lte?: (Scalars['String'] | null),account_in?: (Scalars['String'][] | null),account_not_in?: (Scalars['String'][] | null),account_contains?: (Scalars['String'] | null),account_not_contains?: (Scalars['String'] | null),account_starts_with?: (Scalars['String'] | null),account_not_starts_with?: (Scalars['String'] | null),account_ends_with?: (Scalars['String'] | null),account_not_ends_with?: (Scalars['String'] | null),token?: (Scalars['String'] | null),token_not?: (Scalars['String'] | null),token_gt?: (Scalars['String'] | null),token_lt?: (Scalars['String'] | null),token_gte?: (Scalars['String'] | null),token_lte?: (Scalars['String'] | null),token_in?: (Scalars['String'][] | null),token_not_in?: (Scalars['String'][] | null),token_contains?: (Scalars['String'] | null),token_not_contains?: (Scalars['String'] | null),token_starts_with?: (Scalars['String'] | null),token_not_starts_with?: (Scalars['String'] | null),token_ends_with?: (Scalars['String'] | null),token_not_ends_with?: (Scalars['String'] | null),shareToken?: (Scalars['String'] | null),shareToken_not?: (Scalars['String'] | null),shareToken_gt?: (Scalars['String'] | null),shareToken_lt?: (Scalars['String'] | null),shareToken_gte?: (Scalars['String'] | null),shareToken_lte?: (Scalars['String'] | null),shareToken_in?: (Scalars['String'][] | null),shareToken_not_in?: (Scalars['String'][] | null),shareToken_contains?: (Scalars['String'] | null),shareToken_not_contains?: (Scalars['String'] | null),shareToken_starts_with?: (Scalars['String'] | null),shareToken_not_starts_with?: (Scalars['String'] | null),shareToken_ends_with?: (Scalars['String'] | null),shareToken_not_ends_with?: (Scalars['String'] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),latestUpdate?: (Scalars['String'] | null),latestUpdate_not?: (Scalars['String'] | null),latestUpdate_gt?: (Scalars['String'] | null),latestUpdate_lt?: (Scalars['String'] | null),latestUpdate_gte?: (Scalars['String'] | null),latestUpdate_lte?: (Scalars['String'] | null),latestUpdate_in?: (Scalars['String'][] | null),latestUpdate_not_in?: (Scalars['String'][] | null),latestUpdate_contains?: (Scalars['String'] | null),latestUpdate_not_contains?: (Scalars['String'] | null),latestUpdate_starts_with?: (Scalars['String'] | null),latestUpdate_not_starts_with?: (Scalars['String'] | null),latestUpdate_ends_with?: (Scalars['String'] | null),latestUpdate_not_ends_with?: (Scalars['String'] | null),balanceShares?: (Scalars['BigInt'] | null),balanceShares_not?: (Scalars['BigInt'] | null),balanceShares_gt?: (Scalars['BigInt'] | null),balanceShares_lt?: (Scalars['BigInt'] | null),balanceShares_gte?: (Scalars['BigInt'] | null),balanceShares_lte?: (Scalars['BigInt'] | null),balanceShares_in?: (Scalars['BigInt'][] | null),balanceShares_not_in?: (Scalars['BigInt'][] | null),balanceTokens?: (Scalars['BigInt'] | null),balanceTokens_not?: (Scalars['BigInt'] | null),balanceTokens_gt?: (Scalars['BigInt'] | null),balanceTokens_lt?: (Scalars['BigInt'] | null),balanceTokens_gte?: (Scalars['BigInt'] | null),balanceTokens_lte?: (Scalars['BigInt'] | null),balanceTokens_in?: (Scalars['BigInt'][] | null),balanceTokens_not_in?: (Scalars['BigInt'][] | null),balancePosition?: (Scalars['BigInt'] | null),balancePosition_not?: (Scalars['BigInt'] | null),balancePosition_gt?: (Scalars['BigInt'] | null),balancePosition_lt?: (Scalars['BigInt'] | null),balancePosition_gte?: (Scalars['BigInt'] | null),balancePosition_lte?: (Scalars['BigInt'] | null),balancePosition_in?: (Scalars['BigInt'][] | null),balancePosition_not_in?: (Scalars['BigInt'][] | null),balanceProfit?: (Scalars['BigInt'] | null),balanceProfit_not?: (Scalars['BigInt'] | null),balanceProfit_gt?: (Scalars['BigInt'] | null),balanceProfit_lt?: (Scalars['BigInt'] | null),balanceProfit_gte?: (Scalars['BigInt'] | null),balanceProfit_lte?: (Scalars['BigInt'] | null),balanceProfit_in?: (Scalars['BigInt'][] | null),balanceProfit_not_in?: (Scalars['BigInt'][] | null)}

export interface Account_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null)}

export interface Block_height {hash?: (Scalars['Bytes'] | null),number?: (Scalars['Int'] | null)}

export interface DepositRequest{
    /** Transaction-Log */
    id?: boolean | number
    /** Timestamp of update */
    timestamp?: boolean | number
    /** Block number of update */
    blockNumber?: boolean | number
    /** Account making Deposit */
    account?: AccountRequest
    /** Vault deposited into */
    vault?: VaultRequest
    /** Number of Tokens deposited into Vault */
    tokenAmount?: boolean | number
    /** Number of new Vault Shares minted */
    sharesMinted?: boolean | number
    /** Ethereum Transaction */
    transaction?: TransactionRequest
    /** Vault Update */
    vaultUpdate?: VaultUpdateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Deposit_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),account?: (Scalars['String'] | null),account_not?: (Scalars['String'] | null),account_gt?: (Scalars['String'] | null),account_lt?: (Scalars['String'] | null),account_gte?: (Scalars['String'] | null),account_lte?: (Scalars['String'] | null),account_in?: (Scalars['String'][] | null),account_not_in?: (Scalars['String'][] | null),account_contains?: (Scalars['String'] | null),account_not_contains?: (Scalars['String'] | null),account_starts_with?: (Scalars['String'] | null),account_not_starts_with?: (Scalars['String'] | null),account_ends_with?: (Scalars['String'] | null),account_not_ends_with?: (Scalars['String'] | null),vault?: (Scalars['String'] | null),vault_not?: (Scalars['String'] | null),vault_gt?: (Scalars['String'] | null),vault_lt?: (Scalars['String'] | null),vault_gte?: (Scalars['String'] | null),vault_lte?: (Scalars['String'] | null),vault_in?: (Scalars['String'][] | null),vault_not_in?: (Scalars['String'][] | null),vault_contains?: (Scalars['String'] | null),vault_not_contains?: (Scalars['String'] | null),vault_starts_with?: (Scalars['String'] | null),vault_not_starts_with?: (Scalars['String'] | null),vault_ends_with?: (Scalars['String'] | null),vault_not_ends_with?: (Scalars['String'] | null),tokenAmount?: (Scalars['BigInt'] | null),tokenAmount_not?: (Scalars['BigInt'] | null),tokenAmount_gt?: (Scalars['BigInt'] | null),tokenAmount_lt?: (Scalars['BigInt'] | null),tokenAmount_gte?: (Scalars['BigInt'] | null),tokenAmount_lte?: (Scalars['BigInt'] | null),tokenAmount_in?: (Scalars['BigInt'][] | null),tokenAmount_not_in?: (Scalars['BigInt'][] | null),sharesMinted?: (Scalars['BigInt'] | null),sharesMinted_not?: (Scalars['BigInt'] | null),sharesMinted_gt?: (Scalars['BigInt'] | null),sharesMinted_lt?: (Scalars['BigInt'] | null),sharesMinted_gte?: (Scalars['BigInt'] | null),sharesMinted_lte?: (Scalars['BigInt'] | null),sharesMinted_in?: (Scalars['BigInt'][] | null),sharesMinted_not_in?: (Scalars['BigInt'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),vaultUpdate?: (Scalars['String'] | null),vaultUpdate_not?: (Scalars['String'] | null),vaultUpdate_gt?: (Scalars['String'] | null),vaultUpdate_lt?: (Scalars['String'] | null),vaultUpdate_gte?: (Scalars['String'] | null),vaultUpdate_lte?: (Scalars['String'] | null),vaultUpdate_in?: (Scalars['String'][] | null),vaultUpdate_not_in?: (Scalars['String'][] | null),vaultUpdate_contains?: (Scalars['String'] | null),vaultUpdate_not_contains?: (Scalars['String'] | null),vaultUpdate_starts_with?: (Scalars['String'] | null),vaultUpdate_not_starts_with?: (Scalars['String'] | null),vaultUpdate_ends_with?: (Scalars['String'] | null),vaultUpdate_not_ends_with?: (Scalars['String'] | null)}

export interface HarvestRequest{
    /** Strategy-Transaction-Log */
    id?: boolean | number
    /** Timestamp the strategy report was most recently updated. */
    timestamp?: boolean | number
    /** Blocknumber the strategy report was most recently updated. */
    blockNumber?: boolean | number
    /** Ethereum Transaction */
    transaction?: TransactionRequest
    /** Vault that owns the strategy */
    vault?: VaultRequest
    /** Strategy that harvested */
    strategy?: StrategyRequest
    /** Function caller */
    harvester?: boolean | number
    /** The reported profit amount for the strategy at the time of the harvest. */
    profit?: boolean | number
    /** The reported loss amount for the strategy at the time of the harvest. */
    loss?: boolean | number
    /** The reported debt paid from strategy at the time of the harvest. */
    debtPayment?: boolean | number
    /** The reported outstanding debt from strategy at the time of the harvest. */
    debtOutstanding?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Harvest_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),vault?: (Scalars['String'] | null),vault_not?: (Scalars['String'] | null),vault_gt?: (Scalars['String'] | null),vault_lt?: (Scalars['String'] | null),vault_gte?: (Scalars['String'] | null),vault_lte?: (Scalars['String'] | null),vault_in?: (Scalars['String'][] | null),vault_not_in?: (Scalars['String'][] | null),vault_contains?: (Scalars['String'] | null),vault_not_contains?: (Scalars['String'] | null),vault_starts_with?: (Scalars['String'] | null),vault_not_starts_with?: (Scalars['String'] | null),vault_ends_with?: (Scalars['String'] | null),vault_not_ends_with?: (Scalars['String'] | null),strategy?: (Scalars['String'] | null),strategy_not?: (Scalars['String'] | null),strategy_gt?: (Scalars['String'] | null),strategy_lt?: (Scalars['String'] | null),strategy_gte?: (Scalars['String'] | null),strategy_lte?: (Scalars['String'] | null),strategy_in?: (Scalars['String'][] | null),strategy_not_in?: (Scalars['String'][] | null),strategy_contains?: (Scalars['String'] | null),strategy_not_contains?: (Scalars['String'] | null),strategy_starts_with?: (Scalars['String'] | null),strategy_not_starts_with?: (Scalars['String'] | null),strategy_ends_with?: (Scalars['String'] | null),strategy_not_ends_with?: (Scalars['String'] | null),harvester?: (Scalars['Bytes'] | null),harvester_not?: (Scalars['Bytes'] | null),harvester_in?: (Scalars['Bytes'][] | null),harvester_not_in?: (Scalars['Bytes'][] | null),harvester_contains?: (Scalars['Bytes'] | null),harvester_not_contains?: (Scalars['Bytes'] | null),profit?: (Scalars['BigInt'] | null),profit_not?: (Scalars['BigInt'] | null),profit_gt?: (Scalars['BigInt'] | null),profit_lt?: (Scalars['BigInt'] | null),profit_gte?: (Scalars['BigInt'] | null),profit_lte?: (Scalars['BigInt'] | null),profit_in?: (Scalars['BigInt'][] | null),profit_not_in?: (Scalars['BigInt'][] | null),loss?: (Scalars['BigInt'] | null),loss_not?: (Scalars['BigInt'] | null),loss_gt?: (Scalars['BigInt'] | null),loss_lt?: (Scalars['BigInt'] | null),loss_gte?: (Scalars['BigInt'] | null),loss_lte?: (Scalars['BigInt'] | null),loss_in?: (Scalars['BigInt'][] | null),loss_not_in?: (Scalars['BigInt'][] | null),debtPayment?: (Scalars['BigInt'] | null),debtPayment_not?: (Scalars['BigInt'] | null),debtPayment_gt?: (Scalars['BigInt'] | null),debtPayment_lt?: (Scalars['BigInt'] | null),debtPayment_gte?: (Scalars['BigInt'] | null),debtPayment_lte?: (Scalars['BigInt'] | null),debtPayment_in?: (Scalars['BigInt'][] | null),debtPayment_not_in?: (Scalars['BigInt'][] | null),debtOutstanding?: (Scalars['BigInt'] | null),debtOutstanding_not?: (Scalars['BigInt'] | null),debtOutstanding_gt?: (Scalars['BigInt'] | null),debtOutstanding_lt?: (Scalars['BigInt'] | null),debtOutstanding_gte?: (Scalars['BigInt'] | null),debtOutstanding_lte?: (Scalars['BigInt'] | null),debtOutstanding_in?: (Scalars['BigInt'][] | null),debtOutstanding_not_in?: (Scalars['BigInt'][] | null)}

export interface QueryRequest{
    transaction?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TransactionRequest]
    transactions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TransactionRequest]
    token?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenRequest]
    tokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenRequest]
    tokenFee?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenFeeRequest]
    tokenFees?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenFee_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenFee_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenFeeRequest]
    registry?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RegistryRequest]
    registries?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Registry_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Registry_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RegistryRequest]
    vault?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VaultRequest]
    vaults?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Vault_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Vault_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VaultRequest]
    vaultUpdate?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VaultUpdateRequest]
    vaultUpdates?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultUpdate_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VaultUpdateRequest]
    account?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},AccountRequest]
    accounts?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Account_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Account_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},AccountRequest]
    deposit?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},DepositRequest]
    deposits?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},DepositRequest]
    withdrawal?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},WithdrawalRequest]
    withdrawals?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Withdrawal_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Withdrawal_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},WithdrawalRequest]
    transfer?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TransferRequest]
    transfers?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TransferRequest]
    accountVaultPosition?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},AccountVaultPositionRequest]
    accountVaultPositions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPosition_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},AccountVaultPositionRequest]
    accountVaultPositionUpdate?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},AccountVaultPositionUpdateRequest]
    accountVaultPositionUpdates?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPositionUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPositionUpdate_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},AccountVaultPositionUpdateRequest]
    strategy?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StrategyRequest]
    strategies?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Strategy_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Strategy_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StrategyRequest]
    strategyReport?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StrategyReportRequest]
    strategyReports?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReport_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReport_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StrategyReportRequest]
    strategyReportResult?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StrategyReportResultRequest]
    strategyReportResults?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReportResult_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReportResult_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StrategyReportResultRequest]
    harvest?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},HarvestRequest]
    harvests?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Harvest_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Harvest_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},HarvestRequest]
    vaultDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VaultDayDataRequest]
    vaultDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultDayData_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VaultDayDataRequest]
    yearn?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},YearnRequest]
    yearns?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Yearn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Yearn_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},YearnRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RegistryRequest{
    /** Registry address */
    id?: boolean | number
    /** Transaction timestamp */
    timestamp?: boolean | number
    /** Transaction/Block Block number */
    blockNumber?: boolean | number
    /** Ethereum Transaction */
    transaction?: TransactionRequest
    /** Vaults registered in the registry. */
    vaults?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Vault_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Vault_filter | null)},VaultRequest] | VaultRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Registry_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null)}

export interface StrategyRequest{
    /** Strategy address */
    id?: boolean | number
    /** Strategy name. */
    name?: boolean | number
    /** Timestamp the vault information was most recently updated. */
    timestamp?: boolean | number
    /** Blocknumber the vault information was most recently updated. */
    blockNumber?: boolean | number
    /** Ethereum Transaction */
    transaction?: TransactionRequest
    /** The Strategy address. */
    address?: boolean | number
    /** The health check contract address. */
    healthCheck?: boolean | number
    /** Defines whether the strategy will call the health check or not. */
    doHealthCheck?: boolean | number
    /** Defines whether this strategy is within the vault queue. */
    inQueue?: boolean | number
    /** The Vault */
    vault?: VaultRequest
    /** Strategy reference used to clone this strategy. */
    clonedFrom?: StrategyRequest
    /** Defines the maximum borrow amount. In strategies <v0.3.5 it is debtRatio. */
    debtLimit?: boolean | number
    /** Lower limit on the increase of debt since last harvest. */
    minDebtPerHarvest?: boolean | number
    /** Upper limit on the increase of debt since last harvest. */
    maxDebtPerHarvest?: boolean | number
    /** It is the current rate limit. It increases/decreases per block. */
    rateLimit?: boolean | number
    /** Defines the strategist's fee (basis points). */
    performanceFeeBps?: boolean | number
    /** The latest report for this Strategy */
    latestReport?: StrategyReportRequest
    /** The reports created by this strategy. */
    reports?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReport_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReport_filter | null)},StrategyReportRequest] | StrategyReportRequest
    /** harvest() calls */
    harvests?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Harvest_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Harvest_filter | null)},HarvestRequest] | HarvestRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StrategyReportRequest{
    /** The Strategy Report ID. */
    id?: boolean | number
    /** Timestamp the strategy report was most recently updated. */
    timestamp?: boolean | number
    /** Blocknumber the strategy report was most recently updated. */
    blockNumber?: boolean | number
    /** Ethereum Transaction */
    transaction?: TransactionRequest
    /** The Strategy reference. */
    strategy?: StrategyRequest
    /** The reported gain amount for the strategy. */
    gain?: boolean | number
    /** The reported loss amount for the strategy. */
    loss?: boolean | number
    /** The reported total gain amount for the strategy. */
    totalGain?: boolean | number
    /** The reported total loss amount for the strategy. */
    totalLoss?: boolean | number
    /** The reported total debt amount for the strategy. */
    totalDebt?: boolean | number
    /** The reported debt added amount for the strategy. */
    debtAdded?: boolean | number
    /** The reported debt limit amount for the strategy. */
    debtLimit?: boolean | number
    /** The reported debt paid for the strategy. This field is 0 for v0.3.0 or v0.3.1. */
    debtPaid?: boolean | number
    /** The results created by this report. They are generated comparing the previous report and the current one. */
    results?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReportResult_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReportResult_filter | null)},StrategyReportResultRequest] | StrategyReportResultRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StrategyReportResultRequest{
    /** The Strategy Report Result ID. */
    id?: boolean | number
    /** Timestamp the strategy report was most recently updated. */
    timestamp?: boolean | number
    /** Blocknumber the strategy report was most recently updated. */
    blockNumber?: boolean | number
    /** The current strategy report. */
    currentReport?: StrategyReportRequest
    /** The previous strategy report. */
    previousReport?: StrategyReportRequest
    startTimestamp?: boolean | number
    endTimestamp?: boolean | number
    /** The duration (in days) from the previous report. */
    duration?: boolean | number
    /** Duration percentage rate. */
    durationPr?: boolean | number
    /** Annual Percentage Rate. */
    apr?: boolean | number
    /** Ethereum Transaction */
    transaction?: TransactionRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StrategyReportResult_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),currentReport?: (Scalars['String'] | null),currentReport_not?: (Scalars['String'] | null),currentReport_gt?: (Scalars['String'] | null),currentReport_lt?: (Scalars['String'] | null),currentReport_gte?: (Scalars['String'] | null),currentReport_lte?: (Scalars['String'] | null),currentReport_in?: (Scalars['String'][] | null),currentReport_not_in?: (Scalars['String'][] | null),currentReport_contains?: (Scalars['String'] | null),currentReport_not_contains?: (Scalars['String'] | null),currentReport_starts_with?: (Scalars['String'] | null),currentReport_not_starts_with?: (Scalars['String'] | null),currentReport_ends_with?: (Scalars['String'] | null),currentReport_not_ends_with?: (Scalars['String'] | null),previousReport?: (Scalars['String'] | null),previousReport_not?: (Scalars['String'] | null),previousReport_gt?: (Scalars['String'] | null),previousReport_lt?: (Scalars['String'] | null),previousReport_gte?: (Scalars['String'] | null),previousReport_lte?: (Scalars['String'] | null),previousReport_in?: (Scalars['String'][] | null),previousReport_not_in?: (Scalars['String'][] | null),previousReport_contains?: (Scalars['String'] | null),previousReport_not_contains?: (Scalars['String'] | null),previousReport_starts_with?: (Scalars['String'] | null),previousReport_not_starts_with?: (Scalars['String'] | null),previousReport_ends_with?: (Scalars['String'] | null),previousReport_not_ends_with?: (Scalars['String'] | null),startTimestamp?: (Scalars['BigInt'] | null),startTimestamp_not?: (Scalars['BigInt'] | null),startTimestamp_gt?: (Scalars['BigInt'] | null),startTimestamp_lt?: (Scalars['BigInt'] | null),startTimestamp_gte?: (Scalars['BigInt'] | null),startTimestamp_lte?: (Scalars['BigInt'] | null),startTimestamp_in?: (Scalars['BigInt'][] | null),startTimestamp_not_in?: (Scalars['BigInt'][] | null),endTimestamp?: (Scalars['BigInt'] | null),endTimestamp_not?: (Scalars['BigInt'] | null),endTimestamp_gt?: (Scalars['BigInt'] | null),endTimestamp_lt?: (Scalars['BigInt'] | null),endTimestamp_gte?: (Scalars['BigInt'] | null),endTimestamp_lte?: (Scalars['BigInt'] | null),endTimestamp_in?: (Scalars['BigInt'][] | null),endTimestamp_not_in?: (Scalars['BigInt'][] | null),duration?: (Scalars['BigDecimal'] | null),duration_not?: (Scalars['BigDecimal'] | null),duration_gt?: (Scalars['BigDecimal'] | null),duration_lt?: (Scalars['BigDecimal'] | null),duration_gte?: (Scalars['BigDecimal'] | null),duration_lte?: (Scalars['BigDecimal'] | null),duration_in?: (Scalars['BigDecimal'][] | null),duration_not_in?: (Scalars['BigDecimal'][] | null),durationPr?: (Scalars['BigDecimal'] | null),durationPr_not?: (Scalars['BigDecimal'] | null),durationPr_gt?: (Scalars['BigDecimal'] | null),durationPr_lt?: (Scalars['BigDecimal'] | null),durationPr_gte?: (Scalars['BigDecimal'] | null),durationPr_lte?: (Scalars['BigDecimal'] | null),durationPr_in?: (Scalars['BigDecimal'][] | null),durationPr_not_in?: (Scalars['BigDecimal'][] | null),apr?: (Scalars['BigDecimal'] | null),apr_not?: (Scalars['BigDecimal'] | null),apr_gt?: (Scalars['BigDecimal'] | null),apr_lt?: (Scalars['BigDecimal'] | null),apr_gte?: (Scalars['BigDecimal'] | null),apr_lte?: (Scalars['BigDecimal'] | null),apr_in?: (Scalars['BigDecimal'][] | null),apr_not_in?: (Scalars['BigDecimal'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null)}

export interface StrategyReport_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),strategy?: (Scalars['String'] | null),strategy_not?: (Scalars['String'] | null),strategy_gt?: (Scalars['String'] | null),strategy_lt?: (Scalars['String'] | null),strategy_gte?: (Scalars['String'] | null),strategy_lte?: (Scalars['String'] | null),strategy_in?: (Scalars['String'][] | null),strategy_not_in?: (Scalars['String'][] | null),strategy_contains?: (Scalars['String'] | null),strategy_not_contains?: (Scalars['String'] | null),strategy_starts_with?: (Scalars['String'] | null),strategy_not_starts_with?: (Scalars['String'] | null),strategy_ends_with?: (Scalars['String'] | null),strategy_not_ends_with?: (Scalars['String'] | null),gain?: (Scalars['BigInt'] | null),gain_not?: (Scalars['BigInt'] | null),gain_gt?: (Scalars['BigInt'] | null),gain_lt?: (Scalars['BigInt'] | null),gain_gte?: (Scalars['BigInt'] | null),gain_lte?: (Scalars['BigInt'] | null),gain_in?: (Scalars['BigInt'][] | null),gain_not_in?: (Scalars['BigInt'][] | null),loss?: (Scalars['BigInt'] | null),loss_not?: (Scalars['BigInt'] | null),loss_gt?: (Scalars['BigInt'] | null),loss_lt?: (Scalars['BigInt'] | null),loss_gte?: (Scalars['BigInt'] | null),loss_lte?: (Scalars['BigInt'] | null),loss_in?: (Scalars['BigInt'][] | null),loss_not_in?: (Scalars['BigInt'][] | null),totalGain?: (Scalars['BigInt'] | null),totalGain_not?: (Scalars['BigInt'] | null),totalGain_gt?: (Scalars['BigInt'] | null),totalGain_lt?: (Scalars['BigInt'] | null),totalGain_gte?: (Scalars['BigInt'] | null),totalGain_lte?: (Scalars['BigInt'] | null),totalGain_in?: (Scalars['BigInt'][] | null),totalGain_not_in?: (Scalars['BigInt'][] | null),totalLoss?: (Scalars['BigInt'] | null),totalLoss_not?: (Scalars['BigInt'] | null),totalLoss_gt?: (Scalars['BigInt'] | null),totalLoss_lt?: (Scalars['BigInt'] | null),totalLoss_gte?: (Scalars['BigInt'] | null),totalLoss_lte?: (Scalars['BigInt'] | null),totalLoss_in?: (Scalars['BigInt'][] | null),totalLoss_not_in?: (Scalars['BigInt'][] | null),totalDebt?: (Scalars['BigInt'] | null),totalDebt_not?: (Scalars['BigInt'] | null),totalDebt_gt?: (Scalars['BigInt'] | null),totalDebt_lt?: (Scalars['BigInt'] | null),totalDebt_gte?: (Scalars['BigInt'] | null),totalDebt_lte?: (Scalars['BigInt'] | null),totalDebt_in?: (Scalars['BigInt'][] | null),totalDebt_not_in?: (Scalars['BigInt'][] | null),debtAdded?: (Scalars['BigInt'] | null),debtAdded_not?: (Scalars['BigInt'] | null),debtAdded_gt?: (Scalars['BigInt'] | null),debtAdded_lt?: (Scalars['BigInt'] | null),debtAdded_gte?: (Scalars['BigInt'] | null),debtAdded_lte?: (Scalars['BigInt'] | null),debtAdded_in?: (Scalars['BigInt'][] | null),debtAdded_not_in?: (Scalars['BigInt'][] | null),debtLimit?: (Scalars['BigInt'] | null),debtLimit_not?: (Scalars['BigInt'] | null),debtLimit_gt?: (Scalars['BigInt'] | null),debtLimit_lt?: (Scalars['BigInt'] | null),debtLimit_gte?: (Scalars['BigInt'] | null),debtLimit_lte?: (Scalars['BigInt'] | null),debtLimit_in?: (Scalars['BigInt'][] | null),debtLimit_not_in?: (Scalars['BigInt'][] | null),debtPaid?: (Scalars['BigInt'] | null),debtPaid_not?: (Scalars['BigInt'] | null),debtPaid_gt?: (Scalars['BigInt'] | null),debtPaid_lt?: (Scalars['BigInt'] | null),debtPaid_gte?: (Scalars['BigInt'] | null),debtPaid_lte?: (Scalars['BigInt'] | null),debtPaid_in?: (Scalars['BigInt'][] | null),debtPaid_not_in?: (Scalars['BigInt'][] | null)}

export interface Strategy_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),name?: (Scalars['String'] | null),name_not?: (Scalars['String'] | null),name_gt?: (Scalars['String'] | null),name_lt?: (Scalars['String'] | null),name_gte?: (Scalars['String'] | null),name_lte?: (Scalars['String'] | null),name_in?: (Scalars['String'][] | null),name_not_in?: (Scalars['String'][] | null),name_contains?: (Scalars['String'] | null),name_not_contains?: (Scalars['String'] | null),name_starts_with?: (Scalars['String'] | null),name_not_starts_with?: (Scalars['String'] | null),name_ends_with?: (Scalars['String'] | null),name_not_ends_with?: (Scalars['String'] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),address?: (Scalars['Bytes'] | null),address_not?: (Scalars['Bytes'] | null),address_in?: (Scalars['Bytes'][] | null),address_not_in?: (Scalars['Bytes'][] | null),address_contains?: (Scalars['Bytes'] | null),address_not_contains?: (Scalars['Bytes'] | null),healthCheck?: (Scalars['Bytes'] | null),healthCheck_not?: (Scalars['Bytes'] | null),healthCheck_in?: (Scalars['Bytes'][] | null),healthCheck_not_in?: (Scalars['Bytes'][] | null),healthCheck_contains?: (Scalars['Bytes'] | null),healthCheck_not_contains?: (Scalars['Bytes'] | null),doHealthCheck?: (Scalars['Boolean'] | null),doHealthCheck_not?: (Scalars['Boolean'] | null),doHealthCheck_in?: (Scalars['Boolean'][] | null),doHealthCheck_not_in?: (Scalars['Boolean'][] | null),inQueue?: (Scalars['Boolean'] | null),inQueue_not?: (Scalars['Boolean'] | null),inQueue_in?: (Scalars['Boolean'][] | null),inQueue_not_in?: (Scalars['Boolean'][] | null),vault?: (Scalars['String'] | null),vault_not?: (Scalars['String'] | null),vault_gt?: (Scalars['String'] | null),vault_lt?: (Scalars['String'] | null),vault_gte?: (Scalars['String'] | null),vault_lte?: (Scalars['String'] | null),vault_in?: (Scalars['String'][] | null),vault_not_in?: (Scalars['String'][] | null),vault_contains?: (Scalars['String'] | null),vault_not_contains?: (Scalars['String'] | null),vault_starts_with?: (Scalars['String'] | null),vault_not_starts_with?: (Scalars['String'] | null),vault_ends_with?: (Scalars['String'] | null),vault_not_ends_with?: (Scalars['String'] | null),clonedFrom?: (Scalars['String'] | null),clonedFrom_not?: (Scalars['String'] | null),clonedFrom_gt?: (Scalars['String'] | null),clonedFrom_lt?: (Scalars['String'] | null),clonedFrom_gte?: (Scalars['String'] | null),clonedFrom_lte?: (Scalars['String'] | null),clonedFrom_in?: (Scalars['String'][] | null),clonedFrom_not_in?: (Scalars['String'][] | null),clonedFrom_contains?: (Scalars['String'] | null),clonedFrom_not_contains?: (Scalars['String'] | null),clonedFrom_starts_with?: (Scalars['String'] | null),clonedFrom_not_starts_with?: (Scalars['String'] | null),clonedFrom_ends_with?: (Scalars['String'] | null),clonedFrom_not_ends_with?: (Scalars['String'] | null),debtLimit?: (Scalars['BigInt'] | null),debtLimit_not?: (Scalars['BigInt'] | null),debtLimit_gt?: (Scalars['BigInt'] | null),debtLimit_lt?: (Scalars['BigInt'] | null),debtLimit_gte?: (Scalars['BigInt'] | null),debtLimit_lte?: (Scalars['BigInt'] | null),debtLimit_in?: (Scalars['BigInt'][] | null),debtLimit_not_in?: (Scalars['BigInt'][] | null),minDebtPerHarvest?: (Scalars['BigInt'] | null),minDebtPerHarvest_not?: (Scalars['BigInt'] | null),minDebtPerHarvest_gt?: (Scalars['BigInt'] | null),minDebtPerHarvest_lt?: (Scalars['BigInt'] | null),minDebtPerHarvest_gte?: (Scalars['BigInt'] | null),minDebtPerHarvest_lte?: (Scalars['BigInt'] | null),minDebtPerHarvest_in?: (Scalars['BigInt'][] | null),minDebtPerHarvest_not_in?: (Scalars['BigInt'][] | null),maxDebtPerHarvest?: (Scalars['BigInt'] | null),maxDebtPerHarvest_not?: (Scalars['BigInt'] | null),maxDebtPerHarvest_gt?: (Scalars['BigInt'] | null),maxDebtPerHarvest_lt?: (Scalars['BigInt'] | null),maxDebtPerHarvest_gte?: (Scalars['BigInt'] | null),maxDebtPerHarvest_lte?: (Scalars['BigInt'] | null),maxDebtPerHarvest_in?: (Scalars['BigInt'][] | null),maxDebtPerHarvest_not_in?: (Scalars['BigInt'][] | null),rateLimit?: (Scalars['BigInt'] | null),rateLimit_not?: (Scalars['BigInt'] | null),rateLimit_gt?: (Scalars['BigInt'] | null),rateLimit_lt?: (Scalars['BigInt'] | null),rateLimit_gte?: (Scalars['BigInt'] | null),rateLimit_lte?: (Scalars['BigInt'] | null),rateLimit_in?: (Scalars['BigInt'][] | null),rateLimit_not_in?: (Scalars['BigInt'][] | null),performanceFeeBps?: (Scalars['BigInt'] | null),performanceFeeBps_not?: (Scalars['BigInt'] | null),performanceFeeBps_gt?: (Scalars['BigInt'] | null),performanceFeeBps_lt?: (Scalars['BigInt'] | null),performanceFeeBps_gte?: (Scalars['BigInt'] | null),performanceFeeBps_lte?: (Scalars['BigInt'] | null),performanceFeeBps_in?: (Scalars['BigInt'][] | null),performanceFeeBps_not_in?: (Scalars['BigInt'][] | null),latestReport?: (Scalars['String'] | null),latestReport_not?: (Scalars['String'] | null),latestReport_gt?: (Scalars['String'] | null),latestReport_lt?: (Scalars['String'] | null),latestReport_gte?: (Scalars['String'] | null),latestReport_lte?: (Scalars['String'] | null),latestReport_in?: (Scalars['String'][] | null),latestReport_not_in?: (Scalars['String'][] | null),latestReport_contains?: (Scalars['String'] | null),latestReport_not_contains?: (Scalars['String'] | null),latestReport_starts_with?: (Scalars['String'] | null),latestReport_not_starts_with?: (Scalars['String'] | null),latestReport_ends_with?: (Scalars['String'] | null),latestReport_not_ends_with?: (Scalars['String'] | null)}

export interface SubscriptionRequest{
    transaction?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TransactionRequest]
    transactions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TransactionRequest]
    token?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenRequest]
    tokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenRequest]
    tokenFee?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenFeeRequest]
    tokenFees?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenFee_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenFee_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TokenFeeRequest]
    registry?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RegistryRequest]
    registries?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Registry_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Registry_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},RegistryRequest]
    vault?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VaultRequest]
    vaults?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Vault_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Vault_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VaultRequest]
    vaultUpdate?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VaultUpdateRequest]
    vaultUpdates?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultUpdate_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VaultUpdateRequest]
    account?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},AccountRequest]
    accounts?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Account_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Account_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},AccountRequest]
    deposit?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},DepositRequest]
    deposits?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},DepositRequest]
    withdrawal?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},WithdrawalRequest]
    withdrawals?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Withdrawal_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Withdrawal_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},WithdrawalRequest]
    transfer?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TransferRequest]
    transfers?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},TransferRequest]
    accountVaultPosition?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},AccountVaultPositionRequest]
    accountVaultPositions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPosition_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},AccountVaultPositionRequest]
    accountVaultPositionUpdate?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},AccountVaultPositionUpdateRequest]
    accountVaultPositionUpdates?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPositionUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPositionUpdate_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},AccountVaultPositionUpdateRequest]
    strategy?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StrategyRequest]
    strategies?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Strategy_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Strategy_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StrategyRequest]
    strategyReport?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StrategyReportRequest]
    strategyReports?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReport_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReport_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StrategyReportRequest]
    strategyReportResult?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StrategyReportResultRequest]
    strategyReportResults?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReportResult_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReportResult_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},StrategyReportResultRequest]
    harvest?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},HarvestRequest]
    harvests?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Harvest_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Harvest_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},HarvestRequest]
    vaultDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VaultDayDataRequest]
    vaultDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultDayData_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},VaultDayDataRequest]
    yearn?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},YearnRequest]
    yearns?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Yearn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Yearn_filter | null),
    /** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
    block?: (Block_height | null)},YearnRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TokenRequest{
    /** Token address */
    id?: boolean | number
    /** Number of decimals for this Token */
    decimals?: boolean | number
    /** Name of the Token */
    name?: boolean | number
    /** Symbol of the Token */
    symbol?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TokenFeeRequest{
    /** Token address */
    id?: boolean | number
    /** Fees paid using this token to the treasury */
    treasuryFees?: boolean | number
    /** Fees paid using this token to strategies */
    strategyFees?: boolean | number
    /** Fees paid using this token to strategies and the treasury */
    totalFees?: boolean | number
    token?: TokenRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TokenFee_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),treasuryFees?: (Scalars['BigInt'] | null),treasuryFees_not?: (Scalars['BigInt'] | null),treasuryFees_gt?: (Scalars['BigInt'] | null),treasuryFees_lt?: (Scalars['BigInt'] | null),treasuryFees_gte?: (Scalars['BigInt'] | null),treasuryFees_lte?: (Scalars['BigInt'] | null),treasuryFees_in?: (Scalars['BigInt'][] | null),treasuryFees_not_in?: (Scalars['BigInt'][] | null),strategyFees?: (Scalars['BigInt'] | null),strategyFees_not?: (Scalars['BigInt'] | null),strategyFees_gt?: (Scalars['BigInt'] | null),strategyFees_lt?: (Scalars['BigInt'] | null),strategyFees_gte?: (Scalars['BigInt'] | null),strategyFees_lte?: (Scalars['BigInt'] | null),strategyFees_in?: (Scalars['BigInt'][] | null),strategyFees_not_in?: (Scalars['BigInt'][] | null),totalFees?: (Scalars['BigInt'] | null),totalFees_not?: (Scalars['BigInt'] | null),totalFees_gt?: (Scalars['BigInt'] | null),totalFees_lt?: (Scalars['BigInt'] | null),totalFees_gte?: (Scalars['BigInt'] | null),totalFees_lte?: (Scalars['BigInt'] | null),totalFees_in?: (Scalars['BigInt'][] | null),totalFees_not_in?: (Scalars['BigInt'][] | null),token?: (Scalars['String'] | null),token_not?: (Scalars['String'] | null),token_gt?: (Scalars['String'] | null),token_lt?: (Scalars['String'] | null),token_gte?: (Scalars['String'] | null),token_lte?: (Scalars['String'] | null),token_in?: (Scalars['String'][] | null),token_not_in?: (Scalars['String'][] | null),token_contains?: (Scalars['String'] | null),token_not_contains?: (Scalars['String'] | null),token_starts_with?: (Scalars['String'] | null),token_not_starts_with?: (Scalars['String'] | null),token_ends_with?: (Scalars['String'] | null),token_not_ends_with?: (Scalars['String'] | null)}

export interface Token_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),decimals?: (Scalars['Int'] | null),decimals_not?: (Scalars['Int'] | null),decimals_gt?: (Scalars['Int'] | null),decimals_lt?: (Scalars['Int'] | null),decimals_gte?: (Scalars['Int'] | null),decimals_lte?: (Scalars['Int'] | null),decimals_in?: (Scalars['Int'][] | null),decimals_not_in?: (Scalars['Int'][] | null),name?: (Scalars['String'] | null),name_not?: (Scalars['String'] | null),name_gt?: (Scalars['String'] | null),name_lt?: (Scalars['String'] | null),name_gte?: (Scalars['String'] | null),name_lte?: (Scalars['String'] | null),name_in?: (Scalars['String'][] | null),name_not_in?: (Scalars['String'][] | null),name_contains?: (Scalars['String'] | null),name_not_contains?: (Scalars['String'] | null),name_starts_with?: (Scalars['String'] | null),name_not_starts_with?: (Scalars['String'] | null),name_ends_with?: (Scalars['String'] | null),name_not_ends_with?: (Scalars['String'] | null),symbol?: (Scalars['String'] | null),symbol_not?: (Scalars['String'] | null),symbol_gt?: (Scalars['String'] | null),symbol_lt?: (Scalars['String'] | null),symbol_gte?: (Scalars['String'] | null),symbol_lte?: (Scalars['String'] | null),symbol_in?: (Scalars['String'][] | null),symbol_not_in?: (Scalars['String'][] | null),symbol_contains?: (Scalars['String'] | null),symbol_not_contains?: (Scalars['String'] | null),symbol_starts_with?: (Scalars['String'] | null),symbol_not_starts_with?: (Scalars['String'] | null),symbol_ends_with?: (Scalars['String'] | null),symbol_not_ends_with?: (Scalars['String'] | null)}

export interface TransactionRequest{
    /** Transaction hash + Log Index */
    id?: boolean | number
    /** Log index related to the event. A Transaction might contain multiple events. */
    logIndex?: boolean | number
    /** The event name / call stacktrace */
    event?: boolean | number
    /** The transaction sender */
    from?: boolean | number
    /** Gas price used in the transaction */
    gasPrice?: boolean | number
    /** Gas sent used in the transaction */
    gasSent?: boolean | number
    /** Transaction hash */
    hash?: boolean | number
    /** The transaction index */
    index?: boolean | number
    /** Address that received the transaction */
    to?: boolean | number
    /** Ether value sent in the transaction */
    value?: boolean | number
    /** Timestamp when the transaction was executed */
    timestamp?: boolean | number
    /** Gas limit used in the transaction */
    gasLimit?: boolean | number
    /** Block number */
    blockNumber?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Transaction_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),logIndex?: (Scalars['BigInt'] | null),logIndex_not?: (Scalars['BigInt'] | null),logIndex_gt?: (Scalars['BigInt'] | null),logIndex_lt?: (Scalars['BigInt'] | null),logIndex_gte?: (Scalars['BigInt'] | null),logIndex_lte?: (Scalars['BigInt'] | null),logIndex_in?: (Scalars['BigInt'][] | null),logIndex_not_in?: (Scalars['BigInt'][] | null),event?: (Scalars['String'] | null),event_not?: (Scalars['String'] | null),event_gt?: (Scalars['String'] | null),event_lt?: (Scalars['String'] | null),event_gte?: (Scalars['String'] | null),event_lte?: (Scalars['String'] | null),event_in?: (Scalars['String'][] | null),event_not_in?: (Scalars['String'][] | null),event_contains?: (Scalars['String'] | null),event_not_contains?: (Scalars['String'] | null),event_starts_with?: (Scalars['String'] | null),event_not_starts_with?: (Scalars['String'] | null),event_ends_with?: (Scalars['String'] | null),event_not_ends_with?: (Scalars['String'] | null),from?: (Scalars['Bytes'] | null),from_not?: (Scalars['Bytes'] | null),from_in?: (Scalars['Bytes'][] | null),from_not_in?: (Scalars['Bytes'][] | null),from_contains?: (Scalars['Bytes'] | null),from_not_contains?: (Scalars['Bytes'] | null),gasPrice?: (Scalars['BigInt'] | null),gasPrice_not?: (Scalars['BigInt'] | null),gasPrice_gt?: (Scalars['BigInt'] | null),gasPrice_lt?: (Scalars['BigInt'] | null),gasPrice_gte?: (Scalars['BigInt'] | null),gasPrice_lte?: (Scalars['BigInt'] | null),gasPrice_in?: (Scalars['BigInt'][] | null),gasPrice_not_in?: (Scalars['BigInt'][] | null),gasSent?: (Scalars['BigInt'] | null),gasSent_not?: (Scalars['BigInt'] | null),gasSent_gt?: (Scalars['BigInt'] | null),gasSent_lt?: (Scalars['BigInt'] | null),gasSent_gte?: (Scalars['BigInt'] | null),gasSent_lte?: (Scalars['BigInt'] | null),gasSent_in?: (Scalars['BigInt'][] | null),gasSent_not_in?: (Scalars['BigInt'][] | null),hash?: (Scalars['Bytes'] | null),hash_not?: (Scalars['Bytes'] | null),hash_in?: (Scalars['Bytes'][] | null),hash_not_in?: (Scalars['Bytes'][] | null),hash_contains?: (Scalars['Bytes'] | null),hash_not_contains?: (Scalars['Bytes'] | null),index?: (Scalars['BigInt'] | null),index_not?: (Scalars['BigInt'] | null),index_gt?: (Scalars['BigInt'] | null),index_lt?: (Scalars['BigInt'] | null),index_gte?: (Scalars['BigInt'] | null),index_lte?: (Scalars['BigInt'] | null),index_in?: (Scalars['BigInt'][] | null),index_not_in?: (Scalars['BigInt'][] | null),to?: (Scalars['Bytes'] | null),to_not?: (Scalars['Bytes'] | null),to_in?: (Scalars['Bytes'][] | null),to_not_in?: (Scalars['Bytes'][] | null),to_contains?: (Scalars['Bytes'] | null),to_not_contains?: (Scalars['Bytes'] | null),value?: (Scalars['BigInt'] | null),value_not?: (Scalars['BigInt'] | null),value_gt?: (Scalars['BigInt'] | null),value_lt?: (Scalars['BigInt'] | null),value_gte?: (Scalars['BigInt'] | null),value_lte?: (Scalars['BigInt'] | null),value_in?: (Scalars['BigInt'][] | null),value_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),gasLimit?: (Scalars['BigInt'] | null),gasLimit_not?: (Scalars['BigInt'] | null),gasLimit_gt?: (Scalars['BigInt'] | null),gasLimit_lt?: (Scalars['BigInt'] | null),gasLimit_gte?: (Scalars['BigInt'] | null),gasLimit_lte?: (Scalars['BigInt'] | null),gasLimit_in?: (Scalars['BigInt'][] | null),gasLimit_not_in?: (Scalars['BigInt'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null)}

export interface TransferRequest{
    /** Transaction-Log */
    id?: boolean | number
    /** Vault */
    vault?: VaultRequest
    /** Sender */
    from?: AccountRequest
    /** Receiver */
    to?: AccountRequest
    /** Vault Share Token */
    shareToken?: TokenRequest
    /** Number of Vault Shares transferred */
    shareAmount?: boolean | number
    /** Vault Token */
    token?: TokenRequest
    /** Number of Tokens redeemable for shares transferred */
    tokenAmount?: boolean | number
    /** Token Amount in USDC, 0 if the transaction was before the oracle was deployed at 12198044 */
    tokenAmountUsdc?: boolean | number
    /** Timestamp of Transfer */
    timestamp?: boolean | number
    /** Block number of Transfer */
    blockNumber?: boolean | number
    /** Ethereum Transaction */
    transaction?: TransactionRequest
    /** Whether the transfer was used to pay a fee to the vault's rewards address */
    isFeeToTreasury?: boolean | number
    /** Whether the transfer was used to pay a fee to a strategy */
    isFeeToStrategy?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Transfer_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),vault?: (Scalars['String'] | null),vault_not?: (Scalars['String'] | null),vault_gt?: (Scalars['String'] | null),vault_lt?: (Scalars['String'] | null),vault_gte?: (Scalars['String'] | null),vault_lte?: (Scalars['String'] | null),vault_in?: (Scalars['String'][] | null),vault_not_in?: (Scalars['String'][] | null),vault_contains?: (Scalars['String'] | null),vault_not_contains?: (Scalars['String'] | null),vault_starts_with?: (Scalars['String'] | null),vault_not_starts_with?: (Scalars['String'] | null),vault_ends_with?: (Scalars['String'] | null),vault_not_ends_with?: (Scalars['String'] | null),from?: (Scalars['String'] | null),from_not?: (Scalars['String'] | null),from_gt?: (Scalars['String'] | null),from_lt?: (Scalars['String'] | null),from_gte?: (Scalars['String'] | null),from_lte?: (Scalars['String'] | null),from_in?: (Scalars['String'][] | null),from_not_in?: (Scalars['String'][] | null),from_contains?: (Scalars['String'] | null),from_not_contains?: (Scalars['String'] | null),from_starts_with?: (Scalars['String'] | null),from_not_starts_with?: (Scalars['String'] | null),from_ends_with?: (Scalars['String'] | null),from_not_ends_with?: (Scalars['String'] | null),to?: (Scalars['String'] | null),to_not?: (Scalars['String'] | null),to_gt?: (Scalars['String'] | null),to_lt?: (Scalars['String'] | null),to_gte?: (Scalars['String'] | null),to_lte?: (Scalars['String'] | null),to_in?: (Scalars['String'][] | null),to_not_in?: (Scalars['String'][] | null),to_contains?: (Scalars['String'] | null),to_not_contains?: (Scalars['String'] | null),to_starts_with?: (Scalars['String'] | null),to_not_starts_with?: (Scalars['String'] | null),to_ends_with?: (Scalars['String'] | null),to_not_ends_with?: (Scalars['String'] | null),shareToken?: (Scalars['String'] | null),shareToken_not?: (Scalars['String'] | null),shareToken_gt?: (Scalars['String'] | null),shareToken_lt?: (Scalars['String'] | null),shareToken_gte?: (Scalars['String'] | null),shareToken_lte?: (Scalars['String'] | null),shareToken_in?: (Scalars['String'][] | null),shareToken_not_in?: (Scalars['String'][] | null),shareToken_contains?: (Scalars['String'] | null),shareToken_not_contains?: (Scalars['String'] | null),shareToken_starts_with?: (Scalars['String'] | null),shareToken_not_starts_with?: (Scalars['String'] | null),shareToken_ends_with?: (Scalars['String'] | null),shareToken_not_ends_with?: (Scalars['String'] | null),shareAmount?: (Scalars['BigInt'] | null),shareAmount_not?: (Scalars['BigInt'] | null),shareAmount_gt?: (Scalars['BigInt'] | null),shareAmount_lt?: (Scalars['BigInt'] | null),shareAmount_gte?: (Scalars['BigInt'] | null),shareAmount_lte?: (Scalars['BigInt'] | null),shareAmount_in?: (Scalars['BigInt'][] | null),shareAmount_not_in?: (Scalars['BigInt'][] | null),token?: (Scalars['String'] | null),token_not?: (Scalars['String'] | null),token_gt?: (Scalars['String'] | null),token_lt?: (Scalars['String'] | null),token_gte?: (Scalars['String'] | null),token_lte?: (Scalars['String'] | null),token_in?: (Scalars['String'][] | null),token_not_in?: (Scalars['String'][] | null),token_contains?: (Scalars['String'] | null),token_not_contains?: (Scalars['String'] | null),token_starts_with?: (Scalars['String'] | null),token_not_starts_with?: (Scalars['String'] | null),token_ends_with?: (Scalars['String'] | null),token_not_ends_with?: (Scalars['String'] | null),tokenAmount?: (Scalars['BigInt'] | null),tokenAmount_not?: (Scalars['BigInt'] | null),tokenAmount_gt?: (Scalars['BigInt'] | null),tokenAmount_lt?: (Scalars['BigInt'] | null),tokenAmount_gte?: (Scalars['BigInt'] | null),tokenAmount_lte?: (Scalars['BigInt'] | null),tokenAmount_in?: (Scalars['BigInt'][] | null),tokenAmount_not_in?: (Scalars['BigInt'][] | null),tokenAmountUsdc?: (Scalars['BigInt'] | null),tokenAmountUsdc_not?: (Scalars['BigInt'] | null),tokenAmountUsdc_gt?: (Scalars['BigInt'] | null),tokenAmountUsdc_lt?: (Scalars['BigInt'] | null),tokenAmountUsdc_gte?: (Scalars['BigInt'] | null),tokenAmountUsdc_lte?: (Scalars['BigInt'] | null),tokenAmountUsdc_in?: (Scalars['BigInt'][] | null),tokenAmountUsdc_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),isFeeToTreasury?: (Scalars['Boolean'] | null),isFeeToTreasury_not?: (Scalars['Boolean'] | null),isFeeToTreasury_in?: (Scalars['Boolean'][] | null),isFeeToTreasury_not_in?: (Scalars['Boolean'][] | null),isFeeToStrategy?: (Scalars['Boolean'] | null),isFeeToStrategy_not?: (Scalars['Boolean'] | null),isFeeToStrategy_in?: (Scalars['Boolean'][] | null),isFeeToStrategy_not_in?: (Scalars['Boolean'][] | null)}

export interface VaultRequest{
    /** Vault address */
    id?: boolean | number
    /** Ethereum Transaction */
    transaction?: TransactionRequest
    /** The registry address */
    registry?: RegistryRequest
    /** Token this Vault will accrue */
    token?: TokenRequest
    /** Token representing Shares in the Vault */
    shareToken?: TokenRequest
    /** Vault classification */
    classification?: boolean | number
    /** Latest Vault Update */
    latestUpdate?: VaultUpdateRequest
    vaultDayData?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultDayData_filter | null)},VaultDayDataRequest] | VaultDayDataRequest
    /** All Vault Updates */
    historicalUpdates?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultUpdate_filter | null)},VaultUpdateRequest] | VaultUpdateRequest
    /** Strategies for this Vault */
    strategies?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Strategy_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Strategy_filter | null)},StrategyRequest] | StrategyRequest
    /** Token deposits into the Vault */
    deposits?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)},DepositRequest] | DepositRequest
    /** Token withdrawals from the Vault */
    withdrawals?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Withdrawal_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Withdrawal_filter | null)},WithdrawalRequest] | WithdrawalRequest
    /** Transfers of Vault Shares */
    transfers?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null)},TransferRequest] | TransferRequest
    /** Tags attached to the Vault */
    tags?: boolean | number
    /** Balance of Tokens in the Vault and its Strategies */
    balanceTokens?: boolean | number
    /** Current idle Token balance */
    balanceTokensIdle?: boolean | number
    /** Balance of Tokens invested into Strategies */
    balanceTokensInvested?: boolean | number
    /** Deposit limit for Tokens in the Vault */
    tokensDepositLimit?: boolean | number
    /** Current supply of Shares */
    sharesSupply?: boolean | number
    /** Management fee in basis points */
    managementFeeBps?: boolean | number
    /** Performance fee in basis points */
    performanceFeeBps?: boolean | number
    /** The address where management fees are paid to */
    rewards?: boolean | number
    /** This technical field defines whether this vault is a custom item (created by a custom handler) or not (created by the registry dynamically). */
    isTemplateListening?: boolean | number
    /** Creation timestamp */
    activation?: boolean | number
    /** The API version. */
    apiVersion?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VaultDayDataRequest{
    id?: boolean | number
    /** time in UTC */
    timestamp?: boolean | number
    vault?: VaultRequest
    pricePerShare?: boolean | number
    /** The amount of tokens deposited to this vault this day */
    deposited?: boolean | number
    /** The amount of tokens withdrawn from this vault this day */
    withdrawn?: boolean | number
    /** The total earnings generated for this vault up to and including this day */
    totalReturnsGenerated?: boolean | number
    /** The total earnings generated in USDC for this vault up to and including this day */
    totalReturnsGeneratedUSDC?: boolean | number
    /** The earnings generated for this vault this day */
    dayReturnsGenerated?: boolean | number
    /** The earnings generated in USDC for this vault this day */
    dayReturnsGeneratedUSDC?: boolean | number
    /** The price of one of the vault's underlying token */
    tokenPriceUSDC?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VaultDayData_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),vault?: (Scalars['String'] | null),vault_not?: (Scalars['String'] | null),vault_gt?: (Scalars['String'] | null),vault_lt?: (Scalars['String'] | null),vault_gte?: (Scalars['String'] | null),vault_lte?: (Scalars['String'] | null),vault_in?: (Scalars['String'][] | null),vault_not_in?: (Scalars['String'][] | null),vault_contains?: (Scalars['String'] | null),vault_not_contains?: (Scalars['String'] | null),vault_starts_with?: (Scalars['String'] | null),vault_not_starts_with?: (Scalars['String'] | null),vault_ends_with?: (Scalars['String'] | null),vault_not_ends_with?: (Scalars['String'] | null),pricePerShare?: (Scalars['BigInt'] | null),pricePerShare_not?: (Scalars['BigInt'] | null),pricePerShare_gt?: (Scalars['BigInt'] | null),pricePerShare_lt?: (Scalars['BigInt'] | null),pricePerShare_gte?: (Scalars['BigInt'] | null),pricePerShare_lte?: (Scalars['BigInt'] | null),pricePerShare_in?: (Scalars['BigInt'][] | null),pricePerShare_not_in?: (Scalars['BigInt'][] | null),deposited?: (Scalars['BigInt'] | null),deposited_not?: (Scalars['BigInt'] | null),deposited_gt?: (Scalars['BigInt'] | null),deposited_lt?: (Scalars['BigInt'] | null),deposited_gte?: (Scalars['BigInt'] | null),deposited_lte?: (Scalars['BigInt'] | null),deposited_in?: (Scalars['BigInt'][] | null),deposited_not_in?: (Scalars['BigInt'][] | null),withdrawn?: (Scalars['BigInt'] | null),withdrawn_not?: (Scalars['BigInt'] | null),withdrawn_gt?: (Scalars['BigInt'] | null),withdrawn_lt?: (Scalars['BigInt'] | null),withdrawn_gte?: (Scalars['BigInt'] | null),withdrawn_lte?: (Scalars['BigInt'] | null),withdrawn_in?: (Scalars['BigInt'][] | null),withdrawn_not_in?: (Scalars['BigInt'][] | null),totalReturnsGenerated?: (Scalars['BigInt'] | null),totalReturnsGenerated_not?: (Scalars['BigInt'] | null),totalReturnsGenerated_gt?: (Scalars['BigInt'] | null),totalReturnsGenerated_lt?: (Scalars['BigInt'] | null),totalReturnsGenerated_gte?: (Scalars['BigInt'] | null),totalReturnsGenerated_lte?: (Scalars['BigInt'] | null),totalReturnsGenerated_in?: (Scalars['BigInt'][] | null),totalReturnsGenerated_not_in?: (Scalars['BigInt'][] | null),totalReturnsGeneratedUSDC?: (Scalars['BigInt'] | null),totalReturnsGeneratedUSDC_not?: (Scalars['BigInt'] | null),totalReturnsGeneratedUSDC_gt?: (Scalars['BigInt'] | null),totalReturnsGeneratedUSDC_lt?: (Scalars['BigInt'] | null),totalReturnsGeneratedUSDC_gte?: (Scalars['BigInt'] | null),totalReturnsGeneratedUSDC_lte?: (Scalars['BigInt'] | null),totalReturnsGeneratedUSDC_in?: (Scalars['BigInt'][] | null),totalReturnsGeneratedUSDC_not_in?: (Scalars['BigInt'][] | null),dayReturnsGenerated?: (Scalars['BigInt'] | null),dayReturnsGenerated_not?: (Scalars['BigInt'] | null),dayReturnsGenerated_gt?: (Scalars['BigInt'] | null),dayReturnsGenerated_lt?: (Scalars['BigInt'] | null),dayReturnsGenerated_gte?: (Scalars['BigInt'] | null),dayReturnsGenerated_lte?: (Scalars['BigInt'] | null),dayReturnsGenerated_in?: (Scalars['BigInt'][] | null),dayReturnsGenerated_not_in?: (Scalars['BigInt'][] | null),dayReturnsGeneratedUSDC?: (Scalars['BigInt'] | null),dayReturnsGeneratedUSDC_not?: (Scalars['BigInt'] | null),dayReturnsGeneratedUSDC_gt?: (Scalars['BigInt'] | null),dayReturnsGeneratedUSDC_lt?: (Scalars['BigInt'] | null),dayReturnsGeneratedUSDC_gte?: (Scalars['BigInt'] | null),dayReturnsGeneratedUSDC_lte?: (Scalars['BigInt'] | null),dayReturnsGeneratedUSDC_in?: (Scalars['BigInt'][] | null),dayReturnsGeneratedUSDC_not_in?: (Scalars['BigInt'][] | null),tokenPriceUSDC?: (Scalars['BigInt'] | null),tokenPriceUSDC_not?: (Scalars['BigInt'] | null),tokenPriceUSDC_gt?: (Scalars['BigInt'] | null),tokenPriceUSDC_lt?: (Scalars['BigInt'] | null),tokenPriceUSDC_gte?: (Scalars['BigInt'] | null),tokenPriceUSDC_lte?: (Scalars['BigInt'] | null),tokenPriceUSDC_in?: (Scalars['BigInt'][] | null),tokenPriceUSDC_not_in?: (Scalars['BigInt'][] | null)}

export interface VaultUpdateRequest{
    /** Vault-Transaction-Log */
    id?: boolean | number
    /** Timestamp of update */
    timestamp?: boolean | number
    /** Block number of update */
    blockNumber?: boolean | number
    /** Ethereum Transaction */
    transaction?: TransactionRequest
    /** Vault this update is for */
    vault?: VaultRequest
    /** Sum of tokens deposited */
    tokensDeposited?: boolean | number
    /** Sum of tokens withdrawn */
    tokensWithdrawn?: boolean | number
    /** Sum of Shares minted over all time */
    sharesMinted?: boolean | number
    /** Sum of Shares burnt over all time */
    sharesBurnt?: boolean | number
    /** The current balance position defined as: (vault.totalAssets() * (vault.pricePerShare() / 10**vault.decimals())). */
    balancePosition?: boolean | number
    /** Current price per full share */
    pricePerShare?: boolean | number
    /** Returns generated in Tokens */
    returnsGenerated?: boolean | number
    /** Total fees in Shares */
    totalFees?: boolean | number
    /** Management fees in Shares */
    managementFees?: boolean | number
    /** Performance fees in Shares */
    performanceFees?: boolean | number
    /** The address where management fees are paid to */
    rewards?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VaultUpdate_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),vault?: (Scalars['String'] | null),vault_not?: (Scalars['String'] | null),vault_gt?: (Scalars['String'] | null),vault_lt?: (Scalars['String'] | null),vault_gte?: (Scalars['String'] | null),vault_lte?: (Scalars['String'] | null),vault_in?: (Scalars['String'][] | null),vault_not_in?: (Scalars['String'][] | null),vault_contains?: (Scalars['String'] | null),vault_not_contains?: (Scalars['String'] | null),vault_starts_with?: (Scalars['String'] | null),vault_not_starts_with?: (Scalars['String'] | null),vault_ends_with?: (Scalars['String'] | null),vault_not_ends_with?: (Scalars['String'] | null),tokensDeposited?: (Scalars['BigInt'] | null),tokensDeposited_not?: (Scalars['BigInt'] | null),tokensDeposited_gt?: (Scalars['BigInt'] | null),tokensDeposited_lt?: (Scalars['BigInt'] | null),tokensDeposited_gte?: (Scalars['BigInt'] | null),tokensDeposited_lte?: (Scalars['BigInt'] | null),tokensDeposited_in?: (Scalars['BigInt'][] | null),tokensDeposited_not_in?: (Scalars['BigInt'][] | null),tokensWithdrawn?: (Scalars['BigInt'] | null),tokensWithdrawn_not?: (Scalars['BigInt'] | null),tokensWithdrawn_gt?: (Scalars['BigInt'] | null),tokensWithdrawn_lt?: (Scalars['BigInt'] | null),tokensWithdrawn_gte?: (Scalars['BigInt'] | null),tokensWithdrawn_lte?: (Scalars['BigInt'] | null),tokensWithdrawn_in?: (Scalars['BigInt'][] | null),tokensWithdrawn_not_in?: (Scalars['BigInt'][] | null),sharesMinted?: (Scalars['BigInt'] | null),sharesMinted_not?: (Scalars['BigInt'] | null),sharesMinted_gt?: (Scalars['BigInt'] | null),sharesMinted_lt?: (Scalars['BigInt'] | null),sharesMinted_gte?: (Scalars['BigInt'] | null),sharesMinted_lte?: (Scalars['BigInt'] | null),sharesMinted_in?: (Scalars['BigInt'][] | null),sharesMinted_not_in?: (Scalars['BigInt'][] | null),sharesBurnt?: (Scalars['BigInt'] | null),sharesBurnt_not?: (Scalars['BigInt'] | null),sharesBurnt_gt?: (Scalars['BigInt'] | null),sharesBurnt_lt?: (Scalars['BigInt'] | null),sharesBurnt_gte?: (Scalars['BigInt'] | null),sharesBurnt_lte?: (Scalars['BigInt'] | null),sharesBurnt_in?: (Scalars['BigInt'][] | null),sharesBurnt_not_in?: (Scalars['BigInt'][] | null),balancePosition?: (Scalars['BigInt'] | null),balancePosition_not?: (Scalars['BigInt'] | null),balancePosition_gt?: (Scalars['BigInt'] | null),balancePosition_lt?: (Scalars['BigInt'] | null),balancePosition_gte?: (Scalars['BigInt'] | null),balancePosition_lte?: (Scalars['BigInt'] | null),balancePosition_in?: (Scalars['BigInt'][] | null),balancePosition_not_in?: (Scalars['BigInt'][] | null),pricePerShare?: (Scalars['BigInt'] | null),pricePerShare_not?: (Scalars['BigInt'] | null),pricePerShare_gt?: (Scalars['BigInt'] | null),pricePerShare_lt?: (Scalars['BigInt'] | null),pricePerShare_gte?: (Scalars['BigInt'] | null),pricePerShare_lte?: (Scalars['BigInt'] | null),pricePerShare_in?: (Scalars['BigInt'][] | null),pricePerShare_not_in?: (Scalars['BigInt'][] | null),returnsGenerated?: (Scalars['BigInt'] | null),returnsGenerated_not?: (Scalars['BigInt'] | null),returnsGenerated_gt?: (Scalars['BigInt'] | null),returnsGenerated_lt?: (Scalars['BigInt'] | null),returnsGenerated_gte?: (Scalars['BigInt'] | null),returnsGenerated_lte?: (Scalars['BigInt'] | null),returnsGenerated_in?: (Scalars['BigInt'][] | null),returnsGenerated_not_in?: (Scalars['BigInt'][] | null),totalFees?: (Scalars['BigInt'] | null),totalFees_not?: (Scalars['BigInt'] | null),totalFees_gt?: (Scalars['BigInt'] | null),totalFees_lt?: (Scalars['BigInt'] | null),totalFees_gte?: (Scalars['BigInt'] | null),totalFees_lte?: (Scalars['BigInt'] | null),totalFees_in?: (Scalars['BigInt'][] | null),totalFees_not_in?: (Scalars['BigInt'][] | null),managementFees?: (Scalars['BigInt'] | null),managementFees_not?: (Scalars['BigInt'] | null),managementFees_gt?: (Scalars['BigInt'] | null),managementFees_lt?: (Scalars['BigInt'] | null),managementFees_gte?: (Scalars['BigInt'] | null),managementFees_lte?: (Scalars['BigInt'] | null),managementFees_in?: (Scalars['BigInt'][] | null),managementFees_not_in?: (Scalars['BigInt'][] | null),performanceFees?: (Scalars['BigInt'] | null),performanceFees_not?: (Scalars['BigInt'] | null),performanceFees_gt?: (Scalars['BigInt'] | null),performanceFees_lt?: (Scalars['BigInt'] | null),performanceFees_gte?: (Scalars['BigInt'] | null),performanceFees_lte?: (Scalars['BigInt'] | null),performanceFees_in?: (Scalars['BigInt'][] | null),performanceFees_not_in?: (Scalars['BigInt'][] | null),rewards?: (Scalars['Bytes'] | null),rewards_not?: (Scalars['Bytes'] | null),rewards_in?: (Scalars['Bytes'][] | null),rewards_not_in?: (Scalars['Bytes'][] | null),rewards_contains?: (Scalars['Bytes'] | null),rewards_not_contains?: (Scalars['Bytes'] | null)}

export interface Vault_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),registry?: (Scalars['String'] | null),registry_not?: (Scalars['String'] | null),registry_gt?: (Scalars['String'] | null),registry_lt?: (Scalars['String'] | null),registry_gte?: (Scalars['String'] | null),registry_lte?: (Scalars['String'] | null),registry_in?: (Scalars['String'][] | null),registry_not_in?: (Scalars['String'][] | null),registry_contains?: (Scalars['String'] | null),registry_not_contains?: (Scalars['String'] | null),registry_starts_with?: (Scalars['String'] | null),registry_not_starts_with?: (Scalars['String'] | null),registry_ends_with?: (Scalars['String'] | null),registry_not_ends_with?: (Scalars['String'] | null),token?: (Scalars['String'] | null),token_not?: (Scalars['String'] | null),token_gt?: (Scalars['String'] | null),token_lt?: (Scalars['String'] | null),token_gte?: (Scalars['String'] | null),token_lte?: (Scalars['String'] | null),token_in?: (Scalars['String'][] | null),token_not_in?: (Scalars['String'][] | null),token_contains?: (Scalars['String'] | null),token_not_contains?: (Scalars['String'] | null),token_starts_with?: (Scalars['String'] | null),token_not_starts_with?: (Scalars['String'] | null),token_ends_with?: (Scalars['String'] | null),token_not_ends_with?: (Scalars['String'] | null),shareToken?: (Scalars['String'] | null),shareToken_not?: (Scalars['String'] | null),shareToken_gt?: (Scalars['String'] | null),shareToken_lt?: (Scalars['String'] | null),shareToken_gte?: (Scalars['String'] | null),shareToken_lte?: (Scalars['String'] | null),shareToken_in?: (Scalars['String'][] | null),shareToken_not_in?: (Scalars['String'][] | null),shareToken_contains?: (Scalars['String'] | null),shareToken_not_contains?: (Scalars['String'] | null),shareToken_starts_with?: (Scalars['String'] | null),shareToken_not_starts_with?: (Scalars['String'] | null),shareToken_ends_with?: (Scalars['String'] | null),shareToken_not_ends_with?: (Scalars['String'] | null),classification?: (VaultClassification | null),classification_not?: (VaultClassification | null),latestUpdate?: (Scalars['String'] | null),latestUpdate_not?: (Scalars['String'] | null),latestUpdate_gt?: (Scalars['String'] | null),latestUpdate_lt?: (Scalars['String'] | null),latestUpdate_gte?: (Scalars['String'] | null),latestUpdate_lte?: (Scalars['String'] | null),latestUpdate_in?: (Scalars['String'][] | null),latestUpdate_not_in?: (Scalars['String'][] | null),latestUpdate_contains?: (Scalars['String'] | null),latestUpdate_not_contains?: (Scalars['String'] | null),latestUpdate_starts_with?: (Scalars['String'] | null),latestUpdate_not_starts_with?: (Scalars['String'] | null),latestUpdate_ends_with?: (Scalars['String'] | null),latestUpdate_not_ends_with?: (Scalars['String'] | null),tags?: (Scalars['String'][] | null),tags_not?: (Scalars['String'][] | null),tags_contains?: (Scalars['String'][] | null),tags_not_contains?: (Scalars['String'][] | null),balanceTokens?: (Scalars['BigInt'] | null),balanceTokens_not?: (Scalars['BigInt'] | null),balanceTokens_gt?: (Scalars['BigInt'] | null),balanceTokens_lt?: (Scalars['BigInt'] | null),balanceTokens_gte?: (Scalars['BigInt'] | null),balanceTokens_lte?: (Scalars['BigInt'] | null),balanceTokens_in?: (Scalars['BigInt'][] | null),balanceTokens_not_in?: (Scalars['BigInt'][] | null),balanceTokensIdle?: (Scalars['BigInt'] | null),balanceTokensIdle_not?: (Scalars['BigInt'] | null),balanceTokensIdle_gt?: (Scalars['BigInt'] | null),balanceTokensIdle_lt?: (Scalars['BigInt'] | null),balanceTokensIdle_gte?: (Scalars['BigInt'] | null),balanceTokensIdle_lte?: (Scalars['BigInt'] | null),balanceTokensIdle_in?: (Scalars['BigInt'][] | null),balanceTokensIdle_not_in?: (Scalars['BigInt'][] | null),balanceTokensInvested?: (Scalars['BigInt'] | null),balanceTokensInvested_not?: (Scalars['BigInt'] | null),balanceTokensInvested_gt?: (Scalars['BigInt'] | null),balanceTokensInvested_lt?: (Scalars['BigInt'] | null),balanceTokensInvested_gte?: (Scalars['BigInt'] | null),balanceTokensInvested_lte?: (Scalars['BigInt'] | null),balanceTokensInvested_in?: (Scalars['BigInt'][] | null),balanceTokensInvested_not_in?: (Scalars['BigInt'][] | null),tokensDepositLimit?: (Scalars['BigInt'] | null),tokensDepositLimit_not?: (Scalars['BigInt'] | null),tokensDepositLimit_gt?: (Scalars['BigInt'] | null),tokensDepositLimit_lt?: (Scalars['BigInt'] | null),tokensDepositLimit_gte?: (Scalars['BigInt'] | null),tokensDepositLimit_lte?: (Scalars['BigInt'] | null),tokensDepositLimit_in?: (Scalars['BigInt'][] | null),tokensDepositLimit_not_in?: (Scalars['BigInt'][] | null),sharesSupply?: (Scalars['BigInt'] | null),sharesSupply_not?: (Scalars['BigInt'] | null),sharesSupply_gt?: (Scalars['BigInt'] | null),sharesSupply_lt?: (Scalars['BigInt'] | null),sharesSupply_gte?: (Scalars['BigInt'] | null),sharesSupply_lte?: (Scalars['BigInt'] | null),sharesSupply_in?: (Scalars['BigInt'][] | null),sharesSupply_not_in?: (Scalars['BigInt'][] | null),managementFeeBps?: (Scalars['Int'] | null),managementFeeBps_not?: (Scalars['Int'] | null),managementFeeBps_gt?: (Scalars['Int'] | null),managementFeeBps_lt?: (Scalars['Int'] | null),managementFeeBps_gte?: (Scalars['Int'] | null),managementFeeBps_lte?: (Scalars['Int'] | null),managementFeeBps_in?: (Scalars['Int'][] | null),managementFeeBps_not_in?: (Scalars['Int'][] | null),performanceFeeBps?: (Scalars['Int'] | null),performanceFeeBps_not?: (Scalars['Int'] | null),performanceFeeBps_gt?: (Scalars['Int'] | null),performanceFeeBps_lt?: (Scalars['Int'] | null),performanceFeeBps_gte?: (Scalars['Int'] | null),performanceFeeBps_lte?: (Scalars['Int'] | null),performanceFeeBps_in?: (Scalars['Int'][] | null),performanceFeeBps_not_in?: (Scalars['Int'][] | null),rewards?: (Scalars['Bytes'] | null),rewards_not?: (Scalars['Bytes'] | null),rewards_in?: (Scalars['Bytes'][] | null),rewards_not_in?: (Scalars['Bytes'][] | null),rewards_contains?: (Scalars['Bytes'] | null),rewards_not_contains?: (Scalars['Bytes'] | null),isTemplateListening?: (Scalars['Boolean'] | null),isTemplateListening_not?: (Scalars['Boolean'] | null),isTemplateListening_in?: (Scalars['Boolean'][] | null),isTemplateListening_not_in?: (Scalars['Boolean'][] | null),activation?: (Scalars['BigInt'] | null),activation_not?: (Scalars['BigInt'] | null),activation_gt?: (Scalars['BigInt'] | null),activation_lt?: (Scalars['BigInt'] | null),activation_gte?: (Scalars['BigInt'] | null),activation_lte?: (Scalars['BigInt'] | null),activation_in?: (Scalars['BigInt'][] | null),activation_not_in?: (Scalars['BigInt'][] | null),apiVersion?: (Scalars['String'] | null),apiVersion_not?: (Scalars['String'] | null),apiVersion_gt?: (Scalars['String'] | null),apiVersion_lt?: (Scalars['String'] | null),apiVersion_gte?: (Scalars['String'] | null),apiVersion_lte?: (Scalars['String'] | null),apiVersion_in?: (Scalars['String'][] | null),apiVersion_not_in?: (Scalars['String'][] | null),apiVersion_contains?: (Scalars['String'] | null),apiVersion_not_contains?: (Scalars['String'] | null),apiVersion_starts_with?: (Scalars['String'] | null),apiVersion_not_starts_with?: (Scalars['String'] | null),apiVersion_ends_with?: (Scalars['String'] | null),apiVersion_not_ends_with?: (Scalars['String'] | null)}

export interface WithdrawalRequest{
    /** Transaction-Log */
    id?: boolean | number
    /** Timestamp of update */
    timestamp?: boolean | number
    /** Block number of update */
    blockNumber?: boolean | number
    /** Account making withdraw */
    account?: AccountRequest
    /** Vault withdrawn from */
    vault?: VaultRequest
    /** Number of Tokens withdrawn from Vault */
    tokenAmount?: boolean | number
    /** Number of Vault Shares burnt */
    sharesBurnt?: boolean | number
    /** Ethereum Transaction */
    transaction?: TransactionRequest
    /** Vault Update */
    vaultUpdate?: VaultUpdateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Withdrawal_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),account?: (Scalars['String'] | null),account_not?: (Scalars['String'] | null),account_gt?: (Scalars['String'] | null),account_lt?: (Scalars['String'] | null),account_gte?: (Scalars['String'] | null),account_lte?: (Scalars['String'] | null),account_in?: (Scalars['String'][] | null),account_not_in?: (Scalars['String'][] | null),account_contains?: (Scalars['String'] | null),account_not_contains?: (Scalars['String'] | null),account_starts_with?: (Scalars['String'] | null),account_not_starts_with?: (Scalars['String'] | null),account_ends_with?: (Scalars['String'] | null),account_not_ends_with?: (Scalars['String'] | null),vault?: (Scalars['String'] | null),vault_not?: (Scalars['String'] | null),vault_gt?: (Scalars['String'] | null),vault_lt?: (Scalars['String'] | null),vault_gte?: (Scalars['String'] | null),vault_lte?: (Scalars['String'] | null),vault_in?: (Scalars['String'][] | null),vault_not_in?: (Scalars['String'][] | null),vault_contains?: (Scalars['String'] | null),vault_not_contains?: (Scalars['String'] | null),vault_starts_with?: (Scalars['String'] | null),vault_not_starts_with?: (Scalars['String'] | null),vault_ends_with?: (Scalars['String'] | null),vault_not_ends_with?: (Scalars['String'] | null),tokenAmount?: (Scalars['BigInt'] | null),tokenAmount_not?: (Scalars['BigInt'] | null),tokenAmount_gt?: (Scalars['BigInt'] | null),tokenAmount_lt?: (Scalars['BigInt'] | null),tokenAmount_gte?: (Scalars['BigInt'] | null),tokenAmount_lte?: (Scalars['BigInt'] | null),tokenAmount_in?: (Scalars['BigInt'][] | null),tokenAmount_not_in?: (Scalars['BigInt'][] | null),sharesBurnt?: (Scalars['BigInt'] | null),sharesBurnt_not?: (Scalars['BigInt'] | null),sharesBurnt_gt?: (Scalars['BigInt'] | null),sharesBurnt_lt?: (Scalars['BigInt'] | null),sharesBurnt_gte?: (Scalars['BigInt'] | null),sharesBurnt_lte?: (Scalars['BigInt'] | null),sharesBurnt_in?: (Scalars['BigInt'][] | null),sharesBurnt_not_in?: (Scalars['BigInt'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),vaultUpdate?: (Scalars['String'] | null),vaultUpdate_not?: (Scalars['String'] | null),vaultUpdate_gt?: (Scalars['String'] | null),vaultUpdate_lt?: (Scalars['String'] | null),vaultUpdate_gte?: (Scalars['String'] | null),vaultUpdate_lte?: (Scalars['String'] | null),vaultUpdate_in?: (Scalars['String'][] | null),vaultUpdate_not_in?: (Scalars['String'][] | null),vaultUpdate_contains?: (Scalars['String'] | null),vaultUpdate_not_contains?: (Scalars['String'] | null),vaultUpdate_starts_with?: (Scalars['String'] | null),vaultUpdate_not_starts_with?: (Scalars['String'] | null),vaultUpdate_ends_with?: (Scalars['String'] | null),vaultUpdate_not_ends_with?: (Scalars['String'] | null)}

export interface YearnRequest{
    id?: boolean | number
    /** Only valid after the oracle was deployed at 12242339 */
    treasuryFeesUsdc?: boolean | number
    /** Only valid after the oracle was deployed at 12242339 */
    strategyFeesUsdc?: boolean | number
    /** Only valid after the oracle was deployed at 12242339 */
    totalFeesUsdc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Yearn_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),treasuryFeesUsdc?: (Scalars['BigInt'] | null),treasuryFeesUsdc_not?: (Scalars['BigInt'] | null),treasuryFeesUsdc_gt?: (Scalars['BigInt'] | null),treasuryFeesUsdc_lt?: (Scalars['BigInt'] | null),treasuryFeesUsdc_gte?: (Scalars['BigInt'] | null),treasuryFeesUsdc_lte?: (Scalars['BigInt'] | null),treasuryFeesUsdc_in?: (Scalars['BigInt'][] | null),treasuryFeesUsdc_not_in?: (Scalars['BigInt'][] | null),strategyFeesUsdc?: (Scalars['BigInt'] | null),strategyFeesUsdc_not?: (Scalars['BigInt'] | null),strategyFeesUsdc_gt?: (Scalars['BigInt'] | null),strategyFeesUsdc_lt?: (Scalars['BigInt'] | null),strategyFeesUsdc_gte?: (Scalars['BigInt'] | null),strategyFeesUsdc_lte?: (Scalars['BigInt'] | null),strategyFeesUsdc_in?: (Scalars['BigInt'][] | null),strategyFeesUsdc_not_in?: (Scalars['BigInt'][] | null),totalFeesUsdc?: (Scalars['BigInt'] | null),totalFeesUsdc_not?: (Scalars['BigInt'] | null),totalFeesUsdc_gt?: (Scalars['BigInt'] | null),totalFeesUsdc_lt?: (Scalars['BigInt'] | null),totalFeesUsdc_gte?: (Scalars['BigInt'] | null),totalFeesUsdc_lte?: (Scalars['BigInt'] | null),totalFeesUsdc_in?: (Scalars['BigInt'][] | null),totalFeesUsdc_not_in?: (Scalars['BigInt'][] | null)}

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


const Account_possibleTypes = ['Account']
export const isAccount = (obj?: { __typename?: any } | null): obj is Account => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAccount"')
  return Account_possibleTypes.includes(obj.__typename)
}



const AccountVaultPosition_possibleTypes = ['AccountVaultPosition']
export const isAccountVaultPosition = (obj?: { __typename?: any } | null): obj is AccountVaultPosition => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAccountVaultPosition"')
  return AccountVaultPosition_possibleTypes.includes(obj.__typename)
}



const AccountVaultPositionUpdate_possibleTypes = ['AccountVaultPositionUpdate']
export const isAccountVaultPositionUpdate = (obj?: { __typename?: any } | null): obj is AccountVaultPositionUpdate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAccountVaultPositionUpdate"')
  return AccountVaultPositionUpdate_possibleTypes.includes(obj.__typename)
}



const Deposit_possibleTypes = ['Deposit']
export const isDeposit = (obj?: { __typename?: any } | null): obj is Deposit => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isDeposit"')
  return Deposit_possibleTypes.includes(obj.__typename)
}



const Harvest_possibleTypes = ['Harvest']
export const isHarvest = (obj?: { __typename?: any } | null): obj is Harvest => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isHarvest"')
  return Harvest_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Registry_possibleTypes = ['Registry']
export const isRegistry = (obj?: { __typename?: any } | null): obj is Registry => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRegistry"')
  return Registry_possibleTypes.includes(obj.__typename)
}



const Strategy_possibleTypes = ['Strategy']
export const isStrategy = (obj?: { __typename?: any } | null): obj is Strategy => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStrategy"')
  return Strategy_possibleTypes.includes(obj.__typename)
}



const StrategyReport_possibleTypes = ['StrategyReport']
export const isStrategyReport = (obj?: { __typename?: any } | null): obj is StrategyReport => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStrategyReport"')
  return StrategyReport_possibleTypes.includes(obj.__typename)
}



const StrategyReportResult_possibleTypes = ['StrategyReportResult']
export const isStrategyReportResult = (obj?: { __typename?: any } | null): obj is StrategyReportResult => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStrategyReportResult"')
  return StrategyReportResult_possibleTypes.includes(obj.__typename)
}



const Subscription_possibleTypes = ['Subscription']
export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}



const Token_possibleTypes = ['Token']
export const isToken = (obj?: { __typename?: any } | null): obj is Token => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isToken"')
  return Token_possibleTypes.includes(obj.__typename)
}



const TokenFee_possibleTypes = ['TokenFee']
export const isTokenFee = (obj?: { __typename?: any } | null): obj is TokenFee => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTokenFee"')
  return TokenFee_possibleTypes.includes(obj.__typename)
}



const Transaction_possibleTypes = ['Transaction']
export const isTransaction = (obj?: { __typename?: any } | null): obj is Transaction => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTransaction"')
  return Transaction_possibleTypes.includes(obj.__typename)
}



const Transfer_possibleTypes = ['Transfer']
export const isTransfer = (obj?: { __typename?: any } | null): obj is Transfer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTransfer"')
  return Transfer_possibleTypes.includes(obj.__typename)
}



const Vault_possibleTypes = ['Vault']
export const isVault = (obj?: { __typename?: any } | null): obj is Vault => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isVault"')
  return Vault_possibleTypes.includes(obj.__typename)
}



const VaultDayData_possibleTypes = ['VaultDayData']
export const isVaultDayData = (obj?: { __typename?: any } | null): obj is VaultDayData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isVaultDayData"')
  return VaultDayData_possibleTypes.includes(obj.__typename)
}



const VaultUpdate_possibleTypes = ['VaultUpdate']
export const isVaultUpdate = (obj?: { __typename?: any } | null): obj is VaultUpdate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isVaultUpdate"')
  return VaultUpdate_possibleTypes.includes(obj.__typename)
}



const Withdrawal_possibleTypes = ['Withdrawal']
export const isWithdrawal = (obj?: { __typename?: any } | null): obj is Withdrawal => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWithdrawal"')
  return Withdrawal_possibleTypes.includes(obj.__typename)
}



const Yearn_possibleTypes = ['Yearn']
export const isYearn = (obj?: { __typename?: any } | null): obj is Yearn => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isYearn"')
  return Yearn_possibleTypes.includes(obj.__typename)
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


export interface AccountPromiseChain{
    
/** Account address */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Vault deposits */
deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>}),
    
/** Vault withdrawals */
withdrawals: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Withdrawal_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Withdrawal_filter | null)}) => {get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Promise<FieldsSelection<Withdrawal, R>[]>})&({get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Promise<FieldsSelection<Withdrawal, R>[]>}),
    
/** Vault positions */
vaultPositions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPosition_filter | null)}) => {get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>[]) => Promise<FieldsSelection<AccountVaultPosition, R>[]>})&({get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>[]) => Promise<FieldsSelection<AccountVaultPosition, R>[]>}),
    
/** Incoming share transfers */
sharesReceived: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null)}) => {get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Promise<FieldsSelection<Transfer, R>[]>})&({get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Promise<FieldsSelection<Transfer, R>[]>}),
    
/** Outgoing share transfers */
sharesSent: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null)}) => {get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Promise<FieldsSelection<Transfer, R>[]>})&({get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Promise<FieldsSelection<Transfer, R>[]>})
}

export interface AccountObservableChain{
    
/** Account address */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Vault deposits */
deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>}),
    
/** Vault withdrawals */
withdrawals: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Withdrawal_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Withdrawal_filter | null)}) => {get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Observable<FieldsSelection<Withdrawal, R>[]>})&({get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Observable<FieldsSelection<Withdrawal, R>[]>}),
    
/** Vault positions */
vaultPositions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPosition_filter | null)}) => {get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>[]) => Observable<FieldsSelection<AccountVaultPosition, R>[]>})&({get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>[]) => Observable<FieldsSelection<AccountVaultPosition, R>[]>}),
    
/** Incoming share transfers */
sharesReceived: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null)}) => {get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Observable<FieldsSelection<Transfer, R>[]>})&({get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Observable<FieldsSelection<Transfer, R>[]>}),
    
/** Outgoing share transfers */
sharesSent: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null)}) => {get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Observable<FieldsSelection<Transfer, R>[]>})&({get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Observable<FieldsSelection<Transfer, R>[]>})
}

export interface AccountVaultPositionPromiseChain{
    
/** Account-Vault */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Vault */
vault: (VaultPromiseChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Promise<FieldsSelection<Vault, R>>}),
    
/** Account */
account: (AccountPromiseChain & {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>) => Promise<FieldsSelection<Account, R>>}),
    
/** Vault token */
token: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    
/** Vault share token */
shareToken: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    
/** Created in transaction */
transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    
/** Latest account update for this Vault */
latestUpdate: (AccountVaultPositionUpdatePromiseChain & {get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>) => Promise<FieldsSelection<AccountVaultPositionUpdate, R>>}),
    
/** Account updates over time */
updates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPositionUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPositionUpdate_filter | null)}) => {get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>[]) => Promise<FieldsSelection<AccountVaultPositionUpdate, R>[]>})&({get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>[]) => Promise<FieldsSelection<AccountVaultPositionUpdate, R>[]>}),
    
/** Share balance */
balanceShares: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The current balance of tokens defined as: sum(deposits) - sum(withdrawals) + sum(received transfers) - sum(sent transfers). */
balanceTokens: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The current balance position defined as: (vault.balanceOf(account) * (vault.pricePerShare() / 10**vault.decimals())). */
balancePosition: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The accumulated profit balance for the account/vault. It is only calculated when the user withdraws all the shares. */
balanceProfit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface AccountVaultPositionObservableChain{
    
/** Account-Vault */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Vault */
vault: (VaultObservableChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Observable<FieldsSelection<Vault, R>>}),
    
/** Account */
account: (AccountObservableChain & {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>) => Observable<FieldsSelection<Account, R>>}),
    
/** Vault token */
token: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    
/** Vault share token */
shareToken: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    
/** Created in transaction */
transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    
/** Latest account update for this Vault */
latestUpdate: (AccountVaultPositionUpdateObservableChain & {get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>) => Observable<FieldsSelection<AccountVaultPositionUpdate, R>>}),
    
/** Account updates over time */
updates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPositionUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPositionUpdate_filter | null)}) => {get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>[]) => Observable<FieldsSelection<AccountVaultPositionUpdate, R>[]>})&({get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>[]) => Observable<FieldsSelection<AccountVaultPositionUpdate, R>[]>}),
    
/** Share balance */
balanceShares: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The current balance of tokens defined as: sum(deposits) - sum(withdrawals) + sum(received transfers) - sum(sent transfers). */
balanceTokens: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The current balance position defined as: (vault.balanceOf(account) * (vault.pricePerShare() / 10**vault.decimals())). */
balancePosition: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The accumulated profit balance for the account/vault. It is only calculated when the user withdraws all the shares. */
balanceProfit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface AccountVaultPositionUpdatePromiseChain{
    
/** Account-Vault-Order */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Incremental value for the same account/vault. */
order: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Timestamp */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Block number */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Account that owns position update */
account: (AccountPromiseChain & {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>) => Promise<FieldsSelection<Account, R>>}),
    
/** The account vault position that this update applies to */
accountVaultPosition: (AccountVaultPositionPromiseChain & {get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>) => Promise<FieldsSelection<AccountVaultPosition, R>>}),
    
/** Ethereum Transaction */
transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    
/** Sum of token deposits */
deposits: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Sum of token withdrawals */
withdrawals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Sum of share tokens minted */
sharesMinted: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Sum of share tokens burnt */
sharesBurnt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    tokensSent: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    tokensReceived: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    sharesSent: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    sharesReceived: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    balanceShares: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The balance position. */
balancePosition: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Vault Update */
vaultUpdate: (VaultUpdatePromiseChain & {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>) => Promise<FieldsSelection<VaultUpdate, R>>})
}

export interface AccountVaultPositionUpdateObservableChain{
    
/** Account-Vault-Order */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Incremental value for the same account/vault. */
order: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Timestamp */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Block number */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Account that owns position update */
account: (AccountObservableChain & {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>) => Observable<FieldsSelection<Account, R>>}),
    
/** The account vault position that this update applies to */
accountVaultPosition: (AccountVaultPositionObservableChain & {get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>) => Observable<FieldsSelection<AccountVaultPosition, R>>}),
    
/** Ethereum Transaction */
transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    
/** Sum of token deposits */
deposits: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Sum of token withdrawals */
withdrawals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Sum of share tokens minted */
sharesMinted: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Sum of share tokens burnt */
sharesBurnt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    tokensSent: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    tokensReceived: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    sharesSent: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    sharesReceived: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    balanceShares: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The balance position. */
balancePosition: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Vault Update */
vaultUpdate: (VaultUpdateObservableChain & {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>) => Observable<FieldsSelection<VaultUpdate, R>>})
}

export interface DepositPromiseChain{
    
/** Transaction-Log */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Timestamp of update */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Block number of update */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Account making Deposit */
account: (AccountPromiseChain & {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>) => Promise<FieldsSelection<Account, R>>}),
    
/** Vault deposited into */
vault: (VaultPromiseChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Promise<FieldsSelection<Vault, R>>}),
    
/** Number of Tokens deposited into Vault */
tokenAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Number of new Vault Shares minted */
sharesMinted: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    
/** Vault Update */
vaultUpdate: (VaultUpdatePromiseChain & {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>) => Promise<FieldsSelection<VaultUpdate, R>>})
}

export interface DepositObservableChain{
    
/** Transaction-Log */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Timestamp of update */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Block number of update */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Account making Deposit */
account: (AccountObservableChain & {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>) => Observable<FieldsSelection<Account, R>>}),
    
/** Vault deposited into */
vault: (VaultObservableChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Observable<FieldsSelection<Vault, R>>}),
    
/** Number of Tokens deposited into Vault */
tokenAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Number of new Vault Shares minted */
sharesMinted: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    
/** Vault Update */
vaultUpdate: (VaultUpdateObservableChain & {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>) => Observable<FieldsSelection<VaultUpdate, R>>})
}

export interface HarvestPromiseChain{
    
/** Strategy-Transaction-Log */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Timestamp the strategy report was most recently updated. */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Blocknumber the strategy report was most recently updated. */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    
/** Vault that owns the strategy */
vault: (VaultPromiseChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Promise<FieldsSelection<Vault, R>>}),
    
/** Strategy that harvested */
strategy: (StrategyPromiseChain & {get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>) => Promise<FieldsSelection<Strategy, R>>}),
    
/** Function caller */
harvester: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    
/** The reported profit amount for the strategy at the time of the harvest. */
profit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The reported loss amount for the strategy at the time of the harvest. */
loss: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The reported debt paid from strategy at the time of the harvest. */
debtPayment: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The reported outstanding debt from strategy at the time of the harvest. */
debtOutstanding: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface HarvestObservableChain{
    
/** Strategy-Transaction-Log */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Timestamp the strategy report was most recently updated. */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Blocknumber the strategy report was most recently updated. */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    
/** Vault that owns the strategy */
vault: (VaultObservableChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Observable<FieldsSelection<Vault, R>>}),
    
/** Strategy that harvested */
strategy: (StrategyObservableChain & {get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>) => Observable<FieldsSelection<Strategy, R>>}),
    
/** Function caller */
harvester: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    
/** The reported profit amount for the strategy at the time of the harvest. */
profit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The reported loss amount for the strategy at the time of the harvest. */
loss: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The reported debt paid from strategy at the time of the harvest. */
debtPayment: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The reported outstanding debt from strategy at the time of the harvest. */
debtOutstanding: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface QueryPromiseChain{
    transaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)) => Promise<(FieldsSelection<Transaction, R> | undefined)>}),
    transactions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Promise<FieldsSelection<Transaction, R>[]>})&({get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Promise<FieldsSelection<Transaction, R>[]>}),
    token: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Promise<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Promise<FieldsSelection<Token, R>[]>})&({get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Promise<FieldsSelection<Token, R>[]>}),
    tokenFee: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenFeePromiseChain & {get: <R extends TokenFeeRequest>(request: R, defaultValue?: (FieldsSelection<TokenFee, R> | undefined)) => Promise<(FieldsSelection<TokenFee, R> | undefined)>}),
    tokenFees: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenFee_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenFee_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenFeeRequest>(request: R, defaultValue?: FieldsSelection<TokenFee, R>[]) => Promise<FieldsSelection<TokenFee, R>[]>})&({get: <R extends TokenFeeRequest>(request: R, defaultValue?: FieldsSelection<TokenFee, R>[]) => Promise<FieldsSelection<TokenFee, R>[]>}),
    registry: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RegistryPromiseChain & {get: <R extends RegistryRequest>(request: R, defaultValue?: (FieldsSelection<Registry, R> | undefined)) => Promise<(FieldsSelection<Registry, R> | undefined)>}),
    registries: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Registry_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Registry_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RegistryRequest>(request: R, defaultValue?: FieldsSelection<Registry, R>[]) => Promise<FieldsSelection<Registry, R>[]>})&({get: <R extends RegistryRequest>(request: R, defaultValue?: FieldsSelection<Registry, R>[]) => Promise<FieldsSelection<Registry, R>[]>}),
    vault: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VaultPromiseChain & {get: <R extends VaultRequest>(request: R, defaultValue?: (FieldsSelection<Vault, R> | undefined)) => Promise<(FieldsSelection<Vault, R> | undefined)>}),
    vaults: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Vault_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Vault_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>[]) => Promise<FieldsSelection<Vault, R>[]>})&({get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>[]) => Promise<FieldsSelection<Vault, R>[]>}),
    vaultUpdate: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VaultUpdatePromiseChain & {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: (FieldsSelection<VaultUpdate, R> | undefined)) => Promise<(FieldsSelection<VaultUpdate, R> | undefined)>}),
    vaultUpdates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultUpdate_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>[]) => Promise<FieldsSelection<VaultUpdate, R>[]>})&({get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>[]) => Promise<FieldsSelection<VaultUpdate, R>[]>}),
    account: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => AccountPromiseChain & {get: <R extends AccountRequest>(request: R, defaultValue?: (FieldsSelection<Account, R> | undefined)) => Promise<(FieldsSelection<Account, R> | undefined)>}),
    accounts: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Account_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Account_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>[]) => Promise<FieldsSelection<Account, R>[]>})&({get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>[]) => Promise<FieldsSelection<Account, R>[]>}),
    deposit: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => DepositPromiseChain & {get: <R extends DepositRequest>(request: R, defaultValue?: (FieldsSelection<Deposit, R> | undefined)) => Promise<(FieldsSelection<Deposit, R> | undefined)>}),
    deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>}),
    withdrawal: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => WithdrawalPromiseChain & {get: <R extends WithdrawalRequest>(request: R, defaultValue?: (FieldsSelection<Withdrawal, R> | undefined)) => Promise<(FieldsSelection<Withdrawal, R> | undefined)>}),
    withdrawals: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Withdrawal_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Withdrawal_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Promise<FieldsSelection<Withdrawal, R>[]>})&({get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Promise<FieldsSelection<Withdrawal, R>[]>}),
    transfer: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TransferPromiseChain & {get: <R extends TransferRequest>(request: R, defaultValue?: (FieldsSelection<Transfer, R> | undefined)) => Promise<(FieldsSelection<Transfer, R> | undefined)>}),
    transfers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Promise<FieldsSelection<Transfer, R>[]>})&({get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Promise<FieldsSelection<Transfer, R>[]>}),
    accountVaultPosition: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => AccountVaultPositionPromiseChain & {get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: (FieldsSelection<AccountVaultPosition, R> | undefined)) => Promise<(FieldsSelection<AccountVaultPosition, R> | undefined)>}),
    accountVaultPositions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPosition_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>[]) => Promise<FieldsSelection<AccountVaultPosition, R>[]>})&({get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>[]) => Promise<FieldsSelection<AccountVaultPosition, R>[]>}),
    accountVaultPositionUpdate: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => AccountVaultPositionUpdatePromiseChain & {get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: (FieldsSelection<AccountVaultPositionUpdate, R> | undefined)) => Promise<(FieldsSelection<AccountVaultPositionUpdate, R> | undefined)>}),
    accountVaultPositionUpdates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPositionUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPositionUpdate_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>[]) => Promise<FieldsSelection<AccountVaultPositionUpdate, R>[]>})&({get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>[]) => Promise<FieldsSelection<AccountVaultPositionUpdate, R>[]>}),
    strategy: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StrategyPromiseChain & {get: <R extends StrategyRequest>(request: R, defaultValue?: (FieldsSelection<Strategy, R> | undefined)) => Promise<(FieldsSelection<Strategy, R> | undefined)>}),
    strategies: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Strategy_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Strategy_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>[]) => Promise<FieldsSelection<Strategy, R>[]>})&({get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>[]) => Promise<FieldsSelection<Strategy, R>[]>}),
    strategyReport: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StrategyReportPromiseChain & {get: <R extends StrategyReportRequest>(request: R, defaultValue?: (FieldsSelection<StrategyReport, R> | undefined)) => Promise<(FieldsSelection<StrategyReport, R> | undefined)>}),
    strategyReports: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReport_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReport_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>[]) => Promise<FieldsSelection<StrategyReport, R>[]>})&({get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>[]) => Promise<FieldsSelection<StrategyReport, R>[]>}),
    strategyReportResult: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StrategyReportResultPromiseChain & {get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: (FieldsSelection<StrategyReportResult, R> | undefined)) => Promise<(FieldsSelection<StrategyReportResult, R> | undefined)>}),
    strategyReportResults: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReportResult_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReportResult_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: FieldsSelection<StrategyReportResult, R>[]) => Promise<FieldsSelection<StrategyReportResult, R>[]>})&({get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: FieldsSelection<StrategyReportResult, R>[]) => Promise<FieldsSelection<StrategyReportResult, R>[]>}),
    harvest: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => HarvestPromiseChain & {get: <R extends HarvestRequest>(request: R, defaultValue?: (FieldsSelection<Harvest, R> | undefined)) => Promise<(FieldsSelection<Harvest, R> | undefined)>}),
    harvests: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Harvest_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Harvest_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends HarvestRequest>(request: R, defaultValue?: FieldsSelection<Harvest, R>[]) => Promise<FieldsSelection<Harvest, R>[]>})&({get: <R extends HarvestRequest>(request: R, defaultValue?: FieldsSelection<Harvest, R>[]) => Promise<FieldsSelection<Harvest, R>[]>}),
    vaultDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VaultDayDataPromiseChain & {get: <R extends VaultDayDataRequest>(request: R, defaultValue?: (FieldsSelection<VaultDayData, R> | undefined)) => Promise<(FieldsSelection<VaultDayData, R> | undefined)>}),
    vaultDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VaultDayDataRequest>(request: R, defaultValue?: FieldsSelection<VaultDayData, R>[]) => Promise<FieldsSelection<VaultDayData, R>[]>})&({get: <R extends VaultDayDataRequest>(request: R, defaultValue?: FieldsSelection<VaultDayData, R>[]) => Promise<FieldsSelection<VaultDayData, R>[]>}),
    yearn: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => YearnPromiseChain & {get: <R extends YearnRequest>(request: R, defaultValue?: (FieldsSelection<Yearn, R> | undefined)) => Promise<(FieldsSelection<Yearn, R> | undefined)>}),
    yearns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Yearn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Yearn_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends YearnRequest>(request: R, defaultValue?: FieldsSelection<Yearn, R>[]) => Promise<FieldsSelection<Yearn, R>[]>})&({get: <R extends YearnRequest>(request: R, defaultValue?: FieldsSelection<Yearn, R>[]) => Promise<FieldsSelection<Yearn, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface QueryObservableChain{
    transaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)) => Observable<(FieldsSelection<Transaction, R> | undefined)>}),
    transactions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Observable<FieldsSelection<Transaction, R>[]>})&({get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Observable<FieldsSelection<Transaction, R>[]>}),
    token: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Observable<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Observable<FieldsSelection<Token, R>[]>})&({get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Observable<FieldsSelection<Token, R>[]>}),
    tokenFee: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenFeeObservableChain & {get: <R extends TokenFeeRequest>(request: R, defaultValue?: (FieldsSelection<TokenFee, R> | undefined)) => Observable<(FieldsSelection<TokenFee, R> | undefined)>}),
    tokenFees: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenFee_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenFee_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenFeeRequest>(request: R, defaultValue?: FieldsSelection<TokenFee, R>[]) => Observable<FieldsSelection<TokenFee, R>[]>})&({get: <R extends TokenFeeRequest>(request: R, defaultValue?: FieldsSelection<TokenFee, R>[]) => Observable<FieldsSelection<TokenFee, R>[]>}),
    registry: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RegistryObservableChain & {get: <R extends RegistryRequest>(request: R, defaultValue?: (FieldsSelection<Registry, R> | undefined)) => Observable<(FieldsSelection<Registry, R> | undefined)>}),
    registries: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Registry_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Registry_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RegistryRequest>(request: R, defaultValue?: FieldsSelection<Registry, R>[]) => Observable<FieldsSelection<Registry, R>[]>})&({get: <R extends RegistryRequest>(request: R, defaultValue?: FieldsSelection<Registry, R>[]) => Observable<FieldsSelection<Registry, R>[]>}),
    vault: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VaultObservableChain & {get: <R extends VaultRequest>(request: R, defaultValue?: (FieldsSelection<Vault, R> | undefined)) => Observable<(FieldsSelection<Vault, R> | undefined)>}),
    vaults: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Vault_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Vault_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>[]) => Observable<FieldsSelection<Vault, R>[]>})&({get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>[]) => Observable<FieldsSelection<Vault, R>[]>}),
    vaultUpdate: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VaultUpdateObservableChain & {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: (FieldsSelection<VaultUpdate, R> | undefined)) => Observable<(FieldsSelection<VaultUpdate, R> | undefined)>}),
    vaultUpdates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultUpdate_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>[]) => Observable<FieldsSelection<VaultUpdate, R>[]>})&({get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>[]) => Observable<FieldsSelection<VaultUpdate, R>[]>}),
    account: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => AccountObservableChain & {get: <R extends AccountRequest>(request: R, defaultValue?: (FieldsSelection<Account, R> | undefined)) => Observable<(FieldsSelection<Account, R> | undefined)>}),
    accounts: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Account_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Account_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>[]) => Observable<FieldsSelection<Account, R>[]>})&({get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>[]) => Observable<FieldsSelection<Account, R>[]>}),
    deposit: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => DepositObservableChain & {get: <R extends DepositRequest>(request: R, defaultValue?: (FieldsSelection<Deposit, R> | undefined)) => Observable<(FieldsSelection<Deposit, R> | undefined)>}),
    deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>}),
    withdrawal: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => WithdrawalObservableChain & {get: <R extends WithdrawalRequest>(request: R, defaultValue?: (FieldsSelection<Withdrawal, R> | undefined)) => Observable<(FieldsSelection<Withdrawal, R> | undefined)>}),
    withdrawals: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Withdrawal_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Withdrawal_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Observable<FieldsSelection<Withdrawal, R>[]>})&({get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Observable<FieldsSelection<Withdrawal, R>[]>}),
    transfer: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TransferObservableChain & {get: <R extends TransferRequest>(request: R, defaultValue?: (FieldsSelection<Transfer, R> | undefined)) => Observable<(FieldsSelection<Transfer, R> | undefined)>}),
    transfers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Observable<FieldsSelection<Transfer, R>[]>})&({get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Observable<FieldsSelection<Transfer, R>[]>}),
    accountVaultPosition: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => AccountVaultPositionObservableChain & {get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: (FieldsSelection<AccountVaultPosition, R> | undefined)) => Observable<(FieldsSelection<AccountVaultPosition, R> | undefined)>}),
    accountVaultPositions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPosition_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>[]) => Observable<FieldsSelection<AccountVaultPosition, R>[]>})&({get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>[]) => Observable<FieldsSelection<AccountVaultPosition, R>[]>}),
    accountVaultPositionUpdate: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => AccountVaultPositionUpdateObservableChain & {get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: (FieldsSelection<AccountVaultPositionUpdate, R> | undefined)) => Observable<(FieldsSelection<AccountVaultPositionUpdate, R> | undefined)>}),
    accountVaultPositionUpdates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPositionUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPositionUpdate_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>[]) => Observable<FieldsSelection<AccountVaultPositionUpdate, R>[]>})&({get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>[]) => Observable<FieldsSelection<AccountVaultPositionUpdate, R>[]>}),
    strategy: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StrategyObservableChain & {get: <R extends StrategyRequest>(request: R, defaultValue?: (FieldsSelection<Strategy, R> | undefined)) => Observable<(FieldsSelection<Strategy, R> | undefined)>}),
    strategies: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Strategy_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Strategy_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>[]) => Observable<FieldsSelection<Strategy, R>[]>})&({get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>[]) => Observable<FieldsSelection<Strategy, R>[]>}),
    strategyReport: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StrategyReportObservableChain & {get: <R extends StrategyReportRequest>(request: R, defaultValue?: (FieldsSelection<StrategyReport, R> | undefined)) => Observable<(FieldsSelection<StrategyReport, R> | undefined)>}),
    strategyReports: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReport_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReport_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>[]) => Observable<FieldsSelection<StrategyReport, R>[]>})&({get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>[]) => Observable<FieldsSelection<StrategyReport, R>[]>}),
    strategyReportResult: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StrategyReportResultObservableChain & {get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: (FieldsSelection<StrategyReportResult, R> | undefined)) => Observable<(FieldsSelection<StrategyReportResult, R> | undefined)>}),
    strategyReportResults: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReportResult_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReportResult_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: FieldsSelection<StrategyReportResult, R>[]) => Observable<FieldsSelection<StrategyReportResult, R>[]>})&({get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: FieldsSelection<StrategyReportResult, R>[]) => Observable<FieldsSelection<StrategyReportResult, R>[]>}),
    harvest: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => HarvestObservableChain & {get: <R extends HarvestRequest>(request: R, defaultValue?: (FieldsSelection<Harvest, R> | undefined)) => Observable<(FieldsSelection<Harvest, R> | undefined)>}),
    harvests: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Harvest_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Harvest_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends HarvestRequest>(request: R, defaultValue?: FieldsSelection<Harvest, R>[]) => Observable<FieldsSelection<Harvest, R>[]>})&({get: <R extends HarvestRequest>(request: R, defaultValue?: FieldsSelection<Harvest, R>[]) => Observable<FieldsSelection<Harvest, R>[]>}),
    vaultDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VaultDayDataObservableChain & {get: <R extends VaultDayDataRequest>(request: R, defaultValue?: (FieldsSelection<VaultDayData, R> | undefined)) => Observable<(FieldsSelection<VaultDayData, R> | undefined)>}),
    vaultDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VaultDayDataRequest>(request: R, defaultValue?: FieldsSelection<VaultDayData, R>[]) => Observable<FieldsSelection<VaultDayData, R>[]>})&({get: <R extends VaultDayDataRequest>(request: R, defaultValue?: FieldsSelection<VaultDayData, R>[]) => Observable<FieldsSelection<VaultDayData, R>[]>}),
    yearn: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => YearnObservableChain & {get: <R extends YearnRequest>(request: R, defaultValue?: (FieldsSelection<Yearn, R> | undefined)) => Observable<(FieldsSelection<Yearn, R> | undefined)>}),
    yearns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Yearn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Yearn_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends YearnRequest>(request: R, defaultValue?: FieldsSelection<Yearn, R>[]) => Observable<FieldsSelection<Yearn, R>[]>})&({get: <R extends YearnRequest>(request: R, defaultValue?: FieldsSelection<Yearn, R>[]) => Observable<FieldsSelection<Yearn, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface RegistryPromiseChain{
    
/** Registry address */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Transaction timestamp */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Transaction/Block Block number */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    
/** Vaults registered in the registry. */
vaults: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Vault_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Vault_filter | null)}) => {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>[]) => Promise<FieldsSelection<Vault, R>[]>})&({get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>[]) => Promise<FieldsSelection<Vault, R>[]>})
}

export interface RegistryObservableChain{
    
/** Registry address */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Transaction timestamp */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Transaction/Block Block number */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    
/** Vaults registered in the registry. */
vaults: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Vault_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Vault_filter | null)}) => {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>[]) => Observable<FieldsSelection<Vault, R>[]>})&({get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>[]) => Observable<FieldsSelection<Vault, R>[]>})
}

export interface StrategyPromiseChain{
    
/** Strategy address */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Strategy name. */
name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Timestamp the vault information was most recently updated. */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Blocknumber the vault information was most recently updated. */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    
/** The Strategy address. */
address: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    
/** The health check contract address. */
healthCheck: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    
/** Defines whether the strategy will call the health check or not. */
doHealthCheck: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    
/** Defines whether this strategy is within the vault queue. */
inQueue: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    
/** The Vault */
vault: (VaultPromiseChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Promise<FieldsSelection<Vault, R>>}),
    
/** Strategy reference used to clone this strategy. */
clonedFrom: (StrategyPromiseChain & {get: <R extends StrategyRequest>(request: R, defaultValue?: (FieldsSelection<Strategy, R> | undefined)) => Promise<(FieldsSelection<Strategy, R> | undefined)>}),
    
/** Defines the maximum borrow amount. In strategies <v0.3.5 it is debtRatio. */
debtLimit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Lower limit on the increase of debt since last harvest. */
minDebtPerHarvest: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Upper limit on the increase of debt since last harvest. */
maxDebtPerHarvest: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** It is the current rate limit. It increases/decreases per block. */
rateLimit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Defines the strategist's fee (basis points). */
performanceFeeBps: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The latest report for this Strategy */
latestReport: (StrategyReportPromiseChain & {get: <R extends StrategyReportRequest>(request: R, defaultValue?: (FieldsSelection<StrategyReport, R> | undefined)) => Promise<(FieldsSelection<StrategyReport, R> | undefined)>}),
    
/** The reports created by this strategy. */
reports: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReport_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReport_filter | null)}) => {get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>[]) => Promise<FieldsSelection<StrategyReport, R>[]>})&({get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>[]) => Promise<FieldsSelection<StrategyReport, R>[]>}),
    
/** harvest() calls */
harvests: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Harvest_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Harvest_filter | null)}) => {get: <R extends HarvestRequest>(request: R, defaultValue?: FieldsSelection<Harvest, R>[]) => Promise<FieldsSelection<Harvest, R>[]>})&({get: <R extends HarvestRequest>(request: R, defaultValue?: FieldsSelection<Harvest, R>[]) => Promise<FieldsSelection<Harvest, R>[]>})
}

export interface StrategyObservableChain{
    
/** Strategy address */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Strategy name. */
name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Timestamp the vault information was most recently updated. */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Blocknumber the vault information was most recently updated. */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    
/** The Strategy address. */
address: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    
/** The health check contract address. */
healthCheck: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    
/** Defines whether the strategy will call the health check or not. */
doHealthCheck: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    
/** Defines whether this strategy is within the vault queue. */
inQueue: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    
/** The Vault */
vault: (VaultObservableChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Observable<FieldsSelection<Vault, R>>}),
    
/** Strategy reference used to clone this strategy. */
clonedFrom: (StrategyObservableChain & {get: <R extends StrategyRequest>(request: R, defaultValue?: (FieldsSelection<Strategy, R> | undefined)) => Observable<(FieldsSelection<Strategy, R> | undefined)>}),
    
/** Defines the maximum borrow amount. In strategies <v0.3.5 it is debtRatio. */
debtLimit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Lower limit on the increase of debt since last harvest. */
minDebtPerHarvest: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Upper limit on the increase of debt since last harvest. */
maxDebtPerHarvest: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** It is the current rate limit. It increases/decreases per block. */
rateLimit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Defines the strategist's fee (basis points). */
performanceFeeBps: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The latest report for this Strategy */
latestReport: (StrategyReportObservableChain & {get: <R extends StrategyReportRequest>(request: R, defaultValue?: (FieldsSelection<StrategyReport, R> | undefined)) => Observable<(FieldsSelection<StrategyReport, R> | undefined)>}),
    
/** The reports created by this strategy. */
reports: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReport_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReport_filter | null)}) => {get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>[]) => Observable<FieldsSelection<StrategyReport, R>[]>})&({get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>[]) => Observable<FieldsSelection<StrategyReport, R>[]>}),
    
/** harvest() calls */
harvests: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Harvest_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Harvest_filter | null)}) => {get: <R extends HarvestRequest>(request: R, defaultValue?: FieldsSelection<Harvest, R>[]) => Observable<FieldsSelection<Harvest, R>[]>})&({get: <R extends HarvestRequest>(request: R, defaultValue?: FieldsSelection<Harvest, R>[]) => Observable<FieldsSelection<Harvest, R>[]>})
}

export interface StrategyReportPromiseChain{
    
/** The Strategy Report ID. */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Timestamp the strategy report was most recently updated. */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Blocknumber the strategy report was most recently updated. */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    
/** The Strategy reference. */
strategy: (StrategyPromiseChain & {get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>) => Promise<FieldsSelection<Strategy, R>>}),
    
/** The reported gain amount for the strategy. */
gain: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The reported loss amount for the strategy. */
loss: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The reported total gain amount for the strategy. */
totalGain: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The reported total loss amount for the strategy. */
totalLoss: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The reported total debt amount for the strategy. */
totalDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The reported debt added amount for the strategy. */
debtAdded: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The reported debt limit amount for the strategy. */
debtLimit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The reported debt paid for the strategy. This field is 0 for v0.3.0 or v0.3.1. */
debtPaid: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The results created by this report. They are generated comparing the previous report and the current one. */
results: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReportResult_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReportResult_filter | null)}) => {get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: FieldsSelection<StrategyReportResult, R>[]) => Promise<FieldsSelection<StrategyReportResult, R>[]>})&({get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: FieldsSelection<StrategyReportResult, R>[]) => Promise<FieldsSelection<StrategyReportResult, R>[]>})
}

export interface StrategyReportObservableChain{
    
/** The Strategy Report ID. */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Timestamp the strategy report was most recently updated. */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Blocknumber the strategy report was most recently updated. */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    
/** The Strategy reference. */
strategy: (StrategyObservableChain & {get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>) => Observable<FieldsSelection<Strategy, R>>}),
    
/** The reported gain amount for the strategy. */
gain: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The reported loss amount for the strategy. */
loss: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The reported total gain amount for the strategy. */
totalGain: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The reported total loss amount for the strategy. */
totalLoss: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The reported total debt amount for the strategy. */
totalDebt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The reported debt added amount for the strategy. */
debtAdded: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The reported debt limit amount for the strategy. */
debtLimit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The reported debt paid for the strategy. This field is 0 for v0.3.0 or v0.3.1. */
debtPaid: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The results created by this report. They are generated comparing the previous report and the current one. */
results: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReportResult_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReportResult_filter | null)}) => {get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: FieldsSelection<StrategyReportResult, R>[]) => Observable<FieldsSelection<StrategyReportResult, R>[]>})&({get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: FieldsSelection<StrategyReportResult, R>[]) => Observable<FieldsSelection<StrategyReportResult, R>[]>})
}

export interface StrategyReportResultPromiseChain{
    
/** The Strategy Report Result ID. */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Timestamp the strategy report was most recently updated. */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Blocknumber the strategy report was most recently updated. */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The current strategy report. */
currentReport: (StrategyReportPromiseChain & {get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>) => Promise<FieldsSelection<StrategyReport, R>>}),
    
/** The previous strategy report. */
previousReport: (StrategyReportPromiseChain & {get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>) => Promise<FieldsSelection<StrategyReport, R>>}),
    startTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    endTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The duration (in days) from the previous report. */
duration: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    
/** Duration percentage rate. */
durationPr: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    
/** Annual Percentage Rate. */
apr: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    
/** Ethereum Transaction */
transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>})
}

export interface StrategyReportResultObservableChain{
    
/** The Strategy Report Result ID. */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Timestamp the strategy report was most recently updated. */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Blocknumber the strategy report was most recently updated. */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The current strategy report. */
currentReport: (StrategyReportObservableChain & {get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>) => Observable<FieldsSelection<StrategyReport, R>>}),
    
/** The previous strategy report. */
previousReport: (StrategyReportObservableChain & {get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>) => Observable<FieldsSelection<StrategyReport, R>>}),
    startTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    endTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The duration (in days) from the previous report. */
duration: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    
/** Duration percentage rate. */
durationPr: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    
/** Annual Percentage Rate. */
apr: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    
/** Ethereum Transaction */
transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>})
}

export interface SubscriptionPromiseChain{
    transaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)) => Promise<(FieldsSelection<Transaction, R> | undefined)>}),
    transactions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Promise<FieldsSelection<Transaction, R>[]>})&({get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Promise<FieldsSelection<Transaction, R>[]>}),
    token: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Promise<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Promise<FieldsSelection<Token, R>[]>})&({get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Promise<FieldsSelection<Token, R>[]>}),
    tokenFee: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenFeePromiseChain & {get: <R extends TokenFeeRequest>(request: R, defaultValue?: (FieldsSelection<TokenFee, R> | undefined)) => Promise<(FieldsSelection<TokenFee, R> | undefined)>}),
    tokenFees: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenFee_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenFee_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenFeeRequest>(request: R, defaultValue?: FieldsSelection<TokenFee, R>[]) => Promise<FieldsSelection<TokenFee, R>[]>})&({get: <R extends TokenFeeRequest>(request: R, defaultValue?: FieldsSelection<TokenFee, R>[]) => Promise<FieldsSelection<TokenFee, R>[]>}),
    registry: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RegistryPromiseChain & {get: <R extends RegistryRequest>(request: R, defaultValue?: (FieldsSelection<Registry, R> | undefined)) => Promise<(FieldsSelection<Registry, R> | undefined)>}),
    registries: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Registry_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Registry_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RegistryRequest>(request: R, defaultValue?: FieldsSelection<Registry, R>[]) => Promise<FieldsSelection<Registry, R>[]>})&({get: <R extends RegistryRequest>(request: R, defaultValue?: FieldsSelection<Registry, R>[]) => Promise<FieldsSelection<Registry, R>[]>}),
    vault: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VaultPromiseChain & {get: <R extends VaultRequest>(request: R, defaultValue?: (FieldsSelection<Vault, R> | undefined)) => Promise<(FieldsSelection<Vault, R> | undefined)>}),
    vaults: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Vault_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Vault_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>[]) => Promise<FieldsSelection<Vault, R>[]>})&({get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>[]) => Promise<FieldsSelection<Vault, R>[]>}),
    vaultUpdate: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VaultUpdatePromiseChain & {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: (FieldsSelection<VaultUpdate, R> | undefined)) => Promise<(FieldsSelection<VaultUpdate, R> | undefined)>}),
    vaultUpdates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultUpdate_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>[]) => Promise<FieldsSelection<VaultUpdate, R>[]>})&({get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>[]) => Promise<FieldsSelection<VaultUpdate, R>[]>}),
    account: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => AccountPromiseChain & {get: <R extends AccountRequest>(request: R, defaultValue?: (FieldsSelection<Account, R> | undefined)) => Promise<(FieldsSelection<Account, R> | undefined)>}),
    accounts: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Account_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Account_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>[]) => Promise<FieldsSelection<Account, R>[]>})&({get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>[]) => Promise<FieldsSelection<Account, R>[]>}),
    deposit: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => DepositPromiseChain & {get: <R extends DepositRequest>(request: R, defaultValue?: (FieldsSelection<Deposit, R> | undefined)) => Promise<(FieldsSelection<Deposit, R> | undefined)>}),
    deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>}),
    withdrawal: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => WithdrawalPromiseChain & {get: <R extends WithdrawalRequest>(request: R, defaultValue?: (FieldsSelection<Withdrawal, R> | undefined)) => Promise<(FieldsSelection<Withdrawal, R> | undefined)>}),
    withdrawals: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Withdrawal_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Withdrawal_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Promise<FieldsSelection<Withdrawal, R>[]>})&({get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Promise<FieldsSelection<Withdrawal, R>[]>}),
    transfer: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TransferPromiseChain & {get: <R extends TransferRequest>(request: R, defaultValue?: (FieldsSelection<Transfer, R> | undefined)) => Promise<(FieldsSelection<Transfer, R> | undefined)>}),
    transfers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Promise<FieldsSelection<Transfer, R>[]>})&({get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Promise<FieldsSelection<Transfer, R>[]>}),
    accountVaultPosition: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => AccountVaultPositionPromiseChain & {get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: (FieldsSelection<AccountVaultPosition, R> | undefined)) => Promise<(FieldsSelection<AccountVaultPosition, R> | undefined)>}),
    accountVaultPositions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPosition_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>[]) => Promise<FieldsSelection<AccountVaultPosition, R>[]>})&({get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>[]) => Promise<FieldsSelection<AccountVaultPosition, R>[]>}),
    accountVaultPositionUpdate: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => AccountVaultPositionUpdatePromiseChain & {get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: (FieldsSelection<AccountVaultPositionUpdate, R> | undefined)) => Promise<(FieldsSelection<AccountVaultPositionUpdate, R> | undefined)>}),
    accountVaultPositionUpdates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPositionUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPositionUpdate_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>[]) => Promise<FieldsSelection<AccountVaultPositionUpdate, R>[]>})&({get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>[]) => Promise<FieldsSelection<AccountVaultPositionUpdate, R>[]>}),
    strategy: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StrategyPromiseChain & {get: <R extends StrategyRequest>(request: R, defaultValue?: (FieldsSelection<Strategy, R> | undefined)) => Promise<(FieldsSelection<Strategy, R> | undefined)>}),
    strategies: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Strategy_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Strategy_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>[]) => Promise<FieldsSelection<Strategy, R>[]>})&({get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>[]) => Promise<FieldsSelection<Strategy, R>[]>}),
    strategyReport: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StrategyReportPromiseChain & {get: <R extends StrategyReportRequest>(request: R, defaultValue?: (FieldsSelection<StrategyReport, R> | undefined)) => Promise<(FieldsSelection<StrategyReport, R> | undefined)>}),
    strategyReports: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReport_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReport_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>[]) => Promise<FieldsSelection<StrategyReport, R>[]>})&({get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>[]) => Promise<FieldsSelection<StrategyReport, R>[]>}),
    strategyReportResult: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StrategyReportResultPromiseChain & {get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: (FieldsSelection<StrategyReportResult, R> | undefined)) => Promise<(FieldsSelection<StrategyReportResult, R> | undefined)>}),
    strategyReportResults: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReportResult_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReportResult_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: FieldsSelection<StrategyReportResult, R>[]) => Promise<FieldsSelection<StrategyReportResult, R>[]>})&({get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: FieldsSelection<StrategyReportResult, R>[]) => Promise<FieldsSelection<StrategyReportResult, R>[]>}),
    harvest: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => HarvestPromiseChain & {get: <R extends HarvestRequest>(request: R, defaultValue?: (FieldsSelection<Harvest, R> | undefined)) => Promise<(FieldsSelection<Harvest, R> | undefined)>}),
    harvests: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Harvest_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Harvest_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends HarvestRequest>(request: R, defaultValue?: FieldsSelection<Harvest, R>[]) => Promise<FieldsSelection<Harvest, R>[]>})&({get: <R extends HarvestRequest>(request: R, defaultValue?: FieldsSelection<Harvest, R>[]) => Promise<FieldsSelection<Harvest, R>[]>}),
    vaultDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VaultDayDataPromiseChain & {get: <R extends VaultDayDataRequest>(request: R, defaultValue?: (FieldsSelection<VaultDayData, R> | undefined)) => Promise<(FieldsSelection<VaultDayData, R> | undefined)>}),
    vaultDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VaultDayDataRequest>(request: R, defaultValue?: FieldsSelection<VaultDayData, R>[]) => Promise<FieldsSelection<VaultDayData, R>[]>})&({get: <R extends VaultDayDataRequest>(request: R, defaultValue?: FieldsSelection<VaultDayData, R>[]) => Promise<FieldsSelection<VaultDayData, R>[]>}),
    yearn: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => YearnPromiseChain & {get: <R extends YearnRequest>(request: R, defaultValue?: (FieldsSelection<Yearn, R> | undefined)) => Promise<(FieldsSelection<Yearn, R> | undefined)>}),
    yearns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Yearn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Yearn_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends YearnRequest>(request: R, defaultValue?: FieldsSelection<Yearn, R>[]) => Promise<FieldsSelection<Yearn, R>[]>})&({get: <R extends YearnRequest>(request: R, defaultValue?: FieldsSelection<Yearn, R>[]) => Promise<FieldsSelection<Yearn, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionObservableChain{
    transaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)) => Observable<(FieldsSelection<Transaction, R> | undefined)>}),
    transactions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Observable<FieldsSelection<Transaction, R>[]>})&({get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Observable<FieldsSelection<Transaction, R>[]>}),
    token: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Observable<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Observable<FieldsSelection<Token, R>[]>})&({get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Observable<FieldsSelection<Token, R>[]>}),
    tokenFee: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TokenFeeObservableChain & {get: <R extends TokenFeeRequest>(request: R, defaultValue?: (FieldsSelection<TokenFee, R> | undefined)) => Observable<(FieldsSelection<TokenFee, R> | undefined)>}),
    tokenFees: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenFee_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenFee_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TokenFeeRequest>(request: R, defaultValue?: FieldsSelection<TokenFee, R>[]) => Observable<FieldsSelection<TokenFee, R>[]>})&({get: <R extends TokenFeeRequest>(request: R, defaultValue?: FieldsSelection<TokenFee, R>[]) => Observable<FieldsSelection<TokenFee, R>[]>}),
    registry: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => RegistryObservableChain & {get: <R extends RegistryRequest>(request: R, defaultValue?: (FieldsSelection<Registry, R> | undefined)) => Observable<(FieldsSelection<Registry, R> | undefined)>}),
    registries: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Registry_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Registry_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends RegistryRequest>(request: R, defaultValue?: FieldsSelection<Registry, R>[]) => Observable<FieldsSelection<Registry, R>[]>})&({get: <R extends RegistryRequest>(request: R, defaultValue?: FieldsSelection<Registry, R>[]) => Observable<FieldsSelection<Registry, R>[]>}),
    vault: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VaultObservableChain & {get: <R extends VaultRequest>(request: R, defaultValue?: (FieldsSelection<Vault, R> | undefined)) => Observable<(FieldsSelection<Vault, R> | undefined)>}),
    vaults: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Vault_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Vault_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>[]) => Observable<FieldsSelection<Vault, R>[]>})&({get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>[]) => Observable<FieldsSelection<Vault, R>[]>}),
    vaultUpdate: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VaultUpdateObservableChain & {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: (FieldsSelection<VaultUpdate, R> | undefined)) => Observable<(FieldsSelection<VaultUpdate, R> | undefined)>}),
    vaultUpdates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultUpdate_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>[]) => Observable<FieldsSelection<VaultUpdate, R>[]>})&({get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>[]) => Observable<FieldsSelection<VaultUpdate, R>[]>}),
    account: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => AccountObservableChain & {get: <R extends AccountRequest>(request: R, defaultValue?: (FieldsSelection<Account, R> | undefined)) => Observable<(FieldsSelection<Account, R> | undefined)>}),
    accounts: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Account_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Account_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>[]) => Observable<FieldsSelection<Account, R>[]>})&({get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>[]) => Observable<FieldsSelection<Account, R>[]>}),
    deposit: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => DepositObservableChain & {get: <R extends DepositRequest>(request: R, defaultValue?: (FieldsSelection<Deposit, R> | undefined)) => Observable<(FieldsSelection<Deposit, R> | undefined)>}),
    deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>}),
    withdrawal: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => WithdrawalObservableChain & {get: <R extends WithdrawalRequest>(request: R, defaultValue?: (FieldsSelection<Withdrawal, R> | undefined)) => Observable<(FieldsSelection<Withdrawal, R> | undefined)>}),
    withdrawals: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Withdrawal_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Withdrawal_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Observable<FieldsSelection<Withdrawal, R>[]>})&({get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Observable<FieldsSelection<Withdrawal, R>[]>}),
    transfer: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => TransferObservableChain & {get: <R extends TransferRequest>(request: R, defaultValue?: (FieldsSelection<Transfer, R> | undefined)) => Observable<(FieldsSelection<Transfer, R> | undefined)>}),
    transfers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Observable<FieldsSelection<Transfer, R>[]>})&({get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Observable<FieldsSelection<Transfer, R>[]>}),
    accountVaultPosition: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => AccountVaultPositionObservableChain & {get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: (FieldsSelection<AccountVaultPosition, R> | undefined)) => Observable<(FieldsSelection<AccountVaultPosition, R> | undefined)>}),
    accountVaultPositions: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPosition_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPosition_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>[]) => Observable<FieldsSelection<AccountVaultPosition, R>[]>})&({get: <R extends AccountVaultPositionRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPosition, R>[]) => Observable<FieldsSelection<AccountVaultPosition, R>[]>}),
    accountVaultPositionUpdate: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => AccountVaultPositionUpdateObservableChain & {get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: (FieldsSelection<AccountVaultPositionUpdate, R> | undefined)) => Observable<(FieldsSelection<AccountVaultPositionUpdate, R> | undefined)>}),
    accountVaultPositionUpdates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (AccountVaultPositionUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (AccountVaultPositionUpdate_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>[]) => Observable<FieldsSelection<AccountVaultPositionUpdate, R>[]>})&({get: <R extends AccountVaultPositionUpdateRequest>(request: R, defaultValue?: FieldsSelection<AccountVaultPositionUpdate, R>[]) => Observable<FieldsSelection<AccountVaultPositionUpdate, R>[]>}),
    strategy: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StrategyObservableChain & {get: <R extends StrategyRequest>(request: R, defaultValue?: (FieldsSelection<Strategy, R> | undefined)) => Observable<(FieldsSelection<Strategy, R> | undefined)>}),
    strategies: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Strategy_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Strategy_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>[]) => Observable<FieldsSelection<Strategy, R>[]>})&({get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>[]) => Observable<FieldsSelection<Strategy, R>[]>}),
    strategyReport: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StrategyReportObservableChain & {get: <R extends StrategyReportRequest>(request: R, defaultValue?: (FieldsSelection<StrategyReport, R> | undefined)) => Observable<(FieldsSelection<StrategyReport, R> | undefined)>}),
    strategyReports: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReport_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReport_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>[]) => Observable<FieldsSelection<StrategyReport, R>[]>})&({get: <R extends StrategyReportRequest>(request: R, defaultValue?: FieldsSelection<StrategyReport, R>[]) => Observable<FieldsSelection<StrategyReport, R>[]>}),
    strategyReportResult: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => StrategyReportResultObservableChain & {get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: (FieldsSelection<StrategyReportResult, R> | undefined)) => Observable<(FieldsSelection<StrategyReportResult, R> | undefined)>}),
    strategyReportResults: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (StrategyReportResult_orderBy | null),orderDirection?: (OrderDirection | null),where?: (StrategyReportResult_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: FieldsSelection<StrategyReportResult, R>[]) => Observable<FieldsSelection<StrategyReportResult, R>[]>})&({get: <R extends StrategyReportResultRequest>(request: R, defaultValue?: FieldsSelection<StrategyReportResult, R>[]) => Observable<FieldsSelection<StrategyReportResult, R>[]>}),
    harvest: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => HarvestObservableChain & {get: <R extends HarvestRequest>(request: R, defaultValue?: (FieldsSelection<Harvest, R> | undefined)) => Observable<(FieldsSelection<Harvest, R> | undefined)>}),
    harvests: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Harvest_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Harvest_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends HarvestRequest>(request: R, defaultValue?: FieldsSelection<Harvest, R>[]) => Observable<FieldsSelection<Harvest, R>[]>})&({get: <R extends HarvestRequest>(request: R, defaultValue?: FieldsSelection<Harvest, R>[]) => Observable<FieldsSelection<Harvest, R>[]>}),
    vaultDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => VaultDayDataObservableChain & {get: <R extends VaultDayDataRequest>(request: R, defaultValue?: (FieldsSelection<VaultDayData, R> | undefined)) => Observable<(FieldsSelection<VaultDayData, R> | undefined)>}),
    vaultDayDatas: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultDayData_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends VaultDayDataRequest>(request: R, defaultValue?: FieldsSelection<VaultDayData, R>[]) => Observable<FieldsSelection<VaultDayData, R>[]>})&({get: <R extends VaultDayDataRequest>(request: R, defaultValue?: FieldsSelection<VaultDayData, R>[]) => Observable<FieldsSelection<VaultDayData, R>[]>}),
    yearn: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => YearnObservableChain & {get: <R extends YearnRequest>(request: R, defaultValue?: (FieldsSelection<Yearn, R> | undefined)) => Observable<(FieldsSelection<Yearn, R> | undefined)>}),
    yearns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Yearn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Yearn_filter | null),
/** The block at which the query should be executed. Can either be an `{ number: Int }` containing the block number or a `{ hash: Bytes }` value containing a block hash. Defaults to the latest block when omitted. */
block?: (Block_height | null)}) => {get: <R extends YearnRequest>(request: R, defaultValue?: FieldsSelection<Yearn, R>[]) => Observable<FieldsSelection<Yearn, R>[]>})&({get: <R extends YearnRequest>(request: R, defaultValue?: FieldsSelection<Yearn, R>[]) => Observable<FieldsSelection<Yearn, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface TokenPromiseChain{
    
/** Token address */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Number of decimals for this Token */
decimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** Name of the Token */
name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Symbol of the Token */
symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface TokenObservableChain{
    
/** Token address */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Number of decimals for this Token */
decimals: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** Name of the Token */
name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Symbol of the Token */
symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface TokenFeePromiseChain{
    
/** Token address */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Fees paid using this token to the treasury */
treasuryFees: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Fees paid using this token to strategies */
strategyFees: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Fees paid using this token to strategies and the treasury */
totalFees: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    token: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>})
}

export interface TokenFeeObservableChain{
    
/** Token address */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Fees paid using this token to the treasury */
treasuryFees: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Fees paid using this token to strategies */
strategyFees: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Fees paid using this token to strategies and the treasury */
totalFees: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    token: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>})
}

export interface TransactionPromiseChain{
    
/** Transaction hash + Log Index */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Log index related to the event. A Transaction might contain multiple events. */
logIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The event name / call stacktrace */
event: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** The transaction sender */
from: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    
/** Gas price used in the transaction */
gasPrice: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Gas sent used in the transaction */
gasSent: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Transaction hash */
hash: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    
/** The transaction index */
index: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Address that received the transaction */
to: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    
/** Ether value sent in the transaction */
value: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Timestamp when the transaction was executed */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Gas limit used in the transaction */
gasLimit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Block number */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface TransactionObservableChain{
    
/** Transaction hash + Log Index */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Log index related to the event. A Transaction might contain multiple events. */
logIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The event name / call stacktrace */
event: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** The transaction sender */
from: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    
/** Gas price used in the transaction */
gasPrice: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Gas sent used in the transaction */
gasSent: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Transaction hash */
hash: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    
/** The transaction index */
index: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Address that received the transaction */
to: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    
/** Ether value sent in the transaction */
value: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Timestamp when the transaction was executed */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Gas limit used in the transaction */
gasLimit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Block number */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface TransferPromiseChain{
    
/** Transaction-Log */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Vault */
vault: (VaultPromiseChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Promise<FieldsSelection<Vault, R>>}),
    
/** Sender */
from: (AccountPromiseChain & {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>) => Promise<FieldsSelection<Account, R>>}),
    
/** Receiver */
to: (AccountPromiseChain & {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>) => Promise<FieldsSelection<Account, R>>}),
    
/** Vault Share Token */
shareToken: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    
/** Number of Vault Shares transferred */
shareAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Vault Token */
token: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    
/** Number of Tokens redeemable for shares transferred */
tokenAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Token Amount in USDC, 0 if the transaction was before the oracle was deployed at 12198044 */
tokenAmountUsdc: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Timestamp of Transfer */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Block number of Transfer */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    
/** Whether the transfer was used to pay a fee to the vault's rewards address */
isFeeToTreasury: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    
/** Whether the transfer was used to pay a fee to a strategy */
isFeeToStrategy: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface TransferObservableChain{
    
/** Transaction-Log */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Vault */
vault: (VaultObservableChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Observable<FieldsSelection<Vault, R>>}),
    
/** Sender */
from: (AccountObservableChain & {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>) => Observable<FieldsSelection<Account, R>>}),
    
/** Receiver */
to: (AccountObservableChain & {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>) => Observable<FieldsSelection<Account, R>>}),
    
/** Vault Share Token */
shareToken: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    
/** Number of Vault Shares transferred */
shareAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Vault Token */
token: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    
/** Number of Tokens redeemable for shares transferred */
tokenAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Token Amount in USDC, 0 if the transaction was before the oracle was deployed at 12198044 */
tokenAmountUsdc: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Timestamp of Transfer */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Block number of Transfer */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    
/** Whether the transfer was used to pay a fee to the vault's rewards address */
isFeeToTreasury: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    
/** Whether the transfer was used to pay a fee to a strategy */
isFeeToStrategy: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface VaultPromiseChain{
    
/** Vault address */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Ethereum Transaction */
transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    
/** The registry address */
registry: (RegistryPromiseChain & {get: <R extends RegistryRequest>(request: R, defaultValue?: FieldsSelection<Registry, R>) => Promise<FieldsSelection<Registry, R>>}),
    
/** Token this Vault will accrue */
token: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    
/** Token representing Shares in the Vault */
shareToken: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    
/** Vault classification */
classification: ({get: (request?: boolean|number, defaultValue?: VaultClassification) => Promise<VaultClassification>}),
    
/** Latest Vault Update */
latestUpdate: (VaultUpdatePromiseChain & {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: (FieldsSelection<VaultUpdate, R> | undefined)) => Promise<(FieldsSelection<VaultUpdate, R> | undefined)>}),
    vaultDayData: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultDayData_filter | null)}) => {get: <R extends VaultDayDataRequest>(request: R, defaultValue?: FieldsSelection<VaultDayData, R>[]) => Promise<FieldsSelection<VaultDayData, R>[]>})&({get: <R extends VaultDayDataRequest>(request: R, defaultValue?: FieldsSelection<VaultDayData, R>[]) => Promise<FieldsSelection<VaultDayData, R>[]>}),
    
/** All Vault Updates */
historicalUpdates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultUpdate_filter | null)}) => {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>[]) => Promise<FieldsSelection<VaultUpdate, R>[]>})&({get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>[]) => Promise<FieldsSelection<VaultUpdate, R>[]>}),
    
/** Strategies for this Vault */
strategies: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Strategy_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Strategy_filter | null)}) => {get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>[]) => Promise<FieldsSelection<Strategy, R>[]>})&({get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>[]) => Promise<FieldsSelection<Strategy, R>[]>}),
    
/** Token deposits into the Vault */
deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Promise<FieldsSelection<Deposit, R>[]>}),
    
/** Token withdrawals from the Vault */
withdrawals: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Withdrawal_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Withdrawal_filter | null)}) => {get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Promise<FieldsSelection<Withdrawal, R>[]>})&({get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Promise<FieldsSelection<Withdrawal, R>[]>}),
    
/** Transfers of Vault Shares */
transfers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null)}) => {get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Promise<FieldsSelection<Transfer, R>[]>})&({get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Promise<FieldsSelection<Transfer, R>[]>}),
    
/** Tags attached to the Vault */
tags: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Promise<Scalars['String'][]>}),
    
/** Balance of Tokens in the Vault and its Strategies */
balanceTokens: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Current idle Token balance */
balanceTokensIdle: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Balance of Tokens invested into Strategies */
balanceTokensInvested: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Deposit limit for Tokens in the Vault */
tokensDepositLimit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Current supply of Shares */
sharesSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Management fee in basis points */
managementFeeBps: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** Performance fee in basis points */
performanceFeeBps: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** The address where management fees are paid to */
rewards: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    
/** This technical field defines whether this vault is a custom item (created by a custom handler) or not (created by the registry dynamically). */
isTemplateListening: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    
/** Creation timestamp */
activation: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The API version. */
apiVersion: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface VaultObservableChain{
    
/** Vault address */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Ethereum Transaction */
transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    
/** The registry address */
registry: (RegistryObservableChain & {get: <R extends RegistryRequest>(request: R, defaultValue?: FieldsSelection<Registry, R>) => Observable<FieldsSelection<Registry, R>>}),
    
/** Token this Vault will accrue */
token: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    
/** Token representing Shares in the Vault */
shareToken: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    
/** Vault classification */
classification: ({get: (request?: boolean|number, defaultValue?: VaultClassification) => Observable<VaultClassification>}),
    
/** Latest Vault Update */
latestUpdate: (VaultUpdateObservableChain & {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: (FieldsSelection<VaultUpdate, R> | undefined)) => Observable<(FieldsSelection<VaultUpdate, R> | undefined)>}),
    vaultDayData: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultDayData_filter | null)}) => {get: <R extends VaultDayDataRequest>(request: R, defaultValue?: FieldsSelection<VaultDayData, R>[]) => Observable<FieldsSelection<VaultDayData, R>[]>})&({get: <R extends VaultDayDataRequest>(request: R, defaultValue?: FieldsSelection<VaultDayData, R>[]) => Observable<FieldsSelection<VaultDayData, R>[]>}),
    
/** All Vault Updates */
historicalUpdates: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (VaultUpdate_orderBy | null),orderDirection?: (OrderDirection | null),where?: (VaultUpdate_filter | null)}) => {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>[]) => Observable<FieldsSelection<VaultUpdate, R>[]>})&({get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>[]) => Observable<FieldsSelection<VaultUpdate, R>[]>}),
    
/** Strategies for this Vault */
strategies: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Strategy_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Strategy_filter | null)}) => {get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>[]) => Observable<FieldsSelection<Strategy, R>[]>})&({get: <R extends StrategyRequest>(request: R, defaultValue?: FieldsSelection<Strategy, R>[]) => Observable<FieldsSelection<Strategy, R>[]>}),
    
/** Token deposits into the Vault */
deposits: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Deposit_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Deposit_filter | null)}) => {get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>})&({get: <R extends DepositRequest>(request: R, defaultValue?: FieldsSelection<Deposit, R>[]) => Observable<FieldsSelection<Deposit, R>[]>}),
    
/** Token withdrawals from the Vault */
withdrawals: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Withdrawal_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Withdrawal_filter | null)}) => {get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Observable<FieldsSelection<Withdrawal, R>[]>})&({get: <R extends WithdrawalRequest>(request: R, defaultValue?: FieldsSelection<Withdrawal, R>[]) => Observable<FieldsSelection<Withdrawal, R>[]>}),
    
/** Transfers of Vault Shares */
transfers: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transfer_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transfer_filter | null)}) => {get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Observable<FieldsSelection<Transfer, R>[]>})&({get: <R extends TransferRequest>(request: R, defaultValue?: FieldsSelection<Transfer, R>[]) => Observable<FieldsSelection<Transfer, R>[]>}),
    
/** Tags attached to the Vault */
tags: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Observable<Scalars['String'][]>}),
    
/** Balance of Tokens in the Vault and its Strategies */
balanceTokens: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Current idle Token balance */
balanceTokensIdle: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Balance of Tokens invested into Strategies */
balanceTokensInvested: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Deposit limit for Tokens in the Vault */
tokensDepositLimit: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Current supply of Shares */
sharesSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Management fee in basis points */
managementFeeBps: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** Performance fee in basis points */
performanceFeeBps: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** The address where management fees are paid to */
rewards: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    
/** This technical field defines whether this vault is a custom item (created by a custom handler) or not (created by the registry dynamically). */
isTemplateListening: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    
/** Creation timestamp */
activation: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The API version. */
apiVersion: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface VaultDayDataPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** time in UTC */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    vault: (VaultPromiseChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Promise<FieldsSelection<Vault, R>>}),
    pricePerShare: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The amount of tokens deposited to this vault this day */
deposited: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The amount of tokens withdrawn from this vault this day */
withdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The total earnings generated for this vault up to and including this day */
totalReturnsGenerated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The total earnings generated in USDC for this vault up to and including this day */
totalReturnsGeneratedUSDC: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The earnings generated for this vault this day */
dayReturnsGenerated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The earnings generated in USDC for this vault this day */
dayReturnsGeneratedUSDC: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The price of one of the vault's underlying token */
tokenPriceUSDC: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface VaultDayDataObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** time in UTC */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    vault: (VaultObservableChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Observable<FieldsSelection<Vault, R>>}),
    pricePerShare: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The amount of tokens deposited to this vault this day */
deposited: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The amount of tokens withdrawn from this vault this day */
withdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The total earnings generated for this vault up to and including this day */
totalReturnsGenerated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The total earnings generated in USDC for this vault up to and including this day */
totalReturnsGeneratedUSDC: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The earnings generated for this vault this day */
dayReturnsGenerated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The earnings generated in USDC for this vault this day */
dayReturnsGeneratedUSDC: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The price of one of the vault's underlying token */
tokenPriceUSDC: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface VaultUpdatePromiseChain{
    
/** Vault-Transaction-Log */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Timestamp of update */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Block number of update */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    
/** Vault this update is for */
vault: (VaultPromiseChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Promise<FieldsSelection<Vault, R>>}),
    
/** Sum of tokens deposited */
tokensDeposited: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Sum of tokens withdrawn */
tokensWithdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Sum of Shares minted over all time */
sharesMinted: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Sum of Shares burnt over all time */
sharesBurnt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The current balance position defined as: (vault.totalAssets() * (vault.pricePerShare() / 10**vault.decimals())). */
balancePosition: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Current price per full share */
pricePerShare: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Returns generated in Tokens */
returnsGenerated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Total fees in Shares */
totalFees: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Management fees in Shares */
managementFees: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Performance fees in Shares */
performanceFees: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** The address where management fees are paid to */
rewards: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>})
}

export interface VaultUpdateObservableChain{
    
/** Vault-Transaction-Log */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Timestamp of update */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Block number of update */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    
/** Vault this update is for */
vault: (VaultObservableChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Observable<FieldsSelection<Vault, R>>}),
    
/** Sum of tokens deposited */
tokensDeposited: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Sum of tokens withdrawn */
tokensWithdrawn: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Sum of Shares minted over all time */
sharesMinted: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Sum of Shares burnt over all time */
sharesBurnt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The current balance position defined as: (vault.totalAssets() * (vault.pricePerShare() / 10**vault.decimals())). */
balancePosition: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Current price per full share */
pricePerShare: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Returns generated in Tokens */
returnsGenerated: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Total fees in Shares */
totalFees: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Management fees in Shares */
managementFees: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Performance fees in Shares */
performanceFees: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** The address where management fees are paid to */
rewards: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>})
}

export interface WithdrawalPromiseChain{
    
/** Transaction-Log */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Timestamp of update */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Block number of update */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Account making withdraw */
account: (AccountPromiseChain & {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>) => Promise<FieldsSelection<Account, R>>}),
    
/** Vault withdrawn from */
vault: (VaultPromiseChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Promise<FieldsSelection<Vault, R>>}),
    
/** Number of Tokens withdrawn from Vault */
tokenAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Number of Vault Shares burnt */
sharesBurnt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    
/** Vault Update */
vaultUpdate: (VaultUpdatePromiseChain & {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>) => Promise<FieldsSelection<VaultUpdate, R>>})
}

export interface WithdrawalObservableChain{
    
/** Transaction-Log */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Timestamp of update */
timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Block number of update */
blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Account making withdraw */
account: (AccountObservableChain & {get: <R extends AccountRequest>(request: R, defaultValue?: FieldsSelection<Account, R>) => Observable<FieldsSelection<Account, R>>}),
    
/** Vault withdrawn from */
vault: (VaultObservableChain & {get: <R extends VaultRequest>(request: R, defaultValue?: FieldsSelection<Vault, R>) => Observable<FieldsSelection<Vault, R>>}),
    
/** Number of Tokens withdrawn from Vault */
tokenAmount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Number of Vault Shares burnt */
sharesBurnt: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Ethereum Transaction */
transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    
/** Vault Update */
vaultUpdate: (VaultUpdateObservableChain & {get: <R extends VaultUpdateRequest>(request: R, defaultValue?: FieldsSelection<VaultUpdate, R>) => Observable<FieldsSelection<VaultUpdate, R>>})
}

export interface YearnPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    
/** Only valid after the oracle was deployed at 12242339 */
treasuryFeesUsdc: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Only valid after the oracle was deployed at 12242339 */
strategyFeesUsdc: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    
/** Only valid after the oracle was deployed at 12242339 */
totalFeesUsdc: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface YearnObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    
/** Only valid after the oracle was deployed at 12242339 */
treasuryFeesUsdc: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Only valid after the oracle was deployed at 12242339 */
strategyFeesUsdc: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    
/** Only valid after the oracle was deployed at 12242339 */
totalFeesUsdc: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
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