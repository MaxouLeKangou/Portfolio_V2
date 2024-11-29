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
    <ul :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="md:grid md:grid-cols-2 md:gap-5 max-w-[1000px] mx-auto">
        <li v-for="history of slice.primary.history" class="relative flex items-center gap-5 w-full h-28 px-3 sm:border-b sm:border-white-300/25 lg:h-40 lg:px-5">
            <div class="flex justify-center items-center w-14 h-14 bg-background-200 rounded-xl lg:w-20 lg:h-20">
                <NuxtImg :src="history.icon.url ?? ''" :alt="history.company ?? ''" class="w-7 h-7 lg:w-10 lg:h-10"/>
            </div>

            <div class="flex flex-col gap-0.5">
                <h3 class="text-base lg:text-desk-base">
                    <span>{{ history.role }} at </span>
                    <span class="uppercase font-bold">{{ history.company }}</span>
                </h3>

                <p class="text-white-200 text-sm font-extralight lg:text-desk-sm">
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
    @apply content-[''] absolute w-screen h-px left-[-1.25rem] bottom-0 bg-white-300/25 sm:content-none
}
</style>