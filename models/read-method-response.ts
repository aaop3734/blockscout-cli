import { CodeAndMessage } from './code-and-message'
import { DecodedInput } from './decoded-input'
import { ExtendedRevertReasonAsMap } from './extended-revert-reason-as-map'
import { OutputAndNames } from './output-and-names'
/**
 *
 * @export
 * @interface ReadMethodResponse
 */
export interface ReadMethodResponse {
  /**
   *
   * @type {boolean}
   * @memberof ReadMethodResponse
   */
  isError: boolean
  /**
   *
   * @type {ExtendedRevertReasonAsMap | Error | DecodedInput | CodeAndMessage | OutputAndNames}
   * @memberof ReadMethodResponse
   */
  result:
    | ExtendedRevertReasonAsMap
    | Error
    | DecodedInput
    | CodeAndMessage
    | OutputAndNames
}
