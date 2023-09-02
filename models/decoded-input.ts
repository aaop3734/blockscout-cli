import { DecodedInputParameter } from './decoded-input-parameter'
/**
 *
 * @export
 * @interface DecodedInput
 */
export interface DecodedInput {
  /**
   *
   * @type {string}
   * @memberof DecodedInput
   */
  methodCall: string
  /**
   *
   * @type {string}
   * @memberof DecodedInput
   */
  methodId: string
  /**
   *
   * @type {Array<DecodedInputParameter>}
   * @memberof DecodedInput
   */
  parameters: Array<DecodedInputParameter>
}
