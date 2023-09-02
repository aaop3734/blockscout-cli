import { AddressWithTxCount } from './address-with-tx-count'
/**
 *
 * @export
 * @interface InlineResponse20011
 */
export interface InlineResponse20011 {
  /**
   *
   * @type {string}
   * @memberof InlineResponse20011
   */
  exchangeRate: string
  /**
   *
   * @type {string}
   * @memberof InlineResponse20011
   */
  totalSupply: string
  /**
   *
   * @type {Array<AddressWithTxCount>}
   * @memberof InlineResponse20011
   */
  items: Array<AddressWithTxCount>
  /**
   *
   * @type {any}
   * @memberof InlineResponse20011
   */
  nextPageParams: any
}
