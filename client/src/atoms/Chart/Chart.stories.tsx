import React from 'react'
import { Chart } from 'atoms'
import { theme } from 'styles/theme'

const ChartTemplate = (args: any) => {
  var selectedIndex: any = null

  const handleSegmentClick = (event: any, elements: any) => {
    if(elements && elements.length){
      const segment = elements[0];
      if (selectedIndex !== segment["_index"]) {
          selectedIndex = segment["_index"];
          segment._model.outerRadius += 10;
      }
      else{
        selectedIndex = null;
      }
    }
  }
  return (
    <Chart 
      {...args}
      handleOnClick={handleSegmentClick} />
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
  labelPosition: 'top'
}

export default {
  title: 'atoms/Chart',
  component: Chart
}
