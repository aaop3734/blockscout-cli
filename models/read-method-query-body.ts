/**
 *
 * @export
 * @interface ReadMethodQueryBody
 */
export interface ReadMethodQueryBody {
  /**
   *
   * @type {Array}
   * @memberof ReadMethodQueryBody
   */
  args: Array<any>
  /**
   *
   * @type {string}
   * @memberof ReadMethodQueryBody
   */
  method_id: string
  /**
   *
   * @type {string}
   * @memberof ReadMethodQueryBody
   */
  from?: string
  /**
   *
   * @type {string}
   * @memberof ReadMethodQueryBody
   */
  contract_type?: string
}
