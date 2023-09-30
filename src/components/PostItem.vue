<script setup lang="ts">
import type PostItem from '@/types/PostItem';

interface Props {
	post: PostItem;
}

defineProps<Props>();
</script>

<template>
	<div class="my-2 flex h-20 items-center rounded bg-white px-2 font-light shadow-lg">
		{{ post.title }}
	</div>
</template>

<style scoped></style>
