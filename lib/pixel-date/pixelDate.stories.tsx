import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelDate from './pixel-date'

export default {
  title: 'Pixel Date',
  component: PixelDate,
} as ComponentMeta<typeof PixelDate>

const Template: ComponentStory<typeof PixelDate> = (args) => {
  return (
    <React.Fragment>
      <PixelDate {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  value: new Date(),
  format: 'dateWithTime',
  size: '50px'
}
