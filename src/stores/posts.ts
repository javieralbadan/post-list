import { ref } from 'vue';
import { defineStore } from 'pinia';
import type PostItem from '@/types/PostItem';

export const usePostStore = defineStore('postList', () => {
	const posts = ref<PostItem[]>([]);

	const setItems = (itemsList: PostItem[]) => {
		posts.value = itemsList;
	};

	const reorderItems = (indexFrom: number, indexTo: number) => {
		const currentItem = posts.value[indexFrom];
		if (!posts.value.length || !currentItem) {
			return;
		}

		posts.value.splice(indexFrom, 1);
		posts.value.splice(indexTo, 0, currentItem);
	};

	return { posts, setItems, reorderItems };
});
