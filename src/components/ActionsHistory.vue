<script setup lang="ts">
import ActionItem from '@/components/ActionItem.vue';
import NoDataMessage from '@/components/NoDataMessage.vue';
import { useHistoryStore } from '@/stores/history';

const store = useHistoryStore();
const { actions } = store;
</script>

<template>
	<div class="flex h-fit flex-col rounded shadow-lg">
		<h2 class="rounded-t bg-white p-4 text-lg">{{ $t('actionsHistory.title') }}</h2>
		<div v-auto-animate class="rounded-b bg-gray-100 p-4">
			<NoDataMessage v-if="!actions.length" key-locale-text="actionsHistory.noData" />
			<ActionItem
				v-for="(item, index) in actions"
				:key="item.id"
				:action="item"
				class="action-item"
				:index="index"
				:isLastItem="actions.length === index + 1"
			/>
		</div>
	</div>
</template>

<style scoped></style>
