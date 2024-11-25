<template>
	<section class="flex flex-col gap-5">
		<h2 class="text-center">EXPERTISES</h2>
		<SliceZone wrapper="div" :slices="document?.data?.slices ?? []" :components="components"/>
	</section>
</template>

<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: document } = useAsyncData('skills', () =>
  	prismic.client.getSingle('skills')
);
</script>