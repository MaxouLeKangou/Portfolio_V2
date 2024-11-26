<template>
	<SliceZone wrapper="footer" :slices="document?.data?.slices ?? []" :components="components"/>
</template>

<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: document } = useAsyncData('footer', () =>
  	prismic.client.getSingle('footer')
);
</script>