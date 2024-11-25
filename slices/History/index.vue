<script setup lang="ts">
import { type Content } from "@prismicio/client";

defineProps(
    getSliceComponentProps<Content.HistorySlice>([
        "slice",
        "index",
        "slices",
        "context",
    ])
);

function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });
}

</script>

<template>
    <ul :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <li v-for="history of slice.primary.history" class="relative flex items-center gap-5 w-full h-28 pl-3">
            <div class="flex justify-center items-center w-14 h-14 bg-background-200 rounded-xl">
                <NuxtImg :src="history.icon.url ?? ''" class="w-7 h-7"/>
            </div>

            <div class="flex flex-col gap-0.5">
                <h3 class="text-base">
                    <span>{{ history.role }} at </span>
                    <span class="uppercase font-bold">{{ history.company }}</span>
                </h3>

                <p class="text-white-200 text-sm font-extralight">
                    <span>{{ history?.start_job ? formatDate(history.start_job) : '' }}</span>
                     - 
                    <span v-if="history?.leave_job">{{ history?.leave_job ? formatDate(history.leave_job) : '' }}</span>
                    <span v-else>present</span>
                </p>
            </div>
        </li>
    </ul>
</template>

<style scoped>
li::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 1px;
    left: -1.25rem;
    bottom: 0;

    @apply bg-white-300/25
}
</style>