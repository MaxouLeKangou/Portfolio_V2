<template>
	<p class="text-base text-white-300 lg:text-desk-base">
		<span>let {{ title }} = "</span>
		<label :for="title" class="sr-only">Enter a custom word</label>
		<input
			:id="title"
			type="text"
			:value="modelValue"
			@input="$emit('update:modelValue', $event?.target?.value)"
			class="animate-pulse max-w-full w-32 text-white-100 bg-background-100 focus:outline-0 lg:w-52"
		/>
		<span>"</span>
	</p>
</template>

<script setup lang="ts">
defineProps({
	title: String,
	modelValue: String,
});

const emit = defineEmits(['update:modelValue']);
</script>
