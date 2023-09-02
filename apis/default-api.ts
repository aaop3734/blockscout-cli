import globalAxios, {
  AxiosResponse,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios'

import { Configuration } from '../configuration'

import { BASE_PATH, BaseAPI, RequiredError, type RequestArgs } from '../base'

import { Address } from '../models'
import { AddressCounters } from '../models'
import { Block } from '../models'
import { CoinBalanceHistoryByDaysEntry } from '../models'
import { IndexingStatus } from '../models'
import { InlineResponse200 } from '../models'
import { InlineResponse2001 } from '../models'
import { InlineResponse20010 } from '../models'
import { InlineResponse20011 } from '../models'
import { InlineResponse20012 } from '../models'
import { InlineResponse20013 } from '../models'
import { InlineResponse20014 } from '../models'
import { InlineResponse20015 } from '../models'
import { InlineResponse20016 } from '../models'
import { InlineResponse20017 } from '../models'
import { InlineResponse20018 } from '../models'
import { InlineResponse20019 } from '../models'
import { InlineResponse2002 } from '../models'
import { InlineResponse20020 } from '../models'
import { InlineResponse20021 } from '../models'
import { InlineResponse20022 } from '../models'
import { InlineResponse20023 } from '../models'
import { InlineResponse20024 } from '../models'
import { InlineResponse20025 } from '../models'
import { InlineResponse20026 } from '../models'
import { InlineResponse20027 } from '../models'
import { InlineResponse2003 } from '../models'
import { InlineResponse2004 } from '../models'
import { InlineResponse2005 } from '../models'
import { InlineResponse2006 } from '../models'
import { InlineResponse2007 } from '../models'
import { InlineResponse2008 } from '../models'
import { InlineResponse2009 } from '../models'
import { NFTInstance } from '../models'
import { RawTrace } from '../models'
import { ReadMethodQueryBody } from '../models'
import { ReadMethodResponse } from '../models'
import { ReadMethodWithValue, ReadMethodWithoutValue } from '../models'
import { SearchResultRedirect } from '../models'
import { SmartContract } from '../models'
import { StatsResponse } from '../models'
import { TokenBalance } from '../models'
import { TokenCounters } from '../models'
import { TokenInfo } from '../models'
import { Transaction } from '../models'
import { WriteMethod } from '../models'

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @summary get address info
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAddress: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getAddress.',
        )
      }
      const localVarPath = `/addresses/{address_hash}`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get blocks validated by address
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAddressBlocksValidated: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getAddressBlocksValidated.',
        )
      }
      const localVarPath = `/addresses/{address_hash}/blocks-validated`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get address coin balance history
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAddressCoinBalanceHistory: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getAddressCoinBalanceHistory.',
        )
      }
      const localVarPath =
        `/addresses/{address_hash}/coin-balance-history`.replace(
          `{${'address_hash'}}`,
          encodeURIComponent(String(addressHash)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get address coin balance history by day
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAddressCoinBalanceHistoryByDay: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getAddressCoinBalanceHistoryByDay.',
        )
      }
      const localVarPath =
        `/addresses/{address_hash}/coin-balance-history-by-day`.replace(
          `{${'address_hash'}}`,
          encodeURIComponent(String(addressHash)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get address counters
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAddressCounters: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getAddressCounters.',
        )
      }
      const localVarPath = `/addresses/{address_hash}/counters`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getAddressInternalTxs: async (
      addressHash: string,
      filter?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getAddressInternalTxs.',
        )
      }
      const localVarPath =
        `/addresses/{address_hash}/internal-transactions`.replace(
          `{${'address_hash'}}`,
          encodeURIComponent(String(addressHash)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get address logs
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAddressLogs: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getAddressLogs.',
        )
      }
      const localVarPath = `/addresses/{address_hash}/logs`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get blocks validated by address
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAddressTokenBalances: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getAddressTokenBalances.',
        )
      }
      const localVarPath = `/addresses/{address_hash}/token-balances`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getAddressTokenTransfers: async (
      addressHash: string,
      type?: string,
      filter?: string,
      token?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getAddressTokenTransfers.',
        )
      }
      const localVarPath = `/addresses/{address_hash}/token-transfers`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (type !== undefined) {
        localVarQueryParameter['type'] = type
      }

      if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter
      }

      if (token !== undefined) {
        localVarQueryParameter['token'] = token
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getAddressTokens: async (
      addressHash: string,
      type?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getAddressTokens.',
        )
      }
      const localVarPath = `/addresses/{address_hash}/tokens`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (type !== undefined) {
        localVarQueryParameter['type'] = type
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getAddressTxs: async (
      addressHash: string,
      filter?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getAddressTxs.',
        )
      }
      const localVarPath = `/addresses/{address_hash}/transactions`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get address withdrawals
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAddressWithdrawals: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getAddressWithdrawals.',
        )
      }
      const localVarPath = `/addresses/{address_hash}/withdrawals`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get native coin holders list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAddresses: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/addresses`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get block info
     * @param {string} blockNumberOrHash Block number or hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBlock: async (
      blockNumberOrHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'blockNumberOrHash' is not null or undefined
      if (blockNumberOrHash === null || blockNumberOrHash === undefined) {
        throw new RequiredError(
          'blockNumberOrHash',
          'Required parameter blockNumberOrHash was null or undefined when calling getBlock.',
        )
      }
      const localVarPath = `/blocks/{block_number_or_hash}`.replace(
        `{${'block_number_or_hash'}}`,
        encodeURIComponent(String(blockNumberOrHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get block txs
     * @param {string} blockNumberOrHash Block number or hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBlockTxs: async (
      blockNumberOrHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'blockNumberOrHash' is not null or undefined
      if (blockNumberOrHash === null || blockNumberOrHash === undefined) {
        throw new RequiredError(
          'blockNumberOrHash',
          'Required parameter blockNumberOrHash was null or undefined when calling getBlockTxs.',
        )
      }
      const localVarPath =
        `/blocks/{block_number_or_hash}/transactions`.replace(
          `{${'block_number_or_hash'}}`,
          encodeURIComponent(String(blockNumberOrHash)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get block withdrawals
     * @param {string} blockNumberOrHash Block number or hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBlockWithdrawals: async (
      blockNumberOrHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'blockNumberOrHash' is not null or undefined
      if (blockNumberOrHash === null || blockNumberOrHash === undefined) {
        throw new RequiredError(
          'blockNumberOrHash',
          'Required parameter blockNumberOrHash was null or undefined when calling getBlockWithdrawals.',
        )
      }
      const localVarPath = `/blocks/{block_number_or_hash}/withdrawals`.replace(
        `{${'block_number_or_hash'}}`,
        encodeURIComponent(String(blockNumberOrHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get blocks
     * @param {string} [type]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBlocks: async (
      type?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/blocks`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (type !== undefined) {
        localVarQueryParameter['type'] = type
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get indexing status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIndexingStatus: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/main-page/indexing-status`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get internal txs
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInternalTxs: async (
      transactionHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'transactionHash' is not null or undefined
      if (transactionHash === null || transactionHash === undefined) {
        throw new RequiredError(
          'transactionHash',
          'Required parameter transactionHash was null or undefined when calling getInternalTxs.',
        )
      }
      const localVarPath =
        `/transactions/{transaction_hash}/internal-transactions`.replace(
          `{${'transaction_hash'}}`,
          encodeURIComponent(String(transactionHash)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get json rpc url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getJsonRpcUrl: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/config/json-rpc-url`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get logs
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLogs: async (
      transactionHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'transactionHash' is not null or undefined
      if (transactionHash === null || transactionHash === undefined) {
        throw new RequiredError(
          'transactionHash',
          'Required parameter transactionHash was null or undefined when calling getLogs.',
        )
      }
      const localVarPath = `/transactions/{transaction_hash}/logs`.replace(
        `{${'transaction_hash'}}`,
        encodeURIComponent(String(transactionHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get main page blocks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMainPageTokens: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/main-page/blocks`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get main page txs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMainPageTxs: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/main-page/transactions`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get market chart
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMarketChart: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/stats/charts/market`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getNftInstance: async (
      addressHash: string,
      id: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getNftInstance.',
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling getNftInstance.',
        )
      }
      const localVarPath = `/tokens/{address_hash}/instances/{id}`
        .replace(`{${'address_hash'}}`, encodeURIComponent(String(addressHash)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getNftInstanceTransfers: async (
      addressHash: string,
      id: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getNftInstanceTransfers.',
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling getNftInstanceTransfers.',
        )
      }
      const localVarPath = `/tokens/{address_hash}/instances/{id}/transfers`
        .replace(`{${'address_hash'}}`, encodeURIComponent(String(addressHash)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getNftInstanceTransfersCount: async (
      addressHash: string,
      id: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getNftInstanceTransfersCount.',
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling getNftInstanceTransfersCount.',
        )
      }
      const localVarPath =
        `/tokens/{address_hash}/instances/{id}/transfers-count`
          .replace(
            `{${'address_hash'}}`,
            encodeURIComponent(String(addressHash)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get NFT instances
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNftInstances: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getNftInstances.',
        )
      }
      const localVarPath = `/tokens/{address_hash}/instances`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get raw trace
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRawTrace: async (
      transactionHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'transactionHash' is not null or undefined
      if (transactionHash === null || transactionHash === undefined) {
        throw new RequiredError(
          'transactionHash',
          'Required parameter transactionHash was null or undefined when calling getRawTrace.',
        )
      }
      const localVarPath = `/transactions/{transaction_hash}/raw-trace`.replace(
        `{${'transaction_hash'}}`,
        encodeURIComponent(String(transactionHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getReadMethods: async (
      addressHash: string,
      isCustomAbi?: string,
      from?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getReadMethods.',
        )
      }
      const localVarPath =
        `/smart-contracts/{address_hash}/methods-read`.replace(
          `{${'address_hash'}}`,
          encodeURIComponent(String(addressHash)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (isCustomAbi !== undefined) {
        localVarQueryParameter['is_custom_abi'] = isCustomAbi
      }

      if (from !== undefined) {
        localVarQueryParameter['from'] = from
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getReadMethodsProxy: async (
      addressHash: string,
      isCustomAbi?: string,
      from?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getReadMethodsProxy.',
        )
      }
      const localVarPath =
        `/smart-contracts/{address_hash}/methods-read-proxy`.replace(
          `{${'address_hash'}}`,
          encodeURIComponent(String(addressHash)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (isCustomAbi !== undefined) {
        localVarQueryParameter['is_custom_abi'] = isCustomAbi
      }

      if (from !== undefined) {
        localVarQueryParameter['from'] = from
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get smart contract
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSmartContract: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getSmartContract.',
        )
      }
      const localVarPath = `/smart-contracts/{address_hash}`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getSmartContracts: async (
      q?: string,
      filter?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/smart-contracts`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get verified smart contracts counters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSmartContractsCounters: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/smart-contracts/counters`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get state changes
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStateChanges: async (
      transactionHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'transactionHash' is not null or undefined
      if (transactionHash === null || transactionHash === undefined) {
        throw new RequiredError(
          'transactionHash',
          'Required parameter transactionHash was null or undefined when calling getStateChanges.',
        )
      }
      const localVarPath =
        `/transactions/{transaction_hash}/state-changes`.replace(
          `{${'transaction_hash'}}`,
          encodeURIComponent(String(transactionHash)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get stats counters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStats: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/stats`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get token info
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getToken: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getToken.',
        )
      }
      const localVarPath = `/tokens/{address_hash}`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get token holders
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTokenCounters: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getTokenCounters.',
        )
      }
      const localVarPath = `/tokens/{address_hash}/counters`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get token holders
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTokenHolders: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getTokenHolders.',
        )
      }
      const localVarPath = `/tokens/{address_hash}/holders`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getTokenInstanceHolders: async (
      addressHash: string,
      id: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getTokenInstanceHolders.',
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling getTokenInstanceHolders.',
        )
      }
      const localVarPath = `/tokens/{address_hash}/instances/{id}/holders`
        .replace(`{${'address_hash'}}`, encodeURIComponent(String(addressHash)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get token token transfers
     * @param {string} addressHash Address hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTokenTokenTransfers: async (
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getTokenTokenTransfers.',
        )
      }
      const localVarPath = `/tokens/{address_hash}/transfers`.replace(
        `{${'address_hash'}}`,
        encodeURIComponent(String(addressHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getTokenTransfers: async (
      transactionHash: string,
      type?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'transactionHash' is not null or undefined
      if (transactionHash === null || transactionHash === undefined) {
        throw new RequiredError(
          'transactionHash',
          'Required parameter transactionHash was null or undefined when calling getTokenTransfers.',
        )
      }
      const localVarPath =
        `/transactions/{transaction_hash}/token-transfers`.replace(
          `{${'transaction_hash'}}`,
          encodeURIComponent(String(transactionHash)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (type !== undefined) {
        localVarQueryParameter['type'] = type
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getTokensList: async (
      q?: string,
      type?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/tokens`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      if (type !== undefined) {
        localVarQueryParameter['type'] = type
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get tx info
     * @param {string} transactionHash Transaction hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTx: async (
      transactionHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'transactionHash' is not null or undefined
      if (transactionHash === null || transactionHash === undefined) {
        throw new RequiredError(
          'transactionHash',
          'Required parameter transactionHash was null or undefined when calling getTx.',
        )
      }
      const localVarPath = `/transactions/{transaction_hash}`.replace(
        `{${'transaction_hash'}}`,
        encodeURIComponent(String(transactionHash)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getTxs: async (
      filter?: string,
      type?: string,
      method?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/transactions`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter
      }

      if (type !== undefined) {
        localVarQueryParameter['type'] = type
      }

      if (method !== undefined) {
        localVarQueryParameter['method'] = method
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get txs chart
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTxsChart: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/stats/charts/transactions`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary get withdrawals
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWithdrawals: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/withdrawals`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getWriteMethods: async (
      addressHash: string,
      isCustomAbi?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getWriteMethods.',
        )
      }
      const localVarPath =
        `/smart-contracts/{address_hash}/methods-write`.replace(
          `{${'address_hash'}}`,
          encodeURIComponent(String(addressHash)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (isCustomAbi !== undefined) {
        localVarQueryParameter['is_custom_abi'] = isCustomAbi
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    getWriteMethodsProxy: async (
      addressHash: string,
      isCustomAbi?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling getWriteMethodsProxy.',
        )
      }
      const localVarPath =
        `/smart-contracts/{address_hash}/methods-write-proxy`.replace(
          `{${'address_hash'}}`,
          encodeURIComponent(String(addressHash)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (isCustomAbi !== undefined) {
        localVarQueryParameter['is_custom_abi'] = isCustomAbi
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
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
    queryReadMethod: async (
      body: ReadMethodQueryBody,
      addressHash: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling queryReadMethod.',
        )
      }
      // verify required parameter 'addressHash' is not null or undefined
      if (addressHash === null || addressHash === undefined) {
        throw new RequiredError(
          'addressHash',
          'Required parameter addressHash was null or undefined when calling queryReadMethod.',
        )
      }
      const localVarPath =
        `/smart-contracts/{address_hash}/query-read-method`.replace(
          `{${'address_hash'}}`,
          encodeURIComponent(String(addressHash)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      const needsSerialization =
        typeof body !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json'
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || ''

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary search
     * @param {string} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search: async (
      q?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/search`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary search redirect
     * @param {string} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchRedirect: async (
      q?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/search/check-redirect`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.params) {
        query.set(key, options.params[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      }
    },
  }
}

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
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddress(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Address>> {
    return DefaultApiFp(this.configuration)
      .getAddress(addressHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get blocks validated by address
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressBlocksValidated(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20015>> {
    return DefaultApiFp(this.configuration)
      .getAddressBlocksValidated(addressHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get address coin balance history
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressCoinBalanceHistory(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20017>> {
    return DefaultApiFp(this.configuration)
      .getAddressCoinBalanceHistory(addressHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get address coin balance history by day
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressCoinBalanceHistoryByDay(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<CoinBalanceHistoryByDaysEntry>>> {
    return DefaultApiFp(this.configuration)
      .getAddressCoinBalanceHistoryByDay(addressHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get address counters
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressCounters(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressCounters>> {
    return DefaultApiFp(this.configuration)
      .getAddressCounters(addressHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get address internal txs
   * @param {string} addressHash Address hash
   * @param {string} [filter]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressInternalTxs(
    addressHash: string,
    filter?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20013>> {
    return DefaultApiFp(this.configuration)
      .getAddressInternalTxs(addressHash, filter, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get address logs
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressLogs(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20014>> {
    return DefaultApiFp(this.configuration)
      .getAddressLogs(addressHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get blocks validated by address
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressTokenBalances(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<TokenBalance>>> {
    return DefaultApiFp(this.configuration)
      .getAddressTokenBalances(addressHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get address token transfers
   * @param {string} addressHash Address hash
   * @param {string} [type]
   * @param {string} [filter]
   * @param {string} [token]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressTokenTransfers(
    addressHash: string,
    type?: string,
    filter?: string,
    token?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20012>> {
    return DefaultApiFp(this.configuration)
      .getAddressTokenTransfers(addressHash, type, filter, token, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get blocks validated by address
   * @param {string} addressHash Address hash
   * @param {string} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressTokens(
    addressHash: string,
    type?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20016>> {
    return DefaultApiFp(this.configuration)
      .getAddressTokens(addressHash, type, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get address txs
   * @param {string} addressHash Address hash
   * @param {string} [filter]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressTxs(
    addressHash: string,
    filter?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse2009>> {
    return DefaultApiFp(this.configuration)
      .getAddressTxs(addressHash, filter, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get address withdrawals
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressWithdrawals(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20010>> {
    return DefaultApiFp(this.configuration)
      .getAddressWithdrawals(addressHash, options)
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
  ): Promise<AxiosResponse<InlineResponse20011>> {
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
  ): Promise<AxiosResponse<InlineResponse2009>> {
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
  ): Promise<AxiosResponse<InlineResponse20010>> {
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
  ): Promise<AxiosResponse<InlineResponse2002>> {
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
   * @param {string} transactionHash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getInternalTxs(
    transactionHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse2006>> {
    return DefaultApiFp(this.configuration)
      .getInternalTxs(transactionHash, options)
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
  ): Promise<AxiosResponse<InlineResponse20027>> {
    return DefaultApiFp(this.configuration)
      .getJsonRpcUrl(options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get logs
   * @param {string} transactionHash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getLogs(
    transactionHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse2007>> {
    return DefaultApiFp(this.configuration)
      .getLogs(transactionHash, options)
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
  ): Promise<AxiosResponse<InlineResponse2004>> {
    return DefaultApiFp(this.configuration)
      .getMarketChart(options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get NFT instance by id
   * @param {string} addressHash Address hash
   * @param {number} id integer id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getNftInstance(
    addressHash: string,
    id: number,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<NFTInstance>> {
    return DefaultApiFp(this.configuration)
      .getNftInstance(addressHash, id, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get transfers of NFT instance
   * @param {string} addressHash Address hash
   * @param {number} id integer id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getNftInstanceTransfers(
    addressHash: string,
    id: number,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20022>> {
    return DefaultApiFp(this.configuration)
      .getNftInstanceTransfers(addressHash, id, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get transfers count of NFT instance
   * @param {string} addressHash Address hash
   * @param {number} id integer id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getNftInstanceTransfersCount(
    addressHash: string,
    id: number,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20024>> {
    return DefaultApiFp(this.configuration)
      .getNftInstanceTransfersCount(addressHash, id, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get NFT instances
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getNftInstances(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20021>> {
    return DefaultApiFp(this.configuration)
      .getNftInstances(addressHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get raw trace
   * @param {string} transactionHash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getRawTrace(
    transactionHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<RawTrace>>> {
    return DefaultApiFp(this.configuration)
      .getRawTrace(transactionHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get read methods
   * @param {string} addressHash Address hash
   * @param {string} [isCustomAbi]
   * @param {string} [from]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getReadMethods(
    addressHash: string,
    isCustomAbi?: string,
    from?: string,
    options?: AxiosRequestConfig,
  ): Promise<
    AxiosResponse<Array<ReadMethodWithValue | ReadMethodWithoutValue>>
  > {
    return DefaultApiFp(this.configuration)
      .getReadMethods(addressHash, isCustomAbi, from, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get read methods proxy
   * @param {string} addressHash Address hash
   * @param {string} [isCustomAbi]
   * @param {string} [from]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getReadMethodsProxy(
    addressHash: string,
    isCustomAbi?: string,
    from?: string,
    options?: AxiosRequestConfig,
  ): Promise<
    AxiosResponse<Array<ReadMethodWithValue | ReadMethodWithoutValue>>
  > {
    return DefaultApiFp(this.configuration)
      .getReadMethodsProxy(addressHash, isCustomAbi, from, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get smart contract
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getSmartContract(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<SmartContract>> {
    return DefaultApiFp(this.configuration)
      .getSmartContract(addressHash, options)
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
  ): Promise<AxiosResponse<InlineResponse20025>> {
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
  ): Promise<AxiosResponse<InlineResponse20026>> {
    return DefaultApiFp(this.configuration)
      .getSmartContractsCounters(options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get state changes
   * @param {string} transactionHash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getStateChanges(
    transactionHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse2008>> {
    return DefaultApiFp(this.configuration)
      .getStateChanges(transactionHash, options)
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
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getToken(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenInfo>> {
    return DefaultApiFp(this.configuration)
      .getToken(addressHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get token holders
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenCounters(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenCounters>> {
    return DefaultApiFp(this.configuration)
      .getTokenCounters(addressHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get token holders
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenHolders(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20020>> {
    return DefaultApiFp(this.configuration)
      .getTokenHolders(addressHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get token instance holders
   * @param {string} addressHash Address hash
   * @param {number} id integer id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenInstanceHolders(
    addressHash: string,
    id: number,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20023>> {
    return DefaultApiFp(this.configuration)
      .getTokenInstanceHolders(addressHash, id, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get token token transfers
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenTokenTransfers(
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse20019>> {
    return DefaultApiFp(this.configuration)
      .getTokenTokenTransfers(addressHash, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get token transfers
   * @param {string} transactionHash Transaction hash
   * @param {string} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenTransfers(
    transactionHash: string,
    type?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InlineResponse2005>> {
    return DefaultApiFp(this.configuration)
      .getTokenTransfers(transactionHash, type, options)
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
  ): Promise<AxiosResponse<InlineResponse20018>> {
    return DefaultApiFp(this.configuration)
      .getTokensList(q, type, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get tx info
   * @param {string} transactionHash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTx(
    transactionHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Transaction>> {
    return DefaultApiFp(this.configuration)
      .getTx(transactionHash, options)
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
  ): Promise<AxiosResponse<InlineResponse2001>> {
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
  ): Promise<AxiosResponse<InlineResponse2003>> {
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
  ): Promise<AxiosResponse<InlineResponse20010>> {
    return DefaultApiFp(this.configuration)
      .getWithdrawals(options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get write methods
   * @param {string} addressHash Address hash
   * @param {string} [isCustomAbi]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getWriteMethods(
    addressHash: string,
    isCustomAbi?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<WriteMethod>>> {
    return DefaultApiFp(this.configuration)
      .getWriteMethods(addressHash, isCustomAbi, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary get write methods proxy
   * @param {string} addressHash Address hash
   * @param {string} [isCustomAbi]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getWriteMethodsProxy(
    addressHash: string,
    isCustomAbi?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<WriteMethod>>> {
    return DefaultApiFp(this.configuration)
      .getWriteMethodsProxy(addressHash, isCustomAbi, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   *
   * @summary query read method
   * @param {ReadMethodQueryBody} body
   * @param {string} addressHash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async queryReadMethod(
    body: ReadMethodQueryBody,
    addressHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<ReadMethodResponse>>> {
    return DefaultApiFp(this.configuration)
      .queryReadMethod(body, addressHash, options)
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
  ): Promise<AxiosResponse<InlineResponse200>> {
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
