<template>
    <div>
        <h1 class="title_size_40 mb-15">Источники</h1>
        <p class="text-gray">Изображения картин, скульптур и архитектурных объектов взяты из открытых образовательных источников, используемых исключительно в учебных целях. Все визуальные материалы используются в рамках образовательного проекта и не предполагают коммерческого использования..</p>
        
        <ol v-if="terms.length" class="list-terms mt-40">
            <li v-for="card in terms" class="card-term">
                <p class="card-term__description mt-10">{{card.text}}</p>
                <a v-if="card.link" class="card-term__description mt-10" href="card.link">ссылка</a>
            </li>
        </ol>
    </div>
</template>

<script>
import {useStore} from "~/stores/store.js";

export default defineNuxtComponent({
    name: 'PageSources',
    async setup() {
        // const store = process.client ? useStore() : null;
        // const store = useStore();
        let terms = [];
        
        try {
            const response = await $fetch('/data/sources.json');
            
            if (response) {
                terms = response;
            }
        } catch (e) {
            console.log(e)
        }
        
        // useSeoMeta({
        // 	title: t('pages.games.title'),
        // 	ogTitle: t('pages.games.title'),
        // 	description: t('pages.games.description'),
        // 	ogDescription: t('pages.games.description'),
        // 	ogImage: $config.public.OG_DEFAULT_IMAGE,
        // 	robots: 'index, follow'
        // });
        
        return {
            // store,
            terms
        }
    },
})
</script>

<style scoped lang="scss">
.list-terms {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 815px;
    margin-inline: auto;
    list-style: decimal;
}

.card-term {
    padding: 20px;
    border-radius: 10px;
    background-color: var(--neutrals1);
    
    &__name {
        font-size: 17px;
        margin-bottom: 11px;
    }
    
    &__description {
        color: var(--neutrals4);
    }
}
</style>
