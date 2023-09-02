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
  verifiedTwinAddressHash?: string
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  isVerified?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  isChangedBytecode?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  isPartiallyVerified?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  isFullyVerified?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  isVerifiedViaSourcify?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  isVerifiedViaEthBytecodeDb?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  isVyperContract?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  isSelfDestructed?: boolean
  /**
   *
   * @type {boolean}
   * @memberof SmartContract
   */
  canBeVisualizedViaSol2uml?: boolean
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  minimalProxyAddressHash?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  sourcifyRepoUrl?: string
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
  optimizationEnabled?: boolean
  /**
   *
   * @type {number}
   * @memberof SmartContract
   */
  optimizationsRuns?: number
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  compilerVersion?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  evmVersion?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  verifiedAt?: string
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
  sourceCode?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  filePath?: string
  /**
   *
   * @type {any}
   * @memberof SmartContract
   */
  compilerSettings?: any
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  constructorArgs?: string
  /**
   *
   * @type {Array<ContractSource>}
   * @memberof SmartContract
   */
  additionalSources?: Array<ContractSource>
  /**
   *
   * @type {Array<ConstructorArguments>}
   * @memberof SmartContract
   */
  decodedConstructorArgs?: Array<ConstructorArguments>
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  deployedBytecode?: string
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  creationBytecode?: string
  /**
   *
   * @type {Array<ExternalLibrary>}
   * @memberof SmartContract
   */
  externalLibraries?: Array<ExternalLibrary>
  /**
   *
   * @type {string}
   * @memberof SmartContract
   */
  language?: string
}
