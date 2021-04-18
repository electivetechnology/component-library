import React, { Fragment } from 'react'
import { Chart } from 'atoms'
import { theme } from 'styles/theme'
import Legend from './ChartLegend'
import ChartComponent  from './Chart'

const ChartComponenetTemplate = (args: any) => {
  return (
    <ChartComponent 
      {...args} />
  )
}

const ChartTemplate = (args: any) => {
  const handleSegmentClick = (event: any, elements: any) => {
    console.log('segment click');
  }
  return (
    <Chart 
      {...args}
      handleOnClick={handleSegmentClick} />
  )
}

const LegendTemplate = (args: any) => {
  const handleSegmentClick = (event: any, elements: any) => {
    console.log('segment click');
  }

  const legendArray = [
    {name: 'Legend 1', color: 'red'},
    {name: 'Legend 2', color: 'blue'}
  ]
  const renderLegend = () => {
    return (
      <div>
        {legendArray.map((legend: any) => {
          return (
            <Legend
              key={legend.color}
              label={legend.name}
              legendColor={legend.color}
            />
          )
        })}
      </div>

    )
  }
  return (
    <Fragment>
      {renderLegend()}
      <div style={{ width: '300px' }}>
        <Chart 
          {...args}
          handleOnClick={handleSegmentClick} />
      </div>
    </Fragment>
  )
}

// Default
export const Default: any = ChartTemplate.bind({})

Default.args = {
  labels: ["Grapes", "Avocado", "Pepper", "Beans", "Aubergine", "Oranges"],
  segmentColor: [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
  ],
  data: [12, 19, 3, 5, 2, 3],
  borderColor: theme.white,
  chartId: 'chartId',
  chartName: 'chartName'
}

// CustomLegend
export const CustomLegend: any = LegendTemplate.bind({})

CustomLegend.args = {
  labels: ["Grapes", "Avocado", "Pepper", "Beans", "Aubergine", "Oranges"],
  segmentColor: [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
  ],
  data: [12, 19, 3, 5, 2, 3],
  borderColor: theme.white,
  labelPosition: 'top',
  chartId: 'chartId',
  chartName: 'chartName'
}

// ChartNew
export const ChartNew: any = ChartComponenetTemplate.bind({})

ChartNew.args = {
  data: [
    { x: "a", y: 1 }, { x: "b", y: 4 }, { x: "c", y: 5 }, { x: "d", y: 7 }
  ],
  legendData: [
    { name: "a", symbol: { fill: "tomato", type: "star" } },
    { name: "b", symbol: { fill: "orange" } },
    { name: "c", symbol: { fill: "pink", type: "star" } },
    { name: "d", symbol: { fill: "blue" } },
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
