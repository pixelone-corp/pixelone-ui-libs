import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LineChartOptions from './LineChartConfig'
import AreaChartOptions from './AreaChartConfig'
import BarChartOptions from './BarChartConfig'
import PieChartOptions from './PieChartConfig'
import PixelChart from './pixel-chart'

export default {
  title: 'Pixel Chart',
  component: PixelChart
} as ComponentMeta<typeof PixelChart>

const Template: ComponentStory<typeof PixelChart> = (args) => {
  return (
    <React.Fragment>
      <PixelChart {...args} />
    </React.Fragment>
  )
}
export const LineChart = Template.bind({})
LineChart.args = {
  options: LineChartOptions
}
export const AreaChart = Template.bind({})
AreaChart.args = {
  options: AreaChartOptions
}
export const BarChart = Template.bind({})
BarChart.args = {
  options: BarChartOptions
}
export const PieChart = Template.bind({})
PieChart.args = {
  options: PieChartOptions
}
