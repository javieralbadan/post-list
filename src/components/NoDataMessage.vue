<script setup lang="ts">
import IconWarning from '@/components/icons/IconWarning.vue';

interface Props {
	keyLocaleText: string;
}

const props = defineProps<Props>();
const { keyLocaleText = 'app.noData' } = props;
</script>

<template>
	<div class="m-6 mx-auto flex w-fit flex-col items-center justify-center rounded bg-white p-6">
		<IconWarning class="m-4 h-16 w-16" />
		{{ $t(keyLocaleText) }}
	</div>
</template>

<style scoped></style>
