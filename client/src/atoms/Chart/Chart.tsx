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
}

const Chart: React.FC<Props> = ({
  data,
  legendData,
  colorScale,
  labelStyle,
  onClick
}) => {
  
  // const clearClicks = () => {
  //   this.setState({
  //     externalMutations: [
  //       {
  //         childName: ["bar", "pie"],
  //         target: ["data"],
  //         eventKey: "all",
  //         mutation: () => ({ style: undefined }),
  //         callback: this.removeMutation.bind(this)
  //       }
  //     ]
  //   });
  // }
  
  return (
    <div>
      {/* <button
        onClick={clearClicks}
        style={clearButtonStyle}
      >
        Reset
      </button> */}
      {/* TODO: possible future feature */}
      <svg width={500} height={200}>
        <VictorySharedEvents
          events={[{
            childName: ["pie", "legend"],
            target: "data",
            eventHandlers: {
              onClick: onClick
            }
          }]}
        >
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
          <g transform={"translate(-30, 10)"}>
            <VictoryPie
              name="pie"
              width={300}
              height={200}
              standalone={false}
              colorScale={colorScale}
              style={{ 
                labels: labelStyle,
                data: {
                  fillOpacity: 0.9, stroke: theme.white, strokeWidth: 1
                }
              }}
              data={data}
              labelComponent={
                <VictoryTooltip />
              }
            />
          </g>
        </VictorySharedEvents>
      </svg>
    </div>
  )
}

export default Chart
