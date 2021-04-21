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
  width?: number
  height?: number
  legendPosition?: string
  piePosition?: string
}

const Chart: React.FC<Props> = ({
  data,
  legendData,
  colorScale,
  labelStyle,
  onClick,
  width = 300,
  height = 150,
  legendPosition = "translate(-35, -30)",
  piePosition = "translate(-35, -24)"
}) => {
  
  return (
    <div>
      <svg width={width} height={height}>
        <VictorySharedEvents
          events={[{
            childName: ["pie", "legend"],
            target: "data",
            eventHandlers: {
              onClick: onClick            
            }
          }]}>
          <g transform={legendPosition}>
            <VictoryLegend
              name="legend"
              x={230}
              y={50}
              orientation="vertical"
              standalone={false}
              title=""
              centerTitle
              data={legendData}
            />
          </g>
          <g transform={piePosition}>
            <VictoryPie
              name="pie"
              width={300}
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
