import { RawTraceCallAction } from './raw-trace-call-action'
import { RawTraceCallResult } from './raw-trace-call-result'
import { RawTraceCreateAction } from './raw-trace-create-action'
import { RawTraceCreateResult } from './raw-trace-create-result'
import { RawTraceSelfDestructAction } from './raw-trace-self-destruct-action'
/**
 *
 * @export
 * @interface RawTrace
 */
export interface RawTrace {
  /**
   *
   * @type {RawTraceCallAction | RawTraceCreateAction | RawTraceSelfDestructAction}
   * @memberof RawTrace
   */
  action: RawTraceCallAction | RawTraceCreateAction | RawTraceSelfDestructAction
  /**
   *
   * @type {number}
   * @memberof RawTrace
   */
  subtraces: number
  /**
   *
   * @type {Array<number>}
   * @memberof RawTrace
   */
  traceAddress: Array<number>
  /**
   *
   * @type {string}
   * @memberof RawTrace
   */
  type: string
  /**
   *
   * @type {string}
   * @memberof RawTrace
   */
  error?: string
  /**
   *
   * @type {RawTraceCallResult | RawTraceCreateResult}
   * @memberof RawTrace
   */
  result?: RawTraceCallResult | RawTraceCreateResult
}
