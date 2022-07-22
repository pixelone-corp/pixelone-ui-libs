import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelInputTag from './PixelInputTag'

export default {
  title: 'Pixel Input Tag',
  component: PixelInputTag
} as ComponentMeta<typeof PixelInputTag>

const Template: ComponentStory<typeof PixelInputTag> = (args) => {
  //   const [value, setValue] = React.useState('')
  //   const onChangeHandler = (e) => {
  //     setValue(e.target.value)
  //   }
  //   args.onChange = onChangeHandler
  return (
    <React.Fragment>
      <h2>Pixel Input Tag</h2>

      <PixelInputTag {...args} placeholder='Select Tags...' />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  label: 'PixelInputTag',
  allowCustomTags: false,
  options: [
    {
      value: '1',
      label: 'Please select'
    },
    {
      value: '2',
      label: 'Option 1'
    },
    {
      value: '3',
      label: 'Option 2'
    },
    {
      value: '4',
      label: 'Option 3'
    },
    {
      value: '5',
      label: 'Option 4'
    },
    {
      value: '6',
      label: 'Option 5'
    },
    {
      value: '7',
      label: 'Option 6'
    },
    {
      value: '8',
      label: 'Option 7'
    }
  ]
}
export const CustomTags = Template.bind({})
CustomTags.args = {
  label: 'PixelInputTag',
  allowCustomTags: true,
  options: [
    {
      value: '1',
      label: 'Please select'
    },
    {
      value: '2',
      label: 'Option 1'
    },
    {
      value: '3',
      label: 'Option 2'
    },
    {
      value: '4',
      label: 'Option 3'
    },
    {
      value: '5',
      label: 'Option 4'
    },
    {
      value: '6',
      label: 'Option 5'
    },
    {
      value: '7',
      label: 'Option 6'
    },
    {
      value: '8',
      label: 'Option 7'
    }
  ]
}
