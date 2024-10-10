import type { Preview } from '@storybook/react'
import React from 'react'
import { Toaster } from 'sonner'
import resolveConfig from 'tailwindcss/resolveConfig'
import '../src/app/globals.css'
import tailwindConfig from '../tailwind.config.ts'

const tailwind = resolveConfig(tailwindConfig)

const preview: Preview = {
	decorators: [
		story => (
			<div className='font-poppins font-audiowide'>
				<Toaster
					richColors
					toastOptions={{
						classNames: {
							toast: 'text-base rounded-none'
						}
					}}
				/>
				{story()}
			</div>
		)
	],
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
		layout: 'fullscreen',
		viewport: {
			viewports: {
				auto: {
					name: 'Default',
					styles: {
						width: '100%',
						height: '100%'
					}
				},
				tailwindxs: {
					name: 'Tailwind xs',
					styles: {
						width: '320px',
						height: '100%'
					}
				},
				tailwindsm: {
					name: 'Tailwind sm',
					styles: {
						width: '640px',
						height: '100%'
					}
				},
				tailwindmd: {
					name: 'Tailwind md',
					styles: {
						width: '768px',
						height: '100%'
					}
				},
				tailwindlg: {
					name: 'Tailwind lg',
					styles: {
						width: '1024px',
						height: '100%'
					}
				},
				tailwindxl: {
					name: 'Tailwind xl',
					styles: {
						width: '1280px',
						height: '100%'
					}
				},
				tailwind2xl: {
					name: 'Tailwind 2xl',
					styles: {
						width: '1536px',
						height: '100%'
					}
				}
			},
			defaultViewport: 'auto'
		}
	}
}

export default preview

