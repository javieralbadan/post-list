import type PostItem from '@/types/PostItem';
import { postsMapper } from '@/mappers/posts';
import { usePostStore } from '@/stores/posts';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const fetchPosts = async (slice?: number) => {
	try {
		const response: Response = await fetch(`${baseUrl}/posts`);
		if (response.status !== 200) {
			throw new Error(response.statusText);
		}

		let data: PostItem[] = await response.json();
		data = data.slice(0, slice || data.length);

		const store = usePostStore();
		store.setItems(postsMapper(data));
	} catch (error) {
		throw new Error(`${error}`);
	}
};
