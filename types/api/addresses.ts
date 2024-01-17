import type { AddressParam } from './addressParams'

export type AddressesItem = AddressParam & {
  tx_count: string
  coin_balance: string
}

export type AddressesResponse = {
  exchange_rate: string | null
  items: Array<AddressesItem>
  next_page_params: {
    fetched_coin_balance: string
    hash: string
    items_count: number
  } | null
  total_supply: string
}
