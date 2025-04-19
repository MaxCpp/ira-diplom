// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	nitro: {
		preset: 'static'
	},
	// app: {
	// 	baseURL: '/имя-репозитория/', // только если проект лежит не в корне
	// },
	devtools: {enabled: true},
	modules: ['@nuxt/eslint', '@nuxt/scripts']
})