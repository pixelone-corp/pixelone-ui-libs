import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelDropDown from './pixel-select-drop-down'

export default {
  title: 'Pixel Select Dropdown',
  component: PixelDropDown,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof PixelDropDown>

const Template: ComponentStory<typeof PixelDropDown> = (args) => {
  const [value, setValue] = React.useState('')
  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }
  args.onChange = onChangeHandler
  return (
    <React.Fragment>
      <PixelDropDown value={value} {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  label: 'PixelDropDown',
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
      label: 'Diabled',
      disabled: true
    },
    {
      value: '6',
      label: 'Option 4'
    },

    {
      value: '7',
      label: 'Option 5'
    },

    {
      value: '8',
      label: 'Option 6'
    },

    {
      value: '9',
      label: 'Option 7'
    },

    {
      value: '10',
      label: 'Option 8'
    },

    {
      value: '11',
      label: 'Option 9'
    },

    {
      value: '12',
      label: 'Option 10'
    },

    {
      value: '13',
      label: 'Option 11'
    },

    {
      value: '14',
      label: 'Option 12'
    },

    {
      value: '15',
      label: 'Option 13'
    },

    {
      value: '16',
      label: 'Option 14'
    },

    {
      value: '17',
      label: 'Option 15'
    }
  ],
  isgrouped: false
}
export const Grouped = Template.bind({})
Grouped.args = {
  label: 'PixelDropDown',
  groupOptionData: {
    'Group Heading': [
      {
        value: '1',
        label: 'Option 1'
      },
      {
        value: '2',
        label: 'Option 2'
      }
    ],
    'Group Heading 2': [
      {
        value: '3',
        label: 'Option 3'
      },
      {
        value: '4',
        label: 'Option 4',
        disabled: true
      }
    ]
  },
  isgrouped: true
}
