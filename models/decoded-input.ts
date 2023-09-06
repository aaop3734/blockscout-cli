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
  method_call: string
  /**
   *
   * @type {string}
   * @memberof DecodedInput
   */
  method_id: string
  /**
   *
   * @type {Array<DecodedInputParameter>}
   * @memberof DecodedInput
   */
  parameters: Array<DecodedInputParameter>
}
