import type { AxiosRequestConfig, AxiosResponse } from 'axios'

import { BaseAPI } from '../base'
import { DefaultApiFp } from './functional-programing-interface'

import {
  Address,
  AddressCounters,
  Block,
  CoinBalanceHistoryByDaysEntry,
  IndexingStatus,
  NFTInstance,
  RawTrace,
  ReadMethodQueryBody,
  ReadMethodResponse,
  ReadMethodWithoutValue,
  ReadMethodWithValue,
  SmartContract,
  StatsResponse,
  TokenBalance,
  TokenCounters,
  TokenInfo,
  Transaction,
  WriteMethod,
} from '../models'

import {
  AddressWithTxCountResult,
  BlockResult,
  CoinBalanceHistoryEntryResult,
  HolderResult,
  InternalTransactionResult,
  JsonRpcUrlResult,
  LogResult,
  MarketChartResult,
  NewSmartContract24hResult,
  NftInstanceResult,
  SearchResult,
  SearchResultAddressOrContract,
  SearchResultBlock,
  SearchResultRedirect,
  SearchResultToken,
  SearchResultTransaction,
  SmartContractsForListResult,
  StateChangeResult,
  TokenBalanceResult,
  TokenInfoResult,
  TokenTransferResult,
  TransactionChartResult,
  TransactionResult,
  TransferCountResult,
  WithdrawalResult,
} from '../results'

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
  /**
   *
   * @summary get address info
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddress(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Address>> {
    return DefaultApiFp(this.configuration)
      .getAddress(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get blocks validated by address
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressBlocksValidated(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<BlockResult>> {
    return DefaultApiFp(this.configuration)
      .getAddressBlocksValidated(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address coin balance history
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressCoinBalanceHistory(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<CoinBalanceHistoryEntryResult>> {
    return DefaultApiFp(this.configuration)
      .getAddressCoinBalanceHistory(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address coin balance history by day
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressCoinBalanceHistoryByDay(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<CoinBalanceHistoryByDaysEntry>>> {
    return DefaultApiFp(this.configuration)
      .getAddressCoinBalanceHistoryByDay(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address counters
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressCounters(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressCounters>> {
    return DefaultApiFp(this.configuration)
      .getAddressCounters(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address internal txs
   * @param {string} address_hash Address hash
   * @param {string} [filter]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressInternalTxs(
    address_hash: string,
    filter?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InternalTransactionResult>> {
    return DefaultApiFp(this.configuration)
      .getAddressInternalTxs(address_hash, filter, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address logs
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressLogs(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<LogResult>> {
    return DefaultApiFp(this.configuration)
      .getAddressLogs(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get blocks validated by address
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressTokenBalances(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<TokenBalance>>> {
    return DefaultApiFp(this.configuration)
      .getAddressTokenBalances(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address token transfers
   * @param {string} address_hash Address hash
   * @param {string} [type]
   * @param {string} [filter]
   * @param {string} [token]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressTokenTransfers(
    address_hash: string,
    type?: string,
    filter?: string,
    token?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenTransferResult>> {
    return DefaultApiFp(this.configuration)
      .getAddressTokenTransfers(address_hash, type, filter, token, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get blocks validated by address
   * @param {string} address_hash Address hash
   * @param {string} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressTokens(
    address_hash: string,
    type?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenBalanceResult>> {
    return DefaultApiFp(this.configuration)
      .getAddressTokens(address_hash, type, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address txs
   * @param {string} address_hash Address hash
   * @param {string} [filter]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressTxs(
    address_hash: string,
    filter?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TransactionResult>> {
    return DefaultApiFp(this.configuration)
      .getAddressTxs(address_hash, filter, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address withdrawals
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressWithdrawals(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<WithdrawalResult>> {
    return DefaultApiFp(this.configuration)
      .getAddressWithdrawals(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get native coin holders list
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddresses(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressWithTxCountResult>> {
    return DefaultApiFp(this.configuration)
      .getAddresses(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get block info
   * @param {string} blockNumberOrHash Block number or hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getBlock(
    blockNumberOrHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Block>> {
    return DefaultApiFp(this.configuration)
      .getBlock(blockNumberOrHash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get block txs
   * @param {string} blockNumberOrHash Block number or hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getBlockTxs(
    blockNumberOrHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TransactionResult>> {
    return DefaultApiFp(this.configuration)
      .getBlockTxs(blockNumberOrHash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get block withdrawals
   * @param {string} blockNumberOrHash Block number or hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getBlockWithdrawals(
    blockNumberOrHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<WithdrawalResult>> {
    return DefaultApiFp(this.configuration)
      .getBlockWithdrawals(blockNumberOrHash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get blocks
   * @param {string} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getBlocks(
    type?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<BlockResult>> {
    return DefaultApiFp(this.configuration)
      .getBlocks(type, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get indexing status
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getIndexingStatus(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<IndexingStatus>> {
    return DefaultApiFp(this.configuration)
      .getIndexingStatus(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get internal txs
   * @param {string} transaction_hash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getInternalTxs(
    transaction_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InternalTransactionResult>> {
    return DefaultApiFp(this.configuration)
      .getInternalTxs(transaction_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get json rpc url
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getJsonRpcUrl(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<JsonRpcUrlResult>> {
    return DefaultApiFp(this.configuration)
      .getJsonRpcUrl(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get logs
   * @param {string} transaction_hash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getLogs(
    transaction_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<LogResult>> {
    return DefaultApiFp(this.configuration)
      .getLogs(transaction_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get main page blocks
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getMainPageTokens(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<Block>>> {
    return DefaultApiFp(this.configuration)
      .getMainPageTokens(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get main page txs
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getMainPageTxs(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<Transaction>>> {
    return DefaultApiFp(this.configuration)
      .getMainPageTxs(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get market chart
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getMarketChart(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<MarketChartResult>> {
    return DefaultApiFp(this.configuration)
      .getMarketChart(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get NFT instance by id
   * @param {string} address_hash Address hash
   * @param {number} id integer id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getNftInstance(
    address_hash: string,
    id: number,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<NFTInstance>> {
    return DefaultApiFp(this.configuration)
      .getNftInstance(address_hash, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get transfers of NFT instance
   * @param {string} address_hash Address hash
   * @param {number} id integer id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getNftInstanceTransfers(
    address_hash: string,
    id: number,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenTransferResult>> {
    return DefaultApiFp(this.configuration)
      .getNftInstanceTransfers(address_hash, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get transfers count of NFT instance
   * @param {string} address_hash Address hash
   * @param {number} id integer id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getNftInstanceTransfersCount(
    address_hash: string,
    id: number,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TransferCountResult>> {
    return DefaultApiFp(this.configuration)
      .getNftInstanceTransfersCount(address_hash, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get NFT instances
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getNftInstances(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<NftInstanceResult>> {
    return DefaultApiFp(this.configuration)
      .getNftInstances(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get raw trace
   * @param {string} transaction_hash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getRawTrace(
    transaction_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<RawTrace>>> {
    return DefaultApiFp(this.configuration)
      .getRawTrace(transaction_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get read methods
   * @param {string} address_hash Address hash
   * @param {string} [isCustomAbi]
   * @param {string} [from]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getReadMethods(
    address_hash: string,
    isCustomAbi?: string,
    from?: string,
    options?: AxiosRequestConfig,
  ): Promise<
    AxiosResponse<Array<ReadMethodWithValue | ReadMethodWithoutValue>>
  > {
    return DefaultApiFp(this.configuration)
      .getReadMethods(address_hash, isCustomAbi, from, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get read methods proxy
   * @param {string} address_hash Address hash
   * @param {string} [isCustomAbi]
   * @param {string} [from]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getReadMethodsProxy(
    address_hash: string,
    isCustomAbi?: string,
    from?: string,
    options?: AxiosRequestConfig,
  ): Promise<
    AxiosResponse<Array<ReadMethodWithValue | ReadMethodWithoutValue>>
  > {
    return DefaultApiFp(this.configuration)
      .getReadMethodsProxy(address_hash, isCustomAbi, from, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get smart contract
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getSmartContract(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<SmartContract>> {
    return DefaultApiFp(this.configuration)
      .getSmartContract(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get verified smart contracts
   * @param {string} [q]
   * @param {string} [filter]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getSmartContracts(
    q?: string,
    filter?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<SmartContractsForListResult>> {
    return DefaultApiFp(this.configuration)
      .getSmartContracts(q, filter, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get verified smart contracts counters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getSmartContractsCounters(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<NewSmartContract24hResult>> {
    return DefaultApiFp(this.configuration)
      .getSmartContractsCounters(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get state changes
   * @param {string} transaction_hash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getStateChanges(
    transaction_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<StateChangeResult>> {
    return DefaultApiFp(this.configuration)
      .getStateChanges(transaction_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get stats counters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getStats(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<StatsResponse>> {
    return DefaultApiFp(this.configuration)
      .getStats(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get token info
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getToken(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenInfo>> {
    return DefaultApiFp(this.configuration)
      .getToken(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get token holders
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenCounters(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenCounters>> {
    return DefaultApiFp(this.configuration)
      .getTokenCounters(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get token holders
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenHolders(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<HolderResult>> {
    return DefaultApiFp(this.configuration)
      .getTokenHolders(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get token instance holders
   * @param {string} address_hash Address hash
   * @param {number} id integer id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenInstanceHolders(
    address_hash: string,
    id: number,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<HolderResult>> {
    return DefaultApiFp(this.configuration)
      .getTokenInstanceHolders(address_hash, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get token token transfers
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenTokenTransfers(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenTransferResult>> {
    return DefaultApiFp(this.configuration)
      .getTokenTokenTransfers(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get token transfers
   * @param {string} transaction_hash Transaction hash
   * @param {string} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenTransfers(
    transaction_hash: string,
    type?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenTransferResult>> {
    return DefaultApiFp(this.configuration)
      .getTokenTransfers(transaction_hash, type, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get tokens list
   * @param {string} [q]
   * @param {string} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokensList(
    q?: string,
    type?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenInfoResult>> {
    return DefaultApiFp(this.configuration)
      .getTokensList(q, type, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get tx info
   * @param {string} transaction_hash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTx(
    transaction_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Transaction>> {
    return DefaultApiFp(this.configuration)
      .getTx(transaction_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get txs
   * @param {string} [filter]
   * @param {string} [type]
   * @param {string} [method]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTxs(
    filter?: string,
    type?: string,
    method?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TransactionResult>> {
    return DefaultApiFp(this.configuration)
      .getTxs(filter, type, method, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get txs chart
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTxsChart(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TransactionChartResult>> {
    return DefaultApiFp(this.configuration)
      .getTxsChart(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get withdrawals
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getWithdrawals(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<WithdrawalResult>> {
    return DefaultApiFp(this.configuration)
      .getWithdrawals(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get write methods
   * @param {string} address_hash Address hash
   * @param {string} [isCustomAbi]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getWriteMethods(
    address_hash: string,
    isCustomAbi?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<WriteMethod>>> {
    return DefaultApiFp(this.configuration)
      .getWriteMethods(address_hash, isCustomAbi, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get write methods proxy
   * @param {string} address_hash Address hash
   * @param {string} [isCustomAbi]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getWriteMethodsProxy(
    address_hash: string,
    isCustomAbi?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<WriteMethod>>> {
    return DefaultApiFp(this.configuration)
      .getWriteMethodsProxy(address_hash, isCustomAbi, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary query read method
   * @param {ReadMethodQueryBody} body
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async queryReadMethod(
    body: ReadMethodQueryBody,
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<ReadMethodResponse>>> {
    return DefaultApiFp(this.configuration)
      .queryReadMethod(body, address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary search
   * @param {string} [q]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async search(
    q?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<SearchResult>> {
    return DefaultApiFp(this.configuration)
      .search(q, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary search redirect
   * @param {string} [q]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async searchRedirect(
    q?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<SearchResultRedirect>> {
    return DefaultApiFp(this.configuration)
      .searchRedirect(q, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
