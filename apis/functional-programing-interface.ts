import globalAxios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios'

import { BASE_PATH } from '../base'
import { Configuration } from '../configuration'
import { DefaultApiAxiosParamCreator } from './axios-parameter-creator'

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
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function (configuration?: Configuration) {
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Address>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddress(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<BlockResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressBlocksValidated(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<CoinBalanceHistoryEntryResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressCoinBalanceHistory(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<CoinBalanceHistoryByDaysEntry>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressCoinBalanceHistoryByDay(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressCounters>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressCounters(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InternalTransactionResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressInternalTxs(address_hash, filter, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<LogResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressLogs(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<TokenBalance>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressTokenBalances(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenTransferResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressTokenTransfers(address_hash, type, filter, token, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenBalanceResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressTokens(address_hash, type, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TransactionResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressTxs(address_hash, filter, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<WithdrawalResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressWithdrawals(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary get native coin holders list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddresses(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressWithTxCountResult>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getAddresses(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Block>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getBlock(blockNumberOrHash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TransactionResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getBlockTxs(blockNumberOrHash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<WithdrawalResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getBlockWithdrawals(blockNumberOrHash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<BlockResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getBlocks(type, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary get indexing status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getIndexingStatus(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<IndexingStatus>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getIndexingStatus(
          options,
        )
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InternalTransactionResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getInternalTxs(transaction_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary get json rpc url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getJsonRpcUrl(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<JsonRpcUrlResult>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getJsonRpcUrl(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<LogResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getLogs(transaction_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary get main page blocks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMainPageTokens(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<Block>>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getMainPageTokens(
          options,
        )
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary get main page txs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMainPageTxs(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<Transaction>>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getMainPageTxs(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary get market chart
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMarketChart(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<MarketChartResult>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getMarketChart(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<NFTInstance>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getNftInstance(address_hash, id, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenTransferResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getNftInstanceTransfers(address_hash, id, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TransferCountResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getNftInstanceTransfersCount(address_hash, id, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<NftInstanceResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getNftInstances(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<RawTrace>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getRawTrace(transaction_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<
        AxiosResponse<Array<ReadMethodWithValue | ReadMethodWithoutValue>>
      >
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getReadMethods(address_hash, isCustomAbi, from, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<
        AxiosResponse<Array<ReadMethodWithValue | ReadMethodWithoutValue>>
      >
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getReadMethodsProxy(address_hash, isCustomAbi, from, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<SmartContract>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getSmartContract(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<SmartContractsForListResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getSmartContracts(q, filter, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary get verified smart contracts counters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSmartContractsCounters(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<NewSmartContract24hResult>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(
          configuration,
        ).getSmartContractsCounters(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<StateChangeResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getStateChanges(transaction_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary get stats counters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getStats(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<StatsResponse>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getStats(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenInfo>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getToken(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenCounters>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenCounters(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<HolderResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenHolders(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<HolderResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenInstanceHolders(address_hash, id, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenTransferResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenTokenTransfers(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenTransferResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenTransfers(transaction_hash, type, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenInfoResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokensList(q, type, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Transaction>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTx(transaction_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TransactionResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTxs(filter, type, method, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary get txs chart
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTxsChart(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TransactionChartResult>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getTxsChart(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary get withdrawals
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWithdrawals(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<WithdrawalResult>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getWithdrawals(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<WriteMethod>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getWriteMethods(address_hash, isCustomAbi, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<WriteMethod>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getWriteMethodsProxy(address_hash, isCustomAbi, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<ReadMethodResponse>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).queryReadMethod(body, address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<SearchResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).search(q, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<SearchResultRedirect>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).searchRedirect(q, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
  }
}
