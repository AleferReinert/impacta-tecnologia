/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337'
			},
			{
				protocol: 'https',
				hostname: 'impacta-tecnologia-api.onrender.com',
				port: ''
			}
		]
	}
}

export default nextConfig

