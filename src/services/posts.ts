import type PostItem from '@/types/PostItem';
import { postsMapper } from '@/mappers/posts';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getPosts = async (slice?: number): Promise<PostItem[]> => {
	try {
		const response: Response = await fetch(`${baseUrl}/posts`);
		if (response.status !== 200) {
			console.log(response.statusText);
			return [];
		}

		let data: PostItem[] = await response.json();
		data = data.slice(0, slice || data.length);
		return postsMapper(data);
	} catch (error) {
		console.log(error);
		return [];
	}
};
