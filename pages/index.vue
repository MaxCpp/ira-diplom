<template>
	<div>
        Index
	</div>
</template>

<script>
import {useStore} from "~/stores/store.js";

export default defineNuxtComponent({
	name: 'PageHome',
	async setup() {
        try {
            console.log('✅ index.vue setup entered 1');
            const store = useStore();
            console.log('✅ index.vue setup entered 2');
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
            }
        } catch (err) {
            console.error('❌ setup error in index.vue', err);
            return {};
        }
	},
})
</script>

<style scoped lang="scss">


</style>
