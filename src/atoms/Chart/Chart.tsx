import React from 'react'
import {
  VictoryPie,
  VictoryLegend,
  VictoryTooltip,
} from "victory"
import { font, theme } from 'styles/theme'
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
  const isMobile = window.innerWidth < 750

  const handleViewBoxSize = () => {
    if (isMobile) {
      return `100 30 340 ${legendData.length*30 >= 140 ? legendData.length*30 : 140}`
    } else if (window.innerWidth > 750 && window.innerWidth < 960) {
      return `80 30 400 ${viewHeight >= 140 ? viewHeight : 140}`
    } else {
      return `20 25 450 ${viewHeight >= 200 ? viewHeight : 200}`
    }
  }

  const translateTransform = isMobile ? "translate(50, 10)" : "translate(42, 10)"

  return (
    <div style={{height: 'auto', width: 'auto'}}>
      <svg viewBox={handleViewBoxSize()} width='100%' height='100%'>
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
                fontSize: 14,
                padding: 0,
                fill: (datum: any) => datum.datum.symbol.active ? theme.textBody : theme.labels,
                fontFamily: font.primary,
                fontWeight: (datum) => datum.datum.symbol.active ? 'bold' : 'unset'
              },
              data: {
                fillOpacity: (datum: any) => datum.datum.symbol.active ? 1 : 0.4,
                strokeWidth: 6,
                fontSize: 16,
                strokeOpacity: (datum: any) => datum.datum.symbol.active ? 1 : 0.4
              }
            }}
          />
          <g transform={translateTransform}>
            <VictoryPie
              name="pie"
              width={200}
              height={200}
              standalone={false}
              colorScale={colorScale}
              data={data}
              style={{
                labels: labelStyle,
                data: {
                  fillOpacity: (datum) => datum.datum.active ? 1 : 0.4,
                  stroke: theme.white,
                  strokeWidth: 1
                }
              }}
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
