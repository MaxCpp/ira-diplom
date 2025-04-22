<template>
	<div>
        Изучение
	</div>
</template>

<script>
import {useStore} from "~/stores/store.js";

export default defineNuxtComponent({
	name: 'PageHome',
	async setup() {
		const {$config} = useNuxtApp();
		const store = useStore();
		let games = [];

		// try {
		// 	const response = await api.games.fetchGames();
        //
		// 	if (response) {
		// 		games = response.data;
		// 	}
		// } catch (e) {
        //
		// }
        //
		// useSeoMeta({
		// 	title: t('pages.games.title'),
		// 	ogTitle: t('pages.games.title'),
		// 	description: t('pages.games.description'),
		// 	ogDescription: t('pages.games.description'),
		// 	ogImage: $config.public.OG_DEFAULT_IMAGE,
		// 	robots: 'index, follow'
		// });

		return {
			store,
			games
		}
	},
})
</script>

<style scoped lang="scss">


</style>
