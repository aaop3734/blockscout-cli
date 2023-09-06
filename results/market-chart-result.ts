import { MarketChartItem } from '../models'

/**
 *
 * @export
 * @interface MarketChartResult
 */
export interface MarketChartResult {
  /**
   *
   * @type {string}
   * @memberof MarketChartResult
   */
  available_supply: string
  /**
   *
   * @type {Array<MarketChartItem>}
   * @memberof MarketChartResult
   */
  chart_data: Array<MarketChartItem>
}
