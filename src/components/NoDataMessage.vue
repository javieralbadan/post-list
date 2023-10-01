<script setup lang="ts">
import IconWarning from '@/components/icons/IconWarning.vue';

interface Props {
	keyLocaleText: string;
}

const props = defineProps<Props>();
const { keyLocaleText = 'app.noData' } = props;
</script>

<template>
	<div class="m-6 flex flex-col p-6 w-fit mx-auto items-center justify-center rounded bg-white">
        <IconWarning class="w-16 h-16 m-4" />
		{{ $t(keyLocaleText) }}
	</div>
</template>

<style scoped></style>
