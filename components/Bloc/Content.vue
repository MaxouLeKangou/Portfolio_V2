<template>
	<section class="flex flex-col gap-10 lg:gap-16">
		<div class="flex flex-col gap-5 font-semibold">
			<h2>{{ data?.title }}</h2>
			<p class="text-lg leading-current lg:text-desk-lg lg:leading-main">
				<span>{{ beforeWord }}</span>
				<span class="text-primary">{{ currentWord }}</span>
				<span>{{ afterWord }}</span>
			</p>
		</div>
		<Word :title="data?.letTitle" v-model="currentWord"/>
	</section>
</template>

<script setup lang="ts">
const props = defineProps({
	data: Object,
});

const splitContent = props?.data?.content?.split(/{.*?}/);
const beforeWord = splitContent?.[0] || '';
const afterWord = splitContent?.[1] || '';

const currentWord = ref(props?.data?.letValue);
</script>