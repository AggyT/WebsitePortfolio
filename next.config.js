module.exports = {
	reactStrictMode: true,
	env: {
		dir: '/',
	},
	swcMinify: false,
	webpack: (config) => {
		config.resolve.alias.canvas = false;
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '/api/**'
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/badge/**'
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/github/**'
			},
			{
				protocol: 'https',
				hostname: '**.githubusercontent.com',
				pathname: '/**'
			}
		],
	},
}