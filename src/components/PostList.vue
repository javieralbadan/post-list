<script setup lang="ts">
import LoadingMessage from '@/components/LoadingMessage.vue';
import PostItem from '@/components/PostItem.vue';
import { usePostStore } from '@/stores/posts';
import { computed } from 'vue';

const store = usePostStore();
const posts = computed(() => store.posts);
</script>

<template>
	<div class="flex flex-col">
		<h1 class="text-xl text-white">{{ $t('app.title') }}</h1>
		<LoadingMessage v-if="!posts.length" />
		<template v-else>
			<PostItem
				v-for="(item, index) in posts"
				:key="item.id"
				:index="index"
				:isLastItem="posts.length === index + 1"
				:post="item"
			/>
		</template>
	</div>
</template>

<style scoped></style>
