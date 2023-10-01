<script setup lang="ts">
import ActionItem from '@/components/ActionItem.vue';
import { useHistoryStore } from '@/stores/history';

const store = useHistoryStore();
</script>

<template>
	<div class="flex flex-col rounded shadow-lg">
		<h1 class="bg-white p-4 text-lg">{{ $t('actionsHistory.title') }}</h1>
		<div class="bg-gray-100 p-2">
			<ActionItem
				v-for="(item, index) in store.actions"
				:key="item.id"
				:action="item"
				class="shadow-lg"
				:index="index"
				:isLastItem="store.actions.length === index + 1"
			/>
		</div>
	</div>
</template>

<style scoped></style>
