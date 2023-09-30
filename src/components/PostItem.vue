<script setup lang="ts">
import type PostItem from '@/types/PostItem';

interface Props {
    post: PostItem;
}

defineProps<Props>();
</script>

<template>
    <div class="h-20 px-2 my-2 flex items-center rounded shadow-lg bg-white">{{ post.title }}</div>
</template>

<style scoped></style>
