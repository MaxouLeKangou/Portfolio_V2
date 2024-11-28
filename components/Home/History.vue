<template>
	<section class="flex flex-col gap-5">
		<h2 class="md:text-center">HISTORY</h2>
		<SliceZone wrapper="div" :slices="document?.data?.slices ?? []" :components="components"/>
	</section>
</template>

<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: document } = useAsyncData('history', () =>
  	prismic.client.getSingle('history')
);
</script>