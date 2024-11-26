<script setup lang="ts">
import { type Content } from "@prismicio/client";

defineProps(
    getSliceComponentProps<Content.SkillsSlice>([
        "slice",
        "index",
        "slices",
        "context",
    ])
);
</script>

<template>
    <ul :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="grid grid-cols-2 gap-3">
        <li v-for="skill of slice.primary.skills" class="relative flex flex-col justify-center gap-4 items-center h-28 w-full bg-background-200 rounded-xl">
            <NuxtImg :src="skill.icon.url ?? ''" class="w-9 h-9"/>
            <h4 class="uppercase text-sm tracking-first">
                <nuxt-link :to="skill.link ?? '#'" class="before:content-[''] before:absolute before:inset-0">{{ skill.name }}</nuxt-link>
            </h4>
        </li>
    </ul>
</template>
