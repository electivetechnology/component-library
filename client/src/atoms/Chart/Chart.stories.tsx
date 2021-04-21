import React from 'react'
import { Chart } from 'atoms'

const ChartComponenetTemplate = (args: any) => {
  const handleOnClick = (event: any, element: any) => {
    return [
      {
        target: "data",
        childName: ["pie", "legend"],
        mutation: (element: any) => {
          return element.style.fillOpacity === 1 ? 
            null : 
            { style: { fillOpacity: 1, fill: element.style.fill, stroke: "#ffffff", strokeWidth: 1, padding: 10 } };
        }
      }, {
        target: "labels",
        childName: ["pie", "legend"],
        mutation: (element: any) => {
          return element.text === "selected" ? null : { text: "selected" };
        }
      }
    ]
  }
  return (
    <Chart 
      onClick={handleOnClick}
      {...args} />
  )
}

// Default
export const Default: any = ChartComponenetTemplate.bind({})

Default.args = {
  data: [
    { x: "Avocado", y: 1 }, { x: "Banana", y: 4 }, { x: "Coconut", y: 5 }, { x: "Strawberry", y: 7 }
  ],
  legendData: [
    { name: "Avocado", symbol: { fill: "tomato", type: "star" } },
    { name: "Banana", symbol: { fill: "orange" } },
    { name: "Coconut", symbol: { fill: "pink", type: "star" } },
    { name: "Strawberry", symbol: { fill: "blue" } },
  ],
  colorScale: [
    "tomato",
    "orange",
    "pink",
    "blue",
  ],
}

export default {
  title: 'atoms/Chart',
  component: Chart
}
