<script setup lang="ts">
import type ActionItem from '@/types/ActionItem';
import { useHistoryStore } from '@/stores/history';

interface Props {
	action: ActionItem;
	index: number;
	isLastItem: boolean;
}

const buttonBaseClasses = 'bg-green-400 text-gray-700';
const buttonHoverClasses = 'hover:bg-green-600 hover:text-white';

const props = defineProps<Props>();
const commitedTextParams = {
	postTitle: props.action.post.title,
	indexFrom: props.action.indexFrom,
	indexTo: props.action.indexTo,
};

const storeHistory = useHistoryStore();
const redoAction = () => {
	storeHistory.redoAction(props.index);
};
</script>

<template>
	<div
		class="flex items-center justify-between border border-gray-200 bg-white px-2 text-sm"
		:class="{ 'rounded-t-lg': index === 0, 'rounded-b-lg': isLastItem }"
	>
		<p class="flex h-16 items-center py-2 text-base font-light text-gray-700">
			{{ $t('actionItem.commitedText', commitedTextParams) }}
		</p>
		<button
			class="h-12 w-fit rounded px-4 py-2 font-medium transition-all"
			:class="[buttonBaseClasses, buttonHoverClasses]"
			type="button"
			@click="redoAction"
		>
			{{ $t('actionItem.redoButtonText') }}
		</button>
	</div>
</template>

<style scoped></style>
