import React, { useEffect } from 'react'
import { Chart } from 'chart.js'

type Props = {
  width?: string
  height?: string
  labels: Array<string>
  borderColor: Array<string>
  segmentColor: Array<string>
  hoverBackgroundColor: Array<string>
  data: Array<number>
  borderWidth: number
  handleOnClick: any
  labelPosition?: string
}

const ChartComponent: React.FC<Props> = ({
  width,
  height,
  labels,
  borderColor,
  data,
  segmentColor,
  hoverBackgroundColor,
  handleOnClick,
  borderWidth = 2,
  labelPosition = 'right'
}) => {
  useEffect(() => {
    const ctx = document.getElementById("chart")
    
    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: segmentColor,
          borderColor: borderColor,
          borderWidth: borderWidth,
        }]
      },
      options: {
        responsive: width ? false : true,
        onClick: function (event: any, element: any) {
          chart.update()
          handleOnClick(event, element)
        },
        legend: {
          display: true,
          labels: {
            padding: 20
          },
          position: labelPosition,
          onClick: function (event: any, element: any) {
            chart.update()
            handleOnClick(event, element)
          }
        }
      }
    })
  })
  return (
    <canvas id="chart" width={width} height={height} />
  )
}

export default ChartComponent
