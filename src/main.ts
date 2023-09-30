import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import enUS from './locales/en-US.json';
import App from './App.vue';

type MessageSchema = typeof enUS;

const app = createApp(App);
const i18n = createI18n<[MessageSchema], 'en-US'>({
	locale: 'en-US',
	messages: {
		'en-US': enUS,
	},
});  

app.use(createPinia());
app.use(i18n);

app.mount('#app');
