import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect } from 'vitest';
import { usePostStore } from '../posts';
import { MOCK_POST_2, MOCK_POSTS_LIST } from '../__mocks__/index';

describe('usePostStore', () => {
	it('should return an empty initial array', () => {
		setActivePinia(createPinia());
		const postStore = usePostStore();
		expect(postStore.posts).toHaveLength(0);
	});

	it('should set a new items array as the post list', () => {
		setActivePinia(createPinia());
		const postStore = usePostStore();
		postStore.setItems(MOCK_POSTS_LIST);

		expect(postStore.posts).toHaveLength(5);
		expect(postStore.posts[0].id).toEqual(1);
		expect(postStore.posts[1].id).toEqual(2);
		expect(postStore.posts[2].id).toEqual(3);
		expect(postStore.posts[3].id).toEqual(4);
		expect(postStore.posts[4].id).toEqual(5);
	});

	it('should reorder of the array', () => {
		setActivePinia(createPinia());
		const postStore = usePostStore();
		postStore.setItems(MOCK_POSTS_LIST);
		
		const mockIndexFrom = 1;
		const mockIndexTo = 0;
		postStore.reorderItems(MOCK_POST_2, mockIndexFrom, mockIndexTo);

		expect(postStore.posts[0].id).toEqual(2);
		expect(postStore.posts[1].id).toEqual(1);
	});
});
