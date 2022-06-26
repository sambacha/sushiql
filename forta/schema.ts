import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Date: any,
    Time: any,
    DateTime: any,
    Timestamp: any,
    UtcOffset: any,
    Duration: any,
    ISO8601Duration: any,
    LocalDate: any,
    LocalTime: any,
    LocalEndTime: any,
    EmailAddress: any,
    NegativeFloat: any,
    NegativeInt: any,
    NonEmptyString: any,
    NonNegativeFloat: any,
    NonNegativeInt: any,
    NonPositiveFloat: any,
    NonPositiveInt: any,
    PhoneNumber: any,
    PositiveFloat: any,
    PositiveInt: any,
    PostalCode: any,
    UnsignedFloat: any,
    UnsignedInt: any,
    URL: any,
    BigInt: any,
    Long: any,
    Byte: any,
    UUID: any,
    GUID: any,
    Hexadecimal: any,
    HexColorCode: any,
    HSL: any,
    HSLA: any,
    IPv4: any,
    IPv6: any,
    ISBN: any,
    JWT: any,
    Latitude: any,
    Longitude: any,
    MAC: any,
    Port: any,
    RGB: any,
    RGBA: any,
    SafeInt: any,
    USCurrency: any,
    Currency: any,
    JSON: any,
    JSONObject: any,
    IBAN: any,
    ObjectID: any,
    Void: any,
    DID: any,
    String: string,
    Int: number,
    Boolean: boolean,
}


/** Alert information */
export interface Alert {
    /**
     * Unique string to identify this class of finding,
     * primarily used to group similar findings for the end user
     */
    alertId?: Scalars['String']
    /** List of addresses involved in the alert */
    addresses?: (Scalars['String'] | undefined)[]
    /** List of contracts related to the alert */
    contracts?: (Contract | undefined)[]
    /** Timestamp when the alert was published */
    createdAt?: Scalars['String']
    /** Text description of the alert */
    description?: Scalars['String']
    /** Alert hash identifier */
    hash?: Scalars['String']
    /** Extra alert information */
    metadata?: Scalars['JSONObject']
    /** Alert name */
    name?: Scalars['String']
    /** List of Web3 projects related to the alert */
    projects?: (Project | undefined)[]
    /** Name of protocol being reported on */
    protocol?: Scalars['String']
    /** Number of scanners that found the alert */
    scanNodeCount?: Scalars['Int']
    /**
     * Impact level of finding
     * 
     * CRITICAL - Exploitable vulnerabilities, massive impact on users/funds
     * 
     * HIGH - Exploitable under more specific conditions, significant impact on users/funds
     * 
     * MEDIUM - Notable unexpected behaviours, moderate to low impact on users/funds
     * 
     * LOW - Minor oversights, negligible impact on users/funds
     * 
     * INFO - Miscellaneous behaviours worth describing
     */
    severity?: Scalars['String']
    /** Source where the alert was detected */
    source?: AlertSource
    /**
     * Type of finding
     * 
     * UNKNOWN_TYPE
     * 
     * EXPLOIT
     * 
     * SUSPICIOUS
     * 
     * DEGRADED
     * 
     * INFO
     */
    findingType?: Scalars['String']
    __typename: 'Alert'
}

export interface AlertEndCursor {
    blockNumber: Scalars['NonNegativeInt']
    alertId: Scalars['String']
    __typename: 'AlertEndCursor'
}

export interface AlertPageInfo {
    endCursor: AlertEndCursor
    hasNextPage: Scalars['Boolean']
    __typename: 'AlertPageInfo'
}

export interface AlertsResponse {
    alerts?: (Alert | undefined)[]
    pageInfo?: AlertPageInfo
    __typename: 'AlertsResponse'
}


/** Source where the threat was detected */
export interface AlertSource {
    /** Transaction where the threat was detected */
    transactionHash?: Scalars['String']
    /** Bot that triggered the alert */
    bot?: Bot
    /** Block where the threat was detected */
    block?: Block
    __typename: 'AlertSource'
}


/** Block information */
export interface Block {
    /** Block number */
    number?: Scalars['NonNegativeInt']
    /** Block hash */
    hash?: Scalars['String']
    /** Block's timestamp */
    timestamp?: Scalars['String']
    /** Block's chain id */
    chainId?: Scalars['NonNegativeInt']
    __typename: 'Block'
}

export type Sort = 'asc' | 'desc'

export interface Query {
    /** Fetches alerts */
    alerts?: AlertsResponse
    /**
     * Fetches all existing web3 projects recorded in github repo: 
     * https://github.com/ethereum-lists/contracts/tree/main/projects
     */
    projects?: ProjectsResponse
    /** Fetches a web3 project given its project ID */
    project?: Project
    __typename: 'Query'
}


/** Bot information */
export interface Bot {
    /** Bot id */
    id?: Scalars['String']
    /** Bot manifest reference */
    reference?: Scalars['String']
    /** Bot docker image url */
    image?: Scalars['String']
    __typename: 'Bot'
}


/** Smart Contract Information */
export interface Contract {
    /** EIP55 checksummed deployment address */
    address: Scalars['String']
    /** User-friendly name of the contract */
    name: Scalars['String']
    /** Related web3 project */
    projectId: Scalars['String']
    __typename: 'Contract'
}


/** Project Contact Information */
export interface Contacts {
    /** General contact email */
    generalEmailAddress?: Scalars['EmailAddress']
    /** Security contact email */
    securityEmailAddress?: Scalars['EmailAddress']
    __typename: 'Contacts'
}


/** Web3 Project Information */
export interface Project {
    /** List of contact info */
    contacts?: Contacts
    /** User-friendly name of the project */
    name: Scalars['String']
    /** Project identifier */
    id: Scalars['String']
    social?: Social
    token?: Token
    /** Main website of the project */
    website?: Scalars['String']
    __typename: 'Project'
}

export interface ProjectEdge {
    cursor?: Scalars['String']
    node?: Project
    __typename: 'ProjectEdge'
}

export interface ProjectPageInfo {
    endCursor?: Scalars['String']
    hasNextPage?: Scalars['Boolean']
    __typename: 'ProjectPageInfo'
}

export interface ProjectsResponse {
    edges?: (ProjectEdge | undefined)[]
    pageInfo?: ProjectPageInfo
    __typename: 'ProjectsResponse'
}


/** Social Media Links */
export interface Social {
    /** Path to the coingecko identifier */
    coingecko?: Scalars['String']
    /** Identifier in the everest.link registry */
    everest?: Scalars['String']
    /** Github organization slug */
    github?: Scalars['String']
    /** Twitter account name */
    twitter?: Scalars['String']
    __typename: 'Social'
}


/** Project Token Information */
export interface Token {
    /** Address where the project token is deployed */
    address: Scalars['String']
    /** EIP155 identifier of the chain where the project token is deployed */
    chainId: Scalars['Int']
    /** Decimals of the token contract */
    decimals?: Scalars['Int']
    /** Name of the token */
    name?: Scalars['String']
    /** Symbol of the token */
    symbol?: Scalars['String']
    __typename: 'Token'
}


/** Alert information */
export interface AlertRequest{
    /**
     * Unique string to identify this class of finding,
     * primarily used to group similar findings for the end user
     */
    alertId?: boolean | number
    /** List of addresses involved in the alert */
    addresses?: boolean | number
    /** List of contracts related to the alert */
    contracts?: ContractRequest
    /** Timestamp when the alert was published */
    createdAt?: boolean | number
    /** Text description of the alert */
    description?: boolean | number
    /** Alert hash identifier */
    hash?: boolean | number
    /** Extra alert information */
    metadata?: boolean | number
    /** Alert name */
    name?: boolean | number
    /** List of Web3 projects related to the alert */
    projects?: ProjectRequest
    /** Name of protocol being reported on */
    protocol?: boolean | number
    /** Number of scanners that found the alert */
    scanNodeCount?: boolean | number
    /**
     * Impact level of finding
     * 
     * CRITICAL - Exploitable vulnerabilities, massive impact on users/funds
     * 
     * HIGH - Exploitable under more specific conditions, significant impact on users/funds
     * 
     * MEDIUM - Notable unexpected behaviours, moderate to low impact on users/funds
     * 
     * LOW - Minor oversights, negligible impact on users/funds
     * 
     * INFO - Miscellaneous behaviours worth describing
     */
    severity?: boolean | number
    /** Source where the alert was detected */
    source?: AlertSourceRequest
    /**
     * Type of finding
     * 
     * UNKNOWN_TYPE
     * 
     * EXPLOIT
     * 
     * SUSPICIOUS
     * 
     * DEGRADED
     * 
     * INFO
     */
    findingType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Search after specified block number and alertId */
export interface AlertEndCursorInput {blockNumber: Scalars['NonNegativeInt'],alertId: Scalars['String']}

export interface AlertEndCursorRequest{
    blockNumber?: boolean | number
    alertId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AlertPageInfoRequest{
    endCursor?: AlertEndCursorRequest
    hasNextPage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AlertsResponseRequest{
    alerts?: AlertRequest
    pageInfo?: AlertPageInfoRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Source where the threat was detected */
export interface AlertSourceRequest{
    /** Transaction where the threat was detected */
    transactionHash?: boolean | number
    /** Bot that triggered the alert */
    bot?: BotRequest
    /** Block where the threat was detected */
    block?: BlockRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Block information */
export interface BlockRequest{
    /** Block number */
    number?: boolean | number
    /** Block hash */
    hash?: boolean | number
    /** Block's timestamp */
    timestamp?: boolean | number
    /** Block's chain id */
    chainId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Block range */
export interface BlockRange {startBlockNumber: Scalars['NonNegativeInt'],endBlockNumber: Scalars['NonNegativeInt']}


/**
 * Date range
 * Date format: YYYY-MM-DD
 */
export interface DateRange {startDate: Scalars['LocalDate'],endDate: Scalars['LocalDate']}


/**
 * Timestamp range
 * Timestamp format: number of milliseconds from start of UNIX epoch
 */
export interface TimestampRange {startTimestamp: Scalars['Timestamp'],endTimestamp: Scalars['Timestamp']}


/** Filter by number of scan nodes confirming the alert. */
export interface scanNodeFilters {gte?: (Scalars['NonNegativeInt'] | null),lte?: (Scalars['NonNegativeInt'] | null)}


/** Alert list input */
export interface AlertsInput {
/**
 * Indicate a list of addresses.
 * Alerts returned will have those addresses involved.
 */
addresses?: ((Scalars['String'] | null)[] | null),
/** Search results after the specified cursor */
after?: (AlertEndCursorInput | null),
/** Filter alerts by alert-id. */
alertId?: (Scalars['String'] | null),
/** Filter alerts by alert name. */
alertName?: (Scalars['String'] | null),
/**
 * Block Date range
 * Alerts returned will be between the specified start and end block timestamp dates when the threats were detected.
 */
blockDateRange?: (DateRange | null),
/**
 * Block number range
 * Alerts for the block number range will be returned.
 */
blockNumberRange?: (BlockRange | null),
/**
 * Block Timestamp range
 * Alerts returned will be between the specified start and end block timestamp when the threats were detected.
 */
blockTimestampRange?: (TimestampRange | null),
/**
 * Indicate sorting order by block number,
 * 'desc' or 'asc'.
 * Default is 'desc'.
 */
blockSortDirection?: (Sort | null),
/**
 * Indicate a list of bot hashes.
 * Alerts returned will only be from any of those bots.
 */
bots?: ((Scalars['String'] | null)[] | null),
/**
 * Indicate a chain Id: EIP155 identifier of the chain
 * Alerts returned will only be from the specific chain Id
 * Default is 1 = Ethereum Mainnet.
 */
chainId?: (Scalars['NonNegativeInt'] | null),
/**
 * Indicate number of milliseconds
 * Alerts returned will be alerts created since the number of milliseconds indicated ago.
 */
createdSince?: (Scalars['NonNegativeInt'] | null),
/** Indicate max number of results. */
first?: (Scalars['NonNegativeInt'] | null),
/**
 * Indicate a project Id.
 * Alerts returned will only be from that project.
 */
projectId?: (Scalars['String'] | null),
/** Filter alerts by number of scan nodes confirming the alert. */
scanNodeConfirmations?: (scanNodeFilters | null),
/** Filter alerts by severity levels. */
severities?: ((Scalars['String'] | null)[] | null),
/**
 * Indicate a transaction hash
 * Alerts returned will only be from that transaction.
 */
transactionHash?: (Scalars['String'] | null)}

export interface QueryRequest{
    /** Fetches alerts */
    alerts?: [{input?: (AlertsInput | null)},AlertsResponseRequest] | AlertsResponseRequest
    /**
     * Fetches all existing web3 projects recorded in github repo: 
     * https://github.com/ethereum-lists/contracts/tree/main/projects
     */
    projects?: [{input?: (ProjectsInput | null)},ProjectsResponseRequest] | ProjectsResponseRequest
    /** Fetches a web3 project given its project ID */
    project?: [{id: Scalars['String']},ProjectRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Bot information */
export interface BotRequest{
    /** Bot id */
    id?: boolean | number
    /** Bot manifest reference */
    reference?: boolean | number
    /** Bot docker image url */
    image?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Smart Contract Information */
export interface ContractRequest{
    /** EIP55 checksummed deployment address */
    address?: boolean | number
    /** User-friendly name of the contract */
    name?: boolean | number
    /** Related web3 project */
    projectId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Project Contact Information */
export interface ContactsRequest{
    /** General contact email */
    generalEmailAddress?: boolean | number
    /** Security contact email */
    securityEmailAddress?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Web3 Project Information */
export interface ProjectRequest{
    /** List of contact info */
    contacts?: ContactsRequest
    /** User-friendly name of the project */
    name?: boolean | number
    /** Project identifier */
    id?: boolean | number
    social?: SocialRequest
    token?: TokenRequest
    /** Main website of the project */
    website?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectEdgeRequest{
    cursor?: boolean | number
    node?: ProjectRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectPageInfoRequest{
    endCursor?: boolean | number
    hasNextPage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectsResponseRequest{
    edges?: ProjectEdgeRequest
    pageInfo?: ProjectPageInfoRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectsInput {first?: (Scalars['Int'] | null),after?: (Scalars['String'] | null)}


/** Social Media Links */
export interface SocialRequest{
    /** Path to the coingecko identifier */
    coingecko?: boolean | number
    /** Identifier in the everest.link registry */
    everest?: boolean | number
    /** Github organization slug */
    github?: boolean | number
    /** Twitter account name */
    twitter?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Project Token Information */
export interface TokenRequest{
    /** Address where the project token is deployed */
    address?: boolean | number
    /** EIP155 identifier of the chain where the project token is deployed */
    chainId?: boolean | number
    /** Decimals of the token contract */
    decimals?: boolean | number
    /** Name of the token */
    name?: boolean | number
    /** Symbol of the token */
    symbol?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Alert_possibleTypes = ['Alert']
export const isAlert = (obj?: { __typename?: any } | null): obj is Alert => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAlert"')
  return Alert_possibleTypes.includes(obj.__typename)
}



const AlertEndCursor_possibleTypes = ['AlertEndCursor']
export const isAlertEndCursor = (obj?: { __typename?: any } | null): obj is AlertEndCursor => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAlertEndCursor"')
  return AlertEndCursor_possibleTypes.includes(obj.__typename)
}



const AlertPageInfo_possibleTypes = ['AlertPageInfo']
export const isAlertPageInfo = (obj?: { __typename?: any } | null): obj is AlertPageInfo => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAlertPageInfo"')
  return AlertPageInfo_possibleTypes.includes(obj.__typename)
}



const AlertsResponse_possibleTypes = ['AlertsResponse']
export const isAlertsResponse = (obj?: { __typename?: any } | null): obj is AlertsResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAlertsResponse"')
  return AlertsResponse_possibleTypes.includes(obj.__typename)
}



const AlertSource_possibleTypes = ['AlertSource']
export const isAlertSource = (obj?: { __typename?: any } | null): obj is AlertSource => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAlertSource"')
  return AlertSource_possibleTypes.includes(obj.__typename)
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



const Bot_possibleTypes = ['Bot']
export const isBot = (obj?: { __typename?: any } | null): obj is Bot => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBot"')
  return Bot_possibleTypes.includes(obj.__typename)
}



const Contract_possibleTypes = ['Contract']
export const isContract = (obj?: { __typename?: any } | null): obj is Contract => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isContract"')
  return Contract_possibleTypes.includes(obj.__typename)
}



const Contacts_possibleTypes = ['Contacts']
export const isContacts = (obj?: { __typename?: any } | null): obj is Contacts => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isContacts"')
  return Contacts_possibleTypes.includes(obj.__typename)
}



const Project_possibleTypes = ['Project']
export const isProject = (obj?: { __typename?: any } | null): obj is Project => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProject"')
  return Project_possibleTypes.includes(obj.__typename)
}



const ProjectEdge_possibleTypes = ['ProjectEdge']
export const isProjectEdge = (obj?: { __typename?: any } | null): obj is ProjectEdge => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProjectEdge"')
  return ProjectEdge_possibleTypes.includes(obj.__typename)
}



const ProjectPageInfo_possibleTypes = ['ProjectPageInfo']
export const isProjectPageInfo = (obj?: { __typename?: any } | null): obj is ProjectPageInfo => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProjectPageInfo"')
  return ProjectPageInfo_possibleTypes.includes(obj.__typename)
}



const ProjectsResponse_possibleTypes = ['ProjectsResponse']
export const isProjectsResponse = (obj?: { __typename?: any } | null): obj is ProjectsResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProjectsResponse"')
  return ProjectsResponse_possibleTypes.includes(obj.__typename)
}



const Social_possibleTypes = ['Social']
export const isSocial = (obj?: { __typename?: any } | null): obj is Social => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSocial"')
  return Social_possibleTypes.includes(obj.__typename)
}



const Token_possibleTypes = ['Token']
export const isToken = (obj?: { __typename?: any } | null): obj is Token => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isToken"')
  return Token_possibleTypes.includes(obj.__typename)
}



/** Alert information */
export interface AlertPromiseChain{
    
/**
 * Unique string to identify this class of finding,
 * primarily used to group similar findings for the end user
 */
alertId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** List of addresses involved in the alert */
addresses: ({get: (request?: boolean|number, defaultValue?: ((Scalars['String'] | undefined)[] | undefined)) => Promise<((Scalars['String'] | undefined)[] | undefined)>}),
    
/** List of contracts related to the alert */
contracts: ({get: <R extends ContractRequest>(request: R, defaultValue?: ((FieldsSelection<Contract, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<Contract, R> | undefined)[] | undefined)>}),
    
/** Timestamp when the alert was published */
createdAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Text description of the alert */
description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Alert hash identifier */
hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Extra alert information */
metadata: ({get: (request?: boolean|number, defaultValue?: (Scalars['JSONObject'] | undefined)) => Promise<(Scalars['JSONObject'] | undefined)>}),
    
/** Alert name */
name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** List of Web3 projects related to the alert */
projects: ({get: <R extends ProjectRequest>(request: R, defaultValue?: ((FieldsSelection<Project, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<Project, R> | undefined)[] | undefined)>}),
    
/** Name of protocol being reported on */
protocol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Number of scanners that found the alert */
scanNodeCount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    
/**
 * Impact level of finding
 * 
 * CRITICAL - Exploitable vulnerabilities, massive impact on users/funds
 * 
 * HIGH - Exploitable under more specific conditions, significant impact on users/funds
 * 
 * MEDIUM - Notable unexpected behaviours, moderate to low impact on users/funds
 * 
 * LOW - Minor oversights, negligible impact on users/funds
 * 
 * INFO - Miscellaneous behaviours worth describing
 */
severity: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Source where the alert was detected */
source: (AlertSourcePromiseChain & {get: <R extends AlertSourceRequest>(request: R, defaultValue?: (FieldsSelection<AlertSource, R> | undefined)) => Promise<(FieldsSelection<AlertSource, R> | undefined)>}),
    
/**
 * Type of finding
 * 
 * UNKNOWN_TYPE
 * 
 * EXPLOIT
 * 
 * SUSPICIOUS
 * 
 * DEGRADED
 * 
 * INFO
 */
findingType: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** Alert information */
export interface AlertObservableChain{
    
/**
 * Unique string to identify this class of finding,
 * primarily used to group similar findings for the end user
 */
alertId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** List of addresses involved in the alert */
addresses: ({get: (request?: boolean|number, defaultValue?: ((Scalars['String'] | undefined)[] | undefined)) => Observable<((Scalars['String'] | undefined)[] | undefined)>}),
    
/** List of contracts related to the alert */
contracts: ({get: <R extends ContractRequest>(request: R, defaultValue?: ((FieldsSelection<Contract, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<Contract, R> | undefined)[] | undefined)>}),
    
/** Timestamp when the alert was published */
createdAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Text description of the alert */
description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Alert hash identifier */
hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Extra alert information */
metadata: ({get: (request?: boolean|number, defaultValue?: (Scalars['JSONObject'] | undefined)) => Observable<(Scalars['JSONObject'] | undefined)>}),
    
/** Alert name */
name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** List of Web3 projects related to the alert */
projects: ({get: <R extends ProjectRequest>(request: R, defaultValue?: ((FieldsSelection<Project, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<Project, R> | undefined)[] | undefined)>}),
    
/** Name of protocol being reported on */
protocol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Number of scanners that found the alert */
scanNodeCount: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    
/**
 * Impact level of finding
 * 
 * CRITICAL - Exploitable vulnerabilities, massive impact on users/funds
 * 
 * HIGH - Exploitable under more specific conditions, significant impact on users/funds
 * 
 * MEDIUM - Notable unexpected behaviours, moderate to low impact on users/funds
 * 
 * LOW - Minor oversights, negligible impact on users/funds
 * 
 * INFO - Miscellaneous behaviours worth describing
 */
severity: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Source where the alert was detected */
source: (AlertSourceObservableChain & {get: <R extends AlertSourceRequest>(request: R, defaultValue?: (FieldsSelection<AlertSource, R> | undefined)) => Observable<(FieldsSelection<AlertSource, R> | undefined)>}),
    
/**
 * Type of finding
 * 
 * UNKNOWN_TYPE
 * 
 * EXPLOIT
 * 
 * SUSPICIOUS
 * 
 * DEGRADED
 * 
 * INFO
 */
findingType: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface AlertEndCursorPromiseChain{
    blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['NonNegativeInt']) => Promise<Scalars['NonNegativeInt']>}),
    alertId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface AlertEndCursorObservableChain{
    blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['NonNegativeInt']) => Observable<Scalars['NonNegativeInt']>}),
    alertId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface AlertPageInfoPromiseChain{
    endCursor: (AlertEndCursorPromiseChain & {get: <R extends AlertEndCursorRequest>(request: R, defaultValue?: FieldsSelection<AlertEndCursor, R>) => Promise<FieldsSelection<AlertEndCursor, R>>}),
    hasNextPage: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface AlertPageInfoObservableChain{
    endCursor: (AlertEndCursorObservableChain & {get: <R extends AlertEndCursorRequest>(request: R, defaultValue?: FieldsSelection<AlertEndCursor, R>) => Observable<FieldsSelection<AlertEndCursor, R>>}),
    hasNextPage: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface AlertsResponsePromiseChain{
    alerts: ({get: <R extends AlertRequest>(request: R, defaultValue?: ((FieldsSelection<Alert, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<Alert, R> | undefined)[] | undefined)>}),
    pageInfo: (AlertPageInfoPromiseChain & {get: <R extends AlertPageInfoRequest>(request: R, defaultValue?: (FieldsSelection<AlertPageInfo, R> | undefined)) => Promise<(FieldsSelection<AlertPageInfo, R> | undefined)>})
}

export interface AlertsResponseObservableChain{
    alerts: ({get: <R extends AlertRequest>(request: R, defaultValue?: ((FieldsSelection<Alert, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<Alert, R> | undefined)[] | undefined)>}),
    pageInfo: (AlertPageInfoObservableChain & {get: <R extends AlertPageInfoRequest>(request: R, defaultValue?: (FieldsSelection<AlertPageInfo, R> | undefined)) => Observable<(FieldsSelection<AlertPageInfo, R> | undefined)>})
}


/** Source where the threat was detected */
export interface AlertSourcePromiseChain{
    
/** Transaction where the threat was detected */
transactionHash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Bot that triggered the alert */
bot: (BotPromiseChain & {get: <R extends BotRequest>(request: R, defaultValue?: (FieldsSelection<Bot, R> | undefined)) => Promise<(FieldsSelection<Bot, R> | undefined)>}),
    
/** Block where the threat was detected */
block: (BlockPromiseChain & {get: <R extends BlockRequest>(request: R, defaultValue?: (FieldsSelection<Block, R> | undefined)) => Promise<(FieldsSelection<Block, R> | undefined)>})
}


/** Source where the threat was detected */
export interface AlertSourceObservableChain{
    
/** Transaction where the threat was detected */
transactionHash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Bot that triggered the alert */
bot: (BotObservableChain & {get: <R extends BotRequest>(request: R, defaultValue?: (FieldsSelection<Bot, R> | undefined)) => Observable<(FieldsSelection<Bot, R> | undefined)>}),
    
/** Block where the threat was detected */
block: (BlockObservableChain & {get: <R extends BlockRequest>(request: R, defaultValue?: (FieldsSelection<Block, R> | undefined)) => Observable<(FieldsSelection<Block, R> | undefined)>})
}


/** Block information */
export interface BlockPromiseChain{
    
/** Block number */
number: ({get: (request?: boolean|number, defaultValue?: (Scalars['NonNegativeInt'] | undefined)) => Promise<(Scalars['NonNegativeInt'] | undefined)>}),
    
/** Block hash */
hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Block's timestamp */
timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Block's chain id */
chainId: ({get: (request?: boolean|number, defaultValue?: (Scalars['NonNegativeInt'] | undefined)) => Promise<(Scalars['NonNegativeInt'] | undefined)>})
}


/** Block information */
export interface BlockObservableChain{
    
/** Block number */
number: ({get: (request?: boolean|number, defaultValue?: (Scalars['NonNegativeInt'] | undefined)) => Observable<(Scalars['NonNegativeInt'] | undefined)>}),
    
/** Block hash */
hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Block's timestamp */
timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Block's chain id */
chainId: ({get: (request?: boolean|number, defaultValue?: (Scalars['NonNegativeInt'] | undefined)) => Observable<(Scalars['NonNegativeInt'] | undefined)>})
}

export interface QueryPromiseChain{
    
/** Fetches alerts */
alerts: ((args?: {input?: (AlertsInput | null)}) => AlertsResponsePromiseChain & {get: <R extends AlertsResponseRequest>(request: R, defaultValue?: (FieldsSelection<AlertsResponse, R> | undefined)) => Promise<(FieldsSelection<AlertsResponse, R> | undefined)>})&(AlertsResponsePromiseChain & {get: <R extends AlertsResponseRequest>(request: R, defaultValue?: (FieldsSelection<AlertsResponse, R> | undefined)) => Promise<(FieldsSelection<AlertsResponse, R> | undefined)>}),
    
/**
 * Fetches all existing web3 projects recorded in github repo: 
 * https://github.com/ethereum-lists/contracts/tree/main/projects
 */
projects: ((args?: {input?: (ProjectsInput | null)}) => ProjectsResponsePromiseChain & {get: <R extends ProjectsResponseRequest>(request: R, defaultValue?: (FieldsSelection<ProjectsResponse, R> | undefined)) => Promise<(FieldsSelection<ProjectsResponse, R> | undefined)>})&(ProjectsResponsePromiseChain & {get: <R extends ProjectsResponseRequest>(request: R, defaultValue?: (FieldsSelection<ProjectsResponse, R> | undefined)) => Promise<(FieldsSelection<ProjectsResponse, R> | undefined)>}),
    
/** Fetches a web3 project given its project ID */
project: ((args: {id: Scalars['String']}) => ProjectPromiseChain & {get: <R extends ProjectRequest>(request: R, defaultValue?: (FieldsSelection<Project, R> | undefined)) => Promise<(FieldsSelection<Project, R> | undefined)>})
}

export interface QueryObservableChain{
    
/** Fetches alerts */
alerts: ((args?: {input?: (AlertsInput | null)}) => AlertsResponseObservableChain & {get: <R extends AlertsResponseRequest>(request: R, defaultValue?: (FieldsSelection<AlertsResponse, R> | undefined)) => Observable<(FieldsSelection<AlertsResponse, R> | undefined)>})&(AlertsResponseObservableChain & {get: <R extends AlertsResponseRequest>(request: R, defaultValue?: (FieldsSelection<AlertsResponse, R> | undefined)) => Observable<(FieldsSelection<AlertsResponse, R> | undefined)>}),
    
/**
 * Fetches all existing web3 projects recorded in github repo: 
 * https://github.com/ethereum-lists/contracts/tree/main/projects
 */
projects: ((args?: {input?: (ProjectsInput | null)}) => ProjectsResponseObservableChain & {get: <R extends ProjectsResponseRequest>(request: R, defaultValue?: (FieldsSelection<ProjectsResponse, R> | undefined)) => Observable<(FieldsSelection<ProjectsResponse, R> | undefined)>})&(ProjectsResponseObservableChain & {get: <R extends ProjectsResponseRequest>(request: R, defaultValue?: (FieldsSelection<ProjectsResponse, R> | undefined)) => Observable<(FieldsSelection<ProjectsResponse, R> | undefined)>}),
    
/** Fetches a web3 project given its project ID */
project: ((args: {id: Scalars['String']}) => ProjectObservableChain & {get: <R extends ProjectRequest>(request: R, defaultValue?: (FieldsSelection<Project, R> | undefined)) => Observable<(FieldsSelection<Project, R> | undefined)>})
}


/** Bot information */
export interface BotPromiseChain{
    
/** Bot id */
id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Bot manifest reference */
reference: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Bot docker image url */
image: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** Bot information */
export interface BotObservableChain{
    
/** Bot id */
id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Bot manifest reference */
reference: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Bot docker image url */
image: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** Smart Contract Information */
export interface ContractPromiseChain{
    
/** EIP55 checksummed deployment address */
address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** User-friendly name of the contract */
name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Related web3 project */
projectId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** Smart Contract Information */
export interface ContractObservableChain{
    
/** EIP55 checksummed deployment address */
address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** User-friendly name of the contract */
name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Related web3 project */
projectId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** Project Contact Information */
export interface ContactsPromiseChain{
    
/** General contact email */
generalEmailAddress: ({get: (request?: boolean|number, defaultValue?: (Scalars['EmailAddress'] | undefined)) => Promise<(Scalars['EmailAddress'] | undefined)>}),
    
/** Security contact email */
securityEmailAddress: ({get: (request?: boolean|number, defaultValue?: (Scalars['EmailAddress'] | undefined)) => Promise<(Scalars['EmailAddress'] | undefined)>})
}


/** Project Contact Information */
export interface ContactsObservableChain{
    
/** General contact email */
generalEmailAddress: ({get: (request?: boolean|number, defaultValue?: (Scalars['EmailAddress'] | undefined)) => Observable<(Scalars['EmailAddress'] | undefined)>}),
    
/** Security contact email */
securityEmailAddress: ({get: (request?: boolean|number, defaultValue?: (Scalars['EmailAddress'] | undefined)) => Observable<(Scalars['EmailAddress'] | undefined)>})
}


/** Web3 Project Information */
export interface ProjectPromiseChain{
    
/** List of contact info */
contacts: (ContactsPromiseChain & {get: <R extends ContactsRequest>(request: R, defaultValue?: (FieldsSelection<Contacts, R> | undefined)) => Promise<(FieldsSelection<Contacts, R> | undefined)>}),
    
/** User-friendly name of the project */
name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Project identifier */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    social: (SocialPromiseChain & {get: <R extends SocialRequest>(request: R, defaultValue?: (FieldsSelection<Social, R> | undefined)) => Promise<(FieldsSelection<Social, R> | undefined)>}),
    token: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Promise<(FieldsSelection<Token, R> | undefined)>}),
    
/** Main website of the project */
website: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** Web3 Project Information */
export interface ProjectObservableChain{
    
/** List of contact info */
contacts: (ContactsObservableChain & {get: <R extends ContactsRequest>(request: R, defaultValue?: (FieldsSelection<Contacts, R> | undefined)) => Observable<(FieldsSelection<Contacts, R> | undefined)>}),
    
/** User-friendly name of the project */
name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Project identifier */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    social: (SocialObservableChain & {get: <R extends SocialRequest>(request: R, defaultValue?: (FieldsSelection<Social, R> | undefined)) => Observable<(FieldsSelection<Social, R> | undefined)>}),
    token: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Observable<(FieldsSelection<Token, R> | undefined)>}),
    
/** Main website of the project */
website: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface ProjectEdgePromiseChain{
    cursor: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    node: (ProjectPromiseChain & {get: <R extends ProjectRequest>(request: R, defaultValue?: (FieldsSelection<Project, R> | undefined)) => Promise<(FieldsSelection<Project, R> | undefined)>})
}

export interface ProjectEdgeObservableChain{
    cursor: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    node: (ProjectObservableChain & {get: <R extends ProjectRequest>(request: R, defaultValue?: (FieldsSelection<Project, R> | undefined)) => Observable<(FieldsSelection<Project, R> | undefined)>})
}

export interface ProjectPageInfoPromiseChain{
    endCursor: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    hasNextPage: ({get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Promise<(Scalars['Boolean'] | undefined)>})
}

export interface ProjectPageInfoObservableChain{
    endCursor: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    hasNextPage: ({get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Observable<(Scalars['Boolean'] | undefined)>})
}

export interface ProjectsResponsePromiseChain{
    edges: ({get: <R extends ProjectEdgeRequest>(request: R, defaultValue?: ((FieldsSelection<ProjectEdge, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<ProjectEdge, R> | undefined)[] | undefined)>}),
    pageInfo: (ProjectPageInfoPromiseChain & {get: <R extends ProjectPageInfoRequest>(request: R, defaultValue?: (FieldsSelection<ProjectPageInfo, R> | undefined)) => Promise<(FieldsSelection<ProjectPageInfo, R> | undefined)>})
}

export interface ProjectsResponseObservableChain{
    edges: ({get: <R extends ProjectEdgeRequest>(request: R, defaultValue?: ((FieldsSelection<ProjectEdge, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<ProjectEdge, R> | undefined)[] | undefined)>}),
    pageInfo: (ProjectPageInfoObservableChain & {get: <R extends ProjectPageInfoRequest>(request: R, defaultValue?: (FieldsSelection<ProjectPageInfo, R> | undefined)) => Observable<(FieldsSelection<ProjectPageInfo, R> | undefined)>})
}


/** Social Media Links */
export interface SocialPromiseChain{
    
/** Path to the coingecko identifier */
coingecko: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Identifier in the everest.link registry */
everest: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Github organization slug */
github: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Twitter account name */
twitter: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** Social Media Links */
export interface SocialObservableChain{
    
/** Path to the coingecko identifier */
coingecko: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Identifier in the everest.link registry */
everest: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Github organization slug */
github: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Twitter account name */
twitter: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** Project Token Information */
export interface TokenPromiseChain{
    
/** Address where the project token is deployed */
address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** EIP155 identifier of the chain where the project token is deployed */
chainId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** Decimals of the token contract */
decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    
/** Name of the token */
name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Symbol of the token */
symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** Project Token Information */
export interface TokenObservableChain{
    
/** Address where the project token is deployed */
address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** EIP155 identifier of the chain where the project token is deployed */
chainId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** Decimals of the token contract */
decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    
/** Name of the token */
name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Symbol of the token */
symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}