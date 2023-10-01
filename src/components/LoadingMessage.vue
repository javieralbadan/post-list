<script setup lang="ts">
import IconLoading from '@/components/icons/IconLoading.vue';
</script>

<template>
	<div class="m-6 flex flex-col p-6 w-fit mx-auto items-center justify-center">
        <IconLoading class="w-16 h-16 m-4 animate-spin" />
		{{ $t('app.loading') }}
	</div>
</template>

<style scoped></style>
