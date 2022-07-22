import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelTag from './pixel-tag'

export default {
  title: 'Pixel Tag',
  component: PixelTag
} as ComponentMeta<typeof PixelTag>

const Template: ComponentStory<typeof PixelTag> = (args) => {
  return (
    <React.Fragment>
      <PixelTag {...args}>Open</PixelTag>
      <PixelTag {...args}>Closed</PixelTag>
      <PixelTag {...args}>Paid</PixelTag>
      <PixelTag {...args}>completed</PixelTag>
      <PixelTag {...args}>Canceled</PixelTag>
      <PixelTag {...args}>packaging</PixelTag>
    </React.Fragment>
  )
}
export const All = Template.bind({})
All.args = {}
