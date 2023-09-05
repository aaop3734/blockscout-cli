import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { Configuration } from '../configuration'
import { DefaultApiFp } from './funcionnal-programing-interface'

import {
  Address,
  AddressCounters,
  Block,
  CoinBalanceHistoryByDaysEntry,
  IndexingStatus,
  InlineResponse200,
  InlineResponse2001,
  InlineResponse20010,
  InlineResponse20011,
  InlineResponse20012,
  InlineResponse20013,
  InlineResponse20014,
  InlineResponse20015,
  InlineResponse20016,
  InlineResponse20017,
  InlineResponse20018,
  InlineResponse20019,
  InlineResponse2002,
  InlineResponse20020,
  InlineResponse20021,
  InlineResponse20022,
  InlineResponse20023,
  InlineResponse20024,
  InlineResponse20025,
  InlineResponse20026,
  InlineResponse20027,
  InlineResponse2003,
  InlineResponse2004,
  InlineResponse2005,
  InlineResponse2006,
  InlineResponse2007,
  InlineResponse2008,
  InlineResponse2009,
  NFTInstance,
  RawTrace,
  ReadMethodQueryBody,
  ReadMethodResponse,
  ReadMethodWithoutValue,
  ReadMethodWithValue,
  SearchResultRedirect,
  SmartContract,
  StatsResponse,
  TokenBalance,
  TokenCounters,
  TokenInfo,
  Transaction,
  WriteMethod,
} from '../models'

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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddress(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Address>> {
      return DefaultApiFp(configuration)
        .getAddress(addressHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get blocks validated by address
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressBlocksValidated(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20015>> {
      return DefaultApiFp(configuration)
        .getAddressBlocksValidated(addressHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address coin balance history
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressCoinBalanceHistory(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20017>> {
      return DefaultApiFp(configuration)
        .getAddressCoinBalanceHistory(addressHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address coin balance history by day
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressCoinBalanceHistoryByDay(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<CoinBalanceHistoryByDaysEntry>>> {
      return DefaultApiFp(configuration)
        .getAddressCoinBalanceHistoryByDay(addressHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address counters
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressCounters(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<AddressCounters>> {
      return DefaultApiFp(configuration)
        .getAddressCounters(addressHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address internal txs
     * @param {string} addressHash Address hash
     * @param {string} [filter]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressInternalTxs(
      addressHash: string,
      filter?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20013>> {
      return DefaultApiFp(configuration)
        .getAddressInternalTxs(addressHash, filter, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address logs
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressLogs(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20014>> {
      return DefaultApiFp(configuration)
        .getAddressLogs(addressHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get blocks validated by address
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressTokenBalances(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<TokenBalance>>> {
      return DefaultApiFp(configuration)
        .getAddressTokenBalances(addressHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address token transfers
     * @param {string} addressHash Address hash
     * @param {string} [type]
     * @param {string} [filter]
     * @param {string} [token]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressTokenTransfers(
      addressHash: string,
      type?: string,
      filter?: string,
      token?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20012>> {
      return DefaultApiFp(configuration)
        .getAddressTokenTransfers(addressHash, type, filter, token, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get blocks validated by address
     * @param {string} addressHash Address hash
     * @param {string} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressTokens(
      addressHash: string,
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20016>> {
      return DefaultApiFp(configuration)
        .getAddressTokens(addressHash, type, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address txs
     * @param {string} addressHash Address hash
     * @param {string} [filter]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressTxs(
      addressHash: string,
      filter?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse2009>> {
      return DefaultApiFp(configuration)
        .getAddressTxs(addressHash, filter, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get address withdrawals
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressWithdrawals(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20010>> {
      return DefaultApiFp(configuration)
        .getAddressWithdrawals(addressHash, options)
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
    ): Promise<AxiosResponse<InlineResponse20011>> {
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
    ): Promise<AxiosResponse<InlineResponse2009>> {
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
    ): Promise<AxiosResponse<InlineResponse20010>> {
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
    ): Promise<AxiosResponse<InlineResponse2002>> {
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
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInternalTxs(
      transactionHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse2006>> {
      return DefaultApiFp(configuration)
        .getInternalTxs(transactionHash, options)
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
    ): Promise<AxiosResponse<InlineResponse20027>> {
      return DefaultApiFp(configuration)
        .getJsonRpcUrl(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get logs
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLogs(
      transactionHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse2007>> {
      return DefaultApiFp(configuration)
        .getLogs(transactionHash, options)
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
    ): Promise<AxiosResponse<InlineResponse2004>> {
      return DefaultApiFp(configuration)
        .getMarketChart(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get NFT instance by id
     * @param {string} addressHash Address hash
     * @param {number} id integer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNftInstance(
      addressHash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<NFTInstance>> {
      return DefaultApiFp(configuration)
        .getNftInstance(addressHash, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get transfers of NFT instance
     * @param {string} addressHash Address hash
     * @param {number} id integer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNftInstanceTransfers(
      addressHash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20022>> {
      return DefaultApiFp(configuration)
        .getNftInstanceTransfers(addressHash, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get transfers count of NFT instance
     * @param {string} addressHash Address hash
     * @param {number} id integer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNftInstanceTransfersCount(
      addressHash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20024>> {
      return DefaultApiFp(configuration)
        .getNftInstanceTransfersCount(addressHash, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get NFT instances
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNftInstances(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20021>> {
      return DefaultApiFp(configuration)
        .getNftInstances(addressHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get raw trace
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRawTrace(
      transactionHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<RawTrace>>> {
      return DefaultApiFp(configuration)
        .getRawTrace(transactionHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get read methods
     * @param {string} addressHash Address hash
     * @param {string} [isCustomAbi]
     * @param {string} [from]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReadMethods(
      addressHash: string,
      isCustomAbi?: string,
      from?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      AxiosResponse<Array<ReadMethodWithValue | ReadMethodWithoutValue>>
    > {
      return DefaultApiFp(configuration)
        .getReadMethods(addressHash, isCustomAbi, from, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get read methods proxy
     * @param {string} addressHash Address hash
     * @param {string} [isCustomAbi]
     * @param {string} [from]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReadMethodsProxy(
      addressHash: string,
      isCustomAbi?: string,
      from?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      AxiosResponse<Array<ReadMethodWithValue | ReadMethodWithoutValue>>
    > {
      return DefaultApiFp(configuration)
        .getReadMethodsProxy(addressHash, isCustomAbi, from, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get smart contract
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSmartContract(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<SmartContract>> {
      return DefaultApiFp(configuration)
        .getSmartContract(addressHash, options)
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
    ): Promise<AxiosResponse<InlineResponse20025>> {
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
    ): Promise<AxiosResponse<InlineResponse20026>> {
      return DefaultApiFp(configuration)
        .getSmartContractsCounters(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get state changes
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getStateChanges(
      transactionHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse2008>> {
      return DefaultApiFp(configuration)
        .getStateChanges(transactionHash, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getToken(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TokenInfo>> {
      return DefaultApiFp(configuration)
        .getToken(addressHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get token holders
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenCounters(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<TokenCounters>> {
      return DefaultApiFp(configuration)
        .getTokenCounters(addressHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get token holders
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenHolders(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20020>> {
      return DefaultApiFp(configuration)
        .getTokenHolders(addressHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get token instance holders
     * @param {string} addressHash Address hash
     * @param {number} id integer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenInstanceHolders(
      addressHash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20023>> {
      return DefaultApiFp(configuration)
        .getTokenInstanceHolders(addressHash, id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get token token transfers
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenTokenTransfers(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse20019>> {
      return DefaultApiFp(configuration)
        .getTokenTokenTransfers(addressHash, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get token transfers
     * @param {string} transactionHash Transaction hash
     * @param {string} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenTransfers(
      transactionHash: string,
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<InlineResponse2005>> {
      return DefaultApiFp(configuration)
        .getTokenTransfers(transactionHash, type, options)
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
    ): Promise<AxiosResponse<InlineResponse20018>> {
      return DefaultApiFp(configuration)
        .getTokensList(q, type, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get tx info
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTx(
      transactionHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Transaction>> {
      return DefaultApiFp(configuration)
        .getTx(transactionHash, options)
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
    ): Promise<AxiosResponse<InlineResponse2001>> {
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
    ): Promise<AxiosResponse<InlineResponse2003>> {
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
    ): Promise<AxiosResponse<InlineResponse20010>> {
      return DefaultApiFp(configuration)
        .getWithdrawals(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get write methods
     * @param {string} addressHash Address hash
     * @param {string} [isCustomAbi]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWriteMethods(
      addressHash: string,
      isCustomAbi?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<WriteMethod>>> {
      return DefaultApiFp(configuration)
        .getWriteMethods(addressHash, isCustomAbi, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary get write methods proxy
     * @param {string} addressHash Address hash
     * @param {string} [isCustomAbi]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWriteMethodsProxy(
      addressHash: string,
      isCustomAbi?: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<WriteMethod>>> {
      return DefaultApiFp(configuration)
        .getWriteMethodsProxy(addressHash, isCustomAbi, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary query read method
     * @param {ReadMethodQueryBody} body
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryReadMethod(
      body: ReadMethodQueryBody,
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Array<ReadMethodResponse>>> {
      return DefaultApiFp(configuration)
        .queryReadMethod(body, addressHash, options)
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
    ): Promise<AxiosResponse<InlineResponse200>> {
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
