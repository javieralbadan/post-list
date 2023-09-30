<script setup lang="ts">
import PostList from './components/PostList.vue';
import ActionsHistory from './components/ActionsHistory.vue';
</script>

<template>
	<main class="w-full max-w-4xl flex flex-wrap mx-auto py-6 flex-col sm:flex-row">
		<PostList class="w-full sm:w-1/2 pr-8" />
		<ActionsHistory class="w-full sm:w-1/2" />
	</main>
</template>

<style scoped></style>
