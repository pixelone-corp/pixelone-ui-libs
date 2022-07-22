import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelCurrency from './pixel-currency'

export default {
  title: 'Pixel Currency',
  component: PixelCurrency,
} as ComponentMeta<typeof PixelCurrency>

const Template: ComponentStory<typeof PixelCurrency> = (args) => {
  return (
    <React.Fragment>
      <PixelCurrency {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  value: 500,
  hideSymbol: false
}
