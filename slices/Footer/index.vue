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
</script>

<template>
    <div :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="pt-24 pb-10 text-center">
        <div class="flex flex-col gap-5 uppercase">
            <p class="text-base tracking-second">CLICK ON MY MAIL TO CONTACT ME!</p>
            <p class="font-anton text-lg text-primary">
                <NuxtLink :to="'mailto:' + (slice.primary.email || '')">{{ slice?.primary?.email }}</NuxtLink>
            </p>
        </div>

        <ul class="flex justify-center gap-7 my-10">
            <li v-for="social of slice?.primary?.socials">
                <p class="w-12 h-12 bg-background-200 rounded-md">
                    <NuxtLink :to="social.link || ''" class="w-full h-full flex justify-center items-center">
                        <NuxtImg :src="social?.icon?.url || ''" class="w-5 h-5"/>
                    </NuxtLink>
                </p>
            </li>
        </ul>

        <p class="flex flex-col text-sm text-white-300">
            <span>© 2024 MAXIME LEGRAND</span>
            <span>All rights reserved.</span>
        </p>
    </div>
</template>
