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
import { Transaction } from './transaction'
/**
 *
 * @export
 * @interface InlineResponse2009
 */
export interface InlineResponse2009 {
  /**
   *
   * @type {Array<Transaction>}
   * @memberof InlineResponse2009
   */
  items: Array<Transaction>
  /**
   *
   * @type {any}
   * @memberof InlineResponse2009
   */
  nextPageParams: any
}
