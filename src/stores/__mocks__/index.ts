import type PostItem from '@/types/PostItem';
import type ActionItem from '@/types/ActionItem';

export const MOCK_POST_1: PostItem = {
	id: 1,
	title: 'Post 1',
};

export const MOCK_POST_2: PostItem = {
	id: 2,
	title: 'Post 2',
};

export const MOCK_POST_3: PostItem = {
	id: 3,
	title: 'Post 3',
};

export const MOCK_POST_4: PostItem = {
	id: 4,
	title: 'Post 4',
};

export const MOCK_POST_5: PostItem = {
	id: 5,
	title: 'Post 5',
};

export const MOCK_POSTS_LIST: PostItem[] = [MOCK_POST_1, MOCK_POST_2, MOCK_POST_3, MOCK_POST_4, MOCK_POST_5];

export const MOCK_ACTION_1: ActionItem = {
	indexFrom: 1,
	indexTo: 2,
	post: MOCK_POST_2,
};

export const MOCK_ACTION_2: ActionItem = {
	indexFrom: 3,
	indexTo: 4,
	post: MOCK_POST_4,
};

export const MOCK_ACTION_3: ActionItem = {
	indexFrom: 1,
	indexTo: 0,
	post: MOCK_POST_3,
};

export const MOCK_ACTIONS_LIST: ActionItem[] = [MOCK_ACTION_1, MOCK_ACTION_2, MOCK_ACTION_3];
