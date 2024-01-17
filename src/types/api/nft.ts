import type {
  TokenHolder,
  TokenHoldersPagination,
  TokenInfo,
  TokenInstance,
  TokenInventoryPagination,
} from './token'

export interface NftInstance extends TokenInstance {
  token: TokenInfo | null
}

export interface NftTransfersCountResponse {
  transfers_count: number
}

export interface NftInstancesResponse {
  items: Array<NftInstance>
  next_page_params: TokenInventoryPagination | null
}

export interface NftInstanceHoldersResponse {
  items: Array<TokenHolder>
  next_page_params: TokenHoldersPagination | null
}
