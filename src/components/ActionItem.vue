<script setup lang="ts">
import type ActionItem from '@/types/ActionItem';

interface Props {
	action: ActionItem;
	index: number;
	isLastItem: boolean;
}

const props = defineProps<Props>();
const isFirstItem = props.index === 0;
const commitedTextProps = {
	postTitle: props.action.post.title,
	indexFrom: props.action.indexFrom,
	indexTo: props.action.indexTo,
};

const redoAction = () => {
	console.log('🚀 ~ file: ActionItem.vue:19 ~ redoAction ~ redoAction:', props.action, props.index);
};
</script>

<template>
	<div
		class="flex items-center justify-between border border-gray-200 bg-white px-2 text-sm"
		:class="{ 'rounded-t-lg': isFirstItem, 'rounded-b-lg': isLastItem }"
	>
		<p class="flex h-16 items-center py-2 text-base font-light text-gray-700">
			{{ $t('actionItem.commitedText', commitedTextProps) }}
		</p>
		<button
			class="h-12 w-fit rounded bg-emerald-400 px-4 py-2 font-medium text-gray-600 transition-all hover:bg-emerald-600 hover:text-white"
			type="button"
			@click="redoAction"
		>
			{{ $t('actionItem.redoButtonText') }}
		</button>
	</div>
</template>

<style scoped></style>
