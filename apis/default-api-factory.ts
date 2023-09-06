import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { Configuration } from '../configuration'
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
  SearchResultRedirect,
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
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  return {
    /**
     *
     * @summary get address info
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddress(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Address>> {
      return DefaultApiFp(configuration)
        .getAddress(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get blocks validated by address
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressBlocksValidated(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<BlockResult>> {
      return DefaultApiFp(configuration)
        .getAddressBlocksValidated(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address coin balance history
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressCoinBalanceHistory(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<CoinBalanceHistoryEntryResult>> {
      return DefaultApiFp(configuration)
        .getAddressCoinBalanceHistory(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address coin balance history by day
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressCoinBalanceHistoryByDay(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<CoinBalanceHistoryByDaysEntry>>> {
      return DefaultApiFp(configuration)
        .getAddressCoinBalanceHistoryByDay(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address counters
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressCounters(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<AddressCounters>> {
      return DefaultApiFp(configuration)
        .getAddressCounters(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address internal txs
     * @param {string} address_hash Address hash
     * @param {string} [filter]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressInternalTxs(
      address_hash: string,
      filter?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InternalTransactionResult>> {
      return DefaultApiFp(configuration)
        .getAddressInternalTxs(address_hash, filter, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address logs
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressLogs(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<LogResult>> {
      return DefaultApiFp(configuration)
        .getAddressLogs(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get blocks validated by address
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressTokenBalances(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<TokenBalance>>> {
      return DefaultApiFp(configuration)
        .getAddressTokenBalances(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address token transfers
     * @param {string} address_hash Address hash
     * @param {string} [type]
     * @param {string} [filter]
     * @param {string} [token]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressTokenTransfers(
      address_hash: string,
      type?: string,
      filter?: string,
      token?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TokenTransferResult>> {
      return DefaultApiFp(configuration)
        .getAddressTokenTransfers(address_hash, type, filter, token, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get blocks validated by address
     * @param {string} address_hash Address hash
     * @param {string} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressTokens(
      address_hash: string,
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TokenBalanceResult>> {
      return DefaultApiFp(configuration)
        .getAddressTokens(address_hash, type, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address txs
     * @param {string} address_hash Address hash
     * @param {string} [filter]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressTxs(
      address_hash: string,
      filter?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TransactionResult>> {
      return DefaultApiFp(configuration)
        .getAddressTxs(address_hash, filter, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address withdrawals
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressWithdrawals(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<WithdrawalResult>> {
      return DefaultApiFp(configuration)
        .getAddressWithdrawals(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get native coin holders list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddresses(
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<AddressWithTxCountResult>> {
      return DefaultApiFp(configuration)
        .getAddresses(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get block info
     * @param {string} blockNumberOrHash Block number or hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBlock(
      blockNumberOrHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Block>> {
      return DefaultApiFp(configuration)
        .getBlock(blockNumberOrHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get block txs
     * @param {string} blockNumberOrHash Block number or hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBlockTxs(
      blockNumberOrHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TransactionResult>> {
      return DefaultApiFp(configuration)
        .getBlockTxs(blockNumberOrHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get block withdrawals
     * @param {string} blockNumberOrHash Block number or hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBlockWithdrawals(
      blockNumberOrHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<WithdrawalResult>> {
      return DefaultApiFp(configuration)
        .getBlockWithdrawals(blockNumberOrHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get blocks
     * @param {string} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBlocks(
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<BlockResult>> {
      return DefaultApiFp(configuration)
        .getBlocks(type, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get indexing status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getIndexingStatus(
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<IndexingStatus>> {
      return DefaultApiFp(configuration)
        .getIndexingStatus(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get internal txs
     * @param {string} transaction_hash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInternalTxs(
      transaction_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InternalTransactionResult>> {
      return DefaultApiFp(configuration)
        .getInternalTxs(transaction_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get json rpc url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getJsonRpcUrl(
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<JsonRpcUrlResult>> {
      return DefaultApiFp(configuration)
        .getJsonRpcUrl(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get logs
     * @param {string} transaction_hash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLogs(
      transaction_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<LogResult>> {
      return DefaultApiFp(configuration)
        .getLogs(transaction_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get main page blocks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMainPageTokens(
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<Block>>> {
      return DefaultApiFp(configuration)
        .getMainPageTokens(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get main page txs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMainPageTxs(
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<Transaction>>> {
      return DefaultApiFp(configuration)
        .getMainPageTxs(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get market chart
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMarketChart(
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<MarketChartResult>> {
      return DefaultApiFp(configuration)
        .getMarketChart(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get NFT instance by id
     * @param {string} address_hash Address hash
     * @param {number} id integer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNftInstance(
      address_hash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<NFTInstance>> {
      return DefaultApiFp(configuration)
        .getNftInstance(address_hash, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get transfers of NFT instance
     * @param {string} address_hash Address hash
     * @param {number} id integer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNftInstanceTransfers(
      address_hash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TokenTransferResult>> {
      return DefaultApiFp(configuration)
        .getNftInstanceTransfers(address_hash, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get transfers count of NFT instance
     * @param {string} address_hash Address hash
     * @param {number} id integer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNftInstanceTransfersCount(
      address_hash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TransferCountResult>> {
      return DefaultApiFp(configuration)
        .getNftInstanceTransfersCount(address_hash, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get NFT instances
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNftInstances(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<NftInstanceResult>> {
      return DefaultApiFp(configuration)
        .getNftInstances(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get raw trace
     * @param {string} transaction_hash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRawTrace(
      transaction_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<RawTrace>>> {
      return DefaultApiFp(configuration)
        .getRawTrace(transaction_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get read methods
     * @param {string} address_hash Address hash
     * @param {string} [isCustomAbi]
     * @param {string} [from]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReadMethods(
      address_hash: string,
      isCustomAbi?: string,
      from?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      AxiosResponse<Array<ReadMethodWithValue | ReadMethodWithoutValue>>
    > {
      return DefaultApiFp(configuration)
        .getReadMethods(address_hash, isCustomAbi, from, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get read methods proxy
     * @param {string} address_hash Address hash
     * @param {string} [isCustomAbi]
     * @param {string} [from]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReadMethodsProxy(
      address_hash: string,
      isCustomAbi?: string,
      from?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      AxiosResponse<Array<ReadMethodWithValue | ReadMethodWithoutValue>>
    > {
      return DefaultApiFp(configuration)
        .getReadMethodsProxy(address_hash, isCustomAbi, from, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get smart contract
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSmartContract(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<SmartContract>> {
      return DefaultApiFp(configuration)
        .getSmartContract(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get verified smart contracts
     * @param {string} [q]
     * @param {string} [filter]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSmartContracts(
      q?: string,
      filter?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<SmartContractsForListResult>> {
      return DefaultApiFp(configuration)
        .getSmartContracts(q, filter, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get verified smart contracts counters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSmartContractsCounters(
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<NewSmartContract24hResult>> {
      return DefaultApiFp(configuration)
        .getSmartContractsCounters(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get state changes
     * @param {string} transaction_hash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getStateChanges(
      transaction_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<StateChangeResult>> {
      return DefaultApiFp(configuration)
        .getStateChanges(transaction_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get stats counters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getStats(
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<StatsResponse>> {
      return DefaultApiFp(configuration)
        .getStats(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get token info
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getToken(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TokenInfo>> {
      return DefaultApiFp(configuration)
        .getToken(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get token holders
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenCounters(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TokenCounters>> {
      return DefaultApiFp(configuration)
        .getTokenCounters(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get token holders
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenHolders(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<HolderResult>> {
      return DefaultApiFp(configuration)
        .getTokenHolders(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get token instance holders
     * @param {string} address_hash Address hash
     * @param {number} id integer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenInstanceHolders(
      address_hash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<HolderResult>> {
      return DefaultApiFp(configuration)
        .getTokenInstanceHolders(address_hash, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get token token transfers
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenTokenTransfers(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TokenTransferResult>> {
      return DefaultApiFp(configuration)
        .getTokenTokenTransfers(address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get token transfers
     * @param {string} transaction_hash Transaction hash
     * @param {string} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenTransfers(
      transaction_hash: string,
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TokenTransferResult>> {
      return DefaultApiFp(configuration)
        .getTokenTransfers(transaction_hash, type, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get tokens list
     * @param {string} [q]
     * @param {string} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokensList(
      q?: string,
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TokenInfoResult>> {
      return DefaultApiFp(configuration)
        .getTokensList(q, type, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get tx info
     * @param {string} transaction_hash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTx(
      transaction_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Transaction>> {
      return DefaultApiFp(configuration)
        .getTx(transaction_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get txs
     * @param {string} [filter]
     * @param {string} [type]
     * @param {string} [method]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTxs(
      filter?: string,
      type?: string,
      method?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TransactionResult>> {
      return DefaultApiFp(configuration)
        .getTxs(filter, type, method, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get txs chart
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTxsChart(
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TransactionChartResult>> {
      return DefaultApiFp(configuration)
        .getTxsChart(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get withdrawals
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWithdrawals(
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<WithdrawalResult>> {
      return DefaultApiFp(configuration)
        .getWithdrawals(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get write methods
     * @param {string} address_hash Address hash
     * @param {string} [isCustomAbi]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWriteMethods(
      address_hash: string,
      isCustomAbi?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<WriteMethod>>> {
      return DefaultApiFp(configuration)
        .getWriteMethods(address_hash, isCustomAbi, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get write methods proxy
     * @param {string} address_hash Address hash
     * @param {string} [isCustomAbi]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWriteMethodsProxy(
      address_hash: string,
      isCustomAbi?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<WriteMethod>>> {
      return DefaultApiFp(configuration)
        .getWriteMethodsProxy(address_hash, isCustomAbi, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary query read method
     * @param {ReadMethodQueryBody} body
     * @param {string} address_hash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryReadMethod(
      body: ReadMethodQueryBody,
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<ReadMethodResponse>>> {
      return DefaultApiFp(configuration)
        .queryReadMethod(body, address_hash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary search
     * @param {string} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async search(
      q?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<SearchResult>> {
      return DefaultApiFp(configuration)
        .search(q, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary search redirect
     * @param {string} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchRedirect(
      q?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<SearchResultRedirect>> {
      return DefaultApiFp(configuration)
        .searchRedirect(q, options)
        .then((request) => request(axios, basePath))
    },
  }
}
