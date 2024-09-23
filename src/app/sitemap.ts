import type { MetadataRoute } from 'next'

function getHost(): string {
	// Se estiver em produção, usa a URL fornecida no ambiente
	// ou, no ambiente local, pode usar uma URL padrão
	return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = getHost()

	return [
		{
			url: `${baseUrl}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: `${baseUrl}/sobre-nos`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9
		},
		{
			url: `${baseUrl}/servicos`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9
		}
	]
}
