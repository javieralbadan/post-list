<script setup lang="ts">
import PostList from '@/components/PostList.vue';
import ActionsHistory from '@/components/ActionsHistory.vue';
import LoadingMessage from '@/components/LoadingMessage.vue';
import { fetchPosts } from '@/services/posts';

fetchPosts(5);
</script>

<template>
	<Suspense>
		<main v-auto-animate class="mx-auto flex w-full max-w-4xl flex-col flex-wrap px-6 py-6 sm:flex-row sm:px-2">
			<PostList class="w-full sm:w-3/6 sm:pr-8 md:pr-16" />
			<ActionsHistory class="w-full sm:w-3/6" />
		</main>
		<template #fallback>
			<LoadingMessage />
		</template>
	</Suspense>
</template>

<style scoped></style>
