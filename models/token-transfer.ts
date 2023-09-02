import { AddressParam } from './address-param'
import { TokenInfo } from './token-info'
import { TotalERC1155 } from './total-erc1155'
import { TotalERC1155Batch } from './total-erc1155-batch'
import { TotalERC20 } from './total-erc20'
import { TotalERC721 } from './total-erc721'
/**
 *
 * @export
 * @interface TokenTransfer
 */
export interface TokenTransfer {
  /**
   *
   * @type {string}
   * @memberof TokenTransfer
   */
  blockHash: string
  /**
   *
   * @type {AddressParam}
   * @memberof TokenTransfer
   */
  from: AddressParam
  /**
   *
   * @type {string}
   * @memberof TokenTransfer
   */
  logIndex: string
  /**
   *
   * @type {string}
   * @memberof TokenTransfer
   */
  method: string
  /**
   *
   * @type {string}
   * @memberof TokenTransfer
   */
  timestamp: string
  /**
   *
   * @type {AddressParam}
   * @memberof TokenTransfer
   */
  to: AddressParam
  /**
   *
   * @type {TokenInfo}
   * @memberof TokenTransfer
   */
  token: TokenInfo
  /**
   *
   * @type {TotalERC20 | TotalERC721 | TotalERC1155 | TotalERC1155Batch}
   * @memberof TokenTransfer
   */
  total: TotalERC20 | TotalERC721 | TotalERC1155 | TotalERC1155Batch
  /**
   *
   * @type {string}
   * @memberof TokenTransfer
   */
  txHash: string
  /**
   *
   * @type {string}
   * @memberof TokenTransfer
   */
  type: string
}
