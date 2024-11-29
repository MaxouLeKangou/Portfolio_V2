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
    <ul :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 max-w-[1000px] mx-auto lg:gap-5">
        <li v-for="skill of slice.primary.skills" class="relative flex flex-col justify-center gap-4 items-center h-28 w-full bg-background-200 rounded-xl lg:h-36">
            <NuxtImg :src="skill.icon.url ?? ''" alt="" class="w-9 h-9 lg:w-14 lg:h-14"/>
            <p class="uppercase text-sm tracking-first lg:text-desk-sm">
                <nuxt-link :aria-label="`Visit ${skill.name}`" :to="skill.link ?? '#'" class="before:content-[''] before:absolute before:inset-0">{{ skill.name }}</nuxt-link>
            </p>
        </li>
    </ul>
</template>
