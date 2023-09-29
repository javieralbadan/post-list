<script setup lang="ts">
import PostList from './components/PostList.vue';
import ActionsHistory from './components/ActionsHistory.vue';
</script>

<template>
	<main class="flex flex-wrap">
		<PostList class="w-full lg:w-1/2" />
		<ActionsHistory class="w-full lg:w-1/2" />
	</main>
</template>

<style scoped></style>
