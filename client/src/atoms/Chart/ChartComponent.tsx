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
  chartId: string
  chartName: any
}

const ChartComponent: React.FC<Props> = ({
  width,
  height,
  labels,
  borderColor,
  data,
  segmentColor,
  hoverBackgroundColor,
  chartId,
  chartName,
  handleOnClick,
  borderWidth = 2,
}) => {
  useEffect(() => {
    chartName = document.getElementById(chartId)
    
    const chart = new Chart(chartName, {
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
        legend: false,
        hover: {
          onHover: (event: any, chartElement: any) => {
            event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
          }
        }
      }
    })
  })
  return (
    <canvas id={chartId} width={width} height={height} />
  )
}

export default ChartComponent
