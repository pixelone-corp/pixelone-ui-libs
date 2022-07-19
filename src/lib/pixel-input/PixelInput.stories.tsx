import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelInput from './pixel-input'
import {
  Section,
  SectionActions,
  SectionContent,
  SectionTitle
} from '../common-styled-component'

export default {
  title: 'Pixel Input',
  component: PixelInput
} as ComponentMeta<typeof PixelInput>
const Template: ComponentStory<typeof PixelInput> = (args) => {
  const [value, setValue] = React.useState('')
  return (
    <React.Fragment>
      <PixelInput
        {...args}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <Section>
        <SectionTitle>Enter Text to show here</SectionTitle>
        <SectionContent>{value}</SectionContent>
      </Section>
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  placeholder: 'Pixel Input'
}
