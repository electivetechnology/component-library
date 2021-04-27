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
  const isMobile = window.innerWidth < 760

  const handleOnClick = (event: any, element: any) => {
    return [
      {
        target: "data",
        childName: ["pie", "legend"],
        mutation: (element: any) => {
          console.log('element', element.style.fillOpacity === 0.4);
          
          return element.style.fillOpacity === 0.4 ? 
            { style: { fillOpacity: 1, fill: element.style.fill, stroke: "#ffffff", strokeWidth: 1, padding: 10 } } : 
            { style: { fillOpacity: 0.4, fill: element.style.fill, stroke: "#ffffff", strokeWidth: 1, padding: 10 } }
        }
      }, {
        target: "labels",
        childName: ["legend"],
        mutation: (element: any) => {
          console.log('legend', element.style.fill === theme.lightText);
          
          return element.style.fill === theme.black ?
            { style: {
              fontSize: 12,
              padding: 0,
              fill: theme.lightText,
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 'unset'
            }}
            : { style: {
              fontSize: 12,
              padding: 0,
              fill: theme.black,
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 'bold'
            }}
        },
      },
      {
        target: 'data',
        childName: ['legend'],
        mutation: (element: any) => {},
      },
    ]
  }

  const handleViewBoxSize = () => {
    if (isMobile) {
      return `100 30 340 ${legendData.length*30 >= 140 ? legendData.length*30 : 140}`
    } else if (window.innerWidth > 760 && window.innerWidth < 960) {
      return `80 30 400 ${viewHeight >= 140 ? viewHeight : 140}`
    } else {
      return `20 25 450 ${viewHeight >= 200 ? viewHeight : 200}`
    }
  }

  const translateTransform = isMobile ? "translate(50, 10)" : "translate(42, 10)"

  return (
    <div style={{height: 'auto', width: 'auto'}}>
      <svg viewBox={handleViewBoxSize()} width='100%' height='100%'
        preserveAspectRatio="xMinYMidn meet"
      >
        <VictorySharedEvents
          events={[{
            childName: ["pie", "legend"],
            target: "data",
            eventHandlers: {
              onClick: handleOnClick
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
