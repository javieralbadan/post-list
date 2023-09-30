<script setup lang="ts">
import ActionItem from '@/components/ActionItem.vue';
import { useHistoryStore } from '@/stores/history';

const store = useHistoryStore();
</script>

<template>
	<div class="flex flex-col rounded shadow-lg">
		<h1 class="text-lg p-4 bg-white">Actions History component</h1>
		<div class="p-4 bg-gray-100">

			<ActionItem v-for="(item, index) in store.actions" :key="item.id" :action="item" class="shadow-lg"
				:index="index" :isLastItem="index + 1 === store.actions.length" />
		</div>
	</div>
</template>

<style scoped></style>
