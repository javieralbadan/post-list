import type PostItem from '@/types/PostItem';

export const postsMapper = (postList: PostItem[]): PostItem[] => {
	return postList.map(({ id }) => ({
		id,
		title: `Post ${id}`,
	}));
};
