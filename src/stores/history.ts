import { ref } from 'vue';
import { defineStore } from 'pinia';
import type ActionItem from '@/types/ActionItem';

const mockActions : Array<ActionItem> = [
	{
		id: 0,
		indexFrom: 0,
		indexTo: 1,
		post: {
			id: 1,
			title: 'Post 1',
		},
	},
	{
		id: 1,
		indexFrom: 0,
		indexTo: 1,
		post: {
			id: 1,
			title: 'Post 2',
		},
	},
];

export const useHistoryStore = defineStore('actionsHistory', () => {
	const actions = ref(mockActions);
	
	return { actions };
});
