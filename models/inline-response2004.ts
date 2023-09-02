import { MarketChartItem } from './market-chart-item'
/**
 *
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
  /**
   *
   * @type {string}
   * @memberof InlineResponse2004
   */
  availableSupply: string
  /**
   *
   * @type {Array<MarketChartItem>}
   * @memberof InlineResponse2004
   */
  chartData: Array<MarketChartItem>
}
