import { ref } from 'vue';
import { defineStore } from 'pinia';
import type PostItem from '@/types/PostItem';

export const usePostStore = defineStore('postList', () => {
	const posts = ref<PostItem[]>([]);

	const setItems = (itemsList: PostItem[]) => {
		posts.value = itemsList;
	};

	const reorderItems = (post: PostItem, fromIndex: number, indexTo: number) => {
		const currentItem = posts.value[fromIndex];
		posts.value.splice(fromIndex, 1);
		posts.value.splice(indexTo, 0, currentItem);
	};

	return { posts, setItems, reorderItems };
});
