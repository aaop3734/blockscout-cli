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
  methodCall: string
  /**
   *
   * @type {string}
   * @memberof DecodedInputLog
   */
  methodId: string
  /**
   *
   * @type {Array<DecodedInputLogParameter>}
   * @memberof DecodedInputLog
   */
  parameters: Array<DecodedInputLogParameter>
}
