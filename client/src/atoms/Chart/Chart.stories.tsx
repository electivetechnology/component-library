import React from 'react'
import { Chart } from 'atoms'
import { theme } from 'styles/theme'

const ChartTemplate = (args: any) => {
  const handleOnClick = (event: any, element: any) => {
    return [
      {
        target: "data",
        childName: ["pie", "legend"],
        mutation: (element: any) => {
          return element.datum.active ? 
            { style: { fillOpacity: 0.4, fill: element.style.fill, stroke: "#ffffff", strokeWidth: 1, padding: 10 } } : 
            { style: { fillOpacity: 1, fill: element.style.fill, stroke: "#ffffff", strokeWidth: 1, padding: 10 } }
        }
      }, {
        target: "labels",
        childName: ["legend"],
        mutation: (element: any) => {
          return element.datum.symbol.active ?
            { style: {
              fontSize: 12,
              padding: 0,
              fill: theme.shadow,
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 'bold'
            }}
            : { style: {
              fontSize: 12,
              padding: 0,
              fill: theme.labels,
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 'unset'
            }}
        },
      }, {
        target: "data",
        childName: ["legend"],
        mutation: (element: any) => {
        },
      },
      {
        target: 'data',
        childName: ['legend'],
        mutation: (element: any) => {},
      },
    ]
  }
  return (
    <Chart 
      onClick={handleOnClick}
      {...args} />
  )
}

// Default
export const Default: any = ChartTemplate.bind({})

Default.args = {
  data: [
    { x: "Avocado", y: 1 }, { x: "Banana", y: 4, active: true },
    { x: "Coconut", y: 5 }, { x: "Strawberry", y: 7 },
    { x: "Coconut", y: 5 }, { x: "Strawberry", y: 7 },
    { x: "Coconut", y: 5 }, { x: "Strawberry", y: 7 }
  ],
  legendData: [
    { 
      name: "Don’t understand the question",
      symbol: { fill: "tomato", type: "star", stroke: "pink" },
    },
    { name: "Banana", symbol: { fill: "orange", active: true } },
    { name: "Coconut", symbol: { fill: "pink", type: "star" } },
    { name: "Strawberry", symbol: { fill: "blue" } },
    { name: "Coconut", symbol: { fill: "pink", type: "star" } },
    { name: "Strawberry", symbol: { fill: "blue" } },
    { name: "Coconut", symbol: { fill: "pink", type: "star" } },
    { name: "Strawberry", symbol: { fill: "blue" } },
    { name: "Coconut", symbol: { fill: "pink", type: "star" } },
    { name: "Strawberry", symbol: { fill: "blue" } },
    { name: "Coconut", symbol: { fill: "pink", type: "star" } },
    { name: "Strawberry", symbol: { fill: "blue" } },
    { name: "Coconut", symbol: { fill: "pink", type: "star" } },
    { name: "Strawberry", symbol: { fill: "blue" } },
    { name: "Coconut", symbol: { fill: "pink", type: "star" } },
    { name: "Strawberry", symbol: { fill: "blue" } },
    { name: "Coconut", symbol: { fill: "pink", type: "star" } },
    { name: "Strawberry", symbol: { fill: "blue" } },
    { name: "Coconut", symbol: { fill: "pink", type: "star" } },
    { name: "Strawberry", symbol: { fill: "blue" } },
    { name: "Coconut", symbol: { fill: "pink", type: "star" } },
    { name: "Strawberry", symbol: { fill: "blue" } },
    { name: "Coconut", symbol: { fill: "pink", type: "star" } },
    { name: "Strawberry", symbol: { fill: "blue" } },
  ],
  colorScale: [
    "tomato",
    "orange",
    "pink",
    "blue",
    "pink",
    "blue",
    "pink",
    "blue",
  ],
  viewHeight: 14*28
}

export default {
  title: 'atoms/Chart',
  component: Chart
}
