import type { TokenInfo, TokenType } from './token'
import type { TokenTransfer } from './tokenTransfer'
export type TokensPagination = {
  contract_address_hash: string
  holder_count: number
  is_name_null: boolean
  items_count: number
  market_cap: string | null
  name: string
}

export type TokensResponse = {
  items: Array<TokenInfo>
  next_page_params: TokensPagination | null
}

export type TokensFilters = { q: string; type: Array<TokenType> | undefined }

export type TokensBridgedFilters = {
  q: string
  chain_ids: Array<string> | undefined
}

export interface TokenInstanceTransferResponse {
  items: Array<TokenTransfer>
  next_page_params: TokenInstanceTransferPagination | null
}

export interface TokenInstanceTransferPagination {
  block_number: number
  index: number
  items_count: number
  token_id: string
}

export interface TokensSorting {
  sort: 'fiat_value' | 'holder_count' | 'circulating_market_cap'
  order: 'asc' | 'desc'
}

export type TokensSortingField = TokensSorting['sort']

export type TokensSortingValue =
  `${TokensSortingField}-${TokensSorting['order']}`
