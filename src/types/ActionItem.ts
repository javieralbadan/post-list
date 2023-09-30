import type PostItem from '@/types/PostItem';

export default interface ActionItem {
    id: number;
    indexFrom: number;
    indexTo: number;
    post: PostItem;
};
