import { ref } from 'vue';
import { defineStore } from 'pinia';
import type PostItem from '@/types/PostItem';

export const usePostStore = defineStore('postList', () => {
	const posts = ref<PostItem[]>([]);

	const setItems = (itemsList: PostItem[]) => {
		posts.value = itemsList;
	};

	const reorderItems = (post: PostItem, newIndex: number) => {
		console.log('🚀 ~ file: posts.ts:13 ~ reorderItems ~ post, newIndex:', post, newIndex);
	};

	return { posts, setItems, reorderItems };
});
