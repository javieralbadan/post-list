import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, vi, beforeAll } from 'vitest';

import { usePostStore } from '../posts';
import { useHistoryStore } from '../history';

const MOCK_POST_1 = {
	id: 1,
	title: 'Post 1',
};

const MOCK_ACTION_1 = {
	indexFrom: 0,
	indexTo: 1,
	post: MOCK_POST_1,
};

const MOCK_ACTION_2 = {
	indexFrom: 1,
	indexTo: 2,
	post: {
		id: 2,
		title: 'Post 2',
	},
};

describe('useHistoryStore', () => {
	beforeAll(() => {
		setActivePinia(createPinia());
	});

	it('should return an empty initial array', () => {
		const history = useHistoryStore();
		expect(history.actions).toHaveLength(0);
	});

	it('should add an action to the history', () => {
		const history = useHistoryStore();
		history.addAction(MOCK_ACTION_1);
		expect(history.actions).toHaveLength(1);
	});

	it('should redo an action to the history', () => {
		const history = useHistoryStore();
		const postsStore = usePostStore();

		vi.spyOn(postsStore, 'reorderItems');

		history.addAction(MOCK_ACTION_2);
		expect(history.actions).toHaveLength(2);

		const MOCK_NEW_INDEX = 0;
		history.redoAction(MOCK_ACTION_1, MOCK_NEW_INDEX);

		expect(postsStore.reorderItems).toHaveBeenCalledTimes(1);
		expect(postsStore.reorderItems).toHaveBeenCalledWith(MOCK_POST_1, MOCK_NEW_INDEX);
		expect(history.actions).toHaveLength(1);
	});
});
