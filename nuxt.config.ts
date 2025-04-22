// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.APP_ENV === 'development';
const isStaging = process.env.APP_ENV === 'staging';
const isProd = process.env.APP_ENV === 'production';
const HOST_FRONTEND = isStaging ? 'https://staging.18peaches.com' : (isProd ? 'https://18peaches.com' : 'http://localhost:3000');

console.log('APP_ENV:', process.env.APP_ENV);
console.log('HOST_FRONTEND:', HOST_FRONTEND);

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	nitro: {
		preset: 'static'
	},
	ssr: true,
	devtools: {enabled: false},
	modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxt/scripts'],
	components: [
		{
			path: '~/components', // will get any games nested in let's say /games/nested
			pathPrefix: false,
		},
	],
	// vite: {
	// 	define: {
	// 		'process.env.DEBUG': false,
	// 	},
	// 	css: {
	// 		preprocessorOptions: {
	// 			scss: {
	// 				additionalData: '@use "@/assets/styles/index.scss" as *;',
	// 			},
	// 		},
	// 	},
	// },
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/basic/_variables.scss" as *;',
					silenceDeprecations: ['legacy-js-api'],
				},
			},
		},
		build: {
			cssCodeSplit: false,
		},
	},
	css: [
		'assets/styles/basic/_reset.scss',
		'assets/styles/basic/_grid.scss',
		'assets/styles/basic/_typography.scss',
		'assets/styles/basic/_mixins.scss',
		// 'assets/styles/components/_buttom.scss',
		// 'assets/styles/components/_breadcrumbs.scss',
		// 'assets/styles/components/_card.scss',
		// 'assets/styles/components/_forms.scss',
		// 'assets/styles/components/_table.scss',
		// 'assets/styles/components/_content-container.scss',
		// 'assets/styles/components/_game-details.scss',
		// 'assets/styles/components/_features.scss',
		// 'assets/styles/components/_news.scss',
		'assets/styles/common.scss',
	],
	app: {
		baseURL: isDev ? '/' : '/ira-diplom/', // только если проект лежит не в корне
		head: {
			title: 'Diplom',
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					name: 'description',
					content: '',
				},
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'msapplication-TileColor', content: '#da532c' },
				{ name: 'msapplication-config', content: '/browserconfig.xml' },
				{ name: 'theme-color', content: '#ffffff' },
			],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
				},
				// {
				// 	rel: 'stylesheet',
				// 	type: 'text/css',
				// 	href: 'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.1/cookieconsent.min.css',
				// },
				// {
				// 	rel: 'icon',
				// 	type: 'image/x-icon',
				// 	href: `${BASE_URL}favicon.ico`,
				// },
				// {
				// 	rel: 'apple-touch-icon',
				// 	sizes: '180x180',
				// 	type: 'image/x-icon',
				// 	href: `${BASE_URL}apple-touch-icon.png`,
				// },
				// {
				// 	rel: 'icon',
				// 	type: 'image/png',
				// 	sizes: '32x32',
				// 	href: `${BASE_URL}favicon-32x32.png`,
				// },
				// {
				// 	rel: 'icon',
				// 	type: 'image/png',
				// 	sizes: '16x16',
				// 	href: `${BASE_URL}favicon-16x16.png`,
				// },
				// { rel: 'manifest', href: `${BASE_URL}site.webmanifest` },
				// {
				// 	rel: 'mask-icon',
				// 	href: `${BASE_URL}safari-pinned-tab.svg`,
				// 	color: '#5bbad5',
				// },
			],
		},
	},
})