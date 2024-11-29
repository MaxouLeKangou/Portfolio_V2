<script setup lang="ts">
import { type Content } from "@prismicio/client";

defineProps(
    getSliceComponentProps<Content.FooterSlice>([
        "slice",
        "index",
        "slices",
        "context",
    ])
);

const hoverIndex = ref<number | null>(null);
</script>

<template>
    <div :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="pt-24 pb-10 text-center lg:pt-10">
        <div class="flex flex-col gap-5 uppercase">
            <p class="text-base font-semibold tracking-second lg:text-desk-base">CLICK ON MY MAIL TO CONTACT ME!</p>
            <p class="animation font-anton text-lg text-primary md:text-xl lg:text-desk-lg">
                <NuxtLink aria-label="my mail" :to="'mailto:' + (slice.primary.email || '')">{{ slice?.primary?.email }}</NuxtLink>
            </p>
        </div>

        <ul class="flex justify-center gap-7 my-10 lg:my-14">
            <li v-for="(social, index) of slice?.primary?.socials" class="transition-all" :class="{ 'opacity-50': hoverIndex !== index && hoverIndex !== null }" @mouseenter="hoverIndex = index" @mouseleave="hoverIndex = null">
                <p class="w-12 h-12 bg-background-200 rounded-md lg:w-16 lg:h-16">
                    <NuxtLink aria-label="Visit my social media" :to="social.link || ''" class="w-full h-full flex justify-center items-center">
                        <NuxtImg :src="social?.icon?.url || ''" alt="" class="w-5 h-5 lg:w-7 lg:h-7"/>
                    </NuxtLink>
                </p>
            </li>
        </ul>

        <p class="flex flex-col text-sm text-white-300 lg:text-desk-sm">
            <span>© 2024 MAXIME LEGRAND</span>
            <span>All rights reserved.</span>
        </p>
    </div>
</template>