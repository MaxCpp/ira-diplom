import { defineStore } from 'pinia';
// import { useNuxtApp } from '#app';
// import {useApi} from '~/composables/api';

const isMobileSafari = () => {
	return (
		/iPhone|iPad|iPod/.test(navigator.userAgent) &&
		/Safari/.test(navigator.userAgent) &&
		!/CriOS|FxiOS|OPiOS|mercury/.test(navigator.userAgent) // Исключаем другие браузеры
	);
};

export const useStore = defineStore('store', {
	state: () => ({
		isMobile: null,
        isOpenMobileMenu: false,
        isShowedModalGameDemo: false,
	}),
	actions: {
	},
	getters: {
		// getOptionsVolatilities() {
		// 	return this.volatilities.map(item => ({
		// 		value: item.id,
		// 		label: item.name
		// 	}));
		// },
	}
})

