import type {
  NFTTokenType,
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

export type AddressNftPagination = {
  items_count: number
  token_contract_address_hash: string
  token_id: string
  token_type: NFTTokenType
}

export interface AddressNft extends TokenInstance {
  token: TokenInfo<NFTTokenType> | null
  token_type: NFTTokenType
  value: string
}

export interface AddressNftResponse {
  items: Array<AddressNft>
  next_page_params: TokenInventoryPagination | null
}
