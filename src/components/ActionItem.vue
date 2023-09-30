<script setup lang="ts">
import type ActionItem from '@/types/ActionItem';

interface Props {
	action: ActionItem;
	index: number;
	isLastItem: boolean;
}

const props = defineProps<Props>();

const localeProps = {
	postTitle: props.action.post.title,
	indexFrom: props.action.indexFrom,
	indexTo: props.action.indexTo,
};
</script>

<template>
	<div
		class="flex items-center justify-between border border-gray-100 bg-white px-2"
		:class="{ 'rounded-t-lg': index === 0, 'rounded-b-lg': isLastItem }"
	>
		<p class="flex h-16 items-center py-2 text-base font-light text-gray-700">
			{{ $t('actionItem.commitedText', localeProps) }}
		</p>
		<button
			class="h-12 w-fit rounded bg-emerald-400 px-4 py-2 font-bold text-white hover:bg-emerald-600"
			type="button"
		>
			{{ $t('actionItem.redoButtonText') }}
		</button>
	</div>
</template>

<style scoped></style>
