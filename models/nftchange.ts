import { TotalERC721 } from './total-erc721'
/**
 *
 * @export
 * @interface NFTChange
 */
export interface NFTChange {
  /**
   *
   * @type {string}
   * @memberof NFTChange
   */
  direction: string
  /**
   *
   * @type {TotalERC721}
   * @memberof NFTChange
   */
  total: TotalERC721
}
