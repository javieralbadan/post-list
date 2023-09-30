
import type PostItem from '@/types/PostItem';

export const getPosts = (): Array<PostItem> => {
	return [
		{
			id: 1,
			title: 'Post 1',
		},
		{
			id: 2,
			title: 'Post 2',
		},
	];
};