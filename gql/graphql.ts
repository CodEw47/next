/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Any custom scalar type */
  Any: { input: any; output: any; }
  Object: { input: any; output: any; }
};

export type Addresses = {
  __typename?: 'Addresses';
  Dealer?: Maybe<Dealer>;
  city: Scalars['String']['output'];
  complement?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  dealerId: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  neighborhood: Scalars['String']['output'];
  number: Scalars['String']['output'];
  pid: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  zipcode: Scalars['String']['output'];
};

export type AddressesOperationOutput = {
  __typename?: 'AddressesOperationOutput';
  result: Scalars['Float']['output'];
};

export type AddressesOutput = {
  __typename?: 'AddressesOutput';
  data: Array<Maybe<Addresses>>;
  operation?: Maybe<AddressesOperationOutput>;
  pagination?: Maybe<AddressesPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AddressesPaginationOutput = {
  __typename?: 'AddressesPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type Billing = {
  __typename?: 'Billing';
  FinancialTitle?: Maybe<FinancialTitle>;
  comments?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  notifications?: Maybe<Scalars['Object']['output']>;
  paymentPromise?: Maybe<Scalars['String']['output']>;
  pid: Scalars['String']['output'];
  status: Scalars['String']['output'];
  titleId: Scalars['Float']['output'];
  updated_at: Scalars['String']['output'];
};

export type BillingOperationOutput = {
  __typename?: 'BillingOperationOutput';
  result: Scalars['Float']['output'];
};

export type BillingOutput = {
  __typename?: 'BillingOutput';
  data: Array<Maybe<Billing>>;
  operation?: Maybe<BillingOperationOutput>;
  pagination?: Maybe<BillingPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type BillingPaginationOutput = {
  __typename?: 'BillingPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type ConnectorEnum =
  | 'AND'
  | 'OR';

export type Contestation = {
  __typename?: 'Contestation';
  Order?: Maybe<Order>;
  created_at: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  orderId: Scalars['Float']['output'];
  pid: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
};

export type ContestationOperationOutput = {
  __typename?: 'ContestationOperationOutput';
  result: Scalars['Float']['output'];
};

export type ContestationOutput = {
  __typename?: 'ContestationOutput';
  data: Array<Maybe<Contestation>>;
  operation?: Maybe<ContestationOperationOutput>;
  pagination?: Maybe<ContestationPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ContestationPaginationOutput = {
  __typename?: 'ContestationPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type CreditAnalysis = {
  __typename?: 'CreditAnalysis';
  Dealer?: Maybe<Dealer>;
  ImgBiometry?: Maybe<Scalars['String']['output']>;
  User?: Maybe<User>;
  check_biometry?: Maybe<Scalars['String']['output']>;
  check_document?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  descricao?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Scalars['Object']['output']>;
  hashImgBoleto?: Maybe<Scalars['String']['output']>;
  hashImgNfe?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  modified_by?: Maybe<Scalars['String']['output']>;
  pid: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CreditAnalysisOperationOutput = {
  __typename?: 'CreditAnalysisOperationOutput';
  result: Scalars['Float']['output'];
};

export type CreditAnalysisOutput = {
  __typename?: 'CreditAnalysisOutput';
  data: Array<Maybe<CreditAnalysis>>;
  operation?: Maybe<CreditAnalysisOperationOutput>;
  pagination?: Maybe<CreditAnalysisPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CreditAnalysisPaginationOutput = {
  __typename?: 'CreditAnalysisPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type Dealer = {
  __typename?: 'Dealer';
  Document?: Maybe<Document>;
  Store?: Maybe<Store>;
  User?: Maybe<User>;
  Wallet?: Maybe<Wallet>;
  antiFraudStatus: Scalars['String']['output'];
  birthDate: Scalars['String']['output'];
  brand: Scalars['String']['output'];
  cpf: Scalars['String']['output'];
  created_at: Scalars['String']['output'];
  creditAnalysisPid?: Maybe<Scalars['String']['output']>;
  dealerHasExperience?: Maybe<Scalars['Boolean']['output']>;
  faceBiometryStatus: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  lastName: Scalars['String']['output'];
  pid: Scalars['String']['output'];
  registerStatus: Scalars['String']['output'];
  rejectionReason?: Maybe<Scalars['String']['output']>;
  revScore: Scalars['Float']['output'];
  rg: Scalars['String']['output'];
  storeRefCode: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  userId: Scalars['Float']['output'];
  walletId?: Maybe<Scalars['String']['output']>;
};

export type DealerClient = {
  __typename?: 'DealerClient';
  Dealer?: Maybe<Dealer>;
  billings?: Maybe<Scalars['Object']['output']>;
  cellphone: Scalars['String']['output'];
  created_at: Scalars['String']['output'];
  dealerId: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  pid: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
};

export type DealerClientOperationOutput = {
  __typename?: 'DealerClientOperationOutput';
  result: Scalars['Float']['output'];
};

export type DealerClientOutput = {
  __typename?: 'DealerClientOutput';
  data: Array<Maybe<DealerClient>>;
  operation?: Maybe<DealerClientOperationOutput>;
  pagination?: Maybe<DealerClientPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type DealerClientPaginationOutput = {
  __typename?: 'DealerClientPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type DealerOperationOutput = {
  __typename?: 'DealerOperationOutput';
  result: Scalars['Float']['output'];
};

export type DealerOutput = {
  __typename?: 'DealerOutput';
  data: Array<Maybe<Dealer>>;
  operation?: Maybe<DealerOperationOutput>;
  pagination?: Maybe<DealerPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type DealerPaginationOutput = {
  __typename?: 'DealerPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type Document = {
  __typename?: 'Document';
  created_at: Scalars['String']['output'];
  dealerId: Scalars['Float']['output'];
  documents: Scalars['Object']['output'];
  id: Scalars['Float']['output'];
  pid: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
};

export type DocumentOperationOutput = {
  __typename?: 'DocumentOperationOutput';
  result: Scalars['Float']['output'];
};

export type DocumentOutput = {
  __typename?: 'DocumentOutput';
  data: Array<Maybe<Document>>;
  operation?: Maybe<DocumentOperationOutput>;
  pagination?: Maybe<DocumentPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type DocumentPaginationOutput = {
  __typename?: 'DocumentPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type DynaFilterInput = {
  column: Scalars['String']['input'];
  connector?: InputMaybe<ConnectorEnum>;
  filter: FilterEnum;
  table: TableEnum;
  value?: InputMaybe<Scalars['Any']['input']>;
};

export type DynaInput = {
  filters?: InputMaybe<Array<InputMaybe<DynaFilterInput>>>;
  merge?: InputMaybe<DynaMergeInput>;
  operation?: InputMaybe<DynaOperationInput>;
  pagination?: InputMaybe<DynaPaginationInput>;
};

export type DynaMergeInput = {
  strategy?: InputMaybe<MergeStrategyEnum>;
};

export type DynaOperationInput = {
  column: Scalars['String']['input'];
  operation: OperationEnum;
  skipNull: Scalars['Boolean']['input'];
  table: TableEnum;
};

export type DynaPaginationInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  orderBy?: InputMaybe<DynaPaginationOrderByEnum>;
};

export type DynaPaginationOrderByEnum =
  | 'ASC'
  | 'DESC';

export type FilterEnum =
  | 'EQ'
  | 'GT'
  | 'GTE'
  | 'IN'
  | 'LIKE_ANY'
  | 'LIKE_END'
  | 'LIKE_START'
  | 'LT'
  | 'LTE'
  | 'NE'
  | 'NOT_IN'
  | 'NOT_NULL'
  | 'NULL';

export type FinancialTitle = {
  __typename?: 'FinancialTitle';
  Dealer?: Maybe<Dealer>;
  Order?: Maybe<Order>;
  Payment?: Maybe<Payment>;
  amount: Scalars['Float']['output'];
  automaticLauch?: Maybe<Scalars['Boolean']['output']>;
  child_title?: Maybe<Scalars['Float']['output']>;
  clientId?: Maybe<Scalars['Float']['output']>;
  created_at: Scalars['String']['output'];
  discount: Scalars['Float']['output'];
  dueDate?: Maybe<Scalars['String']['output']>;
  financialType: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  instalments?: Maybe<Scalars['Float']['output']>;
  isGrouped?: Maybe<Scalars['Boolean']['output']>;
  issuance_date?: Maybe<Scalars['String']['output']>;
  observation?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['Float']['output']>;
  parent_title?: Maybe<Scalars['Float']['output']>;
  paymentData?: Maybe<Scalars['Object']['output']>;
  paymentId?: Maybe<Scalars['Float']['output']>;
  penalty_fee: Scalars['Float']['output'];
  pid: Scalars['String']['output'];
  settlement_date?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  storeId?: Maybe<Scalars['Float']['output']>;
  tax: Scalars['Float']['output'];
  total_amount: Scalars['Float']['output'];
  type?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['String']['output'];
};

export type FinancialTitleOperationOutput = {
  __typename?: 'FinancialTitleOperationOutput';
  result: Scalars['Float']['output'];
};

export type FinancialTitleOutput = {
  __typename?: 'FinancialTitleOutput';
  data: Array<Maybe<FinancialTitle>>;
  operation?: Maybe<FinancialTitleOperationOutput>;
  pagination?: Maybe<FinancialTitlePaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type FinancialTitlePaginationOutput = {
  __typename?: 'FinancialTitlePaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type Lead = {
  __typename?: 'Lead';
  Dealer?: Maybe<Dealer>;
  created_at: Scalars['String']['output'];
  dealerId?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Float']['output'];
  phone: Scalars['String']['output'];
  pid: Scalars['String']['output'];
  storeRefCode: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
};

export type LeadOperationOutput = {
  __typename?: 'LeadOperationOutput';
  result: Scalars['Float']['output'];
};

export type LeadOutput = {
  __typename?: 'LeadOutput';
  data: Array<Maybe<Lead>>;
  operation?: Maybe<LeadOperationOutput>;
  pagination?: Maybe<LeadPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type LeadPaginationOutput = {
  __typename?: 'LeadPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type MergeStrategyEnum =
  | 'DISTINCT'
  | 'OPERATION_ONLY';

export type OperationEnum =
  | 'SUM';

export type Order = {
  __typename?: 'Order';
  Dealer?: Maybe<Dealer>;
  Store?: Maybe<Store>;
  Transaction?: Maybe<Transaction>;
  amount: Scalars['Float']['output'];
  approvedDate?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  dealerId: Scalars['Float']['output'];
  dealerWalletId: Scalars['Float']['output'];
  dealerWalletPid?: Maybe<Scalars['String']['output']>;
  deliveryStatus?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  instalments?: Maybe<Scalars['Float']['output']>;
  pid: Scalars['String']['output'];
  status: Scalars['String']['output'];
  storeId: Scalars['Float']['output'];
  storeWalletPid?: Maybe<Scalars['String']['output']>;
  takeoutStatus?: Maybe<Scalars['String']['output']>;
  transactionAuthorizationId: Scalars['Float']['output'];
  transactionId: Scalars['Float']['output'];
  type?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['String']['output'];
};

export type OrderOperationOutput = {
  __typename?: 'OrderOperationOutput';
  result: Scalars['Float']['output'];
};

export type OrderOutput = {
  __typename?: 'OrderOutput';
  data: Array<Maybe<Order>>;
  operation?: Maybe<OrderOperationOutput>;
  pagination?: Maybe<OrderPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type OrderPaginationOutput = {
  __typename?: 'OrderPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  created_at: Scalars['String']['output'];
  data?: Maybe<Scalars['Object']['output']>;
  dueDate: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  paymentMethodId: Scalars['Float']['output'];
  pid: Scalars['String']['output'];
  status: Scalars['String']['output'];
  transactionId: Scalars['Float']['output'];
  updated_at: Scalars['String']['output'];
};

export type PaymentOperationOutput = {
  __typename?: 'PaymentOperationOutput';
  result: Scalars['Float']['output'];
};

export type PaymentOutput = {
  __typename?: 'PaymentOutput';
  data: Array<Maybe<Payment>>;
  operation?: Maybe<PaymentOperationOutput>;
  pagination?: Maybe<PaymentPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaymentPaginationOutput = {
  __typename?: 'PaymentPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  Addresses?: Maybe<AddressesOutput>;
  Billing?: Maybe<BillingOutput>;
  Contestation?: Maybe<ContestationOutput>;
  CreditAnalysis?: Maybe<CreditAnalysisOutput>;
  Dealer?: Maybe<DealerOutput>;
  DealerClient?: Maybe<DealerClientOutput>;
  Document?: Maybe<DocumentOutput>;
  FinancialTitle?: Maybe<FinancialTitleOutput>;
  Lead?: Maybe<LeadOutput>;
  Order?: Maybe<OrderOutput>;
  Payment?: Maybe<PaymentOutput>;
  QuizOption?: Maybe<QuizOptionOutput>;
  QuizQuestion?: Maybe<QuizQuestionOutput>;
  RevPayUser?: Maybe<RevPayUserOutput>;
  Store?: Maybe<StoreOutput>;
  Transaction?: Maybe<TransactionOutput>;
  User?: Maybe<UserOutput>;
  Wallet?: Maybe<WalletOutput>;
  crmDealers?: Maybe<DealerOutput>;
  crmOrders?: Maybe<OrderOutput>;
};


export type QueryAddressesArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryBillingArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryContestationArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryCreditAnalysisArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryDealerArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryDealerClientArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryDocumentArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryFinancialTitleArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryLeadArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryOrderArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryPaymentArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryQuizOptionArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryQuizQuestionArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryRevPayUserArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryStoreArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryTransactionArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryUserArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryWalletArgs = {
  dyna?: InputMaybe<DynaInput>;
};


export type QueryCrmDealersArgs = {
  crmDealersInput?: InputMaybe<CrmDealersInput>;
};


export type QueryCrmOrdersArgs = {
  crmOrdersInput?: InputMaybe<CrmOrdersInput>;
};

export type QuizOption = {
  __typename?: 'QuizOption';
  QuizQuestion?: Maybe<QuizQuestion>;
  created_at: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  opt: Scalars['String']['output'];
  pid: Scalars['String']['output'];
  questionId: Scalars['Float']['output'];
  updated_at: Scalars['String']['output'];
  weight: Scalars['Float']['output'];
};

export type QuizOptionOperationOutput = {
  __typename?: 'QuizOptionOperationOutput';
  result: Scalars['Float']['output'];
};

export type QuizOptionOutput = {
  __typename?: 'QuizOptionOutput';
  data: Array<Maybe<QuizOption>>;
  operation?: Maybe<QuizOptionOperationOutput>;
  pagination?: Maybe<QuizOptionPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type QuizOptionPaginationOutput = {
  __typename?: 'QuizOptionPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type QuizQuestion = {
  __typename?: 'QuizQuestion';
  created_at: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  pid: Scalars['String']['output'];
  question: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
};

export type QuizQuestionOperationOutput = {
  __typename?: 'QuizQuestionOperationOutput';
  result: Scalars['Float']['output'];
};

export type QuizQuestionOutput = {
  __typename?: 'QuizQuestionOutput';
  data: Array<Maybe<QuizQuestion>>;
  operation?: Maybe<QuizQuestionOperationOutput>;
  pagination?: Maybe<QuizQuestionPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type QuizQuestionPaginationOutput = {
  __typename?: 'QuizQuestionPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type RevPayUser = {
  __typename?: 'RevPayUser';
  User?: Maybe<User>;
  created_at: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  pid: Scalars['String']['output'];
  role: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  userId: Scalars['Float']['output'];
};

export type RevPayUserOperationOutput = {
  __typename?: 'RevPayUserOperationOutput';
  result: Scalars['Float']['output'];
};

export type RevPayUserOutput = {
  __typename?: 'RevPayUserOutput';
  data: Array<Maybe<RevPayUser>>;
  operation?: Maybe<RevPayUserOperationOutput>;
  pagination?: Maybe<RevPayUserPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type RevPayUserPaginationOutput = {
  __typename?: 'RevPayUserPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type Store = {
  __typename?: 'Store';
  Wallet?: Maybe<Wallet>;
  cnpj: Scalars['String']['output'];
  coverImage?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  externalLink?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  mdrPercent: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  operationType: Scalars['String']['output'];
  pid: Scalars['String']['output'];
  receiptBusinessDays: Scalars['Float']['output'];
  refCode: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  walletId: Scalars['Float']['output'];
};

export type StoreOperationOutput = {
  __typename?: 'StoreOperationOutput';
  result: Scalars['Float']['output'];
};

export type StoreOutput = {
  __typename?: 'StoreOutput';
  data: Array<Maybe<Store>>;
  operation?: Maybe<StoreOperationOutput>;
  pagination?: Maybe<StorePaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type StorePaginationOutput = {
  __typename?: 'StorePaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type TableEnum =
  | 'Addresses'
  | 'Billing'
  | 'Contestation'
  | 'CreditAnalysis'
  | 'Dealer'
  | 'DealerClient'
  | 'Document'
  | 'FinancialTitle'
  | 'Lead'
  | 'Order'
  | 'Payment'
  | 'QuizOption'
  | 'QuizQuestion'
  | 'RevPayUser'
  | 'Store'
  | 'Transaction'
  | 'User'
  | 'Wallet';

export type Transaction = {
  __typename?: 'Transaction';
  Wallet?: Maybe<Wallet>;
  created_at: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  paymentIds: Scalars['Object']['output'];
  pid: Scalars['String']['output'];
  receiverWalletId: Scalars['Float']['output'];
  senderWalletId: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
};

export type TransactionOperationOutput = {
  __typename?: 'TransactionOperationOutput';
  result: Scalars['Float']['output'];
};

export type TransactionOutput = {
  __typename?: 'TransactionOutput';
  data: Array<Maybe<Transaction>>;
  operation?: Maybe<TransactionOperationOutput>;
  pagination?: Maybe<TransactionPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type TransactionPaginationOutput = {
  __typename?: 'TransactionPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  pid: Scalars['String']['output'];
  roleId: Scalars['Float']['output'];
  updated_at: Scalars['String']['output'];
};

export type UserOperationOutput = {
  __typename?: 'UserOperationOutput';
  result: Scalars['Float']['output'];
};

export type UserOutput = {
  __typename?: 'UserOutput';
  data: Array<Maybe<User>>;
  operation?: Maybe<UserOperationOutput>;
  pagination?: Maybe<UserPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type UserPaginationOutput = {
  __typename?: 'UserPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type Wallet = {
  __typename?: 'Wallet';
  created_at: Scalars['String']['output'];
  entityId: Scalars['String']['output'];
  globalBalance: Scalars['Float']['output'];
  globalLimit: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  pid: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  usedLimit: Scalars['Float']['output'];
};

export type WalletOperationOutput = {
  __typename?: 'WalletOperationOutput';
  result: Scalars['Float']['output'];
};

export type WalletOutput = {
  __typename?: 'WalletOutput';
  data: Array<Maybe<Wallet>>;
  operation?: Maybe<WalletOperationOutput>;
  pagination?: Maybe<WalletPaginationOutput>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type WalletPaginationOutput = {
  __typename?: 'WalletPaginationOutput';
  hasMore: Scalars['Boolean']['output'];
  nextOffset: Scalars['Int']['output'];
};

export type CrmDealersInput = {
  antiFraudStatus?: InputMaybe<Scalars['String']['input']>;
  cpf?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  faceBiometryStatus?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<CrmDealersPaginationInput>;
  registerStatus?: InputMaybe<Scalars['String']['input']>;
  rejectionReason?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CrmDealersStatusEnum>;
  storeId?: InputMaybe<Scalars['Int']['input']>;
};

export type CrmDealersPaginationInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  orderBy?: InputMaybe<CrmDealersPaginationOrderByEnum>;
};

export type CrmDealersPaginationOrderByEnum =
  | 'ASC'
  | 'DESC';

export type CrmDealersStatusEnum =
  | 'APPROVED'
  | 'FRAUD_TABLE'
  | 'P2'
  | 'REJECTED';

export type CrmOrdersInput = {
  approvedDateEnd?: InputMaybe<Scalars['String']['input']>;
  approvedDateIni?: InputMaybe<Scalars['String']['input']>;
  cpf?: InputMaybe<Scalars['String']['input']>;
  created_atEnd?: InputMaybe<Scalars['String']['input']>;
  created_atIni?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<CrmOrdersPaginationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['Int']['input']>;
};

export type CrmOrdersPaginationInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  orderBy?: InputMaybe<CrmOrdersPaginationOrderByEnum>;
};

export type CrmOrdersPaginationOrderByEnum =
  | 'ASC'
  | 'DESC';
