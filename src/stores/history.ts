import { ref } from 'vue';
import { defineStore } from 'pinia';
import { usePostStore } from '@/stores/posts';
import type ActionItem from '@/types/ActionItem';

export const useHistoryStore = defineStore('actionsHistory', () => {
	const actions = ref<ActionItem[]>([]);
	const postsStore = usePostStore();

	const addAction = (action: ActionItem) => {
		actions.value.unshift(action);
	};

	const removeAction = (index: number) => {
		actions.value.splice(index, 1);
	};

	const redoAction = (index: number) => {
		let currentIndex = index;

		while (currentIndex >= 0) {
			const actionItem = actions.value[currentIndex];
			const newIndexFrom = actionItem.indexTo;
			const newIndexTo = actionItem.indexFrom;
			postsStore.reorderItems(actionItem.post, newIndexFrom, newIndexTo);
			removeAction(currentIndex);

			currentIndex--;
		};
	};

	return { actions, addAction, redoAction };
});
