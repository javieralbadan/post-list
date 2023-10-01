<script setup lang="ts">
import PostList from './components/PostList.vue';
import ActionsHistory from './components/ActionsHistory.vue';
</script>

<template>
	<Suspense>
		<main class="mx-auto flex w-full max-w-4xl flex-col flex-wrap py-6 sm:flex-row">
			<PostList class="w-full pr-8 sm:w-3/6" />
			<ActionsHistory class="w-full sm:w-3/6" />
		</main>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<style scoped></style>
