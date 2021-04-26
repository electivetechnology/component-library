import React from 'react'
import {
  VictoryPie,
  VictoryLegend,
  VictoryTooltip,
} from "victory"
import { theme } from 'styles/theme'
const { VictorySharedEvents } = require('victory')

type Props = {
  data: Array<any>
  legendData: Array<any>
  colorScale: Array<any>
  labelStyle?: any
  onClick?: any
  viewHeight: string
}

const Chart: React.FC<Props> = ({
  data,
  legendData,
  colorScale,
  labelStyle,
  onClick,
  viewHeight = 180
}) => {
  return (
    <div style={{height: 'auto', width: 'auto'}}>
      <svg viewBox={`20 25 450 ${viewHeight}`} width='100%' height='100%'
        preserveAspectRatio="xMinYMidn meet"
      >
        <VictorySharedEvents
          events={[{
            childName: ["pie", "legend"],
            target: "data",
            eventHandlers: {
              onClick: onClick
            }
          }]}>
          <VictoryLegend
            name="legend"
            x={230}
            y={50}
            orientation="vertical"
            standalone={false}
            title=""
            centerTitle
            data={legendData}
            rowGutter={{ top: 0, bottom: 0 }}
            style={{
              labels: {
                fontSize: 12,
                padding: 0,
                fill: theme.lightText,
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
              },
              data: {
                fillOpacity: 0.4, strokeWidth: 6, fontSize: 16, strokeOpacity: 0.4
              }
            }}
          />
          <g transform="translate(42, 10)">
            <VictoryPie
              name="pie"
              width={200}
              height={200}
              standalone={false}
              colorScale={colorScale}
              style={{
                labels: labelStyle,
                data: {
                  fillOpacity: 0.4, stroke: theme.white, strokeWidth: 1
                }
              }}
              data={data}
              labelComponent={
                <VictoryTooltip
                  style={{ fill: "white", zIndex: 10000 }}
                  flyoutStyle={{
                    stroke: "none",
                    fill: "black",
                    opacity: "80%"
                  }}
                  constrainToVisibleArea={true}
                />
              }
            />
          </g>
        </VictorySharedEvents>
      </svg>
    </div>
  )
}

export default Chart
