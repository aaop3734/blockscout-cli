import { BaseResult } from './base-result'
import { SearchResultAddressOrContract } from './search-result-address-or-contract'
import { SearchResultBlock } from './search-result-block'
import { SearchResultToken } from './search-result-token'
import { SearchResultTransaction } from './search-result-transaction'

export enum SearchResultType {
  AddressOrContract = 'address|contract',
  Block = 'block',
  Token = 'token',
  Transaction = 'transaction',
}

export type SearchResultGenericMap = {
  [SearchResultType.AddressOrContract]: SearchResultAddressOrContract
  [SearchResultType.Block]: SearchResultBlock
  [SearchResultType.Token]: SearchResultToken
  [SearchResultType.Transaction]: SearchResultTransaction
}

export type SearchResultGeneric = SearchResultGenericMap[SearchResultType]

export interface ISearchResultGeneric
  extends SearchResultAddressOrContract,
    SearchResultBlock,
    SearchResultToken,
    SearchResultTransaction {}

/**
 *
 * @export
 * @interface SearchResult
 */
export interface SearchResult extends BaseResult<ISearchResultGeneric> {}
