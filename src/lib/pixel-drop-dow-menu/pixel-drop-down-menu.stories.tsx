import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelDropDown from './pixel-drop-down-menu'

export default {
  title: 'Pixel Dropdown Menu',
  component: PixelDropDown,
} as ComponentMeta<typeof PixelDropDown>

const Template: ComponentStory<typeof PixelDropDown> = (args) => {
  return (
    <React.Fragment>
      <PixelDropDown {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  className: 'string',
  variant: "outline",
  size: "lg",
  active: true,
  disabled: false,
  margin: '10px',
  padding: '20px',
  tooltip: 'string',
  toggleText: "Dropdown Button",
   options: [
    {
      label: "Child"
    }
  ]
}
