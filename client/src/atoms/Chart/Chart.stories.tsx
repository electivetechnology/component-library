import React from 'react'
import { ChartComponent } from 'atoms'
import { theme } from 'styles/theme';

const ChartTemplate = (args: any) => {
  var selectedIndex: any = null

  const handleSegmentClick = (event: any, elements: any) => {
    if(elements && elements.length){
      var segment = elements[0];
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
    <ChartComponent 
      {...args}
      handleOnClick={handleSegmentClick} />
  )
}

// Default
export const Default: any = ChartTemplate.bind({})

Default.args = {
  labels: ["Grapes", "Avocado", "Pepper", "Beans", "Aubergine", "Oranges"],
  segmentColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  data: [12, 19, 3, 5, 2, 3],
  borderColor: theme.white,
  hoverBackgroundColor: ["grey"],
  labelPosition: 'top'
}

export default {
  title: 'atoms/Chart',
  component: ChartComponent
}
