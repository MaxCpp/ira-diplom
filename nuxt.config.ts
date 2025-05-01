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
		// prerender: {
		// 	routes: ['/'],       // явно
		// 	crawlLinks: false,   // отключаем автоматический обход
		// },
		preset: 'static'
	},
	ssr: true,
	devtools: {enabled: false},
	modules: [
		// '@nuxt/eslint',
		// '@nuxt/scripts',
		// '@pinia/nuxt'
	],
	components: [
		{
			path: '~/components', // will get any games nested in let's say /games/nested
			pathPrefix: false,
		},
	],
	// vite: {
	// 	css: {
	// 		preprocessorOptions: {
	// 			scss: {
	// 				additionalData: '@use "@/assets/styles/basic/_variables.scss" as *;',
	// 			},
	// 		},
	// 	},
	// },
	css: [
		'~/assets/styles/basic/_variables.scss',
		'~/assets/styles/basic/_reset.css',
		'~/assets/styles/basic/_grid.scss',
		'~/assets/styles/basic/_typography.scss',
		'~/assets/styles/basic/_mixins.scss',
		'~/assets/styles/common.scss',
	],
	app: {
		buildAssetsDir: '_nuxt',
		baseURL: isDev ? '/' : '/maxcpp.github.io/', // только если проект лежит не в корне
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
				// 	href: '//assets/styles/basic/_reset.css',
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
