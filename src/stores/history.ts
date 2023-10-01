import { ref } from 'vue';
import { defineStore } from 'pinia';
import { usePostStore } from '@/stores/posts';
import type ActionItem from '@/types/ActionItem';

export const useHistoryStore = defineStore('actionsHistory', () => {
	const actions = ref<ActionItem[]>([]);
	const postsStore = usePostStore();

	const addAction = (action: ActionItem) => {
		actions.value.push(action);
	};

	const redoAction = (action: ActionItem, newIndex: number) => {
		actions.value = actions.value.splice(newIndex, 1);
		postsStore.reorderItems(action.post, newIndex);
	};

	return { actions, addAction, redoAction };
});
