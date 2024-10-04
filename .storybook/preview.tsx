import type { Preview } from '@storybook/react'
import React from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import '../src/app/globals.css'
import tailwindConfig from '../tailwind.config.ts'

const tailwind = resolveConfig(tailwindConfig)

const preview: Preview = {
	decorators: [story => <div className='font-poppins font-audiowide'>{story()}</div>],
	parameters: {
		backgrounds: {
			values: [
				{ name: 'Dark', value: tailwind.theme.colors.secondary },
				{ name: 'Light', value: tailwind.theme.colors.white }
			],
			default: 'Light'
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		layout: 'fullscreen'
	}
}

export default preview

