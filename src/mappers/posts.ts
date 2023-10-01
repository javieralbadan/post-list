import type PostItem from '@/types/PostItem';

export const postsMapper = (postList: Array<PostItem>): Array<PostItem> => {
	return postList.map(({ id }) => ({
		id,
		title: `Post ${id}`,
	}));
};