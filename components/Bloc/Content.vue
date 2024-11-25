<template>
	<section class="flex flex-col gap-10">
		<div class="flex flex-col gap-5 font-semibold">
			<h2>{{ title }}</h2>
			<p class="text-lg leading-current">
				<span>{{ beforeWord }}</span>
				<span class="text-primary">{{ currentWord }}</span>
				<span>{{ afterWord }}</span>
			</p>
		</div>
		<Word :title="letTitle" v-model="currentWord"/>
	</section>
</template>

<script setup lang="ts">
const props = defineProps({
	title: String,
	content: String,
	letTitle: String,
	letValue: String,
});

const splitContent = props?.content?.split(/{.*?}/);
const beforeWord = splitContent?.[0] || '';
const afterWord = splitContent?.[1] || '';

const currentWord = ref(props.letValue);
</script>