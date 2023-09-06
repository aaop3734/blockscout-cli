/**
 *
 * @export
 * @interface SearchResultAddressOrContract
 */
export interface SearchResultAddressOrContract {
  /**
   *
   * @type {string}
   * @memberof SearchResultAddressOrContract
   */
  address: string
  /**
   *
   * @type {boolean}
   * @memberof SearchResultAddressOrContract
   */
  is_smart_contract_verified: boolean
  /**
   *
   * @type {string}
   * @memberof SearchResultAddressOrContract
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof SearchResultAddressOrContract
   */
  type: string
  /**
   *
   * @type {string}
   * @memberof SearchResultAddressOrContract
   */
  url: string
}
