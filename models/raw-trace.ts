import { RawTraceCallAction } from './raw-trace-call-action'
import { RawTraceCreateAction } from './raw-trace-create-action'
import { RawTraceSelfDestructAction } from './raw-trace-self-destruct-action'
import { RawTraceCreateResult } from '../results/raw-trace-create-result'
import { RawTraceCallResult } from '../results/raw-trace-call-result'
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
  trace_address: Array<number>
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
