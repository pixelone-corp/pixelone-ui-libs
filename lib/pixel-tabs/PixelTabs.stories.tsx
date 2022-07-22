import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelTabs from './pixel-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAppleWhole,
  faCocktail,
  faCoffee,
  faMugHot,
  faPaperPlane,
  faPersonArrowUpFromLine
} from '@fortawesome/free-solid-svg-icons'
import { Section, SectionActions } from '../common-styled-component'

export default {
  title: 'Pixel Tabs',
  component: PixelTabs
} as ComponentMeta<typeof PixelTabs>
const tabs = [
  {
    label: 'Tab 1',
    value: 'tab-1',
    icon: <FontAwesomeIcon icon={faCoffee} />
  },
  {
    label: 'Tab 2',
    value: 'tab-2',
    icon: <FontAwesomeIcon icon={faCocktail} />
  },
  {
    label: 'Tab 3',
    value: 'tab-3',
    icon: <FontAwesomeIcon icon={faMugHot} />
  },
  {
    label: 'Tab 4',
    value: 'tab-4',
    icon: <FontAwesomeIcon icon={faAppleWhole} />
  },
  {
    label: 'Tab 5',
    value: 'tab-5',
    icon: <FontAwesomeIcon icon={faPaperPlane} />
  }
]
const Template: ComponentStory<typeof PixelTabs> = (args) => {
  return (
    <React.Fragment>
      <Section>
        <SectionActions>
          {' '}
          <PixelTabs {...args} tabs={tabs} />
        </SectionActions>
      </Section>
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {}
