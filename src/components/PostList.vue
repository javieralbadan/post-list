<script setup lang="ts">
import PostItem from '@/components/PostItem.vue';
import { getPosts } from '@/services/posts';

const posts = getPosts(); 
</script>

<template>
	<div class="flex flex-col">
		<h1 class="text-xl">Post List component</h1>
		<PostItem v-for="item in posts" :key="item.id" :post="item" />
	</div>
</template>

<style scoped></style>
