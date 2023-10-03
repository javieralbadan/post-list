<script setup lang="ts">
import IconLoading from '@/components/icons/IconLoading.vue';
</script>

<template>
	<div class="loading m-6 mx-auto flex w-fit flex-col items-center justify-center p-6 text-center">
		<IconLoading class="m-4 h-16 w-16 animate-spin" />
		{{ $t('app.loading') }}
	</div>
</template>

<style scoped></style>
