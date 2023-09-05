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
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function (configuration?: Configuration) {
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Address>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddress(addressHash, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressBlocksValidated(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20015>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressBlocksValidated(addressHash, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressCoinBalanceHistory(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20017>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressCoinBalanceHistory(addressHash, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressCoinBalanceHistoryByDay(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<CoinBalanceHistoryByDaysEntry>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressCoinBalanceHistoryByDay(addressHash, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressCounters(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressCounters>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressCounters(addressHash, options)
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
     * @param {string} addressHash Address hash
     * @param {string} [filter]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressInternalTxs(
      addressHash: string,
      filter?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20013>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressInternalTxs(addressHash, filter, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressLogs(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20014>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressLogs(addressHash, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressTokenBalances(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<TokenBalance>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressTokenBalances(addressHash, options)
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
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20012>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressTokenTransfers(addressHash, type, filter, token, options)
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
     * @param {string} addressHash Address hash
     * @param {string} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressTokens(
      addressHash: string,
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20016>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressTokens(addressHash, type, options)
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
     * @param {string} addressHash Address hash
     * @param {string} [filter]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressTxs(
      addressHash: string,
      filter?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse2009>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressTxs(addressHash, filter, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAddressWithdrawals(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20010>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressWithdrawals(addressHash, options)
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
      ) => Promise<AxiosResponse<InlineResponse20011>>
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
      ) => Promise<AxiosResponse<InlineResponse2009>>
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
      ) => Promise<AxiosResponse<InlineResponse20010>>
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
      ) => Promise<AxiosResponse<InlineResponse2002>>
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
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInternalTxs(
      transactionHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse2006>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getInternalTxs(transactionHash, options)
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
      ) => Promise<AxiosResponse<InlineResponse20027>>
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
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLogs(
      transactionHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse2007>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getLogs(transactionHash, options)
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
      ) => Promise<AxiosResponse<InlineResponse2004>>
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
     * @param {string} addressHash Address hash
     * @param {number} id integer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNftInstance(
      addressHash: string,
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
      ).getNftInstance(addressHash, id, options)
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
     * @param {string} addressHash Address hash
     * @param {number} id integer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNftInstanceTransfers(
      addressHash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20022>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getNftInstanceTransfers(addressHash, id, options)
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
     * @param {string} addressHash Address hash
     * @param {number} id integer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNftInstanceTransfersCount(
      addressHash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20024>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getNftInstanceTransfersCount(addressHash, id, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNftInstances(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20021>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getNftInstances(addressHash, options)
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
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRawTrace(
      transactionHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<RawTrace>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getRawTrace(transactionHash, options)
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
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<
        AxiosResponse<Array<ReadMethodWithValue | ReadMethodWithoutValue>>
      >
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getReadMethods(addressHash, isCustomAbi, from, options)
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
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<
        AxiosResponse<Array<ReadMethodWithValue | ReadMethodWithoutValue>>
      >
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getReadMethodsProxy(addressHash, isCustomAbi, from, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSmartContract(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<SmartContract>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getSmartContract(addressHash, options)
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
      ) => Promise<AxiosResponse<InlineResponse20025>>
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
      ) => Promise<AxiosResponse<InlineResponse20026>>
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
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getStateChanges(
      transactionHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse2008>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getStateChanges(transactionHash, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getToken(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenInfo>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getToken(addressHash, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenCounters(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenCounters>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenCounters(addressHash, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenHolders(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20020>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenHolders(addressHash, options)
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
     * @param {string} addressHash Address hash
     * @param {number} id integer id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenInstanceHolders(
      addressHash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20023>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenInstanceHolders(addressHash, id, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenTokenTransfers(
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse20019>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenTokenTransfers(addressHash, options)
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
     * @param {string} transactionHash Transaction hash
     * @param {string} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTokenTransfers(
      transactionHash: string,
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InlineResponse2005>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenTransfers(transactionHash, type, options)
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
      ) => Promise<AxiosResponse<InlineResponse20018>>
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
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTx(
      transactionHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Transaction>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTx(transactionHash, options)
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
      ) => Promise<AxiosResponse<InlineResponse2001>>
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
      ) => Promise<AxiosResponse<InlineResponse2003>>
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
      ) => Promise<AxiosResponse<InlineResponse20010>>
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
     * @param {string} addressHash Address hash
     * @param {string} [isCustomAbi]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWriteMethods(
      addressHash: string,
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
      ).getWriteMethods(addressHash, isCustomAbi, options)
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
     * @param {string} addressHash Address hash
     * @param {string} [isCustomAbi]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWriteMethodsProxy(
      addressHash: string,
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
      ).getWriteMethodsProxy(addressHash, isCustomAbi, options)
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
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryReadMethod(
      body: ReadMethodQueryBody,
      addressHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<ReadMethodResponse>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).queryReadMethod(body, addressHash, options)
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
      ) => Promise<AxiosResponse<InlineResponse200>>
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
