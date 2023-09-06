import { DecodedInputLogParameter } from './decoded-input-log-parameter'
/**
 *
 * @export
 * @interface DecodedInputLog
 */
export interface DecodedInputLog {
  /**
   *
   * @type {string}
   * @memberof DecodedInputLog
   */
  method_call: string
  /**
   *
   * @type {string}
   * @memberof DecodedInputLog
   */
  method_id: string
  /**
   *
   * @type {Array<DecodedInputLogParameter>}
   * @memberof DecodedInputLog
   */
  parameters: Array<DecodedInputLogParameter>
}
