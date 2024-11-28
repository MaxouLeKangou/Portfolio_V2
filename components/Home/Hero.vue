<template>
	<section class="min-h-screen grid grid-rows-6 gap-3 lg:grid-rows-8">
		<Header class=""/>

		<div class="row-span-6 flex flex-col gap-5 justify-center text-center uppercase lg:gap-10">
			<h1 class="text-base font-semibold tracking-second lg:text-desk-base">maxime legrand</h1>
			<div class="text-2xl font-poppins font-bold leading-main lg:text-desk-2xl lg:leading-desk-main">
				<p>MAKING</p>
				<p v-for="word of splitWords" class="text-primary">
					{{ word }}
				</p>
				<p>SINCE</p>
				<p>2022</p>
			</div>
		</div>

		<div class="flex flex-col justify-end mb-10">
			<Word title="baguette" v-model="word"/>
		</div>
	</section>
</template>

<script setup lang="ts">
const word = ref('neat things');

const splitWords = computed(() => {
	return word.value.split(' ');
});
</script>