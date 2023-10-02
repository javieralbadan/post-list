import { ref } from 'vue';
import { defineStore } from 'pinia';
import { usePostStore } from '@/stores/posts';
import type ActionItem from '@/types/ActionItem';

export const useHistoryStore = defineStore('actionsHistory', () => {
	const actions = ref<ActionItem[]>([]);
	const postsStore = usePostStore();

	const getNextId = (): number => {
		return actions.value.length;
	};

	const addAction = (action: ActionItem) => {
		actions.value.unshift(action);
	};

	const removeLastAction = () => {
		actions.value.splice(0, 1);
	};

	const redoAction = (index: number) => {
		let currentIndex = index;

		while (currentIndex >= 0) {
			if (!actions.value.length) {
				break;
			}

			const lastActionCommited = actions.value[0];
			const newIndexFrom = lastActionCommited.indexTo;
			const newIndexTo = lastActionCommited.indexFrom;
			postsStore.reorderItems(newIndexFrom, newIndexTo);
			removeLastAction();

			currentIndex--;
		}
	};

	return { actions, getNextId, addAction, redoAction };
});
