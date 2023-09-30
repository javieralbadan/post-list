<script setup lang="ts">
import type ActionItem from '@/types/ActionItem';

interface Props {
    action: ActionItem;
    index: number;
    isLastItem: boolean;
}

defineProps<Props>();

</script>

<template>
    <div class="border border-gray-100 bg-white" :class="{ 'rounded-t-lg': index === 0, 'rounded-b-lg': isLastItem }">
        <p class="h-16 flex items-center p-2 text-gray-700 text-base">{{ action.id }}</p>
    </div>
</template>

<style scoped></style>
