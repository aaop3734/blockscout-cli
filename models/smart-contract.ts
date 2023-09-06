import { ConstructorArguments } from './constructor-arguments'
import { ContractSource } from './contract-source'
import { ExternalLibrary } from './external-library'
/**
 *
 * @export
 * @interface SmartContract
 */
export interface SmartContract {
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  verified_twin_address_hash?: string
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  is_verified?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  is_changed_bytecode?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  is_partially_verified?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  is_fully_verified?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  is_verified_via_sourcify?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  is_verified_via_eth_bytecode_db?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  is_vyper_contract?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  is_self_destructed?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  can_be_visualized_via_sol2uml?: boolean
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  minimal_proxy_address_hash?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  sourcify_repo_url?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  name?: string
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  optimization_enabled?: boolean
  /**
   *
   * @type {number}
   * @memberof SmartContract
   */
  optimizations_runs?: number
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  compiler_version?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  evm_version?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  verified_at?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  abi?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  source_code?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  file_path?: string
  /**
   *
   * @type {any}
   * @memberof SmartContract
   */
  compiler_settings?: any
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  constructor_args?: string
  /**
   *
   * @type {Array<ContractSource>}
   * @memberof SmartContract
   */
  additional_sources?: Array<ContractSource>
  /**
   *
   * @type {Array<ConstructorArguments>}
   * @memberof SmartContract
   */
  decoded_constructor_args?: Array<ConstructorArguments>
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  deployed_bytecode?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  creation_bytecode?: string
  /**
   *
   * @type {Array<ExternalLibrary>}
   * @memberof SmartContract
   */
  external_libraries?: Array<ExternalLibrary>
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  language?: string
}
