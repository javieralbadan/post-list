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
    <div class="flex justify-between items-center px-2 border border-gray-100 bg-white"
        :class="{ 'rounded-t-lg': index === 0, 'rounded-b-lg': isLastItem }">
        <p class="h-16 flex items-center py-2 text-gray-700 text-base font-light">
            {{ $t('actionItem.commitedText', localeProps) }}
        </p>
        <button class="w-fit h-12 bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded" type="button">
            {{ $t('actionItem.redoButtonText') }}
        </button>
    </div>
</template>

<style scoped></style>
