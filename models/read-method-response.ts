/* tslint:disable */
/* eslint-disable */
/**
 * BlockScout API
 *
 * API for BlockScout web app
 *
 * OpenAPI spec version: 1.0.0
 * Contact: aaop3734@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
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
