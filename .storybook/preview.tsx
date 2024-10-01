import type { Preview } from '@storybook/react'
import React from 'react'
import '../src/app/globals.css'

const preview: Preview = {
	decorators: [story => <div className='font-poppins font-audiowide'>{story()}</div>],
	parameters: {
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

