import { setActivePinia, createPinia } from 'pinia';
import { describe, expect, it, vi } from 'vitest';
import { usePostStore } from '../posts';
import { useHistoryStore } from '../history';
import { MOCK_ACTION_1, MOCK_ACTION_2, MOCK_ACTION_3, MOCK_ACTIONS_LIST } from '../__mocks__/index';
import type ActionItem from '@/types/ActionItem';

const getHistoryStore = (ActionsArray?: ActionItem[]) => {
	const historyStore = useHistoryStore();
	ActionsArray?.forEach((action) => historyStore.addAction(action));

	return historyStore;
};

describe('useHistoryStore', () => {
	it('should return an empty initial array', () => {
		setActivePinia(createPinia());
		const historyStore = getHistoryStore();
		expect(historyStore.actions).toHaveLength(0);
	});

	it('should add individual actions to the history, each one to the top of the array', () => {
		setActivePinia(createPinia());
		const historyStore = getHistoryStore();

		historyStore.addAction(MOCK_ACTION_1);
		expect(historyStore.actions).toHaveLength(1);

		historyStore.addAction(MOCK_ACTION_2);
		expect(historyStore.actions).toHaveLength(2);
		expect(historyStore.actions[0]).toEqual(MOCK_ACTION_2);
		expect(historyStore.actions[1]).toEqual(MOCK_ACTION_1);
	});

	it('should do not redo action from an empty history', () => {
		setActivePinia(createPinia());
		const postStore = usePostStore();
		vi.spyOn(postStore, 'reorderItems');

		const historyStore = getHistoryStore();
		expect(historyStore.actions).toHaveLength(0);

		const actionIndexToRedo = 0;
		historyStore.redoAction(actionIndexToRedo);
		expect(postStore.reorderItems).toHaveBeenCalledTimes(0);
	});

	it('should redo one action from the history', () => {
		setActivePinia(createPinia());
		const postStore = usePostStore();
		vi.spyOn(postStore, 'reorderItems');

		const historyStore = getHistoryStore([MOCK_ACTION_1]);
		expect(historyStore.actions).toHaveLength(1);

		const mockIndexFrom = MOCK_ACTION_1.indexTo;
		const mockIndexTo = MOCK_ACTION_1.indexFrom;
		const actionIndexToRedo = 0;
		historyStore.redoAction(actionIndexToRedo);

		expect(postStore.reorderItems).toHaveBeenCalledTimes(1);
		expect(postStore.reorderItems).toHaveBeenCalledWith(mockIndexFrom, mockIndexTo);
		expect(historyStore.actions).toHaveLength(0);
	});

	it('should redo two actions from the history', () => {
		setActivePinia(createPinia());
		const postStore = usePostStore();
		vi.spyOn(postStore, 'reorderItems');

		const historyStore = getHistoryStore(MOCK_ACTIONS_LIST);
		expect(historyStore.actions).toHaveLength(3);

		const mockActionIndex = 1;
		historyStore.redoAction(mockActionIndex);

		expect(postStore.reorderItems).toHaveBeenCalledTimes(2);
		expect(postStore.reorderItems).nthCalledWith(1, MOCK_ACTION_3.indexTo, MOCK_ACTION_3.indexFrom);
		expect(postStore.reorderItems).nthCalledWith(2, MOCK_ACTION_2.indexTo, MOCK_ACTION_2.indexFrom);

		expect(historyStore.actions).toHaveLength(1);

		const expectedRemainingAction = historyStore.actions[0];
		expect(expectedRemainingAction).toEqual(MOCK_ACTION_1);
	});

	it('should redo all actions from the history', () => {
		setActivePinia(createPinia());
		const postStore = usePostStore();
		vi.spyOn(postStore, 'reorderItems');

		const historyStore = getHistoryStore(MOCK_ACTIONS_LIST);
		expect(historyStore.actions).toHaveLength(3);

		const mockActionIndex = 2;
		historyStore.redoAction(mockActionIndex);

		expect(postStore.reorderItems).toHaveBeenCalledTimes(3);
		expect(postStore.reorderItems).nthCalledWith(1, MOCK_ACTION_3.indexTo, MOCK_ACTION_3.indexFrom);
		expect(postStore.reorderItems).nthCalledWith(2, MOCK_ACTION_2.indexTo, MOCK_ACTION_2.indexFrom);
		expect(postStore.reorderItems).nthCalledWith(3, MOCK_ACTION_1.indexTo, MOCK_ACTION_1.indexFrom);
		expect(historyStore.actions).toHaveLength(0);
	});
});
