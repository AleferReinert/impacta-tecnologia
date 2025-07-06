/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		deviceSizes: [320, 640, 768, 1024, 1280, 1366, 1536, 1920],
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337'
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: ''
			}
		]
	}
}

export default nextConfig

