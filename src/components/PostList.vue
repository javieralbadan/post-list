<script setup lang="ts">
import type PostItemInterface from '@/types/PostItem';
import PostItem from '@/components/PostItem.vue';
import { getPosts } from '@/services/posts';

const posts: PostItemInterface[] = await getPosts(5);
</script>

<template>
    <div class="flex flex-col">
        <h1 class="text-xl text-white">{{ $t('app.title') }}</h1>
        <template v-if="!posts.length">
            {{ $t('app.noData') }}
        </template>
        <PostItem
            v-for="(item, index) in posts"
            :key="item.id"
            :index="index"
            :isLastItem="posts.length === index + 1"
            :post="item"
        />
    </div>
</template>

<style scoped></style>
