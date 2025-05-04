<template>
	<div>
        <h1 class="title_size_40 mb-15">Персоналии</h1>
        <p class="text-gray">{{persons.length}} авторов</p>
        
        <div v-if="persons.length" class="list-persons mt-40">
            <div v-for="card in persons" class="card-person">
                <div style="display: flex; gap:10px; align-items: center">
                    <img :src="card.avatar" class="card-person__avatar"/>
                    <div>
                        <h3 class="card-person__name">{{card.name}}</h3>
                        <div class="card-person__dates">{{card.dates}}</div>
                    </div>
                    <Button :to="`/personalities/${card.slug}`" style="margin-left: auto">Изучить автора</Button>
                </div>

                <p class="card-person__description mt-10">{{card.description}}</p>

                <ul v-if="card.tags.length" class="card-person__tags">
                    <li v-for="tag in card.tags" class="card-person__tag">{{tag}}</li>
                </ul>

                <div v-if="card.pictures.length" class="list-pictures">
                    <div v-for="picture in card.pictures" class="picture">
                        <img :src="picture.img" class="picture__img"/>
                        <div class="picture__name">«{{picture.name}}»</div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import {useStore} from "~/stores/store.js";

export default defineNuxtComponent({
	name: 'PageArtMovements',
	async setup() {
        // const store = process.client ? useStore() : null;
		// const store = useStore();
		let persons = [];

		try {
            const response = await $fetch('/data/artists.json');

			if (response) {
                persons = response;
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
            persons
		}
	},
})
</script>

<style scoped lang="scss">
.list-persons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 815px;
    margin-inline: auto;
}

.list-pictures {
    display: flex;
    gap: 15px;
}

.picture {
    max-width: 246px;
    
    &__img {
        width: 100%;
        aspect-ratio: 246/173;
        border-radius: 10px;
        object-fit: cover;
    }
    
    &__name {
        margin-top: 10px;
        font-size: 15px;
        font-weight: 500;
    }
}

.card-person {
    padding: 20px;
    border-radius: 10px;
    background-color: var(--neutrals1);
    
    &__avatar {
        width: 75px;
        height: 75px;
        object-fit: cover;
        border-radius: 50%;
    }

    &__name {
        margin-bottom: 5px;
    }

    &__dates {
        color: var(--neutrals4);
    }

    &__description {
        margin-bottom: 25px;
        color: var(--neutrals4);
    }

    &__tags {
        display: flex;
        gap: 10px;
        margin-bottom: 25px;
    }

    &__tag {
        background-color: var(--neutrals3);
    }
}
</style>
