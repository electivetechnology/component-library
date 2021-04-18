import React from 'react'
import {
  VictoryPie,
  VictorySharedEvents,
  VictoryLegend,
  VictoryTooltip,
} from "victory"

type Props = {
  data: Array<any>
  legendData: Array<any>
  colorScale: Array<any>
  labelStyle?: any
}

const Chart: React.FC<Props> = ({
  data,
  legendData,
  colorScale,
  labelStyle
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
              onClick: () => {
                return [
                  {
                    target: "data",
                    childName: ["pie", "legend"],
                    mutation: ({ style }) => {
                      return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                    }
                  }, {
                    target: "labels",
                    childName: ["pie", "legend"],
                    mutation: ({ text }) => {
                      return text === "selected" ? null : { text: "selected" };
                    }
                  }
                ];
              }
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
              style={{ labels: labelStyle }}
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
