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
/**
 *
 * @export
 * @interface RawTraceCallAction
 */
export interface RawTraceCallAction {
  /**
   *
   * @type {string}
   * @memberof RawTraceCallAction
   */
  callType: string
  /**
   *
   * @type {string}
   * @memberof RawTraceCallAction
   */
  to: string
  /**
   *
   * @type {string}
   * @memberof RawTraceCallAction
   */
  from: string
  /**
   *
   * @type {string}
   * @memberof RawTraceCallAction
   */
  input: string
  /**
   *
   * @type {string}
   * @memberof RawTraceCallAction
   */
  gas: string
  /**
   *
   * @type {string}
   * @memberof RawTraceCallAction
   */
  value: string
}