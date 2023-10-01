<script setup lang="ts">
import IconChevronUp from '@/components/icons/IconChevronUp.vue';
import IconChevronDown from '@/components/icons/IconChevronDown.vue';
import type PostItem from '@/types/PostItem';
// import { getPosts } from '@/services/posts';

interface Props {
	post: PostItem;
	index: number;
	isLastItem: boolean;
}

const props = defineProps<Props>();
const isFirstItem = props.index === 0;
const moveUp = () => {
	console.log('🚀 ~ file: PostItem.vue:18 ~ moveUp ~ moveUp:', props.post, props.index);
};
const moveDown = () => {
	console.log('🚀 ~ file: PostItem.vue:22 ~ moveDown ~ moveDown:', props.post, props.index);
};
</script>

<template>
	<div class="my-2 flex h-20 items-center justify-between rounded bg-white p-2 font-light shadow-lg">
		{{ post.title }}
		<div :class="['flex h-full flex-col', isFirstItem || isLastItem ? 'justify-center' : 'justify-between']">
			<IconChevronUp
				v-if="!isFirstItem"
				aria-pressed="false"
				class="text-gray-500 hover:text-gray-900"
				role="button"
				@click="moveUp"
				@keydown="moveUp"
			/>
			<IconChevronDown
				v-if="!isLastItem"
				aria-pressed="false"
				class="text-gray-500 hover:text-gray-900"
				role="button"
				@click="moveDown"
				@keydown="moveDown"
			/>
		</div>
	</div>
</template>

<style scoped></style>
