<script setup lang="ts">
import IconChevronDown from '@/components/icons/IconChevronDown.vue';
import IconChevronUp from '@/components/icons/IconChevronUp.vue';
import type ActionItem from '@/types/ActionItem';
import type PostItem from '@/types/PostItem';
import { useHistoryStore } from '@/stores/history';
import { usePostStore } from '@/stores/posts';

interface Props {
	post: PostItem;
	index: number;
	isLastItem: boolean;
}

const props = defineProps<Props>();
const moveButtonClasses = 'text-gray-500 hover:text-gray-900 transition-all';

const storePost = usePostStore();
const storeHistory = useHistoryStore();

const commitAction = (indexFrom: number, indexTo: number) => {
	const action: ActionItem = {
		id: storeHistory.getNextId(),
		post: props.post,
		indexFrom,
		indexTo,
	};
	storeHistory.addAction(action);
	storePost.reorderItems(indexFrom, indexTo);
};

const moveUp = () => {
	commitAction(props.index, props.index - 1);
};

const moveDown = () => {
	commitAction(props.index, props.index + 1);
};
</script>

<template>
	<div class="my-2 flex h-20 items-center justify-between rounded bg-white p-2 text-sm font-light shadow-lg">
		{{ post.title }}
		<div
			class="flex h-full flex-col"
			:class="[index === 0 || isLastItem ? 'justify-center' : 'justify-between']"
		>
			<IconChevronUp
				v-show="index !== 0"
				aria-pressed="false"
				:class="moveButtonClasses"
				role="button"
				@click="moveUp"
				@keydown="moveUp"
			/>
			<IconChevronDown
				v-show="!isLastItem"
				aria-pressed="false"
				:class="moveButtonClasses"
				role="button"
				@click="moveDown"
				@keydown="moveDown"
			/>
		</div>
	</div>
</template>

<style scoped></style>
