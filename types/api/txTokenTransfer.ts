import type { TokenTransfer } from './tokenTransfer'

export interface TxsTokenTransferPagination {
  batch_block_hash: string
  batch_log_index: number
  batch_transaction_hash: string
  index_in_batch: number
}

export interface TxsTokenTransferResponse {
  items: Array<TokenTransfer>
  next_page_params: TxsTokenTransferPagination | null
}
