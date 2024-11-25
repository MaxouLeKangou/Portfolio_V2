<template>
	<section>
		<SliceZone wrapper="main" :slices="document?.data?.slices ?? []" :components="components"/>
	</section>
</template>

<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: document } = useAsyncData('skills', () =>
  	prismic.client.getSingle('skills')
);
</script>