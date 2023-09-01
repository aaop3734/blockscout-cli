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
import { AddressParam } from './address-param'
/**
 *
 * @export
 * @interface TransactionReward
 */
export interface TransactionReward {
  /**
   *
   * @type {any}
   * @memberof TransactionReward
   */
  types: any
  /**
   *
   * @type {string}
   * @memberof TransactionReward
   */
  emissionReward: string
  /**
   *
   * @type {string}
   * @memberof TransactionReward
   */
  blockHash: string
  /**
   *
   * @type {AddressParam}
   * @memberof TransactionReward
   */
  from: AddressParam
  /**
   *
   * @type {AddressParam}
   * @memberof TransactionReward
   */
  to: AddressParam
}
